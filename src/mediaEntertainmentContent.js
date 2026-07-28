const modules = import.meta.glob(
  "./assets/media-entertainment/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Add an entry here keyed by the image file name (without extension) to give a
// picture a title and/or a short description. Anything not listed still shows —
// it just falls back to a title derived from the file name and no description.
//
// Example:
//   "premiere-night": {
//     title: "Premiere Night",
//     description: "On the red carpet at the film premiere, Mumbai 2024.",
//   },
const overrides = {};

function titleFromName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const items = Object.entries(modules)
  .map(([path, src]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png|webp)$/i, "");
    const meta = overrides[fileName] || {};
    return {
      id: fileName,
      src,
      label: meta.title || titleFromName(fileName),
      description: meta.description || "",
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const mediaEntertainmentSections = [
  {
    id: "media",
    label: "Media & Entertainment",
    highlight: false,
    items,
  },
];
