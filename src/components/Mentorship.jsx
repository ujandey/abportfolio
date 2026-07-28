import ImagePlaceholder from "./ImagePlaceholder";
import { mentorshipData } from "../data";
import "./Mentorship.css";

export default function Mentorship() {
  return (
    <section className="mentorship">
      <div className="mentorship__inner">
        <div className="mentorship__intro">
          <div className="mentorship__eyebrow">
            <span className="mentorship__eyebrow-dot" />
            MENTORSHIP
          </div>
          <h2 className="mentorship__heading">
            Wisdom from the voices who shaped the journey
          </h2>
          <p className="mentorship__lede">
            Lessons carried from mentors, builders and thinkers whose words
            keep showing up in every decision made along the way.
          </p>
        </div>

        <div className="mentorship__list">
          {mentorshipData.map((item, i) => (
            <div
              key={item.name}
              className={`mentorship__card${
                i % 2 === 1 ? " mentorship__card--reverse" : ""
              }`}
              style={{ "--accent": item.accent }}
            >
              <div className="mentorship__panel mentorship__panel--quote">
                <blockquote className="mentorship__quote">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mentorship__attribution">
                  <span className="mentorship__avatar">
                    <ImagePlaceholder
                      id={`mentor-${i + 1}`}
                      shape="circle"
                    />
                  </span>
                  <span className="mentorship__name">{item.name}</span>
                </div>
              </div>

              <div className="mentorship__panel mentorship__panel--image">
                <ImagePlaceholder
                  id={`mentor-photo-${i + 1}`}
                  label={item.name}
                  className="mentorship__photo"
                />
              </div>

              <span className="mentorship__notch mentorship__notch--top" />
              <span className="mentorship__notch mentorship__notch--bottom" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
