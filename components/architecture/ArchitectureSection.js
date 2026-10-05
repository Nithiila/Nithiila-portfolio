"use client";

import { useState, useEffect } from "react";
import ArchitectureFlowMap from "./ArchitectureFlowMap";

export default function ArchitectureSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPct, setProgressPct] = useState(0);

  const stages = [
    {
      id: "ingestion",
      number: "01",
      title: "Multi-Source Cloud Ingestion",
      tag: "AWS Cloud & Azure Blob Storage",
      scale: "419,000+ Records",
      benchmark: "Continuous Cloud Pipeline",
      color: "#FFAA33",
      summary:
        "Ingesting heterogeneous healthcare inspection filings, retail inventory feeds, and consumer complaints across AWS S3 and Azure cloud storage containers with automated schema validation.",
      inputSpec: "Unstructured JSON / CSV inspection reports, retail SKU transactions, CFPB consumer complaints",
      outputSpec: "Delta Lake partitioned raw telemetry with cryptographic record hashing",
      code: `-- Partitioned Cloud Ingestion Pipeline
SELECT record_id, facility_id, deficiency_tag, severity_level, event_date
FROM staged_regulatory_telemetry
WHERE processing_state = 'INGESTED' AND record_status = 'VERIFIED'
ORDER BY event_date DESC;`
    },
    {
      id: "reconciliation",
      number: "02",
      title: "Schema Reconciliation & Cleansing",
      tag: "Python (Pandas / NumPy) & SQL",
      scale: "99.9% Integrity",
      benchmark: "Zero Schema Drift",
      color: "#00F5D4",
      summary:
        "Automated deduplication, outlier treatment, schema mapping, and cross-dataset reconciliation ensuring complete clinical and financial data integrity prior to modeling.",
      inputSpec: "Heterogeneous multi-year raw tables, missing facility identifiers, duplicate citation timestamps",
      outputSpec: "Normalized 3NF relational tables, deterministic foreign keys, verified severity distributions",
      code: `# Automated Pandas Schema Normalization & Deduplication
df_clean = df.dropna(subset=['facility_id', 'deficiency_tag'])
df_clean = df_clean.drop_duplicates(subset=['record_hash'])
df_clean['severity_weight'] = df_clean['severity'].map(severity_map)
assert df_clean['record_hash'].is_unique`
    },
    {
      id: "kg_rag",
      number: "03A",
      title: "Knowledge Graph & Semantic Vector RAG",
      tag: "Neo4j Graph Traversal & Dense Vectors",
      scale: "14,850 Facilities",
      benchmark: "0.942 Cosine Score",
      color: "#FFAA33",
      summary:
        "Transforming 419k+ tabular deficiency records into an interconnected knowledge graph with dense vector embeddings for contextual semantic query resolution across healthcare facilities.",
      inputSpec: "Structured CMS citations, free-text deficiency narratives, geographic facility master tables",
      outputSpec: "Multi-hop graph topology (Facility -> CITES -> Deficiency) with cosine similarity index",
      code: `// Multi-Hop Knowledge Graph Traversal
MATCH (f:Facility {state: 'NY'})-[r:CITES_DEFICIENCY]->(d:Deficiency)
WHERE d.scope_severity IN ['G', 'H', 'I', 'J']
RETURN f.name, d.tag_description, r.citation_date
ORDER BY r.citation_date DESC;`
    },
    {
      id: "predictive",
      number: "03B",
      title: "Predictive Analytics & Escalation Classifier",
      tag: "Scikit-Learn Calibrated Classifier",
      scale: "87,254 CFPB Cases",
      benchmark: "K-Fold Validated (ROC-AUC)",
      color: "#00F5D4",
      summary:
        "Applying statistical EDA, feature engineering, and calibrated logistic regression models to forecast high-risk dispute escalations and retail demand trends.",
      inputSpec: "Complaint narrative features, company response flags, dispute latency time deltas",
      outputSpec: "Calibrated escalation probability vector P(Escalate) with high-risk operational alerts",
      code: `# Calibrated Logistic Regression Inference
probs = model.predict_proba(X_test)[:, 1]
escalation_tier = np.where(probs >= 0.70, 'HIGH_RISK_ESCALATION', 'NORMAL')
print(f"ROC-AUC Benchmark: {roc_auc_score(y_test, probs):.4f}")`
    },
    {
      id: "bi_telemetry",
      number: "04",
      title: "Executive Power BI & KPI Synthesis",
      tag: "Power BI DAX & DirectQuery",
      scale: "Executive Dashboards",
      benchmark: "< 14ms Query Latency",
      color: "#FFAA33",
      summary:
        "Translating deep predictive modeling and graph intelligence into executive Power BI dashboards, automated KPI extracts, and stakeholder decision feeds.",
      inputSpec: "DirectQuery live SQL views, aggregated predictive risk scores, real-time KPI thresholds",
      outputSpec: "Interactive executive KPI dashboards, automated anomaly flags, monthly board reporting decks",
      code: `// DAX Executive Telemetry Metric
EscalationResolutionEfficiency = 
DIVIDE(
    CALCULATE(COUNTROWS(Disputes), Disputes[Status] = "RESOLVED_PRE_ESCALATION"),
    COUNTROWS(Disputes), 
    0
)`
    }
  ];

  // Optional auto-cycle timer
  useEffect(() => {
    let timer;
    let progressTimer;

    if (isPlaying) {
      setProgressPct(0);
      const stepDuration = 5000;
      const interval = 50;

      progressTimer = setInterval(() => {
        setProgressPct((prev) => Math.min(100, prev + (interval / stepDuration) * 100));
      }, interval);

      timer = setInterval(() => {
        setActiveStageIndex((prev) => (prev + 1) % stages.length);
        setProgressPct(0);
      }, stepDuration);
    } else {
      setProgressPct(0);
    }

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [isPlaying, stages.length, activeStageIndex]);

  const current = stages[activeStageIndex];

  return (
    <section
      id="thinking"
      aria-label="How I Think: System Architecture"
      style={{
        position: "relative",
        paddingTop: "clamp(4rem, 6vw, 6rem)",
        paddingBottom: "clamp(4rem, 6vw, 6rem)",
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--line)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--system)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px var(--system)"
                }}
              />
              <span className="mono" style={{ color: "var(--system)", fontSize: "0.78rem", letterSpacing: "0.14em" }}>
                02 // HOW I THINK: SYSTEM ARCHITECTURE
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                maxWidth: "880px",
                lineHeight: 1.08
              }}
            >
              The Analytical Architecture: From Raw Telemetry to Decisions
            </h2>

            <p style={{ color: "var(--muted)", maxWidth: "740px", fontSize: "1rem", marginTop: "0.6rem", lineHeight: 1.6 }}>
              A disciplined, verifiable progression connecting multi-cloud ingestion, schema reconciliation, semantic
              knowledge graphs, and predictive machine learning models into executive Power BI telemetry.
            </p>
          </div>

          {/* Autoplay Controller Toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.6rem 1.25rem",
              backgroundColor: isPlaying ? "rgba(0, 245, 212, 0.12)" : "var(--bg-card)",
              border: isPlaying ? "1px solid var(--system)" : "1px solid var(--line-bright)",
              color: isPlaying ? "var(--system)" : "var(--text)",
              borderRadius: "var(--radius-xs)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: isPlaying ? "var(--system)" : "var(--muted)",
                boxShadow: isPlaying ? "0 0 8px var(--system)" : "none"
              }}
            />
            {isPlaying ? "AUTO-STEPPING ACTIVE ▶" : "STEP THROUGH MANUALLY // CLICK TO AUTO"}
          </button>
        </div>

        {/* 2D Crisp Interactive Architecture Pipeline Map (No Zooming, Clear Labels & Data) */}
        <ArchitectureFlowMap
          stages={stages}
          activeStageIndex={activeStageIndex}
          onSelectStage={(idx) => {
            setActiveStageIndex(idx);
            setIsPlaying(false);
          }}
        />

        {/* 5-Station Scrubber Tabs */}
        <div
          role="tablist"
          aria-label="Analytical Pipeline Stages"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1px",
            backgroundColor: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            marginBottom: "2rem",
            overflow: "hidden"
          }}
          className="thinking-scrubber-deck"
        >
          {stages.map((st, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={st.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsPlaying(false);
                }}
                style={{
                  padding: "1rem 1.1rem",
                  backgroundColor: isActive ? "var(--bg-card)" : "var(--bg)",
                  textAlign: "left",
                  border: "none",
                  borderBottom: isActive ? `3px solid ${st.color}` : "3px solid transparent",
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.25rem"
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.72rem",
                      color: isActive ? st.color : "var(--muted)",
                      fontWeight: 700
                    }}
                  >
                    STAGE {st.number}
                  </span>
                  <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
                    {st.scale.split(" ")[0]}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: isActive ? "var(--text)" : "var(--muted)",
                    display: "block",
                    lineHeight: 1.2
                  }}
                >
                  {st.title.split(" & ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Station Deep-Dive Telemetry Strip */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "2.5rem",
            alignItems: "stretch"
          }}
          className="thinking-telemetry-strip"
        >
          {/* Narrative & Metrics */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "2rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    color: current.color,
                    lineHeight: 1
                  }}
                >
                  {current.number}
                </span>
                <span className="mono" style={{ fontSize: "0.78rem", color: "var(--system)", letterSpacing: "0.08em" }}>
                  {current.tag} // {current.benchmark}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.75rem"
                }}
              >
                {current.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "0.96rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                {current.summary}
              </p>

              {/* Data In & Data Out Specification */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "0.9rem",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)",
                  marginBottom: "1.25rem"
                }}
              >
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span className="mono" style={{ fontSize: "0.7rem", color: "var(--system)", minWidth: "65px", fontWeight: 700 }}>
                    INPUT:
                  </span>
                  <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
                    {current.inputSpec}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span className="mono" style={{ fontSize: "0.7rem", color: "var(--accent)", minWidth: "65px", fontWeight: 700 }}>
                    OUTPUT:
                  </span>
                  <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text)" }}>
                    {current.outputSpec}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "0.5rem" }}>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)"
                }}
              >
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
                  VOLUME SCALE
                </span>
                <span className="mono" style={{ fontSize: "0.9rem", color: "#FFAA33", fontWeight: 700 }}>
                  {current.scale}
                </span>
              </div>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)"
                }}
              >
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
                  BENCHMARK
                </span>
                <span className="mono" style={{ fontSize: "0.9rem", color: "#00F5D4", fontWeight: 700 }}>
                  {current.benchmark}
                </span>
              </div>
            </div>
          </div>

          {/* Syntax Code Console */}
          <div
            style={{
              backgroundColor: "#0A0C0F",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              padding: "1.25rem",
              fontFamily: "var(--font-mono)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            className="mono"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: "0.5rem"
                }}
              >
                <span>OPERATIONAL SPECIFICATION</span>
                <span style={{ color: "#00F5D4" }}>● VERIFIED PIPELINE</span>
              </div>
              <pre
                style={{
                  margin: 0,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  overflowX: "auto"
                }}
              >
                <code>{current.code}</code>
              </pre>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid var(--line)"
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveStageIndex((prev) => (prev - 1 + stages.length) % stages.length);
                  setIsPlaying(false);
                }}
                style={{
                  padding: "0.35rem 0.8rem",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)",
                  color: "var(--muted)",
                  fontSize: "0.72rem",
                  cursor: "pointer"
                }}
              >
                ← PREV NODE
              </button>

              <span style={{ fontSize: "0.72rem", color: "var(--system)" }}>
                NODE 0{activeStageIndex + 1} / 05
              </span>

              <button
                type="button"
                onClick={() => {
                  setActiveStageIndex((prev) => (prev + 1) % stages.length);
                  setIsPlaying(false);
                }}
                style={{
                  padding: "0.35rem 0.8rem",
                  backgroundColor: "var(--accent)",
                  border: "none",
                  borderRadius: "var(--radius-xs)",
                  color: "var(--bg)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                NEXT NODE →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.thinking-scrubber-deck) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          :global(.thinking-telemetry-strip) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
