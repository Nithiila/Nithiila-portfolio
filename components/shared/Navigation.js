"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Thinking", href: "/#thinking", id: "thinking" },
    { label: "Selected Work", href: "/#work", id: "work" },
    { label: "Capabilities", href: "/#capabilities", id: "capabilities" },
    { label: "About", href: "/#about", id: "about" },
    { label: "Contact", href: "/#contact", id: "contact" }
  ];

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 90,
        transition: "background 0.3s ease, border-color 0.3s ease",
        backgroundColor: scrolled ? "rgba(14, 16, 19, 0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "var(--header-height)",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem"
        }}
      >
        {/* Brand / Name */}
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            textDecoration: "none"
          }}
          aria-label="Home - Nithila Nagamanickam"
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              textTransform: "uppercase"
            }}
          >
            {profile.name}
          </span>
          <span
            className="mono"
            style={{
              fontSize: "0.72rem",
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            {profile.primaryRole} • Albany, NY
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: "none",
            gap: "2rem",
            alignItems: "center"
          }}
          className="desktop-nav"
        >
          {navItems.map((item, idx) => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--muted)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "0.4rem 0.2rem",
                position: "relative",
                transition: "color var(--transition-fast)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <span className="mono" style={{ color: "var(--accent)", marginRight: "6px", fontSize: "0.75rem" }}>
                0{idx + 1}
              </span>
              {item.label}
            </Link>
          ))}

          {/* Direct Contact Action */}
          <a
            href={`mailto:${profile.contact.email}`}
            style={{
              padding: "0.45rem 1rem",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              fontSize: "0.8rem",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: "var(--radius-xs)",
              transition: "all var(--transition-fast)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            Initiate Query
          </a>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-nav-toggle"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            gap: "5px",
            border: "1px solid var(--line-bright)",
            borderRadius: "var(--radius-xs)",
            backgroundColor: "var(--bg-subtle)"
          }}
        >
          <span
            style={{
              width: "18px",
              height: "1.5px",
              backgroundColor: "var(--text)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none"
            }}
          />
          <span
            style={{
              width: "18px",
              height: "1.5px",
              backgroundColor: "var(--text)",
              transition: "opacity 0.2s ease",
              opacity: mobileOpen ? 0 : 1
            }}
          />
          <span
            style={{
              width: "18px",
              height: "1.5px",
              backgroundColor: "var(--text)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none"
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            width: "100%",
            height: "calc(100vh - var(--header-height))",
            backgroundColor: "rgba(14, 16, 19, 0.98)",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderTop: "1px solid var(--line)",
            zIndex: 89
          }}
        >
          {navItems.map((item, idx) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid var(--line)"
              }}
            >
              <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>
                0{idx + 1}
              </span>
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.contact.email}`}
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "1rem",
              padding: "0.85rem",
              textAlign: "center",
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              borderRadius: "var(--radius-xs)"
            }}
          >
            Initiate Query • {profile.contact.email}
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(.mobile-nav-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
