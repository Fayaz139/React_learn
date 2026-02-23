import React from 'react';
import { MapPin, Clock, DollarSign, Bookmark } from 'lucide-react';

const JobCard = ({ job }) => {
  const { title, company, location, type, salary, logo, postedDate } = job;

  return (
    <div className="group w-full bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
      <div>
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain bg-slate-50 border border-slate-100 p-1" 
            />
            <div className="min-w-0"> {/* Prevents text overflow */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                {title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">{company}</p>
            </div>
          </div>
          <button className="p-2 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors shrink-0">
            <Bookmark size={18} />
          </button>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="flex items-center gap-1 px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] sm:text-xs font-semibold">
            <MapPin size={12} /> {location}
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] sm:text-xs font-semibold">
            <Clock size={12} /> {type}
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] sm:text-xs font-semibold">
            <DollarSign size={12} /> {salary}
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
          {postedDate}
        </span>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all active:scale-95">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;