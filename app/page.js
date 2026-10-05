"use client";

import Link from "next/link";
import Hero from "@/components/hero/Hero";
import SignatureTransition from "@/components/hero/SignatureTransition";
import ArchitectureSection from "@/components/architecture/ArchitectureSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TechEcosystem from "@/components/skills/TechEcosystem";
import Timeline from "@/components/experience/Timeline";
import About from "@/components/about/About";
import ContactScene from "@/components/contact/ContactScene";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        overflow: "hidden"
      }}
    >
      {/* 01: WHO I AM (Hero Identity & Core Telemetry) */}
      <Hero />

      {/* SIGNATURE TRANSFORMATION (Abstract Metaphor → Structured Intelligence) */}
      <SignatureTransition />

      {/* 02: HOW I THINK (System Architecture & Lineage Topology) */}
      <ArchitectureSection />

      {/* 03: WHAT I BUILD (Selected Work & Interactive Case Studies) */}
      <ProjectsSection />

      {/* 04: WHAT I DO (Capability Ecosystem & Verified Domains) */}
      <TechEcosystem />

      {/* 05: EMPIRICAL RECORD (NYSDOH, Walmart & Academic Milestones) */}
      <Timeline />

      {/* 06: OPERATING PRINCIPLES (Quantitative Rigor & Philosophy) */}
      <About />

      {/* 07: LET'S WORK TOGETHER (Resolved Final State & Direct Inquiries) */}
      <ContactScene />

      {/* Footer & Compliance Bar */}
      <footer
        style={{
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          backgroundColor: "var(--bg-subtle)",
          borderTop: "1px solid var(--line)"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.25rem"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "0.95rem", color: "var(--text)", fontWeight: 700, fontFamily: "var(--font-display)" }}>
              {profile.name}
            </span>
            <span className="mono" style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
              {profile.primaryRole} • {profile.location} • {profile.contact.email}
            </span>
          </div>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/privacy" style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              Terms of Use
            </Link>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", color: "var(--accent)" }}
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", color: "var(--system)" }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
