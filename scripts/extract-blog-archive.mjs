// One-off generator: reads the legacy static pages in /blog and emits
// src/blogArchiveContent.js. Files already hand-authored in src/blogContent.js
// are listed in SKIP and are not re-generated.
//
// Run with:  node scripts/extract-blog-archive.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = path.join(root, "blog");
const outFile = path.join(root, "src", "blogArchiveContent.js");

// Already present in src/blogContent.js.
const SKIP = new Set([
  "blog-Leadership-demands-technology.html",
  "blog-Raising-lot-of-capital-at-an-early-stage-is-a-road-to-success.html",
  "blog-VCs-will-always-be-on-your-side-and-have-the-same-vision.html",
  "blog-choose-investor-startups.html",
  "blog-are-we-alien.html",
  "blog-Goodbye-Glasses-Hello-Smart-glasses.html",
  "blog-how-start-up-companies-valued.html",
  "blog-Life-is-an-untold-but-magical-tale.html",
  "blog-Why-Your-Business-Should-Have-an-Active-Social-Media-Presence.html",
  "blog-Why-Self-Aware-Leader-Good-Leader.html",
]);

const ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  hellip: "…",
  copy: "©",
  reg: "®",
  trade: "™",
  deg: "°",
  eacute: "é",
  egrave: "è",
  uuml: "ü",
  ouml: "ö",
  auml: "ä",
  rarr: "→",
  bull: "•",
  middot: "·",
  times: "×",
  frac12: "½",
  euro: "€",
  pound: "£",
  sup2: "²",
};

function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z][a-z0-9]*);/gi, (m, name) => {
      const key = name.toLowerCase();
      return key in ENTITIES ? ENTITIES[key] : m;
    });
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}

function clean(text) {
  return decode(text)
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// A few file names are out of sync with the content they hold, so ids are
// derived from the title and only fall back to the file name.
function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .split("-")
    .slice(0, 9)
    .join("-");
}

function slugFromFile(file) {
  return slugify(file.replace(/\.html$/i, "").replace(/^blog[-_]/i, ""));
}

// Title case a SHOUTED title, leaving mixed-case ones alone.
const SMALL = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "is", "of",
  "on", "or", "the", "to", "vs", "with",
]);
function fixCase(title) {
  const letters = title.replace(/[^A-Za-z]/g, "");
  if (!letters || letters !== letters.toUpperCase()) return title;
  return title
    .toLowerCase()
    .split(/(\s+)/)
    .map((word, i) => {
      if (/^\s+$/.test(word)) return word;
      if (i > 0 && SMALL.has(word)) return word;
      return word.replace(/^([a-z])/, (c) => c.toUpperCase());
    })
    .join("");
}

function firstMatch(html, re) {
  const m = html.match(re);
  return m ? clean(stripTags(m[1])) : "";
}

function extractTitle(html) {
  const contentBlock = html.match(
    /class="latest_speeks_content[^"]*"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/i
  );
  const candidates = [
    contentBlock ? clean(stripTags(contentBlock[1])) : "",
    firstMatch(html, /<div class="banner_caption">\s*<h1[^>]*>([\s\S]*?)<\/h1>/i),
    firstMatch(html, /<title>([\s\S]*?)<\/title>/i),
  ];
  const title = candidates.find((c) => c && c.length > 1) || "";
  return fixCase(title.replace(/\s*[|–-]\s*Arijit Bhattacharyya\s*$/i, "").trim());
}

function extractBody(html) {
  const block = html.match(
    /<div class="latest_speeks_box_content">([\s\S]*?)<\/section>/i
  );
  if (!block) return [];

  let inner = block[1];

  // Drop the trailing "Back" link and anything after it.
  inner = inner.replace(/<h1>\s*<a href="blog\.html"[\s\S]*$/i, "");
  // Drop scripts, styles, iframes and images.
  inner = inner
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "");

  // Normalise every block boundary to a single separator.
  inner = inner
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|li|tr|blockquote)>/gi, "\n")
    .replace(/<(p|div|h[1-6]|li|tr|blockquote)\b[^>]*>/gi, "\n");

  return stripTags(inner)
    .split("\n")
    .map(clean)
    .filter((p) => p.length > 1)
    .filter((p) => !/^back$/i.test(p));
}

function makeExcerpt(paragraphs) {
  const source = paragraphs.join(" ");
  if (source.length <= 200) return source;
  const window = source.slice(0, 220);
  const sentenceEnd = window.search(/[.!?](\s|$)(?![^]*[.!?](\s|$))/);
  if (sentenceEnd > 90) return window.slice(0, sentenceEnd + 1).trim();
  return window.slice(0, window.lastIndexOf(" ")).trim() + "…";
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const files = fs
  .readdirSync(blogDir)
  .filter((f) => f.toLowerCase().endsWith(".html"))
  .sort((a, b) => a.localeCompare(b, "en"));

const posts = [];
const skipped = [];
const duplicates = [];
const seenIds = new Set();
const seenBodies = new Map();

for (const file of files) {
  if (SKIP.has(file)) continue;

  const html = fs.readFileSync(path.join(blogDir, file), "utf8");
  const title = extractTitle(html);
  const body = extractBody(html);

  if (!title || body.length === 0) {
    skipped.push(`${file} (title="${title}", paragraphs=${body.length})`);
    continue;
  }

  // Some posts exist twice under different file names — keep the first.
  const fingerprint = body.join(" ");
  if (seenBodies.has(fingerprint)) {
    duplicates.push(`${file} (same content as ${seenBodies.get(fingerprint)})`);
    continue;
  }
  seenBodies.set(fingerprint, file);

  let id = slugify(title) || slugFromFile(file);
  while (seenIds.has(id)) id += "-2";
  seenIds.add(id);

  posts.push({ id, title, excerpt: makeExcerpt(body), body, file });
}

const out = `// Auto-generated from the legacy static pages in /blog by
// scripts/extract-blog-archive.mjs — do not hand-edit the text here; edit the
// source HTML and re-run, or move a post into blogContent.js to curate it.
//
// Images are intentionally omitted; add an \`image\` field per post as artwork
// becomes available (BlogPage renders fine without one).

export const blogArchivePosts = [
${posts
  .map(
    (p) => `  {
    // source: blog/${p.file}
    id: ${JSON.stringify(p.id)},
    title: ${JSON.stringify(p.title)},
    author: "Arijit Bhattacharyya",
    excerpt: ${JSON.stringify(p.excerpt)},
    body: [
${p.body.map((para) => `      \`${esc(para)}\`,`).join("\n")}
    ],
  },`
  )
  .join("\n")}
];
`;

fs.writeFileSync(outFile, out, "utf8");

console.log(`files scanned:      ${files.length}`);
console.log(`already curated:    ${SKIP.size}`);
console.log(`posts generated:    ${posts.length}`);
console.log(`paragraphs total:   ${posts.reduce((n, p) => n + p.body.length, 0)}`);
if (duplicates.length) {
  console.log(`\nskipped (duplicate content):`);
  for (const d of duplicates) console.log(`  - ${d}`);
}
if (skipped.length) {
  console.log(`\nskipped (no usable content):`);
  for (const s of skipped) console.log(`  - ${s}`);
}
