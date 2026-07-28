import video1 from "../assets/media/video1.mp4";
import "./Statement.css";

export default function Statement() {
  return (
    <section className="statement">
      <div className="statement__bg">
        <video
          className="statement__video"
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="statement__scrim" />
      <div className="statement__content">
        <h2>Master every area of your craft</h2>
        <p>
          Close the gap between where you are and where you want to be — with
          a system built on two decades of doing the work.
        </p>
        <a href="#" className="statement__cta">
          Start now
        </a>
      </div>
    </section>
  );
}
