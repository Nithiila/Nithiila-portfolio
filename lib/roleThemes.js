export const roleTheme = {
  role: "Data Analyst & Analytics Specialist",
  domain: "Healthcare Informatics, Enterprise Retail & Knowledge Graphs",
  palette: {
    bg: "#0E1013",
    bgSubtle: "#14171D",
    bgCard: "#12151B",
    text: "#EAEBE8",
    muted: "#7E848D",
    accent: "#D97736", // Warm amber / discovery signal
    accentHover: "#E68949",
    system: "#388E94", // Clinical teal / graph vector
    systemGlow: "rgba(56, 142, 148, 0.15)",
    line: "#1E232B",
    lineBright: "#2D3440"
  },
  metaphor: {
    name: "The Multidimensional Signal Pipeline",
    summary: "Unstructured Telemetry → Relational Graph → Predictive Clarity",
    stages: [
      { id: "stream", label: "Raw Telemetry", count: "419K+ Records", detail: "Unstructured event logs, regulatory filings, and transaction data." },
      { id: "cleanse", label: "Schema Reconciliation", count: "99.9% Accuracy", detail: "Deduplication, mapping, and data quality normalization." },
      { id: "graph", label: "Knowledge Graph & Vectors", count: "14.8K Entities", detail: "Semantic relationships, vector embeddings, and contextual links." },
      { id: "insight", label: "Executive Synthesis", count: "Decision KPIs", detail: "Predictive escalation modeling and interactive BI dashboards." }
    ]
  },
  particles: {
    meaning: "Unstructured records and signal packets",
    countDesktop: 85,
    countMobile: 35,
    speed: 0.6,
    baseColor: "#7E848D",
    activeColor: "#D97736",
    vectorColor: "#388E94",
    connectionDistance: 110,
    mouseRadius: 130
  },
  typography: {
    display: "var(--font-display)",
    body: "var(--font-body)",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  },
  motion: {
    easeEditorial: [0.16, 1, 0.3, 1],
    easePhysical: [0.25, 0.1, 0.25, 1],
    durations: {
      micro: 0.2,
      component: 0.45,
      section: 0.85,
      cinematic: 1.2
    }
  }
};
