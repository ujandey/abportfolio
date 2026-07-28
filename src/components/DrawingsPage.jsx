import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { drawingSections } from "../drawingsContent";
import "./DrawingsPage.css";

function DrawingSection({ section }) {
  return (
    <section className={`dp-section${section.highlight ? ` dp-section--${section.id}` : ""}`}>
      <div className="dp-inner">
        <div className="dp-section__head">
          <h2 className="dp-section__title">{section.label}</h2>
          <span className="dp-section__count">
            {section.items.length} {section.items.length === 1 ? "piece" : "pieces"}
          </span>
        </div>

        <div className="dp-masonry">
          {section.items.map((d) => (
            <figure
              className={`dp-card${section.highlight ? ` dp-card--${section.id}` : ""}`}
              key={d.id}
            >
              <img
                className="dp-card__img"
                src={d.src}
                alt={d.label}
                loading="lazy"
              />
              <figcaption className="dp-card__caption">
                <span>{d.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DrawingsPage() {
  useEffect(() => {
    document.title = "Drawings — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="dp">
      <Nav />

      <section className="dp-hero">
        <div className="dp-inner">
          <div className="dp-kicker">
            <span className="dp-kicker-dot" />
            Selected Works
          </div>
          <h1 className="dp-title">Drawings</h1>
          <p className="dp-lede">
            A personal archive of portraits and studies, grouped by medium —
            watercolour, digital and pencil &amp; ink.
          </p>
        </div>
      </section>

      {drawingSections.map((section) => (
        <DrawingSection section={section} key={section.id} />
      ))}

      <Footer />
    </div>
  );
}
