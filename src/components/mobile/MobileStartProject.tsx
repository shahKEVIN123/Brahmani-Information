import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { COMPANY_INFO, SERVICES_LIST } from '../../data/companyData';

export const MobileStartProject: React.FC = () => {
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

  const timelines = ['Immediate (< 1 Mo)', '1–3 Months', '3–6 Months', 'Flexible'];
  const budgetTiers = ['Pilot / PoC', 'Standard Enterprise', 'Multi-Phase', 'Ongoing Support'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      const response = await fetch('/api/start-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService,
          timeline: selectedTimeline,
          budget: selectedBudget,
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          projectBrief: formData.projectBrief.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit project request. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header */}
      <section className="px-4 pt-3 pb-5 space-y-3">
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 active:text-white bg-[#151515] border border-white/10 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] font-mono font-bold text-[#38BDF8]">
          <span>STRUCTURED PROJECT INTAKE</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>Start a Project & </span>
          <span className="text-[#005EDA]">Technical Scope.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          Provide high-level details regarding your upcoming project. Our architects evaluate objectives and prepare a detailed roadmap within 24 hours.
        </p>
      </section>

      {/* 2. Intake Form */}
      <section className="px-4 space-y-4">
        {isSubmitted ? (
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 text-[#38BDF8] border border-blue-400/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-lg font-bold font-display text-white">
              Project Intake Logged!
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief for <strong className="text-[#38BDF8]">{selectedService}</strong> has been received by our lead solution architects.
            </p>
            <div className="bg-[#1C1C1C] border border-white/10 rounded-xl p-3 text-left space-y-1 text-xs">
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Discipline:</span>
                <span className="text-white font-medium">{selectedService}</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Timeline:</span>
                <span className="text-white font-medium">{selectedTimeline}</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Response SLA:</span>
                <span className="text-emerald-400 font-medium">&lt;24 Business Hours</span>
              </div>
            </div>
            <Link
              to="/work"
              className="w-full flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl bg-[#005EDA] text-white text-xs font-semibold"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#141414] border border-white/10 rounded-2xl p-5 space-y-4 shadow-lg">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Step 1: Select Service */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white block">
                1. Select Core Discipline
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {SERVICES_LIST.slice(0, 6).map((srv) => (
                  <button
                    type="button"
                    key={srv.slug}
                    onClick={() => setSelectedService(srv.title)}
                    className={`p-2.5 rounded-xl border text-[11px] font-medium text-left truncate transition-all ${
                      selectedService === srv.title
                        ? 'bg-[#005EDA] text-white border-[#005EDA] shadow-xs'
                        : 'bg-[#1C1C1C] text-slate-300 border-white/10'
                    }`}
                  >
                    {srv.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Timeline */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-bold text-white block">
                2. Target Timeline
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {timelines.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setSelectedTimeline(time)}
                    className={`py-2 px-2.5 rounded-xl border text-[11px] font-medium text-center transition-all ${
                      selectedTimeline === time
                        ? 'bg-[#005EDA] text-white border-[#005EDA]'
                        : 'bg-[#1C1C1C] text-slate-300 border-white/10'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-3 pt-1">
              <label className="text-xs font-bold text-white block">
                3. Your Details
              </label>

              <div className="space-y-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Full Name *"
                  required
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Work Email *"
                  required
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number (Optional)"
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <textarea
                  name="projectBrief"
                  value={formData.projectBrief}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about the project goals, requirements, or challenge... *"
                  required
                  className="w-full bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[48px] flex items-center justify-center space-x-2 rounded-xl text-sm font-semibold text-white bg-[#005EDA] active:bg-[#004BBB] disabled:opacity-50 shadow-md transition-all pt-1"
            >
              {isSubmitting ? (
                <span>Submitting Brief...</span>
              ) : (
                <>
                  <span>Submit Project Scope</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>
        )}
      </section>

    </div>
  );
};

