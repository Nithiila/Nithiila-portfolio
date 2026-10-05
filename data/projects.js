export const projects = [
  {
    id: "healthcare-kg-rag",
    slug: "healthcare-facility-knowledge-graph-rag",
    title: "Healthcare Facility Knowledge Graph RAG System",
    eyebrow: "01 / SEMANTIC HEALTHCARE ARCHITECTURE",
    category: "Knowledge Graph • Vector RAG • Public Health",
    problem: "Navigating massive unstructured CMS nursing home health deficiency records presented severe search latency, disconnected facility histories, and lack of contextual relationship discovery across regulatory filings.",
    solution: "Architected a dual-index knowledge graph and vector-based Retrieval-Augmented Generation (RAG) system that transforms multi-table tabular regulatory filings into an interconnected relationship graph with contextual semantic query capabilities.",
    role: "Lead Analytics & Knowledge Graph Developer",
    scale: "419,000+ Records",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Knowledge Graphs", "Vector Search", "RAG Architecture", "CMS Datasets"],
    realResults: [
      "Cleansed, validated, and mapped 419,000+ CMS deficiency records into structured graph nodes.",
      "Engineered vector retrieval pipelines enabling instant contextual semantic search across facility compliance histories.",
      "Mapped facility-to-deficiency relationship topologies for multi-hop regulatory pattern discovery."
    ],
    architecture: {
      type: "PRODUCTION-ALIGNED",
      label: "DATA PIPELINE ARCHITECTURE",
      stages: [
        { id: "ingest", name: "CMS Ingestion", detail: "419k+ raw nursing home deficiency records ingested via SQL/Python" },
        { id: "cleanse", name: "Validation & Cleansing", detail: "Pandas/NumPy deduplication, schema normalization, outlier filtration" },
        { id: "embed", name: "Vector Embedding & KG Mapping", detail: "Entity-relation extraction linking facilities, tags, and severity levels" },
        { id: "rag", name: "Vector Search & Retrieval", detail: "Similarity indexing combined with graph traversal" },
        { id: "query", name: "Contextual Analytics", detail: "Augmented analytical synthesis for regulatory monitoring" }
      ]
    },
    demoMetrics: {
      recordsProcessed: "419,280",
      graphNodes: "14,850 Facilities",
      accuracyImprovement: "Contextual multi-hop retrieval",
      latencyTarget: "Real-time semantic search"
    }
  },
  {
    id: "consumer-dispute-model",
    slug: "consumer-dispute-escalation-model",
    title: "Consumer Dispute Escalation Predictive Model",
    eyebrow: "02 / PREDICTIVE FINANCIAL RISK",
    category: "Predictive Analytics • Logistic Regression • EDA",
    problem: "Financial institutions faced escalating customer complaint resolution costs and regulatory penalties due to delayed detection of high-risk dispute escalations.",
    solution: "Developed an end-to-end predictive modeling pipeline utilizing 87,254 CFPB dispute records. Performed deep statistical EDA, missing-value treatments, and feature engineering to train a predictive Logistic Regression classifier.",
    role: "Data Scientist / Predictive Modeler",
    scale: "87,254 Records",
    technologies: ["Python", "Pandas", "NumPy", "Logistic Regression", "Statistical Modeling", "Feature Engineering", "CFPB Data"],
    realResults: [
      "Conducted exploratory data analysis across 87,254 CFPB dispute cases to isolate critical escalation determinants.",
      "Engineered transactional and narrative features, improving signal-to-noise ratio in high-cardinality financial records.",
      "Delivered a calibrated probability score identifying dispute complaints at imminent risk of regulatory escalation."
    ],
    architecture: {
      type: "PRODUCTION-ALIGNED",
      label: "PREDICTIVE MODELING PIPELINE",
      stages: [
        { id: "cfpb_extract", name: "CFPB Repository", detail: "Ingested 87,254 credit card dispute records" },
        { id: "eda", name: "Statistical EDA", detail: "Missing-value treatment, correlation analysis, hypothesis testing" },
        { id: "features", name: "Feature Engineering", detail: "Temporal delta, issue category encoding, severity weighting" },
        { id: "modeling", name: "Logistic Regression", detail: "Model training, cross-validation, probability calibration" },
        { id: "inference", name: "Escalation Scoring", detail: "Risk-tier stratification for proactive dispute mitigation" }
      ]
    },
    demoMetrics: {
      recordsProcessed: "87,254",
      modelType: "Logistic Regression Classifier",
      focusDomain: "CFPB Credit Card Dispute Escalation",
      validationMethod: "K-fold Cross Validation & ROC-AUC Analysis"
    }
  },
  {
    id: "career-path-classification",
    slug: "career-path-classification-model",
    title: "Career Path Classification & Trajectory Model",
    eyebrow: "03 / STATISTICAL CLASSIFICATION",
    category: "Machine Learning • Statistical Pattern Recognition",
    problem: "Workforce and education analysts lacked structured models to quantify how disparate education credentials, skill adjacencies, and early-career employment milestones correlate with long-term career progression.",
    solution: "Engineered a statistical classification workflow analyzing multi-attribute candidate profiles, academic backgrounds, and employment trajectories to identify systemic mobility vectors.",
    role: "Analytics Researcher & Modeler",
    scale: "Multi-dimensional Profile Cohorts",
    technologies: ["Python", "Pandas", "Statistical Analysis", "Categorical Encoding", "Cohort Segmentation"],
    realResults: [
      "Harmonized heterogeneous candidate profiles, education histories, and skill sets into standardized analytical features.",
      "Conducted multivariate correlation analyses isolating high-impact skill-clustering combinations.",
      "Constructed trajectory classification matrices identifying probabilistic bridges between adjacent technical roles."
    ],
    architecture: {
      type: "CONCEPTUAL ARCHITECTURE",
      label: "COHORT TRAJECTORY PIPELINE",
      stages: [
        { id: "profile_ingest", name: "Candidate Ingest", detail: "Aggregated academic credentials, skill sets, and job histories" },
        { id: "standardize", name: "Taxonomy Normalization", detail: "Mapped cross-industry job titles into standardized analytical taxonomies" },
        { id: "cluster", name: "Skill Clustering", detail: "Co-occurrence frequency matrix computation for skill adjacencies" },
        { id: "classify", name: "Trajectory Classification", detail: "Supervised classification predicting career transition vectors" }
      ]
    },
    demoMetrics: {
      cohortDimensions: "Education • Skills • Tenure • Roles",
      primaryFocus: "Cross-functional transition probabilities",
      evaluation: "Statistical divergence & precision metrics"
    }
  }
];
