const modules = import.meta.glob("./assets/drawing/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const overrides = {
  "Diana Princess": "Princess Diana — Portrait",
  Diana: "Princess Diana — Study",
  "Mithun Actor": "Mithun Chakraborty — Portrait",
  "Mother Teresa": "Mother Teresa — Portrait",
  "SRk Actor": "Shah Rukh Khan — Portrait",
  "Sourabh Crickter": "Sourav Ganguly — Portrait",
  "manojit-BA-big": "Manojit — Charcoal Portrait",
  "nude-big": "Life Drawing Study",
  "pencil-work": "Child & Dove — Pencil Study",
  "subhasree-ganguly": "Subhasree Ganguly — Portrait",
  "susmita-sen": "Susmita Sen — Portrait",
  drawing_img1: "Looking Up — Ink Wash Study",
  drawing_img4: "Portrait Study",
};

const categoryMeta = {
  watercolor: { tag: "Watercolour" },
  digital: { tag: "Digital" },
  pencil: { tag: "Pencil & Ink" },
};

function categoryFromName(name) {
  if (/^water-img\d+$/i.test(name)) return "watercolor";
  if (/^dig\d+$/i.test(name)) return "digital";
  return "pencil";
}

function labelFromName(name) {
  if (overrides[name]) return overrides[name];

  const waterMatch = name.match(/^water-img(\d+)$/i);
  if (waterMatch) return `Watercolour Study ${waterMatch[1]}`;

  const digMatch = name.match(/^dig(\d+)$/i);
  if (digMatch) return `Digital Illustration ${digMatch[1]}`;

  const pencilMatch = name.match(/^pencil-img(\d+)$/i);
  if (pencilMatch) return `Pencil Study ${pencilMatch[1]}`;

  if (/^\d+$/.test(name)) return `Pencil Sketch ${name}`;

  return name
    .replace(/-big$/i, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const drawings = Object.entries(modules)
  .map(([path, src]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png)$/i, "");
    const category = categoryFromName(fileName);
    return {
      id: fileName,
      src,
      label: labelFromName(fileName),
      category,
      tag: categoryMeta[category].tag,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const drawingSections = [
  {
    id: "watercolor",
    label: "Watercolour",
    highlight: true,
    items: drawings.filter((d) => d.category === "watercolor"),
  },
  {
    id: "digital",
    label: "Digital",
    highlight: true,
    items: drawings.filter((d) => d.category === "digital"),
  },
  {
    id: "pencil",
    label: "Pencil & Ink",
    highlight: false,
    items: drawings.filter((d) => d.category === "pencil"),
  },
];
