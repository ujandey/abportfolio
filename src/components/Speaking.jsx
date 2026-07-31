import ImagePlaceholder from "./ImagePlaceholder";
import { speakingGroups } from "../data";
import { speakingImageFor } from "../speakingImages";
import "./Speaking.css";

function SlotBackground({ slot }) {
  const src = speakingImageFor(slot.slotId);

  if (!src) {
    return (
      <ImagePlaceholder
        id={slot.slotId}
        label={slot.photoNote}
        className="speaking__card-img"
      />
    );
  }

  return (
    <div className="speaking__card-img">
      <img src={src} alt={slot.photoNote} loading="lazy" decoding="async" />
    </div>
  );
}

export default function Speaking() {
  return (
    <section className="speaking">
      <div className="speaking__glow speaking__glow--blue" />
      <div className="speaking__glow speaking__glow--gold" />

      <div className="speaking__inner">
        <div className="speaking__intro">
          <div className="speaking__eyebrow">
            <span className="speaking__eyebrow-dot" />
            BOOK ARIJIT TO SPEAK
          </div>
          <h2 className="speaking__heading">
            Speaking slots, open across two stages
          </h2>
          <p className="speaking__lede">
            From continental AI summits to the country&apos;s leading
            leadership forums — reserve a keynote, fireside or panel
            appearance. Each slot below shows availability, format and the
            room it belongs to.
          </p>
        </div>

        {speakingGroups.map((group) => (
          <div key={group.slotId} className="speaking__group">
            <div className="speaking__group-header">
              <div className="speaking__group-title">
                <span
                  className="speaking__group-tag"
                  style={{ color: group.accent }}
                >
                  {group.tag}
                </span>
                <h3 className="speaking__group-name">{group.name}</h3>
              </div>
              <div className="speaking__group-meta">{group.meta}</div>
            </div>

            <div className="speaking__grid">
              {group.slots.map((slot) => (
                <a
                  key={slot.slotId}
                  href="#"
                  className="speaking__card"
                >
                  <SlotBackground slot={slot} />
                  <div className="speaking__card-scrim" />

                  <div className="speaking__card-top">
                    <div className="speaking__card-badges">
                      <span className="speaking__format-badge">
                        <span
                          className="speaking__format-dot"
                          style={{ background: group.accent }}
                        />
                        {slot.format}
                      </span>
                      <span
                        className="speaking__availability"
                        style={{ color: slot.availColor }}
                      >
                        {slot.availability}
                      </span>
                    </div>
                    <h4 className="speaking__card-title">{slot.title}</h4>
                    <p className="speaking__card-desc">{slot.desc}</p>
                  </div>

                  <span className="speaking__cta">{slot.cta}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
