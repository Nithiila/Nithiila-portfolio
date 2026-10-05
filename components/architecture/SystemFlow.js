"use client";

import { useEffect, useState } from "react";

export default function SystemFlow({
  stages,
  activeStageIndex,
  onStageChange,
  className = ""
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    let timer;
    let progressTimer;

    if (isPlaying) {
      setProgressPct(0);
      const stepDuration = 3600;
      const interval = 50;

      progressTimer = setInterval(() => {
        setProgressPct((prev) => Math.min(100, prev + (interval / stepDuration) * 100));
      }, interval);

      timer = setInterval(() => {
        onStageChange((prev) => (prev + 1) % stages.length);
        setProgressPct(0);
      }, stepDuration);
    } else {
      setProgressPct(0);
    }

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [isPlaying, stages.length, onStageChange, activeStageIndex]);

  const handlePrev = () => {
    setIsPlaying(false);
    onStageChange((prev) => (prev - 1 + stages.length) % stages.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    onStageChange((prev) => (prev + 1) % stages.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={className}
      role="region"
      aria-label="System Flow Controller"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        padding: "1rem 1.25rem",
        backgroundColor: "var(--bg-subtle)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-xs)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Top Controller Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        {/* Live Stage Status Announcement */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              backgroundColor: isPlaying ? "var(--accent)" : "var(--system)",
              boxShadow: isPlaying ? "0 0 10px var(--accent)" : "0 0 6px var(--system)",
              animation: isPlaying ? "signalBlink 1s infinite" : "none"
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
              STAGE 0{activeStageIndex + 1} OF 0{stages.length} // {isPlaying ? "AUTOPLAYING" : "MANUAL INSPECTION"}
            </span>
            <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text)" }}>
              {stages[activeStageIndex].title}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            aria-label="Previous pipeline stage"
            onClick={handlePrev}
            style={{
              padding: "0.45rem 0.85rem",
              backgroundColor: "var(--bg)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              color: "var(--text)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              cursor: "pointer"
            }}
          >
            ← PREV
          </button>

          <button
            type="button"
            aria-label={isPlaying ? "Pause system walkthrough" : "Play automated system walkthrough"}
            onClick={togglePlay}
            style={{
              padding: "0.45rem 1.1rem",
              backgroundColor: isPlaying ? "var(--accent)" : "var(--bg)",
              color: isPlaying ? "var(--bg)" : "var(--accent)",
              border: "1px solid var(--accent)",
              borderRadius: "var(--radius-xs)",
              fontSize: "0.78rem",
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {isPlaying ? "PAUSE FLOW" : "PLAY SYSTEM FLOW ▶"}
          </button>

          <button
            type="button"
            aria-label="Next pipeline stage"
            onClick={handleNext}
            style={{
              padding: "0.45rem 0.85rem",
              backgroundColor: "var(--bg)",
              border: "1px solid var(--line-bright)",
              borderRadius: "var(--radius-xs)",
              color: "var(--text)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              cursor: "pointer"
            }}
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Progress Telemetry Gauge */}
      {isPlaying && (
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "var(--line)",
            borderRadius: "1px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${progressPct}%`,
              height: "100%",
              backgroundColor: "var(--accent)",
              transition: "width 0.05s linear"
            }}
          />
        </div>
      )}

      {/* Screen Reader Live Telemetry Announcement */}
      <div className="sr-only" aria-live="polite">
        Current active stage: {stages[activeStageIndex].title}. {stages[activeStageIndex].description}
      </div>
    </div>
  );
}
