import "./ImagePlaceholder.css";

const PALETTE = [
  ["#2f6ce0", "#0b1e6e"],
  ["#3a3a3a", "#111111"],
  ["#5b6b8c", "#1b2436"],
  ["#4a4a52", "#161618"],
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

export default function ImagePlaceholder({
  id,
  label,
  shape = "rect",
  fit = "cover",
  className = "",
  style,
}) {
  const [from, to] = PALETTE[hashString(id || label || "x") % PALETTE.length];
  const borderRadius = shape === "circle" ? "50%" : undefined;

  return (
    <div
      className={`image-placeholder image-placeholder--${fit} ${className}`}
      style={{
        background: `linear-gradient(155deg, ${from}, ${to})`,
        borderRadius,
        ...style,
      }}
    >
      {label && <span className="image-placeholder__label">{label}</span>}
    </div>
  );
}
