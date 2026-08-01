import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import LifeStory from "./LifeStory";
import BioProfile from "./BioProfile";
import ImagePlaceholder from "./ImagePlaceholder";
import heroImg from "../assets/bio/AB.png";
const deepblueImg = "/images/hero/deepblue.jpeg";
const stageImg = "/images/media/stage.jpeg";
const ghanaImg = "/images/global/ghana.jpeg";
import heroVideo from "../assets/bio/bio-hero.mp4";
import bjBannerAmbient from "../assets/bj-banner/GXJP2960.JPG.jpeg";
import bjBannerProfile from "../assets/bj-banner/Arijit_White_profile.png";
import bjBanner1 from "../assets/bj-banner/IMG_2533.JPG.jpeg";
import bjBanner2 from "../assets/bj-banner/IMG_7934.JPG.jpeg";
import bjBanner3 from "../assets/bj-banner/IMG_8059.JPG.jpeg";
import bjBanner4 from "../assets/bj-banner/IMG_8080.JPG.jpeg";
import {
  heroStats,
  fourPillars,
  positioningSignals,
  positioningRotators,
  positioningStack,
  positioningRoles,
  positioningProof,
  positioningFirsts,
  signalCards,
  ventureGroups,
  extendedEcosystem,
  positionsOfInfluence,
  globalFootprint,
  institutionalNetwork,
  educationLede,
  educationGroups,
  architecturePillars,
  founderVentureNetwork,
  originStoryTags,
  timeline,
  globalImpactCards,
  globalStages,
  visualArchive,
  seenAcross,
  pressGroups,
  industryTags,
  industryPillars,
  industryDetail,
  genAiFilms,
  genAiWorksList,
  comicsVirtualWorlds,
  moviesProduction,
  epicResearch,
  gamesVrHighlights,
  socialImpactCategories,
  socialImpactPrograms,
  legacyArchive,
  closingStats,
  tedxLogo,
  ecotimesLogo,
  toiLogo,
} from "../bioContent";
import "./BioPage.css";

const bannerImages = [bjBanner1, bjBannerProfile, bjBanner2, bjBanner3, bjBanner4];

/* ---------------------------------------------------------------- helpers */

function VentureLogo({ name, image }) {
  if (image) {
    return (
      <div className="bj-logo-chip">
        <img src={image} alt={`${name} logo`} />
      </div>
    );
  }
  return (
    <div className="bj-logo-chip bj-logo-chip--text">
      <span>{name}</span>
    </div>
  );
}

/* Consistent chapter header used across the redesigned sections */
function ChapterHead({ index, label, title, intro, children, wide }) {
  return (
    <header className="ab-head" data-reveal>
      <div className="ab-head__meta">
        {index && <span className="ab-head__index">{index}</span>}
        <span className="ab-head__tick" aria-hidden="true" />
        <span className="ab-head__label">{label}</span>
      </div>
      <h2 className={`ab-head__title${wide ? " ab-head__title--wide" : ""}`}>
        {title}
      </h2>
      {intro && <p className="ab-head__intro">{intro}</p>}
      {children}
    </header>
  );
}

/* Scroll-reveal for [data-reveal] elements */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Split a flat list into n roughly-equal rows (for marquee bands) */
function splitRows(list, rows) {
  const out = Array.from({ length: rows }, () => []);
  list.forEach((item, i) => out[i % rows].push(item));
  return out;
}

/* ---------------------------------------------------------------- page */

