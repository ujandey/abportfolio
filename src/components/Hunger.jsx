import { featuredEntries, deepblueImg } from "../data";
import { navigate } from "../router";
import "./Hunger.css";

export default function Hunger() {
  return (
    <section className="hunger">
      <div className="hunger__inner">
        <h2 className="hunger__heading">
          What would it take to change the trajectory of your work?
        </h2>

        <div className="hunger__canvas">
          <div className="hunger__photo">
            <img
              className="hunger__photo-img"
              src={deepblueImg}
              alt="Portrait of Arijit Bhattacharyya on a deep-blue field"
            />
          </div>

          <div className="hunger__panel">
            <div className="hunger__fillet hunger__fillet--panel-top" />
            <div className="hunger__fillet hunger__fillet--panel-right" />
            <h3 className="hunger__panel-title">
              Serial Entrepreneur since 1998. Technologist. Angel Investor. TEDx Speaker. Author. Global Innovation Builder.
            </h3>
            <p className="hunger__panel-copy">
              Building technology, startups, creative IP and global innovation ecosystems since 1998 — across AI, games, VR, AR, blockchain, education, investment, international business and future technologies.
            </p>
            <a
              href="/bio"
              className="hunger__panel-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/bio");
              }}
            >
              Explore Bio
            </a>
          </div>

          <div className="hunger__slab">
            <div className="hunger__fillet hunger__fillet--slab-left" />
            <div className="hunger__fillet hunger__fillet--slab-bottom" />
            <p className="hunger__slab-label">Featured in:</p>
            <div className="hunger__slab-logos">
              {featuredEntries.map((entry) => (
                <img
                  key={entry.slotId}
                  className="hunger__slab-logo"
                  src={entry.image}
                  alt={entry.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
