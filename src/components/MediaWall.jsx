import { logos } from "../data";
import "./MediaWall.css";

export default function MediaWall() {
  return (
    <section className="media-wall">
      <div className="media-wall__inner">
        <h2 className="media-wall__title">
          <span className="media-wall__title-line">
            <span className="media-wall__title-highlight">Media</span>
            <span>Recognition</span>
          </span>
          <span className="media-wall__title-line">Wall.</span>
        </h2>

        <div className="media-wall__grid" aria-label="Media recognition logos">
          {logos.map((logo) => (
            <div
              className="media-wall__cell"
              key={logo.slotId}
              style={{ "--logo-width": `${logo.w}px` }}
            >
              <img
                className="media-wall__logo"
                src={logo.image}
                alt={logo.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="media-wall__footer">
          Recognized across national media, public stages and global platforms
        </p>
      </div>
    </section>
  );
}
