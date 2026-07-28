import { useEffect, useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { featuredMoments } from "../data";
import "./FeaturedMoments.css";

function Caption({ text, strong }) {
  if (!strong) return text;
  const i = text.indexOf(strong);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong>{strong}</strong>
      {text.slice(i + strong.length)}
    </>
  );
}

export default function FeaturedMoments() {
  const rootRef = useRef(null);
  const figureRefs = useRef([]);

  const rows = [];
  for (let i = 0; i < featuredMoments.length; i += 2) {
    rows.push(featuredMoments.slice(i, i + 2));
  }

  useEffect(() => {
    const items = Array.from(
      rootRef.current.querySelectorAll("[data-fm-reveal]")
    );
    if (!items.length || !("IntersectionObserver" in window)) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onFigureMove = (e, tiltEl) => {
    const r = tiltEl.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltEl.style.transform = `perspective(1100px) rotateX(${(-py * 5).toFixed(
      2
    )}deg) rotateY(${(px * 6).toFixed(2)}deg) scale(1.03)`;
  };

  const onFigureEnter = (i) => {
    figureRefs.current.forEach((fig, j) => {
      if (fig && j !== i) fig.style.opacity = "0.55";
    });
  };

  const onFigureLeave = (i, tiltEl) => {
    tiltEl.style.transform = "";
    figureRefs.current.forEach((fig) => {
      if (fig) fig.style.opacity = "1";
    });
  };

  return (
    <section className="featured-moments" ref={rootRef}>
      <div className="featured-moments__glow featured-moments__glow--blue" />
      <div className="featured-moments__glow featured-moments__glow--gold" />

      <div className="featured-moments__inner">
        <div className="featured-moments__intro" data-fm-reveal>
          <div className="featured-moments__eyebrow">
            <span className="featured-moments__eyebrow-dot" />
            ON THE WORLD&apos;S STAGES
          </div>
          <h2 className="featured-moments__heading">
            Moments that made the headlines
          </h2>
          <p className="featured-moments__lede">
            From national felicitations alongside cabinet ministers to
            keynote billing at continental summits — a look at the rooms the
            work has earned a seat in.
          </p>
        </div>

        <div className="featured-moments__rows">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`featured-moments__grid${
                rowIndex % 2 === 1 ? " featured-moments__grid--alt" : ""
              }`}
            >
              {row.map((moment, colIndex) => {
                const i = rowIndex * 2 + colIndex;
                const tiltRef = { current: null };
                return (
                  <figure
                    key={moment.slotId}
                    data-fm-reveal
                    className="featured-moments__figure"
                    style={{ transitionDelay: colIndex === 0 ? "0ms" : "120ms" }}
                    ref={(el) => (figureRefs.current[i] = el)}
                    onMouseEnter={() => onFigureEnter(i)}
                    onMouseMove={(e) => tiltRef.current && onFigureMove(e, tiltRef.current)}
                    onMouseLeave={() => tiltRef.current && onFigureLeave(i, tiltRef.current)}
                  >
                    <div
                      className="featured-moments__index"
                      style={{
                        WebkitTextStroke: `1.5px ${moment.accent}33`,
                        textAlign: colIndex === 0 ? "left" : "right",
                        left: colIndex === 0 ? "-14px" : "auto",
                        right: colIndex === 0 ? "auto" : "-10px",
                      }}
                    >
                      {moment.index}
                    </div>

                    <div
                      className="featured-moments__tilt"
                      ref={(el) => (tiltRef.current = el)}
                      style={{ boxShadow: `0 40px 90px -30px rgba(0,0,0,0.9), 0 0 0 1px ${moment.accent}38` }}
                    >
                      {moment.image ? (
                        <img
                          src={moment.image}
                          alt={moment.alt}
                          className={`featured-moments__cover${
                            moment.fit === "contain"
                              ? " featured-moments__cover--contain"
                              : ""
                          }`}
                        />
                      ) : (
                        <ImagePlaceholder
                          id={moment.slotId}
                          label={moment.alt}
                          shape="rect"
                          className="featured-moments__cover"
                        />
                      )}

                      {moment.overlay === "bottom" && (
                        <>
                          <div className="featured-moments__scrim featured-moments__scrim--bottom" />
                          <div className="featured-moments__overlay-text">
                            <div
                              className="featured-moments__kicker"
                              style={{ color: `${moment.accent}` }}
                            >
                              {moment.kicker}
                            </div>
                            <div className="featured-moments__overlay-title">
                              {moment.title}
                            </div>
                          </div>
                        </>
                      )}

                      {moment.overlay === "top" && (
                        <>
                          <div className="featured-moments__scrim featured-moments__scrim--top" />
                          <div
                            className="featured-moments__badge"
                            style={{ borderColor: `${moment.accent}66` }}
                          >
                            <span
                              className="featured-moments__badge-dot"
                              style={{ background: moment.accent }}
                            />
                            <span
                              className="featured-moments__badge-text"
                              style={{ color: moment.accent }}
                            >
                              {moment.badge}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <figcaption className="featured-moments__caption">
                      <span
                        className="featured-moments__caption-bar"
                        style={{ background: moment.accent }}
                      />
                      <div>
                        {moment.overlay === "top" && (
                          <div className="featured-moments__caption-title">
                            {moment.title}
                          </div>
                        )}
                        <p className="featured-moments__caption-text">
                          <Caption text={moment.caption} strong={moment.captionStrong} />
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
