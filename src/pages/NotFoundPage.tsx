import React from 'react';
import { ArrowLeft, Home, Layers, Briefcase, Mail } from 'lucide-react';
import { Link } from '../router/Router';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono font-bold text-[#005EDA] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          404 // ROUTE NOT FOUND
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display">
          Page Not Found.
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          The requested URL does not match any active route on the Brahmani Information corporate website.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center justify-center space-x-6 text-xs text-slate-500">
          <Link to="/work" className="hover:text-[#005EDA] transition-colors">
            Work
          </Link>
          <span>•</span>
          <Link to="/process" className="hover:text-[#005EDA] transition-colors">
            Process
          </Link>
          <span>•</span>
          <Link to="/technology" className="hover:text-[#005EDA] transition-colors">
            Technology
          </Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#005EDA] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
