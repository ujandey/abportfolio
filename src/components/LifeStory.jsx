import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { lifeStory } from "../data";
import "./LifeStory.css";

const START_YEAR = 1998;
const END_YEAR = 2026;
const X_STEP = 200;
const WAVE_AMPLITUDE = 170;
const WAVE_FREQUENCY = 0.45;
const WAVE_OFFSET = 200;

const years = Array.from(
  { length: END_YEAR - START_YEAR + 1 },
  (_, i) => START_YEAR + i
);
const milestoneByYear = Object.fromEntries(
  lifeStory.map((item) => [item.year, item])
);

function MilestoneNode({ data }) {
  return (
    <div className="milestone-node">
      <Handle type="target" position={Position.Left} />
      <div className="milestone-node__year">{data.year}</div>
      <div className="milestone-node__title">{data.title}</div>
      <div className="milestone-node__blurb">{data.blurb}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function YearNode({ data }) {
  return (
    <div className="year-node">
      <Handle type="target" position={Position.Left} />
      <span>{data.year}</span>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

const nodeTypes = { milestone: MilestoneNode, year: YearNode };

export default function LifeStory({ accent = "#2f6bff" }) {
  const nodes = useMemo(
    () =>
      years.map((year, i) => {
        const yearStr = String(year);
        const milestone = milestoneByYear[yearStr];
        const y = Math.round(Math.sin(i * WAVE_FREQUENCY) * WAVE_AMPLITUDE) + WAVE_OFFSET;
        return {
          id: `year-${yearStr}`,
          type: milestone ? "milestone" : "year",
          position: { x: i * X_STEP, y },
          data: milestone ?? { year: yearStr },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
        };
      }),
    []
  );

  const edges = useMemo(
    () =>
      years.slice(1).map((year, i) => ({
        id: `e-${years[i]}-${year}`,
        source: `year-${years[i]}`,
        target: `year-${year}`,
        type: "default",
        style: { stroke: accent, strokeWidth: 1.5, opacity: 0.6 },
      })),
    [accent]
  );

  return (
    <section className="life-story">
      <div className="life-story__header">
        <div className="life-story__eyebrow">
          <span
            className="life-story__eyebrow-dot"
            style={{ background: accent }}
          />
          THE JOURNEY · 1998 — 2026
        </div>
        <h2 className="life-story__title">A Life Built in Logic &amp; Art</h2>
        <p className="life-story__subtitle">
          Scroll and drag along one continuous thread — every year from 1998
          to 2026, with milestones marked along the way.
        </p>
      </div>
      <div className="life-story__canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnScroll
          panOnScrollMode="horizontal"
          zoomOnScroll={false}
          zoomOnPinch
          minZoom={0.3}
          maxZoom={1.5}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1}
            color="rgba(255,255,255,0.14)"
          />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </section>
  );
}
