export const skillCategories = [
  {
    id: "data-analytics",
    label: "Data Analytics & Engineering",
    description: "Core statistical, cleansing, and data pipeline capabilities",
    skills: [
      { name: "SQL", level: "core", category: "data-analytics" },
      { name: "Python", level: "core", category: "data-analytics" },
      { name: "Pandas & NumPy", level: "core", category: "data-analytics" },
      { name: "Exploratory Data Analysis (EDA)", level: "advanced", category: "data-analytics" },
      { name: "Statistical Modeling", level: "advanced", category: "data-analytics" },
      { name: "Data Cleansing & Validation", level: "core", category: "data-analytics" },
      { name: "Data Mapping & Reconciliation", level: "core", category: "data-analytics" },
      { name: "Data Quality Assurance", level: "core", category: "data-analytics" }
    ]
  },
  {
    id: "bi-reporting",
    label: "BI & Executive Reporting",
    description: "Translating data telemetry into actionable visual decision systems",
    skills: [
      { name: "Power BI", level: "core", category: "bi-reporting" },
      { name: "Executive KPI Dashboards", level: "core", category: "bi-reporting" },
      { name: "Operational Monitoring Reports", level: "advanced", category: "bi-reporting" },
      { name: "Sales & Inventory Analytics", level: "advanced", category: "bi-reporting" },
      { name: "Customer Behavior Analysis", level: "advanced", category: "bi-reporting" },
      { name: "Predictive Forecasting Reports", level: "advanced", category: "bi-reporting" }
    ]
  },
  {
    id: "ai-knowledge",
    label: "AI, RAG & Knowledge Graphs",
    description: "Semantic modeling, vector discovery, and generative-augmented workflows",
    skills: [
      { name: "Knowledge Graphs", level: "advanced", category: "ai-knowledge" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "advanced", category: "ai-knowledge" },
      { name: "Vector Search & Embeddings", level: "advanced", category: "ai-knowledge" },
      { name: "Generative AI Integration", level: "advanced", category: "ai-knowledge" },
      { name: "AI-Assisted Analysis & Doc", level: "core", category: "ai-knowledge" }
    ]
  },
  {
    id: "cloud-databases",
    label: "Cloud & Databases",
    description: "Enterprise data storage, query engines, and cloud analytical environments",
    skills: [
      { name: "Microsoft Azure", level: "core", category: "cloud-databases" },
      { name: "AWS Cloud", level: "core", category: "cloud-databases" },
      { name: "PostgreSQL", level: "core", category: "cloud-databases" },
      { name: "Oracle Database", level: "core", category: "cloud-databases" },
      { name: "REST APIs & Data Flows", level: "core", category: "cloud-databases" }
    ]
  },
  {
    id: "business-systems",
    label: "Business & Requirements Engineering",
    description: "Bridging technical architectures with stakeholder objectives and agile execution",
    skills: [
      { name: "BRD & FRD Authoring", level: "core", category: "business-systems" },
      { name: "User Stories & Acceptance Criteria", level: "core", category: "business-systems" },
      { name: "Process Flow & Integration Workflows", level: "core", category: "business-systems" },
      { name: "Gap, Risk & Impact Analysis", level: "advanced", category: "business-systems" },
      { name: "UAT & Production Validation", level: "core", category: "business-systems" },
      { name: "Agile / Scrum Methodologies", level: "core", category: "business-systems" }
    ]
  }
];

export const allSkillsList = skillCategories.flatMap(c => c.skills.map(s => s.name));
