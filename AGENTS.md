# 紐西蘭南島自駕行程網站

靜態 GitHub Pages 站（繁體中文）。供出發前與旅途中（尤其手機）快速查當天停靠點、地圖、住宿、餐廳與補給。

## 目錄
- `index.html`：首頁（路線圖 + 每日列表 + 一鍵列印）
- `days/day-01.html`–`day-11.html`：同一套每日模板，資料由 `app.js` 填入
- `rules.html`、`arrival.html`、`checklist.html`、`info.html`：全站分頁（交通法規、入境須知、行前清單、實用資訊）
- `app.js`：`days`、`structuredDays` 為行程資料來源；列印在 `setupItineraryPrint`
- `styles.css`：畫面與 `@media print` 分開；新畫面規則放在 `@media screen`
- `assets/`：每日照片與 `vendor/qrcode-generator`

## 不可改
- 不要改 `days`、`structuredDays` 的行程文案、座標、地圖 query（圖片路徑因壓縮更新除外）
- 不要破壞一鍵列印：`#printItinerary`、`#printItineraryContent`、QR、A4 每日一頁兩欄
- 不要 push、不要開 PR，除非使用者明確要求

## 設計
旅行手帳風格：紙底 `#f6f3ec`、墨色 `#1b2321`、唯一強調色 `#1f5f6b`。字體 Noto Serif TC + Noto Sans TC。點擊區 ≥44px。不要引入 React/Tailwind 或 tasteskill kit。

## 檢查
用本機靜態伺服器開頁，不要用 `file://`。列印：點一鍵列印後應產生 11 天並可 `window.print()`；導覽列不可出現在列印中。
