import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SparkleIcon } from '../components/SparkleIcon';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
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
      setErrorMessage('Please fill in your name, email, and project details.');
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section 
      id="contact"
      className="relative py-28 lg:py-36 bg-[#020617] border-t border-[#005EDA]/10 overflow-hidden"
      aria-label="Contact Brahmani Information"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#001455]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#005EDA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>TRANSMIT THE SIGNAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            LET’S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
              SOMETHING MEANINGFUL.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you have an upcoming project or need technical guidance, our team is ready to analyze your requirements and engineer an optimal path forward.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-gradient-to-b from-[#051026] via-[#020617] to-[#001455]/40 border border-[#005EDA]/30 rounded-3xl p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#005EDA]/20 border border-[#3894FF] mx-auto flex items-center justify-center text-[#3894FF] shadow-[0_0_25px_rgba(0,94,218,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display">
                    Signal Received Successfully.
                  </h3>

                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out. We have logged your inquiry into our system and will respond promptly to review your project goals.
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
                    className="px-6 py-2.5 rounded-xl text-xs font-mono uppercase bg-[#005EDA] text-white hover:bg-[#0066FF] shadow-md transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name <span className="text-[#3894FF]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white placeholder-slate-500 text-sm focus:border-[#3894FF] focus:outline-none focus:ring-1 focus:ring-[#3894FF] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Work Email <span className="text-[#3894FF]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white placeholder-slate-500 text-sm focus:border-[#3894FF] focus:outline-none focus:ring-1 focus:ring-[#3894FF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white placeholder-slate-500 text-sm focus:border-[#3894FF] focus:outline-none focus:ring-1 focus:ring-[#3894FF] transition-all"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Project Scope / Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white text-sm focus:border-[#3894FF] focus:outline-none focus:ring-1 focus:ring-[#3894FF] transition-all"
                      >
                        {COMPANY_INFO.inquiryTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#051026] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Details & Goals <span className="text-[#3894FF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project idea, timeline, or key objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white placeholder-slate-500 text-sm focus:border-[#3894FF] focus:outline-none focus:ring-1 focus:ring-[#3894FF] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 text-sm font-semibold tracking-wide text-white rounded-xl overflow-hidden bg-gradient-to-r from-[#001455] via-[#005EDA] to-[#005EDA] border border-[#3894FF]/40 shadow-[0_0_30px_rgba(0,94,218,0.45)] hover:shadow-[0_0_45px_rgba(0,94,218,0.7)] hover:border-[#3894FF] transition-all duration-300 active:scale-95 disabled:opacity-50"
                    >
                      <span className="relative flex items-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Transmitting Signal...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Information & Brand Signal Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#051026]/70 border border-[#005EDA]/20 space-y-4">
              <h3 className="text-lg font-bold text-white font-display">
                Communication Standards
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe in direct, clear dialogue without sales rhetoric or technical ambiguity.
              </p>
              
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                  <span>Confidentiality & NDA protection from initial consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3894FF]" />
                  <span>Direct architectural assessment and scoping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                  <span>Detailed milestone-based project planning</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#030816] border border-[#005EDA]/20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#3894FF] block mb-1">
                PRIMARY SIGNAL INLET
              </span>
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="text-white hover:text-[#3894FF] font-medium text-sm transition-colors block"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
