import { chromium } from 'playwright';
import fs from 'fs';

const OUT = 'shots';
fs.mkdirSync(OUT, { recursive: true });

const routes = process.argv[2] ? process.argv[2].split(',') : ['/'];
const widths = process.argv[3] ? process.argv[3].split(',').map(Number) : [375, 768, 1440];

const browser = await chromium.launch();
for (const route of routes) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    let ok = false;
    for (let attempt = 0; attempt < 3 && !ok; attempt++) {
      try { await page.goto('http://localhost:5173' + route, { waitUntil: 'domcontentloaded', timeout: 30000 }); ok = true; }
      catch { await page.waitForTimeout(1500); }
    }
    if (!ok) { console.log(`SKIP ${route} @${w} (goto failed)`); await page.close(); continue; }
    await page.evaluate(() => new Promise(r => { window.scrollTo(0, document.body.scrollHeight); setTimeout(r, 100); }));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1200);
    // detect horizontal overflow
    const overflow = await page.evaluate(() => {
      const de = document.documentElement;
      const docW = de.scrollWidth;
      const winW = window.innerWidth;
      const offenders = [];
      if (docW > winW + 1) {
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > winW + 1 && r.width > 0 && r.width <= docW) {
            offenders.push({ tag: el.tagName, cls: el.className?.toString?.().slice(0,60), right: Math.round(r.right), w: Math.round(r.width) });
          }
        });
      }
      return { docW, winW, offenders: offenders.slice(0, 12) };
    });
    const name = route.replace(/\//g, '_') || '_home';
    try { await page.screenshot({ path: `${OUT}/${name}__${w}.png`, fullPage: true, timeout: 8000 }); }
    catch { try { await page.screenshot({ path: `${OUT}/${name}__${w}.png`, fullPage: false, timeout: 8000 }); } catch {} }
    if (overflow.docW > overflow.winW + 1) {
      console.log(`OVERFLOW ${route} @${w}: doc=${overflow.docW} win=${overflow.winW}`);
      overflow.offenders.forEach(o => console.log(`   <${o.tag} class="${o.cls}"> right=${o.right} w=${o.w}`));
    }
    if (errs.length) console.log(`ERRORS ${route} @${w}: ${errs.slice(0,3).join(' | ')}`);
    await page.close();
  }
}
await browser.close();
console.log('done');
