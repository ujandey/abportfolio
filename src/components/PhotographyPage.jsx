import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { photographySections } from "../photographyContent";
import "./PhotographyPage.css";

function PhotographySection({ section }) {
  return (
    <section className={`pp-section${section.highlight ? ` pp-section--${section.id}` : ""}`}>
      <div className="pp-inner">
        <div className="pp-section__head">
          <h2 className="pp-section__title">{section.label}</h2>
          <span className="pp-section__count">
            {section.items.length} {section.items.length === 1 ? "photo" : "photos"}
          </span>
        </div>

        <div className="pp-masonry">
          {section.items.map((p) => (
            <figure
              className={`pp-card${section.highlight ? ` pp-card--${section.id}` : ""}`}
              key={p.id}
            >
              <img
                className="pp-card__img"
                src={p.src}
                alt={p.label}
                loading="lazy"
              />
              <figcaption className="pp-card__caption">
                <span>{p.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PhotographyPage() {
  useEffect(() => {
    document.title = "Photography — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="pp">
      <Nav />

      <section className="pp-hero">
        <div className="pp-inner">
          <div className="pp-kicker">
            <span className="pp-kicker-dot" />
            Selected Works
          </div>
          <h1 className="pp-title">Photography</h1>
          <p className="pp-lede">
            A personal archive of moments and frames — landscapes, cityscapes and
            still life captured on the road.
          </p>
        </div>
      </section>

      {photographySections.map((section) => (
        <PhotographySection section={section} key={section.id} />
      ))}

      <Footer />
    </div>
  );
}
