# 紐西蘭南島自駕行程網站

靜態 GitHub Pages 站（繁體中文）。供出發前與旅途中（尤其手機）快速查當天停靠點、地圖、住宿、餐廳與補給。

## 目錄
- `index.html`：首頁（路線圖 + 每日列表 + 一鍵列印）
- `days/day-01.html`–`day-11.html`：同一套每日模板，資料由 `app.js` 填入
- `rules.html`、`arrival.html`、`info.html`：全站分頁（交通法規、入境須知、實用資訊）
- `rules.html` 含路權圖解與六塊自駕規則；圖解互動在 `rules.js`。不要改案例文案、路徑座標或動畫時序。
- `app.js`：`days`、`structuredDays` 為行程資料來源；列印在 `setupItineraryPrint`
- `styles.css`：畫面與 `@media print` 分開；新畫面規則放在 `@media screen`
- `assets/`：每日照片、`route-map.svg`、`vendor/qrcode-generator`
- `scripts/build-route-map.mjs`：產生首頁路線圖

## 路線圖（禁止手改 SVG 座標）
首頁路線圖由 `npm run build:route-map` 產生為 `assets/route-map.svg`，再用同一套 WGS84 座標與 Mercator 投影繪製南島輪廓與站點。

- 海岸線：`scripts/route-map/south-island.geojson`，取自 Natural Earth 10m admin 0 countries（公有領域，https://www.naturalearthdata.com/about/terms-of-use/），只留南島主島多邊形。
- 站點經緯度：`scripts/route-map/stations.json`（Nominatim / OpenStreetMap，2026-11-12 核實）。這不是 `app.js` 裡 `days[].coords`（那是舊示意圖的 0–100 百分比，不是經緯度，請勿拿來畫地理圖，也請勿擅自改行程資料）。
- 站名位置與畫面裁切：只改 `scripts/route-map/labels.json` 的方向、偏移、`viewBox`（可為不對稱 `pad`）與 `focus`（裁掉北端留白、放大路線），然後重跑腳本。不要改 `stations.json` 的經緯度。腳本會檢查標籤不重疊、不壓站點、不超出 viewBox、引線不相交，且標籤方框與任何路線線段（含虛線支線）至少保持 `routeClearance`（預設 12）SVG 單位的間距。
- `focus` 只用於海岸線裁切與 `fitExtent`；陸地判斷與疊圖校對仍用完整南島。疊圖請用 `OVERLAY=1 npm run build:route-map`（預設寫到 `/workspace/ui-mockup/final/route-overlay.svg`）。
- 請勿手改 `assets/route-map.svg` 裡的座標或 path。

## 不可改
- 不要改 `days`、`structuredDays` 的行程文案、座標、地圖 query（圖片路徑因壓縮更新除外）
- 不要破壞一鍵列印：`#printItinerary`、`#printItineraryContent`、QR、A4 每日一頁兩欄
- 不要 push、不要開 PR，除非使用者明確要求

## 設計
旅行手帳風格：紙底 `#f6f3ec`、墨色 `#1b2321`、唯一強調色 `#1f5f6b`。字體 Noto Serif TC + Noto Sans TC。點擊區 ≥44px。不要引入 React/Tailwind 或 tasteskill kit。網站本身不載入 d3；`d3-geo` 只用於產生腳本。

## 檢查
用本機靜態伺服器開頁，不要用 `file://`。列印：點一鍵列印後應產生 11 天並可 `window.print()`；導覽列不可出現在列印中。改路線圖後執行 `npm run build:route-map`，確認腳本檢查通過。
