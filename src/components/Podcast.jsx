import ImagePlaceholder from "./ImagePlaceholder";
import { featured, episodes } from "../data";
import podcastLogo from "../assets/podcast-logo.png";
import "./Podcast.css";

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

export default function Podcast() {
  const featuredId = getYoutubeId(featured.youtube);

  return (
    <section className="podcast">
      <div className="podcast__inner">
        <div className="podcast__header">
          <div className="podcast__logo-badge">
            <img
              src={podcastLogo}
              alt="Riding Tiger with Arijit"
              className="podcast__logo"
            />
          </div>
          <a href="https://www.youtube.com/@ArijitBhattacharyya" className="podcast__explore">
            Explore episodes <span className="podcast__explore-chevron" />
          </a>
        </div>

        <div className="podcast__card">
          <div className="podcast__player">
            <div className="podcast__cover">
              {featuredId ? (
                <iframe
                  className="podcast__cover-frame"
                  src={`https://www.youtube.com/embed/${featuredId}`}
                  title={featured.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <ImagePlaceholder id="pod-cover" label="Episode cover art" />
              )}
            </div>
            <div className="podcast__meta">{featured.meta}</div>
            <h3 className="podcast__title">{featured.title}</h3>
          </div>

          <div className="podcast__list">
            {episodes.map((ep, i) => {
              const thumbnail = getYoutubeThumbnail(ep.youtube);
              return (
                <div
                  key={ep.slotId}
                  className="podcast__episode"
                  style={{ borderTop: i === 0 ? "none" : "1px solid #ddddd8" }}
                >
                  <div className="podcast__episode-art">
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt={ep.title}
                        className="podcast__episode-thumb"
                      />
                    ) : (
                      <ImagePlaceholder id={ep.slotId} label="Art" />
                    )}
                  </div>
                  <div className="podcast__episode-text">
                    <div className="podcast__episode-meta">{ep.meta}</div>
                    <div className="podcast__episode-title">{ep.title}</div>
                  </div>
                  <a
                    href={ep.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="podcast__listen"
                  >
                    <span className="podcast__listen-icon" />
                    Listen
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
