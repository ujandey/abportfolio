import { genaiProjects } from "../data";
import "./GenAI.css";

const WATCH_URL = "https://www.youtube.com/watch?v=29Tb_2jro6s";

function getYoutubeId(url) {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

function getYoutubeThumbnail(url) {
  const id = getYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export default function GenAI({ accent = "#f7941d" }) {
  const thumbnail = getYoutubeThumbnail(WATCH_URL);

  return (
    <section className="genai" style={{ "--genai-accent": accent }}>
      <div className="genai__row genai__row--top">
        <div className="genai__badge">
          <div className="genai__badge-kicker">I BUILD WITH</div>
          <div className="genai__badge-title">GEN AI</div>
        </div>
        <div className="genai__headline">
          <h1>GEN AI is not a new technology </h1>
        </div>
      </div>

      <div className="genai__row genai__row--bottom">
        <div className="genai__panel">
          <div className="genai__stats">
            <div className="genai__stat">
              <div className="genai__stat-value">12+</div>
              <div className="genai__stat-label">AI products shipped</div>
            </div>
            <div className="genai__stat">
              <div className="genai__stat-value">50k</div>
              <div className="genai__stat-label">users reached</div>
            </div>
          </div>
          <p className="genai__copy">
            We have been using and utilizing aritificial intelligence and generative AI since 2010.
          </p>
          <div className="genai__actions">
            <a href="#" className="genai__btn">
              View AI projects
            </a>
            <a href="#" className="genai__btn">
              Read case studies
            </a>
          </div>
        </div>

        <div className="genai__media">
          <img className="genai__media-img" src={thumbnail} alt="GenAI product demo" />
          <div className="genai__media-glow" />
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="genai__watch"
          >
            <span className="genai__watch-play">▶</span>
            Watch
          </a>
        </div>
      </div>

      <div className="genai__projects">
        <h2 className="genai__projects-title">Stories Beyond Reality</h2>
        <div className="genai__projects-rail">
          {genaiProjects.map((project) => (
            <div key={project.slotId} className="genai__project-card">
              <div className="genai__project-cover">
                <img
                  className="genai__project-img"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
              </div>
              <div className="genai__project-footer">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="genai__project-watch"
                >
                  <span className="genai__watch-play">▶</span>
                  WATCH NOW
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="genai__project-arrow"
                  aria-label={`Open ${project.title}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
