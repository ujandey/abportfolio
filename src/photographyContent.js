const modules = import.meta.glob("./assets/photography/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

function labelFromName(name) {
  if (/^\d+$/.test(name)) return `Photograph ${name}`;

  const imgMatch = name.match(/^img(\d+)$/i);
  if (imgMatch) return `Photograph ${imgMatch[1]}`;

  return name
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const photographs = Object.entries(modules)
  .map(([path, src]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png|webp)$/i, "");
    return {
      id: fileName,
      src,
      label: labelFromName(fileName),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const photographySections = [
  {
    id: "photographs",
    label: "Photographs",
    highlight: false,
    items: photographs,
  },
];
