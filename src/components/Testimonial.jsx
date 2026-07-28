import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { quotes, voiceData } from "../data";
import "./Testimonial.css";

export default function Testimonial() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonial">
      <div className="testimonial__frame">
        <span className="testimonial__corner testimonial__corner--tl">+</span>
        <span className="testimonial__corner testimonial__corner--tr">+</span>

        <div className="testimonial__card">
          <div className="testimonial__content">
            <blockquote className="testimonial__quote">
              &ldquo;{quotes[active]}&rdquo;
            </blockquote>

            <div className="testimonial__divider" />

            <div className="testimonial__attribution">
              <span className="testimonial__name">
                {voiceData[active].name}
              </span>
              <span className="testimonial__sep">/</span>
              <span className="testimonial__role">
                {voiceData[active].role}
              </span>
            </div>
          </div>

          <div className="testimonial__photo">
            {voiceData[active].photo ? (
              <img
                className="testimonial__photo-img"
                src={voiceData[active].photo}
                alt={voiceData[active].name}
              />
            ) : (
              <ImagePlaceholder
                id="quote-photo"
                label="Featured collaborator photo"
              />
            )}
          </div>
        </div>

        <div className="testimonial__voices">
          {voiceData.map((v, i) => (
            <button
              type="button"
              key={v.name}
              className={`testimonial__voice${
                i === active ? " testimonial__voice--active" : ""
              }`}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${v.name}`}
            >
              <div className="testimonial__voice-photo">
                {v.photo ? (
                  <img
                    className="testimonial__voice-img"
                    src={v.photo}
                    alt={v.name}
                  />
                ) : (
                  <ImagePlaceholder
                    id={`voice-${i + 1}`}
                    label="Photo"
                    shape="circle"
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
