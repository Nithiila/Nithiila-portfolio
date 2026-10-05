"use client";

import ProjectChapter from "./ProjectChapter";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="work" aria-label="Selected Production Projects">
      {/* Section Header */}
      <div
        style={{
          paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
          paddingBottom: "2rem",
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--line)"
        }}
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)"
              }}
            />
            <span className="mono" style={{ color: "var(--accent)", fontSize: "0.78rem", letterSpacing: "0.14em" }}>
              03 // SELECTED WORK: EMPIRICAL CASE STUDIES
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
            Data Solutions Tested on Hundreds of Thousands of Records
          </h2>

          <p style={{ color: "var(--muted)", maxWidth: "680px", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
            From 419,000+ CMS health deficiency events to 87,254 consumer financial complaints—engineered for reliability, statistical validity, and executive action.
          </p>
        </div>
      </div>

      {/* Sequential Project Visual Chapters */}
      <div>
        {projects.map((project, idx) => (
          <ProjectChapter key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
