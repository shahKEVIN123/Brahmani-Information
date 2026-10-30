import React from 'react';
import {
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  Palette,
  CheckCircle,
  Cloud,
  Shield,
  Layers,
  TrendingUp,
  Code,
  Wrench,
  Check,
  Zap,
  Lock,
  Server,
  Database
} from 'lucide-react';

interface ServiceVisualProps {
  type: string;
  title: string;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ type, title }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      
      {/* 2.5D Ambient Soft Accent Behind Card */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10" />

      {/* Main 2.5D Layered Surface */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1),0_0_0_1px_rgba(15,23,42,0.02)] p-5 sm:p-6 transition-all duration-300">
        
        {/* Render bespoke visual per service type */}

        {/* 01: Web Development Visual */}
        {type === 'web' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  WEB ARCHITECTURE // VIEWPORT ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% LIGHTHOUSE
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5">
              <div className="h-3 w-1/3 bg-[#005EDA] rounded-md" />
              <div className="h-2 w-full bg-slate-200 rounded" />
              <div className="h-2 w-4/5 bg-slate-200 rounded" />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-14 rounded-lg bg-white border border-slate-200 p-2 flex flex-col justify-between">
                  <div className="w-4 h-4 rounded bg-blue-100 text-[#005EDA] flex items-center justify-center text-[10px] font-bold">1</div>
                  <div className="h-1.5 w-10 bg-slate-300 rounded" />
                </div>
                <div className="h-14 rounded-lg bg-white border border-slate-200 p-2 flex flex-col justify-between">
                  <div className="w-4 h-4 rounded bg-blue-100 text-[#005EDA] flex items-center justify-center text-[10px] font-bold">2</div>
                  <div className="h-1.5 w-10 bg-slate-300 rounded" />
                </div>
                <div className="h-14 rounded-lg bg-white border border-slate-200 p-2 flex flex-col justify-between">
                  <div className="w-4 h-4 rounded bg-blue-100 text-[#005EDA] flex items-center justify-center text-[10px] font-bold">3</div>
                  <div className="h-1.5 w-10 bg-slate-300 rounded" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Stack: React + Tailwind + Vite</span>
              <span className="text-[#005EDA] font-semibold">Semantic & Accessible</span>
            </div>
          </div>
        )}

        {/* 02: Mobile App Development Visual */}
        {type === 'mobile' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  MOBILE ECOSYSTEM // DUAL OS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200">
                60 FPS GESTURES
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-center">
                <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto" />
                <span className="text-[10px] font-mono text-slate-600 block">iOS Native / Swift</span>
                <div className="h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-[10px] font-semibold text-[#005EDA]">
                  Touch Ergonomics
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-center">
                <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto" />
                <span className="text-[10px] font-mono text-slate-600 block">Android / Material 3</span>
                <div className="h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-[10px] font-semibold text-[#005EDA]">
                  Cross-Platform
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Runtimes: Flutter / React Native</span>
              <span className="text-emerald-600 font-semibold">Offline Synchronization</span>
            </div>
          </div>
        )}

        {/* 03: AI & Machine Learning Visual */}
        {type === 'ai' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  ENTERPRISE INFERENCE PIPELINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                VALIDATED RAG
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-3 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-600">
                <span>[Input Query Vector]</span>
                <span className="text-[#005EDA]">→ Embedding Layer</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-between">
                <span>Vector Index Retrieval</span>
                <span className="text-emerald-600 font-semibold">&lt;14ms</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>[Deterministic Guardrails]</span>
                <span className="text-purple-600 font-semibold">Zero Speculation</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Focus: Practical Workflows</span>
              <span className="text-[#005EDA] font-semibold">Enterprise Governed</span>
            </div>
          </div>
        )}

        {/* 04: Data & Analytics Visual */}
        {type === 'data' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  ANALYTICS & BI ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200">
                REAL-TIME TELEMETRY
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-3">
              <div className="flex items-end justify-between h-20 px-2 pt-2 border-b border-slate-200">
                <div className="w-6 bg-blue-200 rounded-t h-[40%]" />
                <div className="w-6 bg-blue-300 rounded-t h-[65%]" />
                <div className="w-6 bg-blue-400 rounded-t h-[50%]" />
                <div className="w-6 bg-[#005EDA] rounded-t h-[85%]" />
                <div className="w-6 bg-blue-600 rounded-t h-[95%]" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Aggregated ETL</span>
                <span>Role-Based Consoles</span>
                <span className="text-[#005EDA] font-semibold">KPI Precision</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Pipelines: Structured & Normalized</span>
              <span className="text-emerald-600 font-semibold">Single Source of Truth</span>
            </div>
          </div>
        )}

        {/* 05: UI/UX Design Visual */}
        {type === 'design' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Palette className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  DESIGN SYSTEM // FIGMA TOKENS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                WCAG 2.1 AA
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                <span>Typography Scale: Plus Jakarta Sans</span>
                <span className="text-[#005EDA]">Modular 1.25</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                <div className="h-10 rounded bg-[#005EDA] flex items-center justify-center text-white text-[9px] font-mono font-bold">#005EDA</div>
                <div className="h-10 rounded bg-[#0F172A] flex items-center justify-center text-white text-[9px] font-mono font-bold">#0F172A</div>
                <div className="h-10 rounded bg-slate-200 flex items-center justify-center text-slate-800 text-[9px] font-mono font-bold">#E2E8F0</div>
                <div className="h-10 rounded bg-white border border-slate-300 flex items-center justify-center text-slate-800 text-[9px] font-mono font-bold">#FFFFFF</div>
              </div>
              <div className="text-[10px] text-slate-500 font-mono pt-1">
                Atomic Component Library • Prototyping • Developer Handoff
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Philosophy: Form Follows Intent</span>
              <span className="text-[#005EDA] font-semibold">Zero Visual Clutter</span>
            </div>
          </div>
        )}

        {/* 06: QA & Testing Visual */}
        {type === 'qa' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  AUTOMATED TEST MATRIX
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                ALL SUITES PASSING
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200 text-slate-700">
                <span className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Unit & Component Tests</span>
                </span>
                <span className="text-emerald-600 font-bold">142/142</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200 text-slate-700">
                <span className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>API Contract Integrity</span>
                </span>
                <span className="text-emerald-600 font-bold">100% Pass</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200 text-slate-700">
                <span className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cross-Browser Rendering</span>
                </span>
                <span className="text-emerald-600 font-bold">Safari • Chrome • Firefox</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Regression Protection</span>
              <span className="text-emerald-600 font-semibold">Continuous CI Validation</span>
            </div>
          </div>
        )}

        {/* 07: Cloud & DevOps Visual */}
        {type === 'cloud' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Cloud className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  INFRASTRUCTURE AS CODE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200">
                CONTAINERIZED
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>[Ingress / Reverse Proxy]</span>
                <span className="text-emerald-600 font-semibold">SSL Active</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                <span>Docker Container Cluster</span>
                <span className="text-blue-600">Zero-Downtime Rollouts</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Automated Health Probes</span>
                <span className="text-slate-800 font-bold">99.9% Availability</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Pipelines: Automated CI/CD</span>
              <span className="text-[#005EDA] font-semibold">Predictable Scaling</span>
            </div>
          </div>
        )}

        {/* 08: Cybersecurity Visual */}
        {type === 'security' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  DEFENSE-IN-DEPTH PERIMETER
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                OWASP HARDENED
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#005EDA]" />
                  <span>Payload Sanitization</span>
                </span>
                <span className="text-emerald-600 font-bold">Enforced</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between">
                <span>Role-Based Access (RBAC)</span>
                <span className="text-[#005EDA]">Least Privilege</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Encryption at Rest & Transit</span>
                <span className="text-slate-800 font-bold">TLS 1.3 / AES-256</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Continuous Vulnerability Auditing</span>
              <span className="text-emerald-600 font-semibold">Proactive Hardening</span>
            </div>
          </div>
        )}

        {/* 09: CRM & ERP Solutions Visual */}
        {type === 'crm' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  BUSINESS WORKFLOW CONSOLE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200">
                TAILORED ERP
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-[11px] font-mono">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded border border-slate-200">
                  <span className="text-[9px] text-slate-500 block">Leads</span>
                  <span className="font-bold text-slate-900">Active</span>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <span className="text-[9px] text-slate-500 block">Inventory</span>
                  <span className="font-bold text-slate-900">Synced</span>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <span className="text-[9px] text-slate-500 block">Invoices</span>
                  <span className="font-bold text-emerald-600">Auto</span>
                </div>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200 text-slate-700 flex justify-between items-center text-[10px]">
                <span>Cross-Departmental Automation</span>
                <span className="text-[#005EDA]">Zero Data Silos</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Full Data Ownership</span>
              <span className="text-[#005EDA] font-semibold">Tailored Workflows</span>
            </div>
          </div>
        )}

        {/* 10: Digital Marketing Visual */}
        {type === 'marketing' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  TECHNICAL SEO & VISIBILITY
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                ORGANIC GROWTH
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>Structured Data (JSON-LD)</span>
                <span className="text-emerald-600 font-bold">100% Valid</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between text-[10px]">
                <span>High-Intent Conversion Funnel</span>
                <span className="text-[#005EDA]">Optimized Flow</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Core Web Vitals Metric</span>
                <span className="text-emerald-600 font-bold">Green Tier</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Data-Driven Engineering</span>
              <span className="text-emerald-600 font-semibold">Measurable ROI</span>
            </div>
          </div>
        )}

        {/* 11: Software Development Visual */}
        {type === 'software' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  MODULAR SAAS ARCHITECTURE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200">
                CLEAN DOMAIN
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>RESTful / GraphQL APIs</span>
                <span className="text-emerald-600 font-bold">Versioning v1</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between text-[10px]">
                <span>Multi-Tenant Data Isolation</span>
                <span className="text-[#005EDA]">Tenancy Security</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Background Event Queue</span>
                <span className="text-blue-600 font-bold">Fault-Tolerant</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Architecture: Domain-Driven</span>
              <span className="text-[#005EDA] font-semibold">Engineered for Scale</span>
            </div>
          </div>
        )}

        {/* 12: Maintenance & Support Visual */}
        {type === 'maintenance' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-[#005EDA]" />
                <span className="text-xs font-mono font-semibold text-slate-800">
                  SYSTEM HEALTH TELEMETRY
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                SLA ASSURED
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Uptime Status</span>
                </span>
                <span className="text-emerald-600 font-bold">99.98%</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between text-[10px]">
                <span>Dependency Vulnerability Patches</span>
                <span className="text-emerald-600 font-bold">Up to Date</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Database Indexing Optimization</span>
                <span className="text-blue-600">Sub-10ms Queries</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Proactive Monitoring</span>
              <span className="text-emerald-600 font-semibold">Continuous Care</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
