"use client";

import Link from "next/link";
import KineticName from "./KineticName";
import ParticleSystem from "@/components/shared/ParticleSystem";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Identity and Core Telemetry"
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "var(--bg)",
        overflow: "hidden",
        paddingTop: "calc(var(--header-height) + 2rem)",
        paddingBottom: "2.5rem"
      }}
    >
      {/* Background Interactive Particle Flux */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.8,
          pointerEvents: "none"
        }}
      >
        <ParticleSystem density={75} speed={0.35} interactive={true} />
      </div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1180px"
        }}
      >
        {/* Top Telemetry Stamp */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "1.25rem",
            width: "fit-content"
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)"
            }}
          />
          <span
            className="mono"
            style={{
              fontSize: "0.8rem",
              color: "var(--system)",
              letterSpacing: "0.14em",
              textTransform: "uppercase"
            }}
          >
            // DATA ANALYST & ANALYTICS SPECIALIST
          </span>
        </div>

        {/* Kinetic Full Name (Signature Typographic Object) */}
        <div style={{ marginBottom: "1.5rem" }}>
          <KineticName />
        </div>

        {/* Concise Positioning Sentence */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.15rem, 2.2vw, 1.55rem)",
            lineHeight: 1.55,
            color: "var(--text)",
            maxWidth: "780px",
            marginBottom: "2rem"
          }}
        >
          {profile.positioning}
        </p>

        {/* Factual Signal Pill Array */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "2.5rem"
          }}
        >
          <div
            style={{
              padding: "0.45rem 0.95rem",
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span className="mono" style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 700 }}>
              419,000+
            </span>
            <span className="mono" style={{ color: "var(--muted)", fontSize: "0.76rem" }}>
              CMS Records Mapped
            </span>
          </div>

          <div
            style={{
              padding: "0.45rem 0.95rem",
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span className="mono" style={{ color: "var(--system)", fontSize: "0.82rem", fontWeight: 700 }}>
              87,254
            </span>
            <span className="mono" style={{ color: "var(--muted)", fontSize: "0.76rem" }}>
              CFPB Predictions
            </span>
          </div>

          <div
            style={{
              padding: "0.45rem 0.95rem",
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span className="mono" style={{ color: "var(--text)", fontSize: "0.82rem", fontWeight: 700 }}>
              AWS • Azure
            </span>
            <span className="mono" style={{ color: "var(--muted)", fontSize: "0.76rem" }}>
              Cloud Architectures
            </span>
          </div>
        </div>

        {/* Hero Interactive Actions */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1.25rem"
          }}
        >
          <a
            href="#transition-conduit"
            data-cursor="explore"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "0.95rem 1.8rem",
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "0.88rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              borderRadius: "var(--radius-xs)",
              transition: "background-color var(--transition-fast)"
            }}
          >
            <span>Explore How I Think</span>
            <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>↓</span>
          </a>

          <a
            href={`mailto:${profile.contact.email}`}
            data-cursor="view"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.95rem 1.6rem",
              border: "1px solid var(--line-bright)",
              color: "var(--text)",
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: "var(--radius-xs)",
              transition: "border-color var(--transition-fast), color var(--transition-fast)"
            }}
          >
            <span>Initiate Query</span>
            <span style={{ color: "var(--accent)" }}>↗</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Telemetry Bar */}
      <div className="container" style={{ position: "relative", zIndex: 2, marginTop: "2rem" }}>
        <div
          style={{
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div className="mono" style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
            LOC: ALBANY, NY // MS BUSINESS ANALYTICS (SUNY ALBANY, GPA 3.6)
          </div>
          <div className="mono" style={{ fontSize: "0.75rem", color: "var(--system)" }}>
            [ STATUS: CALIBRATED // SCROLL TO COMMENCE FLOW ]
          </div>
        </div>
      </div>
    </section>
  );
}
