"use client";

import { useState, useEffect, useRef } from "react";
import { roleTheme } from "@/lib/roleThemes";

export default function SignatureTransition() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  const stages = [
    {
      id: "raw-flux",
      number: "01",
      title: "Raw Unstructured Telemetry",
      subtitle: "Ingestion of 419,000+ CMS Deficiency Records & Retail Transactions",
      detail: "Massive, unstructured multi-table health inspection reports and retail operational logs flow continuously into cloud ingestion boundaries across AWS & Azure.",
      scaleMetric: "419,280 Records Ingested",
      rateMetric: "3.4 GB/s Ingestion Rate",
      entropyLevel: "High Entropy (Raw Multi-Source)",
      stateBadge: "UNSTRUCTURED STREAM",
      codeSnippet: `SELECT record_hash, raw_payload, event_timestamp
FROM ingestion_stream
WHERE validation_status = 'PENDING_RECONCILIATION';`
    },
    {
      id: "reconcile",
      number: "02",
      title: "Schema Reconciliation & Quality Lattice",
      subtitle: "SQL & Python Deduplication, Schema Normalization & Quality Cleansing",
      detail: "Statistical filtering, outlier treatment, and automated reconciliation align disparate data sources into a deterministic relational schema.",
      scaleMetric: "99.9% Schema Consistency",
      rateMetric: "Zero Data Leakage",
      entropyLevel: "Entropy Collapsed to Grid",
      stateBadge: "RECONCILED LATTICE",
      codeSnippet: `df_clean = df.dropna(subset=['facility_id', 'deficiency_tag'])
df_clean = df_clean.drop_duplicates(subset=['record_hash'])
assert df_clean['severity'].notnull().all()`
    },
    {
      id: "graph-vector",
      number: "03",
      title: "Semantic Knowledge Graph & Vector RAG",
      subtitle: "Entity-Relation Extraction Linking 14,850+ Healthcare Facilities",
      detail: "Tabular records transform into an interconnected graph network with dense vector search indices for multi-hop regulatory pattern discovery.",
      scaleMetric: "14,850 Facilities Linked",
      rateMetric: "0.942 Vector Cosine Score",
      entropyLevel: "Interconnected Semantic Topology",
      stateBadge: "KNOWLEDGE GRAPH ACTIVE",
      codeSnippet: `MATCH (f:Facility)-[r:CITES_DEFICIENCY]->(d:Deficiency)
WHERE d.scope_severity IN ['G', 'H', 'I']
RETURN f.name, d.tag_code, r.citation_date`
    },
    {
      id: "decision-vector",
      number: "04",
      title: "Predictive Clarity & Executive Telemetry",
      subtitle: "Predictive Escalation Modeling & Executive Power BI Dashboards",
      detail: "Validated machine learning inference and executive KPI dashboards synthesize millions of data points into concrete operational decisions.",
      scaleMetric: "87,254 Escalations Modeled",
      rateMetric: "< 14ms Prediction Latency",
      entropyLevel: "Deterministic Executive Telemetry",
      stateBadge: "DECISION VECTORS READY",
      codeSnippet: `P_escalate = logistic_model.predict_proba(X)[:, 1]
executive_kpi = np.where(P_escalate >= 0.70, 'HIGH_RISK', 'NORMAL')
emit_to_powerbi(executive_kpi)`
    }
  ];

  // Auto-advance loop when playing
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % stages.length);
      }, 4200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, stages.length]);

  // Canvas Physics Engine representing the 4 stages of data transformation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 60 transformation particles
    const particleCount = 60;
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      size: Math.random() * 2.5 + 1.5,
      pulse: Math.random() * Math.PI,
      color: i % 3 === 0 ? roleTheme.palette.accent : i % 2 === 0 ? roleTheme.palette.system : roleTheme.palette.text
    }));

    let stepTick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      stepTick += 0.02;

      const particles = particlesRef.current;

      // Update target positions based on active stage
      particles.forEach((p, idx) => {
        if (activeStage === 0) {
          // Stage 1: Raw Telemetry - High entropy turbulent swarm
          p.targetX += (Math.random() - 0.5) * 3;
          p.targetY += (Math.random() - 0.5) * 3;
          p.x += (Math.random() - 0.5) * 2.5;
          p.y += (Math.random() - 0.5) * 2.5;
        } else if (activeStage === 1) {
          // Stage 2: Schema Reconciliation - Aligns into disciplined matrix columns
          const cols = 10;
          const rows = Math.ceil(particleCount / cols);
          const colIndex = idx % cols;
          const rowIndex = Math.floor(idx / cols);
          p.targetX = (width / (cols + 1)) * (colIndex + 1);
          p.targetY = (height / (rows + 1)) * (rowIndex + 1);
          p.x += (p.targetX - p.x) * 0.1;
          p.y += (p.targetY - p.y) * 0.1;
        } else if (activeStage === 2) {
          // Stage 3: Knowledge Graph - Orbital clusters around central facility hubs
          const clusterIndex = idx % 4;
          const centers = [
            { cx: width * 0.3, cy: height * 0.4 },
            { cx: width * 0.7, cy: height * 0.4 },
            { cx: width * 0.5, cy: height * 0.75 },
            { cx: width * 0.5, cy: height * 0.25 }
          ];
          const c = centers[clusterIndex];
          const angle = (idx / 15) * Math.PI * 2 + stepTick * 0.5;
          const r = 38 + (idx % 3) * 18;
          p.targetX = c.cx + Math.cos(angle) * r;
          p.targetY = c.cy + Math.sin(angle) * r;
          p.x += (p.targetX - p.x) * 0.08;
          p.y += (p.targetY - p.y) * 0.08;
        } else if (activeStage === 3) {
          // Stage 4: Executive Decision Telemetry - Structured horizontal telemetry rays
          const row = idx % 5;
          const offsetInRow = (idx / 5) * (width * 0.8) + (stepTick * 60) % width;
          p.targetX = offsetInRow % width;
          p.targetY = (height / 6) * (row + 1);
          p.x += (p.targetX - p.x) * 0.15;
          p.y += (p.targetY - p.y) * 0.15;
        }

        // Boundary containment
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Render particle
        p.pulse += 0.04;
        const currentAlpha = 0.5 + Math.sin(p.pulse) * 0.3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.2, Math.min(0.95, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Draw stage-specific dynamic geometric linkages
      if (activeStage === 1) {
        // Horizontal grid guide lines
        ctx.strokeStyle = "rgba(45, 52, 64, 0.4)";
        ctx.lineWidth = 0.6;
        for (let y = height / 6; y < height; y += height / 6) {
          ctx.beginPath();
          ctx.moveTo(20, y);
          ctx.lineTo(width - 20, y);
          ctx.stroke();
        }
      } else if (activeStage === 2) {
        // Inter-cluster knowledge graph links
        ctx.strokeStyle = "rgba(56, 142, 148, 0.25)";
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i += 2) {
          const j = (i + 1) % particles.length;
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      } else if (activeStage === 3) {
        // Decision telemetry bus lines
        ctx.strokeStyle = "rgba(217, 119, 54, 0.3)";
        ctx.lineWidth = 1;
        for (let r = 1; r <= 5; r++) {
          const lineY = (height / 6) * r;
          ctx.beginPath();
          ctx.moveTo(20, lineY);
          ctx.lineTo(width - 20, lineY);
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeStage]);

  const current = stages[activeStage];

  return (
    <section
      id="transition-conduit"
      aria-label="Signature Metaphor Transformation"
      style={{
        position: "relative",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        backgroundColor: "var(--bg-subtle)",
        paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
        overflow: "hidden"
      }}
    >
      {/* Decorative Technical Grid Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(to right, rgba(30, 35, 43, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 35, 43, 0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          opacity: 0.6
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px var(--accent)"
                }}
              />
              <span className="mono" style={{ color: "var(--accent)", fontSize: "0.78rem", letterSpacing: "0.14em" }}>
                SIGNATURE METAPHOR TRANSFORMATION // LIVE CONDUIT
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                maxWidth: "840px",
                lineHeight: 1.08
              }}
            >
              How Abstract Telemetry Evolves into Structured Intelligence
            </h2>

            <p style={{ color: "var(--muted)", maxWidth: "700px", fontSize: "0.98rem", marginTop: "0.5rem", lineHeight: 1.6 }}>
              The 3D hero visualization is an active model of data pipeline engineering: watch raw unstructured records condense into relational schemas, knowledge graphs, and predictive decision vectors.
            </p>
          </div>

          {/* Flow Play/Pause Toggle Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.55rem 1.1rem",
              backgroundColor: isPlaying ? "rgba(217, 119, 54, 0.1)" : "var(--bg)",
              border: isPlaying ? "1px solid var(--accent)" : "1px solid var(--line-bright)",
              color: isPlaying ? "var(--accent)" : "var(--text)",
              borderRadius: "var(--radius-xs)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: isPlaying ? "var(--accent)" : "var(--muted)"
              }}
            />
            {isPlaying ? "AUTO-CYCLE ACTIVE" : "PAUSED // RESUME CYCLE"}
          </button>
        </div>

        {/* 4-Stage Interactive Scrub Bar */}
        <div
          role="tablist"
          aria-label="Transformation Stages"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            marginBottom: "2rem",
            overflow: "hidden"
          }}
          className="conduit-scrub-bar"
        >
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                style={{
                  padding: "1.1rem 1.25rem",
                  backgroundColor: isActive ? "var(--bg-card)" : "var(--bg)",
                  textAlign: "left",
                  border: "none",
                  borderBottom: isActive ? "3px solid var(--accent)" : "3px solid transparent",
                  cursor: "pointer",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.72rem",
                      color: isActive ? "var(--accent)" : "var(--muted)",
                      fontWeight: 700
                    }}
                  >
                    STAGE {st.number}
                  </span>
                  {isActive && (
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                        animation: "pulseGlow 1.8s infinite ease-in-out"
                      }}
                    />
                  )}
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: isActive ? "var(--text)" : "var(--muted)",
                    display: "block",
                    lineHeight: 1.2
                  }}
                >
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Dual-Column Visual Laboratory: Live Animated Canvas + Real-Time Telemetry Spec */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.95fr",
            gap: "1.75rem",
            alignItems: "stretch"
          }}
          className="conduit-interactive-grid"
        >
          {/* Column A: Live Kinetic Transformation Canvas */}
          <div
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-xs)",
              position: "relative",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {/* Top Canvas Telemetry Bar */}
            <div
              style={{
                padding: "0.75rem 1rem",
                borderBottom: "1px solid var(--line)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "var(--bg-subtle)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--system)",
                    boxShadow: "0 0 8px var(--system)"
                  }}
                />
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text)" }}>
                  STATE: {current.stateBadge}
                </span>
              </div>
              <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                PHYSICS: {current.entropyLevel}
              </span>
            </div>

            {/* Canvas Surface with Active Particle Transformation */}
            <div style={{ position: "relative", flex: 1, minHeight: "260px" }}>
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  display: "block"
                }}
              />

              {/* Stage Scanning Beam Line */}
              {activeStage === 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "var(--system)",
                    boxShadow: "0 0 12px var(--system)",
                    animation: "scanSweep 2.4s infinite linear"
                  }}
                />
              )}
            </div>

            {/* Bottom Live Metric HUD */}
            <div
              style={{
                padding: "0.85rem 1rem",
                borderTop: "1px solid var(--line)",
                backgroundColor: "var(--bg-card)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem"
              }}
            >
              <div>
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
                  VOLUME SCALE:
                </span>
                <strong style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "var(--accent)" }}>
                  {current.scaleMetric}
                </strong>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
                  EFFICIENCY BENCHMARK:
                </span>
                <strong style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "var(--system)" }}>
                  {current.rateMetric}
                </strong>
              </div>
            </div>
          </div>

          {/* Column B: Real Technical Lineage Specification */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-xs)",
              padding: "clamp(1.5rem, 3vw, 2.2rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.25rem"
            }}
          >
            <div>
              <span className="mono" style={{ fontSize: "0.75rem", color: "var(--system)", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                {current.subtitle}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.75rem"
                }}
              >
                {current.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                {current.detail}
              </p>
            </div>

            {/* Live Interactive Code Specimen */}
            <div
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--line-bright)",
                borderRadius: "var(--radius-xs)",
                padding: "1rem",
                fontFamily: "var(--font-mono)"
              }}
              className="mono"
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.7rem", color: "var(--muted)" }}>
                <span>OPERATIONAL PIPELINE SPEC</span>
                <span style={{ color: "var(--accent)" }}>EXECUTION PASS ✓</span>
              </div>
              <pre
                style={{
                  margin: 0,
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  color: "var(--text)",
                  overflowX: "auto"
                }}
              >
                <code>{current.codeSnippet}</code>
              </pre>
            </div>

            {/* Quick Navigation Stepper */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: "0.85rem" }}>
              <button
                type="button"
                onClick={() => {
                  setActiveStage((prev) => (prev - 1 + stages.length) % stages.length);
                  setIsPlaying(false);
                }}
                style={{
                  padding: "0.35rem 0.75rem",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)",
                  color: "var(--muted)",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer"
                }}
              >
                ← PREV STAGE
              </button>

              <span className="mono" style={{ fontSize: "0.75rem", color: "var(--system)" }}>
                STAGE 0{activeStage + 1} / 04
              </span>

              <button
                type="button"
                onClick={() => {
                  setActiveStage((prev) => (prev + 1) % stages.length);
                  setIsPlaying(false);
                }}
                style={{
                  padding: "0.35rem 0.75rem",
                  backgroundColor: "var(--accent)",
                  border: "none",
                  borderRadius: "var(--radius-xs)",
                  color: "var(--bg)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer"
                }}
              >
                NEXT STAGE →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.conduit-scrub-bar) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          :global(.conduit-interactive-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
