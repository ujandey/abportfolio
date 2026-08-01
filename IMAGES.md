# Changing the pictures on the landing page

Every picture on the landing page is now a **URL string in `src/data.js`**. The
files themselves live in `public/images/…`, which Vite serves from the site
root — so `/images/events/card1.jpeg` is the file
`public/images/events/card1.jpeg`.

## To swap a picture

1. Copy your new file into the matching folder under `public/images/`.
2. Open `src/data.js` and edit the URL at the top of the file, e.g.

   ```js
   const card1 = "/images/events/my-new-photo.jpg";
   ```

That's it — no imports, no build step to remember. Save and the dev server
reloads.

You can also point at a picture hosted elsewhere instead of adding a file:

```js
const card1 = "https://images.example.com/arijit-on-stage.jpg";
```

Both work because these values are used directly as `<img src>`.

**Keep spaces out of file names.** A space in a URL has to be written `%20`;
`my photo.jpg` will 404 while `my-photo.jpg` just works.

## Where each section's pictures live

| Section on the landing page | Folder | Edit in `src/data.js` |
| --- | --- | --- |
| Hero backdrop | `public/images/hero/` | `heroImg` |
| Events strip | `public/images/events/` | `card1` … `card8` |
| Featured moments | `public/images/moments/`, `public/images/global/` | `piyushGoyalImg`, `ghanaImg`, `liberiaImg`, `nagalandImg` |
| Intro portrait | `public/images/intro/` | `introPortraitImg` |
| Speaking card backgrounds | `public/images/speaking/` | `image` on each slot in `speakingGroups` |
| Companies | `public/images/companies/` | `virtualinfocomLogo` … `wlsLogo` |
| Hunger / "what would it take" | `public/images/hero/`, `public/images/logos/` | `deepblueImg`, `featuredEntries` |
| Podcast logo | `public/images/podcast/` | `podcastLogoImg` |
| Comics | `public/images/comics/` | `finalCrisisCover` … `archerCover` |
| Gallery — drawings | `public/images/drawing/` | `drawingPortraitStudy` … `drawingSubhasreeGanguly` |
| Gallery — photographs | `public/images/photography/` | `photoPier` … `photoStillLifeGlass` |
| Books | `public/images/books/` | `whiteTigerCover`, `africaCover`, `expertsCover` |
| GenAI posters | `public/images/genai/` | `karnaPoster` … `ashwathamaPoster` |
| Pillars stage photo | `public/images/media/` | `pillarsStageImg` |
| Media wall logos | `public/images/logos/` | the `logos` array |
| Testimonials | `public/images/testimonials/` | `safiullahPhoto`, `rudyPhoto`, `koshyPhoto` |

## Speaking cards

The eight Speaking cards start with an empty `image: ""`, which renders the
gradient placeholder. Fill one in to give that card a background photo:

```js
{
  slotId: "speaking-intl-1",
  …
  image: "/images/speaking/world-ai-summit.jpg",
}
```

Photo guidance: landscape, at least 1200×1120 (the card is ~600×560 CSS px and
crops with `object-fit: cover`). Card text sits top-left and the CTA
bottom-left under a dark scrim, so pick photos whose subject sits centre or
right. The crop favours the upper 30% — adjust `object-position` at
`src/components/Speaking.css:173` if a set of photos needs different framing.

## What is *not* covered here

- **Videos** (Statement, Spiritual, Bio hero, Technology/VR pages) are still
  imported from `src/assets/` and are gitignored — they're supplied outside
  Git.
- **The Bio page's own photos** (`src/assets/bio/`, `src/assets/bj-banner/`)
  are still imports. Bio pictures shared with the landing page — the deep-blue
  portrait, the stage photo, Ghana, and the event cards — did move to
  `public/images/` and are plain URLs now.
- **The Drawings and Photography pages** auto-discover everything in
  `src/assets/drawing/` and `src/assets/photography/`. The four drawings and
  four photographs that appear in the landing-page gallery were **copied** into
  `public/images/`, so those two files exist in both places: edit the
  `public/images/` copy to change the landing page, and the `src/assets/` copy
  to change the dedicated page.
- **Blog artwork** still comes from `src/assets/blog/` via `src/blogImages.js`.
