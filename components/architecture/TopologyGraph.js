"use client";

import { roleTheme } from "@/lib/roleThemes";

export default function TopologyGraph({
  nodes,
  activeNodeId,
  onSelectNode,
  className = ""
}) {
  const nodeCoords = {
    ingestion: {
      x: 100,
      y: 155,
      label: "01. INGESTION",
      cloud: "AWS / Azure S3",
      metric: "419K+ RECS",
      status: "INGESTING"
    },
    reconciliation: {
      x: 280,
      y: 155,
      label: "02. RECONCILE",
      cloud: "SQL / Pandas",
      metric: "99.9% ACCURACY",
      status: "RECONCILED"
    },
    kg_rag: {
      x: 460,
      y: 95,
      label: "03A. KG & VECTORS",
      cloud: "Graph & Vectors",
      metric: "14.8K ENTITIES",
      status: "RETRIEVING"
    },
    predictive: {
      x: 460,
      y: 225,
      label: "03B. PREDICTIVE",
      cloud: "Scikit Classifier",
      metric: "87.2K CFPB",
      status: "INFERENCE"
    },
    bi_telemetry: {
      x: 640,
      y: 155,
      label: "04. BI SYNTHESIS",
      cloud: "Power BI DAX",
      metric: "DIRECTQUERY",
      status: "PROJECTED"
    }
  };

  const edges = [
    { from: "ingestion", to: "reconciliation", id: "e1" },
    { from: "reconciliation", to: "kg_rag", id: "e2" },
    { from: "reconciliation", to: "predictive", id: "e3" },
    { from: "kg_rag", to: "bi_telemetry", id: "e4" },
    { from: "predictive", to: "bi_telemetry", id: "e5" }
  ];

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        padding: "1.5rem",
        overflowX: "auto"
      }}
    >
      {/* Topology Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)"
            }}
          />
          <span className="mono" style={{ fontSize: "0.75rem", color: "var(--text)" }}>
            TOPOLOGY GRAPH // ANIMATED DATA BUS & DIRECTIONAL FLOW
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)" }}>
            ● PIPELINE LIVE
          </span>
          <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
            CLICK OR TAB TO INSPECT
          </span>
        </div>
      </div>

      <svg
        viewBox="0 0 740 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          minWidth: "660px",
          height: "auto",
          display: "block"
        }}
      >
        <defs>
          {/* Active Flow Gradient */}
          <linearGradient id="edgeActiveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--system)" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Technical Coordinate Background Grid */}
        <g opacity="0.35">
          <line x1="40" y1="40" x2="700" y2="40" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="40" y1="155" x2="700" y2="155" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="40" y1="280" x2="700" y2="280" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="100" y1="20" x2="100" y2="300" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="280" y1="20" x2="280" y2="300" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="460" y1="20" x2="460" y2="300" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="640" y1="20" x2="640" y2="300" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 6" />
        </g>

        {/* Directed Animated Pipeline Edges */}
        {edges.map((edge) => {
          const fromNode = nodeCoords[edge.from];
          const toNode = nodeCoords[edge.to];
          const isEdgeActive = activeNodeId === edge.from || activeNodeId === edge.to;
          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;

          return (
            <g key={edge.id}>
              {/* Underlying Track */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isEdgeActive ? "rgba(217, 119, 54, 0.25)" : "var(--line)"}
                strokeWidth={isEdgeActive ? 4 : 1.5}
              />

              {/* Animated Flowing Data Conduit */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isEdgeActive ? "url(#edgeActiveGrad)" : "var(--line-bright)"}
                strokeWidth={isEdgeActive ? 2.5 : 1}
                strokeDasharray="8 6"
                style={{
                  animation: "flowDash 1.2s linear infinite",
                  transition: "stroke 0.3s ease, stroke-width 0.3s ease"
                }}
              />

              {/* Dynamic Traveling Data Packet / Photon */}
              <circle
                cx={midX}
                cy={midY}
                r={isEdgeActive ? 4 : 2.5}
                fill={isEdgeActive ? "var(--accent)" : "var(--system)"}
                style={{
                  filter: isEdgeActive ? "drop-shadow(0 0 6px var(--accent))" : "none",
                  transition: "all 0.3s ease"
                }}
              />
            </g>
          );
        })}

        {/* Interactive Circuit Nodes */}
        {Object.entries(nodeCoords).map(([id, node]) => {
          const isActive = activeNodeId === id;

          return (
            <g
              key={id}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`Inspect stage: ${node.label}`}
              onClick={() => onSelectNode(id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectNode(id);
                }
              }}
              style={{ cursor: "pointer", outline: "none" }}
            >
              {/* Active Energetic Halo */}
              {isActive && (
                <rect
                  x={node.x - 72}
                  y={node.y - 42}
                  width="144"
                  height="84"
                  rx="6"
                  fill="rgba(217, 119, 54, 0.07)"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  style={{
                    animation: "pulseGlow 2s infinite ease-in-out"
                  }}
                />
              )}

              {/* Card Base Container */}
              <rect
                x={node.x - 65}
                y={node.y - 35}
                width="130"
                height="70"
                rx="3"
                fill="var(--bg)"
                stroke={isActive ? "var(--accent)" : "var(--line-bright)"}
                strokeWidth={isActive ? 1.5 : 1}
                style={{
                  transition: "stroke 0.25s ease, fill 0.25s ease",
                  filter: isActive ? "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.5))" : "none"
                }}
              />

              {/* Status Header Indicator */}
              <circle
                cx={node.x - 50}
                cy={node.y - 18}
                r="3.5"
                fill={isActive ? "var(--accent)" : "var(--system)"}
                style={{
                  animation: isActive ? "signalBlink 1.5s infinite" : "none"
                }}
              />

              <text
                x={node.x - 40}
                y={node.y - 15}
                fill="var(--text)"
                fontSize="10"
                fontWeight="700"
                fontFamily="var(--font-display)"
                letterSpacing="0.02em"
              >
                {node.label}
              </text>

              {/* Cloud Runtime Metadata */}
              <text
                x={node.x - 50}
                y={node.y + 4}
                fill="var(--muted)"
                fontSize="8.5"
                fontFamily="ui-monospace, monospace"
              >
                {node.cloud}
              </text>

              {/* Real Factual Metric Badge */}
              <rect
                x={node.x - 52}
                y={node.y + 13}
                width="104"
                height="14"
                rx="2"
                fill={isActive ? "rgba(217, 119, 54, 0.15)" : "var(--bg-subtle)"}
                stroke={isActive ? "rgba(217, 119, 54, 0.4)" : "var(--line)"}
                strokeWidth="0.8"
              />

              <text
                x={node.x}
                y={node.y + 23}
                fill={isActive ? "var(--accent)" : "var(--system)"}
                fontSize="8"
                fontWeight="700"
                fontFamily="ui-monospace, monospace"
                textAnchor="middle"
              >
                {node.metric}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
