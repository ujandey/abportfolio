import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ImagePlaceholder from "./ImagePlaceholder";
import { techStack } from "../data";
import heroVideo from "../assets/video/ArijitBhattacharyya.mp4";
import deepblueImg from "../assets/hero/deepblue.jpeg";
import {
  techEvolution,
  enterpriseRows,
  industryCards,
  partnerChipsOutline,
  partnerChipsSolid,
  summits,
} from "../technologyContent";
import "./TechnologyPage.css";

export default function TechnologyPage() {
  useEffect(() => {
    document.title = "Technology — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="tp">
      <Nav />

      {/* ============================================================ HERO */}
      <section className="tp-hero">
        <div className="tp-hero__frame">
          <video
            className="tp-hero__video"
            src={heroVideo}
            poster={deepblueImg}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="tp-hero__gradient-bottom" aria-hidden="true" />
          <div className="tp-hero__gradient-left" aria-hidden="true" />

          <div className="tp-hero__content">
            <div className="tp-hero__eyebrow">
              <span className="tp-hero__dot" />
              Technology Ecosystem • Since 1998
            </div>
            <h1>Building Future Technology Ecosystems Since 1998</h1>
            <a className="tp-hero__cta" href="#technology-stack">
              Explore Technology Work
            </a>
          </div>

          <div className="tp-hero__badge">
            <span className="tp-hero__badge-name">ARIJIT BHATTACHARYYA</span>
            <span className="tp-hero__badge-label">TECHNOLOGY</span>
          </div>
        </div>
      </section>

      {/* ================================================= TECHNOLOGY GRID */}
      <section className="tp-section" id="technology-stack">
        <div className="tp-inner">
          <div className="tp-kicker tp-kicker--left">Technology Domains</div>
          <h2 className="tp-title">
            Technology Built Across Multiple Waves of Innovation
          </h2>
          <p className="tp-section-intro">
            From game development and virtual reality to blockchain,
            artificial intelligence and deep technology ecosystems.
          </p>
          <div className="tp-tech-grid">
            {techStack.map((t, i) => (
              <div className="tp-tech-row" key={t.slotId}>
                <div className="tp-tech-row__body">
                  <div className="tp-tech-row__num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{t.name}</h3>
                  <p>{t.blurb}</p>
                </div>
                <div className="tp-tech-row__media">
                  <ImagePlaceholder id={t.slotId} label={t.tag} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ TECHNOLOGY EVOLUTION */}
      <section className="tp-section">
        <div className="tp-inner">
          <div className="tp-kicker">Technology Evolution</div>
          <h2 className="tp-title tp-title--center">
            Technology Evolution Across Key Innovation Waves
          </h2>
          <p className="tp-section-intro tp-section-intro--center">
            A selected timeline across games, software, programming, VRML,
            VR, blockchain, GenAI, smart cities and future venture
            ecosystems.
          </p>
          <div className="tp-evo">
            {techEvolution.map((e) => (
              <div
                className="tp-evo__card"
                key={e.year}
                style={{ gridRow: e.gr, gridColumn: e.gc }}
              >
                <div className="tp-evo__year">{e.year}</div>
                <div className="tp-evo__tags">{e.tags}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
            <div className="tp-evo__bridge tp-evo__bridge--h" style={{ gridRow: 1, gridColumn: 2 }} />
            <div className="tp-evo__bridge tp-evo__bridge--h" style={{ gridRow: 1, gridColumn: 4 }} />
            <div className="tp-evo__bridge tp-evo__bridge--h" style={{ gridRow: 3, gridColumn: 2 }} />
            <div className="tp-evo__bridge tp-evo__bridge--h" style={{ gridRow: 3, gridColumn: 4 }} />
            <div className="tp-evo__bridge tp-evo__bridge--h" style={{ gridRow: 5, gridColumn: 2 }} />
            <div className="tp-evo__bridge tp-evo__bridge--h" style={{ gridRow: 5, gridColumn: 4 }} />
            <div className="tp-evo__bridge tp-evo__bridge--v" style={{ gridRow: 2, gridColumn: 1 }} />
            <div className="tp-evo__bridge tp-evo__bridge--v" style={{ gridRow: 2, gridColumn: 3 }} />
            <div className="tp-evo__bridge tp-evo__bridge--v" style={{ gridRow: 2, gridColumn: 5 }} />
            <div className="tp-evo__bridge tp-evo__bridge--v" style={{ gridRow: 4, gridColumn: 1 }} />
            <div className="tp-evo__bridge tp-evo__bridge--v" style={{ gridRow: 4, gridColumn: 3 }} />
            <div className="tp-evo__bridge tp-evo__bridge--v" style={{ gridRow: 4, gridColumn: 5 }} />
          </div>
        </div>
      </section>

      {/* =================================================== ENTERPRISE ROWS */}
      <section className="tp-section">
        <div className="tp-inner">
          <div className="tp-kicker tp-kicker--left">Technology Platforms</div>
          <h2 className="tp-title">
            Enterprise Systems, Intelligent Platforms &amp; Global Technology
            Ecosystems
          </h2>
          <p className="tp-section-intro">
            Technology is not a single domain. The journey connects
            enterprise systems, AI, GenAI, blockchain, fintech, smart
            infrastructure, digital transformation and global innovation
            platforms.
          </p>
          <div className="tp-rows">
            {enterpriseRows.map((r, i) => (
              <div
                className={`tp-row${i % 2 ? " tp-row--reverse" : ""}`}
                key={r.id}
              >
                <div className="tp-row__copy">
                  <div className="tp-tech-row__num">{r.label}</div>
                  <h3>{r.title}</h3>
                  <p>{r.p1}</p>
                </div>
                <div className="tp-row__media">
                  <ImagePlaceholder id={r.id} label={r.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================== INDUSTRIES (DARK) */}
      <section className="tp-section tp-section--ink">
        <div className="tp-inner">
          <div className="tp-kicker tp-kicker--left">
            Technology Expertise Since 1998
          </div>
          <div className="tp-industries__head">
            <h2 className="tp-title tp-title--light">
              Building Technologies Across Industries, Platforms &amp;
              Innovation Cycles
            </h2>
            <p className="tp-industries__intro">
              A technology journey spanning immersive media, game
              development, artificial intelligence, GenAI, blockchain
              systems, enterprise technology, smart cities, fintech and
              future innovation platforms.
            </p>
          </div>
          <div className="tp-industry-grid">
            {industryCards.map((c) => (
              <div
                className={`tp-industry${c.offset ? " tp-industry--offset" : ""}`}
                key={c.title}
              >
                <div className="tp-industry__media">
                  <span className="tp-industry__num">{c.num}</span>
                  <span className="tp-industry__tag">{c.category}</span>
                  <ImagePlaceholder id={c.title} label={c.category} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== PARTNERS */}
      <section className="tp-section tp-partners">
        <div className="tp-inner">
          <div className="tp-kicker">Technology Ecosystem Experience</div>
          <h2 className="tp-title tp-title--center">
            Built across products, partners, platforms and enterprise
            innovation conversations.
          </h2>
          <div className="tp-chip-cloud">
            {partnerChipsOutline.map((p) => (
              <span className="tp-chip tp-chip--outline" key={p}>
                {p}
              </span>
            ))}
            {partnerChipsSolid.map((p) => (
              <span
                className={`tp-chip tp-chip--${p.tone}`}
                key={p.label}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== SUMMITS */}
      <section className="tp-section">
        <div className="tp-inner">
          <div className="tp-kicker tp-kicker--left">
            Global Technology Presence
          </div>
          <h2 className="tp-title">
            Technology, AI &amp; Innovation Conversations Across Continents
          </h2>
          <p className="tp-section-intro">
            Technology, AI, blockchain, digital transformation and
            innovation conversations delivered across international
            forums, universities, government platforms and startup
            ecosystems.
          </p>
          <div className="tp-summit-grid">
            {summits.map((s) => (
              <div className="tp-summit" key={s.title}>
                <div className="tp-summit__media">
                  <span className="tp-summit__region">{s.region}</span>
                  <ImagePlaceholder id={s.title} label={s.region} />
                </div>
                <div className="tp-summit__body">
                  <div className="tp-summit__meta">{s.meta}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
