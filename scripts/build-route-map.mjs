/**
 * Generate assets/route-map.svg from Natural Earth South Island + verified station coordinates.
 * Dependencies are for this script only; the published site does not load d3.
 *
 * Usage: npm install && npm run build:route-map
 * Optional: OVERLAY=1 npm run build:route-map  (writes /workspace/ui-mockup/v4/route-overlay.*)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { geoMercator, geoPath, geoContains } from 'd3-geo';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'scripts', 'route-map');
const outSvg = join(root, 'assets', 'route-map.svg');
const overlayDir = process.env.OVERLAY_DIR || '/workspace/ui-mockup/v4';

const island = JSON.parse(readFileSync(join(dataDir, 'south-island.geojson'), 'utf8'));
const catalog = JSON.parse(readFileSync(join(dataDir, 'stations.json'), 'utf8'));
const labelConfig = JSON.parse(readFileSync(join(dataDir, 'labels.json'), 'utf8'));

const { width, height, pad } = labelConfig.viewBox;
const projection = geoMercator().fitExtent([[pad, pad], [width - pad, height - pad]], island);
const path = geoPath(projection);
const coastD = path(island);
if (!coastD) throw new Error('Failed to project South Island coastline');

const points = new Map();
for (const station of catalog.stations) {
  const xy = projection([station.lon, station.lat]);
  if (!xy) throw new Error(`Projection failed for ${station.id}`);
  points.set(station.id, { ...station, x: xy[0], y: xy[1], role: 'station' });
}
for (const waypoint of catalog.waypoints) {
  const xy = projection([waypoint.lon, waypoint.lat]);
  if (!xy) throw new Error(`Projection failed for ${waypoint.id}`);
  points.set(waypoint.id, { ...waypoint, x: xy[0], y: xy[1] });
}

function lookup(id) {
  const point = points.get(id);
  if (!point) throw new Error(`Unknown route point: ${id}`);
  return point;
}

const southGeom = island.geometry;
function segmentOffshore(a, b, samples = 60) {
  const off = [];
  for (let i = 1; i < samples; i++) {
    const t = i / samples;
    const lon = a.lon + (b.lon - a.lon) * t;
    const lat = a.lat + (b.lat - a.lat) * t;
    if (!geoContains(southGeom, [lon, lat])) off.push({ t, lon, lat, from: a.id, to: b.id });
  }
  return off;
}

const landIssues = [];
for (const [kind, ids] of Object.entries(catalog.routes)) {
  for (let i = 0; i < ids.length - 1; i++) {
    const a = lookup(ids[i]);
    const b = lookup(ids[i + 1]);
    const off = segmentOffshore(a, b);
    // Allow the last sliver of the Milford spur: the airport sits ~2 km outside the
    // simplified 10m polygon at the head of the fiord, but the segment itself stays on land.
    const allowed = kind === 'spur' && b.id === 'milford' && off.length === 0;
    if (off.length && !(kind === 'spur' && b.id === 'milford' && off.every((p) => p.t > 0.95))) {
      landIssues.push({ kind, from: a.id, to: b.id, count: off.length, first: off[0], last: off.at(-1) });
    }
    void allowed;
  }
}
if (landIssues.length) {
  console.error('Route segments leave land:');
  for (const issue of landIssues) console.error(' ', issue);
  throw new Error('Route crosses the sea; add or adjust a via waypoint and rerun.');
}

function linePath(ids) {
  return ids.map((id, i) => {
    const { x, y } = lookup(id);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' ');
}

function defaultText(station) {
  const days = station.days.map((d) => `D${d}`).join('／');
  return `${days} ${station.nameZh}`;
}

function estimateTextWidth(text, fontSize) {
  let width = 0;
  for (const char of text) {
    const code = char.codePointAt(0);
    const wide = (code >= 0x2E80 && code <= 0x9FFF) || (code >= 0xF900 && code <= 0xFAFF);
    width += wide ? fontSize : fontSize * 0.62;
  }
  return width;
}

function labelLayout(presetName) {
  const preset = labelConfig[presetName];
  const fontSize = labelConfig.font[presetName];
  const items = [];
  for (const station of catalog.stations) {
    const point = lookup(station.id);
    const spec = preset[station.id];
    if (!spec) throw new Error(`Missing ${presetName} label for ${station.id}`);
    const text = spec.text || defaultText(station);
    const lx = point.x + spec.dx;
    const ly = point.y + spec.dy;
    const textW = estimateTextWidth(text, fontSize);
    const boxH = fontSize * 1.7;
    const boxW = textW + fontSize * 0.7;
    const anchor = spec.side === 'left' ? 'end' : spec.side === 'right' ? 'start' : 'middle';
    let boxX = lx - boxW / 2;
    if (anchor === 'start') boxX = lx - fontSize * 0.25;
    if (anchor === 'end') boxX = lx - boxW + fontSize * 0.25;
    const boxY = ly - boxH * 0.7;
    const leader = elbow(point, { x: lx, y: ly, side: spec.side });
    items.push({
      id: station.id,
      href: station.href,
      text,
      fontSize,
      anchor,
      lx,
      ly,
      box: { x: boxX, y: boxY, w: boxW, h: boxH },
      leader,
      point,
      aria: `${text}（${station.nameEn}）`,
    });
  }
  return items;
}

function elbow(from, to) {
  const { side } = to;
  if (side === 'left' || side === 'right') {
    return `M${from.x.toFixed(2)} ${from.y.toFixed(2)} L${to.x.toFixed(2)} ${from.y.toFixed(2)} L${to.x.toFixed(2)} ${to.y.toFixed(2)}`;
  }
  return `M${from.x.toFixed(2)} ${from.y.toFixed(2)} L${from.x.toFixed(2)} ${to.y.toFixed(2)} L${to.x.toFixed(2)} ${to.y.toFixed(2)}`;
}

function boxesOverlap(a, b, gap = 3) {
  return a.x < b.x + b.w + gap && a.x + a.w + gap > b.x && a.y < b.y + b.h + gap && a.y + a.h + gap > b.y;
}

function pointInBox(px, py, box, margin = 6) {
  return px > box.x - margin && px < box.x + box.w + margin && py > box.y - margin && py < box.y + box.h + margin;
}

function parseLeader(d) {
  const nums = [...d.matchAll(/-?\d+\.?\d*/g)].map(Number);
  const pts = [];
  for (let i = 0; i < nums.length; i += 2) pts.push({ x: nums[i], y: nums[i + 1] });
  const segs = [];
  for (let i = 0; i < pts.length - 1; i++) segs.push([pts[i], pts[i + 1]]);
  return segs;
}

