"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("nysdoh");

  const careerRecords = [
    {
      id: "nysdoh",
      role: "Data Analyst",
      organization: "New York State Department of Health (NYSDOH)",
      location: "Albany, NY",
      period: "May 2025 – Sep 2026",
      domainBadge: "PUBLIC HEALTHCARE TELEMETRY",
      themeColor: "#00F5D4",
      punchline:
        "Led multi-agency health data validation, AWS cloud ETL pipelines, and executive Power BI reporting across statewide healthcare records.",
      metrics: [
        { value: "419K+", label: "RECORDS RECONCILED", sub: "CMS & NYSDOH Datasets", color: "#FFAA33" },
        { value: "0%", label: "SCHEMA DRIFT", sub: "Automated Cleansing", color: "#00F5D4" },
        { value: "< 14ms", label: "QUERY LATENCY", sub: "Power BI DirectQuery", color: "#FFAA33" }
      ],
      pipelineFlow: ["Raw State Telemetry", "AWS S3 / PostgreSQL", "Schema Normalization", "Executive DAX Dashboards"],
      coreCapabilities: [
        "AWS Cloud Ingestion & ETL",
        "Schema Reconciliation & Normalization",
        "Power BI & DAX Reporting",
        "BRD / FRD System Documentation",
        "Agile / Scrum UAT Testing"
      ],
      technologies: ["SQL", "Oracle", "PostgreSQL", "Python", "AWS Cloud", "REST APIs", "Power BI", "Agile/Scrum"]
    },
    {
      id: "walmart",
      role: "Data Scientist",
      organization: "Walmart",
      location: "Enterprise Retail Analytics",
      period: "Aug 2022 – Jun 2024",
      domainBadge: "ENTERPRISE RETAIL INTELLIGENCE",
      themeColor: "#FFAA33",
      punchline:
        "Engineered predictive demand forecasting models, statistical exploratory pipelines, and automated inventory discrepancy mitigation on Microsoft Azure.",
      metrics: [
        { value: "87.2K+", label: "DATASETS MODELED", sub: "Transaction & Inventory", color: "#00F5D4" },
        { value: "94.6%", label: "FORECAST ACCURACY", sub: "K-Fold Validated", color: "#FFAA33" },
        { value: "$1.2M+", label: "OPTIMIZATION IMPACT", sub: "Discrepancy Treatment", color: "#00F5D4" }
      ],
      pipelineFlow: ["Store POS Feeds", "Azure Data Lake", "Statistical EDA & Features", "Predictive Forecasting Models"],
      coreCapabilities: [
        "Predictive Modeling & Scikit-Learn",
        "Statistical EDA & Hypothesis Testing",
        "Feature Engineering on Azure",
        "Inventory Discrepancy Detection",
        "Cross-Functional Stakeholder KPIs"
      ],
      technologies: ["Python", "SQL", "Pandas", "NumPy", "Microsoft Azure", "Power BI", "Predictive Analytics"]
    }
  ];

  const current = careerRecords.find((r) => r.id === activeTab) || careerRecords[0];

  return (
    <section
      id="experience"
      aria-label="Professional Experience & Academic Record"
      style={{
        paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
        backgroundColor: "var(--bg-subtle)",
        borderBottom: "1px solid var(--line)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)"
              }}
            />
            <span className="mono" style={{ color: "var(--accent)", fontSize: "0.78rem", letterSpacing: "0.14em" }}>
              05 // CAREER RECORD & APPOINTMENTS
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              maxWidth: "840px",
              lineHeight: 1.08
            }}
          >
            Verified Enterprise Impact in Healthcare & Retail
          </h2>

          <p style={{ color: "var(--muted)", maxWidth: "680px", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.6rem" }}>
            Factual engineering achievements across government public health and global enterprise retail—measured in scale, accuracy, and operational efficiency.
          </p>
        </div>

        {/* Visual Timeline Navigation Bar */}
        <div
          role="tablist"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            marginBottom: "2rem",
            overflow: "hidden"
          }}
        >
          {careerRecords.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(item.id)}
                style={{
                  padding: "1.1rem 1.4rem",
                  backgroundColor: isActive ? "var(--bg-card)" : "var(--bg)",
                  border: "none",
                  borderBottom: isActive ? `3px solid ${item.themeColor}` : "3px solid transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                  <span className="mono" style={{ fontSize: "0.75rem", color: isActive ? item.themeColor : "var(--muted)", fontWeight: 700 }}>
                    {item.period}
                  </span>
                  <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
                    // {item.location}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                    fontWeight: 700,
                    color: isActive ? "var(--text)" : "var(--muted)",
                    lineHeight: 1.2
                  }}
                >
                  {item.role} • {item.organization.split(" (")[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Maximized Visual Executive Scorecard */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: `1.5px solid ${current.themeColor}44`,
            borderRadius: "var(--radius-xs)",
            padding: "clamp(1.5rem, 3.5vw, 2.5rem)",
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.45)`,
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem"
          }}
        >
          {/* Top Organization Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.4rem" }}>
                <span className="mono" style={{ fontSize: "0.75rem", color: current.themeColor, fontWeight: 700 }}>
                  {current.domainBadge}
                </span>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
                  • {current.period}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  lineHeight: 1.15
                }}
              >
                {current.role} — {current.organization}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.98rem", marginTop: "0.5rem", maxWidth: "800px", lineHeight: 1.6 }}>
                {current.punchline}
              </p>
            </div>

            <div
              style={{
                padding: "0.4rem 0.85rem",
                backgroundColor: "var(--bg)",
                border: "1px solid var(--line-bright)",
                borderRadius: "var(--radius-xs)"
              }}
            >
              <span className="mono" style={{ fontSize: "0.75rem", color: current.themeColor, fontWeight: 700 }}>
                LOCATION: {current.location.toUpperCase()}
              </span>
            </div>
          </div>

          {/* 3 Bold Visual Performance Metric Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem"
            }}
            className="career-metrics-grid"
          >
            {current.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)",
                  padding: "1.25rem 1rem",
                  textAlign: "center"
                }}
              >
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", display: "block" }}>
                  {m.label}
                </span>
                <strong
                  className="mono"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    color: m.color,
                    display: "block",
                    margin: "4px 0",
                    lineHeight: 1.1
                  }}
                >
                  {m.value}
                </strong>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text)" }}>
                  {m.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Visual Operational Data Pipeline Conduit */}
          <div
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              padding: "1rem 1.25rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                OPERATIONAL PIPELINE CONDUIT
              </span>
              <span className="mono" style={{ fontSize: "0.7rem", color: current.themeColor }}>
                ACTIVE PRODUCTION FLOW ✓
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${current.pipelineFlow.length}, 1fr)`,
                gap: "8px",
                alignItems: "center"
              }}
              className="pipeline-conduit-grid"
            >
              {current.pipelineFlow.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    position: "relative",
                    padding: "0.6rem 0.75rem",
                    backgroundColor: "var(--bg-card)",
                    border: `1px solid ${sIdx === current.pipelineFlow.length - 1 ? current.themeColor : "var(--line)"}`,
                    borderRadius: "var(--radius-xs)",
                    textAlign: "center"
                  }}
                >
                  <span className="mono" style={{ fontSize: "0.62rem", color: "var(--muted)", display: "block" }}>
                    STEP 0{sIdx + 1}
                  </span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text)", display: "block" }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Visual Capabilities & Technologies (Minimal Copy, High Density Chips) */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {current.coreCapabilities.map((cap) => (
                <span
                  key={cap}
                  style={{
                    fontSize: "0.75rem",
                    padding: "4px 9px",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-xs)",
                    color: "var(--text)"
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {current.technologies.map((t) => (
                <span
                  key={t}
                  className="mono"
                  style={{
                    fontSize: "0.68rem",
                    padding: "2px 6px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "2px",
                    color: "var(--muted)"
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Milestone Card */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            padding: "1.25rem clamp(1.5rem, 3.5vw, 2.25rem)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.25rem" }}>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)", fontWeight: 700 }}>
                ACADEMIC FOUNDATION
              </span>
              <span className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                // {profile.education[0].period}
              </span>
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
              {profile.education[0].degree}
            </h4>
            <span style={{ fontSize: "0.88rem", color: "var(--muted)", display: "block", marginTop: "2px" }}>
              {profile.education[0].institution} • {profile.education[0].location}
            </span>
          </div>

          <div
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "var(--bg)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              textAlign: "right"
            }}
          >
            <span className="mono" style={{ fontSize: "0.65rem", color: "var(--muted)", display: "block" }}>
              CUMULATIVE MERIT
            </span>
            <span className="mono" style={{ fontSize: "1rem", color: "var(--accent)", fontWeight: 800 }}>
              GPA: {profile.education[0].gpa} / 4.0
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          :global(.career-metrics-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.pipeline-conduit-grid) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
