import spiritualVideo from "../assets/spiritual/video.MOV";
import "./Spiritual.css";

export default function Spiritual() {
  return (
    <section className="spiritual">
      <div className="spiritual__frame">
        <div className="spiritual__bg">
          <video
            className="spiritual__video"
            src={spiritualVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="spiritual__scrim" />

        <div className="spiritual__content">
          <h2>Grounded in stillness</h2>
          <p>
            Beyond building companies and backing founders, Arijit finds his
            center through a quiet, disciplined spiritual practice. It's the
            thing that keeps his mind clear under pressure, sharpens his
            instincts, and reminds him that success means little without
            inner peace.
          </p>
        </div>
      </div>
    </section>
  );
}
