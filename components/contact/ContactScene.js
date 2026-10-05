"use client";

import { useState } from "react";
import ParticleSystem from "@/components/shared/ParticleSystem";
import { profile } from "@/data/profile";

export default function ContactScene() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Direct Communication & Collaboration"
      style={{
        position: "relative",
        paddingTop: "clamp(4.5rem, 8vw, 7rem)",
        paddingBottom: "clamp(4rem, 7vw, 6rem)",
        backgroundColor: "var(--bg)",
        overflow: "hidden"
      }}
    >
      {/* Background Calm, Structured Particle Lattice */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.35,
          pointerEvents: "none"
        }}
      >
        <ParticleSystem density={45} speed={0.25} mode="flow" interactive={true} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Telemetry Stamp */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)"
            }}
          />
          <span className="mono" style={{ color: "var(--accent)", fontSize: "0.78rem", letterSpacing: "0.14em" }}>
            07 // RESOLVED CONCLUSION & CONTACT
          </span>
        </div>

        {/* Oversized Signature Closing Headline */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              textTransform: "uppercase",
              maxWidth: "1100px"
            }}
          >
            <span>Let&apos;s Synthesize</span>
            <span
              style={{
                display: "block",
                marginTop: "0.1em",
                width: "fit-content"
              }}
              data-cursor="clarity"
            >
              {"Actionable Clarity.".split(" ").map((word, wordIdx) => (
                <span
                  key={wordIdx}
                  style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    marginRight: wordIdx === 0 ? "0.26em" : 0
                  }}
                >
                  {word.split("").map((char, charIdx) => (
                    <span
                      key={charIdx}
                      className="mirror-letter"
                      data-cursor="clarity"
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
              color: "var(--muted)",
              maxWidth: "640px",
              marginTop: "1.5rem",
              lineHeight: 1.55
            }}
          >
            Available for Data Analyst, Business Analyst, Data Scientist, and Analytics Engineering roles across enterprise health, retail, and intelligence systems.
          </p>
        </div>

        {/* Direct Channel Action Tiles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem"
          }}
        >
          {/* Email Tile */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-xs)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            data-cursor="view"
          >
            <div>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--accent)", display: "block", marginBottom: "0.5rem" }}>
                PRIMARY INBOX //
              </span>
              <a
                href={`mailto:${profile.contact.email}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  wordBreak: "break-all"
                }}
              >
                {profile.contact.email}
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              style={{
                marginTop: "1.25rem",
                padding: "0.5rem 0.85rem",
                backgroundColor: copied ? "var(--accent)" : "var(--bg)",
                color: copied ? "var(--bg)" : "var(--muted)",
                border: "1px solid var(--line-bright)",
                borderRadius: "var(--radius-xs)",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                alignSelf: "flex-start",
                transition: "all 0.2s ease"
              }}
            >
              {copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL ADDRESS"}
            </button>
          </div>

          {/* Telephone Tile */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-xs)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            data-cursor="view"
          >
            <div>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--system)", display: "block", marginBottom: "0.5rem" }}>
                DIRECT PHONE //
              </span>
              <a
                href={`tel:${profile.contact.phoneRaw}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--text)"
                }}
              >
                {profile.contact.phone}
              </a>
            </div>
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "1.25rem" }}>
              EASTERN TIME (EST)
            </span>
          </div>

          {/* Professional Networks Tile */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-xs)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text)", display: "block", marginBottom: "0.5rem" }}>
                VERIFIED PROFILES //
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="view"
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--accent)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>LinkedIn Profile</span>
                  <span>↗</span>
                </a>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="view"
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--system)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>GitHub Repositories</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "1.25rem" }}>
              ALBANY, NY // MS BUSINESS ANALYTICS
            </span>
          </div>
        </div>

        {/* Closing Telemetry Stamp */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <span className="mono" style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
            © 2026 {profile.name.toUpperCase()} // ALL RIGHTS RESERVED
          </span>
          <span className="mono" style={{ fontSize: "0.75rem", color: "var(--system)" }}>
            [ SYSTEM CALIBRATION: COMPLETE // READY TO DEPLOY ]
          </span>
        </div>
      </div>
    </section>
  );
}
