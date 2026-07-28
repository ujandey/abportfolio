import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ImagePlaceholder from "./ImagePlaceholder";
import SpeakCard from "./SpeakCard";
import {
  speakerRoles,
  speakerStats,
  globalPlatforms,
  thoughtLeadershipFeatured,
  thoughtLeadershipRest,
  latestSpeaks,
  institutionalHighlights,
  advisoryChips,
  advisoryRoles,
  founderStats,
  founderRoles,
  speakingJourney,
} from "../latestSpeaksContent";
import "./LatestSpeaksPage.css";

const TICKER_ITEMS = [
  "Since 1998",
  "Founder of Virtualinfocom",
  "Global Speaker",
  "AI",
  "Gaming",
  "DeepTech",
];

function Ticker() {
  return (
    <div className="ls-ticker">
      <div className="ls-ticker__track">
        {[0, 1].map((i) => (
          <div className="ls-ticker__group" key={i}>
            {TICKER_ITEMS.map((item) => (
              <span key={item}>
                {item}
                <span className="ls-ticker__dot">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LatestSpeaksPage() {
  useEffect(() => {
    document.title = "Latest Speaks — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="ls">
      <Nav />

      <Ticker />

      {/* HERO */}
      <header className="ls-inner ls-hero">
        <div className="ls-eyebrow">
          <span className="ls-eyebrow__rule" />
          Latest Speaks — Public Speaker in India
        </div>
        <h1 className="ls-hero__title">
          Global speaker on <span className="ls-accent-text">innovation, startups, AI</span> and
          future technologies.
        </h1>
        <div className="ls-hero__foot">
          <p className="ls-hero__desc">
            Arijit Bhattacharyya speaks as a keynote speaker, moderator, resource person, and
            global panelist across universities, chambers, startup ecosystems, investment forums
            and international technology platforms.
          </p>
          <div className="ls-hero__roles">
            {speakerRoles.map((role) => (
              <span className="ls-pill" key={role}>
                {role}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* FULL-BLEED HERO IMAGE */}
      <section className="ls-hero-media">
        <ImagePlaceholder id="ls-hero-media" label="Speaker at Arijit Bhattacharyya — global keynote speaker & panelist on stage" />
        <div className="ls-hero-media__scrim" />
        <div className="ls-hero-media__foot">
          <div>
            <div className="ls-hero-media__kicker">Speaker at</div>
            <div className="ls-hero-media__title">
              Arijit Bhattacharyya — global keynote speaker &amp; panelist on stage
            </div>
          </div>
          <div className="ls-hero-media__meta">
            2,100+ EVENTS
            <br />
            102+ COUNTRIES
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ls-inner ls-stats-wrap">
        <div className="ls-stats">
          {speakerStats.map((s) => (
            <div className="ls-stat" key={s.l}>
              <span className="ls-stat__tick" />
              <div className="ls-stat__n">{s.n}</div>
              <div className="ls-stat__l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="ls-inner">
        <div className="ls-feature-media">
          <ImagePlaceholder id="ls-feature-media" label="Dubai AI Blockchain investment forum" />
          <div className="ls-feature-media__foot">
            <div className="ls-feature-media__kicker">Dubai • AI • Blockchain • Investment</div>
            <div className="ls-feature-media__desc">
              Arijit Bhattacharyya keynote speaker and global panelist at Dubai AI Blockchain
              investment forum
            </div>
          </div>
        </div>
      </section>

      {/* 01 — GLOBAL PLATFORMS */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head">
          <div className="ls-section__num">
            01 — Reach<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">
            Global speaking platforms across technology, investment, entrepreneurship and
            leadership.
          </h2>
          <p className="ls-section__lede">
            International presence across entrepreneurship, emerging technology, deeptech,
            funding and future economies.
          </p>
        </div>
        <div className="ls-platforms">
          {globalPlatforms.map((p) => (
            <div className="ls-platform" key={p.t}>
              <div className="ls-platform__num">0{p.i}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <div className="ls-platform__tags">
                {p.tags.map((tag) => (
                  <span className="ls-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — THOUGHT LEADERSHIP */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head">
          <div className="ls-section__num">
            02 — Thought Leadership<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">Ideas, Industries &amp; Future Technologies</h2>
          <p className="ls-section__lede">
            The conversations span entrepreneurship, artificial intelligence, gaming, digital
            economies, investment ecosystems and emerging technologies.
          </p>
        </div>

        <a href="#" className="ls-thought-feature">
          <div className="ls-thought-feature__media">
            <ImagePlaceholder id={thoughtLeadershipFeatured.img} label={thoughtLeadershipFeatured.img} />
          </div>
          <div className="ls-thought-feature__body">
            <div className="ls-thought-feature__tags">
              <span className="ls-badge">Featured</span>
              <span className="ls-thought-feature__cat">{thoughtLeadershipFeatured.cat}</span>
            </div>
            <h3>{thoughtLeadershipFeatured.t}</h3>
            <p>{thoughtLeadershipFeatured.d}</p>
          </div>
        </a>

        <div className="ls-thought-grid">
          {thoughtLeadershipRest.map((c) => (
            <SpeakCard key={c.t} img={c.img} cat={c.cat} title={c.t} desc={c.d} />
          ))}
        </div>
      </section>

      {/* 03 — LATEST SPEAKS */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head">
          <div className="ls-section__num">
            03 — Latest Speaks<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">Recent Global &amp; Business Speaking Highlights</h2>
          <p className="ls-section__lede">
            Selected recent appearances across international technology platforms, business
            forums, MSME transformation, venture capital and startup innovation.
          </p>
        </div>
        <div className="ls-scroll-hint">Scroll →</div>
        <div className="ls-scroller">
          {latestSpeaks.map((c) => (
            <div className="ls-scroller__item" key={c.t}>
              <SpeakCard img={c.img} cat={c.loc} title={c.t} sub={c.sub} desc={c.d} tags={c.tags} />
            </div>
          ))}
        </div>
      </section>

      {/* 04 — INSTITUTIONAL HIGHLIGHTS */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head ls-section__head--wide">
          <div className="ls-section__num">
            04 — Institutional Highlights<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">Where Academia Meets Innovation Leadership</h2>
          <p className="ls-section__lede">
            From IIMs and IITs to national hackathons and future-technology forums, Arijit
            Bhattacharyya has engaged with students, founders and institutions as a speaker, jury
            member, investor and innovation resource person.
          </p>
        </div>
        <div className="ls-institutional">
          {institutionalHighlights.map((c) => (
            <a href="#" className="ls-institutional__row" key={c.t}>
              <div className="ls-institutional__media">
                <ImagePlaceholder id={c.img} label={c.img} />
              </div>
              <div>
                <div className="ls-institutional__tag">{c.tag}</div>
                <h3>{c.t}</h3>
                <div className="ls-institutional__sub">{c.sub}</div>
              </div>
              <p>{c.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 05 — ADVISORY / JURY */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head ls-section__head--wide">
          <div className="ls-section__num">
            05 — Advisory, Jury &amp; Mentor Roles<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">Authority Beyond the Speaking Stage</h2>
          <p className="ls-section__lede">
            Decision-room credibility across startup awards, defence and technology panels,
            accelerator networks, chambers, investor forums and founder evaluation ecosystems.
          </p>
        </div>
        <div className="ls-chip-row">
          {advisoryChips.map((chip) => (
            <span className="ls-pill" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="ls-advisory-grid">
          {advisoryRoles.map((c) => (
            <SpeakCard key={c.t} img={c.img} cat={c.cat} title={c.t} desc={c.d} tags={c.tags} />
          ))}
        </div>
      </section>

      {/* 06 — MENTORING / FOUNDER AUTHORITY */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head ls-section__head--wider">
          <div className="ls-section__num">
            06 — Mentoring &amp; Founder Authority<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">
            Beyond Keynotes: Founder Mentoring, Jury Rooms &amp; Advisory Platforms
          </h2>
          <p className="ls-section__lede">
            Arijit Bhattacharyya's speaking work extends into founder mentoring, startup
            evaluation, accelerator ecosystems, investment-readiness conversations and
            institutional innovation platforms.
          </p>
        </div>

        <div className="ls-founder-panel">
          <div className="ls-founder-panel__intro">
            <div className="ls-founder-panel__kicker">Founder Support Layer</div>
            <h3>Mentoring founders, evaluating ideas and shaping innovation ecosystems.</h3>
            <p>
              From startup rooms and accelerator ecosystems to institutional forums and jury
              panels, this layer shows the work behind the stage: helping founders think clearly,
              prepare better and build with stronger direction.
            </p>
          </div>
          <div className="ls-founder-panel__stats">
            {founderStats.map((s) => (
              <div className="ls-founder-stat" key={s.l}>
                <div className="ls-founder-stat__n">{s.n}</div>
                <div className="ls-founder-stat__l">{s.l}</div>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ls-founder-roles">
          {founderRoles.map((r) => (
            <div className="ls-founder-role" key={r.t}>
              <div className="ls-founder-role__cat">{r.cat}</div>
              <h4>{r.t}</h4>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 07 — SPEAKING JOURNEY */}
      <section className="ls-inner ls-section">
        <div className="ls-section__head ls-section__head--wider">
          <div className="ls-section__num">
            07 — Speaking Journey<span className="ls-section__rule" />
          </div>
          <h2 className="ls-section__title">
            Speaking Across Institutions, Summits &amp; Global Forums
          </h2>
          <p className="ls-section__lede">
            A curated view of selected speaking appearances across business forums, investor
            platforms, AI summits, education networks and emerging technology ecosystems.
          </p>
        </div>
        <div className="ls-journey-grid">
          {speakingJourney.map((c) => (
            <a href="#" className="ls-journey-card" key={c.t}>
              <div className="ls-journey-card__media">
                <ImagePlaceholder id={c.img} label={c.img} />
              </div>
              <div className="ls-journey-card__body">
                <div className="ls-journey-card__loc">{c.loc}</div>
                <h4>{c.t}</h4>
                <div className="ls-journey-card__sub">{c.sub}</div>
                <p>{c.d}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <div className="ls-closing">
        <div className="ls-inner ls-closing__row">
          <span className="ls-closing__name">Arijit Bhattacharyya</span>
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
