import { pillars, pillarsStageImg as stageImg } from "../data";
import "./Pillars.css";

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="pillars__left">
        <div className="pillars__eyebrow">
          <span className="pillars__eyebrow-dot" />
          PILLARS OF AN EXTRAORDINARY CAREER
        </div>
        <div className="pillars__list">
          {pillars.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
      <div className="pillars__img">
        <img src={stageImg} alt="Arijit on stage" />
      </div>
    </section>
  );
}
