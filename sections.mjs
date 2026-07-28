import { chromium } from 'playwright';
import fs from 'fs';

const route = process.argv[2] || '/';
const width = Number(process.argv[3] || 375);
const OUT = 'sec';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto('http://localhost:5173' + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.evaluate(() => new Promise(r => { let y=0; const iv=setInterval(()=>{ window.scrollBy(0,600); y+=600; if(y>document.body.scrollHeight){clearInterval(iv);r();}},30); }));
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);

const container = route === '/' ? '.site' : '.site, #root, body';
const handles = await page.evaluateHandle((sel) => {
  const root = document.querySelector('.site') || document.querySelector('#root') || document.body;
  return [...root.children];
}, container);
const props = await handles.getProperties();
let i = 0;
const tag = route.replace(/\//g,'_')||'home';
for (const [, h] of props) {
  const el = h.asElement();
  if (!el) continue;
  const box = await el.boundingBox();
  if (!box || box.height < 8) { i++; continue; }
  const cls = await el.evaluate(e => e.className?.toString?.().slice(0,24).replace(/[^a-z0-9-]/gi,'') || e.tagName.toLowerCase());
  try { await el.screenshot({ path: `${OUT}/${tag}_${width}_${String(i).padStart(2,'0')}_${cls}.png`, timeout: 8000 }); }
  catch(e){ console.log('fail', i, cls, e.message.slice(0,40)); }
  i++;
}
console.log('done', tag, width);
await browser.close();
