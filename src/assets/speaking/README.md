# Speaking card backgrounds

Drop photos in this folder to fill the background of the cards in the Speaking
section on the landing page. No code changes needed — `src/speakingImages.js`
picks up whatever is here via `import.meta.glob`.

**Name each file after its slot id.** Extension can be `.jpg`, `.jpeg`, `.png`,
`.webp` or `.avif`.

| File name            | Card                          |
| -------------------- | ----------------------------- |
| `speaking-intl-1.*`  | World AI Summit, Amsterdam    |
| `speaking-intl-2.*`  | GITEX Global, Dubai           |
| `speaking-intl-3.*`  | Singapore FinTech Festival    |
| `speaking-intl-4.*`  | Web Summit, Lisbon            |
| `speaking-natl-1.*`  | NASSCOM Leadership Forum      |
| `speaking-natl-2.*`  | IIT Delhi — Tryst TechFest    |
| `speaking-natl-3.*`  | Bengaluru Tech Summit         |
| `speaking-natl-4.*`  | TiE Global Summit             |

Any slot without a matching file keeps the gradient placeholder, so you can add
them one at a time.

## Photo guidance

- **Landscape, at least 1200×1120.** The card is roughly 600×560 CSS pixels and
  the photo is cropped with `object-fit: cover`, so anything smaller (the
  ~280×314 thumbnails in `assets/latest-speaks/` for instance) will look soft.
- The card's text sits in the **top-left** under a dark scrim, and the CTA
  button sits **bottom-left** — pick photos whose subject sits centre or right.
- Crop favours the upper 30% of the photo vertically; adjust
  `.speaking__card-img img { object-position }` in `Speaking.css` if a
  particular set of photos needs a different framing.
