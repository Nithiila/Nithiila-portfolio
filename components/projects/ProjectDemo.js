"use client";

import { useState } from "react";

export default function ProjectDemo({ project }) {
  if (project.id === "healthcare-kg-rag") {
    return <HealthcareRAGDemo />;
  }
  if (project.id === "consumer-dispute-model") {
    return <DisputeModelDemo />;
  }
  if (project.id === "career-path-classification") {
    return <CareerPathDemo />;
  }
  return null;
}

// 01: Healthcare Knowledge Graph RAG Visual Simulation
function HealthcareRAGDemo() {
  const [activeQuery, setActiveQuery] = useState("F880");

  const queryPresets = [
    {
      id: "F880",
      tag: "F880",
      label: "Infection Prevention & Control",
      severity: "Scope E (Moderate)",
      citations: 3820,
      facility: "Albany Regional Care",
      related: ["F881 Antibiotic", "F883 Influenza"],
      vectorScore: 0.942,
      nodeCoord: { x: 380, y: 110 }
    },
    {
      id: "F689",
      tag: "F689",
      label: "Fall Prevention & Hazards",
      severity: "Scope G (Severe Harm)",
      citations: 2140,
      facility: "Hudson Valley Health",
      related: ["F684 Care Quality", "F700 Bed Rails"],
      vectorScore: 0.918,
      nodeCoord: { x: 380, y: 175 }
    },
    {
      id: "F812",
      tag: "F812",
      label: "Food Storage & Sanitation",
      severity: "Scope F (Widespread)",
      citations: 1890,
      facility: "Capital District Senior",
      related: ["F813 Storage", "F814 Disposal"],
      vectorScore: 0.884,
      nodeCoord: { x: 380, y: 240 }
    }
  ];

  const current = queryPresets.find((q) => q.id === activeQuery) || queryPresets[0];

  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        padding: "clamp(1.2rem, 2.5vw, 1.6rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem"
      }}
    >
      {/* Top Simulator Control Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          paddingBottom: "0.85rem",
          borderBottom: "1px solid var(--line)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 10px var(--accent)"
            }}
          />
          <span className="mono" style={{ fontSize: "0.76rem", color: "var(--text)", fontWeight: 700 }}>
            INTERACTIVE KNOWLEDGE GRAPH & VECTOR RAG EXPLORER
          </span>
        </div>
        <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)" }}>
          DATASET: 419,000+ CMS RECORDS
        </span>
      </div>

      {/* Query Selector Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {queryPresets.map((preset) => {
          const isSelected = activeQuery === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => setActiveQuery(preset.id)}
              style={{
                padding: "0.45rem 0.9rem",
                backgroundColor: isSelected ? "var(--accent)" : "var(--bg)",
                color: isSelected ? "var(--bg)" : "var(--text)",
                border: isSelected ? "1px solid var(--accent)" : "1px solid var(--line-bright)",
                borderRadius: "var(--radius-xs)",
                fontSize: "0.76rem",
                fontFamily: "var(--font-mono)",
                fontWeight: isSelected ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Tag {preset.tag} // {preset.label.split(" ")[0]}
            </button>
          );
        })}
      </div>

      {/* Visual Interactive SVG Knowledge Graph Topology */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#0A0C0F",
          border: "1px solid var(--line-bright)",
          borderRadius: "var(--radius-xs)",
          padding: "1rem",
          overflow: "hidden"
        }}
      >
        <svg
          viewBox="0 0 540 280"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <linearGradient id="ragLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFAA33" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Connectors from Central Database to Facility */}
          <line x1="80" y1="140" x2="220" y2="140" stroke="#FFAA33" strokeWidth="2" strokeDasharray="4 4" />

          {/* Connectors from Facility to 3 Tag Nodes */}
          {queryPresets.map((q) => {
            const isTarget = q.id === activeQuery;
            return (
              <g key={q.id}>
                <line
                  x1="220"
                  y1="140"
                  x2={q.nodeCoord.x}
                  y2={q.nodeCoord.y}
                  stroke={isTarget ? "url(#ragLineGrad)" : "rgba(255, 255, 255, 0.15)"}
                  strokeWidth={isTarget ? 2.5 : 1}
                />
                {isTarget && (
                  <circle cx="280" cy={140 + (q.nodeCoord.y - 140) * 0.4} r="4" fill="#00F5D4">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Central CMS Database Node */}
          <circle cx="80" cy="140" r="28" fill="#14171E" stroke="#FFAA33" strokeWidth="2" />
          <text x="80" y="137" fill="#FFAA33" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            CMS_DB
          </text>
          <text x="80" y="150" fill="#999" fontSize="8" fontFamily="monospace" textAnchor="middle">
            419K RECS
          </text>

          {/* Facility Hub Node */}
          <circle cx="220" cy="140" r="32" fill="#14171E" stroke="#00F5D4" strokeWidth="2" />
          <text x="220" y="136" fill="#00F5D4" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
            FACILITY
          </text>
          <text x="220" y="150" fill="#EAEBE8" fontSize="8" fontFamily="monospace" textAnchor="middle">
            14.8K NODES
          </text>

          {/* Deficiency Tag Target Nodes */}
          {queryPresets.map((q) => {
            const isTarget = q.id === activeQuery;
            return (
              <g key={q.id}>
                <rect
                  x={q.nodeCoord.x - 12}
                  y={q.nodeCoord.y - 20}
                  width="155"
                  height="40"
                  rx="4"
                  fill={isTarget ? "#1A2228" : "#12141A"}
                  stroke={isTarget ? "#00F5D4" : "rgba(255, 255, 255, 0.15)"}
                  strokeWidth={isTarget ? 2 : 1}
                />
                <circle cx={q.nodeCoord.x + 4} cy={q.nodeCoord.y} r="5" fill={isTarget ? "#00F5D4" : "#666"} />
                <text
                  x={q.nodeCoord.x + 18}
                  y={q.nodeCoord.y - 4}
                  fill={isTarget ? "#00F5D4" : "#CCC"}
                  fontSize="9.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  TAG {q.tag}
                </text>
                <text
                  x={q.nodeCoord.x + 18}
                  y={q.nodeCoord.y + 10}
                  fill={isTarget ? "#FFAA33" : "#777"}
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {q.citations.toLocaleString()} Citations
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Real-Time Retrieval Telemetry Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px"
        }}
      >
        <div style={{ padding: "0.85rem", backgroundColor: "var(--bg)", border: "1px solid var(--line)", borderRadius: "var(--radius-xs)" }}>
          <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
            VECTOR COSINE SCORE
          </span>
          <strong className="mono" style={{ fontSize: "1.25rem", color: "var(--accent)" }}>
            {current.vectorScore}
          </strong>
        </div>

        <div style={{ padding: "0.85rem", backgroundColor: "var(--bg)", border: "1px solid var(--line)", borderRadius: "var(--radius-xs)" }}>
          <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
            RESOLVED FACILITY
          </span>
          <strong style={{ fontSize: "0.92rem", color: "var(--text)", display: "block", marginTop: "2px" }}>
            {current.facility}
          </strong>
        </div>

        <div style={{ padding: "0.85rem", backgroundColor: "var(--bg)", border: "1px solid var(--line)", borderRadius: "var(--radius-xs)" }}>
          <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
            SEVERITY TIER
          </span>
          <strong className="mono" style={{ fontSize: "0.88rem", color: "var(--system)", display: "block", marginTop: "2px" }}>
            {current.severity}
          </strong>
        </div>
      </div>
    </div>
  );
}

// 02: Consumer Dispute Escalation Predictive Model Demo
function DisputeModelDemo() {
  const [resolutionDays, setResolutionDays] = useState(48);
  const [priorComplaints, setPriorComplaints] = useState(3);
  const [productType, setProductType] = useState("Credit Card");

  // Calibrated logistic regression simulation based on 87,254 CFPB records
  const baseLogit = -2.1;
  const daysWeight = (resolutionDays / 90) * 2.2;
  const priorWeight = priorComplaints * 0.45;
  const productWeight = productType === "Credit Card" ? 0.4 : productType === "Mortgage" ? 0.8 : 0.1;
  const logit = baseLogit + daysWeight + priorWeight + productWeight;
  const probability = 1 / (1 + Math.exp(-logit));
  const pct = Math.round(probability * 100);

  const riskTier = pct >= 65 ? "HIGH_RISK_ESCALATION" : pct >= 35 ? "MODERATE_RISK" : "LOW_RISK";
  const tierColor = pct >= 65 ? "var(--accent)" : pct >= 35 ? "var(--system)" : "#888";

  // Compute SVG gauge meter path
  // Arc from 180 deg to 0 deg (half-circle)
  const radius = 64;
  const circumference = Math.PI * radius;
  const dashOffset = circumference * (1 - pct / 100);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        padding: "clamp(1.2rem, 2.5vw, 1.6rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem"
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          paddingBottom: "0.85rem",
          borderBottom: "1px solid var(--line)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--system)",
              boxShadow: "0 0 10px var(--system)"
            }}
          />
          <span className="mono" style={{ fontSize: "0.76rem", color: "var(--text)", fontWeight: 700 }}>
            PREDICTIVE ESCALATION INFERENCE ENGINE
          </span>
        </div>
        <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)" }}>
          87,254 CFPB CASES // LOGISTIC MODEL
        </span>
      </div>

      {/* Visual Split: Interactive Gauges + Sliders */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          gap: "1.5rem",
          alignItems: "center"
        }}
        className="dispute-grid"
      >
        {/* SVG Circular Probability Gauge Meter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--bg)",
            border: `1.5px solid ${tierColor}`,
            borderRadius: "var(--radius-xs)",
            padding: "1.25rem 0.75rem",
            boxShadow: `0 0 20px ${tierColor}22`
          }}
        >
          <svg width="150" height="90" viewBox="0 0 150 90">
            {/* Background Arc */}
            <path
              d="M 15,80 A 60,60 0 0,1 135,80"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Animated Active Value Arc */}
            <path
              d="M 15,80 A 60,60 0 0,1 135,80"
              fill="none"
              stroke={tierColor}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={Math.PI * 60}
              strokeDashoffset={Math.PI * 60 * (1 - pct / 100)}
              style={{ transition: "stroke-dashoffset 0.4s ease, stroke 0.3s ease" }}
            />
            <text x="75" y="70" textAnchor="middle" fill={tierColor} fontSize="24" fontFamily="monospace" fontWeight="bold">
              {pct}%
            </text>
          </svg>

          <span className="mono" style={{ fontSize: "0.72rem", fontWeight: 700, color: tierColor, marginTop: "0.25rem" }}>
            {riskTier}
          </span>
          <span className="mono" style={{ fontSize: "0.65rem", color: "var(--muted)", marginTop: "2px" }}>
            P(ESCALATION RISK)
          </span>
        </div>

        {/* Feature Sliders */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", marginBottom: "0.3rem" }}>
              <span style={{ color: "var(--text)" }}>Resolution Lag (Days Elapsed):</span>
              <span className="mono" style={{ color: "var(--accent)", fontWeight: 700 }}>
                {resolutionDays} Days
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="90"
              value={resolutionDays}
              onChange={(e) => setResolutionDays(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", marginBottom: "0.3rem" }}>
              <span style={{ color: "var(--text)" }}>Prior Consumer Complaints on File:</span>
              <span className="mono" style={{ color: "var(--system)", fontWeight: 700 }}>
                {priorComplaints} Cases
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="6"
              value={priorComplaints}
              onChange={(e) => setPriorComplaints(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--system)", cursor: "pointer" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
              PRODUCT CATEGORY:
            </span>
            {["Credit Card", "Mortgage", "Checking"].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProductType(p)}
                style={{
                  padding: "0.3rem 0.65rem",
                  backgroundColor: productType === p ? "var(--accent)" : "var(--bg)",
                  color: productType === p ? "var(--bg)" : "var(--text)",
                  border: "1px solid var(--line-bright)",
                  borderRadius: "var(--radius-xs)",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer"
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          :global(.dispute-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// 03: Career Path Classification Visual Matrix Demo
function CareerPathDemo() {
  const [selectedRole, setSelectedRole] = useState("Data Analyst");

  const transitions = {
    "Data Analyst": [
      { nextRole: "BI Engineer / Analytics Specialist", probability: 78, adjacentSkills: "Power BI • DAX • Executive KPIs", color: "#FFAA33" },
      { nextRole: "Data Scientist / Predictive Modeler", probability: 64, adjacentSkills: "Python • Scikit-Learn • Statistical EDA", color: "#00F5D4" },
      { nextRole: "Data Engineer / Pipeline Developer", probability: 52, adjacentSkills: "SQL • AWS/Azure • REST APIs", color: "#FFAA33" }
    ],
    "Data Scientist": [
      { nextRole: "Machine Learning / AI Engineer", probability: 72, adjacentSkills: "Knowledge Graphs • RAG • Vector Embeddings", color: "#00F5D4" },
      { nextRole: "Quantitative Analytics Lead", probability: 68, adjacentSkills: "Forecasting • Hypothesis Testing • Risk Modeling", color: "#FFAA33" },
      { nextRole: "Business Systems Architect", probability: 48, adjacentSkills: "BRD/FRD • Agile • Gap Analysis", color: "#00F5D4" }
    ]
  };

  const list = transitions[selectedRole] || transitions["Data Analyst"];

  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        padding: "clamp(1.2rem, 2.5vw, 1.6rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          paddingBottom: "0.85rem",
          borderBottom: "1px solid var(--line)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--system)",
              boxShadow: "0 0 10px var(--system)"
            }}
          />
          <span className="mono" style={{ fontSize: "0.76rem", color: "var(--text)", fontWeight: 700 }}>
            MOBILITY TRANSITION MATRIX & SKILL ADJACENCIES
          </span>
        </div>
        <span className="mono" style={{ fontSize: "0.72rem", color: "var(--accent)" }}>
          COHORT CLASSIFICATION MODEL
        </span>
      </div>

      {/* Role Origin Selector */}
      <div style={{ display: "flex", gap: "8px" }}>
        {Object.keys(transitions).map((role) => {
          const isSelected = selectedRole === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              style={{
                padding: "0.4rem 0.85rem",
                backgroundColor: isSelected ? "var(--system)" : "var(--bg)",
                color: isSelected ? "var(--bg)" : "var(--text)",
                border: isSelected ? "1px solid var(--system)" : "1px solid var(--line-bright)",
                borderRadius: "var(--radius-xs)",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontWeight: isSelected ? 700 : 500,
                cursor: "pointer"
              }}
            >
              Baseline: {role}
            </button>
          );
        })}
      </div>

      {/* Visual Transition Probability Bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {list.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-xs)",
              padding: "0.9rem 1.1rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text)" }}>
                → {item.nextRole}
              </span>
              <span className="mono" style={{ fontSize: "1.1rem", fontWeight: 800, color: item.color }}>
                {item.probability}%
              </span>
            </div>

            {/* Visual Probability Fill Bar */}
            <div
              style={{
                width: "100%",
                height: "6px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "3px",
                overflow: "hidden",
                marginBottom: "0.45rem"
              }}
            >
              <div
                style={{
                  width: `${item.probability}%`,
                  height: "100%",
                  backgroundColor: item.color,
                  boxShadow: `0 0 10px ${item.color}`,
                  borderRadius: "3px",
                  transition: "width 0.4s ease"
                }}
              />
            </div>

            <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
              ADJACENT SKILL BRIDGES: {item.adjacentSkills}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
