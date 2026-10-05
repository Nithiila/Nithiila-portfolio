"use client";

import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      aria-label="Professional Philosophy & Principles"
      style={{
        paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--line)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--system)"
              }}
            />
            <span className="mono" style={{ color: "var(--system)", fontSize: "0.78rem", letterSpacing: "0.14em" }}>
              06 // PERSPECTIVE & OPERATING PRINCIPLES
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              maxWidth: "850px",
              lineHeight: 1.08
            }}
          >
            How Quantitative Rigor Informs Every Architecture
          </h2>
        </div>

        {/* 3 Core Editorial Statements */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {profile.principles.map((principle, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xs)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span className="mono" style={{ color: "var(--accent)", fontSize: "0.78rem", display: "block", marginBottom: "0.75rem" }}>
                  PRINCIPLE 0{idx + 1}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "var(--text)",
                    lineHeight: 1.2
                  }}
                >
                  {principle.title}
                </h3>

                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {principle.description}
                </p>
              </div>

              <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--line)", paddingTop: "0.75rem" }}>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)" }}>
                  VALIDATED IN PRODUCTION
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
