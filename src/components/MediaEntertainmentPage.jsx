import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { mediaEntertainmentSections } from "../mediaEntertainmentContent";
import "./MediaEntertainmentPage.css";

function MediaSection({ section }) {
  return (
    <section className={`me-section${section.highlight ? ` me-section--${section.id}` : ""}`}>
      <div className="me-inner">
        <div className="me-section__head">
          <h2 className="me-section__title">{section.label}</h2>
          <span className="me-section__count">
            {section.items.length} {section.items.length === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="me-masonry">
          {section.items.map((m) => (
            <figure className="me-card" key={m.id}>
              <img
                className="me-card__img"
                src={m.src}
                alt={m.label}
                loading="lazy"
              />
              <figcaption className="me-card__body">
                <span className="me-card__label">{m.label}</span>
                {m.description && (
                  <p className="me-card__desc">{m.description}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MediaEntertainmentPage() {
  useEffect(() => {
    document.title = "Media & Entertainment — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="me">
      <Nav />

      <section className="me-hero">
        <div className="me-inner">
          <div className="me-kicker">
            <span className="me-kicker-dot" />
            Selected Works
          </div>
          <h1 className="me-title">Media &amp; Entertainment</h1>
          <p className="me-lede">
            A curated wall of media and entertainment moments — each frame with a
            short note on the story behind it.
          </p>
        </div>
      </section>

      {mediaEntertainmentSections.map((section) => (
        <MediaSection section={section} key={section.id} />
      ))}

      <Footer />
    </div>
  );
}
