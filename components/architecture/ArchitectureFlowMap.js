"use client";

import { useId } from "react";

export default function ArchitectureFlowMap({ stages, activeStageIndex, onSelectStage }) {
  const gradientId = useId();

  // Nodes definition for visual layout
  // 0: Ingestion, 1: Reconciliation, 2: Knowledge Graph (03A), 3: Predictive ML (03B), 4: BI Synthesis (04)
  const nodes = [
    {
      index: 0,
      stage: stages[0],
      x: 10,
      y: 50,
      badge: "CLOUD BOUNDARY",
      tech: "AWS S3 • Azure Blob",
      metric: "419,000+ Records",
      icon: "⬡"
    },
    {
      index: 1,
      stage: stages[1],
      x: 32,
      y: 50,
      badge: "INTEGRITY GATE",
      tech: "Python Pandas • SQL",
      metric: "99.9% Schema Match",
      icon: "⚙"
    },
    {
      index: 2,
      stage: stages[2],
      x: 62,
      y: 24,
      badge: "SEMANTIC FABRIC",
      tech: "Neo4j • Vector RAG",
      metric: "14,850 Facilities",
      icon: "◈"
    },
    {
      index: 3,
      stage: stages[3],
      x: 62,
      y: 76,
      badge: "INFERENCE ENGINE",
      tech: "Scikit-Learn Classifier",
      metric: "87,254 CFPB Cases",
      icon: "📈"
    },
    {
      index: 4,
      stage: stages[4],
      x: 90,
      y: 50,
      badge: "DECISION SURFACE",
      tech: "Power BI DAX • DirectQuery",
      metric: "< 14ms Query Latency",
      icon: "✦"
    }
  ];

  // Visual connections between stages
  // 0 -> 1
  // 1 -> 2
  // 1 -> 3
  // 2 -> 4
  // 3 -> 4
  const connections = [
    { from: 0, to: 1, path: "M 180,240 C 235,240 255,240 310,240" },
    { from: 1, to: 2, path: "M 480,220 C 530,220 540,120 600,120" },
    { from: 1, to: 3, path: "M 480,260 C 530,260 540,360 600,360" },
    { from: 2, to: 4, path: "M 770,120 C 830,120 840,220 890,220" },
    { from: 3, to: 4, path: "M 770,360 C 830,360 840,260 890,260" }
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        padding: "clamp(1.5rem, 3vw, 2.25rem)",
        overflow: "hidden",
        marginBottom: "2rem"
      }}
    >
      {/* Background Subtle Tech Grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none"
        }}
      />

      {/* Top Diagram Header Telemetry */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.75rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--line)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--system)",
              boxShadow: "0 0 10px var(--system)"
            }}
          />
          <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text)", letterSpacing: "0.08em" }}>
            END-TO-END DATA LINEAGE TOPOLOGY // 5 VERIFIED NODES
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFAA33" }} />
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>Cloud & Graph Pipeline</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00F5D4" }} />
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>Reconciliation & ML</span>
          </div>
        </div>
      </div>

      {/* Large Desktop SVG Pipeline Map */}
      <div
        className="flow-map-desktop"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          minHeight: "460px"
        }}
      >
        <svg
          viewBox="0 0 1080 480"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            overflow: "visible"
          }}
        >
          <defs>
            <linearGradient id={`${gradientId}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFAA33" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00F5D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFAA33" stopOpacity="0.4" />
            </linearGradient>

            <filter id={`${gradientId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* SVG Animated Connector Conduits */}
          {connections.map((c, i) => {
            const isConnectedToActive = c.from === activeStageIndex || c.to === activeStageIndex;
            return (
              <g key={i}>
                {/* Background Track Line */}
                <path
                  d={c.path}
                  fill="none"
                  stroke={isConnectedToActive ? "rgba(0, 245, 212, 0.4)" : "rgba(255, 255, 255, 0.12)"}
                  strokeWidth={isConnectedToActive ? 2.5 : 1.5}
                  strokeDasharray="4 4"
                />

                {/* Animated Glowing Packet Flow Line */}
                <path
                  d={c.path}
                  fill="none"
                  stroke={isConnectedToActive ? "url(#" + gradientId + "-line)" : "rgba(0, 245, 212, 0.3)"}
                  strokeWidth={isConnectedToActive ? 3 : 1.5}
                  strokeDasharray="12 180"
                  style={{
                    animation: isConnectedToActive
                      ? "dashAnimation 2.2s linear infinite"
                      : "dashAnimation 4.5s linear infinite"
                  }}
                  filter={isConnectedToActive ? `url(#${gradientId}-glow)` : "none"}
                />
              </g>
            );
          })}
        </svg>

        {/* Interactive Node Cards Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none"
          }}
        >
          {nodes.map((node) => {
            const isActive = activeStageIndex === node.index;
            const stageColor = node.stage.color;

            // Compute CSS left / top coordinates
            const leftPct = `${node.x}%`;
            const topPct = `${node.y}%`;

            return (
              <div
                key={node.index}
                onClick={() => onSelectStage(node.index)}
                style={{
                  position: "absolute",
                  left: leftPct,
                  top: topPct,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "auto",
                  cursor: "pointer",
                  width: "185px",
                  backgroundColor: isActive ? "var(--bg)" : "rgba(18, 20, 26, 0.95)",
                  border: isActive ? `1.5px solid ${stageColor}` : "1px solid var(--line-bright)",
                  borderRadius: "var(--radius-xs)",
                  padding: "0.85rem 0.95rem",
                  boxShadow: isActive
                    ? `0 0 24px ${stageColor}33, 0 10px 30px rgba(0, 0, 0, 0.7)`
                    : "0 4px 18px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  zIndex: isActive ? 10 : 3
                }}
              >
                {/* Node Top Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.35rem"
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: isActive ? stageColor : "var(--muted)"
                    }}
                  >
                    STAGE {node.stage.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: isActive ? "var(--text)" : "var(--muted)",
                      backgroundColor: isActive ? `${stageColor}22` : "transparent",
                      padding: "1px 5px",
                      borderRadius: "2px"
                    }}
                    className="mono"
                  >
                    {node.icon}
                  </span>
                </div>

                {/* Node Title */}
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: isActive ? "var(--text)" : "var(--text)",
                    lineHeight: 1.25,
                    marginBottom: "0.4rem"
                  }}
                >
                  {node.stage.title.split(" & ")[0]}
                </h4>

                {/* Tech Badge */}
                <div
                  className="mono"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    marginBottom: "0.45rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {node.tech}
                </div>

                {/* Factual Metric Tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "2px 6px",
                    backgroundColor: isActive ? `${stageColor}18` : "var(--bg)",
                    border: `1px solid ${isActive ? stageColor : "var(--line)"}`,
                    borderRadius: "2px"
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: stageColor
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: isActive ? stageColor : "var(--text)"
                    }}
                  >
                    {node.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Stacked Interactive Pipeline View */}
      <div className="flow-map-mobile" style={{ display: "none" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {nodes.map((node) => {
            const isActive = activeStageIndex === node.index;
            const stageColor = node.stage.color;
            return (
              <div
                key={node.index}
                onClick={() => onSelectStage(node.index)}
                style={{
                  backgroundColor: isActive ? "var(--bg)" : "rgba(18, 20, 26, 0.8)",
                  border: isActive ? `1.5px solid ${stageColor}` : "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)",
                  padding: "0.9rem 1rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "border-color 0.2s ease"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.2rem" }}>
                    <span className="mono" style={{ fontSize: "0.72rem", color: stageColor, fontWeight: 700 }}>
                      STAGE {node.stage.number}
                    </span>
                    <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
                      // {node.badge}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
                    {node.stage.title}
                  </h4>
                  <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                    {node.tech}
                  </span>
                </div>

                <div
                  style={{
                    padding: "3px 8px",
                    backgroundColor: `${stageColor}15`,
                    border: `1px solid ${stageColor}`,
                    borderRadius: "2px",
                    textAlign: "right"
                  }}
                >
                  <span className="mono" style={{ fontSize: "0.72rem", color: stageColor, fontWeight: 700 }}>
                    {node.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes dashAnimation {
          0% {
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @media (max-width: 900px) {
          :global(.flow-map-desktop) {
            display: none !important;
          }
          :global(.flow-map-mobile) {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
