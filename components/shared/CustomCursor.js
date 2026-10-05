"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState("DEFAULT");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const animFrame = useRef(null);

  useEffect(() => {
    // Disable on touch devices, coarse pointers, or reduced motion
    const touchQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (touchQuery.matches || motionQuery.matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Contextual hover listener
    const onMouseOver = (e) => {
      const targetEl = e.target.closest("[data-cursor], a, button, [role='button'], input, textarea");
      if (!targetEl) {
        setCursorState("DEFAULT");
        return;
      }

      const customType = targetEl.getAttribute("data-cursor");
      if (customType) {
        setCursorState(customType.toUpperCase());
      } else if (targetEl.tagName === "A" || targetEl.tagName === "BUTTON") {
        setCursorState("VIEW");
      }
    };

    document.addEventListener("mouseover", onMouseOver);

    // Smooth physics loop
    const render = () => {
      const ease = 0.18;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [visible]);

  if (isTouch) return null;

  const isExpanded = cursorState !== "DEFAULT";
  const ringSize = isExpanded ? 54 : 32;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease"
      }}
    >
      {/* Precision Center Pin */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: -3,
          left: -3,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: isExpanded ? "var(--accent)" : "var(--text)",
          pointerEvents: "none",
          willChange: "transform",
          transition: "background-color 0.2s ease"
        }}
      />

      {/* Outer Telemetry Reticle */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: -ringSize / 2,
          left: -ringSize / 2,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: "50%",
          border: isExpanded ? "1px solid var(--accent)" : "1px solid rgba(234, 235, 232, 0.35)",
          backgroundColor: isExpanded ? "rgba(217, 119, 54, 0.08)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          willChange: "transform, width, height",
          transition: "width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background-color 0.2s ease"
        }}
      >
        {isExpanded && cursorState !== "VIEW" && (
          <span
            className="mono"
            style={{
              fontSize: "0.55rem",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              userSelect: "none"
            }}
          >
            {cursorState}
          </span>
        )}
      </div>
    </div>
  );
}
