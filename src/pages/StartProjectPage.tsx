import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, FileText, Send, AlertCircle, HelpCircle } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

export const StartProjectPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Web Development');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('1–3 Months');
  const [selectedBudget, setSelectedBudget] = useState<string>('Standard Enterprise');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectBrief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const timelines = [
    { label: 'Immediate (< 1 Month)', value: 'Immediate' },
    { label: '1–3 Months', value: '1–3 Months' },
    { label: '3–6 Months', value: '3–6 Months' },
    { label: 'Flexible / Exploring', value: 'Flexible' },
  ];

  const budgetTiers = [
    { label: 'Pilot / Proof of Concept', value: 'Pilot' },
    { label: 'Standard Enterprise Project', value: 'Standard Enterprise' },
    { label: 'Multi-Phase Large Platform', value: 'Multi-Phase' },
    { label: 'Ongoing Engineering Support', value: 'Ongoing Support' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.projectBrief.trim()) {
      setErrorMessage('Please fill in your name, work email, and project brief.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Page Hero */}
      <PageHero
        badge="Project Intake & Scoping"
        title={
          <>
            <span className="text-white block sm:inline">Start a Project with </span>
            <span className="text-[#005EDA] block sm:inline">Brahmani Information.</span>
          </>
        }
        description="Provide high-level details regarding your upcoming project. Our technical architects will evaluate your objectives and prepare a detailed roadmap."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Start a Project', href: '/start-a-project' },
        ]}
        visual={<HeroImageVisual src="/assets/heroes/start-project-hero.png" alt="Project Scoping and Architectural Roadmap Intake" />}
      />

      {/* 2. Conversion Intake Form Container */}
      <section className="py-20 lg:py-28 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSubmitted ? (
            <div className="bg-[#151515] rounded-3xl border border-white/10 p-8 sm:p-14 text-center space-y-6 shadow-depth-md animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border-2 border-[#005EDA] text-[#38BDF8] mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(0,94,218,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Project Request Received.
                </h3>
                <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your project brief for <span className="font-semibold text-[#005EDA]">{selectedService}</span> has been logged directly into our system.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-bold text-white">{selectedService}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-slate-400">Timeline:</span>
                  <span className="font-bold text-white">{selectedTimeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Response:</span>
                  <span className="font-bold text-emerald-400">Within 24 Hours</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="px-7 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#005EDA] text-white hover:bg-[#004BBB] transition-colors"
                >
                  Return to Home
                </Link>
                <Link
                  to="/work"
                  className="px-7 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-slate-200 hover:bg-[#222222] border border-white/10 transition-colors"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Step 1: Select Primary Capability */}
              <div className="bg-[#151515] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6 shadow-depth-sm">
                <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                  <span className="w-7 h-7 rounded-lg bg-[#005EDA] text-white font-mono text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Select Primary Project Discipline
                    </h3>
                    <p className="text-xs text-slate-400">
                      Choose the capability that best aligns with your primary goal.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {SERVICES_LIST.map((srv) => (
                    <button
                      key={srv.slug}
                      type="button"
                      onClick={() => setSelectedService(srv.title)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedService === srv.title
                          ? 'bg-[#005EDA] border-[#005EDA] text-white shadow-sm'
                          : 'bg-[#1A1A1A] border-white/10 text-slate-200 hover:border-white/20 hover:bg-[#202020]'
                      }`}
                    >
                      <span className={`text-[10px] font-mono block ${selectedService === srv.title ? 'text-blue-100' : 'text-slate-400'}`}>
                        {srv.number}
                      </span>
                      <span className="text-xs font-bold font-display block mt-1 line-clamp-1">
                        {srv.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Timeline & Budget Scope */}
              <div className="bg-[#151515] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-8 shadow-depth-sm">
                <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                  <span className="w-7 h-7 rounded-lg bg-[#005EDA] text-white font-mono text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Target Timeline & Scope Tier
                    </h3>
                    <p className="text-xs text-slate-400">
                      Helps our engineering leads plan delivery velocity.
                    </p>
                  </div>
                </div>

                {/* Timeline Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Target Completion Horizon:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {timelines.map((tl) => (
                      <button
                        key={tl.value}
                        type="button"
                        onClick={() => setSelectedTimeline(tl.value)}
                        className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                          selectedTimeline === tl.value
                            ? 'bg-[#005EDA] border-[#005EDA] text-white font-semibold'
                            : 'bg-[#1A1A1A] border-white/10 text-slate-200 hover:bg-[#202020]'
                        }`}
                      >
                        {tl.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Investment Tier:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {budgetTiers.map((bg) => (
                      <button
                        key={bg.value}
                        type="button"
                        onClick={() => setSelectedBudget(bg.value)}
                        className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                          selectedBudget === bg.value
                            ? 'bg-[#005EDA] border-[#005EDA] text-white font-semibold'
                            : 'bg-[#1A1A1A] border-white/10 text-slate-200 hover:bg-[#202020]'
                        }`}
                      >
                        {bg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Project Brief & Contact Information */}
              <div className="bg-[#151515] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6 shadow-depth-sm">
                <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                  <span className="w-7 h-7 rounded-lg bg-[#005EDA] text-white font-mono text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Project Brief & Contact Information
                    </h3>
                    <p className="text-xs text-slate-400">
                      Outline your goals and provide details so our architects can follow up.
                    </p>
                  </div>
                </div>

                {errorMessage && (
                  <div className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#005EDA]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Jordan Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Work Email <span className="text-[#005EDA]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jordan@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectBrief" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Goals, Requirements & Context <span className="text-[#005EDA]">*</span>
                  </label>
                  <textarea
                    id="projectBrief"
                    name="projectBrief"
                    rows={6}
                    required
                    value={formData.projectBrief}
                    onChange={handleInputChange}
                    placeholder="Describe the problem you are solving, core user features, any existing systems to integrate, or relevant technical context..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#005EDA]" />
                    <span>Protected by Mutual Non-Disclosure Standard</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_16px_rgba(0,94,218,0.28)] hover:shadow-[0_6px_22px_rgba(0,94,218,0.4)] transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        <span>Submitting Project Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </div>

            </form>
          )}

        </div>
      </section>

      {/* 3. Reassurance & Guarantees */}
      <section className="py-16 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="p-5 rounded-2xl bg-[#151515] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#38BDF8] block">GUARANTEE 01</span>
              <h4 className="text-sm font-bold text-white">Direct Engineer Scoping</h4>
              <p className="text-xs text-slate-400">Your brief is reviewed by software architects, not commissioned sales agents.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#151515] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#38BDF8] block">GUARANTEE 02</span>
              <h4 className="text-sm font-bold text-white">Rapid 24h Turnaround</h4>
              <p className="text-xs text-slate-400">We respond with an initial architectural perspective within one business day.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#151515] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#38BDF8] block">GUARANTEE 03</span>
              <h4 className="text-sm font-bold text-white">No Obligation</h4>
              <p className="text-xs text-slate-400">Our initial scoping session is completely confidential and complimentary.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
