
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Logo3D from './Logo3D';

interface Props {
  onExplore: () => void;
}

const Hero: React.FC<Props> = ({ onExplore }) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* 3D Background Element */}
      <Logo3D />
      
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] mb-12 reveal-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            ESTABLISHED SEPT 2025 // 2026 ROADMAP
          </div>
          
          <h1 className="title-architect text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl flex flex-col items-center mb-12 reveal-up" style={{ transitionDelay: '100ms' }}>
            <span className="leading-[0.8] tracking-tight text-white">Precision.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 leading-[0.8] tracking-tight">Code.</span>
            <span className="leading-[0.8] tracking-tight text-white">Innovation.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-lg mb-14 font-sans px-4 reveal-up" style={{ transitionDelay: '200ms' }}>
            Quantara Nexus is a high-growth startup redefining gaming, intelligence, and software infrastructure. Built for performance, security, and the future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-up px-6" style={{ transitionDelay: '300ms' }}>
            <button 
              onClick={onExplore}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 text-lg shadow-2xl shadow-blue-500/20 active:scale-95 transition-all"
            >
              Our Expertise
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-slate-500 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>Modern</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>Agile</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
