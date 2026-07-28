import { useRef } from "react";
import { techStack } from "../data";
import "./TechStack.css";

export default function TechStack() {
  const railRef = useRef(null);

  const scrollByCard = (dir) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="tech">
      <div className="tech__inner">
        <div className="tech__header">
          <div className="tech__heading-col">
            <h2 className="tech__heading">
              Technology
              <br />
              behind the work
            </h2>
            <div className="tech__nav">
              <button
                className="tech__nav-btn"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous technology"
              >
                ‹
              </button>
              <button
                className="tech__nav-btn"
                onClick={() => scrollByCard(1)}
                aria-label="Next technology"
              >
                ›
              </button>
            </div>
          </div>
          <div className="tech__copy-col">
            <p className="tech__copy">
              A stack chosen for speed and reach — the same tools used to
              research, build, record, and stay connected with founders and
              leaders across 120+ countries.
            </p>
            <div className="tech__stats">
              <div className="tech__stat">
                <div className="tech__stat-value">{techStack.length}+</div>
                <div className="tech__stat-label">
                  core tools across ventures
                </div>
              </div>
              <div className="tech__stat">
                <div className="tech__stat-value">120+</div>
                <div className="tech__stat-label">
                  countries connected daily
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech__rail" ref={railRef}>
          {techStack.map((t) => (
            <div key={t.slotId} className="tech__card">
              <div
                className="tech__card-media"
                style={{ background: t.color }}
              >
                <span className="tech__card-tag">{t.tag}</span>
                <span className="tech__card-mark">{t.name}</span>
              </div>
              <div className="tech__card-body">
                <p className="tech__card-blurb">{t.blurb}</p>
                <div className="tech__card-name">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
