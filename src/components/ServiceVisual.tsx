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
  Lock,
  Server,
  Database,
  Terminal,
  Activity,
  GitCommit
} from 'lucide-react';

interface ServiceVisualProps {
  type: string;
  title: string;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ type, title }) => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Card */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main 2.5D Layered Surface */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* ============================================================== */}
        {/* 01: Web Development Visual */}
        {/* ============================================================== */}
        {type === 'web' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Globe className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Web Architecture Matrix
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Frontend & Backend Symbiosis
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Lighthouse 100
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-3">
              {/* Responsive Viewport Blueprint */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                <span>Viewport Layout Grid [12-Col]</span>
                <span className="text-[#005EDA] font-semibold">Core Web Vitals ✓</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4 bg-white rounded-lg p-2.5 border border-slate-200 shadow-xs space-y-1.5">
                  <div className="h-2 w-10 bg-[#005EDA] rounded" />
                  <div className="h-2 w-full bg-slate-200 rounded" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded" />
                </div>
                <div className="col-span-8 bg-white rounded-lg p-2.5 border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
                    <span>Component Tree</span>
                    <span className="text-[#005EDA]">SSR Hydrated</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <div className="h-6 rounded bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[9px] font-mono text-slate-700">Client Hook</div>
                    <div className="h-6 rounded bg-[#005EDA]/10 border border-[#005EDA]/30 flex items-center justify-center text-[9px] font-mono text-[#005EDA] font-semibold">API Cache</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Stack: React • Node.js • Vite</span>
              <span className="text-[#005EDA] font-semibold">WCAG AAA Accessible</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 02: Mobile App Development Visual */}
        {/* ============================================================== */}
        {type === 'mobile' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Smartphone className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Cross-Platform Mobile Frame
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    iOS & Android Unified Architecture
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200 font-semibold">
                60 FPS Gestures
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-200/80 space-y-2 text-center">
                <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto" />
                <span className="text-[11px] font-mono text-slate-700 font-semibold block">iOS Human Interface</span>
                <div className="h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-semibold text-[#005EDA] shadow-xs">
                  SwiftUI Idioms
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-200/80 space-y-2 text-center">
                <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto" />
                <span className="text-[11px] font-mono text-slate-700 font-semibold block">Android Material 3</span>
                <div className="h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-semibold text-[#0F172A] shadow-xs">
                  Compose System
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Runtimes: Flutter • React Native</span>
              <span className="text-emerald-600 font-semibold">Offline Sync Active</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 03: AI & Machine Learning Visual */}
        {/* ============================================================== */}
        {type === 'ai' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Cpu className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Intelligent Inference Pipeline
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Deterministic Embeddings & Validation
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200 font-semibold">
                Validated RAG
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>[Unstructured Enterprise Data]</span>
                <span className="text-[#005EDA] font-semibold">→ Vector Pipeline</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-between text-slate-800">
                <span>Semantic Similarity Retrieval</span>
                <span className="text-emerald-600 font-bold">&lt;12ms Index</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Deterministic Guardrail Check</span>
                <span className="text-[#005EDA] font-bold">Zero Speculation</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Focus: Practical Automation</span>
              <span className="text-slate-800 font-semibold">Enterprise Governed</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 04: Data & Analytics Visual */}
        {/* ============================================================== */}
        {type === 'data' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <BarChart3 className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    BI & Telemetry Analytics Engine
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Aggregated ETL & Structured Consoles
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Real-Time
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-3">
              <div className="flex items-end justify-between h-20 px-3 pt-2 border-b border-slate-200">
                <div className="w-7 bg-slate-300 rounded-t h-[40%]" />
                <div className="w-7 bg-blue-200 rounded-t h-[65%]" />
                <div className="w-7 bg-blue-400 rounded-t h-[50%]" />
                <div className="w-7 bg-[#005EDA] rounded-t h-[88%]" />
                <div className="w-7 bg-[#0F172A] rounded-t h-[96%]" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Normalized Pipeline</span>
                <span>Role-Based Views</span>
                <span className="text-[#005EDA] font-bold">KPI Accuracy</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Data Pipelines: Structured ETL</span>
              <span className="text-emerald-600 font-semibold">Single Source of Truth</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 05: UI/UX Design Visual */}
        {/* ============================================================== */}
        {type === 'design' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Palette className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Design System & Ergonomics
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Figma Tokens • Component Spec
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                WCAG 2.1 AA
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-700">
                <span>Token Palette & Modular Typography</span>
                <span className="text-[#005EDA] font-semibold">Ratio 1.25</span>
              </div>
              <div className="grid grid-cols-4 gap-2 pt-1">
                <div className="h-10 rounded-lg bg-[#005EDA] flex items-center justify-center text-white text-[9px] font-mono font-bold shadow-xs">#005EDA</div>
                <div className="h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-white text-[9px] font-mono font-bold shadow-xs">#0F172A</div>
                <div className="h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-800 text-[9px] font-mono font-bold">#E2E8F0</div>
                <div className="h-10 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-800 text-[9px] font-mono font-bold shadow-xs">#FFFFFF</div>
              </div>
              <div className="text-[10px] text-slate-500 font-mono pt-1">
                Atomic Component Library • Interactive Prototyping • Developer Handoff
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Philosophy: Form Follows Intent</span>
              <span className="text-[#005EDA] font-semibold">Zero Visual Clutter</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 06: QA & Testing Visual */}
        {/* ============================================================== */}
        {type === 'qa' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Automated Test Suite Matrix
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Continuous Validation & Regression Shield
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                100% Passing
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-200/80 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 shadow-xs text-slate-800">
                <span className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Unit & Component Testing</span>
                </span>
                <span className="text-emerald-600 font-bold">142/142</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 shadow-xs text-slate-800">
                <span className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>API Contract Integrity</span>
                </span>
                <span className="text-[#005EDA] font-bold">Verified</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 shadow-xs text-slate-800">
                <span className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cross-Browser Regression</span>
                </span>
                <span className="text-slate-600">Chrome • Safari • Firefox</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Regression Protection</span>
              <span className="text-emerald-600 font-semibold">Continuous CI Gates</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 07: Cloud & DevOps Visual */}
        {/* ============================================================== */}
        {type === 'cloud' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Cloud className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Cloud Infrastructure as Code
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Container Orchestration & CI/CD
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200 font-semibold">
                Containerized
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>[Reverse Proxy & Ingress]</span>
                <span className="text-emerald-600 font-bold">TLS 1.3 Active</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center justify-between text-slate-800">
                <span>Docker Container Fleet</span>
                <span className="text-[#005EDA] font-bold">Zero-Downtime Rollout</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Automated Health Telemetry</span>
                <span className="text-slate-900 font-bold">99.9% Availability</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Automated Pipelines</span>
              <span className="text-[#005EDA] font-semibold">Elastic Scalability</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 08: Cybersecurity Visual */}
        {/* ============================================================== */}
        {type === 'security' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Shield className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Defense-in-Depth Architecture
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Perimeter Hardening & RBAC
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                OWASP Hardened
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#005EDA]" />
                  <span>Payload Sanitization</span>
                </span>
                <span className="text-emerald-600 font-bold">Enforced</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center justify-between text-slate-800">
                <span>Role-Based Access (RBAC)</span>
                <span className="text-[#005EDA] font-semibold">Least Privilege</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Data In Transit & Rest</span>
                <span className="text-slate-900 font-bold">TLS 1.3 / AES-256</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Proactive Vulnerability Auditing</span>
              <span className="text-emerald-600 font-semibold">Zero Trust Posture</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 09: CRM & ERP Solutions Visual */}
        {/* ============================================================== */}
        {type === 'crm' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Layers className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Enterprise Workflow Engine
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Integrated Business Systems
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200 font-semibold">
                Unified Data
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-200/80 space-y-2.5 text-[11px] font-mono">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <span className="text-[9px] text-slate-400 block">Lead Pipeline</span>
                  <span className="font-bold text-slate-900">Synchronized</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <span className="text-[9px] text-slate-400 block">Inventory</span>
                  <span className="font-bold text-slate-900">Real-Time</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <span className="text-[9px] text-slate-400 block">Invoices</span>
                  <span className="font-bold text-emerald-600">Automated</span>
                </div>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs text-slate-800 flex justify-between items-center text-[10px]">
                <span>Cross-Departmental Synchronization</span>
                <span className="text-[#005EDA] font-bold">Zero Data Silos</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Full Data Ownership</span>
              <span className="text-[#005EDA] font-semibold">Bespoke Workflows</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 10: Digital Marketing Visual */}
        {/* ============================================================== */}
        {type === 'marketing' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <TrendingUp className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Technical SEO & Conversion Engine
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Organic Visibility & Campaign ROI
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Organic Growth
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>Structured Schema (JSON-LD)</span>
                <span className="text-emerald-600 font-bold">100% Valid</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center justify-between text-[10px] text-slate-800">
                <span>Conversion Funnel Optimization</span>
                <span className="text-[#005EDA] font-bold">Frictionless Path</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Core Web Vitals Pass Rate</span>
                <span className="text-emerald-600 font-bold">Green Tier</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Data-Driven Engineering</span>
              <span className="text-emerald-600 font-semibold">Measurable Business ROI</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 11: Software Development Visual */}
        {/* ============================================================== */}
        {type === 'software' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
                  <Code className="w-4 h-4 text-[#005EDA]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    Custom Software & API Architecture
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Domain-Driven Clean Codebase
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] border border-blue-200 font-semibold">
                Scalable SaaS
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span>RESTful / GraphQL APIs</span>
                <span className="text-emerald-600 font-bold">Versioning v1</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center justify-between text-[10px] text-slate-800">
                <span>Multi-Tenant Data Isolation</span>
                <span className="text-[#005EDA] font-bold">Tenancy Guard</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Background Asynchronous Queue</span>
                <span className="text-slate-900 font-bold">Fault-Tolerant</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Domain-Driven Design</span>
              <span className="text-[#005EDA] font-semibold">Zero Technical Debt</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 12: Maintenance & Support Visual */}
        {/* ============================================================== */}
        {type === 'maintenance' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Wrench className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block uppercase">
                    System Health & Telemetry Care
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Proactive Monitoring & SLA Assurance
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                SLA Assured
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-700">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Uptime</span>
                </span>
                <span className="text-emerald-600 font-bold">99.98%</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center justify-between text-[10px] text-slate-800">
                <span>Vulnerability & Security Patches</span>
                <span className="text-[#005EDA] font-bold">Up to Date</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[10px]">
                <span>Database Indexing & Query Tuning</span>
                <span className="text-slate-900 font-bold">&lt;10ms Queries</span>
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
