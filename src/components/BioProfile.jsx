import {
  profileLede,
  profileLedeImage,
  profileBlocks,
} from "../bioProfileContent";
import "./BioProfile.css";

/*
 * The full written profile, paired with photographs. The copy comes verbatim
 * from bioContent.md via bioProfileContent.js — this component only lays it
 * out, it never rewrites it.
 */
export default function BioProfile() {
  return (
    <section className="ab-section ab-section--ink bp" id="profile">
      <div className="ab-inner">
        <header className="bp__head" data-reveal>
          <span className="ab-microlabel ab-microlabel--gold">Full Profile</span>
          <h2 className="bp__title">Arijit Bhattacharyya, in full.</h2>
        </header>

        <div className="bp__lede" data-reveal>
          <figure className="bp__lede-media">
            <img
              src={profileLedeImage}
              alt="Arijit Bhattacharyya speaking on stage"
            />
          </figure>
          <p className="bp__lede-text">{profileLede}</p>
        </div>

        {profileBlocks.map((block, i) => (
          <article
            className={`bp__block${i % 2 ? " bp__block--flip" : ""}`}
            key={block.id}
            id={block.id}
          >
            <figure className="bp__media" data-reveal>
              <img src={block.image} alt={block.imageAlt} />
            </figure>

            <div className="bp__copy" data-reveal>
              <span className="ab-microlabel">{block.label}</span>

              {block.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}

              {block.list && (
                <ul className="bp__list">
                  {block.list.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
