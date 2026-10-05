"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Quick, purposeful initialization sequence without artificial long waits
    const timer1 = setTimeout(() => setStage(1), 180);
    const timer2 = setTimeout(() => setStage(2), 380);
    const timer3 = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 620);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <aside
      aria-label="Loading portfolio experience"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: stage === 2 ? 0 : 1,
        transform: stage === 2 ? "scale(1.02)" : "scale(1)"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.2rem",
          maxWidth: "480px",
          padding: "1.5rem",
          textAlign: "center"
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: "0.75rem",
            color: "var(--accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}
        >
          [ TELEMETRY PIPELINE // INITIALIZING ]
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: 0
          }}
        >
          {profile.name}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.78rem",
            color: "var(--muted)"
          }}
          className="mono"
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: stage >= 1 ? "var(--system)" : "var(--muted)",
              transition: "background-color 0.2s ease"
            }}
          />
          <span>{stage === 0 ? "Loading relational schema..." : "Calibrating graph signals..."}</span>
        </div>
      </div>
    </aside>
  );
}
