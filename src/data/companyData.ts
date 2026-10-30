export interface SubService {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  overview: string;
  subServices: SubService[];
  capabilities: string[];
  processStages: { step: string; title: string; description: string }[];
  technologies: string[];
  visualType: 'web' | 'mobile' | 'ai' | 'data' | 'design' | 'qa' | 'cloud' | 'security' | 'crm' | 'marketing' | 'software' | 'maintenance';
  id?: string;
  fullDesc?: string;
  deliverables?: string[];
  orbitAngle?: number;
}

export type ServiceItem = ServiceDetail;

export interface WorkProject {
  id: string;
  name: string;
  tagline: string;
  category: 'Web Application' | 'UI/UX Design' | 'Digital Solutions' | 'Enterprise Software';
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  highlight: string;
  clientType: string;
  metrics: string[];
  metricsOrHighlight?: string;
  signalCoordinate?: { x: number; y: number };
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeframe?: string;
}

export interface TechCategory {
  category: 'Frontend' | 'Backend' | 'Design' | 'Database' | 'DevOps & Infrastructure' | 'Security & Authentication';
  description: string;
  items: {
    name: string;
    description: string;
    role: string;
  }[];
}

export const COMPANY_INFO = {
  name: "Brahmani Information",
  shortName: "BI",
  headline: "WE BUILD DIGITAL EXPERIENCES THAT HELP BUSINESSES MOVE FORWARD.",
  subtext: "We design and develop modern websites and digital experiences that turn ideas into purposeful digital products.",
  description: "Brahmani Information is an emerging IT and digital technology company focused on creating modern, purposeful and scalable digital experiences. We combine thoughtful design, technology and problem-solving to transform ideas into digital solutions.",
  mission: "To engineer reliable, aesthetically refined, and technologically robust digital solutions that empower businesses and elevate user interactions.",
  vision: "To set an enduring standard in digital craftsmanship where design elegance and modern software engineering unite to solve meaningful real-world challenges.",
  established: "2026",
  email: " info@brahmaniinformation.com",
  whatsappNumber: "+919328054690",
  phone: "+91 9328054690",
  inquiryTypes: [
    "Web Application Development",
    "Custom Web Development",
    "Mobile App Development",
    "UI/UX & Product Design",
    "Enterprise Software Architecture",
    "Cloud & Infrastructure Consulting",
    "General Project Discussion"
  ]
};

