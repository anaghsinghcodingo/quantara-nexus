
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Branch } from '../types';
import { ICONS } from '../constants';

interface Props {
  branch: Branch;
  onExplore: () => void;
}

const BranchCard: React.FC<Props> = ({ branch, onExplore }) => {
  return (
    <div className="group glass-card rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-8px] hover:border-blue-500/30">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${branch.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        {ICONS[branch.icon as keyof typeof ICONS]}
      </div>
      
      <h3 className="text-2xl font-bold mb-4">{branch.name}</h3>
      <p className="text-slate-400 mb-8 line-clamp-3">
        {branch.description}
      </p>
      
      <div className="space-y-3 mb-10">
        {branch.services.slice(0, 3).map((service, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs font-mono text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
            {service.toUpperCase()}
          </div>
        ))}
      </div>
      
      <button 
        onClick={onExplore}
        className="flex items-center gap-2 text-blue-400 font-bold group-hover:gap-4 transition-all"
      >
        Learn More
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BranchCard;
