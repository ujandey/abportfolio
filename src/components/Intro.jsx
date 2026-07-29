import portraitImg from "../assets/helicopter.jpeg";
import "./Intro.css";

const VENTURES = [
  {
    name: "Virtualinfocom",
    role: "Founder, since 1998",
    blurb:
      "One of India's first game development, animation, VR/AR/XR, blockchain, AI and deeptech studios — also a smart city development company. Grew to a team of 200+ and a portfolio of 950+ projects, pioneering real actors and models as superheroes in story-based game titles and, eventually, digital humans.",
  },
  {
    name: "Coinnovateventures",
    role: "Founder & CEO",
    blurb: "Accelerator program & fund — helping build more successful startups.",
  },
  {
    name: "Entrepreneursface",
    role: "Founder",
    blurb:
      "Helps entrepreneurs start up their business, from ideation to execution to fundraising.",
  },
  {
    name: "World Leader Summit",
    role: "Founder",
    blurb:
      "One of the world's largest leadership summits and international business clubs, with a 97+ country member network, monthly meetups, startup pitches, a yearly mega summit and a mentoring platform.",
  },
  {
    name: "Cosplayseller",
    role: "Founder",
    blurb: "India's first e-commerce portal for cosplay items.",
  },
  {
    name: "Glamworldface",
    role: "Co-Founder",
    blurb: "A media & entertainment platform for creative people across India, UK and Ukraine.",
  },
  {
    name: "Animgaming",
    role: "Founder",
    blurb: "A platform for indie developers to showcase their work and get funding from global publishers and investors.",
  },
  {
    name: "Virtualgamedeveloper",
    role: "Investor & Co-Founder",
    blurb: "A VR movie and game making company.",
  },
  {
    name: "Yogatraining4u",
    role: "Investor",
    blurb: "A platform for yoga and MMA fighters.",
  },
  {
    name: "PhoneQuad LLC, USA",
    role: "Director & Advisor",
    blurb: "",
  },
  {
    name: "Accredo International, UK",
    role: "Founder & MD",
    blurb: "",
  },
];

const ROLES = [
  "Jury, National Startup India Award — Govt. of India",
  "Senior Advisor, Global Wealth Forum",
  "Global Advisor, UNACCC",
  "Panelist, Industry 4.0 — Govt. of India panel",
  "Director – Innovation, Investment & AI, Private Office of His Highness Sheikh Ahmed Bin Faisal Al Qassimi Group of Companies",
  "Advisory Board Member, World Women Conference and Awards, USA",
  "Global Ambassador, ICMEI (International Chamber of Media and Entertainment Industry)",
  "Global Ambassador, The Diplomatic Club",
  "Mentor Board Member, universities across India, USA and Oman",
  "Advisory Board Member, The Future of Medicine Foundation, USA",
];

const MENTORSHIPS = [
  "SeedStars, Switzerland",
  "BGI, Portugal",
  "IIDF, Russia",
  "Techstars",
  "IIMC Innovation Park",
  "Ex-Honorary Secretary, TiE Kolkata",
  "Ex-President, ELMA (2021)",
  "Advisory Member, STPI",
  "Ex-Google Business Group Manager",
];

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__top">
        <div className="intro__copy">
          <div className="intro__eyebrow">
            <span className="intro__eyebrow-dot" />
            WHO HE IS
          </div>
          <h2 className="intro__title">
            A Life Across Technology, Business &amp; Art
          </h2>

          <p className="intro__lead">
            Serial Entrepreneur (since 1998), Technologist, Angel Investor,
            Public Speaker (since 2008), TEDx Speaker, Business Matchmaking
            Expert, Government Advisor, Jury for the National Startup Award,
            Artist, Author, Community Builder (since 2010), Game Programmer
            (since 1998, from legacy to the latest game engines), Virtual
            Reality Specialist (since 2006, from VRML to C# game engines), AR
            Specialist, AI Coder (since 2002), Gen AI Developer (since 2023),
            Blockchain Specialist (since 2017, mainly in fintech, crypto and
            healthtech) &amp; Globe Trotter with a business network across
            101+ countries. Founder of one of India's first game development
            companies, since 1998, and creator of India's first movie made
            using Gen AI, in 2025.
          </p>
        </div>

        <div className="intro__portrait">
          <img
            className="intro__portrait-img"
            src={portraitImg}
            alt="Arijit Bhattacharyya seated in a helicopter cockpit"
            loading="lazy"
          />
        </div>
      </div>

      <div className="intro__block">
        <h3 className="intro__block-title">Advisory &amp; Global Roles</h3>
        <ul className="intro__roles">
          {ROLES.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="intro__block">
        <h3 className="intro__block-title">Ventures &amp; Companies</h3>
        <div className="intro__ventures">
          {VENTURES.map((v) => (
            <div className="intro__venture" key={v.name}>
              <div className="intro__venture-head">
                <span className="intro__venture-name">{v.name}</span>
                <span className="intro__venture-role">{v.role}</span>
              </div>
              {v.blurb && <p className="intro__venture-blurb">{v.blurb}</p>}
            </div>
          ))}
        </div>
      </div>

      <p className="intro__speaking">
        Speaker at more than 2,100 events worldwide on entrepreneurship,
        the future of technology, innovation, game development, virtual
        reality, augmented reality, NFTs &amp; blockchain, artificial
        intelligence, digital banking, SDG goals, creativity, arts and
        media.
      </p>

      <div className="intro__block">
        <h3 className="intro__block-title">Mentor At</h3>
        <div className="intro__pills">
          {MENTORSHIPS.map((m) => (
            <span className="intro__pill" key={m}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
