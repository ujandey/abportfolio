import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1568, height: 900 } });
await page.goto("http://localhost:5183/bio", { waitUntil: "networkidle" });
await page.screenshot({ path: "_last_full.png", fullPage: true });
await browser.close();
