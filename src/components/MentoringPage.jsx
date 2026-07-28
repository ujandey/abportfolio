import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ImagePlaceholder from "./ImagePlaceholder";
import {
  mentoringStats,
  focusMarquee,
  authorityRoles,
  ecosystemGroups,
  focusAreas,
  advisoryAreas,
  serviceSteps,
  connectReasons,
  trustedEcosystems,
  mentoringSessions,
  ctaChips,
} from "../mentoringContent";
import "./MentoringPage.css";

function MediaFrame({ id, label, video = false, className = "" }) {
  return (
    <div className={`mtr-frame ${className}`}>
      <ImagePlaceholder id={id} label={label} />
      {video && (
        <button type="button" className="mtr-frame__play" aria-label="Play video">
          <span className="mtr-frame__play-tri" />
        </button>
      )}
      <span className="mtr-frame__corner mtr-frame__corner--tl" />
      <span className="mtr-frame__corner mtr-frame__corner--br" />
    </div>
  );
}

export default function MentoringPage() {
  useEffect(() => {
    document.title = "Mentoring — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="mtr">
      <Nav />

      {/* ───────────────────────────── HERO */}
      <header className="mtr-hero">
        <div className="mtr-hero__rail">
          <span className="mtr-hero__rail-dot" />
          Startup Mentoring &amp; Advisory — Since 2008
        </div>

        <div className="mtr-inner mtr-hero__grid">
          <div className="mtr-hero__lead">
            <div className="mtr-kicker">
              Founder of Virtualinfocom · Global Speaker · AI · Gaming · DeepTech
            </div>
            <h1 className="mtr-hero__title">
              Gain experience that is <em>not taught</em> in books.
            </h1>
            <p className="mtr-hero__desc">
              Arijit Bhattacharyya is a Business Scalability Expert, Technologist, Digital Media
              Expert, DeepTech Strategist and Finance &amp; Growth Consultant — helping corporates,
              startups, SMEs, MSMEs, manufacturing and growth-stage businesses modernize
              operations, prepare for private equity, adopt AI and expand globally.
            </p>
            <p className="mtr-hero__sub">
              His mentoring focuses on business strategy, market entry, fundraising,
              operating-margin improvement, technology modernization, AI, GenAI, AR, VR, XR,
              blockchain, digital media, gaming, animation and sustainable business models.
            </p>
          </div>

          <div className="mtr-hero__media">
            <MediaFrame
              id="mtr-hero-video"
              label="Video — Arijit Bhattacharyya mentoring & advisory reel"
              video
              className="mtr-frame--portrait"
            />
          </div>
        </div>

        {/* stat cluster */}
        <div className="mtr-inner">
          <div className="mtr-hero__stats">
            {mentoringStats.map((s, i) => (
              <div className="mtr-hero__stat" key={s.l}>
                <span className="mtr-hero__stat-idx">0{i + 1}</span>
                <div className="mtr-hero__stat-n">{s.n}</div>
                <div className="mtr-hero__stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ───────────────────────────── FOCUS MARQUEE */}
      <div className="mtr-marquee" aria-hidden="true">
        <div className="mtr-marquee__track">
          {[0, 1].map((g) => (
            <div className="mtr-marquee__group" key={g}>
              {focusMarquee.map((item) => (
                <span className="mtr-marquee__item" key={item}>
                  {item}
                  <span className="mtr-marquee__star">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────────────── BANNER */}
      <section className="mtr-inner mtr-banner">
        <MediaFrame
          id="mtr-banner"
          label="Banner — Arijit Bhattacharyya mentoring session · scaleup · funding · private-equity readiness"
          className="mtr-frame--wide"
        />
        <div className="mtr-banner__foot">
          <span className="mtr-tag">Business Mentoring / Scaleup / Funding</span>
          <h2 className="mtr-banner__title">
            Helping founders see blind spots, structure growth and go global.
          </h2>
        </div>
      </section>

      {/* ───────────────────────────── 01 AUTHORITY */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>01</span> Mentoring Authority
          </div>
          <h2 className="mtr-shead__title">
            Scaleup guidance for founders, institutions and growth-stage businesses.
          </h2>
          <p className="mtr-shead__lede">
            Arijit mentors founders, startups, SMEs, MSMEs, enterprises and innovation ecosystems on
            business scalability, fundraising, international expansion, technology adoption and
            leadership — spanning mentor, jury member, evaluator, advisor and ecosystem-builder
            roles across accelerators, incubators, universities and investor platforms.
          </p>
        </div>

        <div className="mtr-authority">
          <aside className="mtr-authority__aside">
            <div className="mtr-tag mtr-tag--gold">Banking &amp; Enterprise Advisory</div>
            <p>
              Over the years, Arijit has advised banks, financial institutions, SMEs, MSMEs and
              growth-stage businesses on digital transformation, modernization of legacy systems,
              technology adoption, ecosystem development, operating-margin improvement and business
              scalability.
            </p>
            <MediaFrame
              id="mtr-authority-media"
              label="Blockchain & digital transformation advisory"
              className="mtr-frame--square"
            />
          </aside>

          <div className="mtr-roles">
            {authorityRoles.map((r) => (
              <article className="mtr-role" key={r.t}>
                <span className="mtr-role__idx">0{r.i}</span>
                <div className="mtr-role__cat">{r.cat}</div>
                <h3 className="mtr-role__title">{r.t}</h3>
                <p className="mtr-role__desc">{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── 02 ECOSYSTEM INDEX */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>02</span> Ecosystem Highlights
          </div>
          <h2 className="mtr-shead__title">
            Mentoring across accelerators, universities, startup networks and global platforms.
          </h2>
          <p className="mtr-shead__lede">
            Grouped by role and ecosystem, so the picture stays credible without becoming a crowded
            wall of logos or keywords.
          </p>
        </div>

        <div className="mtr-index">
          {ecosystemGroups.map((group, gi) => (
            <div className="mtr-index__col" key={group.t}>
              <div className="mtr-index__head">
                <span className="mtr-index__num">0{gi + 1}</span>
                <h3>{group.t}</h3>
              </div>
              <ul className="mtr-index__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="mtr-index__leader" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mtr-index__strip">
          {["Global Business", "Business Matchmaking", "Startup Forums", "Startup Summit"].map(
            (label, i) => (
              <MediaFrame
                key={label}
                id={`mtr-eco-strip-${i}`}
                label={label}
                className="mtr-frame--strip"
              />
            )
          )}
        </div>
      </section>

      {/* ───────────────────────────── 03 FOCUS BENTO */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>03</span> Mentoring Focus
          </div>
          <h2 className="mtr-shead__title">
            Where founders, leaders &amp; businesses need guidance.
          </h2>
          <p className="mtr-shead__lede">
            Built from decades of work across startups, SMEs, MSMEs, technology companies,
            manufacturing businesses, investment ecosystems and international markets.
          </p>
        </div>

        <div className="mtr-bento">
          <div className="mtr-bento__feature">
            <div className="mtr-tag mtr-tag--gold">Experience-Led Guidance</div>
            <h3>Gain experience that is not taught in books.</h3>
            <p>
              Arijit has advised startup founders, SMEs, MSMEs, manufacturing companies, banks,
              technology businesses and growth-stage enterprises on operating-margin improvement,
              profitability, fundraising, market expansion, risk management, legacy-system
              modernization, AI adoption, leadership development, employee engagement and
              international business growth.
            </p>
          </div>

          {focusAreas.map((f, i) => (
            <article className="mtr-bento__cell" key={f.t}>
              <span className="mtr-bento__idx">{String(i + 1).padStart(2, "0")}</span>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </article>
          ))}
        </div>

        <div className="mtr-advisory">
          <div className="mtr-tag">Practical Advisory Areas</div>
          <div className="mtr-advisory__chips">
            {advisoryAreas.map((a) => (
              <span className="mtr-chip" key={a}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── SURVIVAL QUOTE */}
      <section className="mtr-quote">
        <div className="mtr-inner">
          <span className="mtr-quote__label">Long-Term · Business Survival Thinking</span>
          <p className="mtr-quote__text">
            Better decisions create stronger businesses. Sustainable growth depends on strategic
            thinking, disciplined execution and early identification of risks.
          </p>
          <p className="mtr-quote__sub">
            Mentoring helps founders strengthen business models, improve communication, modernize
            technology, optimize operations and build companies prepared for long-term growth.
          </p>
        </div>
      </section>

      {/* ───────────────────────────── 04 SERVICE FRAMEWORK */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>04</span> Mentoring Services
          </div>
          <h2 className="mtr-shead__title">
            From market-entry clarity to investor, service-design and technology readiness.
          </h2>
          <p className="mtr-shead__lede">
            Research, investment readiness, private-equity preparation, ecosystem access, corporate
            matchmaking, technology upgrade, AI transformation, legacy-system modernization and
            global expansion — structured as one execution-focused growth framework.
          </p>
        </div>

        <div className="mtr-steps">
          {serviceSteps.map((s) => (
            <article className="mtr-step" key={s.step}>
              <div className="mtr-step__spine">
                <span className="mtr-step__node">{s.step}</span>
              </div>
              <div className="mtr-step__body">
                <div className="mtr-step__cat">{s.cat}</div>
                <h3 className="mtr-step__title">{s.t}</h3>
                <p className="mtr-step__desc">{s.d}</p>
                <ul className="mtr-step__points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 05 EIGHT REASONS */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>05</span> Business Development
          </div>
          <h2 className="mtr-shead__title">Eight reasons founders and businesses connect.</h2>
          <p className="mtr-shead__lede">
            The goal is not advice alone. The goal is stronger execution: investor readiness, market
            entry, partnerships, technology adoption, cost reduction, operating-margin improvement,
            communication and global business access.
          </p>
        </div>

        <div className="mtr-reasons">
          {connectReasons.map((r, i) => (
            <div className="mtr-reason" key={r}>
              <span className="mtr-reason__idx">{String(i + 1).padStart(2, "0")}</span>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 06 TRUSTED ECOSYSTEMS */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>06</span> Trusted Ecosystems
          </div>
          <h2 className="mtr-shead__title">
            Trusted across leading startup, academic and innovation ecosystems.
          </h2>
          <p className="mtr-shead__lede">
            Real relationships. Real access. Real impact — the right introductions, partnerships,
            markets, mentors and growth opportunities for founders and businesses.
          </p>
        </div>

        <div className="mtr-trust">
          {trustedEcosystems.map((e) => (
            <div className="mtr-trust__cell" key={e.n}>
              <span className="mtr-trust__avatar">{e.a}</span>
              <span className="mtr-trust__name">{e.n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 07 SESSIONS GALLERY */}
      <section className="mtr-inner mtr-section">
        <div className="mtr-shead">
          <div className="mtr-shead__num">
            <span>07</span> Mentoring Sessions
          </div>
          <h2 className="mtr-shead__title">
            Across institutions, accelerators &amp; business platforms.
          </h2>
          <p className="mtr-shead__lede">
            A selected archive of founder mentoring, institutional sessions, accelerator ecosystems
            and business-development platforms connected with Arijit Bhattacharyya's advisory work.
          </p>
        </div>

        <div className="mtr-sessions">
          {mentoringSessions.map((s, i) => (
            <article
              className={`mtr-session${s.points ? " mtr-session--lg" : ""}`}
              key={s.t}
            >
              <MediaFrame id={s.img} label={s.t} className="mtr-frame--session" />
              <div className="mtr-session__body">
                <div className="mtr-session__loc">{s.loc}</div>
                <h3>{s.t}</h3>
                {s.points && (
                  <ul className="mtr-session__points">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="mtr-session__idx">{String(i + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── CTA */}
      <section className="mtr-cta">
        <div className="mtr-cta__media">
          <ImagePlaceholder
            id="mtr-cta-banner"
            label="Arijit Bhattacharyya — mentoring & advisory"
          />
          <div className="mtr-cta__scrim" />
        </div>
        <div className="mtr-inner mtr-cta__inner">
          <div className="mtr-tag mtr-tag--gold">Mentoring &amp; Advisory</div>
          <h2 className="mtr-cta__title">Ready to discuss your next business challenge?</h2>
          <p className="mtr-cta__desc">
            Bring a real business question — fundraising, entering a new market, modernizing legacy
            systems, adopting AI, improving operating margins or expanding internationally. The
            discussion is focused on practical execution, not generic advice.
          </p>
          <div className="mtr-cta__chips">
            {ctaChips.map((c) => (
              <span className="mtr-chip mtr-chip--solid" key={c}>
                {c}
              </span>
            ))}
          </div>
          <div className="mtr-cta__actions">
            <a className="mtr-btn mtr-btn--primary" href="mailto:arijit@virtualinfocom.net">
              Email Arijit
            </a>
            <a
              className="mtr-btn"
              href="https://ab-new-alpha.vercel.app/contact"
              target="_blank"
              rel="noreferrer"
            >
              Open Contact Page
            </a>
          </div>
        </div>
      </section>

      <div className="mtr-closing">
        <div className="mtr-inner mtr-closing__row">
          <span className="mtr-closing__name">Arijit Bhattacharyya</span>
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
