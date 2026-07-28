import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ImagePlaceholder from "./ImagePlaceholder";
import {
  investKicker,
  investStats,
  investTicker,
  ecosystemLens,
  portfolioSectors,
  flagshipCompanies,
  expansionClusters,
  investCtaChips,
} from "../investmentsContent";
import "./InvestmentsPage.css";

export default function InvestmentsPage() {
  useEffect(() => {
    document.title = "Investments — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="inv">
      <Nav />

      {/* ───────────────────────────── HERO / TEARSHEET */}
      <header className="inv-hero">
        <div className="inv-hero__rail">
          <span className="inv-hero__rail-dot" />
          Investment Ecosystem &amp; Global Market Expansion — Since 1998
        </div>

        <div className="inv-inner inv-hero__grid">
          <div className="inv-hero__lead">
            <div className="inv-kicker">{investKicker}</div>
            <h1 className="inv-hero__title">
              Building companies, <em>investment ecosystems</em> &amp; global
              market expansion.
            </h1>
            <p className="inv-hero__desc">
              Arijit Bhattacharyya's business ecosystem connects companies,
              platforms and communities across technology, investment, gaming,
              creative media, education, healthcare, blockchain and
              international market expansion.
            </p>
            <div className="inv-hero__keywords">
              <span className="inv-tag inv-tag--gold">Investment Keywords</span>
              <p>
                Angel investment, venture capital, startup Bengal and global
                scale-up support.
              </p>
            </div>
          </div>

          {/* fund-style tearsheet card */}
          <aside className="inv-tearsheet">
            <div className="inv-tearsheet__head">
              <span className="inv-tearsheet__ticker">AB · ECOSYSTEM</span>
              <span className="inv-tearsheet__since">EST. 1998</span>
            </div>
            <div className="inv-tearsheet__media">
              <ImagePlaceholder
                id="inv-hero-portrait"
                label="Portrait — Arijit Bhattacharyya, founder & investor"
              />
              <span className="inv-tearsheet__corner inv-tearsheet__corner--tl" />
              <span className="inv-tearsheet__corner inv-tearsheet__corner--br" />
            </div>
            <div className="inv-tearsheet__stats">
              {investStats.map((s) => (
                <div className="inv-tearsheet__stat" key={s.l}>
                  <span className="inv-tearsheet__stat-n">{s.n}</span>
                  <span className="inv-tearsheet__stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </header>

      {/* ───────────────────────────── TICKER TAPE */}
      <div className="inv-ticker" aria-hidden="true">
        <div className="inv-ticker__track">
          {[0, 1].map((g) => (
            <div className="inv-ticker__group" key={g}>
              {investTicker.map((item) => (
                <span className="inv-ticker__item" key={item}>
                  <span className="inv-ticker__mark">▲</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────────────── 01 ECOSYSTEM LENS */}
      <section className="inv-inner inv-section">
        <div className="inv-shead">
          <div className="inv-shead__num">
            <span>01</span> Ecosystem Lens
          </div>
          <h2 className="inv-shead__title">Built across industries.</h2>
          <p className="inv-shead__lede">
            An ecosystem that connects founder-led ventures, investment support,
            global expansion and an industry network into one operating whole.
          </p>
        </div>

        <div className="inv-lens">
          {ecosystemLens.map((l, i) => (
            <article className="inv-lens__cell" key={l.t}>
              <span className="inv-lens__idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="inv-lens__title">{l.t}</h3>
              <p className="inv-lens__desc">{l.d}</p>
              <span className="inv-lens__rule" />
            </article>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 02 PORTFOLIO LEDGER */}
      <section className="inv-inner inv-section">
        <div className="inv-shead">
          <div className="inv-shead__num">
            <span>02</span> Business Portfolio
          </div>
          <h2 className="inv-shead__title">
            Building companies. Connecting industries. Creating global impact.
          </h2>
          <p className="inv-shead__lede">
            Since 1998, Arijit Bhattacharyya's venture ecosystem brings together
            companies, platforms and communities across technology, investment,
            media, gaming, education, healthcare, sustainability and
            international business.
          </p>
        </div>

        <div className="inv-ledger">
          {portfolioSectors.map((sector) => (
            <div className="inv-ledger__row" key={sector.id}>
              <div className="inv-ledger__head">
                <span className="inv-ledger__num">{sector.n}</span>
                <div>
                  <h3 className="inv-ledger__sector">{sector.t}</h3>
                  <p className="inv-ledger__desc">{sector.d}</p>
                </div>
                <span className="inv-ledger__count">
                  {String(sector.ventures.length).padStart(2, "0")}
                  <em>ventures</em>
                </span>
              </div>
              <div className="inv-ledger__holdings">
                {sector.ventures.map((name) => (
                  <div className="inv-holding" key={name}>
                    <div className="inv-holding__logo">
                      <ImagePlaceholder
                        id={`${sector.id}-${name}`}
                        label={`${name} logo`}
                      />
                    </div>
                    <span className="inv-holding__name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── 03 FLAGSHIP CAROUSEL */}
      <section className="inv-section inv-flagship">
        <div className="inv-inner">
          <div className="inv-shead">
            <div className="inv-shead__num">
              <span>03</span> Flagship Companies
            </div>
            <h2 className="inv-shead__title">
              Built from technology, expanded into global platforms.
            </h2>
            <p className="inv-shead__lede">
              These flagship ventures represent the strongest pillars of the
              ecosystem — technology, investment, leadership forums, creative
              media, founder communities, gaming, deeptech and future industry.
            </p>
          </div>
        </div>

        <div className="inv-flagship__scroller">
          <div className="inv-flagship__track">
            {flagshipCompanies.map((c, i) => (
              <article className="inv-flag" key={c.id}>
                <div className="inv-flag__media">
                  <ImagePlaceholder id={c.id} label={`${c.t} venture artwork`} />
                  <span className="inv-flag__no">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="inv-flag__body">
                  <div className="inv-flag__tag">{c.tag}</div>
                  <h3 className="inv-flag__name">{c.t}</h3>
                  <p className="inv-flag__desc">{c.d}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="inv-flagship__hint">Scroll to explore →</p>
        </div>
      </section>

      {/* ───────────────────────────── 04 SCALE-UP */}
      <section className="inv-inner inv-section">
        <div className="inv-shead">
          <div className="inv-shead__num">
            <span>04</span> Scale-Up &amp; Market Expansion
          </div>
          <h2 className="inv-shead__title">
            Turning venture networks into market access.
          </h2>
          <p className="inv-shead__lede">
            Beyond individual companies, the ecosystem works as a growth engine
            for founders, technologies, creative platforms and businesses
            seeking investment support, partnerships and international reach.
          </p>
        </div>

        <div className="inv-clusters">
          {expansionClusters.map((c, i) => (
            <article className="inv-cluster" key={c.id}>
              <div className="inv-cluster__media">
                <ImagePlaceholder
                  id={c.id}
                  label={`${c.t} ecosystem expansion artwork`}
                />
                <span className="inv-cluster__idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="inv-cluster__body">
                <div className="inv-tag inv-tag--gold">{c.tag}</div>
                <h3 className="inv-cluster__title">{c.t}</h3>
                <p className="inv-cluster__desc">{c.d}</p>

                <div className="inv-cluster__grid">
                  <div>
                    <span className="inv-cluster__label">
                      Connected Companies
                    </span>
                    <div className="inv-cluster__companies">
                      {c.companies.map((co) => (
                        <span className="inv-pill" key={co}>
                          {co}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="inv-cluster__label">Expansion Focus</span>
                    <div className="inv-cluster__companies">
                      {c.focus.map((f) => (
                        <span className="inv-pill inv-pill--gold" key={f}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── CTA */}
      <section className="inv-cta">
        <div className="inv-cta__media">
          <ImagePlaceholder
            id="inv-cta-banner"
            label="Arijit Bhattacharyya — investment & scale-up ecosystem"
          />
          <div className="inv-cta__scrim" />
        </div>
        <div className="inv-inner inv-cta__inner">
          <div className="inv-tag inv-tag--gold">Investment Support</div>
          <h2 className="inv-cta__title">
            Looking for angel investment, venture capital support or
            international market expansion? Let's talk.
          </h2>
          <p className="inv-cta__desc">
            Start a direct conversation about scale-up strategy, international
            market expansion, investor connections, startup growth, strategic
            partnerships and ecosystem building.
          </p>
          <div className="inv-cta__chips">
            {investCtaChips.map((c) => (
              <span className="inv-pill inv-pill--solid" key={c}>
                {c}
              </span>
            ))}
          </div>
          <div className="inv-cta__actions">
            <a
              className="inv-btn inv-btn--primary"
              href="mailto:arijit@virtualinfocom.net"
            >
              Email Arijit
            </a>
            <a className="inv-btn" href="mailto:arijit@virtualinfocom.net">
              arijit@virtualinfocom.net
            </a>
          </div>
        </div>
      </section>

      <div className="inv-closing">
        <div className="inv-inner inv-closing__row">
          <span className="inv-closing__name">Arijit Bhattacharyya</span>
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
