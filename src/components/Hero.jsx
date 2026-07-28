import { heroImg } from "../data";
import { navigate } from "../router";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__frame">
        <div className="hero__bg">
          <img
            className="hero__bg-img"
            src={heroImg}
            alt="Arijit Bhattacharyya seated in a helicopter cockpit against a blue sky"
          />
        </div>

        <div className="hero__headline">
          <h1>
            Building Technology,
            <br />
            Startups,
            <br />
            Global Investor &amp;
            <br />
            Venture Capitalist
          </h1>
          <p className="hero__since">Since 1998</p>
        </div>

        <a
          href="/bio"
          className="hero__cta"
          onClick={(e) => {
            e.preventDefault();
            navigate("/bio");
          }}
        >
          Explore Bio
          <span className="hero__cta-chevron" />
        </a>
      </div>
    </section>
  );
}
