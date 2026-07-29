// Matches the pictures in src/assets/blog to the archive posts in
// src/blogArchiveContent.js and writes src/blogImages.js.
//
// The legacy /blog HTML pages carried the authoritative mapping in their <img>
// tags, but that folder is gone, so this scores each post's source file name
// and title against each image file name. Matches are reported with a score so
// low-confidence ones can be checked by hand; edit src/blogImages.js directly
// to correct anything this gets wrong.
//
// Run with:  node scripts/match-blog-images.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogArchivePosts } from "../src/blogArchiveContent.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetDir = path.join(root, "src", "assets", "blog");
const archiveFile = path.join(root, "src", "blogArchiveContent.js");
const outFile = path.join(root, "src", "blogImages.js");

// Images already claimed by the curated posts in blogContent.js.
const RESERVED = new Set([
  "leadership-tech.jpg",
  "Raising-a-lot-of-capital.jpg",
  "VC.jpg",
  "Right-Investor.jpg",
  "alien-are-we.jpg",
  "arijit-bhattacharyya-film.jpg",
  "Arijit_Bhattacharyya-cyber.jpg",
  "AR-glass.jpg",
  "Funding-Environment.jpg",
  "life-water.png",
  "socialmedia.png",
  "business-coach.jpg",
]);

// Words that carry no signal: they appear on both sides constantly.
const STOP = new Set([
  "arijit", "bhattacharyya", "bhattacharya", "bhattacharjee", "blog", "jpg",
  "jpeg", "png", "the", "of", "and", "in", "a", "an", "to", "for", "is", "are",
  "my", "we", "you", "your", "it", "its", "on", "at", "as", "be", "or", "how",
  "what", "why", "when", "with", "from", "can", "do", "does", "not", "s", "i",
  "life", "story", "new", "all", "was", "were", "have", "has", "that", "this",
]);

const SYNONYMS = new Map([
  ["startups", "startup"], ["entrepreneurs", "entrepreneur"],
  ["entrepreneurship", "entrepreneur"], ["investors", "investor"],
  ["investments", "investment"], ["leaders", "leader"],
  ["leadership", "leader"], ["games", "game"], ["gaming", "game"],
  ["cryptocurrency", "crypto"], ["companies", "company"], ["kids", "kid"],
  ["gods", "god"], ["goddesses", "god"], ["civilizations", "civilization"],
  ["harrapan", "harappa"], ["harappan", "harappa"], ["aztec", "aztech"],
  ["mentors", "mentoring"], ["mentor", "mentoring"], ["fears", "fear"],
  ["skills", "skill"], ["banks", "bank"], ["banking", "bank"],
  ["superheroes", "superhero"], ["superheros", "superhero"],
  ["cosplayseller", "cosplay"], ["immune", "immunity"], ["speaking", "speak"],
  ["speaker", "speak"], ["happier", "happy"], ["happiness", "happy"],
  ["burnouts", "burnout"], ["burnout", "burn"], ["exits", "exit"],
  ["strategies", "strategy"], ["partnerships", "partnership"],
  ["marketplaces", "marketplace"], ["bumblebees", "bomble"],
]);

function stem(token) {
  let t = SYNONYMS.get(token) || token;
  if (t.length > 6 && t.endsWith("ing")) t = t.slice(0, -3);
  else if (t.length > 5 && t.endsWith("es")) t = t.slice(0, -2);
  else if (t.length > 4 && t.endsWith("s") && !t.endsWith("ss")) t = t.slice(0, -1);
  return SYNONYMS.get(t) || t;
}

function tokenize(value) {
  return [
    ...new Set(
      value
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((t) => t.length > 1 && !STOP.has(t) && !/^\d+$/.test(t))
        .map(stem)
        .filter((t) => !STOP.has(t))
    ),
  ];
}

// The old file names are full of typos ("acclerator", "bliend", "prenure"),
// so long tokens are allowed to match one edit apart.
function within1(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length < 6 || b.length < 6) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

// Each post remembers the page it came from; that name is the strongest signal.
const sourceById = new Map();
for (const [, id, file] of fs
  .readFileSync(archiveFile, "utf8")
  .matchAll(/\/\/ source: blog\/(.+?)\.html\s*\n\s*id: "([^"]+)"/g)
  .map((m) => [m[0], m[2], m[1]])) {
  sourceById.set(id, file);
}

const images = fs
  .readdirSync(assetDir)
  .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f) && !RESERVED.has(f))
  .map((file) => ({ file, tokens: tokenize(file.replace(/\.[^.]+$/, "")) }));

const posts = blogArchivePosts.map((post) => {
  const source = sourceById.get(post.id) || "";
  return {
    id: post.id,
    title: post.title,
    source,
    // Source file name tokens are weighted double: the old site named the
    // picture after the page far more often than after the headline.
    tokens: [...tokenize(source), ...tokenize(source), ...tokenize(post.title)],
  };
});

// Rarer tokens are more convincing: "harappa" identifies a post, "business" does not.
const df = new Map();
for (const { tokens } of [...posts, ...images]) {
  for (const t of new Set(tokens)) df.set(t, (df.get(t) || 0) + 1);
}
const idf = (t) => Math.log((posts.length + images.length) / (1 + (df.get(t) || 0)));

