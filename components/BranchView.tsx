
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Check, ArrowRight, Zap, Target, ShieldCheck, Gamepad2, Cpu, BrainCircuit, Network, Fingerprint, Database, Terminal as TerminalIcon, Activity, Box, Layout, Layers, Shield, User, Palette, Sparkles, MousePointer2, Layers2, Film, Clapperboard, Video, PlayCircle, GraduationCap, BookOpen, Atom, Calculator, Languages } from 'lucide-react';
import { Branch } from '../types';
import { ICONS } from '../constants';

interface Props {
  branch: Branch;
  onBack: () => void;
  onNavigate: (view: string) => void;
}

const BranchView: React.FC<Props> = ({ branch, onBack, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isGames = branch.id === 'games';
  const isAI = branch.id === 'ai';
  const isSoftware = branch.id === 'software';
  const isDesign = branch.id === 'design';
  const isMedia = branch.id === 'media';
  const isEducation = branch.id === 'education';

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
  }, [branch.id]);

  if (isEducation) {
    return (
      <div className="pt-32 pb-24 relative overflow-hidden bg-slate-950" ref={containerRef}>
        {/* Educative Background Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Floating Symbols for Education */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden select-none font-mono text-white flex flex-wrap gap-20 p-20 justify-around">
           {[...Array(20)].map((_, i) => (
             <div key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 200}ms`, animationDuration: `${3 + (i % 3)}s` }}>
                {['∑', 'π', 'Ω', '∫', 'H₂O', 'α', 'β', 'λ', 'अ', 'A', 'B', 'C'][i % 12]}
             </div>
           ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-[10px] mb-8 tracking-[0.3em] uppercase">
                <User className="w-3.5 h-3.5" />
                EDUCATION LEAD: ANAGH SINGH
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none uppercase text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600">{branch.name}</span>
              </h1>
              <p className="text-xl md:text-3xl font-bold mb-10 text-emerald-500/80 uppercase tracking-[0.2em] italic">
                // {branch.tagline}
              </p>
              <div className="glass-card p-10 rounded-[2rem] border-white/5 mb-12 bg-white/[0.02] border-l-4 border-l-emerald-500">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-sans font-medium">
                  {branch.description} From complex algorithms to the beauty of literature and science, we provide the tools for true academic and technical mastery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 text-white font-black rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest active:scale-95"
                >
                  Start Learning
                  <BookOpen className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all flex items-center justify-center text-lg uppercase tracking-widest"
                >
                  Courses
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative reveal-up" style={{ transitionDelay: '300ms' }}>
               <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative glass-card rounded-[3rem] border-white/10 p-12 overflow-hidden bg-black/40">
                     <div className="grid grid-cols-2 gap-8">
                        {[
                          { icon: <Calculator className="w-8 h-8" />, label: "Maths", sub: "Calculus & Logic" },
                          { icon: <Atom className="w-8 h-8" />, label: "Science", sub: "Physics & Chemistry" },
                          { icon: <Languages className="w-8 h-8" />, label: "Languages", sub: "Hindi & English" },
                          { icon: <Cpu className="w-8 h-8" />, label: "Tech", sub: "Software Systems" }
                        ].map((item, idx) => (
                          <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all cursor-default">
                             <div className="text-emerald-400 mb-4">{item.icon}</div>
                             <h4 className="text-xl font-bold text-white mb-1">{item.label}</h4>
                             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{item.sub}</p>
                          </div>
                        ))}
                     </div>
                     
                     <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black">AS</div>
                           <div>
                              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Academic_Dean</p>
                              <p className="text-xs text-white font-black uppercase">Anagh Singh</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Nexus_Link</p>
                           <p className="text-xs text-emerald-500 font-black uppercase animate-pulse">Status: Learning</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
            {branch.services.map((service, idx) => (
              <div key={idx} className="reveal-up p-8 glass-card rounded-[2rem] border-white/5 hover:border-emerald-500/40 transition-all group bg-white/[0.01]" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mb-6 p-4 rounded-xl bg-emerald-600/10 text-emerald-400 w-fit group-hover:rotate-12 transition-all border border-emerald-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="font-display text-sm font-black text-white mb-4 uppercase tracking-[0.2em]">{service}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  Deep dives into {service.toLowerCase()} crafted for high retention and industrial application.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isMedia) {
    return (
      <div className="pt-32 pb-24 relative overflow-hidden bg-black" ref={containerRef}>
        {/* Cinematic Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 blur-[180px] rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 blur-[180px] rounded-full pointer-events-none"></div>
        
        {/* Moving Film Strip Overlay (Simulated) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden flex flex-col gap-10">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="flex gap-10 whitespace-nowrap animate-marquee">
                {[...Array(20)].map((_, j) => (
                  <Clapperboard key={j} className="w-20 h-20 text-white" />
                ))}
             </div>
           ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 font-bold text-[10px] mb-8 tracking-[0.3em] uppercase">
                <User className="w-3.5 h-3.5" />
                MEDIA LEAD: ANAGH SINGH
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none uppercase text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">{branch.name}</span>
              </h1>
              <p className="text-xl md:text-3xl font-bold mb-10 text-white/80 font-display uppercase tracking-[0.2em] italic">
                // {branch.tagline}
              </p>
              <div className="glass-card p-10 rounded-[2rem] border-white/5 mb-12 bg-white/[0.02] border-l-4 border-l-red-600">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-sans font-medium">
                  {branch.description} We translate complex technological concepts into high-impact visual experiences that captivate and convert.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 py-5 bg-gradient-to-r from-red-600 to-orange-600 hover:scale-105 text-white font-black rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest active:scale-95"
                >
                  Brief Production
                  <Video className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all flex items-center justify-center text-lg uppercase tracking-widest"
                >
                  Showreel
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative reveal-up" style={{ transitionDelay: '300ms' }}>
               <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative glass-card rounded-[3rem] border-white/10 aspect-video overflow-hidden flex items-center justify-center bg-black/60">
                     <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"></div>
                     <PlayCircle className="w-24 h-24 text-white opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer relative z-10" />
                     
                     {/* Frame Indicators */}
                     <div className="absolute top-6 left-6 font-mono text-[10px] text-red-500 font-bold uppercase tracking-widest">REC ● 4K 60FPS</div>
                     <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/40">ISO 400 // f/2.8</div>
                  </div>
               </div>
               
               {/* Floating Stats */}
               <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl border-white/10 bg-black/80 flex items-center gap-4 reveal-up" style={{ transitionDelay: '500ms' }}>
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">A</div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Current_Director</p>
                    <p className="text-xs text-white font-black uppercase">Anagh Singh</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
            {branch.services.map((service, idx) => (
              <div key={idx} className="reveal-up p-8 glass-card rounded-[2rem] border-white/5 hover:border-red-500/40 transition-all group bg-white/[0.01]" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mb-6 p-4 rounded-xl bg-red-600/10 text-red-400 w-fit group-hover:scale-110 transition-all border border-red-500/20">
                  <Film className="w-6 h-6" />
                </div>
                <h4 className="font-display text-sm font-black text-white mb-4 uppercase tracking-[0.2em]">{service}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  Crafting high-end {service.toLowerCase()} that defines brand authority and presence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isDesign) {
    return (
      <div className="pt-32 pb-24 relative overflow-hidden bg-slate-950" ref={containerRef}>
        {/* Colorful Canvas Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-full text-pink-400 font-bold text-[10px] mb-8 tracking-[0.3em] uppercase">
                <User className="w-3.5 h-3.5" />
                DESIGN LEAD: ANAGH SINGH
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none uppercase text-white font-serif-elegant">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-orange-500">{branch.name}</span>
              </h1>
              <p className="text-xl md:text-3xl font-medium mb-10 text-slate-300 font-display italic">
                "{branch.tagline}"
              </p>
              <div className="glass-card p-10 rounded-[3rem] border-white/5 mb-12 bg-white/[0.02] relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 blur-3xl group-hover:bg-pink-500/20 transition-all"></div>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-sans font-medium relative z-10">
                  {branch.description} We believe that every pixel should serve a purpose and every interaction should tell a story.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 py-5 bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 text-white font-black rounded-3xl shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest active:scale-95"
                >
                  Start Creative Brief
                  <Sparkles className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-3xl border border-white/10 transition-all flex items-center justify-center text-lg uppercase tracking-widest"
                >
                  Visual Works
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="relative aspect-square">
                {/* Visual Figma Mockup representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-[4rem] blur-2xl"></div>
                <div className="relative h-full w-full glass-card rounded-[4rem] border-white/10 p-1 flex flex-col overflow-hidden">
                  <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                     </div>
                     <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">FIGMA_WORKSPACE // QUANTARA_V2</span>
                  </div>
                  <div className="flex-1 p-8 grid grid-cols-12 gap-6">
                     <div className="col-span-3 space-y-4">
                        <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                        <div className="h-4 bg-white/5 rounded-full w-1/2"></div>
                        <div className="space-y-2 pt-4">
                           {[...Array(4)].map((_, i) => (
                             <div key={i} className="flex items-center gap-2">
                               <Layers2 className="w-3 h-3 text-slate-600" />
                               <div className="h-2 bg-white/5 rounded-full flex-1"></div>
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="col-span-9 bg-black/40 rounded-3xl border border-white/5 relative flex flex-col items-center justify-center overflow-hidden">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 opacity-20 blur-2xl animate-pulse"></div>
                        <Palette className="w-20 h-20 text-white/10 absolute" />
                        
                        {/* Figma Cursor */}
                        <div className="absolute top-1/3 left-1/4 animate-bounce">
                           <MousePointer2 className="w-6 h-6 text-pink-500 fill-pink-500" />
                           <div className="ml-4 mt-1 px-2 py-0.5 bg-pink-500 text-[8px] text-white font-bold rounded">ANAGH_SINGH</div>
                        </div>
                        
                        <div className="absolute bottom-8 left-8 right-8 h-24 glass-card rounded-2xl border-white/5 p-4 flex gap-4 items-center">
                           <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl"></div>
                           <div className="flex-1 space-y-2">
                              <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                              <div className="h-2 bg-white/5 rounded-full w-1/3"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
            {branch.services.map((service, idx) => (
              <div key={idx} className="reveal-up p-8 glass-card rounded-[2.5rem] border-white/5 hover:border-pink-500/40 transition-all group bg-white/[0.01] hover:bg-white/[0.03]" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 text-pink-400 w-fit group-hover:scale-110 transition-all border border-pink-500/20">
                  <Palette className="w-6 h-6" />
                </div>
                <h4 className="font-display text-sm font-black text-white mb-4 uppercase tracking-[0.15em]">{service}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  Curating {service.toLowerCase()} that resonates with human emotion and technical logic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isAI) {
    return (
      <div className="pt-32 pb-24 relative overflow-hidden" ref={containerRef}>
        <div className="neural-bg"></div>
        <div className="absolute top-0 right-0 w-64 h-full opacity-5 pointer-events-none font-mono-tech text-[8px] overflow-hidden leading-tight whitespace-nowrap select-none pt-40 pr-10">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="mb-1">
              [SYSTEM_LOG_{i}] NODE_ACTIVE: 0x{Math.random().toString(16).slice(2, 6).toUpperCase()} // PACKET_RECV // LATENCY: 0.0{Math.floor(Math.random() * 9)}ms
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            <div className="lg:col-span-7 reveal-up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-400 font-mono-tech text-[10px] mb-8 tracking-[0.3em] uppercase">
                <Activity className="w-3 h-3 animate-pulse" />
                QUANTARA_AI // CORE_INIT // STABLE
              </div>
              <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-200 to-indigo-400">
                {branch.name}
              </h1>
              <p className="font-mono-tech text-lg md:text-xl text-violet-500/80 mb-8 tracking-wider uppercase font-bold">
                // {branch.tagline}
              </p>
              <div className="glass-card border-l-4 border-l-violet-600 p-8 rounded-2xl mb-12 bg-slate-900/60 max-w-2xl border-white/5">
                <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-sans font-medium">
                  {branch.description} We are pioneering high-efficiency neural architectures for the next generation of industrial automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 py-5 bg-violet-600 hover:bg-violet-500 text-white font-black rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest font-mono-tech active:scale-95"
                >
                  Initiate Build
                  <TerminalIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-xl border border-white/10 transition-all flex items-center justify-center text-lg uppercase tracking-widest font-mono-tech"
                >
                  Neural_Repos
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="glass-card rounded-[3.5rem] p-10 border-violet-500/20 relative overflow-hidden group bg-black/40">
                <div className="absolute top-0 right-0 p-6 font-mono-tech text-[9px] text-slate-700 tracking-widest uppercase">SYSCALL: 0x4F92</div>
                <div className="space-y-8">
                  {[
                    { label: "NEURAL_DENSITY", val: "99.4%", pct: "w-[99%]" },
                    { label: "INFERENCE_DELAY", val: "0.22ms", pct: "w-[94%]" },
                    { label: "SYMMETRY_FACTOR", val: "1.00", pct: "w-[100%]" }
                  ].map((s, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between font-mono-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                        <span>{s.label}</span>
                        <span className="text-violet-400">{s.val}</span>
                      </div>
                      <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                        <div className={`h-full bg-violet-500 rounded-full ${s.pct} shadow-[0_0_15px_rgba(139,92,246,0.6)]`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-10 border-t border-white/5 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-violet-500/5 border border-violet-500/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-violet-500/10 blur-xl"></div>
                    <Cpu className="w-10 h-10 text-violet-400 relative z-10" />
                  </div>
                  <div>
                    <p className="font-mono-tech text-xs text-white uppercase font-black tracking-widest mb-1">Architecture_Audit</p>
                    <p className="font-mono-tech text-[10px] text-slate-600 uppercase tracking-widest">Core_Link: Established</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
            {branch.services.map((service, idx) => (
              <div key={idx} className="reveal-up p-8 glass-card rounded-[2.5rem] border-white/5 hover:border-violet-500/40 transition-all group bg-slate-900/30" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mb-6 p-4 rounded-xl bg-violet-500/5 text-violet-400 w-fit group-hover:bg-violet-500/20 transition-all border border-white/5">
                  <Box className="w-6 h-6" />
                </div>
                <h4 className="font-mono-tech text-xs font-black text-white mb-4 uppercase tracking-[0.2em]">{service}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  Optimizing complex {service.toLowerCase()} pipelines for distributed compute nodes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isSoftware) {
    return (
      <div className="pt-32 pb-24 relative overflow-hidden bg-slate-950" ref={containerRef}>
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
        
        {/* Coordinate floating labels for blueprint effect */}
        <div className="absolute top-40 left-10 font-mono-tech text-[8px] text-blue-500/30 select-none">X: 104.22 // Y: 92.01</div>
        <div className="absolute bottom-40 right-10 font-mono-tech text-[8px] text-blue-500/30 select-none">X: 882.11 // Y: -12.44</div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-4 px-5 py-2 bg-blue-600/10 border border-blue-500/30 rounded-lg text-blue-400 font-mono-tech text-[10px] mb-8 tracking-[0.3em] uppercase font-black">
                <User className="w-3.5 h-3.5" />
                CO-FOUNDER LEAD: ANAGH SINGH
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none uppercase text-white font-game glow-text-game">
                {branch.name}
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-8 text-blue-500 uppercase tracking-[0.3em] font-mono-tech">
                // {branch.tagline}
              </p>
              <div className="glass-card p-10 rounded-[2.5rem] border-white/5 mb-12 bg-slate-900/40 border-l-4 border-l-blue-600">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-sans font-medium">
                  {branch.description} We architect high-performance web applications and distributed systems with industrial-grade structural integrity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest active:scale-95 font-game"
                >
                  Consult Architecture
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all flex items-center justify-center text-lg uppercase tracking-widest font-game"
                >
                  Repositories
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6 reveal-up" style={{ transitionDelay: '200ms' }}>
              <div className="glass-card p-10 rounded-[3.5rem] border-blue-500/20 bg-black/40 col-span-2 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 font-mono-tech text-[8px] text-blue-900">TYPE: SYSTEM_BLUEPRINT</div>
                 <div className="flex items-center gap-5 mb-10">
                    <div className="p-4 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/20"><Layers className="w-7 h-7" /></div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-widest text-white font-game">Engineering Core</h3>
                      <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest font-mono-tech">Structural_Integrity_Audit: Passed</p>
                    </div>
                 </div>
                 <div className="space-y-5 font-mono-tech text-[10px] text-slate-500">
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> CORE_STACK</span>
                      <span className="text-blue-400 font-bold">REACT / GO / K8S</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> UPTIME_ENGINE</span>
                      <span className="text-white">99.99%</span>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> API_SYNC_RATE</span>
                      <span className="text-white">1.4M REQ/S</span>
                    </div>
                 </div>
              </div>
              <div className="glass-card p-8 rounded-[3rem] border-blue-500/10 flex flex-col items-center justify-center text-center bg-slate-900/40">
                 <div className="text-blue-500 mb-2 animate-pulse"><ShieldCheck className="w-8 h-8" /></div>
                 <p className="text-3xl font-black text-white tracking-tighter font-game">SECURE</p>
                 <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold font-mono-tech">BY_DESIGN</p>
              </div>
              <div className="glass-card p-8 rounded-[3rem] border-blue-500/10 flex flex-col items-center justify-center text-center bg-slate-900/40">
                 <div className="text-blue-400 mb-2"><Activity className="w-8 h-8" /></div>
                 <p className="text-3xl font-black text-white tracking-tighter font-game">100%</p>
                 <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold font-mono-tech">SCALABLE</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
            {branch.services.map((service, idx) => (
              <div key={idx} className="reveal-up p-8 glass-card rounded-[2.5rem] border-blue-500/10 hover:border-blue-500/40 transition-all group bg-slate-900/20" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mb-6 p-4 rounded-xl bg-blue-600/5 text-blue-400 w-fit group-hover:bg-blue-600/20 transition-all border border-blue-500/10">
                  <Layout className="w-6 h-6" />
                </div>
                <h4 className="font-mono-tech text-xs font-black text-white mb-4 uppercase tracking-[0.2em]">{service}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  Architecting robust {service.toLowerCase()} modules for modern enterprise deployments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`pt-32 pb-24 relative ${isGames ? 'font-game' : ''}`} ref={containerRef}>
      {isGames && <div className="scanline-overlay"></div>}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh] mb-32">
          <div className="reveal-up">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${branch.color} text-white mb-8 shadow-2xl ${isGames ? 'shadow-blue-500/40 animate-pulse' : ''}`}>
              {ICONS[branch.icon as keyof typeof ICONS]}
            </div>
            <h1 className={`text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] ${isGames ? 'glow-text-game' : ''}`}>
              {branch.name}
            </h1>
            <p className={`text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${branch.color}`}>
              {branch.tagline}
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-sans font-medium">
              {branch.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className={`px-10 py-5 bg-gradient-to-r ${branch.color} text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 text-lg ${isGames ? 'game-border uppercase' : ''}`}
              >
                Inquire Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('projects')}
                className={`px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all flex items-center justify-center text-lg ${isGames ? 'uppercase tracking-widest' : ''}`}
              >
                Portfolio
              </button>
            </div>
          </div>

          <div className="relative reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className={`absolute -inset-20 bg-gradient-to-br ${branch.color} opacity-10 blur-[120px] rounded-full`}></div>
            <div className={`relative glass-card rounded-[3.5rem] p-6 border-white/5 shadow-2xl overflow-hidden aspect-square flex items-center justify-center`}>
               <div className={`w-80 h-80 rounded-full bg-gradient-to-br ${branch.color} opacity-20 blur-3xl absolute`}></div>
               <div className={`scale-[5] text-white/10 animate-pulse`}>
                 {ICONS[branch.icon as keyof typeof ICONS]}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchView;
