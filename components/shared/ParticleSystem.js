"use client";

import { useEffect, useRef } from "react";
import { roleTheme } from "@/lib/roleThemes";

export default function ParticleSystem({
  density = 65,
  speed = 0.5,
  mode = "free", // "free" | "flow" | "structured"
  interactive = true,
  className = "",
  style = {}
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive density: reduce on smaller screens
    const isMobile = width < 768;
    const count = isMobile ? Math.floor(density * 0.5) : density;

    const colors = [
      roleTheme.palette.muted,
      roleTheme.palette.accent,
      roleTheme.palette.system
    ];

    // Initialize particles representing data records & relational vectors
    const particles = Array.from({ length: count }, () => {
      const colorIndex = Math.random() < 0.6 ? 0 : Math.random() < 0.5 ? 1 : 2;
      const baseVx = (Math.random() - 0.5) * speed * (mode === "flow" ? 0.35 : 1);
      const baseVy = mode === "flow" ? (Math.random() * 0.8 + 0.2) * speed : (Math.random() - 0.5) * speed;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        radius: Math.random() * 1.6 + 1.2,
        color: colors[colorIndex],
        alpha: Math.random() * 0.45 + 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.012,
        pulseVal: Math.random() * Math.PI,
        mass: Math.random() * 0.4 + 0.8
      };
    });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    let lastMousePos = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Active when cursor is within or near the canvas boundary
      const margin = 120;
      if (
        x >= -margin &&
        x <= rect.width + margin &&
        y >= -margin &&
        y <= rect.height + margin
      ) {
        const vx = e.clientX - (lastMousePos.x || e.clientX);
        const vy = e.clientY - (lastMousePos.y || e.clientY);
        lastMousePos = { x: e.clientX, y: e.clientY };

        mouseRef.current = {
          x,
          y,
          vx: Math.max(-25, Math.min(25, vx)),
          vy: Math.max(-25, Math.min(25, vy)),
          active: true
        };
      } else {
        mouseRef.current.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let isTabVisible = true;
    const handleVisibility = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const connectionDist = isMobile ? 75 : roleTheme.particles.connectionDistance || 110;
    const mouseRadius = isMobile ? 120 : (roleTheme.particles.mouseRadius || 130) * 1.4; // Generous interactive reach (~180px)

    const render = () => {
      if (!isTabVisible) {
        animRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw relational edges between nearby particles (Knowledge Graph links)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const edgeAlpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 142, 148, ${edgeAlpha})`; // System teal relational vector
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles with cursor physics
      particles.forEach((p) => {
        let drawRadius = p.radius;
        let drawAlpha = p.alpha;

        // Pointer influence & repulsion / vector linking
        if (mouseRef.current.active) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mdist = Math.hypot(mdx, mdy);

          if (mdist < mouseRadius && mdist > 0.001) {
            const force = (1 - mdist / mouseRadius);
            const power = force * force;
            const angle = Math.atan2(mdy, mdx);

            // Smooth repulsion push
            const push = (power * 3.8) / p.mass;
            p.vx += Math.cos(angle) * push;
            p.vy += Math.sin(angle) * push;

            // Follow cursor movement wave (drag impulse)
            p.vx += mouseRef.current.vx * 0.07 * force;
            p.vy += mouseRef.current.vy * 0.07 * force;

            // Connect telemetry line from cursor to nearby particles
            if (mdist < mouseRadius * 0.85) {
              const mouseLinkAlpha = (1 - mdist / (mouseRadius * 0.85)) * 0.35;
              ctx.beginPath();
              ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
              ctx.lineTo(p.x, p.y);
              ctx.strokeStyle = `rgba(217, 119, 54, ${mouseLinkAlpha})`; // Amber pointer telemetry link
              ctx.lineWidth = 1;
              ctx.stroke();
            }

            // Excite particle near cursor (glow / expand slightly)
            drawRadius = p.radius * (1 + power * 0.8);
            drawAlpha = Math.min(1.0, p.alpha + power * 0.5);
          }
        }

        // Fluid friction towards base drift
        p.vx = p.vx * 0.93 + p.baseVx * 0.07;
        p.vy = p.vy * 0.93 + p.baseVy * 0.07;

        // Motion update
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries with padding
        const pad = 25;
        if (p.x < -pad) p.x = width + pad;
        if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        if (p.y > height + pad) p.y = -pad;

        // Subtle alpha pulsation
        p.pulseVal += p.pulseSpeed;
        const currentAlpha = drawAlpha + Math.sin(p.pulseVal) * 0.12;

        ctx.beginPath();
        ctx.arc(p.x, p.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.12, Math.min(0.95, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [density, speed, mode, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: interactive ? "auto" : "none",
        ...style
      }}
    />
  );
}