export default function BioPage() {
  const [isMuted, setIsMuted] = useState(true);
  const [rotatorIndex, setRotatorIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "About — Arijit Bhattacharyya";
  }, []);

  /* Cycle the positioning headline role */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => {
      setRotatorIndex((i) => (i + 1) % positioningRotators.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  useReveal();

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const footprintRows = splitRows(globalFootprint, 3);

  return (
    <div className="bio">
      <Nav />

      {/* ============================================================ HERO */}
      <section className="bio-hero">
        <div className="bio-hero__frame">
          <div className="bio-hero__panel" />
          <div className="bio-hero__video" onClick={toggleMute}>
            <video
              ref={videoRef}
              src={heroVideo}
              poster={stageImg}
              className="bio-hero__video-img"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            <button
              type="button"
              className="bio-hero__video-cta"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              <span className="bio-hero__play">
                {isMuted ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="4 9 8 9 13 4 13 20 8 15 4 15 4 9" fill="#fff" stroke="none" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="4 9 8 9 13 4 13 20 8 15 4 15 4 9" fill="#fff" stroke="none" />
                    <path d="M17 8a5 5 0 0 1 0 8" />
                    <path d="M19.5 5.5a9 9 0 0 1 0 13" />
                  </svg>
                )}
              </span>
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
          <div className="bio-hero__portrait">
            <img
              src={heroImg}
              alt="Portrait of Arijit Bhattacharyya"
              className="bio-hero__portrait-img"
            />
          </div>
          <div className="bio-hero__copy">
            <div className="bio-hero__eyebrow">
              <span className="bio-hero__eyebrow-dot" />
              ABOUT ARIJIT
            </div>
            <h1>Bold ideas answer to a bigger calling</h1>
          </div>
        </div>
      </section>

      {/* ============================================================ STATS */}
      <section className="bj-section bj-section--dark">
        <div className="bj-inner">
          <div className="bj-stat-grid">
            {heroStats.map((s) => (
              <div className="bj-stat" key={s.label}>
                {s.prefix && <div className="bj-stat__prefix">{s.prefix}</div>}
                <div className="bj-stat__value">{s.value}</div>
                <div className="bj-stat__label">{s.label}</div>
                {s.sub && <div className="bj-stat__sub">{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>
        <div className="bj-banner" aria-label="Arijit image banner">
          <div className="bj-banner__ambient" aria-hidden="true">
            <img src={bjBannerAmbient} alt="" />
          </div>
          <svg
            className="bj-banner__mask"
            viewBox="0 0 1500 470"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="ARIJIT BHATTACHARYYA"
          >
            <defs>
              <clipPath id="bj-banner-clip">
                <text
                  className="bj-banner__clip-text bj-banner__clip-text--first"
                  x="750"
                  y="155"
                  textAnchor="middle"
                  textLength="1260"
                  lengthAdjust="spacingAndGlyphs"
                >
                  ARIJIT
                </text>
                <text
                  className="bj-banner__clip-text bj-banner__clip-text--last"
                  x="750"
                  y="347"
                  textAnchor="middle"
                  textLength="1430"
                  lengthAdjust="spacingAndGlyphs"
                >
                  BHATTACHARYYA
                </text>
              </clipPath>
            </defs>
            <g clipPath="url(#bj-banner-clip)">
              <g className="bj-banner__image-chain">
                {[0, 1, 2].map((copyIndex) =>
                  bannerImages.map((image, imageIndex) => (
                    <image
                      key={`${copyIndex}-${imageIndex}`}
                      href={image}
                      x={copyIndex * (bannerImages.length * 410) + imageIndex * 410}
                      y="66"
                      width="410"
                      height="322"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  ))
                )}
              </g>
            </g>
          </svg>
        </div>
      </section>

      <BioProfile />

      {/* ====================================================== POSITIONING */}
      <section className="pos" id="positioning">
        <div className="pos__inner">
          {/* --- headline with rotating role --- */}
          <header className="pos__head">
            <div className="bj-kicker bj-kicker--light">Positioning</div>
            <h2 className="pos__title">
              <span className="pos__title-line">Arijit Bhattacharyya is a</span>
              <span className="pos__rotator" aria-live="polite">
                {positioningRotators.map((word, i) => (
                  <span
                    key={word}
                    className={`pos__word${i === rotatorIndex ? " is-active" : ""}`}
                    aria-hidden={i !== rotatorIndex}
                  >
                    {word}.
                  </span>
                ))}
                <span className="pos__word pos__word--ghost" aria-hidden="true">
                  {positioningRotators.reduce(
                    (a, b) => (b.length > a.length ? b : a),
                    ""
                  )}
                  .
                </span>
              </span>
            </h2>
            <div className="pos__lede">
              <p>
                Not one title, one industry or one decade. For more than 29
                years the work has moved across technology, entrepreneurship,
                investment, public influence and creative world-building —
                and every discipline he picked up, he kept.
              </p>
              <p>
                A rare combination of technologist and investment specialist:
                the same person writes the engine code, backs the founder,
                takes the workshop at an IIT or an IIM, and directs the film.
              </p>
            </div>
          </header>

          {/* --- chronological identity stack --- */}
          <div className="pos__stack" data-reveal>
            <div className="pos__stack-label">
              <span className="ab-microlabel">The stack, in order of arrival</span>
              <p>
                Nothing here replaced what came before it. Each discipline was
                added on top of the last — which is why the ecosystem connects.
              </p>
            </div>
            <ol className="pos__rail">
              {positioningStack.map((s, i) => (
                <li
                  className="pos__step"
                  key={s.year}
                  data-reveal
                  style={{ "--d": `${i * 60}ms` }}
                >
                  <span className="pos__step-year">{s.year}</span>
                  <span className="pos__step-node" aria-hidden="true" />
                  <div className="pos__step-body">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* --- undated roles --- */}
          <div className="pos__roles" data-reveal>
            <span className="ab-microlabel">Also, without a start date</span>
            <div className="pos__role-cloud">
              {positioningRoles.map((r) => (
                <span className="pos__role" key={r}>
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* --- firsts --- */}
          <div className="pos__firsts">
            {positioningFirsts.map((f, i) => (
              <article
                className="pos__first"
                key={f.title}
                data-reveal
                style={{ "--d": `${i * 80}ms` }}
              >
                <span className="pos__first-kicker">{f.kicker}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>

          {/* --- proof strip --- */}
          <div className="pos__proof" data-reveal>
            {positioningProof.map((p, i) => (
              <div
                className="pos__proof-item"
                key={p.label}
                style={{ "--d": `${i * 50}ms` }}
              >
                <div className="pos__proof-value">{p.value}</div>
                <div className="pos__proof-label">{p.label}</div>
                <div className="pos__proof-sub">{p.sub}</div>
              </div>
            ))}
          </div>

          {/* --- closing statement --- */}
          <div className="pos__statement" data-reveal>
            <span>One journey.</span>
            <span>Multiple worlds.</span>
            <span>One connected ecosystem.</span>
          </div>
        </div>
      </section>

      {/* ============================================ CH 01 SIGNALS + TICKER */}
      <section className="ab-section ab-section--paper">
        <div className="ab-inner">
          <ChapterHead
            index="01"
            label="Positioning Signals"
            title="Founder since 1998, connecting technology, entrepreneurship, investment, education and global innovation ecosystems."
            wide
          />
        </div>
        <div className="ab-ticker" data-reveal aria-label="Positioning signals">
          <div className="ab-ticker__track">
            {[0, 1].map((copy) => (
              <div className="ab-ticker__set" aria-hidden={copy === 1} key={copy}>
                {positioningSignals.map((s) => (
                  <span className="ab-ticker__item" key={`${copy}-${s}`}>
                    {s}
                    <span className="ab-ticker__dot" aria-hidden="true">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="ab-inner">
          <div className="ab-signal-grid">
            {signalCards.map((c, i) => (
              <a
                className="ab-signal"
                href={c.anchor || "#"}
                key={c.title}
                data-reveal
                style={{ "--d": `${i * 70}ms` }}
              >
                <div className="ab-signal__media">
                  <ImagePlaceholder id={c.title} label={c.title} />
                  <span className="ab-signal__index">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="ab-signal__body">
                  <h3>{c.title}</h3>
                  <p>{c.caption}</p>
                  <span className="ab-signal__cta">{c.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== CH 02 BIOGRAPHY */}
      <section className="ab-section ab-section--ink ab-bio">
        <div className="ab-inner">
          <ChapterHead
            index="02"
            label="Biography Overview"
            title="A founder journey across technology, finance, education, investment and creative IP."
          />
          <div className="ab-bio__grid">
            <div className="ab-bio__rail" data-reveal>
              <span className="ab-bio__rail-year">1998</span>
              <span className="ab-bio__rail-line" aria-hidden="true" />
              <span className="ab-bio__rail-now">NOW</span>
            </div>
            <div className="ab-bio__copy">
              <p className="ab-lede" data-reveal>
                Arijit Bhattacharyya is a founder-operator, technologist, angel
                investor, author, TEDx speaker and global innovation ecosystem
                builder working across deeptech, creative technology,
                entrepreneurship, investment and institutional collaboration.
              </p>
              <p data-reveal>
                He founded Virtualinfocom in 1998 and continues to be associated
                with it as Founder &amp; Chairperson. The journey grew from one of
                India's early game, animation and immersive technology studios
                into a broader body of work across games, VR, AR, AI, blockchain,
                digital humans, education, media, startup mentoring and creative
                IP.
              </p>
              <p data-reveal>
                His public work connects founder-led ventures, advisory mandates,
                jury responsibilities, chamber networks, mentoring platforms and
                institutional engagements across business, education, innovation
                and international collaboration ecosystems.
              </p>
              <p data-reveal>
                As a public speaker since 2004 and an angel investor and startup
                mentor since 2008, he has worked with founders, students,
                professionals, business communities and innovation platforms
                through talks, workshops, mentoring sessions, jury roles and
                resource-person engagements.
              </p>
              <p data-reveal>
                Across institutions and ecosystems, he is best described as a
                visiting faculty member, mentor, speaker, jury member and
                resource person with contributions across selected IIMs, IITs,
                NITs, universities, chambers, startup platforms and global
                forums.
              </p>
            </div>
          </div>

          <div className="ab-pillars">
            {fourPillars.map((p, i) => (
              <a
                className="ab-pillar"
                href={p.anchor || "#"}
                key={p.title}
                data-reveal
                style={{ "--d": `${i * 70}ms` }}
              >
                <span className="ab-pillar__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p className="ab-pillar__lead">{p.lead}</p>
                <p className="ab-pillar__body">{p.body}</p>
                <span className="ab-pillar__tags">{p.tags}</span>
                <span className="ab-pillar__cta">Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== CH 03 ORIGIN STORY */}
      <section className="ab-section ab-section--ink ab-origin">
        <div className="ab-inner">
          <ChapterHead index="03" label="Origin Story" title="From Kolkata to a global innovation ecosystem." />
          <div className="ab-origin__grid">
            <div className="ab-origin__copy">
              <p data-reveal>
                Arijit Bhattacharyya began building from Kolkata at a time when
                India's gaming, animation, VR and digital IP ecosystem was still
                taking shape.
              </p>
              <p data-reveal>
                Virtualinfocom became the foundation for a larger founder-led
                journey across games, immersive technology, artificial
                intelligence, education, startup mentoring, investment networks,
                creative storytelling and global forums.
              </p>
              <blockquote className="ab-origin__pull" data-reveal>
                The thread has stayed consistent: bring art and technology
                together, then use that combination to build platforms for
                students, founders, creators, businesses and innovators.
              </blockquote>
            </div>
            <div className="ab-origin__cards">
              {originStoryTags.map((t, i) => (
                <div
                  className="ab-origin__card"
                  key={t.title}
                  data-reveal
                  style={{ "--d": `${i * 80}ms` }}
                >
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ EDUCATIONAL QUALIFICATION */}
      <section className="ab-section ab-section--paper ab-edu-section" id="education">
        <div className="ab-inner">
          <ChapterHead
            label="Educational Qualification"
            title="Degrees, certifications and the training behind the work."
            intro={educationLede}
          />
          <div className="ab-edu-grid">
            {educationGroups.map((group, i) => (
              <div
                className="ab-edu"
                key={group.title}
                data-reveal
                style={{ "--d": `${i * 70}ms` }}
              >
                <div className="ab-edu__head">
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                </div>
                <ul className="ab-edu__list">
                  {group.items.map((item) => (
                    <li className="ab-edu__item" key={item.title}>
                      <span className="ab-edu__credential">{item.credential}</span>
                      <span className="ab-edu__body">
                        <span className="ab-edu__title">{item.title}</span>
                        {item.note && (
                          <span className="ab-edu__note">{item.note}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= CH 04 VENTURES */}
      <section className="ab-section ab-section--ink ab-grid-bg" id="venture-ecosystem">
        <div className="ab-inner">
          <ChapterHead
            index="04"
            label="Founder Ecosystem"
            title="Venture ecosystem, platforms and products."
            intro="Since 1998, Arijit Bhattacharyya's ecosystem connects core ventures, investment platforms, creative brands, technology initiatives, communities and product-led networks across multiple industries."
          />

          {ventureGroups.map((g) => (
            <div className="ab-venture-group" key={g.title} data-reveal>
              <div className="ab-venture-group__head">
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
              <div className="ab-logo-grid">
                {g.items.map((item) => (
                  <VentureLogo key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}

          <div className="ab-venture-group ab-venture-group--extended" data-reveal>
            <div className="ab-venture-group__head">
              <span className="ab-microlabel">Extended Ecosystem</span>
              <h3>Additional platforms and product-led initiatives.</h3>
              <p>
                These connected brands, communities and product initiatives are
                presented as part of the wider ecosystem network, separate
                from the primary founder-company list.
              </p>
            </div>
            <div className="ab-logo-grid">
              {extendedEcosystem.map((item) => (
                <VentureLogo key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================== CH 05 FOUNDER NETWORK DETAIL */}
      <section className="ab-section ab-section--paper">
        <div className="ab-inner">
          <ChapterHead
            index="05"
            label="Founder & Venture"
            title="Ventures, platforms and ecosystem brands built across decades."
            intro="A structured view of the ventures, platforms and ecosystem brands connected with technology, gaming, investment, media, wellness, creative commerce and global business."
          />
          {founderVentureNetwork.map((group) => (
            <div className="ab-fnet" key={group.title} data-reveal>
              <h3 className="ab-fnet__title">{group.title}</h3>
              <div className="ab-fnet__grid">
                {group.items.map((item) => (
                  <div className="ab-fnet__card" key={item.name}>
                    <span className="ab-fnet__role">{item.role}</span>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <figure className="ab-founder-photo" data-reveal>
            <img
              src={deepblueImg}
              alt="Arijit Bhattacharyya at a professional speaking and technology event"
            />
            <figcaption className="ab-founder-photo__caption">
              <span className="ab-microlabel ab-microlabel--gold">
                Kolkata · Since 1998
              </span>
              <h3>From one early technology studio to a global innovation ecosystem.</h3>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================================================ CH 06 INFLUENCE */}
      <section className="ab-section ab-section--paper" id="positions-of-influence">
        <div className="ab-inner">
          <ChapterHead
            index="06"
            label="Positions of Influence"
            title="Global Roles, Advisory Positions & Institutional Engagements"
            intro="A curated view of founder leadership, advisory positions, public innovation roles and mentoring mandates across technology, entrepreneurship, investment and global business ecosystems."
          />
          {positionsOfInfluence.map((group, gi) => (
            <div className="ab-dossier" key={group.title} data-reveal>
              <div className="ab-dossier__side">
                <span className="ab-dossier__letter">
                  {String.fromCharCode(65 + gi)}
                </span>
                <span className="ab-microlabel">{group.title}</span>
              </div>
              <div className="ab-dossier__main">
                <h3>{group.subtitle}</h3>
                <p>{group.intro}</p>
                <ul className="ab-rows">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================= CH 07 INSTITUTIONAL NETWORK */}
      <section className="ab-section ab-section--paper">
        <div className="ab-inner">
          <ChapterHead
            index="07"
            label="Institutional"
            title="Institutional Speaking, Mentoring & Visiting Faculty"
            intro="A structured view of Arijit Bhattacharyya's institutional footprint across management schools, engineering campuses and academic ecosystems — as a visiting faculty member, mentor, speaker, jury member and resource person."
          />
          <div className="ab-inst-grid">
            {institutionalNetwork.map((group, i) => (
              <div
                className="ab-inst"
                key={group.title}
                data-reveal
                style={{ "--d": `${i * 60}ms` }}
              >
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
                <div className="ab-chip-cloud">
                  {group.items.map((item) => (
                    <span className="ab-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= CH 08 ARCHITECTURE */}
      <section className="ab-section ab-section--ink">
        <div className="ab-inner">
          <ChapterHead
            index="08"
            label="Innovation Ecosystem"
            title="The Architecture Behind the Ecosystem"
            intro="One journey. Multiple worlds connected by technology, creativity, investment, education and global collaboration."
          />
          <div className="ab-arch">
            {architecturePillars.map((p, i) => (
              <div
                className="ab-arch__panel"
                key={p.title}
                data-reveal
                style={{ "--d": `${i * 80}ms` }}
              >
                <span className="ab-arch__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p className="ab-arch__lead">{p.lead}</p>
                <p className="ab-arch__body">{p.body}</p>
                <span className="ab-arch__tags">{p.tags}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== CH 09 GEN AI FILMS */}
      <section className="ab-section ab-section--ink ab-cinema" id="gen-ai-films">
        <div className="ab-inner">
          <ChapterHead
            index="09"
            label="Gen AI Movies"
            title="AI-Led Films & Epic Worlds"
            intro="Featured cinematic concepts across epic storytelling, fantasy, action, futuristic worlds and Gen AI-led film experiments developed in 2025."
          >
            <a
              className="ab-btn ab-btn--gold"
              href="https://www.youtube.com/playlist?list=PLqxGT4eSUWHE3cVQIV705v84oVgAXjUrL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Full AI Film Playlist →
            </a>
          </ChapterHead>
        </div>
        <div className="ab-filmstrip">
          <div className="ab-inner">
            <div className="ab-film-grid">
              {genAiFilms.map((f, i) => (
                <a
                  className="ab-film"
                  href={f.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={f.title}
                  data-reveal
                  style={{ "--d": `${(i % 3) * 60}ms` }}
                >
                  <div className="ab-film__poster">
                    {f.image ? (
                      <img src={f.image} alt={f.title} />
                    ) : (
                      <ImagePlaceholder id={f.title} label={f.title} />
                    )}
                    <span className="ab-film__play" aria-hidden="true">
                      ▶
                    </span>
                  </div>
                  <span className="ab-microlabel ab-microlabel--gold">
                    Watch video · {f.category}
                  </span>
                  <h3>{f.title}</h3>
                  <p>Click poster to watch</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="ab-inner">
          <div className="ab-subhead" data-reveal>
            <span className="ab-microlabel ab-microlabel--gold">
              Gen AI Works by Arijit Bhattacharyya
            </span>
          </div>
          <div className="ab-chip-cloud ab-chip-cloud--dark" data-reveal>
            {genAiWorksList.map((w) => (
              <span className="ab-chip ab-chip--dark" key={w}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================== CH 10 COMICS & VIRTUAL WORLDS */}
      <section className="ab-section ab-section--paper ab-comics" id="comics-virtual-worlds">
        <div className="ab-inner">
          <ChapterHead
            index="10"
            label="Comics & Virtual Worlds"
            title="Comics, Characters and Game-World Storytelling."
            intro="Original comic universes, game characters, model-to-superhero transformations, digital humans, epic research and visual storytelling created across decades."
          />
          <div className="ab-comic-grid">
            {comicsVirtualWorlds.map((c, i) => (
              <figure
                className="ab-comic"
                key={c.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 70}ms`, "--tilt": `${((i % 3) - 1) * 0.8}deg` }}
              >
                <div className="ab-comic__panel">
                  {c.image ? (
                    <img src={c.image} alt={c.title} />
                  ) : (
                    <ImagePlaceholder id={c.title} label={c.title} />
                  )}
                </div>
                <figcaption>
                  <span className="ab-comic__cat">{c.category}</span>
                  <h3>{c.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================== CH 11 MOVIES & PRODUCTION */}
      <section className="ab-section ab-section--ink">
        <div className="ab-inner">
          <ChapterHead
            index="11"
            label="Movies, Production & Creative Technology"
            title="Films, VFX & Gen AI Storytelling."
          />
          <ul className="ab-ledger" data-reveal>
            {moviesProduction.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================ CH 12 GAMES, VR, AR & DIGITAL HUMAN */}
      <section className="ab-section ab-section--ink">
        <div className="ab-inner">
          <ChapterHead
            index="12"
            label="Games, VR, AR & Digital Human Highlights"
            title="Real Actors, Models and Epic Worlds Transformed Into Game IP."
          />
          <ul className="ab-ledger" data-reveal>
            {gamesVrHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================== CH 13 EPIC & CHARACTER RESEARCH */}
      <section className="ab-section ab-section--paper">
        <div className="ab-inner">
          <ChapterHead
            index="13"
            label="Epic & Character Research"
            title="Research Behind Characters, Culture & Storytelling"
          />
          <ul className="ab-ledger ab-ledger--light" data-reveal>
            {epicResearch.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================ CH 14 CROSS-INDUSTRY */}
      <section className="ab-section ab-section--ink ab-grid-bg" id="cross-industry-experience">
        <div className="ab-inner">
          <ChapterHead
            index="14"
            label="Cross-Industry Experience"
            title="Industries Connected Through Technology & Entrepreneurship"
            intro="Over nearly three decades, Arijit Bhattacharyya's work has extended across technology, education, media, finance, gaming, entrepreneurship, industrial transformation and global business ecosystems."
          />
          <div className="ab-chip-cloud ab-chip-cloud--dark" data-reveal>
            {industryTags.map((t) => (
              <span className="ab-chip ab-chip--dark" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="ab-industry-grid">
            {industryPillars.map((p, i) => (
              <div
                className="ab-industry"
                key={p.title}
                data-reveal
                style={{ "--d": `${(i % 4) * 60}ms` }}
              >
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="ab-subhead" data-reveal>
            <span className="ab-microlabel ab-microlabel--gold">
              Detailed Industry Experience
            </span>
            <h3>
              Technology, business development and industry transformation
              across sectors.
            </h3>
          </div>
          <div className="ab-industry-grid ab-industry-grid--3">
            {industryDetail.map((d, i) => (
              <div
                className="ab-industry"
                key={d.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 60}ms` }}
              >
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== CH 15 GLOBAL FOOTPRINT */}
      <section className="ab-section ab-section--ink ab-footprint">
        <div className="ab-inner">
          <ChapterHead
            index="15"
            label="Global Footprint"
            title="Where Institutions, Innovation & Global Stages Converge"
            intro="A selected view of national and international institutions, keynote platforms and innovation forums connected with Arijit Bhattacharyya's public voice across entrepreneurship, AI, blockchain, gaming, immersive technology and cross-border innovation."
          />
        </div>
        <div className="ab-board" data-reveal>
          {footprintRows.map((row, ri) => (
            <div
              className={`ab-board__row${ri % 2 ? " ab-board__row--reverse" : ""}`}
              key={ri}
            >
              <div className="ab-board__track">
                {[0, 1].map((copy) => (
                  <div className="ab-board__set" aria-hidden={copy === 1} key={copy}>
                    {row.map((item) => (
                      <span className="ab-board__chip" key={`${copy}-${item}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ CH 16 GLOBAL STAGES */}
      <section className="ab-section ab-section--ink">
        <div className="ab-inner">
          <ChapterHead
            index="16"
            label="Global Stages"
            title="Ideas Shared Across Continents"
            intro="A selected speaking archive across institutions, summits, banks, universities, chambers of commerce, television platforms and global innovation forums."
          >
            <a className="ab-btn ab-btn--outline" href="#">
              Explore Latest Speaks →
            </a>
          </ChapterHead>
          <div className="ab-stage-grid">
            {globalStages.map((s, i) => (
              <div
                className={`ab-stage${s.featured ? " ab-stage--featured" : ""}`}
                key={s.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 60}ms` }}
              >
                <div className="ab-stage__media">
                  {s.featured ? (
                    <img src={ghanaImg} alt={s.title} />
                  ) : s.image ? (
                    <div className="ab-stage__logo">
                      <img src={s.image} alt={s.title} />
                    </div>
                  ) : (
                    <ImagePlaceholder id={s.title} label={s.title} />
                  )}
                </div>
                <span className="ab-microlabel ab-microlabel--gold">{s.category}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.tags && <span className="ab-stage__tags">{s.tags}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================= CH 17 RECOGNITION & MEDIA */}
      <section className="ab-section ab-section--paper" id="media-recognition">
        <div className="ab-inner">
          <ChapterHead
            index="17"
            label="Recognition & Media Presence"
            title="Recognized across media, forums and public stages."
            intro="A curated showcase of national media coverage, international platform recognition, television appearances and public-speaking milestones."
          >
            <a className="ab-btn ab-btn--outline-dark" href="#">
              Explore Press &amp; Media Coverage →
            </a>
          </ChapterHead>

          <div className="ab-press-hero">
            <div className="ab-press-card ab-press-card--feature" data-reveal>
              <div className="ab-press-card__logo">
                <img src={tedxLogo} alt="TEDx" />
              </div>
              <span className="ab-microlabel">Public Stage</span>
              <h3>TEDx</h3>
              <p>
                TEDx Talk: "The Power of Nothing" — Translating Ancient Indian
                Myths into VR Gaming IP
              </p>
              <p>
                A keynote presence built around entrepreneurship, emerging
                technology and the future of business.
              </p>
            </div>
            <div className="ab-press-card" data-reveal style={{ "--d": "70ms" }}>
              <div className="ab-press-card__logo">
                <img src={ecotimesLogo} alt="The Economic Times" />
              </div>
              <span className="ab-microlabel">National Media</span>
              <h3>The Economic Times</h3>
              <p>Driving Entrepreneurship &amp; Market Growth</p>
            </div>
            <div className="ab-press-card" data-reveal style={{ "--d": "140ms" }}>
              <div className="ab-press-card__logo">
                <img src={toiLogo} alt="Times of India" />
              </div>
              <span className="ab-microlabel">National Media</span>
              <h3>Times of India</h3>
              <p>Startup Ecosystems &amp; Future Growth</p>
            </div>
          </div>

          <div className="ab-seen" data-reveal>
            <span className="ab-microlabel">Seen Across</span>
            <div className="ab-chip-cloud">
              {seenAcross.map((s) => (
                <span className="ab-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {pressGroups.map((group) => (
            <div className="ab-press-group" key={group.title} data-reveal>
              <span className="ab-microlabel">{group.title}</span>
              <h3>{group.subtitle}</h3>
              <div className="ab-press-grid">
                {group.items.map((item) => (
                  <div className="ab-press-card" key={item.title}>
                    {item.image ? (
                      <div className="ab-press-card__logo">
                        <img src={item.image} alt={item.title} />
                      </div>
                    ) : (
                      <div className="ab-press-card__media">
                        <ImagePlaceholder id={item.title} label={item.title} />
                      </div>
                    )}
                    <span className="ab-microlabel">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================== CH 18 VISUAL ARCHIVE */}
      <section className="ab-section ab-section--ink ab-archive">
        <div className="ab-inner">
          <ChapterHead
            index="18"
            label="Visual Archive"
            title="Visual Archive of Global Conversations"
            intro="A curated archive of international forums, media appearances, recognition moments, television platforms and global conversations."
          />
          <div className="ab-archive-grid">
            {visualArchive.map((v, i) => (
              <figure
                className="ab-archive__item"
                key={v.title}
                data-reveal
                style={{ "--d": `${(i % 5) * 60}ms` }}
              >
                <ImagePlaceholder id={v.title} label={v.title} />
                <figcaption>
                  <span className="ab-microlabel ab-microlabel--gold">{v.category}</span>
                  <h3>{v.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ CH 19 GLOBAL IMPACT */}
      <section className="ab-section ab-section--paper">
        <div className="ab-inner">
          <ChapterHead
            index="19"
            label="Global Impact"
            title="Building Businesses, Technologies and Global Ecosystems Since 1998"
            intro="From AI, blockchain and VR to entrepreneurship, education, investment and global business, Arijit Bhattacharyya's work connects innovation ecosystems across countries and industries."
          />
          <div className="ab-impact-grid">
            {globalImpactCards.map((c, i) => (
              <div
                className="ab-impact"
                key={c.title}
                data-reveal
                style={{ "--d": `${i * 60}ms` }}
              >
                <div className="ab-impact__media">
                  <ImagePlaceholder id={c.title} label={c.title} />
                </div>
                <span className="ab-microlabel">Global Impact</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= CH 20 SOCIAL IMPACT */}
      <section className="ab-section ab-section--ink ab-impact-section">
        <div className="ab-inner">
          <ChapterHead
            index="20"
            label="Social Impact"
            title="Innovation Matters When More People Benefit From It"
            intro="Beyond ventures and platforms, this part of the journey connects students, communities, grassroots programs and social initiatives with the larger innovation ecosystem."
          />
          <div className="ab-industry-grid ab-industry-grid--3">
            {socialImpactCategories.map((c, i) => (
              <div
                className="ab-industry"
                key={c.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 60}ms` }}
              >
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="ab-impact-grid ab-impact-grid--dark">
            {socialImpactPrograms.map((p, i) => (
              <div
                className="ab-impact ab-impact--dark"
                key={p.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 60}ms` }}
              >
                <div className="ab-impact__media">
                  <ImagePlaceholder id={p.title} label={p.title} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= CH 21 TIMELINE */}
      <section className="ab-section ab-section--ink ab-tl-section" id="journey">
        <div className="ab-inner">
          <ChapterHead
            index="21"
            label="29+ Years of Innovation"
            title="A journey mapped in years."
            intro="A founder-led personal brand journey since 1998 across games, VR, blockchain, AI, education, investment, media and global business ecosystems."
          />
          <div className="ab-tl">
            <span className="ab-tl__spine" aria-hidden="true" />
            {timeline.map((t, i) => (
              <article className="ab-tl__item" key={t.year} data-reveal>
                <span className="ab-tl__ghost" aria-hidden="true">
                  {t.year}
                </span>
                <span className="ab-tl__node" aria-hidden="true" />
                <div className="ab-tl__year">{t.year}</div>
                <div className="ab-tl__content">
                  <h3>{t.title}</h3>
                  <p>{t.p1}</p>
                  <p>{t.p2}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LifeStory />

      {/* ============================================ CH 22 LEGACY ARCHIVE */}
      <section className="ab-section ab-section--paper" id="legacy-archive">
        <div className="ab-inner">
          <ChapterHead
            index="22"
            label="Legacy Archive"
            title="Legacy Work Archive Since 1998"
            intro="A curated long-form archive covering entrepreneurship, technology, advisory leadership, global speaking, venture building, education, investment networks and creative technology."
          />
          <div className="ab-acc">
            {legacyArchive.map((group, i) => (
              <details className="ab-acc__item" key={group.title} data-reveal>
                <summary>
                  <span className="ab-acc__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ab-acc__title">{group.title}</span>
                  <span className="ab-acc__plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <ul className="ab-rows">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= CH 23 CLOSING */}
      <section className="ab-section ab-section--ink ab-closing">
        <div className="ab-inner ab-closing__grid">
          <div>
            <ChapterHead
              index="23"
              label="The Work Continues"
              title="The Story Is Still Being Written."
            />
            <p className="ab-closing__intro" data-reveal>
              From Virtualinfocom in 1998 to AI, gaming, books, mentoring,
              investment, media, global forums and creative IP, the journey
              continues through platforms built for founders, students,
              creators and future-facing institutions and businesses.
              Alongside personally mentoring 6,000+ students, the work has
              also reached a much wider academic audience through university
              and institutional engagements as a visiting faculty member,
              mentor, speaker and resource person.
            </p>
            <div className="ab-closing__stats" data-reveal>
              {closingStats.map((s) => (
                <div className="ab-closing__stat" key={s.label}>
                  <div className="ab-closing__value">{s.value}</div>
                  <div className="ab-closing__label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="ab-cta-row" data-reveal>
              <a className="ab-btn ab-btn--gold" href="#">
                Mentoring &amp; Advisory →
              </a>
              <a className="ab-btn ab-btn--outline" href="#">
                Explore Ecosystem →
              </a>
            </div>
          </div>
          <figure className="ab-closing__media" data-reveal>
            <img
              src={heroImg}
              alt="Arijit Bhattacharyya global innovation journey across technology mentoring investment media and creative IP since 1998"
            />
            <figcaption className="ab-microlabel ab-microlabel--gold">
              Since 1998
            </figcaption>
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
}
