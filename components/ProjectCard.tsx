import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants.tsx';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getIconForLink = (type: string) => {
    switch (type) {
      case 'App Store':
        return <Icons.AppStore />;
      case 'Play store':
        return <Icons.PlayStore />;
      default:
        return <Icons.Github />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 hover:translate-y-[-8px] transition-all duration-300 group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-500/10 p-3 rounded-xl">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
        </div>
        <div className="flex gap-2">
          {project.links?.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-all p-2 rounded-lg border border-transparent hover:border-white/10"
              title={link.type}
            >
              {getIconForLink(link.type)}
            </a>
          ))}
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-slate-800/50 border border-white/5 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;