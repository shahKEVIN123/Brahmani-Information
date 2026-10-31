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
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#151515] shadow-xs"></span>
          </span>

          {/* Official WhatsApp Vector Logo */}
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 drop-shadow-xs"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Solid White Speech Bubble */}
              <path
                d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.954.562 3.842 1.624 5.485L2 22l4.633-1.597A9.957 9.957 0 0 0 12.004 22C17.528 22 22 17.528 22 12.004S17.528 2 12.004 2z"
                fill="#FFFFFF"
              />
              {/* Authentic WhatsApp Green Phone Receiver */}
              <path
                d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.586-.494-.506-.678-.515-.176-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376s-1.055 1.03-1.055 2.512 1.08 2.914 1.231 3.115c.15.201 2.126 3.247 5.15 4.556.719.311 1.28.497 1.718.636.723.23 1.381.197 1.902.12.58-.087 1.78-.727 2.032-1.43.251-.703.251-1.305.176-1.43-.076-.125-.276-.2-.577-.35z"
                fill="#25D366"
              />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
};