export const SERVICES_LIST: ServiceDetail[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    shortDesc: "Fast, responsive, and search-optimized websites built for modern business performance.",
    overview: "We engineer high-performance web experiences designed from the ground up to reflect brand identity, drive user engagement, and scale with organizational growth. From bespoke corporate web platforms to complex web applications, our engineering emphasizes semantic HTML, responsive layout architecture, Core Web Vitals optimization, and robust cross-browser reliability.",
    subServices: [
      { title: "Frontend Development", description: "Modular, declarative user interfaces developed with React, modern JavaScript, and Tailwind CSS." },
      { title: "Backend Development", description: "Robust API services, authentication mechanisms, and server infrastructure built on Node.js." },
      { title: "Full-Stack Development", description: "End-to-end web engineering unifying data persistence, API routing, and high-performance client views." },
      { title: "E-commerce Development", description: "Secure, conversion-driven storefronts with streamlined checkout flows and inventory management." },
      { title: "Web Applications", description: "Dynamic browser-based software delivering desktop-caliber interactivity and real-time state management." }
    ],
    capabilities: [
      "Component-Driven Architecture",
      "Responsive Layout Adaptation (Mobile to 4K)",
      "Core Web Vitals & Speed Optimization",
      "Semantic SEO & Accessibility (WCAG AA)",
      "Secure RESTful & GraphQL API Integration",
      "Clean CI/CD Deployment Pipelines"
    ],
    processStages: [
      { step: "01", title: "Information Architecture", description: "Sitemap structuring, user journeys, and content hierarchy specification." },
      { step: "02", title: "UI & Component Prototyping", description: "Responsive grid layouts, design token harmonization, and interactive states." },
      { step: "03", title: "Engineering & Integration", description: "Production code development with clean linting, API wiring, and performance tuning." },
      { step: "04", title: "Auditing & Production Launch", description: "Lighthouse audits, cross-device validation, CDN configuration, and release." }
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Tailwind CSS"],
    visualType: "web"
  },
  {
    slug: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile apps engineered for fluid gestures and touch ergonomics.",
    overview: "We architect mobile applications that combine native operating system capabilities with intuitive user ergonomics. Whether targeting iOS, Android, or unified cross-platform runtimes like Flutter or React Native, our mobile applications ensure smooth frame rates, offline resilience, and secure device integration.",
    subServices: [
      { title: "Android Development", description: "Modern Android applications following Material 3 guidelines and background thread optimization." },
      { title: "iOS Development", description: "Refined iOS applications adhering to Apple Human Interface Guidelines and Swift idioms." },
      { title: "Flutter / React Native", description: "High-efficiency single codebase mobile applications with near-native performance across platforms." },
      { title: "Cross-platform Apps", description: "Synchronized releases across mobile ecosystems with unified business logic and shared assets." }
    ],
    capabilities: [
      "Fluid Touch Ergonomics & 60fps Gestures",
      "Offline Storage & Cache Synchronization",
      "Push Notification & Deep Linking Architecture",
      "Biometric Authentication & Keychain Security",
      "App Store & Google Play Submission Readiness",
      "Battery-Conscious Background Processing"
    ],
    processStages: [
      { step: "01", title: "Mobile UX Mapping", description: "Thumb-zone analysis, screen flows, and navigation architecture." },
      { step: "02", title: "Platform Architecture", description: "State management, local persistence, and API contract definition." },
      { step: "03", title: "Client Development", description: "Native and cross-platform UI development with hardware integrations." },
      { step: "04", title: "Device Matrix Testing", description: "Validation on diverse physical screen sizes, OS revisions, and network conditions." }
    ],
    technologies: ["React Native", "Flutter", "Android", "iOS", "JavaScript"],
    visualType: "mobile"
  },
  {
    slug: "ai-machine-learning",
    number: "03",
    title: "AI & Machine Learning",
    shortDesc: "Intelligent automation, natural language interfaces, and predictive modeling for business workflows.",
    overview: "We build practical, enterprise-grade AI and machine learning solutions that automate manual tasks, extract intelligence from unstructured datasets, and empower decision-makers. We focus on reliable model integration, low-latency API serving, and governance rather than ungrounded speculative concepts.",
    subServices: [
      { title: "AI Solutions", description: "Bespoke intelligent business workflows tailored to specific operational requirements." },
      { title: "Machine Learning", description: "Supervised and unsupervised models for classification, regression, and clustering." },
      { title: "Generative AI", description: "LLM orchestration, prompt engineering, and semantic synthesis pipelines." },
      { title: "AI Chatbots & Assistants", description: "Context-aware conversational agents with deterministic fallback mechanisms." },
      { title: "NLP (Natural Language Processing)", description: "Text classification, entity extraction, sentiment evaluation, and document parsing." },
      { title: "Predictive Analytics", description: "Time-series forecasting and behavioral trend modeling for proactive business operations." },
      { title: "Computer Vision", description: "Automated image classification, object detection, and document OCR extraction." },
      { title: "AI Automation", description: "Autonomous robotic process automation (RPA) powered by intelligent decision nodes." }
    ],
    capabilities: [
      "Retrieval-Augmented Generation (RAG) Systems",
      "Deterministic Prompt Pipelines & Validation",
      "Semantic Search & Vector Database Indexing",
      "Model Inference Optimization & Cost Management",
      "Audit Trails & Hallucination Mitigation",
      "Secure On-Premise & Cloud Model Deployments"
    ],
    processStages: [
      { step: "01", title: "Feasibility Assessment", description: "Evaluating data availability, prediction accuracy targets, and inference latency." },
      { step: "02", title: "Pipeline & Data Prep", description: "Data sanitation, vectorization, and embedding generation." },
      { step: "03", title: "Model Tuning & Wiring", description: "Integration with application workflows, guardrails, and validation checks." },
      { step: "04", title: "Telemetry & Governance", description: "Continuous monitoring for model drift, token expenditure, and output consistency." }
    ],
    technologies: ["Python", "TensorFlow", "Node.js", "MongoDB", "Vector Databases"],
    visualType: "ai"
  },
  {
    slug: "data-analytics",
    number: "04",
    title: "Data & Analytics",
    shortDesc: "Structured data pipelines, business intelligence dashboards, and exploratory data modeling.",
    overview: "We transform fragmented organizational data into unified, actionable business intelligence. Through robust ETL pipelines, high-density visualization dashboards, and resilient data modeling, we empower leadership to identify operational efficiencies and monitor KPIs in real time.",
    subServices: [
      { title: "Data Analytics", description: "Diagnostic and descriptive analysis uncovering operational patterns and customer behaviors." },
      { title: "Business Intelligence", description: "Centralized BI architectures connecting disparate operational tools into unified data models." },
      { title: "Data Visualization", description: "Custom charts, telemetry visualizers, and interactive graphical reporting suites." },
      { title: "Big Data", description: "Distributed data pipelines designed to process high-throughput event streams with zero data loss." },
      { title: "Data Engineering", description: "Automated ETL/ELT pipelines, schema normalization, and relational/document warehousing." },
      { title: "Reporting & Dashboards", description: "Executive KPI command centers with role-based access controls and scheduled digests." }
    ],
    capabilities: [
      "Automated ETL / ELT Pipeline Architecture",
      "Real-Time Telemetry & Event Aggregation",
      "Dimensional Data Modeling & Schema Design",
      "Interactive SVG / Canvas Data Visualizations",
      "Role-Based Dashboard Permissions & Audits",
      "SQL Query Performance Tuning"
    ],
    processStages: [
      { step: "01", title: "Source Auditing", description: "Mapping data producers, schema definitions, and integration interfaces." },
      { step: "02", title: "Warehouse Modeling", description: "Designing staging, transformation, and semantic reporting layers." },
      { step: "03", title: "Dashboard Engineering", description: "Developing responsive visual consoles with parameterized filtering." },
      { step: "04", title: "Validation & Refresh", description: "Reconciling calculated metrics against source-of-truth ledgers." }
    ],
    technologies: ["MongoDB", "Node.js", "SQL", "React", "Chart Engine"],
    visualType: "data"
  },
  {
    slug: "ui-ux-design",
    number: "05",
    title: "UI/UX Design",
    shortDesc: "Human-centered digital interfaces crafted with visual balance, clarity, and ergonomic precision.",
    overview: "We believe aesthetic refinement and ergonomic clarity are foundational to successful software. Our design practice transforms intricate business workflows into intuitive digital interfaces through systematic user research, interactive wireframing, comprehensive design systems, and rigorous accessibility testing.",
    subServices: [
      { title: "UI Design", description: "Modern, high-fidelity visual design balancing brand identity, visual hierarchy, and whitespace." },
      { title: "UX Research", description: "User interviews, persona modeling, competitor analysis, and heuristic evaluations." },
      { title: "Wireframing", description: "Low and mid-fidelity layout schematics mapping user journeys and screen anatomy." },
      { title: "Prototyping", description: "Interactive click-through prototypes simulating real animation curves and state changes." },
      { title: "Design Systems", description: "Atomic component libraries with strict design tokens for typography, color, and spacing." },
      { title: "Figma Architecture", description: "Production-ready Figma files with auto-layout, component variants, and developer handoff specs." }
    ],
    capabilities: [
      "Atomic Design Systems & Reusable Token Repositories",
      "WCAG 2.1 AA Accessibility Standards",
      "User Journey & Interaction Flow Mapping",
      "Micro-interaction & State Feedback Design",
      "Seamless Design-to-Code Developer Handoff",
      "Multi-Viewport Responsive Prototypes"
    ],
    processStages: [
      { step: "01", title: "Research & Journey Framing", description: "Understanding end-user motivations, task paths, and friction points." },
      { step: "02", title: "Wireframing & Anatomy", description: "Rapid structural layout iteration without visual distraction." },
      { step: "03", title: "High-Fidelity Design System", description: "Crafting tokens, components, and polished visual screens in Figma." },
      { step: "04", title: "Interactive Prototyping & Handoff", description: "Validating flows and packaging documentation for engineering." }
    ],
    technologies: ["Figma", "CSS3", "Design Tokens", "HTML5"],
    visualType: "design"
  },
  {
    slug: "qa-software-testing",
    number: "06",
    title: "QA & Software Testing",
    shortDesc: "Comprehensive quality assurance ensuring software reliability, security, and performance stability.",
    overview: "We safeguard software investments by instituting disciplined quality engineering across the development lifecycle. Our testing methodology encompasses automated unit and integration tests, end-to-end regression suites, API contract testing, and rigorous cross-browser verification to prevent regressions before reaching production.",
    subServices: [
      { title: "Manual Testing", description: "Exploratory and edge-case testing validating ergonomic fidelity and edge scenarios." },
      { title: "Automation Testing", description: "Automated regression suites running in CI pipelines for rapid release confidence." },
      { title: "API Testing", description: "Contract validation, payload integrity testing, and HTTP status verification." },
      { title: "Performance Testing", description: "Load testing, latency benchmarking, and concurrency stress testing under load." },
      { title: "Security Testing", description: "Vulnerability scanning, input sanitization auditing, and authentication checks." },
      { title: "Mobile App Testing", description: "Functional validation across varying Android and iOS hardware configurations." },
      { title: "Web Testing", description: "Cross-browser compatibility, responsive viewport fidelity, and accessibility audits." }
    ],
    capabilities: [
      "Continuous Integration Automated Test Suites",
      "End-to-End User Simulation & Regression Runs",
      "RESTful API & Payload Integrity Validation",
      "Network Latency & Memory Leak Profiling",
      "Cross-Browser Rendering & DOM Verification",
      "Structured Bug Tracking & Defect Root-Cause Analysis"
    ],
    processStages: [
      { step: "01", title: "Test Strategy & Matrix", description: "Defining test scopes, critical user paths, and acceptance criteria." },
      { step: "02", title: "Scripting & Automation", description: "Authoring automated regression and contract verification tests." },
      { step: "03", title: "Execution & Defect Logging", description: "Running test matrices across devices and triaging defects." },
      { step: "04", title: "Release Sign-off", description: "Final validation reports, performance benchmarks, and release approval." }
    ],
    technologies: ["JavaScript", "Node.js", "React", "Testing Frameworks"],
    visualType: "qa"
  },
  {
    slug: "cloud-devops",
    number: "07",
    title: "Cloud & DevOps",
    shortDesc: "Scalable cloud infrastructure, automated CI/CD pipelines, and reliable container orchestration.",
    overview: "We architect resilient cloud environments and automated delivery pipelines that enable continuous software shipping with zero downtime. By treating infrastructure as code, configuring containerized runtimes, and implementing proactive server monitoring, we ensure high availability and predictable scaling.",
    subServices: [
      { title: "Cloud Architecture", description: "Cost-optimized, multi-zone cloud infrastructure on leading public cloud providers." },
      { title: "Cloud Migration", description: "Zero-data-loss transition of legacy workloads into modern cloud native environments." },
      { title: "CI/CD Automation", description: "Automated build, test, and release pipelines ensuring reliable continuous delivery." },
      { title: "Docker Containerization", description: "Reproducible container environments guaranteeing parity from local dev to production." },
      { title: "Kubernetes Orchestration", description: "Declarative cluster management with automated scaling, self-healing, and ingress routing." },
      { title: "Server Deployment", description: "Optimized reverse proxies, SSL certificate lifecycle management, and web servers." },
      { title: "Infrastructure Management", description: "Terraform-driven infrastructure provisioning, secret management, and alerting." }
    ],
    capabilities: [
      "Zero-Downtime Blue/Green & Rolling Deployments",
      "Infrastructure as Code (IaC) Architecture",
      "Containerization & Microservices Isolation",
      "Automated Secret & Environment Variable Management",
      "Automated Backup & Disaster Recovery Protocols",
      "Cloud Spend Optimization & Capacity Planning"
    ],
    processStages: [
      { step: "01", title: "Infrastructure Assessment", description: "Auditing resource utilization, scalability bottlenecks, and cost profiles." },
      { step: "02", title: "IaC & Containerization", description: "Authoring declarative templates and Docker container configurations." },
      { step: "03", title: "CI/CD Pipeline Setup", description: "Connecting repositories with automated test, lint, and deploy workflows." },
      { step: "04", title: "Monitoring & Hardening", description: "Configuring uptime monitors, log aggregators, and security boundaries." }
    ],
    technologies: ["Node.js", "Docker", "Linux", "Cloud Infrastructure"],
    visualType: "cloud"
  },
  {
    slug: "cybersecurity",
    number: "08",
    title: "Cybersecurity",
    shortDesc: "Vulnerability assessments, code audits, and proactive security architecture for modern systems.",
    overview: "In an era of relentless threat escalation, security cannot be an afterthought. We implement multi-layered defensive security practices across your applications, APIs, and data storage. From OWASP compliance audits to encryption at rest and in transit, our cybersecurity protocols protect critical corporate assets.",
    subServices: [
      { title: "Security Audits", description: "Comprehensive evaluations of software architecture, dependencies, and configuration." },
      { title: "Vulnerability Assessment", description: "Automated and manual probing to discover exposure points and misconfigurations." },
      { title: "Penetration Testing", description: "Simulated ethical penetration exercises across public endpoints and authenticated layers." },
      { title: "Application Security", description: "Secure coding standards, input validation, and sanitization guarding against injection." },
      { title: "Data Security", description: "End-to-end encryption, tokenization, and strict database access controls." },
      { title: "Network Security", description: "Firewall configurations, VPC isolation, DDoS mitigation, and SSL/TLS cipher hardening." }
    ],
    capabilities: [
      "OWASP Top 10 Mitigation Standards",
      "Role-Based Access Control (RBAC) & Principle of Least Privilege",
      "End-to-End Cryptographic Data Protection",
      "Dependency Vulnerability Scanning & Patching",
      "Audit Logging & Anomaly Detection",
      "Secure API Gateway Enforcement"
    ],
    processStages: [
      { step: "01", title: "Threat Modeling", description: "Mapping trust boundaries, data flows, and potential threat vectors." },
      { step: "02", title: "Code & Configuration Audit", description: "Static analysis, dependency inspection, and configuration reviews." },
      { step: "03", title: "Remediation & Hardening", description: "Patching identified weaknesses and implementing defensive controls." },
      { step: "04", title: "Continuous Monitoring", description: "Ongoing automated scanning and security baseline verification." }
    ],
    technologies: ["Node.js", "MongoDB Security", "SSL/TLS", "JWT / OAuth2"],
    visualType: "security"
  },
  {
    slug: "crm-erp-solutions",
    number: "09",
    title: "CRM & ERP Solutions",
    shortDesc: "Tailored business management software unifying workflows, inventory, leads, and operations.",
    overview: "Commercial off-the-shelf software often forces businesses into rigid, inefficient processes. We architect bespoke CRM and ERP platforms tailored to your specific organizational workflows. By centralizing customer interactions, resource planning, and inventory control, our systems eliminate data silos.",
    subServices: [
      { title: "Custom CRM", description: "Customer relationship management software designed around your specific sales cycles." },
      { title: "ERP Development", description: "Enterprise resource planning engines unifying logistics, accounting, and operations." },
      { title: "Lead Management", description: "Automated lead intake, scoring algorithms, and multi-channel pipeline tracking." },
      { title: "Employee Management", description: "Internal personnel consoles, shift scheduling, and role-based permissions." },
      { title: "Business Automation", description: "Triggered notification workflows, invoice generation, and status synchronizations." },
      { title: "Custom Dashboards", description: "Role-specific operational views tailored for managers, sales reps, and executives." }
    ],
    capabilities: [
      "Bespoke Entity Relational Modeling",
      "Automated Multi-Stage Sales Pipelines",
      "Role-Based Granular Permission Matrices",
      "Real-Time Document & PDF Invoicing Generation",
      "Cross-Departmental Workflow Automation",
      "Complete Data Ownership & Self-Hosted Freedom"
    ],
    processStages: [
      { step: "01", title: "Workflow Mapping", description: "Documenting operational touchpoints, approvals, and data lifecycles." },
      { step: "02", title: "Database & Entity Schema", description: "Structuring normalized data collections and relational dependencies." },
      { step: "03", title: "Application & Module Build", description: "Engineering custom modules for leads, inventory, and operations." },
      { step: "04", title: "Data Migration & Adoption", description: "Importing historical data and training internal team members." }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    visualType: "crm"
  },
  {
    slug: "digital-marketing",
    number: "10",
    title: "Digital Marketing",
    shortDesc: "Data-driven search optimization, content strategy, and multi-channel technical marketing.",
    overview: "We align digital marketing with technical software excellence. Rather than relying on superficial gimmicks, our approach leverages technical search engine optimization (SEO), fast page load times, structured schema data, and analytics-driven content architecture to build durable organic visibility and high-intent customer acquisition.",
    subServices: [
      { title: "Technical SEO", description: "Crawl budget optimization, schema markup, Core Web Vitals, and indexation hygiene." },
      { title: "Social Media Marketing", description: "Strategic distribution of high-value brand content across professional networks." },
      { title: "Google Ads & PPC", description: "High-intent search campaign architecture with strict budget tracking and negative keyword filters." },
      { title: "Content Marketing", description: "Authoritative technical articles, case studies, and editorial content establishing domain authority." },
      { title: "Email Marketing", description: "Lifecycle nurture sequences, transactional emails, and deliverability optimization." },
      { title: "Lead Generation", description: "Conversion rate optimized (CRO) landing pages with streamlined intake funnels." }
    ],
    capabilities: [
      "Technical On-Page & Architecture SEO",
      "Structured JSON-LD Schema Integration",
      "Conversion Rate Optimization (CRO) Engineering",
      "Multi-Channel Attribution Modeling",
      "Event-Driven Analytics Instrumentation",
      "Search Engine Indexation Auditing"
    ],
    processStages: [
      { step: "01", title: "Search & Audience Discovery", description: "Identifying high-intent search queries and competitive landscape." },
      { step: "02", title: "Technical On-Page Foundation", description: "Auditing metadata, heading hierarchies, semantic HTML, and speed." },
      { step: "03", title: "Content & Campaign Deployment", description: "Publishing structured content and running targeted conversion funnels." },
      { step: "04", title: "Analytics & Refinement", description: "Measuring traffic acquisition, CTR, conversion rates, and iterative tuning." }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Analytics"],
    visualType: "marketing"
  },
  {
    slug: "software-development",
    number: "11",
    title: "Software Development",
    shortDesc: "Custom software engineering, SaaS product development, and resilient API architecture.",
    overview: "We build bespoke software systems engineered to solve foundational organizational bottlenecks. From greenfield SaaS product development to modular enterprise software and third-party API orchestrations, our team writes clean, maintainable, and thoroughly documented code designed for longevity.",
    subServices: [
      { title: "Custom Software", description: "Tailor-made software applications engineered around your exact operational parameters." },
      { title: "SaaS Development", description: "Multi-tenant software platforms featuring subscription billing, onboarding, and tenancy isolation." },
      { title: "API Development", description: "High-throughput RESTful API architectures engineered with strict validation and versioning." },
      { title: "Third-party Integrations", description: "Seamless data bridge integrations connecting ERPs, payment gateways, and partner APIs." },
      { title: "Enterprise Software", description: "Resilient internal platforms engineered for mission-critical operations." },
      { title: "Business Automation", description: "Automated event queues, batch synchronization, and scheduled processing engines." }
    ],
    capabilities: [
      "Multi-Tenant SaaS Data Isolation",
      "Modular Clean Architecture & Domain-Driven Design",
      "Asynchronous Background Queue Processing",
      "Strict Semantic API Versioning & OpenAPI Specs",
      "Fault-Tolerant Microservices Communication",
      "Scalable Document & Relational Storage"
    ],
    processStages: [
      { step: "01", title: "System Scoping & RFC", description: "Authoring architectural request for comments (RFC) and technical blueprints." },
      { step: "02", title: "Core Engine Development", description: "Developing domain models, business logic controllers, and database layers." },
      { step: "03", title: "API & Client Integration", description: "Connecting interfaces with secure API contracts and robust error handling." },
      { step: "04", title: "Load Verification & Release", description: "Stress testing endpoints, final code reviews, and production release." }
    ],
    technologies: ["Node.js", "React", "MongoDB", "JavaScript"],
    visualType: "software"
  },
  {
    slug: "maintenance-support",
    number: "12",
    title: "Maintenance & Support",
    shortDesc: "Proactive software maintenance, security updates, bug fixes, and continuous product enhancement.",
    overview: "Software is a living system that requires continuous care, security patches, and performance tuning. Our maintenance and technical support engagements ensure your applications remain secure, fast, and fully compatible with advancing web standards, third-party API changes, and shifting browser requirements.",
    subServices: [
      { title: "Application Maintenance", description: "Scheduled dependency updates, runtime patching, and preventive code refactoring." },
      { title: "Bug Fixing", description: "Rapid diagnostic triage and permanent resolution of reported operational regressions." },
      { title: "Performance Optimization", description: "Database query indexing, bundle minification, and server response time acceleration." },
      { title: "Security Updates", description: "Immediate mitigation of newly reported CVEs and security dependency updates." },
      { title: "Technical Support", description: "Direct developer advisory, incident troubleshooting, and architectural guidance." }
    ],
    capabilities: [
      "Continuous Dependency Vulnerability Scanning",
      "Proactive Uptime & Exception Monitoring",
      "Database Optimization & Storage Compaction",
      "Zero-Downtime Hotfix Deployments",
      "SLA-Backed Incident Response Protocols",
      "Quarterly Code Quality & Architectural Reviews"
    ],
    processStages: [
      { step: "01", title: "Health & Telemetry Audit", description: "Cataloging current dependencies, server logs, and runtime error rates." },
      { step: "02", title: "Monitoring Setup", description: "Configuring real-time alerts for server anomalies and client-side exceptions." },
      { step: "03", title: "Regular Patch Cycles", description: "Executing scheduled bi-weekly dependency updates and regression checks." },
      { step: "04", title: "On-Demand Support", description: "Providing direct developer availability for operational changes and fixes." }
    ],
    technologies: ["Node.js", "React", "MongoDB", "JavaScript"],
    visualType: "maintenance"
  }
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "project-logistics",
    name: "Apex Global Logistics Portal",
    tagline: "Real-time dispatch & fleet telemetry operational hub",
    category: "Web Application",
    description: "A centralized operational hub providing real-time cargo tracking, automated route calculations, and interactive driver communications with zero latency.",
    challenge: "Dispatchers were struggling with fragmented legacy phone logs and delayed GPS telemetry, resulting in route bottlenecks and delayed deliveries.",
    solution: "We engineered an interactive, single-page operations command center with WebSocket-driven live updates, automated route visualization, and driver status logs.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    highlight: "Sub-second state synchronization across active logistics nodes",
    metricsOrHighlight: "Sub-second state synchronization across active logistics nodes",
    signalCoordinate: { x: 20, y: 30 },
    clientType: "Commercial Freight & Transport",
    metrics: [
      "Sub-second state synchronization",
      "Zero page reloads for live fleet updates",
      "Comprehensive driver telemetry dispatching"
    ]
  },
  {
    id: "project-financial",
    name: "Strata Financial Dashboard",
    tagline: "High-density institutional analytics & portfolio visualization",
    category: "UI/UX Design",
    description: "High-density financial analytics console designed for rapid decision making, featuring custom SVG data visualizers, ledger audits, and keyboard navigation.",
    challenge: "Financial analysts required instant clarity on volatile portfolio movements without being overwhelmed by noisy, unorganized data tables.",
    solution: "Designed and engineered an ergonomic financial console featuring high-contrast typography, customizable data widgets, and 60fps chart rendering.",
    technologies: ["React", "JavaScript", "CSS3", "Figma"],
    highlight: "Engineered for 60fps chart rendering and high-contrast accessibility",
    metricsOrHighlight: "Engineered for 60fps chart rendering and high-contrast accessibility",
    signalCoordinate: { x: 75, y: 25 },
    clientType: "Asset Management & FinTech",
    metrics: [
      "60fps chart rendering performance",
      "High-contrast WCAG AA accessible layout",
      "Ergonomic keyboard shortcut workflows"
    ]
  },
  {
    id: "project-health",
    name: "PulseHealth Patient Care Platform",
    tagline: "Accessible telemedicine & appointment orchestration portal",
    category: "Digital Solutions",
    description: "Patient-first healthcare web portal ensuring intuitive triage scheduling, encrypted clinical records, and effortless cross-device video consultation interfaces.",
    challenge: "Patients of varying digital literacy needed a frictionless way to book appointments, review medical records, and join telehealth consultations.",
    solution: "Built a WCAG AA-compliant, mobile-optimized patient portal emphasizing clear typography, large touch targets, and secure record access.",
    technologies: ["React", "HTML5", "Node.js", "MongoDB"],
    highlight: "Strict WCAG AA accessibility compliance across all touchpoints",
    metricsOrHighlight: "Strict WCAG AA accessibility compliance across all touchpoints",
    signalCoordinate: { x: 30, y: 70 },
    clientType: "Healthcare & Clinical Services",
    metrics: [
      "Strict WCAG AA accessibility rating",
      "Mobile-first responsive consultation flow",
      "Encrypted patient records management"
    ]
  },
  {
    id: "project-design-system",
    name: "Kroma Studio Design System",
    tagline: "Unified component kit & brand token repository",
    category: "UI/UX Design",
    description: "A comprehensive digital design system comprising 180+ reusable UI components, multi-theme token mappings, and accessible interaction guidelines.",
    challenge: "Cross-functional teams were duplicating UI code across products, leading to brand drift and inconsistent user experiences.",
    solution: "Created an atomic design system with centralized tokens in Figma and mirrored React components, complete with documentation and interactive previews.",
    technologies: ["Figma", "CSS3", "React", "JavaScript"],
    highlight: "Standardized 180+ UI components across multiple enterprise product lines",
    metricsOrHighlight: "Standardized 180+ UI components across multiple enterprise product lines",
    signalCoordinate: { x: 80, y: 75 },
    clientType: "Digital Creative Studio",
    metrics: [
      "180+ Reusable production UI components",
      "Synchronized Figma tokens to code",
      "Comprehensive interaction documentation"
    ]
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding the Foundation",
    description: "Understand the idea, goals and requirements. We listen closely to your objectives, evaluate technical feasibility, and map out the core problem space before writing code.",
    deliverables: [
      "Stakeholder Discovery Workshop",
      "Product Requirements Blueprint",
      "Technical Feasibility Assessment",
      "Core Problem Space Mapping"
    ],
    timeframe: "Stage 01"
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "Architecting the Path",
    description: "Define the structure, technology and experience. We establish information architecture, technical stack selection, and milestone roadmaps for predictable delivery.",
    deliverables: [
      "System Architecture Diagram",
      "Information Hierarchy & Sitemap",
      "Technology Selection Rationale",
      "Milestone-Driven Delivery Roadmap"
    ],
    timeframe: "Stage 02"
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Crafting Form & Motion",
    description: "Create the visual and user experience. We build responsive prototypes, refine micro-interactions, establish design systems, and ensure strict brand harmony.",
    deliverables: [
      "Interactive High-Fidelity Prototypes",
      "Comprehensive Visual Design System",
      "Multi-Viewport Layout Specs",
      "Accessibility & Contrast Validation"
    ],
    timeframe: "Stage 03"
  },
  {
    step: "04",
    title: "DEVELOP",
    subtitle: "Engineering the Solution",
    description: "Turn the approved concept into a functional digital product. We write clean, testable code, integrate APIs, and continuously test across devices and viewports.",
    deliverables: [
      "Modular Component Codebase",
      "API & Database Integration",
      "Semantic HTML & Responsive CSS",
      "Performance & Code Review Audits"
    ],
    timeframe: "Stage 04"
  },
  {
    step: "05",
    title: "TEST",
    subtitle: "Quality & Security Assurance",
    description: "Execute rigorous manual and automated testing to ensure stability, responsiveness, input validation, and cross-browser reliability before public release.",
    deliverables: [
      "Cross-Browser Compatibility Verification",
      "Mobile Device Matrix Testing",
      "Security & Input Sanitization Checks",
      "Core Web Vitals & Load Benchmarks"
    ],
    timeframe: "Stage 05"
  },
  {
    step: "06",
    title: "LAUNCH",
    subtitle: "Deploying the Experience",
    description: "Prepare and deliver the final experience. We execute production deployment, perform live verification, configure DNS/SSL, and ensure seamless continuity.",
    deliverables: [
      "Zero-Downtime Production Deployment",
      "SEO & Metadata Indexation Config",
      "SSL Certificate & DNS Setup",
      "Source Code & Handover Documentation"
    ],
    timeframe: "Stage 06"
  },
  {
    step: "07",
    title: "SUPPORT",
    subtitle: "Lifecycle Care & Evolution",
    description: "Provide continuous technical support, bug fixing, dependency updates, and feature enhancements to ensure your digital product grows with your business.",
    deliverables: [
      "Proactive Uptime & Telemetry Care",
      "Scheduled Dependency & Security Updates",
      "Direct Developer Bug Fix Triage",
      "Iterative Product Enhancements"
    ],
    timeframe: "Stage 07"
  }
];

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    category: "Frontend",
    description: "Modern, component-driven client engineering that produces fast, accessible, and reactive user interfaces.",
    items: [
      {
        name: "React",
        description: "Declarative component-driven interfaces with high rendering performance and virtual DOM efficiency.",
        role: "Primary Component Framework"
      },
      {
        name: "JavaScript",
        description: "Modern ECMAScript standards powering asynchronous data flows, dynamic state logic, and browser APIs.",
        role: "Core Web Programming Language"
      },
      {
        name: "HTML5",
        description: "Semantic, accessible markup ensuring search engine discoverability and universal device compatibility.",
        role: "Semantic Structure & Markup"
      },
      {
        name: "CSS3",
        description: "Utility-first responsive layouts, CSS grid/flexbox, custom properties, and hardware-accelerated transitions.",
        role: "Styling & Responsive Layouts"
      }
    ]
  },
  {
    category: "Backend",
    description: "Reliable, event-driven server runtimes and scripting environments handling business logic, API endpoints, and data processing.",
    items: [
      {
        name: "Node.js",
        description: "Event-driven, non-blocking asynchronous runtime designed for scalable network applications and RESTful APIs.",
        role: "Server Runtime & API Engine"
      },
      {
        name: "PHP",
        description: "Proven server-side scripting environment for dynamic web content delivery, CMS backends, and API services.",
        role: "Server-Side Scripting"
      },
      {
        name: "Python",
        description: "Versatile programming language applied for data processing, automated workflows, and backend services.",
        role: "Backend & Automation Logic"
      }
    ]
  },
  {
    category: "Design",
    description: "Precision design tooling enabling iterative wireframing, high-fidelity prototypes, and design system component libraries.",
    items: [
      {
        name: "Figma",
        description: "Collaborative interface design tool for layout wireframing, interactive prototyping, and design token curation.",
        role: "UI/UX & Design Systems"
      }
    ]
  },
  {
    category: "Database",
    description: "Flexible, resilient data persistence engineered for modern web and application architectures.",
    items: [
      {
        name: "MongoDB",
        description: "Document-oriented NoSQL database providing high flexibility, schema indexing, and horizontal scalability.",
        role: "Document Data Store"
      },
      {
        name: "MySQL",
        description: "Relational database management system engineered for structured, ACID-compliant transactions and relational integrity.",
        role: "Relational Database Management"
      }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    description: "Standardized containerization, operating system environments, and scalable cloud delivery architectures.",
    items: [
      {
        name: "Docker",
        description: "Container virtualization platform ensuring consistent environment execution from local development to production.",
        role: "Application Containerization"
      },
      {
        name: "Linux",
        description: "Enterprise open-source operating system foundation providing security, stability, and high performance for servers.",
        role: "Server Operating System"
      },
      {
        name: "Cloud Infrastructure",
        description: "Multi-region compute, content delivery networks (CDN), and automated scaling systems for maximum uptime.",
        role: "Cloud Hosting & Global Delivery"
      }
    ]
  },
  {
    category: "Security & Authentication",
    description: "Cryptographic transport protection and standardized identity authorization safeguarding enterprise digital assets.",
    items: [
      {
        name: "JWT / OAuth2",
        description: "Stateless JSON Web Tokens and token-based OAuth2 authorization protocols for secure API communications.",
        role: "Token Authorization & Identity"
      },
      {
        name: "SSL/TLS",
        description: "End-to-end transport layer security and cryptographic certificate management ensuring encrypted client-server traffic.",
        role: "Encrypted Transport Security"
      }
    ]
  }
];

