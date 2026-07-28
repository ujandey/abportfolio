import { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { blogPosts } from "../blogContent";
import "./BlogPage.css";

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ post, onOpen }) {
  return (
    <article className="bp-card">
      {post.image ? (
        <div className="bp-card__media">
          <img
            className="bp-card__img"
            src={post.image}
            alt={post.title}
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="bp-card__body">
        <div className="bp-card__meta">
          <span className="bp-card__author">{post.author || "Arijit Bhattacharyya"}</span>
          {post.date ? <span className="bp-card__dot">·</span> : null}
          {post.date ? <span className="bp-card__date">{formatDate(post.date)}</span> : null}
        </div>

        <h2 className="bp-card__title">{post.title}</h2>

        {post.excerpt ? <p className="bp-card__excerpt">{post.excerpt}</p> : null}

        <button type="button" className="bp-card__more" onClick={() => onOpen(post)}>
          Read more
          <span className="bp-card__arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

function FeaturedHero({ posts, onOpen }) {
  if (!posts || posts.length === 0) return null;

  const [lead, ...rest] = posts;
  const side = rest.slice(0, 3);

  return (
    <section className="bp-featured">
      <div className="bp-inner">
        <h1 className="bp-featured__headline">
          Inspiration at
          <br />
          your fingertips
        </h1>

        <div className="bp-featured__grid">
          <article
            className="bp-lead"
            role="button"
            tabIndex={0}
            onClick={() => onOpen(lead)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen(lead);
              }
            }}
          >
            {lead.image ? (
              <img className="bp-lead__img" src={lead.image} alt={lead.title} />
            ) : null}
            <div className="bp-lead__scrim" />
            <div className="bp-lead__body">
              {lead.category ? (
                <span className="bp-eyebrow">{lead.category}</span>
              ) : null}
              <h2 className="bp-lead__title">{lead.title}</h2>
              {lead.excerpt ? (
                <p className="bp-lead__excerpt">{lead.excerpt}</p>
              ) : null}
            </div>
          </article>

          <div className="bp-side">
            {side.map((post) => (
              <article
                key={post.id}
                className="bp-mini"
                role="button"
                tabIndex={0}
                onClick={() => onOpen(post)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpen(post);
                  }
                }}
              >
                {post.image ? (
                  <div className="bp-mini__media">
                    <img
                      className="bp-mini__img"
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="bp-mini__body">
                  {post.category ? (
                    <span className="bp-eyebrow">{post.category}</span>
                  ) : null}
                  <h3 className="bp-mini__title">{post.title}</h3>
                  {post.excerpt ? (
                    <p className="bp-mini__excerpt">{post.excerpt}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogReader({ post, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="bp-reader" role="dialog" aria-modal="true" aria-label={post.title}>
      <div className="bp-reader__bar">
        <div className="bp-inner bp-reader__bar-inner">
          <button type="button" className="bp-reader__close" onClick={onClose}>
            <span aria-hidden="true">←</span> Back to blog
          </button>
        </div>
      </div>

      <article className="bp-reader__scroll">
        <div className="bp-inner bp-reader__col">
          <div className="bp-reader__meta">
            <span className="bp-card__author">{post.author || "Arijit Bhattacharyya"}</span>
            {post.date ? <span className="bp-card__dot">·</span> : null}
            {post.date ? <span className="bp-card__date">{formatDate(post.date)}</span> : null}
          </div>

          <h1 className="bp-reader__title">{post.title}</h1>

          {post.image ? (
            <img className="bp-reader__hero" src={post.image} alt={post.title} />
          ) : null}

          <div className="bp-reader__text">
            {(post.body || []).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.title = "Blog — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="bp">
      <Nav />

      <FeaturedHero posts={blogPosts.slice(0, 4)} onOpen={setActive} />

      <section className="bp-list-section">
        <div className="bp-inner">
          {blogPosts.length === 0 ? (
            <p className="bp-empty">New posts are on the way. Check back soon.</p>
          ) : (
            <div className="bp-list">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} onOpen={setActive} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {active ? <BlogReader post={active} onClose={() => setActive(null)} /> : null}
    </div>
  );
}
