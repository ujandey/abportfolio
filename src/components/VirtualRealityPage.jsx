import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ImagePlaceholder from "./ImagePlaceholder";
import heroVideo from "../assets/video/ArijitBhattacharyya.mp4";
const deepblueImg = "/images/hero/deepblue.jpeg";
import {
  heroStats,
  journeySteps,
  industries,
  smartCity,
  engineeringGroups,
  engineeringNotes,
  entertainment,
  futureChips,
} from "../virtualRealityContent";
import "./VirtualRealityPage.css";

export default function VirtualRealityPage() {
  useEffect(() => {
    document.title = "Virtual Reality — Arijit Bhattacharyya";
  }, []);

  return (
    <div className="vr">
      <Nav />

      {/* ==================================================== HERO */}
      <section className="vr-hero">
        <video
          className="vr-hero__video"
          src={heroVideo}
          poster={deepblueImg}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="vr-hero__grid" aria-hidden="true" />
        <div className="vr-hero__veil" aria-hidden="true" />

        <div className="vr-hero__inner">
          <div className="vr-hero__eyebrow">
            <span className="vr-hero__pulse" />
            Since 1998 • Founder of Virtualinfocom • Global Speaker • AI •
            Gaming • DeepTech
          </div>
          <p className="vr-hero__sub">
            Immersive Technology • Digital Humans • Future-Ready Systems
          </p>
          <h1 className="vr-hero__title">
            VR, AR &amp; AI <span>Before They Became Mainstream.</span>
          </h1>
          <p className="vr-hero__lead">
            Arijit Bhattacharyya has been building immersive and intelligent
            technology systems since the early days of game development, 3D
            graphics and VRML. His work connects Virtual Reality, Augmented
            Reality, Artificial Intelligence, Digital Humans, simulation
            systems and interactive experiences across entertainment,
            enterprise, education and future-city innovation.
          </p>
          <p className="vr-hero__lead vr-hero__lead--dim">
            Through Virtualinfocom, his founder-led technology journey spans
            healthcare, defence training, banking, manufacturing, education,
            tourism, real estate, recruitment, digital training, movies,
            smart-city systems, Nokia collaborations and global technology
            ecosystems.
          </p>

          <div className="vr-hero__chips">
            {heroStats.map((s) => (
              <span className="vr-hero__chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="vr-hero__badge">
          <span className="vr-hero__badge-tag">Immersive Technology</span>
          <span className="vr-hero__badge-name">
            Games, AI, VR, AR, XR, Digital Humans &amp; Enterprise Simulation
          </span>
        </div>
      </section>

      {/* ============================================ IMMERSIVE JOURNEY */}
      <section className="vr-section vr-journey">
        <div className="vr-inner">
          <div className="vr-head vr-head--split">
            <div>
              <div className="vr-kicker">Immersive Journey</div>
              <h2 className="vr-title">
                From game worlds to immersive computing.
              </h2>
            </div>
            <p className="vr-head__note">
              Arijit's VR work did not start as a trend. It grew from decades
              of building games, 3D characters, simulations, graphics systems
              and interactive digital experiences.
            </p>
          </div>

          <div className="vr-journey__rail">
            {journeySteps.map((s) => (
              <article className="vr-journey__node" key={s.step}>
                <div className="vr-journey__marker">
                  <span className="vr-journey__dot" />
                </div>
                <span className="vr-journey__step">{s.step}</span>
                <span className="vr-journey__tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= INDUSTRIES */}
      <section className="vr-section vr-section--ink vr-industries">
        <div className="vr-inner">
          <div className="vr-kicker vr-kicker--left">
            Built for Real-World Industries
          </div>
          <h2 className="vr-title vr-title--wide">
            Immersive technology built for real-world use.
          </h2>
          <p className="vr-lead vr-lead--left">
            Arijit's immersive technology and AI-powered simulation work spans
            entertainment, healthcare, defence, banking, recruitment, ship and
            oil-rig training, tourism, real estate, education, manufacturing,
            smart cities and enterprise transformation.
          </p>

          <div className="vr-bento">
            {industries.map((c) => (
              <article
                className={`vr-bento__card vr-bento__card--${c.size}`}
                key={c.id}
              >
                <div className="vr-bento__media">
                  <ImagePlaceholder id={c.id} label={`${c.category} — image`} />
                  <span className="vr-bento__cat">{c.category}</span>
                </div>
                <div className="vr-bento__body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= SMART CITY */}
      <section className="vr-section vr-smartcity">
        <div className="vr-inner">
          <div className="vr-kicker">Smart City Solutions</div>
          <h2 className="vr-title vr-title--center">
            Smart-city systems connecting traffic intelligence, IoT
            infrastructure, clean-water innovation and digital twin simulation.
          </h2>
          <p className="vr-lead vr-lead--center">
            A practical smart-city direction connecting AI, IoT, immersive
            visualization, simulation, smart signaling, environmental
            infrastructure and digital twin thinking for future-ready urban
            systems.
          </p>

          <div className="vr-sc-grid">
            {smartCity.map((c, i) => (
              <article className="vr-sc-card" key={c.id}>
                <span className="vr-sc-card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="vr-sc-card__label">{c.label}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="vr-sc-card__glow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= ENGINEERING DEPTH */}
      <section className="vr-section vr-section--ink vr-engineering">
        <div className="vr-inner">
          <div className="vr-kicker vr-kicker--left">
            Engineering Depth Behind Immersive Innovation
          </div>
          <h2 className="vr-title vr-title--wide">
            The engineering depth behind immersive worlds.
          </h2>
          <p className="vr-lead vr-lead--left">
            Engineering experience spans AI, GenAI, VR, AR, XR, graphics
            programming, enterprise software, blockchain, robotics, IoT, digital
            twins, Microsoft technologies, FinTech, digital banking and
            immersive simulation systems. The work combines research, product
            engineering and scalable technology architecture across multiple
            industries.
          </p>

          <div className="vr-eng__groups">
            {engineeringGroups.map((g) => (
              <div className="vr-eng__group" key={g.heading}>
                <h3>{g.heading}</h3>
                <div className="vr-eng__chips">
                  {g.chips.map((chip) => (
                    <span className="vr-chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ul className="vr-eng__notes">
            {engineeringNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================ ENTERTAINMENT UNIVERSE */}
      <section className="vr-section vr-entertainment">
        <div className="vr-inner">
          <div className="vr-head vr-head--split">
            <div>
              <div className="vr-kicker">Entertainment Universe</div>
              <h2 className="vr-title">
                Where characters become immersive worlds.
              </h2>
            </div>
            <p className="vr-head__note">
              Arijit's immersive work connects drawing, comics, digital
              characters, games, VR, movies and AI-led storytelling into one
              creative technology ecosystem.
            </p>
          </div>

          <div className="vr-ent__grid">
            {entertainment.map((e, i) => (
              <article
                className={`vr-ent__card${i % 2 ? " vr-ent__card--reverse" : ""}`}
                key={e.id}
              >
                <div className="vr-ent__media">
                  <ImagePlaceholder id={e.id} label={`${e.media} — image/video`} />
                  <span className="vr-ent__play" aria-hidden="true" />
                </div>
                <div className="vr-ent__body">
                  <span className="vr-ent__idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== FUTURE */}
      <section className="vr-section vr-future">
        <div className="vr-future__aura" aria-hidden="true" />
        <div className="vr-inner">
          <div className="vr-kicker vr-kicker--center">
            The Next Era of AI-Powered Immersion
          </div>
          <h2 className="vr-title vr-title--center">
            The future belongs to AI-powered immersive computing.
          </h2>
          <p className="vr-lead vr-lead--center">
            Arijit Bhattacharyya's journey began with game development, computer
            graphics and Virtual Reality before expanding into Augmented
            Reality, Mixed Reality, Artificial Intelligence, Generative AI,
            Digital Humans and enterprise immersive platforms. Together, these
            technologies are often described as Extended Reality, but for
            business audiences the value is clearer through VR, AR and AI.
          </p>
          <p className="vr-lead vr-lead--center vr-lead--dim">
            The next generation of products will combine AI, robotics, digital
            twins, real-time simulation and spatial computing to transform
            healthcare, manufacturing, education, banking, smart cities,
            defence, entertainment and Industry 4.0.
          </p>

          <div className="vr-future__chips">
            {futureChips.map((c) => (
              <span className="vr-chip vr-chip--glow" key={c}>
                {c}
              </span>
            ))}
          </div>

          <div className="vr-future__closer">
            <h3>
              Building the next generation of AI-powered immersive technologies.
            </h3>
            <p>
              More than two decades of experience across game development,
              immersive computing, Artificial Intelligence, enterprise software,
              simulation systems and digital innovation continue to shape the
              future of technology-driven experiences.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