function segsIntersect(a, b, c, d) {
  function cross(p, q, r) {
    return (r.x - q.x) * (p.y - q.y) - (r.y - q.y) * (p.x - q.x);
  }
  function on(p, q, r) {
    return Math.min(p.x, r.x) - 1e-6 <= q.x && q.x <= Math.max(p.x, r.x) + 1e-6
      && Math.min(p.y, r.y) - 1e-6 <= q.y && q.y <= Math.max(p.y, r.y) + 1e-6;
  }
  const d1 = cross(a, c, d), d2 = cross(b, c, d), d3 = cross(c, a, b), d4 = cross(d, a, b);
  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) return true;
  if (Math.abs(d1) < 1e-8 && on(c, a, d)) return true;
  if (Math.abs(d2) < 1e-8 && on(c, b, d)) return true;
  if (Math.abs(d3) < 1e-8 && on(a, c, b)) return true;
  if (Math.abs(d4) < 1e-8 && on(a, d, b)) return true;
  return false;
}

function checkLabels(items, presetName) {
  const errors = [];
  for (const item of items) {
    const { box } = item;
    if (box.x < 2 || box.y < 2 || box.x + box.w > width - 2 || box.y + box.h > height - 2) {
      errors.push(`${presetName}/${item.id}: label leaves the viewBox (${box.x.toFixed(1)},${box.y.toFixed(1)} ${box.w.toFixed(1)}×${box.h.toFixed(1)})`);
    }
    for (const station of catalog.stations) {
      const p = lookup(station.id);
      if (pointInBox(p.x, p.y, box, 6)) {
        errors.push(`${presetName}/${item.id}: label covers station ${station.id}`);
      }
    }
  }
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (boxesOverlap(items[i].box, items[j].box)) {
        errors.push(`${presetName}: labels overlap ${items[i].id} × ${items[j].id}`);
      }
    }
  }
  const leaders = items.map((item) => ({ id: item.id, segs: parseLeader(item.leader) }));
  for (let i = 0; i < leaders.length; i++) {
    for (let j = i + 1; j < leaders.length; j++) {
      for (const [a, b] of leaders[i].segs) {
        for (const [c, d] of leaders[j].segs) {
          // Ignore a shared start if two leaders somehow share a point (they should not).
          const shareEnd = [a, b].some((p) => [c, d].some((q) => Math.hypot(p.x - q.x, p.y - q.y) < 0.4));
          if (shareEnd) continue;
          if (segsIntersect(a, b, c, d)) {
            errors.push(`${presetName}: leaders cross ${leaders[i].id} × ${leaders[j].id}`);
          }
        }
      }
    }
  }
  return errors;
}

