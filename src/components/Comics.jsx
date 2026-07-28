import { useRef, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { comicGenres, comics } from "../data";
import "./Comics.css";

export default function Comics() {
  const [active, setActive] = useState("All");
  const railRef = useRef(null);
  const dragState = useRef(null);

  const visible =
    active === "All" ? comics : comics.filter((c) => c.genre === active);

  const onDragStart = (e) => {
    const rail = railRef.current;
    if (!rail) return;
    dragState.current = { startX: e.pageX, startScroll: rail.scrollLeft, moved: false };
    rail.classList.add("comics__rail--dragging");

    const onMove = (ev) => {
      const state = dragState.current;
      if (!state) return;
      const dx = ev.pageX - state.startX;
      if (Math.abs(dx) > 4) state.moved = true;
      rail.scrollLeft = state.startScroll - dx;
    };
    const onUp = () => {
      rail.classList.remove("comics__rail--dragging");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      dragState.current = null;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <section className="comics">
      <div className="comics__intro">
        <div className="comics__eyebrow">
          <span className="comics__eyebrow-dot" />
          COMICS
        </div>
        <h2 className="comics__heading">
          Comics written
          <br />
          by Arijit
        </h2>
        <p className="comics__lede">
          Original series brought to life with Team Virtualinfocom — the
          sci-fi vigilante saga <em>Final Crisis</em> and the fantasy epic{" "}
          <em>Archer</em>. Every issue plotted, drawn, and written by Arijit
          Bhattacharyya.
        </p>
      </div>

      <div className="comics__toolbar">
        <div className="comics__filters">
          {comicGenres.map((genre) => (
            <button
              key={genre}
              type="button"
              className={`comics__filter ${
                genre === active ? "comics__filter--active" : ""
              }`}
              onClick={() => setActive(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <a href="#" className="comics__see-all">
          See all
          <svg
            className="comics__see-all-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div
        ref={railRef}
        className="comics__rail"
        onMouseDown={onDragStart}
      >
        {visible.map((comic) => (
          <div key={comic.slotId} className="comics__card">
            <div className="comics__cover">
              {comic.image ? (
                <img
                  className="comics__cover-img"
                  src={comic.image}
                  alt={comic.alt || comic.title}
                  draggable="false"
                />
              ) : (
                <ImagePlaceholder
                  id={comic.slotId}
                  label={comic.title}
                  shape="rect"
                />
              )}
            </div>
            <div className="comics__card-footer">
              <div>
                <div className="comics__card-title">{comic.title}</div>
                <div className="comics__card-meta">{comic.meta}</div>
              </div>
              <button
                type="button"
                className="comics__card-arrow"
                aria-label={`Read ${comic.title}`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
