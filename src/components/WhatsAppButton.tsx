import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts for the user
  const quickPrompts = [
    '💼 Start a new project discussion',
    '🌐 Web or Mobile App inquiry',
    '⚡ Request a technical quote',
  ];

  // Clean phone number: remove non-digit characters for wa.me API
  const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || message.trim() || 'Hello Brahmani Information, I would like to discuss a project with your team.';
    const encodedMsg = encodeURIComponent(finalMsg);
    const url = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none"
    >
      {/* Interactive WhatsApp Chat Popup Card */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[360px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.22),0_4px_16px_rgba(0,0,0,0.06)] border border-slate-200/90 overflow-hidden animate-fadeIn">
          
          {/* Card Header (Authentic WhatsApp Theme) */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs overflow-hidden p-1">
                  <img
                    src="/brahmani-logo-cropped.png"
                    alt="Brahmani Information"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54] absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">
                  {COMPANY_INFO.name}
                </h4>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[11px] text-emerald-100 font-medium">
                    Online • Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body Canvas */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-[280px] overflow-y-auto">
            {/* Incoming Message Bubble */}
            <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-xs border border-slate-200/80 max-w-[90%] text-slate-800 text-xs leading-relaxed space-y-1">
              <p className="font-semibold text-slate-900">
                👋 Hello! Welcome to Brahmani Information.
              </p>
              <p className="text-slate-600">
                How can our web and software engineering team assist you with your project today?
              </p>
              <span className="block text-[10px] text-slate-400 text-right pt-0.5">
                Just now
              </span>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 px-1">
                Frequently Asked Topics:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left text-xs bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 p-2.5 rounded-xl border border-slate-200/90 hover:border-emerald-300 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="truncate pr-2">{prompt}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input & Direct WhatsApp Action */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your message..."
              className="flex-1 bg-slate-100 text-xs text-slate-800 rounded-xl px-3 py-2.5 border border-transparent focus:border-[#25D366] focus:bg-white focus:outline-none transition-colors"
            />
            <button
              onClick={() => handleSend()}
              className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm flex-shrink-0"
              aria-label="Send message to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Trigger Button Cluster */}
      <div className="flex items-center space-x-3">
        {/* Hover / Status Callout Pill */}
        {!isOpen && (
          <div 
            className={`hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white border border-slate-200/90 shadow-lg text-xs font-semibold text-slate-800 transition-all duration-200 ${
              showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat with us on WhatsApp</span>
          </div>
        )}

        {/* WhatsApp Icon Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat with Brahmani Information on WhatsApp"
          aria-expanded={isOpen}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_30px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        >
          {/* Active Online Ping Indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>

          {/* Official WhatsApp Vector Logo */}
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
};

