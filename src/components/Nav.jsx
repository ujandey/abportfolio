import { useState } from "react";
import { navigate } from "../router";
import "./Nav.css";

const navGroups = [
  { label: "About", path: "/bio" },
  {
    label: "Ventures",
    children: [
      { label: "Technology", path: "/technology" },
      { label: "Investments", path: "/investments" },
      { label: "Mentoring", path: "/mentoring" },
    ],
  },
  {
    label: "Creative",
    children: [
      { label: "Drawings", path: "/drawings" },
      { label: "Photography", path: "/photography" },
      { label: "Virtual Reality", path: "/virtual-reality" },
      { label: "Media & Entertainment", path: "/media-entertainment" },
    ],
  },
  { label: "Speaking", path: "/latest-speaks" },
  {
    label: "Press",
    children: [
      { label: "Press & News", path: "/press-news" },
      { label: "Blog", path: "/blog" },
    ],
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (e, path) => {
    setMenuOpen(false);
    if (path) {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <header className="nav">
      <a
        href="/"
        className="nav__logo"
        onClick={(e) => go(e, "/")}
      >
        ARIJIT&nbsp;BHATTACHARYYA
      </a>

      <nav className={`nav__links${menuOpen ? " nav__links--open" : ""}`}>
        {navGroups.map((group) =>
          group.children ? (
            <div className="nav__item nav__item--group" key={group.label}>
              <span className="nav__link nav__link--group">
                {group.label}
                <span className="nav__caret" aria-hidden="true" />
              </span>
              <div className="nav__dropdown">
                {group.children.map((child) => (
                  <a
                    href={child.path}
                    className="nav__dropdown-link"
                    key={child.label}
                    onClick={(e) => go(e, child.path)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="nav__item" key={group.label}>
              <a
                href={group.path}
                className="nav__link"
                onClick={(e) => go(e, group.path)}
              >
                {group.label}
              </a>
            </div>
          )
        )}
        <div className="nav__links-mobile-extra">
          <a
            href="/contact"
            className="nav__cta"
            onClick={(e) => go(e, "/contact")}
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="nav__right">
        <a
          href="/contact"
          className="nav__cta"
          onClick={(e) => go(e, "/contact")}
        >
          Contact
        </a>
      </div>

      <button
        type="button"
        className={`nav__toggle${menuOpen ? " nav__toggle--open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
