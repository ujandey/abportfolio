import { useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { getBlogPost, getRelatedPosts } from "../../blogContent";
import { navigate } from "../../router";
import { formatBlogDate } from "./formatBlogDate";
import "./BlogPage.css";
import "./BlogPostPage.css";

function link(e, path) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  navigate(path);
}

function NotFound() {
  useEffect(() => {
    document.title = "Post not found — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="bp">
      <Nav />
      <section className="bp-inner bpp-missing">
        <h1 className="bpp-missing__title">This post isn’t here</h1>
        <p className="bpp-missing__text">
          The link may be out of date. Browse everything on the blog instead.
        </p>
        <a className="bpp-back" href="/blog" onClick={(e) => link(e, "/blog")}>
          <span aria-hidden="true">←</span> Back to blog
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default function BlogPostPage({ slug }) {
  const post = getBlogPost(slug);

  useEffect(() => {
    if (post) document.title = `${post.title} — Arijit Bhattacharyya`;
  }, [post]);

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.slug);

  return (
    <div className="bp bpp">
      <Nav />

      <article className="bpp-article">
        <div className="bp-inner bpp-col">
          <a className="bpp-back" href="/blog" onClick={(e) => link(e, "/blog")}>
            <span aria-hidden="true">←</span> Back to blog
          </a>

          {post.category ? <span className="bp-eyebrow">{post.category}</span> : null}

          <h1 className="bpp-title">{post.title}</h1>

          <div className="bpp-meta">
            <span className="bp-card__author">{post.author || "Arijit Bhattacharyya"}</span>
            {post.date ? <span className="bp-card__dot">·</span> : null}
            {post.date ? <span className="bp-card__date">{formatBlogDate(post.date)}</span> : null}
          </div>

          {post.image ? (
            <img className="bpp-hero" src={post.image} alt={post.title} />
          ) : null}

          <div className="bpp-text">
            {(post.body || []).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="bpp-related">
          <div className="bp-inner">
            <h2 className="bpp-related__heading">Keep reading</h2>
            <div className="bpp-related__grid">
              {related.map((item) => (
                <a
                  key={item.id}
                  className="bpp-related__card"
                  href={item.path}
                  onClick={(e) => link(e, item.path)}
                >
                  {item.image ? (
                    <div className="bpp-related__media">
                      <img
                        className="bpp-related__img"
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <h3 className="bpp-related__title">{item.title}</h3>
                  {item.excerpt ? (
                    <p className="bpp-related__excerpt">{item.excerpt}</p>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </div>
  );
}
