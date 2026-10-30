import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { COMPANY_INFO } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: COMPANY_INFO.inquiryTypes[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields: name, work email, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Contact Hero */}
      <PageHero
        badge="Direct Communication"
        title="Let’s Discuss Your Next Digital Project."
        description="Whether scoping a new web application, modernizing existing software, or seeking architectural guidance, our team is ready to assist."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* 2. Main Contact Form & Information */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-depth-sm">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 mx-auto flex items-center justify-center text-[#005EDA] shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Inquiry Received Successfully.
                  </h3>

                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out to Brahmani Information. We have logged your project details and our engineering team will respond promptly.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: COMPANY_INFO.inquiryTypes[0],
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#005EDA] text-white hover:bg-[#004BBB] shadow-sm transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display mb-1">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the form below. We typically respond within one business day.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name <span className="text-[#005EDA]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email <span className="text-[#005EDA]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Inquiry Scope
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all"
                      >
                        {COMPANY_INFO.inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Project Goals & Details <span className="text-[#005EDA]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project goals, desired timeline, or key technical challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-[#005EDA] focus:outline-none focus:ring-1 focus:ring-[#005EDA] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_16px_rgba(0,94,218,0.25)] hover:shadow-[0_6px_22px_rgba(0,94,218,0.4)] transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Right Column: Contact Details & Guarantees (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Inlet Card */}
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-depth-sm">
                <span className="text-xs font-mono font-bold text-[#005EDA] uppercase tracking-wider block">
                  Official Communication Inlet
                </span>
                
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Direct Inquiries
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Prefer direct correspondence? Reach out via our primary corporate email address:
                </p>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center space-x-2.5 text-sm font-semibold text-[#005EDA] hover:underline p-3 bg-white rounded-xl border border-slate-200 w-full"
                >
                  <Mail className="w-4 h-4 text-[#005EDA] shrink-0" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </div>

              {/* Engagement Guarantees */}
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-depth-sm">
                <h4 className="text-sm font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Our Engagement Standards
                </h4>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span>Non-disclosure agreement (NDA) protection from day one.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span>Response from lead technical engineers within 24 hours.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span>Direct scoping and architectural assessment.</span>
                  </div>
                </div>
              </div>

              {/* Start a Project Shortcut */}
              <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">
                    Ready to define project scope?
                  </h5>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Use our dedicated project intake flow.
                  </p>
                </div>
                <Link
                  to="/start-a-project"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] transition-colors shrink-0"
                >
                  Start Project →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
