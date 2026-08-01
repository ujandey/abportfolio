import { useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { blogPosts } from "../../blogContent";
import { navigate } from "../../router";
import { formatBlogDate } from "./formatBlogDate";
import "./BlogPage.css";

// Each post lives on its own page at /blog/<slug>, so every card here is a
// real link — middle-click and "open in new tab" work, and the click handler
// just keeps navigation client-side.
function openPost(e, post) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  navigate(post.path);
}

function BlogCard({ post }) {
  return (
    <article className="bp-card">
      {post.image ? (
        <a className="bp-card__media" href={post.path} onClick={(e) => openPost(e, post)}>
          <img
            className="bp-card__img"
            src={post.image}
            alt={post.title}
            loading="lazy"
          />
        </a>
      ) : null}

      <div className="bp-card__body">
        <div className="bp-card__meta">
          <span className="bp-card__author">{post.author || "Arijit Bhattacharyya"}</span>
          {post.date ? <span className="bp-card__dot">·</span> : null}
          {post.date ? <span className="bp-card__date">{formatBlogDate(post.date)}</span> : null}
        </div>

        <h2 className="bp-card__title">
          <a className="bp-card__link" href={post.path} onClick={(e) => openPost(e, post)}>
            {post.title}
          </a>
        </h2>

        {post.excerpt ? <p className="bp-card__excerpt">{post.excerpt}</p> : null}

        <a className="bp-card__more" href={post.path} onClick={(e) => openPost(e, post)}>
          Read more
          <span className="bp-card__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function FeaturedHero({ posts }) {
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
          <a className="bp-lead" href={lead.path} onClick={(e) => openPost(e, lead)}>
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
          </a>

          <div className="bp-side">
            {side.map((post) => (
              <a
                key={post.id}
                className="bp-mini"
                href={post.path}
                onClick={(e) => openPost(e, post)}
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  useEffect(() => {
    document.title = "Blog — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="bp">
      <Nav />

      <FeaturedHero posts={blogPosts.slice(0, 4)} />

      <section className="bp-list-section">
        <div className="bp-inner">
          {blogPosts.length === 0 ? (
            <p className="bp-empty">New posts are on the way. Check back soon.</p>
          ) : (
            <div className="bp-list">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
