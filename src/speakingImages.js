// Background photos for the Speaking cards on the landing page.
//
// There is nothing to edit here: drop a file into src/assets/speaking/ named
// after the slot it belongs to (e.g. `speaking-intl-1.jpg`) and Vite picks it
// up on the next dev reload / build. Slots without a matching file fall back to
// the gradient placeholder. See src/assets/speaking/README.md for the list.
const files = import.meta.glob(
  "./assets/speaking/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

export const speakingImages = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase(),
    url,
  ])
);

export function speakingImageFor(slotId) {
  return speakingImages[slotId.toLowerCase()];
}
