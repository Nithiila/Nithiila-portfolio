import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Privacy Policy | ${profile.name}`,
  description: `Privacy policy for ${profile.name}'s digital portfolio. Direct, transparent disclosure with zero third-party trackers.`
};

export default function PrivacyPage() {
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
          [ COMPLIANCE & TELEMETRY DISCLOSURE ]
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            margin: "0.75rem 0 2rem",
            color: "var(--text)"
          }}
        >
          Privacy Policy
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text)" }}>
          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              1. Zero Surveillance & No Third-Party Trackers
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              This portfolio is an independent digital showcase of professional work by {profile.name}. It does not deploy third-party advertising trackers, cross-site telemetry, behavioral profiling, or tracking cookies.
            </p>
          </section>

          <section className="hairline-top" style={{ paddingTop: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              2. Hosting Infrastructure
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              The site is hosted on Vercel. Standard, temporary edge server logs (such as request timestamps and IP headers) may be processed strictly for network security, DDoS prevention, and service delivery in accordance with Vercel&apos;s infrastructure standards.
            </p>
          </section>

          <section className="hairline-top" style={{ paddingTop: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              3. Direct Contact Communication
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              When you initiate an email inquiry using the provided mailto links (<a href={`mailto:${profile.contact.email}`} style={{ color: "var(--accent)", textDecoration: "underline" }}>{profile.contact.email}</a>), the message and details you transmit are used solely for direct communication and professional correspondence. Your details are never monetized, distributed, or provided to third parties.
            </p>
          </section>

          <section className="hairline-top" style={{ paddingTop: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              4. Inquiries
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              For questions regarding this policy or data inquiries, reach out directly to {profile.name} at{" "}
              <a href={`mailto:${profile.contact.email}`} style={{ color: "var(--accent)" }}>
                {profile.contact.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
