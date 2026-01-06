
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BRANCHES, ICONS } from '../constants';

interface Props {
  onBack: () => void;
  onExploreBranch: (id: string) => void;
}

const ExpertiseView: React.FC<Props> = ({ onBack, onExploreBranch }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 pb-24 overflow-x-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-medium reveal-up"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="mb-20 reveal-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">CAPABILITIES</span>
            <h1 className="title-architect text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl flex flex-col mb-8">
              <span className="leading-tight">Technical</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-tight">Expertise.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 max-w-3xl leading-relaxed font-sans">
              Quantara Nexus operates at the intersection of gaming, artificial intelligence, and enterprise software. Our multidisciplinary approach allows us to solve complex technical challenges that others shy away from.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {BRANCHES.map((branch, idx) => (
              <div 
                key={branch.id} 
                className="group glass-card rounded-[2.5rem] p-8 md:p-10 reveal-up flex flex-col lg:flex-row gap-8 lg:gap-12 items-center hover:border-blue-500/30 transition-all duration-500"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-3xl bg-gradient-to-br ${branch.color} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <div className="scale-[1.5] md:scale-[1.8]">{ICONS[branch.icon as keyof typeof ICONS]}</div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{branch.name}</h3>
                  <p className="text-blue-400 font-bold mb-4 md:mb-6 tracking-wide uppercase text-[10px] md:text-xs">{branch.tagline}</p>
                  <p className="text-slate-400 mb-6 md:mb-8 max-w-2xl leading-relaxed font-sans text-sm md:text-base">
                    {branch.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                    {branch.services.map((service, i) => (
                      <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-900/50 border border-white/5 rounded-full text-[9px] md:text-xs font-mono text-slate-500">
                        {service.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <button 
                    onClick={() => onExploreBranch(branch.id)}
                    className="w-full lg:w-auto px-8 py-4 bg-white/5 hover:bg-blue-600 hover:text-white text-blue-400 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseView;
