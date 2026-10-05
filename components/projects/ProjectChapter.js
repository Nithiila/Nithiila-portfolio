"use client";

import ProjectDemo from "./ProjectDemo";

export default function ProjectChapter({ project, index }) {
  const isEven = index % 2 === 1;

  // Curated prominent visual metrics per project
  const visualStats = {
    "healthcare-kg-rag": [
      { label: "CMS DATASET", value: "419K+", note: "Inspections Mapped", color: "#FFAA33" },
      { label: "VECTOR SIMILARITY", value: "0.942", note: "Cosine Score", color: "#00F5D4" },
      { label: "LINKED ENTITIES", value: "14,850", note: "Facilities Graph", color: "#FFAA33" }
    ],
    "consumer-dispute-model": [
      { label: "CFPB REPOSITORY", value: "87,254", note: "Dispute Cases", color: "#00F5D4" },
      { label: "CLASSIFIER MODEL", value: "ROC-AUC", note: "K-Fold Validated", color: "#FFAA33" },
      { label: "RISK MITIGATION", value: "Proactive", note: "High-Risk Alerting", color: "#00F5D4" }
    ],
    "career-path-classification": [
      { label: "COHORT VOLUME", value: "Multi-Cohort", note: "Profile Taxonomies", color: "#FFAA33" },
      { label: "TRANSITION PEAK", value: "78%", note: "Trajectory Probability", color: "#00F5D4" },
      { label: "SKILL BRIDGES", value: "12+", note: "Technical Adjacencies", color: "#FFAA33" }
    ]
  };

  const stats = visualStats[project.id] || [
    { label: "VOLUME", value: project.scale.split(" ")[0], note: "Processed", color: "var(--accent)" },
    { label: "BENCHMARK", value: "Verified", note: "Production-Grade", color: "var(--system)" }
  ];

  return (
    <article
      id={`project-${project.id}`}
      aria-label={project.title}
      style={{
        paddingTop: "clamp(3rem, 5vw, 4.5rem)",
        paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
        borderBottom: "1px solid var(--line)",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Compact Eyebrow & Domain Stamp */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1.5rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.76rem",
                color: "var(--accent)",
                padding: "2px 8px",
                backgroundColor: "var(--bg-subtle)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xs)"
              }}
            >
              {project.eyebrow}
            </span>
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
              {project.category}
            </span>
          </div>

          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)" }}>
            SCALE: {project.scale}
          </span>
        </div>

        {/* Dynamic Asymmetric Grid: 35% Copy & Key Stats / 65% Interactive Visual Studio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isEven ? "1fr 1.5fr" : "1.5fr 1fr",
            gap: "clamp(1.5rem, 3.5vw, 2.5rem)",
            alignItems: "start"
          }}
          className="project-grid"
        >
          {/* Narrative & Visual Metric Callout Column */}
          <div style={{ order: isEven ? 2 : 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
                marginBottom: "0.85rem",
                color: "var(--text)"
              }}
            >
              {project.title}
            </h3>

            {/* Concise 1-Sentence High-Impact Positioning (Radically Reduced Text) */}
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem"
              }}
            >
              {project.solution}
            </p>

            {/* High-Impact Visual Metric Scorecard */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                marginBottom: "1.5rem"
              }}
            >
              {stats.map((st, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-xs)",
                    padding: "0.75rem 0.65rem",
                    textAlign: "center"
                  }}
                >
                  <span className="mono" style={{ fontSize: "0.62rem", color: "var(--muted)", display: "block" }}>
                    {st.label}
                  </span>
                  <strong
                    className="mono"
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                      color: st.color,
                      display: "block",
                      marginTop: "2px",
                      lineHeight: 1.15
                    }}
                  >
                    {st.value}
                  </strong>
                  <span className="mono" style={{ fontSize: "0.65rem", color: "var(--muted)", display: "block", marginTop: "2px" }}>
                    {st.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="mono"
                  style={{
                    fontSize: "0.7rem",
                    padding: "2px 7px",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-xs)",
                    color: "var(--text)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Maximized Interactive Visual Laboratory Column */}
          <div style={{ order: isEven ? 1 : 2 }}>
            <ProjectDemo project={project} />

            {/* Pipeline Stage Architecture Ribbon */}
            <div
              style={{
                marginTop: "1rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xs)",
                padding: "0.75rem 1rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
                  {project.architecture.label}
                </span>
                <span className="mono" style={{ fontSize: "0.68rem", color: "var(--system)" }}>
                  {project.architecture.stages.length} PIPELINE STEPS
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${project.architecture.stages.length}, 1fr)`,
                  gap: "4px"
                }}
              >
                {project.architecture.stages.map((st, sIdx) => (
                  <div
                    key={st.id}
                    style={{
                      padding: "0.4rem 0.5rem",
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-xs)",
                      textAlign: "center"
                    }}
                  >
                    <span className="mono" style={{ fontSize: "0.62rem", color: "var(--accent)", display: "block" }}>
                      0{sIdx + 1}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        display: "block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {st.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.project-grid) {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>
    </article>
  );
}
