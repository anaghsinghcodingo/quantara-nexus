
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Users, Zap, Code, Rocket, Briefcase } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const CareersView: React.FC<Props> = ({ onBack }) => {
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
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-20 reveal-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Join the <span className="text-blue-400">Founding Team.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Right now, Quantara Nexus is Harshit Yadav and Anagh Singh. We are two engineers with a massive vision, and we are looking for the first few pioneers to help us build the future of software in 2026.
            </p>
            <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
              <p className="text-blue-400 font-bold italic">
                "We aren't looking for employees. We are looking for owners, architects, and visionaries."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-10 reveal-up">Why Quantara?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              { icon: <Rocket className="w-8 h-8 text-blue-400" />, title: "Zero Bureaucracy", desc: "No middle management. Just pure engineering and direct impact on high-profile projects." },
              { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Hyper-Growth", desc: "Being part of the first 5 people in a startup founded in late 2025 means massive equity and growth." },
              { icon: <Code className="w-8 h-8 text-cyan-400" />, title: "Elite Tech Stack", desc: "Work with Gemini 3, Unreal Engine 5, and the latest in cloud-native infrastructure." },
              { icon: <Briefcase className="w-8 h-8 text-indigo-400" />, title: "Flexible Work", desc: "We value output over hours. Work from where you are most productive." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-12 rounded-[2.5rem] reveal-up border-blue-500/20 bg-blue-500/5">
            <h2 className="text-3xl font-bold mb-6">Open Roles</h2>
            <p className="text-slate-400 mb-10">We are currently scouting for the following founding positions:</p>
            
            <div className="space-y-6">
              {[
                "Senior Systems Engineer (C++ / Rust)",
                "AI Researcher (Focus on Agents & LLMs)",
                "Full-Stack Product Engineer",
                "Technical Game Artist (Unreal Engine)"
              ].map((role, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:border-blue-500/40 transition-all cursor-pointer">
                  <span className="font-bold text-lg group-hover:text-blue-400 transition-colors">{role}</span>
                  <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-500 text-sm mb-6">Don't see your role? We always talk to elite talent.</p>
              <a href="mailto:careers@quantara.io" className="text-blue-400 font-bold hover:underline">careers@quantara.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersView;
