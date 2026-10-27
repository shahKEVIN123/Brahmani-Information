export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  orbitAngle: number;
}

export interface WorkProject {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  technologies: string[];
  metricsOrHighlight: string;
  signalCoordinate: { x: number; y: number };
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Design';
  description: string;
}

export interface WhyPoint {
  title: string;
  tagline: string;
  description: string;
  signalMetric: string;
}

export const COMPANY_INFO = {
  name: "Brahmani Information",
  tagline: "BUILDING WHAT'S NEXT IN DIGITAL.",
  subtext: "We create modern digital experiences and technology solutions designed to turn ideas into meaningful digital products.",
  description: "Brahmani Information is an emerging IT and digital technology company focused on creating modern, purposeful and scalable digital experiences. We combine thoughtful design, technology and problem-solving to transform ideas into digital solutions.",
  mission: "To engineer reliable, aesthetically refined, and technologically robust digital solutions that empower businesses and elevate user interactions.",
  established: "2026",
  email: "contact@brahmani-information.com",
  inquiryTypes: [
    "Web Application Development",
    "Custom Web Development",
    "UI/UX & Product Design",
    "Digital Technology Architecture",
    "Comprehensive Project Discussion"
  ]
};

export const ORBIT_PILLARS = [
  {
    key: "IDEA",
    title: "Idea & Vision",
    subtitle: "The origin of the signal",
    description: "Every transformative digital solution begins with a distinct purpose. We analyze your core objectives and frame the foundational architecture.",
    angle: 0
  },
  {
    key: "DESIGN",
    title: "Thoughtful Design",
    subtitle: "Shaping clarity and flow",
    description: "Form follows intent. We design intuitive, accessible interfaces and structured design systems that make technology effortless and memorable.",
    angle: 90
  },
  {
    key: "TECHNOLOGY",
    title: "Modern Engineering",
    subtitle: "Robust and resilient code",
    description: "Leveraging clean architectures, performant frameworks, and secure protocols to engineer dependable software that performs under load.",
    angle: 180
  },
  {
    key: "IMPACT",
    title: "Scalable Impact",
    subtitle: "Sustained digital value",
    description: "Delivering solutions that grow alongside your business and provide measurable clarity, user delight, and technological longevity.",
    angle: 270
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    shortDesc: "Fast, accessible, and responsive modern websites tailored to reflect your identity.",
    fullDesc: "We build modern, high-performance web experiences engineered from the ground up. Utilizing semantic markup, clean styling systems, and optimized asset pipelines, our websites load rapidly, adapt seamlessly across devices, and offer an unmistakably premium brand presence.",
    deliverables: ["Custom Front-End Engineering", "Cross-Platform Responsiveness", "Search Engine & Semantic Optimization", "Performance & Core Web Vitals Tuning"],
    orbitAngle: 30
  },
  {
    id: "web-app",
    number: "02",
    title: "Web Application Development",
    shortDesc: "Scalable interactive web applications built with modern component architectures.",
    fullDesc: "From custom client portals to internal operations dashboards, we engineer rich web applications that handle complex business workflows with fluid interactivity, reactive state management, and robust API integrations.",
    deliverables: ["Single-Page & Progressive Web Apps", "Secure API & State Management", "Data Dashboards & Management Consoles", "Authentication & Role-Based Workflows"],
    orbitAngle: 120
  },
  {
    id: "ui-ux",
    number: "03",
    title: "UI/UX Design",
    shortDesc: "Human-centered digital interfaces crafted with visual balance and ergonomic precision.",
    fullDesc: "We craft cohesive visual identities and digital user interfaces where every interaction has a purpose. We transform intricate concepts into clear user journeys through detailed wireframing, interactive prototyping, and accessible component libraries.",
    deliverables: ["Interactive User Experience Flows", "Design Systems & Component Libraries", "High-Fidelity UI Prototyping", "Ergonomic Usability & Accessibility Testing"],
    orbitAngle: 210
  },
  {
    id: "digital-solutions",
    number: "04",
    title: "Digital Solutions",
    shortDesc: "End-to-end technological solutions bridging strategy, code, and sustainable growth.",
    fullDesc: "When your business requires tailor-made technology to streamline operations or introduce modern capabilities, we provide comprehensive technical advisory, systems integration, and bespoke digital infrastructure.",
    deliverables: ["Architecture Advisory & Planning", "System Modernization & Refactoring", "Database & Workflow Automation", "Deployment & Maintenance Pipelines"],
    orbitAngle: 300
  }
];

