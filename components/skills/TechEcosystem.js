"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";

export default function TechEcosystem() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const activeCategoryData = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <section
      id="capabilities"
      aria-label="Capabilities and Technical Ecosystem"
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
              04 // CAPABILITY ECOSYSTEM & DOMAINS
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              maxWidth: "820px",
              lineHeight: 1.08
            }}
          >
            Structured Competencies Across Data, Cloud & Systems
          </h2>

          <p style={{ color: "var(--muted)", maxWidth: "680px", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
            Real-world capabilities developed across enterprise retail telemetry at Walmart and public health data systems at the New York State Department of Health.
          </p>
        </div>

        {/* 5-Domain Category Selector */}
        <div
          role="tablist"
          aria-label="Skill domains"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            marginBottom: "2rem",
            overflow: "hidden"
          }}
        >
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "1rem 1.2rem",
                  backgroundColor: isActive ? "var(--bg-card)" : "var(--bg)",
                  border: "none",
                  borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease"
                }}
              >
                <span className="mono" style={{ fontSize: "0.7rem", color: isActive ? "var(--accent)" : "var(--muted)", display: "block" }}>
                  DOMAIN 0{idx + 1}
                </span>
                <span style={{ fontSize: "0.92rem", fontWeight: 700, color: isActive ? "var(--text)" : "var(--muted)", display: "block", marginTop: "0.2rem" }}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Skills Topology */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xs)",
            padding: "clamp(1.5rem, 3.5vw, 2.5rem)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)", letterSpacing: "0.08em" }}>
                DOMAIN OVERVIEW // {activeCategoryData.id.toUpperCase()}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, marginTop: "0.25rem", color: "var(--text)" }}>
                {activeCategoryData.label}
              </h3>
            </div>
            <p className="mono" style={{ fontSize: "0.82rem", color: "var(--muted)", maxWidth: "450px" }}>
              {activeCategoryData.description}
            </p>
          </div>

          {/* Relationship Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem"
            }}
          >
            {activeCategoryData.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-xs)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)" }}>
                  {skill.name}
                </span>
                <span
                  className="mono"
                  style={{
                    fontSize: "0.7rem",
                    padding: "2px 6px",
                    backgroundColor: "var(--bg-subtle)",
                    border: "1px solid var(--line-bright)",
                    borderRadius: "var(--radius-xs)",
                    color: skill.level === "core" ? "var(--accent)" : "var(--system)"
                  }}
                >
                  {skill.level.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
