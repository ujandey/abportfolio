import ImagePlaceholder from "./ImagePlaceholder";
import { acceleratorGallery, acceleratorFeatures } from "../data";
import "./Accelerator.css";

const ICONS = {
  trend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7"></polyline>
      <polyline points="15 7 21 7 21 13"></polyline>
    </svg>
  ),
  bars: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="8" rx="1"></rect>
      <rect x="10" y="7" width="4" height="13" rx="1"></rect>
      <rect x="17" y="3" width="4" height="17" rx="1"></rect>
    </svg>
  ),
  network: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="2.4"></circle>
      <circle cx="5" cy="17" r="2.4"></circle>
      <circle cx="19" cy="17" r="2.4"></circle>
      <line x1="10.4" y1="7.7" x2="6.6" y2="15.3"></line>
      <line x1="13.6" y1="7.7" x2="17.4" y2="15.3"></line>
      <line x1="7.4" y1="17" x2="16.6" y2="17"></line>
    </svg>
  ),
};

export default function Accelerator() {
  return (
    <>
      <section className="accelerator">
        <div className="accelerator__inner">
          <div className="accelerator__eyebrow">
            <span className="accelerator__eyebrow-arrow">&gt;</span>
            <span>Pitch &amp; Invest</span>
          </div>

          <div className="accelerator__hero-grid">
            <div className="accelerator__hero-left">
              <div className="accelerator__badge">
                <div className="accelerator__badge-name">Arijit Bhattacharyya</div>
                <div className="accelerator__badge-title">
                  <div>STARTUP</div>
                  <div className="accelerator__badge-title--italic">ACCELERATOR</div>
                </div>
              </div>
              <p className="accelerator__lede">
                Get your pitch deck sharpened in live sessions, join a peer
                network of founders and investors across 101+ countries, and
                raise the capital you need to build record-breaking growth —
                now and into the future.
              </p>

              <div className="accelerator__hero-visual">
                <ImagePlaceholder
                  id="accel-hero-left"
                  label="[ founders / pitch session ]"
                />
              </div>
            </div>

            <div className="accelerator__hero-right">
              <div className="accelerator__heading-card">
                <h2 className="accelerator__heading">
                  Tap into two decades of pitching, building &amp; backing
                  startups
                </h2>
              </div>

              <div className="accelerator__capital-visual">
                <ImagePlaceholder
                  id="accel-capital"
                  label="[ market / trading-floor b-roll ]"
                  className="accelerator__capital-img"
                />
                <div className="accelerator__capital-scrim" />
                <div className="accelerator__capital-overlay">
                  BUT WITH THE RIGHT{" "}
                  <span className="accelerator__accent">CAPITAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accelerator-intro">
        <div className="accelerator-intro__inner">
          <div className="accelerator-intro__grid">
            <h2 className="accelerator-intro__heading">
              The right introduction changes everything
            </h2>
            <p className="accelerator-intro__lede">
              Arijit Bhattacharyya connects founders with the investors,
              partners and mentors who actually move the needle — business
              matchmaking across 101+ countries, so the next conversation is
              the one that changes the company.
            </p>
          </div>
        </div>

        <div className="accelerator-intro__scroll">
          {acceleratorGallery.map((item) => (
            <div key={item.slotId} className="accelerator-intro__card">
              <ImagePlaceholder id={item.slotId} label={item.label} />
            </div>
          ))}
        </div>
      </section>

      <section className="accelerator-portfolio">
        <div className="accelerator-portfolio__inner">
          <div className="accelerator-portfolio__intro">
            <div className="accelerator-portfolio__eyebrow">
              <span className="accelerator-portfolio__eyebrow-dot" />
              Portfolio
            </div>
            <h2 className="accelerator-portfolio__heading">
              The investments behind the growth
            </h2>
          </div>
        </div>

        <div className="accelerator-portfolio__marquee">
          <div className="accelerator-portfolio__track">
            {[...acceleratorFeatures, ...acceleratorFeatures].map((feature, i) => (
              <div
                key={`${feature.slotId}-${i}`}
                className="accelerator-portfolio__item"
              >
                <div className="accelerator-portfolio__icon">
                  {ICONS[feature.icon]}
                </div>
                <h3 className="accelerator-portfolio__item-title">
                  {feature.title}
                </h3>
                <p className="accelerator-portfolio__item-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
