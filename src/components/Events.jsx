import { useRef, useState } from "react";
import { rawEvents } from "../data";
import "./Events.css";

export default function Events({ accent }) {
  const railRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDot, setActiveDot] = useState(0);

  const cardWidth = () =>
    railRef.current ? railRef.current.scrollWidth / rawEvents.length : 0;

  const goToDot = (i) => {
    if (!railRef.current) return;
    const w = cardWidth();
    railRef.current.scrollTo({ left: w * i, behavior: "smooth" });
    setActiveDot(i);
  };

  const onDragStart = (e) => {
    if (!railRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX;
    dragStartScroll.current = railRef.current.scrollLeft;
  };

  const onDragMove = (e) => {
    if (!isDragging || !railRef.current) return;
    const delta = e.pageX - dragStartX.current;
    railRef.current.scrollLeft = dragStartScroll.current - delta;
  };

  const onDragEnd = () => setIsDragging(false);

  const onRailScroll = () => {
    if (!railRef.current) return;
    const w = cardWidth();
    if (!w) return;
    const idx = Math.round(railRef.current.scrollLeft / w);
    if (idx !== activeDot) setActiveDot(idx);
  };

  return (
    <section className="events">
      <div
        ref={railRef}
        className="events__rail"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onScroll={onRailScroll}
      >
        {rawEvents.map((ev, i) => (
          <div
            key={ev.slotId}
            className="events__card"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="events__card-img"
              style={{
                transform: hoveredIndex === i ? "scale(1.06)" : "scale(1)",
              }}
            >
              <img
                src={ev.image}
                alt={ev.alt}
                draggable="false"
              />
            </div>
            <div
              className="events__card-scrim"
              style={{ opacity: hoveredIndex === i ? 0.35 : 0.8 }}
            />
            <div className="events__card-text">
              <div className="events__card-kicker">{ev.kicker}</div>
              <div className="events__card-title">{ev.title}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="events__nav events__nav--prev"
        onClick={() => goToDot(Math.max(0, activeDot - 1))}
        aria-label="Previous event"
      >
        ‹
      </button>
      <button
        className="events__nav events__nav--next"
        onClick={() => goToDot(Math.min(rawEvents.length - 1, activeDot + 1))}
        aria-label="Next event"
      >
        ›
      </button>

      <div className="events__dots">
        {rawEvents.map((ev, i) => (
          <button
            key={ev.slotId}
            className="events__dot"
            style={{
              background: i === activeDot ? accent : "rgba(255,255,255,0.35)",
            }}
            onClick={() => goToDot(i)}
            aria-label={`Go to event ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
