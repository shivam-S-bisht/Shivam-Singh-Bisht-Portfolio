
import React from 'react';
import { Experience } from '../types';

const ExperienceItem: React.FC<{ exp: Experience }> = ({ exp }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800 group-last:bottom-8 group-hover:bg-blue-500/50 transition-colors" />
      <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-slate-700 group-hover:bg-blue-500 border-2 border-slate-950 transition-all scale-100 group-hover:scale-125" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
          <p className="text-blue-400 font-medium">{exp.company}</p>
        </div>
        <div className="text-sm font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start">
          {exp.period}
        </div>
      </div>
      <ul className="space-y-3">
        {exp.points.map((point, idx) => (
          <li key={idx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
            <span className="text-blue-500 mt-1.5 shrink-0">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
