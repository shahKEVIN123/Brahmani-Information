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
        <div className="mb-4 w-[340px] sm:w-[360px] bg-[#151515] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_4px_16px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden animate-fadeIn">
          
          {/* Card Header (Authentic WhatsApp Theme) */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs overflow-hidden p-1">
                  <img
                    src="/brahmani-logo-cropped.png"
                    alt="Brahmani Information"
                    width="40"
                    height="40"
                    loading="lazy"
                    decoding="async"
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
          <div className="p-4 bg-[#111111] space-y-3 max-h-[280px] overflow-y-auto">
            {/* Incoming Message Bubble */}
            <div className="bg-[#1E1E1E] rounded-2xl rounded-tl-none p-3.5 shadow-xs border border-white/10 max-w-[90%] text-slate-200 text-xs leading-relaxed space-y-1">
              <p className="font-semibold text-white">
                👋 Hello! Welcome to Brahmani Information.
              </p>
              <p className="text-slate-400">
                How can our web and software engineering team assist you with your project today?
              </p>
              <span className="block text-[10px] text-slate-500 text-right pt-0.5">
                Just now
              </span>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 px-1">
                Frequently Asked Topics:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left text-xs bg-[#1A1A1A] hover:bg-emerald-950/40 text-slate-200 hover:text-emerald-300 p-2.5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="truncate pr-2">{prompt}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input & Direct WhatsApp Action */}
          <div className="p-3 bg-[#151515] border-t border-white/10 flex items-center space-x-2">
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
              className="flex-1 bg-[#1E1E1E] text-xs text-white rounded-xl px-3 py-2.5 border border-white/10 focus:border-[#25D366] focus:bg-[#252525] focus:outline-none transition-colors placeholder-slate-500"
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
            className={`hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#151515] border border-white/10 shadow-lg text-xs font-semibold text-white transition-all duration-200 ${
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
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white shadow-xs"></span>
          </span>

          {/* Official WhatsApp Vector Logo - High Definition & Pixel-Crisp */}
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <svg
              viewBox="0 0 308 308"
              className="w-8 h-8 drop-shadow-xs"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Solid White Speech Bubble */}
              <path
                fill="#FFFFFF"
                d="M227.904 81.976C202.736 56.802 168.74 42.85 132.211 42.756c-73.322 0-133.03 59.707-133.05 133.03-.007 23.47 6.12 46.335 17.787 66.442L3.04 305.627l97.359-25.536c19.356 10.558 41.133 16.115 63.285 16.124h.054c73.309 0 133.036-59.715 133.053-133.055.033-35.533-13.816-68.948-38.887-94.044z"
              />
              {/* Authentic Green Telephone Handset */}
              <path
                fill="#25D366"
                d="M203.043 185.34c-3.178-1.59-18.794-9.264-21.706-10.316-2.912-1.053-5.032-1.59-7.152 1.59-2.12 3.179-8.232 10.317-10.086 12.437-1.855 2.12-3.71 2.382-6.888.791-3.178-1.59-13.402-4.942-25.562-15.779-9.445-8.423-15.811-18.79-17.666-21.969-1.854-3.177-.199-4.897 1.393-6.488 1.43-1.43 3.178-3.71 4.768-5.564 1.59-1.855 2.12-3.178 3.178-5.3 1.053-2.121.526-3.975-.264-5.564-.791-1.59-7.152-17.244-9.794-23.606-2.583-6.15-5.226-5.317-7.152-5.416-1.854-.099-3.975-.099-6.101-.099-2.12 0-5.564.791-8.476 3.975-2.912 3.178-11.121 10.87-11.121 26.495 0 15.625 11.384 30.716 12.974 32.837 1.59 2.12 22.399 34.197 54.285 47.95 7.587 3.276 13.504 5.231 18.115 6.697 7.604 2.417 14.524 2.076 20.002 1.259 6.104-.913 18.794-7.685 21.437-15.105 2.643-7.42 2.643-13.784 1.854-15.107-.791-1.323-2.912-2.114-6.09-3.704z"
              />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
};

