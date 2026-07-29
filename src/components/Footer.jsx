import { navigate } from "../router";
import "./Footer.css";

const EMAIL = "arijit79in@gmail.com";

const footerGroups = [
  {
    title: "About",
    links: [
      { label: "Home", path: "/" },
      { label: "Bio", path: "/bio" },
    ],
  },
  {
    title: "Ventures",
    links: [
      { label: "Technology", path: "/technology" },
      { label: "Investments", path: "/investments" },
      { label: "Mentoring", path: "/mentoring" },
    ],
  },
  {
    title: "Creative",
    links: [
      { label: "Drawings", path: "/drawings" },
      { label: "Photography", path: "/photography" },
      { label: "Virtual Reality", path: "/virtual-reality" },
      { label: "Media & Entertainment", path: "/media-entertainment" },
    ],
  },
  {
    title: "Press",
    links: [
      { label: "Latest Speaks", path: "/latest-speaks" },
      { label: "Press & News", path: "/press-news" },
      { label: "Blog", path: "/blog" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/arijitin/",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arijitbhattacharyya/",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
        <path d="M7 10.2v7.3" />
        <circle cx="7" cy="7.1" r="1.1" fill="currentColor" stroke="none" />
        <path d="M11.4 17.5v-7.3M11.4 13.1c0-1.6 1-2.6 2.5-2.6s2.6 1 2.6 2.9v4.1" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/arijit.bhattacharyya",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <path d="M15.2 7.6h-1.5c-1.1 0-1.8.7-1.8 1.8v12.1M9.3 12.3h5.4" />
      </>
    ),
  },
  {
    label: "X",
    href: "https://x.com/arijitgames",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <path d="M7 7l10 10M17 7L7 17" />
      </>
    ),
  },
];

export default function Footer() {
  const go = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__inner">
          <p className="contact__eyebrow">Get in touch</p>
          <h2 className="contact__title">
            Let&rsquo;s build something worth talking about.
          </h2>
          <p className="contact__text">
            Speaking invitations, mentorship, investments or collaborations
            &mdash; drop a note and it lands straight in my inbox.
          </p>
          <a
            className="contact__cta"
            href="/contact"
            onClick={(e) => go(e, "/contact")}
          >
            <span>Open the contact page</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo" onClick={(e) => go(e, "/")}>
              ARIJIT&nbsp;BHATTACHARYYA
            </a>
            <p className="footer__tagline">
              Entrepreneur, mentor, storyteller &amp; technologist.
            </p>
            <div className="footer__socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__nav">
            {footerGroups.map((group) => (
              <div className="footer__col" key={group.title}>
                <h3 className="footer__col-title">{group.title}</h3>
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => go(e, link.path)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
            <div className="footer__col">
              <h3 className="footer__col-title">Contact</h3>
              <a href="/contact" onClick={(e) => go(e, "/contact")}>
                Contact Page
              </a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Arijit Bhattacharyya</span>
          <span>All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
