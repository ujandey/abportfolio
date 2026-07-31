import ImagePlaceholder from "./ImagePlaceholder";
import "./SpeakImage.css";

// Keys match the `img` / `id` values used across latestSpeaksContent.js and
// LatestSpeaksPage.jsx. Anything without an entry falls back to the gradient
// placeholder.
const speakImagesById = {
  "ls-hero-media": new URL("../assets/latest-speaks/chitkara.png", import.meta.url).href,
  "ls-feature-media": new URL("../assets/latest-speaks/2022/Dubai.jpg", import.meta.url).href,

  // Thought leadership
  "AI & generative intelligence": new URL("../assets/latest-speaks/2021/AI-Education.jpg", import.meta.url).href,
  "Blockchain & digital economies": new URL("../assets/latest-speaks/Thailand_blockchain.jpg", import.meta.url).href,
  "Startup ecosystems": new URL("../assets/latest-speaks/startup-grid.jpg", import.meta.url).href,
  "Gaming, IP & storytelling": new URL("../assets/latest-speaks/gaming.jpg", import.meta.url).href,
  "Metaverse & VR": new URL("../assets/latest-speaks/2022/metaverse.jpg", import.meta.url).href,
  "Global business scaling": new URL("../assets/latest-speaks/2021/AI-Supply-Chain.jpg", import.meta.url).href,
  "Community & diplomacy": new URL("../assets/latest-speaks/colombia.jpg", import.meta.url).href,
  "Investment & innovation": new URL("../assets/latest-speaks/chitkara_investor.jpg", import.meta.url).href,

  // Latest speaks
  "Digital Bridge Kazakhstan": new URL("../assets/latest-speaks/deeptech-training.jpg", import.meta.url).href,
  "Axis Bank Pune": new URL("../assets/latest-speaks/2023/Axis-Bank-Pune.jpg", import.meta.url).href,
  "Axis Bank Bhubaneswar": new URL("../assets/latest-speaks/2023/Axis-Bank-Bhubaneswar.jpg", import.meta.url).href,
  XLRI: new URL("../assets/latest-speaks/2023/XLRI.jpg", import.meta.url).href,
  "Vyapaar Jagat USA": new URL("../assets/latest-speaks/2023/VyparJagat.jpg", import.meta.url).href,

  // Institutional highlights
  "IIM Bodh Gaya": new URL("../assets/latest-speaks/pdpu.jpg", import.meta.url).href,
  "IIT Kharagpur GES": new URL("../assets/latest-speaks/IIT_Hydrabad.jpg", import.meta.url).href,
  "NIT Durgapur": new URL("../assets/latest-speaks/netaji_subhas.jpg", import.meta.url).href,
  "UPES Hackathon": new URL("../assets/latest-speaks/2022/UPES.jpg", import.meta.url).href,
  "SNU VR/AR/Metaverse": new URL("../assets/latest-speaks/2022/SNU.jpg", import.meta.url).href,

  // Advisory, jury & mentor roles
  "National Startup Award": new URL("../assets/latest-speaks/national-startup-award.jpg", import.meta.url).href,
  "Defence Panel": new URL("../assets/latest-speaks/Defence_panel.jpg", import.meta.url).href,
  Techstars: new URL("../assets/latest-speaks/techstars.png", import.meta.url).href,
  "Family Office Forum": new URL("../assets/latest-speaks/2022/family-office.jpg", import.meta.url).href,
  CII: new URL("../assets/latest-speaks/CII.jpg", import.meta.url).href,
  "Angel Investment": new URL("../assets/latest-speaks/pre-seed.jpg", import.meta.url).href,

  // Speaking journey
  "Axis Bank": new URL("../assets/latest-speaks/axisbank.jpg", import.meta.url).href,
  "TiE Ahmedabad": new URL("../assets/latest-speaks/TiE-ahmedabad.png", import.meta.url).href,
  "World Leadership Conference": new URL("../assets/latest-speaks/world-leadership-webiner.jpg", import.meta.url).href,
  "AI World Summit — Singapore": new URL("../assets/latest-speaks/2021/AI-world-summit.jpg", import.meta.url).href,
  "Ghana Business Summit & Awards": new URL("../assets/latest-speaks/2022/ghana.jpg", import.meta.url).href,
  "WISE Forum": new URL("../assets/latest-speaks/2022/WISE.jpg", import.meta.url).href,
  "Dubai Investor Round Table": new URL("../assets/latest-speaks/2021/kubera-house.jpg", import.meta.url).href,
  "Lebanon Innovation Dialogue": new URL("../assets/latest-speaks/2022/Lebanon.jpg", import.meta.url).href,
  "Blockchain Africa": new URL("../assets/latest-speaks/2022/blockchain-africa.jpg", import.meta.url).href,
};

export default function SpeakImage({ id, label, shape, fit, className = "", style }) {
  const src = speakImagesById[id];

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

  // The source photos are small portrait thumbnails (mostly 280x314) while every
  // frame here is landscape, so `cover` would slice off heads and poster titles.
  // The image is letterboxed instead, over a blurred copy of itself that fills
  // the frame.
  return (
    <div
      className={`ls-img-frame ${className}`.trim()}
      style={{ borderRadius: shape === "circle" ? "50%" : undefined, ...style }}
    >
      <span
        className="ls-img-frame__bg"
        style={{ backgroundImage: `url("${src}")` }}
        aria-hidden="true"
      />
      <img
        className={`ls-img${fit === "cover" ? " ls-img--cover" : ""}`}
        src={src}
        alt={label || "Arijit Bhattacharyya speaking"}
        loading={id === "ls-hero-media" ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
