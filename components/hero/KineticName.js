"use client";

import { useRef, useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function KineticName() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setOffset({
        x: Math.max(-12, Math.min(12, deltaX * 12)),
        y: Math.max(-8, Math.min(8, deltaY * 8))
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        userSelect: "none",
        width: "100%",
        overflow: "visible"
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.85rem, 5.8vw, 5.6rem)",
          fontWeight: 800,
          lineHeight: 0.94,
          letterSpacing: "-0.035em",
          color: "var(--text)",
          margin: 0,
          textTransform: "uppercase",
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap"
          }}
        >
          {profile.firstName}
        </span>
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            marginTop: "0.08em"
          }}
          data-cursor="view"
        >
          {profile.lastName.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className="mirror-letter theme-text"
              data-cursor="view"
            >
              {char}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