function score(post, image) {
  let total = 0;
  let bestToken = "";
  let bestWeight = 0;
  for (const t of image.tokens) {
    const exact = post.tokens.filter((p) => p === t).length;
    const fuzzy = exact ? 0 : post.tokens.filter((p) => within1(p, t)).length;
    const hits = exact || fuzzy;
    if (!hits) continue;
    const weight =
      idf(t) * Math.min(hits, 2) * (t.length >= 5 ? 1.15 : 1) * (exact ? 1 : 0.8);
    total += weight;
    if (weight > bestWeight) {
      bestWeight = weight;
      bestToken = t;
    }
  }
  // A single common word is not evidence; demand one distinctive token. Rarity
  // does the work here, so short-but-rare tokens like "nft" still count.
  if (bestWeight < 1.9) return { total: 0, bestToken: "" };
  return { total, bestToken };
}

// Pairs the scorer cannot see, because the picture is named for the subject
// rather than for any word in the headline.
const MANUAL = new Map([
  ["aliens-in-earth", "alien.jpg"],
  ["life-story-blind-kids-connects-more-than-people-who", "bliend-school.jpg"],
  ["one-billion-android-devices-vulnerable-to-hacking-attacks", "hacker.jpg"],
  ["who-is-responsible-when-a-self-driving-car-kills", "car.jpg"],
  ["successfully-content-with-your-life", "happy.jpg"],
  ["need-of-mentoring-for-startups", "SME-Landscape.jpg"],
  ["busy-is-not-the-point", "donthavetime.jpg"],
  ["there-s-no-need-to-panic-and-figure-out", "no-worry.jpg"],
  ["how-to-define-solopreneur-who-are-they", "solo-prenure.jpg"],
]);

const pairs = [];
for (const post of posts) {
  for (const image of images) {
    const { total, bestToken } = score(post, image);
    if (total > 0) pairs.push({ post, image, total, bestToken });
  }
}
pairs.sort((a, b) => b.total - a.total || a.post.id.localeCompare(b.post.id));

const assignedPost = new Map();
const usedImage = new Set();

const byId = new Map(posts.map((p) => [p.id, p]));
const byFile = new Map(images.map((i) => [i.file, i]));
for (const [id, file] of MANUAL) {
  const post = byId.get(id);
  const image = byFile.get(file);
  if (!post || !image) {
    console.warn(`manual pair ignored: ${id} -> ${file} (not found)`);
    continue;
  }
  assignedPost.set(id, { post, image, total: Infinity, bestToken: "manual" });
  usedImage.add(file);
}

for (const pair of pairs) {
  if (assignedPost.has(pair.post.id) || usedImage.has(pair.image.file)) continue;
  assignedPost.set(pair.post.id, pair);
  usedImage.add(pair.image.file);
}

const matched = [...assignedPost.values()].sort((a, b) =>
  a.post.id.localeCompare(b.post.id)
);
const unmatched = posts.filter((p) => !assignedPost.has(p.id));
const unused = images.filter((i) => !usedImage.has(i.file));

const varName = (file, i) =>
  "img" +
  file
    .replace(/\.[^.]+$/, "")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("")
    .replace(/^(\d)/, "N$1") +
  (i === -1 ? "" : "");

const seenVar = new Map();
for (const m of matched) {
  let name = varName(m.image.file, -1);
  while (seenVar.has(name)) name += "X";
  seenVar.set(name, m.image.file);
  m.varName = name;
}

const LOW = 4.5;
const out = `// Maps archive posts (src/blogArchiveContent.js) to pictures in
// src/assets/blog. Generated by scripts/match-blog-images.mjs.
//
// The legacy /blog HTML pages held the real mapping in their <img> tags; that
// folder no longer exists, so these were matched on file name and title. Most
// are unambiguous, but the ones flagged CHECK below matched on weaker evidence
// — correct any of them by editing the entry, it is a plain object.

${matched.map((m) => `import ${m.varName} from "./assets/blog/${m.image.file}";`).join("\n")}

export const archiveImages = {
${matched
  .map(
    (m) =>
      `  ${JSON.stringify(m.post.id)}: ${m.varName},` +
      `${m.total < LOW ? ` // CHECK — matched on "${m.bestToken}"` : ""}`
  )
  .join("\n")}
};

// Posts with no picture yet (${unmatched.length}):
${unmatched.map((p) => `//   ${p.id}`).join("\n")}

// Pictures not used by any post (${unused.length}):
${unused.map((i) => `//   ${i.file}`).join("\n")}
`;

fs.writeFileSync(outFile, out, "utf8");

console.log(`posts:            ${posts.length}`);
console.log(`images available: ${images.length}`);
console.log(`matched:          ${matched.length}`);
console.log(`  confident:      ${matched.filter((m) => m.total >= LOW).length}`);
console.log(`  needs a check:  ${matched.filter((m) => m.total < LOW).length}`);
console.log(`unmatched posts:  ${unmatched.length}`);
console.log(`unused images:    ${unused.length}`);
