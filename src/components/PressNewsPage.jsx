import { useEffect, useMemo, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ImagePlaceholder from "./ImagePlaceholder";
import {
  pressKicker,
  pressDateline,
  pressStats,
  heroBroadcast,
  mediaHouses,
  featuredLead,
  featuredStories,
  clippings,
  interviews,
  interviewQuote,
  broadcasts,
  worldDesk,
  archiveFilters,
  archiveRecords,
  techArchive,
  connectDesks,
  connectChips,
} from "../pressNewsContent";
import "./PressNewsPage.css";

const pressImagesById = {
  "pn-hero-cnbc": new URL("../assets/Pressnews/cnbc.jpg", import.meta.url).href,
  "pn-feat-cnbc": new URL("../assets/Pressnews/cnbc_arijit.jpg", import.meta.url).href,
  "pn-clip-et": new URL("../assets/Pressnews/2018/economic-times.jpg", import.meta.url).href,
  "pn-clip-hindu": new URL("../assets/Pressnews/2019/the-hindu.png", import.meta.url).href,
  "pn-clip-ht": new URL("../assets/Pressnews/hindusthantimes.jpg", import.meta.url).href,
  "pn-clip-toi": new URL("../assets/Pressnews/2024/timesofindia-B.jpg", import.meta.url).href,
  "pn-clip-techsauce": new URL("../assets/Pressnews/2018/tech-sauce.jpg", import.meta.url).href,
  "pn-clip-telegraph": new URL("../assets/Pressnews/kolkata-businessman.jpg", import.meta.url).href,
  "pn-clip-magazine": new URL("../assets/Pressnews/2021/magazine-news.jpg", import.meta.url).href,
  "pn-tv-nepal": new URL("../assets/Pressnews/Nepal_TV_Arijit-Bhattacharyya.png", import.meta.url).href,
  "pn-tv-tedx": new URL("../assets/Pressnews/2019/tedx.jpg", import.meta.url).href,
  "pn-tv-ddbangla": new URL("../assets/Pressnews/2019/DD-Bangla.jpg", import.meta.url).href,
  "pn-tv-joshtalks": new URL("../assets/Pressnews/2018/Josh-Talk_Bengali.jpg", import.meta.url).href,
  "pn-tv-tv9": new URL("../assets/Pressnews/2022/TV9.jpg", import.meta.url).href,
  "pn-tv-jharkhand": new URL("../assets/Pressnews/Jharkhand_IAS.jpg", import.meta.url).href,
  "pn-world-china-blockchain": new URL("../assets/Pressnews/2020/China-blockchain.jpg", import.meta.url).href,
  "pn-world-china-film": new URL("../assets/Pressnews/China_film_fest.jpg", import.meta.url).href,
  "pn-world-finland": new URL("../assets/Pressnews/2018/Finland_India.jpg", import.meta.url).href,
  "pn-world-dubai": new URL("../assets/Pressnews/arabia.jpg", import.meta.url).href,
  "pn-tech-arvr": new URL("../assets/Pressnews/arijit_bhattacharyya-virtualreality.jpg", import.meta.url).href,
  "pn-tech-globalvr": new URL("../assets/Pressnews/virtual_reality_India.jpg", import.meta.url).href,
  "pn-tech-advisory": new URL("../assets/Pressnews/technology_adviser.jpg", import.meta.url).href,
  "pn-tech-summit": new URL("../assets/Pressnews/startup_summit.jpg", import.meta.url).href,
  "pn-connect-banner": new URL("../assets/Pressnews/Arijit_Bhattacharyya1.png", import.meta.url).href,
};

export default function PressNewsPage() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "Press News — Arijit Bhattacharyya";
  }, []);

  const visibleRecords = useMemo(
    () =>
      filter === "All"
        ? archiveRecords
        : archiveRecords.filter((r) => r.category === filter),
    [filter]
  );

  return (
    <div className="pn">
      <Nav />

      {/* ───────────────────────────── MASTHEAD / FRONT PAGE */}
      <header className="pn-masthead">
        <div className="pn-inner">
          <div className="pn-flag">
            <span className="pn-flag__live">
              <span className="pn-flag__pulse" /> On the record
            </span>
            <span className="pn-flag__kicker">{pressKicker}</span>
          </div>

          <div className="pn-masthead__grid">
            <div className="pn-masthead__lead">
              <div className="pn-eyebrow">Press · Interviews · Public Recognition</div>
              <h1 className="pn-title">
                Press, Interviews <span className="pn-amp">&amp;</span> Public
                <em> Recognition</em>
              </h1>
              <p className="pn-lede">
                A curated archive of Arijit Bhattacharyya's coverage across
                television, newspapers, business media, startup ecosystems,
                technology forums and international industry networks —
                documenting his work as founder of Virtualinfocom, speaker,
                mentor and innovation ecosystem builder.
              </p>
              <div className="pn-cta-row">
                <a className="pn-btn pn-btn--solid" href="#pn-featured">
                  Explore Coverage
                </a>
                <a className="pn-btn" href="mailto:arijit@virtualinfocom.net">
                  Media Enquiries
                </a>
              </div>
            </div>

            {/* broadcast "on air" frame */}
            <aside className="pn-broadcast">
              <div className="pn-broadcast__bar">
                <span className="pn-broadcast__onair">
                  <span className="pn-broadcast__rec" /> On Air
                </span>
                <span className="pn-broadcast__tc">{heroBroadcast.timecode}</span>
              </div>
              <div className="pn-broadcast__screen">
                <PressImage
                  id={heroBroadcast.id}
                  label={heroBroadcast.caption}
                />
                <span className="pn-broadcast__scan" aria-hidden="true" />
                <span className="pn-broadcast__bug">{heroBroadcast.channel}</span>
                <span className="pn-broadcast__lower">
                  <strong>{heroBroadcast.channel}</strong>
                  {heroBroadcast.segment}
                </span>
              </div>
            </aside>
          </div>

          {/* dateline + counters rule */}
          <div className="pn-dateline">
            {pressDateline.map((d) => (
              <span className="pn-dateline__item" key={d.k}>
                <em>{d.k}</em> {d.v}
              </span>
            ))}
          </div>
          <div className="pn-counters">
            {pressStats.map((s) => (
              <div className="pn-counter" key={s.l}>
                <span className="pn-counter__n">{s.n}</span>
                <span className="pn-counter__l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ───────────────────────────── PRESS WALL MARQUEE */}
      <section className="pn-wall" aria-label="Media houses">
        <div className="pn-inner pn-wall__head">
          <div className="pn-eyebrow">Recognized across leading media &amp; global platforms</div>
          <p className="pn-wall__sub">
            Featured by international platforms, business publications, television
            networks, startup communities and institutional media ecosystems.
          </p>
        </div>
        {[0, 1].map((row) => (
          <div className={`pn-wall__row pn-wall__row--${row}`} key={row}>
            <div className="pn-wall__track">
              {[0, 1].map((g) => (
                <div className="pn-wall__group" key={g} aria-hidden={g === 1}>
                  {mediaHouses.map((name) => (
                    <span className="pn-plate" key={`${row}-${g}-${name}`}>
                      <span className="pn-plate__dot" />
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ───────────────────────────── 01 FEATURED — FRONT PAGE */}
      <section className="pn-inner pn-section" id="pn-featured">
        <SectionHead
          num="01"
          kicker="Featured Coverage"
          title="Selected stories from television, newspapers &amp; global platforms."
          lede="Selected coverage across business television, institutional collaboration, startup investment, and international gaming-industry networks."
        />

        <div className="pn-front">
          <article className="pn-lead">
            <div className="pn-lead__media">
              <PressImage
                id={featuredLead.id}
                label={`${featuredLead.title} — broadcast still`}
              />
              <span className="pn-lead__stamp">{featuredLead.tag}</span>
            </div>
            <div className="pn-lead__body">
              <span className="pn-byline">{featuredLead.source}</span>
              <h3 className="pn-lead__title">{featuredLead.title}</h3>
              <p className="pn-lead__dek">{featuredLead.dek}</p>
            </div>
          </article>

          <div className="pn-column">
            {featuredStories.map((s, i) => (
              <article className="pn-story" key={s.id}>
                <span className="pn-story__no">{String(i + 2).padStart(2, "0")}</span>
                <div className="pn-story__text">
                  <span className="pn-byline">
                    {s.source} <i>·</i> {s.tag}
                  </span>
                  <h4 className="pn-story__title">{s.title}</h4>
                  <p className="pn-story__dek">{s.dek}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── 02 CLIPPINGS BOARD */}
      <section className="pn-section pn-board-wrap">
        <div className="pn-inner">
          <SectionHead
            num="02"
            kicker="National & Business Media"
            title="Business media, national press &amp; international platforms."
            lede="Coverage across business publications, national newspapers, startup platforms and profile features connected to technology, entrepreneurship and innovation."
          />
        </div>
        <div className="pn-inner">
          <div className="pn-board">
            {clippings.map((c) => (
              <figure
                className="pn-clip"
                key={c.id}
                style={{ "--tilt": `${c.tilt}deg` }}
              >
                <span className="pn-clip__tape" />
                <div className="pn-clip__media">
                  <PressImage id={c.id} label={`${c.source} clipping`} />
                </div>
                <figcaption className="pn-clip__cap">
                  <span className="pn-byline">{c.source}</span>
                  <h4 className="pn-clip__title">{c.title}</h4>
                  <p className="pn-clip__dek">{c.dek}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── 03 ON THE RECORD — INTERVIEW INDEX */}
      <section className="pn-inner pn-section">
        <SectionHead
          num="03"
          kicker="Digital Features & Interviews"
          title="Founder interviews, online profiles &amp; media conversations."
          lede="A curated archive of interview-style features, speaker profiles, investor profiles and media conversations across entrepreneurship, mentoring, investment, VR, AR, AI, gaming and global innovation platforms."
        />

        <div className="pn-record">
          <div className="pn-record__list">
            {interviews.map((it, i) => (
              <a
                className="pn-rec"
                href={it.url}
                target="_blank"
                rel="noreferrer"
                key={it.id}
              >
                <span className="pn-rec__no">{String(i + 1).padStart(2, "0")}</span>
                <div className="pn-rec__main">
                  <span className="pn-byline">
                    {it.source} <i>·</i> {it.kind}
                  </span>
                  <h4 className="pn-rec__title">{it.title}</h4>
                  <p className="pn-rec__dek">{it.dek}</p>
                </div>
                <span className="pn-rec__go">
                  {it.action}
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <aside className="pn-quote">
            <span className="pn-quote__mark">“</span>
            <p className="pn-quote__text">{interviewQuote.text}</p>
            <span className="pn-quote__by">{interviewQuote.by}</span>
          </aside>
        </div>
      </section>

      {/* ───────────────────────────── 04 BROADCAST VIDEO WALL */}
      <section className="pn-section pn-tv-wrap">
        <div className="pn-inner">
          <SectionHead
            num="04"
            kicker="TV & Video Coverage"
            title="International television, national broadcast &amp; digital video."
            lede="A video-led archive covering international television, national broadcast, regional media and digital video platforms."
            light
          />
          <div className="pn-tv">
            {broadcasts.map((b) => (
              <article className="pn-monitor" key={b.id}>
                <div className="pn-monitor__screen">
                  <PressImage id={b.id} label={`${b.channel} — ${b.title}`} />
                  <span className="pn-monitor__scan" aria-hidden="true" />
                  <span
                    className={`pn-monitor__status${
                      b.live ? " pn-monitor__status--live" : ""
                    }`}
                  >
                    <span className="pn-monitor__dot" />
                    {b.live ? "Live" : "Rec"}
                  </span>
                  <span className="pn-monitor__ch">{b.channel}</span>
                </div>
                <div className="pn-monitor__meta">
                  <span className="pn-byline">{b.label}</span>
                  <h4 className="pn-monitor__title">{b.title}</h4>
                  <p className="pn-monitor__dek">{b.dek}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── 05 WORLD DESK / DATELINES */}
      <section className="pn-inner pn-section">
        <SectionHead
          num="05"
          kicker="International Coverage"
          title="Global platforms across technology, business &amp; creative media."
          lede="International coverage across technology, business, investment, gaming and creative media."
        />
        <div className="pn-world">
          {worldDesk.map((w) => (
            <article className="pn-desk" key={w.id}>
              <span className="pn-desk__country">{w.country}</span>
              <div className="pn-desk__media">
                <PressImage id={w.id} label={`${w.country} — ${w.title}`} />
                <span className="pn-desk__reticle pn-desk__reticle--tl" />
                <span className="pn-desk__reticle pn-desk__reticle--br" />
              </div>
              <div className="pn-desk__body">
                <span className="pn-desk__coord">{w.coord}</span>
                <span className="pn-byline">{w.kicker}</span>
                <h4 className="pn-desk__title">{w.title}</h4>
                <p className="pn-desk__dek">{w.dek}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 06 ARCHIVE LEDGER (filterable) */}
      <section className="pn-inner pn-section">
        <SectionHead
          num="06"
          kicker="Archive Coverage"
          title="Business chambers, institutional platforms &amp; startup ecosystem coverage."
          lede="A living index of legacy press — filter by desk to trace the coverage across chambers, institutions, gaming, creative media, technology and mentoring."
        />

        <div className="pn-archive__bar">
          <div className="pn-archive__filters">
            {archiveFilters.map((f) => (
              <button
                type="button"
                key={f}
                className={`pn-chip${filter === f ? " pn-chip--on" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="pn-archive__count">
            Showing {String(visibleRecords.length).padStart(2, "0")} of{" "}
            {String(archiveRecords.length).padStart(2, "0")} records
          </span>
        </div>

        <div className="pn-ledger">
          <div className="pn-ledger__head" aria-hidden="true">
            <span>Year</span>
            <span>Desk</span>
            <span>Platform / Coverage</span>
            <span />
          </div>
          {visibleRecords.map((r) => (
            <article className="pn-row" key={r.id}>
              <span className="pn-row__year">{r.year}</span>
              <span className="pn-row__cat">{r.category}</span>
              <div className="pn-row__main">
                <h4 className="pn-row__title">{r.title}</h4>
                <p className="pn-row__dek">
                  <span className="pn-row__org">{r.org}</span> — {r.dek}
                </p>
              </div>
              <span className="pn-row__spark" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 07 TECH SIGNAL BAND */}
      <section className="pn-section pn-signal-wrap">
        <div className="pn-inner">
          <SectionHead
            num="07"
            kicker="Technology & Innovation Press Archive"
            title="AR, VR &amp; Future Technology Coverage"
            lede="A focused technology-led archive across augmented reality, virtual reality, immersive media, innovation advisory, global technology platforms and regional technology-industry coverage."
            light
          />
          <div className="pn-signal">
            {techArchive.map((t, i) => (
              <article className="pn-sig" key={t.id}>
                <div className="pn-sig__media">
                  <PressImage id={t.id} label={t.title} />
                  <span className="pn-sig__reticle" />
                  <span className="pn-sig__idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="pn-tag">{t.tag}</span>
                <h4 className="pn-sig__title">{t.title}</h4>
                <p className="pn-sig__dek">{t.dek}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── CTA / NEWSROOM DESK */}
      <section className="pn-connect">
        <div className="pn-connect__media">
          <PressImage
            id="pn-connect-banner"
            label="Arijit Bhattacharyya — press, mentoring & global ecosystem work"
          />
          <div className="pn-connect__scrim" />
        </div>
        <div className="pn-inner pn-connect__inner">
          <div className="pn-tag">Press · Mentoring · Ecosystems</div>
          <h2 className="pn-connect__title">
            Connect with Arijit for media, mentoring &amp; global ecosystem work.
          </h2>
          <p className="pn-connect__desc">
            Decades of work across entrepreneurship, investment, startup
            mentoring, VR, AR, AI, gaming, media, innovation and international
            technology ecosystems — a body of work spanning founders,
            institutions, business communities and global platforms.
          </p>
          <div className="pn-connect__chips">
            {connectChips.map((c) => (
              <span className="pn-pill" key={c}>
                {c}
              </span>
            ))}
          </div>

          <div className="pn-directory">
            {connectDesks.map((d) => (
              <article className="pn-dir" key={d.id}>
                <h3 className="pn-dir__title">{d.t}</h3>
                <p className="pn-dir__desc">{d.d}</p>
              </article>
            ))}
          </div>

          <div className="pn-connect__actions">
            <a
              className="pn-btn pn-btn--solid"
              href="mailto:arijit@virtualinfocom.net"
            >
              Connect With Arijit
            </a>
            <a className="pn-btn" href="mailto:arijit@virtualinfocom.net">
              arijit@virtualinfocom.net
            </a>
          </div>
        </div>
      </section>

      <div className="pn-colophon">
        <div className="pn-inner pn-colophon__row">
          <span className="pn-colophon__name">Arijit Bhattacharyya</span>
          <span>Since 1998</span>
          <span>Founder of Virtualinfocom</span>
          <span>Global Speaker</span>
          <span>AI · Gaming · DeepTech</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function PressImage({ id, label, shape, fit, className = "", style }) {
  const src = pressImagesById[id];

  if (!src) {
    return (
      <ImagePlaceholder
        id={id}
        label={label}
        shape={shape}
        fit={fit}
        className={className}
        style={style}
      />
    );
  }

  return (
    <img
      className={`pn-img ${className}`.trim()}
      src={src}
      alt={label || "Press news image"}
      loading={id === "pn-hero-cnbc" ? "eager" : "lazy"}
      decoding="async"
      style={style}
    />
  );
}
function SectionHead({ num, kicker, title, lede, light }) {
  return (
    <div className={`pn-shead${light ? " pn-shead--light" : ""}`}>
      <div className="pn-shead__num">
        <span>{num}</span> {kicker}
      </div>
      <h2
        className="pn-shead__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="pn-shead__lede">{lede}</p>
    </div>
  );
}

