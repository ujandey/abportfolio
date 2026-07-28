import { useLayoutEffect, useRef, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { books } from "../data";
import "./Books.css";

export default function Books() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);
  const active = books[activeIndex];

  useLayoutEffect(() => {
    setExpanded(false);
  }, [activeIndex]);

  useLayoutEffect(() => {
    const el = descriptionRef.current;
    if (!el || expanded) return;
    setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
  }, [active.description, expanded]);

  return (
    <section className="books">
      <div className="books__inner">
        <div className="books__intro">
          <div className="books__eyebrow">
            <span className="books__eyebrow-dot" />
            AUTHORED WORKS
          </div>
          <h2 className="books__heading">Books</h2>
          <p className="books__lede">
            Two decades of building, investing, and mentoring — distilled
            into books on entrepreneurship, leadership, and legacy.
          </p>
          <a
            href="https://www.amazon.com/author/arijitbhattacharyya"
            target="_blank"
            rel="noopener noreferrer"
            className="books__explore"
          >
            View all on Amazon <span className="books__explore-chevron" />
          </a>
        </div>

        <div className="books__shelf-wrap">
          <div className="books__shelf">
            {books.map((book, i) => (
              <button
                key={book.slotId}
                type="button"
                className={`books__book ${
                  i === activeIndex ? "books__book--active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                <span className="books__cover-wrap">
                  {book.image ? (
                    <img
                      className="books__cover-img"
                      src={book.image}
                      alt={book.title}
                      draggable="false"
                    />
                  ) : (
                    <ImagePlaceholder
                      id={book.slotId}
                      label={book.title}
                      shape="rect"
                    />
                  )}
                </span>
                <span className="books__book-caption">{book.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="books__detail" key={active.slotId}>
          <div className="books__detail-subtitle">{active.subtitle}</div>
          <h3 className="books__detail-title">{active.title}</h3>
          <p
            ref={descriptionRef}
            className={`books__detail-description${
              expanded ? "" : " books__detail-description--clamped"
            }`}
          >
            {active.description}
          </p>
          {(isOverflowing || expanded) && (
            <button
              type="button"
              className="books__read-more"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
          <a
            href={active.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="books__buy"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
