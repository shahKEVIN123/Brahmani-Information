import React, { useState } from 'react';
import {
  Mail,
  Send,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const MobileContact: React.FC = () => {
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

  const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          projectType: formData.projectType,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again or use direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header */}
      <section className="px-4 pt-4 pb-6 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
          <span>DIRECT CONTACT & INQUIRIES</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>Let’s Discuss Your </span>
          <span className="text-[#005EDA]">Next Digital Project.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          Whether scoping a new web application, loan CRM, or enterprise system, our engineering leads respond within 24 business hours.
        </p>

        {/* 1-Tap Quick Action Bar */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#151515] border border-white/10 active:bg-[#1E1E1E] space-y-1 transition-all"
          >
            <Phone className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-[11px] font-semibold text-white">Call Us</span>
            <span className="text-[9px] text-slate-400 font-mono">Immediate</span>
          </a>

          <a
            href={`https://wa.me/${cleanNumber}?text=${encodeURIComponent('Hello Brahmani Information, I would like to discuss a project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#075E54]/20 border border-emerald-500/30 active:bg-[#075E54]/40 space-y-1 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-semibold text-emerald-300">WhatsApp</span>
            <span className="text-[9px] text-slate-400 font-mono">Fast Chat</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#151515] border border-white/10 active:bg-[#1E1E1E] space-y-1 transition-all"
          >
            <Mail className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-[11px] font-semibold text-white">Email</span>
            <span className="text-[9px] text-slate-400 font-mono">24h SLA</span>
          </a>
        </div>
      </section>

      {/* 2. Mobile-Friendly Form */}
      <section className="px-4 py-4 space-y-4">
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 shadow-lg space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="text-base font-bold text-white font-display">
              Send Project Brief
            </h2>
            <span className="text-[10px] font-mono text-[#38BDF8]">
              Response in &lt;24h
            </span>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Inquiry Successfully Sent!
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                Thank you for contacting Brahmani Information. Our engineering team has received your brief and will respond within 24 hours.
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
                className="mt-2 text-xs font-semibold text-[#38BDF8] underline"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 block">
                  Your Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. David Miller"
                  required
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Work Email */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 block">
                  Work Email <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. david@company.com"
                  required
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Company */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 block">
                  Organization / Company <span className="text-slate-500 text-[10px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Financial"
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 block">
                  Primary Capability Needed
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl px-3.5 text-sm text-white focus:outline-none transition-colors"
                >
                  {COMPANY_INFO.inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#1C1C1C] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 block">
                  Project Brief or Scope <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Outline your timeline, goals, and technical requirements..."
                  required
                  className="w-full bg-[#1C1C1C] border border-white/10 focus:border-[#005EDA] rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] flex items-center justify-center space-x-2 rounded-xl text-sm font-semibold text-white bg-[#005EDA] active:bg-[#004BBB] disabled:opacity-50 shadow-md transition-all pt-1"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 3. Operational Guarantees & Office Location */}
      <section className="px-4 py-4 space-y-3">
        <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-center space-x-2.5">
          <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
          <div className="text-xs text-slate-300">
            <strong className="text-white">Business Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM IST
          </div>
        </div>

        <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
          <div className="text-xs text-slate-300">
            <strong className="text-white">Confidentiality:</strong> Mutual NDA provided prior to technical intake.
          </div>
        </div>

        {/* Office Location */}
        <div className="bg-[#141414] border border-white/10 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-center space-x-2 text-[#38BDF8] text-xs font-bold">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Development Headquarters</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed pl-6">
            {COMPANY_INFO.address}
          </p>
        </div>

        {/* Official Social Media Channels */}
        <div className="bg-[#141414] border border-white/10 rounded-xl p-3.5 space-y-2">
          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Official Social Media
          </div>
          <div className="flex items-center space-x-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 text-slate-300 active:text-[#005EDA] flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 text-slate-300 active:text-[#E4405F] flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 text-slate-300 active:text-[#1877F2] flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 text-slate-300 active:text-white flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Subtle Copyright Line */}
        <div className="pt-2 pb-1 text-center text-[10px] text-slate-500 font-mono">
          © {COMPANY_INFO.established} {COMPANY_INFO.name}. All rights reserved.
        </div>
      </section>

    </div>
  );
};

