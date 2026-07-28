import { companies } from "../data";
import "./CompaniesSection.css";

export default function CompaniesSection() {
  return (
    <section className="companies">
      <div className="companies__inner">
        <div className="companies__eyebrow">
          <span className="companies__eyebrow-arrow">&gt;</span>
          <span>What I've Built</span>
        </div>

        <div className="companies__head">
          <h2 className="companies__heading">
            Ventures founded across
            <span className="companies__heading-accent"> two decades</span>{" "}
            of building.
          </h2>
          <p className="companies__intro">
            From gaming and media to global platforms and capital —
            companies started, scaled, and backed since 1998.
          </p>
        </div>

        <div className="companies__cards">
          {companies.map((co, i) => (
            <article key={co.slotId} className="companies__card">
              <div className="companies__card-visual">
                <img
                  className="companies__card-img"
                  src={co.image}
                  alt={co.name}
                  loading="lazy"
                />
              </div>

              <div className="companies__card-body">
                <div className="companies__card-meta">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="companies__card-name">{co.name}</h3>
                <p className="companies__card-description">{co.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
