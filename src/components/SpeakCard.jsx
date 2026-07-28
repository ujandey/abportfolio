import ImagePlaceholder from "./ImagePlaceholder";
import "./SpeakCard.css";

export default function SpeakCard({ img, cat, title, sub, desc, tags }) {
  return (
    <a href="#" className="sc-card">
      <div className="sc-card__media">
        <ImagePlaceholder id={img || title} label={img} />
      </div>
      <div className="sc-card__body">
        {cat && <div className="sc-card__cat">{cat}</div>}
        <h3 className="sc-card__title">{title}</h3>
        {sub && <div className="sc-card__sub">{sub}</div>}
        {desc && <p className="sc-card__desc">{desc}</p>}
        {tags && tags.length > 0 && (
          <div className="sc-card__tags">
            {tags.map((tag) => (
              <span className="sc-card__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
