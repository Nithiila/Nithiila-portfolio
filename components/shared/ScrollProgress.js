"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const pct = Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100);
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
        zIndex: 100,
        pointerEvents: "none",
        backgroundColor: "transparent"
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "var(--accent)",
          transition: "width 0.1s linear"
        }}
      />
    </div>
  );
}
