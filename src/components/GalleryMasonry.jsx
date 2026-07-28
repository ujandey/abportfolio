import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { drawings, photographs } from "../data";
import "./GalleryMasonry.css";

const INITIAL_COUNT = 4;

function GalleryColumn({ title, items, expanded, onToggle }) {
  const visible = expanded ? items : items.slice(0, INITIAL_COUNT);
  const remaining = items.length - INITIAL_COUNT;

  return (
    <div className="gallery-masonry__column">
      <div className="gallery-masonry__column-header">
        <h3 className="gallery-masonry__column-title">{title}</h3>
        <span className="gallery-masonry__column-count">
          {items.length} {items.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <div className="gallery-masonry__masonry">
        {visible.map((item) => (
          <figure className="gallery-masonry__figure" key={item.slotId}>
            <div
              className="gallery-masonry__media"
              style={{ aspectRatio: item.ratio }}
            >
              {item.image ? (
                <img
                  className="gallery-masonry__img"
                  src={item.image}
                  alt={item.label}
                />
              ) : (
                <ImagePlaceholder id={item.slotId} shape="rect" />
              )}
            </div>
            <figcaption className="gallery-masonry__caption">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {remaining > 0 && (
        <button
          type="button"
          className="gallery-masonry__toggle"
          onClick={onToggle}
        >
          {expanded ? "Show less" : `Show more (${remaining})`}
        </button>
      )}
    </div>
  );
}

export default function GalleryMasonry() {
  const [drawExpanded, setDrawExpanded] = useState(false);
  const [photoExpanded, setPhotoExpanded] = useState(false);

  return (
    <section className="gallery-masonry">
      <div className="gallery-masonry__glow gallery-masonry__glow--blue" />
      <div className="gallery-masonry__glow gallery-masonry__glow--gold" />

      <div className="gallery-masonry__inner">
        <div className="gallery-masonry__intro">
          <div className="gallery-masonry__eyebrow">
            <span className="gallery-masonry__eyebrow-dot" />
            SELECTED WORKS
          </div>
          <h2 className="gallery-masonry__heading">
            Drawings &amp; photography
          </h2>
          <p className="gallery-masonry__lede">
            Two parallel bodies of work — graphite and watercolour portraits
            alongside a photographic eye for light, colour and stillness.
            Explore each below.
          </p>
        </div>

        <div className="gallery-masonry__grid">
          <GalleryColumn
            title="Drawing"
            items={drawings}
            expanded={drawExpanded}
            onToggle={() => setDrawExpanded((v) => !v)}
          />
          <GalleryColumn
            title="Photography"
            items={photographs}
            expanded={photoExpanded}
            onToggle={() => setPhotoExpanded((v) => !v)}
          />
        </div>
      </div>
    </section>
  );
}
