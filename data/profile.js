export const profile = {
  name: "Nithila Nagamanickam",
  firstName: "Nithila",
  lastName: "Nagamanickam",
  primaryRole: "Data Analyst",
  secondarySpecialization: "Knowledge Graphs, Vector RAG & Predictive Analytics",
  domains: ["Healthcare & Public Health", "Enterprise Retail Intelligence", "Business Systems"],
  location: "Albany, NY",
  marketFocus: "Enterprise Analytics, Healthcare Informatics, Retail Demand Planning",
  contact: {
    phone: "+1 (518) 250-6482",
    phoneRaw: "+15182506482",
    email: "nnithila0606@gmail.com",
    linkedin: "https://www.linkedin.com/in/nithila-n/",
    github: "https://github.com/Nithiila/",
  },
  roles: [
    "Data Analyst",
    "Business Analyst",
    "Data Scientist",
    "Data Engineer",
    "Business System Analyst",
    "ETL Developer",
    "BI Engineer"
  ],
  education: [
    {
      institution: "State University of New York",
      location: "Albany, NY",
      degree: "Master of Science in Business Analytics",
      period: "Aug 2024 – May 2026",
      gpa: "3.6"
    }
  ],
  positioning: "Synthesizing multi-source healthcare and retail telemetry into verified data pipelines, knowledge graphs, and predictive business intelligence.",
  summary: "Data professional with 3+ years of experience across retail and public health, specializing in exploratory analysis, data reconciliation, RAG knowledge graph architectures, and executive BI dashboards.",
  principles: [
    {
      title: "Data Integrity as the Bedrock",
      description: "Analysis is only as valid as its underlying cleansing, validation, and reconciliation. Rigorous schema mapping prevents downstream operational failures."
    },
    {
      title: "Semantic Relationship Mapping",
      description: "Tabular records gain predictive leverage when transformed into knowledge graphs and vector embeddings for contextual discovery."
    },
    {
      title: "Actionable Operational Synthesis",
      description: "Translating millions of transactions and regulatory records into clear, decision-ready Power BI telemetry and executive KPIs."
    }
  ]
};

export const CONTENT_TO_REPLACE = [
  {
    key: "HEADSHOT_PORTRAIT",
    status: "OMITTED_PER_BRIEF",
    note: "No portrait supplied in profile. Master brief dictates abstract role-specific visualization rather than stock imagery."
  },
  {
    key: "PROJECT_REPO_URLS",
    status: "PARTIAL",
    note: "Base GitHub profile provided (https://github.com/Nithiila/). Specific project repositories will point to profile root or designated slugs."
  },
  {
    key: "LIVE_DASHBOARD_URLS",
    status: "SIMULATED",
    note: "NYSDOH and Walmart dashboards are internal proprietary systems. High-fidelity visual simulations built with authentic CMS and CFPB data."
  }
];
