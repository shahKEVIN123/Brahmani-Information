import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { COMPANY_INFO, ServiceItem } from '../data/companyData';

interface InteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: preselectedService?.title || COMPANY_INFO.inquiryTypes[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please provide your name, email, and project scope.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-gradient-to-b from-[#051026] to-[#020617] border border-[#3894FF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,94,218,0.45)] max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#020617] text-slate-400 hover:text-white border border-[#005EDA]/30 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#005EDA]/20 border border-[#3894FF] mx-auto flex items-center justify-center text-[#3894FF] shadow-[0_0_20px_rgba(0,94,218,0.5)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              Project Initialization Transmitted.
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
              We have received your project briefing. A Brahmani Information technical specialist will follow up with you directly.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono uppercase bg-[#005EDA] text-white hover:bg-[#0066FF] transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#3894FF] uppercase tracking-wider mb-2">
                <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
                <span>PROJECT INITIATION</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Start a Project with Brahmani Information
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Tell us about your digital requirements and objectives.
              </p>
            </div>

            {error && (
              <div className="mb-4 flex items-center space-x-2 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white text-sm focus:border-[#3894FF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white text-sm focus:border-[#3894FF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Organization Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white text-sm focus:border-[#3894FF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Service Area
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white text-sm focus:border-[#3894FF] focus:outline-none"
                  >
                    {COMPANY_INFO.inquiryTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#051026]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Project Summary *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your concept, requirements, or target timeline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#030816] border border-[#005EDA]/25 text-white text-sm focus:border-[#3894FF] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#001455] via-[#005EDA] to-[#005EDA] border border-[#3894FF]/40 shadow-[0_0_20px_rgba(0,94,218,0.4)] hover:shadow-[0_0_30px_rgba(0,94,218,0.6)] transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