const desktop = labelLayout('desktop');
const mobile = labelLayout('mobile');
const checkErrors = [...checkLabels(desktop, 'desktop'), ...checkLabels(mobile, 'mobile')];
if (checkErrors.length) {
  console.error('Label checks failed:');
  for (const error of checkErrors) console.error(' ', error);
  throw new Error(`${checkErrors.length} label check(s) failed; edit scripts/route-map/labels.json and rerun.`);
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function labelsGroup(items, variant) {
  const leaders = items.map((item) => `    <path class="route-map__leader" d="${item.leader}" />`).join('\n');
  const labels = items.map((item) => `    <a href="${escapeXml(item.href)}" class="route-map__stop" aria-label="${escapeXml(item.aria)}">
      <title>${escapeXml(item.aria)}</title>
      <rect class="route-map__label-bg" x="${item.box.x.toFixed(2)}" y="${item.box.y.toFixed(2)}" width="${item.box.w.toFixed(2)}" height="${item.box.h.toFixed(2)}" rx="2" />
      <text class="route-map__label" x="${item.lx.toFixed(2)}" y="${item.ly.toFixed(2)}" text-anchor="${item.anchor}" font-size="${item.fontSize}">${escapeXml(item.text)}</text>
    </a>`).join('\n');
  return `  <g class="route-map__annos route-map__annos--${variant}" ${variant === 'mobile' ? 'display="none"' : ''}>
${leaders}
${labels}
  </g>`;
}

function stationDots() {
  return catalog.stations.map((station) => {
    const p = lookup(station.id);
    const aria = defaultText(station);
    return `    <a href="${escapeXml(station.href)}" class="route-map__stop" aria-label="${escapeXml(aria)}">
      <title>${escapeXml(aria)}</title>
      <circle class="route-map__dot" cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="3.2" />
    </a>`;
  }).join('\n');
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="routeMapTitle routeMapDesc">
  <title id="routeMapTitle">南島 11 天環島路線</title>
  <desc id="routeMapDesc">以南島真實海岸線與核實過的城鎮經緯度，用同一套 Mercator 投影繪製。基督城為起點與終點；米佛峽灣為從蒂阿瑙出發的支線。點選站名或圓點進入當天行程。此圖由 scripts/build-route-map.mjs 產生，請勿手改座標。</desc>
  <path class="route-map__coast" d="${coastD}" />
  <path class="route-map__line" d="${linePath(catalog.routes.loop)}" />
  <path class="route-map__line route-map__line--spur" d="${linePath(catalog.routes.spur)}" />
  <g class="route-map__stations">
${stationDots()}
  </g>
${labelsGroup(desktop, 'desktop')}
${labelsGroup(mobile, 'mobile')}
</svg>
`;

mkdirSync(dirname(outSvg), { recursive: true });
writeFileSync(outSvg, svg);
console.log(`Wrote ${outSvg}`);
console.log('Label checks: desktop and mobile passed.');
console.log('Stations (projected):');
for (const station of catalog.stations) {
  const p = lookup(station.id);
  const inside = geoContains(southGeom, [station.lon, station.lat]);
  console.log(`  ${station.id.padEnd(14)} ${station.lat.toFixed(6)}, ${station.lon.toFixed(6)}  →  ${p.x.toFixed(1)}, ${p.y.toFixed(1)}  land=${inside}`);
}

if (process.env.OVERLAY === '1') {
  await buildOverlay();
}

async function buildOverlay() {
  const zoom = Number(process.env.OVERLAY_ZOOM || 8);
  const n = 2 ** zoom;
  function lonToTile(lon) { return (lon + 180) / 360 * n; }
  function latToTile(lat) {
    const rad = lat * Math.PI / 180;
    return (1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2 * n;
  }
  const [minLon, minLat, maxLon, maxLat] = island.properties.bbox;
  const padDeg = 0.35;
  const west = minLon - padDeg, east = maxLon + padDeg, south = minLat - padDeg, north = Math.min(-40.1, maxLat + padDeg);
  const x0 = Math.floor(lonToTile(west));
  const x1 = Math.floor(lonToTile(east));
  const y0 = Math.floor(latToTile(north));
  const y1 = Math.floor(latToTile(south));
  const { default: { get } } = await import('node:https');
  const { default: { Agent } } = await import('node:https');
  const agent = new Agent({ keepAlive: true });
  const cacheDir = join(dataDir, 'cache', 'osm', String(zoom));
  mkdirSync(cacheDir, { recursive: true });

  function fetchTile(x, y) {
    const file = join(cacheDir, `${x}-${y}.png`);
    if (existsSync(file)) return Promise.resolve(file);
    const url = `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
    return new Promise((resolve, reject) => {
      const req = get(url, {
        agent,
        headers: { 'User-Agent': 'NZ-trip-route-map-overlay/1.0 (local QA; not a public tile proxy)' },
      }, (res) => {
        if (res.statusCode !== 200) { reject(new Error(`${url} → ${res.statusCode}`)); res.resume(); return; }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          const buf = Buffer.concat(chunks);
          writeFileSync(file, buf);
          resolve(file);
        });
      });
      req.on('error', reject);
    });
  }

  const tiles = [];
  for (let x = x0; x <= x1; x++) {
    for (let y = y0; y <= y1; y++) tiles.push({ x, y });
  }
  console.log(`Fetching ${tiles.length} OSM tiles at z${zoom}...`);
  for (const tile of tiles) {
    tile.file = await fetchTile(tile.x, tile.y);
  }

  // Project tile corners with the SAME projection as the site map, then
  // also produce a standalone overlay canvas in web-mercator pixel space.
  const scale = 256; // output pixels per tile
  const outW = (x1 - x0 + 1) * scale;
  const outH = (y1 - y0 + 1) * scale;
  function overlayXY(lon, lat) {
    return [(lonToTile(lon) - x0) * scale, (latToTile(lat) - y0) * scale];
  }

  // Build an SVG overlay on top of the tile mosaic, then rasterize with a short HTML file.
  const overlayCoast = [];
  const ring = island.geometry.coordinates[0];
  for (const [lon, lat] of ring) {
    const [x, y] = overlayXY(lon, lat);
    overlayCoast.push(`${overlayCoast.length ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  overlayCoast.push('Z');

  function overlayLine(ids) {
    return ids.map((id, i) => {
      const p = lookup(id);
      const [x, y] = overlayXY(p.lon, p.lat);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  }

  const tileImages = tiles.map((tile, i) => {
    const href = tile.file;
    const x = (tile.x - x0) * scale;
    const y = (tile.y - y0) * scale;
    return `<image href="${href}" x="${x}" y="${y}" width="${scale}" height="${scale}" />`;
  }).join('\n');

  const stationMarks = catalog.stations.map((station) => {
    const [x, y] = overlayXY(station.lon, station.lat);
    const label = defaultText(station);
    const side = labelConfig.desktop[station.id].side;
    const anchor = side === 'left' ? 'end' : 'start';
    const tx = side === 'left' ? x - 10 : x + 10;
    return `<g>
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="#c0392b" stroke="white" stroke-width="2" />
      <text x="${tx.toFixed(1)}" y="${(y - 2).toFixed(1)}" text-anchor="${anchor}" font-family="Noto Sans TC, sans-serif" font-size="16" font-weight="700" fill="#1b2321" stroke="white" stroke-width="4" paint-order="stroke">${escapeXml(label)}</text>
    </g>`;
  }).join('\n');

  const credit = `Coastline: Natural Earth 10m (public domain). Tiles © OpenStreetMap contributors. Stations: Nominatim/OSM, verified 2026-11-12. Same station coordinates and WGS84 as assets/route-map.svg; this sheet uses Web Mercator tiles for location proof.`;

  const overlaySvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${outW}" height="${outH + 48}" viewBox="0 0 ${outW} ${outH + 48}">
  <rect width="100%" height="100%" fill="#d8e0d8" />
  <g>${tileImages}</g>
  <path d="${overlayCoast.join(' ')}" fill="none" stroke="#1f5f6b" stroke-width="2" stroke-opacity="0.9" />
  <path d="${overlayLine(catalog.routes.loop)}" fill="none" stroke="#c0392b" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" />
  <path d="${overlayLine(catalog.routes.spur)}" fill="none" stroke="#c0392b" stroke-width="3" stroke-dasharray="8 6" stroke-linecap="round" />
  ${stationMarks}
  <rect x="0" y="${outH}" width="${outW}" height="48" fill="#f6f3ec" />
  <text x="12" y="${outH + 30}" font-family="Noto Sans TC, sans-serif" font-size="13" fill="#5a6360">${escapeXml(credit)}</text>
</svg>`;

  mkdirSync(overlayDir, { recursive: true });
  const overlaySvgPath = join(overlayDir, 'route-overlay.svg');
  writeFileSync(overlaySvgPath, overlaySvg);
  console.log('Wrote', overlaySvgPath, `${outW}×${outH + 48}`);
}
