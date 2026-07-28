import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import worldTopo from "world-atlas/countries-110m.json";
import "./Global.css";

const ACCENT = "#2f6bff";

const HIGHLIGHTS = [
  { id: "356", label: "India" },
  { id: "826", label: "UK" },
  { id: "840", label: "USA" },
  { id: "410", label: "Korea" },
];

const HIGHLIGHT_IDS = new Set(HIGHLIGHTS.map((h) => h.id));

export default function Global() {
  const svgRef = useRef(null);

  useEffect(() => {
    const size = 560;
    const radius = size / 2 - 6;

    const countries = feature(worldTopo, worldTopo.objects.countries).features;
    const highlightFeatures = countries.filter((c) =>
      HIGHLIGHT_IDS.has(String(c.id))
    );

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([size / 2, size / 2])
      .rotate([-80, -22, 0])
      .clipAngle(90);

    const path = d3.geoPath(projection);
    const graticule = d3.geoGraticule10();

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${size} ${size}`)
      .attr("role", "img")
      .attr("aria-label", "Globe highlighting India, UK, USA and Korea");

    const defs = svg.append("defs");

    const ocean = defs
      .append("radialGradient")
      .attr("id", "global-ocean")
      .attr("cx", "35%")
      .attr("cy", "28%");
    ocean.append("stop").attr("offset", "0%").attr("stop-color", "#16234f");
    ocean.append("stop").attr("offset", "55%").attr("stop-color", "#0a1130");
    ocean.append("stop").attr("offset", "100%").attr("stop-color", "#04060f");

    const glow = defs
      .append("filter")
      .attr("id", "global-marker-glow")
      .attr("x", "-200%")
      .attr("y", "-200%")
      .attr("width", "500%")
      .attr("height", "500%");
    glow.append("feGaussianBlur").attr("stdDeviation", 4).attr("result", "blur");
    const merge = glow.append("feMerge");
    merge.append("feMergeNode").attr("in", "blur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    const hit = svg
      .append("rect")
      .attr("width", size)
      .attr("height", size)
      .attr("fill", "transparent");

    const g = svg.append("g");

    g.append("circle")
      .attr("cx", size / 2)
      .attr("cy", size / 2)
      .attr("r", radius)
      .attr("fill", "url(#global-ocean)");

    const graticulePath = g
      .append("path")
      .datum(graticule)
      .attr("fill", "none")
      .attr("stroke", "rgba(255,255,255,0.08)")
      .attr("stroke-width", 0.6);

    const countryPaths = g
      .selectAll("path.global__country-shape")
      .data(countries)
      .join("path")
      .attr("class", "global__country-shape")
      .attr("fill", (d) =>
        HIGHLIGHT_IDS.has(String(d.id)) ? ACCENT : "#181b25"
      )
      .attr("stroke", (d) =>
        HIGHLIGHT_IDS.has(String(d.id)) ? "#8fa9ff" : "#2a2d38"
      )
      .attr("stroke-width", (d) =>
        HIGHLIGHT_IDS.has(String(d.id)) ? 1 : 0.5
      );

    const markers = g
      .append("g")
      .selectAll("g.global__marker")
      .data(highlightFeatures)
      .join("g")
      .attr("class", "global__marker");

    markers
      .append("circle")
      .attr("class", "global__marker-pulse")
      .attr("r", 4)
      .attr("fill", "none")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1.4);

    markers
      .append("circle")
      .attr("r", 3.4)
      .attr("fill", "#ffffff")
      .attr("filter", "url(#global-marker-glow)");

    const outline = g
      .append("circle")
      .attr("cx", size / 2)
      .attr("cy", size / 2)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("stroke", "rgba(255,255,255,0.14)")
      .attr("stroke-width", 1);

    function render() {
      graticulePath.attr("d", path);
      countryPaths.attr("d", path);
      outline.attr("r", radius);

      const rotate = projection.rotate();
      const center = [-rotate[0], -rotate[1]];
      markers.each(function (d) {
        const centroid = d3.geoCentroid(d);
        const visible = d3.geoDistance(centroid, center) < Math.PI / 2;
        const sel = d3.select(this);
        sel.style("display", visible ? null : "none");
        if (visible) {
          const [x, y] = projection(centroid);
          sel.attr("transform", `translate(${x},${y})`);
        }
      });
    }

    render();

    let lastElapsed = null;
    let paused = false;
    const ROTATION_SPEED = 4.2; // degrees per second

    const timer = d3.timer((elapsed) => {
      if (lastElapsed === null) lastElapsed = elapsed;
      const dt = elapsed - lastElapsed;
      lastElapsed = elapsed;
      if (!paused) {
        const rotate = projection.rotate();
        projection.rotate([
          rotate[0] + (ROTATION_SPEED * dt) / 1000,
          rotate[1],
          rotate[2],
        ]);
        render();
      }
    });

    const drag = d3
      .drag()
      .on("start", () => {
        paused = true;
      })
      .on("drag", (event) => {
        const k = 0.35;
        const rotate = projection.rotate();
        projection.rotate([
          rotate[0] + event.dx * k,
          Math.max(-85, Math.min(85, rotate[1] - event.dy * k)),
          rotate[2],
        ]);
        render();
      })
      .on("end", () => {
        paused = false;
      });

    hit.call(drag);
    hit.on("mouseenter", () => (paused = true));
    hit.on("mouseleave", () => (paused = false));

    return () => {
      timer.stop();
      hit.on(".drag", null);
    };
  }, []);

  return (
    <section className="global">
      <div className="global__inner">
        <div className="global__copy">
          <div className="global__eyebrow">
            <span className="global__eyebrow-dot" />
            GLOBAL REACH
          </div>
          <h2 className="global__heading">Operating worldwide</h2>
          <p className="global__body">
            From stages in Delhi to rooms in London, New York and Seoul — the
            work travels wherever the next audience is ready to listen.
          </p>
          <div className="global__countries">
            {HIGHLIGHTS.map((h) => (
              <div className="global__country" key={h.id}>
                <span className="global__country-dot" />
                {h.label}
              </div>
            ))}
          </div>
        </div>
        <div className="global__globe-wrap">
          <svg ref={svgRef} className="global__globe" />
        </div>
      </div>
    </section>
  );
}