export const WHY_POINTS: WhyPoint[] = [
  {
    title: "Purposeful Design",
    tagline: "Clarity in every interaction",
    description: "Every experience should have a clear purpose. We avoid decorative clutter in favor of intentional hierarchy, legible typography, and intuitive user paths.",
    signalMetric: "INTENT-FIRST"
  },
  {
    title: "Modern Technology",
    tagline: "Reliable modern foundation",
    description: "Use appropriate modern technologies to create reliable digital solutions. We select battle-tested tools and frameworks that deliver speed and security.",
    signalMetric: "CLEAN STACK"
  },
  {
    title: "User-Centered Thinking",
    tagline: "Human-focused digital empathy",
    description: "Technology should remain understandable and useful to people. We prioritize ergonomics, accessibility, and frictionless operation for every end user.",
    signalMetric: "ACCESSIBLE"
  },
  {
    title: "Scalable Approach",
    tagline: "Engineered to evolve",
    description: "Build digital experiences that can evolve with changing requirements. Modular architectures ensure your product scales without structural rewrites.",
    signalMetric: "FUTURE-READY"
  }
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "project-core",
    name: "Apex Global Logistics Portal",
    tagline: "Real-time dispatch & fleet telemetry system",
    category: "Web Application",
    description: "A centralized operational hub providing real-time cargo tracking, automated route calculations, and interactive driver communications with zero latency.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    metricsOrHighlight: "Sub-second state synchronization across active logistics nodes",
    signalCoordinate: { x: 20, y: 30 }
  },
  {
    id: "project-fin",
    name: "Strata Financial Dashboard",
    tagline: "Institutional analytics & portfolio visualization",
    category: "UI/UX & Web Application",
    description: "High-density financial analytics console designed for rapid decision making, featuring custom SVG data visualizers, ledger audits, and keyboard navigation.",
    technologies: ["React", "JavaScript", "CSS3", "Figma"],
    metricsOrHighlight: "Engineered for 60fps chart rendering and high-contrast accessibility",
    signalCoordinate: { x: 75, y: 25 }
  },
  {
    id: "project-health",
    name: "PulseHealth Patient Care Platform",
    tagline: "Accessible telemedicine & appointment orchestration",
    category: "Digital Solutions",
    description: "Patient-first healthcare web portal ensuring intuitive triage scheduling, encrypted clinical records, and effortless cross-device video consultation interfaces.",
    technologies: ["React", "HTML5", "Node.js", "MongoDB"],
    metricsOrHighlight: "Strict WCAG AA accessibility compliance across all touchpoints",
    signalCoordinate: { x: 30, y: 70 }
  },
  {
    id: "project-design",
    name: "Kroma Studio Design System",
    tagline: "Unified component kit & brand token repository",
    category: "UI/UX Design",
    description: "A comprehensive digital design system comprising 180+ reusable UI components, multi-theme token mappings, and accessible interaction guidelines.",
    technologies: ["Figma", "CSS3", "React", "JavaScript"],
    metricsOrHighlight: "Accelerated cross-team front-end delivery by standardizing core UI",
    signalCoordinate: { x: 80, y: 75 }
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding the Foundation",
    description: "Understand the idea, goals and requirements. We listen closely to your objectives, evaluate technical feasibility, and map out the core problem space.",
    deliverables: ["Stakeholder Discovery Workshop", "Requirements Blueprint", "Technical Feasibility Assessment"]
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "Architecting the Path",
    description: "Define the structure, technology and experience. We establish information architecture, technical stack selection, and milestone roadmaps.",
    deliverables: ["System Architecture Diagram", "Information Hierarchy", "Milestone Roadmap"]
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Crafting Form & Motion",
    description: "Create the visual and user experience. We build responsive prototypes, refine micro-interactions, and ensure strict brand harmony.",
    deliverables: ["Interactive Prototypes", "Visual Design System", "Responsive Layout Specs"]
  },
  {
    step: "04",
    title: "DEVELOP",
    subtitle: "Engineering the Solution",
    description: "Turn the approved concept into a functional digital product. We write clean, testable code, integrate APIs, and continuously test across devices.",
    deliverables: ["Modular Component Code", "API & Database Integrations", "Security & Quality Audits"]
  },
  {
    step: "05",
    title: "LAUNCH",
    subtitle: "Deploying the Experience",
    description: "Prepare and deliver the final experience. We execute production deployment, perform performance verification, and ensure seamless continuity.",
    deliverables: ["Production Verification", "SEO & Analytics Config", "Handover Documentation"]
  }
];

export const TECHNOLOGIES: TechItem[] = [
  { name: "React", category: "Frontend", description: "Declarative component-driven interfaces with high rendering performance." },
  { name: "JavaScript", category: "Frontend", description: "Modern ES6+ standards powering interactive, asynchronous logic." },
  { name: "Node.js", category: "Backend", description: "Event-driven runtime for scalable, lightweight server architecture." },
  { name: "MongoDB", category: "Database", description: "Document-oriented database for flexible and resilient data models." },
  { name: "HTML5", category: "Frontend", description: "Semantic, accessible markup ensuring SEO and universal device compatibility." },
  { name: "CSS3", category: "Frontend", description: "Modern layouts, responsive media queries, and fluid hardware-accelerated animations." },
  { name: "Figma", category: "Design", description: "Precision UI prototyping, component libraries, and ergonomic design systems." }
];
