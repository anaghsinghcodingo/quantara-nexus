
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Target, Lightbulb, TrendingUp, UserCheck } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const AboutView: React.FC<Props> = ({ onBack }) => {
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
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-20 reveal-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">THE GENESIS</span>
            <h1 className="title-architect text-6xl md:text-8xl flex flex-col mb-8">
              <span>The Quantara</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Vision.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-sans font-medium">
              Founded in <span className="text-blue-400 font-bold">September 2025</span>, Quantara Nexus is an emerging leader in high-end software engineering. In this new year of <span className="text-white font-bold">2026</span>, we are focused on scaling our three core pillars.
            </p>
          </div>

          <div className="mb-10 reveal-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">CORE STAFF</span>
            <h2 className="title-architect text-5xl md:text-7xl mb-10">Leadership.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-8 rounded-3xl reveal-up border-white/5">
              <div className="mb-6 p-3 bg-blue-600/10 text-blue-400 rounded-2xl w-fit">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Harshit Yadav</h3>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">Founder</p>
              <p className="text-slate-400 text-sm leading-relaxed font-sans font-medium">
                Leading the strategic direction and engineering ethos of Quantara Nexus. Focus is on pushing the boundaries of what software can achieve.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl reveal-up border-white/5" style={{ transitionDelay: '150ms' }}>
              <div className="mb-6 p-3 bg-cyan-600/10 text-cyan-400 rounded-2xl w-fit">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Anagh Singh</h3>
              <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-4">Co-Founder</p>
              <p className="text-slate-400 text-sm leading-relaxed font-sans font-medium">
                Architecting the core systems that power our Studio of Games and AI initiatives. Ensures technical excellence in every line of code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Target className="w-8 h-8 text-blue-400" />, title: "Precision", desc: "Built on absolute precision and engineering rigor." },
              { icon: <Lightbulb className="w-8 h-8 text-cyan-400" />, title: "Innovation", desc: "Proprietary R&D that sets our systems apart." },
              { icon: <TrendingUp className="w-8 h-8 text-indigo-400" />, title: "Scale", desc: "Focusing on sustainable and impactful digital growth." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl reveal-up border-white/5" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="mb-6 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-sans font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            <section className="reveal-up">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">HISTORY</span>
              <h2 className="title-architect text-5xl md:text-7xl mb-8">The Journey.</h2>
              <p className="text-slate-400 leading-relaxed font-sans font-medium text-lg">
                Quantara Nexus was born from a shared passion for high-performance systems and interactive media. Our specialized engineering firm handles games, AI, and enterprise software under one unified roof with a focus on quality.
              </p>
            </section>

            <section className="bg-blue-600/5 p-12 rounded-3xl border border-blue-500/10 reveal-up text-center">
              <p className="text-xl text-slate-300 italic leading-relaxed mb-6 font-sans font-medium">
                "Quality is not an act, it is a habit."
              </p>
              <p className="font-black text-blue-400 tracking-[0.3em] text-xs uppercase">— QUANTARA NEXUS</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
