import "./StatsBar.css";

const STATS = [
  { value: "29+", suffix: "Years of innovation" },
  { value: "102+", suffix: "Country network" },
  { value: "7,000+", suffix: "Startups mentored" },
  { prefix: "Speaker at", value: "2100+", suffix: "Events" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      {STATS.map((s) => (
        <div className="stats-bar__tile" key={s.suffix}>
          {s.prefix && <span className="stats-bar__prefix">{s.prefix}</span>}
          <span className="stats-bar__value">{s.value}</span>
          <span className="stats-bar__suffix">{s.suffix}</span>
        </div>
      ))}
    </section>
  );
}
