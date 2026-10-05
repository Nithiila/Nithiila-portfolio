import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Terms of Use | ${profile.name}`,
  description: `Terms of use governing access to the digital portfolio and work of ${profile.name}.`
};

export default function TermsPage() {
  return (
    <main className="container" style={{ paddingTop: "calc(var(--header-height) + 3rem)", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link
          href="/"
          className="mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.8rem",
            color: "var(--accent)",
            marginBottom: "2rem",
            textTransform: "uppercase"
          }}
        >
          ← Return to Portfolio
        </Link>

        <span className="mono" style={{ color: "var(--system)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
          [ LEGAL & PROFESSIONAL BOUNDARIES ]
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            margin: "0.75rem 0 2rem",
            color: "var(--text)"
          }}
        >
          Terms of Use
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text)" }}>
          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              1. Intellectual Property & Attribution
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              All original visual compositions, interactive simulations, and case studies showcased on this site are the professional property of {profile.name}, unless otherwise attributed to public regulatory archives (such as CMS or CFPB datasets) or past institutional collaborations.
            </p>
          </section>

          <section className="hairline-top" style={{ paddingTop: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              2. Conceptual & Portfolio Demonstrations
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Certain project architectures and interactive visualizations are demonstrated using public datasets (e.g. CMS health inspection files and CFPB dispute records) or synthesized conceptual models to illustrate analytical methodologies without exposing confidential enterprise infrastructure.
            </p>
          </section>

          <section className="hairline-top" style={{ paddingTop: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              3. Permitted Usage
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              You are welcome to view, evaluate, and reference these materials for hiring, consulting, or technical evaluation purposes. Reproduction or scraping for commercial template replication without written permission is prohibited.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