export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "Purposeful Design",
    tagline: "Clarity in every interaction",
    description: "Every experience should have a clear purpose. We avoid decorative clutter in favor of intentional hierarchy, legible typography, and intuitive user paths that guide visitors to action.",
    metricLabel: "Intent-First UX"
  },
  {
    number: "02",
    title: "Modern Technology",
    tagline: "Reliable modern foundation",
    description: "We use appropriate, battle-tested modern technologies to create reliable digital solutions. We select clean tools and frameworks that deliver speed, security, and long-term maintainability.",
    metricLabel: "Clean Stack"
  },
  {
    number: "03",
    title: "User-Centered Thinking",
    tagline: "Human-focused digital empathy",
    description: "Technology should remain understandable and useful to people. We prioritize ergonomics, accessibility (WCAG AA), and frictionless operation for every end user across every screen size.",
    metricLabel: "Accessible by Design"
  },
  {
    number: "04",
    title: "Scalable Approach",
    tagline: "Engineered to evolve",
    description: "We build digital experiences that can evolve with changing business requirements. Clean modular architectures ensure your software scales smoothly without expensive structural rewrites.",
    metricLabel: "Future-Ready Architecture"
  }
];

// Legacy exports for backwards compatibility
export const SERVICES_DATA = SERVICES_LIST.map((s, idx) => ({
  ...s,
  id: s.slug,
  fullDesc: s.overview,
  deliverables: s.capabilities,
  orbitAngle: idx * 30,
}));

export const ORBIT_PILLARS = [
  { key: "IDEA", title: "Idea & Vision", subtitle: "The origin of the signal", description: "Every transformative digital solution begins with a distinct purpose.", angle: 0 },
  { key: "DESIGN", title: "Thoughtful Design", subtitle: "Shaping clarity and flow", description: "Form follows intent.", angle: 90 },
  { key: "TECHNOLOGY", title: "Modern Engineering", subtitle: "Robust and resilient code", description: "Leveraging clean architectures and performant frameworks.", angle: 180 },
  { key: "IMPACT", title: "Scalable Impact", subtitle: "Sustained digital value", description: "Delivering solutions that grow alongside your business.", angle: 270 }
];

export const TECHNOLOGIES = TECHNOLOGIES_DATA.flatMap((cat) =>
  cat.items.map((i) => ({ name: i.name, category: cat.category, description: i.description }))
);

export const WHY_POINTS = WHY_US_PILLARS.map((p) => ({
  title: p.title,
  tagline: p.tagline,
  description: p.description,
  signalMetric: p.metricLabel
}));

