"use client";

import { useEffect, useState } from "react";

export default function NodePanel({ node }) {
  const [pulseCount, setPulseCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((p) => (p + 1) % 100);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  if (!node) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        padding: "clamp(1.5rem, 3vw, 2.2rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1.4rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Top Header & Scale Telemetry */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.25rem" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                animation: "signalBlink 1.2s infinite"
              }}
            />
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
              STAGE TELEMETRY // {node.id.toUpperCase()}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              color: "var(--text)"
            }}
          >
            {node.title}
          </h3>
        </div>

        {/* Live Operational HUD Pill */}
        <div
          style={{
            padding: "0.4rem 0.8rem",
            backgroundColor: "var(--bg)",
            border: "1px solid var(--line-bright)",
            borderRadius: "var(--radius-xs)",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)", fontWeight: 700 }}>
            SCALE: {node.scale}
          </span>
        </div>
      </div>

      <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65 }}>
        {node.description}
      </p>

      {/* Live Animated Telemetry Signal Bars / Oscilloscope */}
      <div
        style={{
          padding: "0.75rem 1rem",
          backgroundColor: "var(--bg)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-xs)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
            STREAM OSCILLOSCOPE:
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "16px" }}>
            {[45, 80, 60, 95, 30, 75, 90, 50, 85, 65, 100, 40].map((h, idx) => (
              <span
                key={idx}
                style={{
                  width: "3px",
                  height: `${Math.max(15, (h * (pulseCount % 2 === 0 ? 1 : 0.8)) % 100)}%`,
                  backgroundColor: idx % 3 === 0 ? "var(--accent)" : "var(--system)",
                  borderRadius: "1px",
                  transition: "height 0.4s ease"
                }}
              />
            ))}
          </div>
        </div>

        <span className="mono" style={{ fontSize: "0.7rem", color: "var(--system)" }}>
          RUNTIME: {node.runtime}
        </span>
      </div>

      {/* Input / Output Signal Channels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "1rem"
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid var(--line)",
            padding: "1rem",
            borderRadius: "var(--radius-xs)"
          }}
        >
          <span className="mono" style={{ fontSize: "0.7rem", color: "var(--accent)", display: "block", marginBottom: "0.5rem" }}>
            INPUT STREAMS & DATA RULES
          </span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {node.inputs.map((inp, idx) => (
              <li key={idx} style={{ fontSize: "0.82rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>›</span>
                {inp}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid var(--line)",
            padding: "1rem",
            borderRadius: "var(--radius-xs)"
          }}
        >
          <span className="mono" style={{ fontSize: "0.7rem", color: "var(--system)", display: "block", marginBottom: "0.5rem" }}>
            OUTPUT VERIFICATION LEDGER
          </span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {node.outputs.map((out, idx) => (
              <li key={idx} style={{ fontSize: "0.82rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--system)", fontSize: "0.85rem" }}>✓</span>
                {out}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Code Console with Syntax Highlight Style */}
      {node.snippet && (
        <div
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            padding: "1rem",
            fontFamily: "var(--font-mono)"
          }}
          className="mono"
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.7rem", color: "var(--muted)" }}>
            <span>QUERY & RUNTIME PIPELINE CODE</span>
            <span style={{ color: "var(--system)" }}>● STATUS: VERIFIED</span>
          </div>
          <pre
            style={{
              margin: 0,
              fontSize: "0.76rem",
              lineHeight: 1.5,
              color: "var(--text)",
              overflowX: "auto"
            }}
          >
            <code>{node.snippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
