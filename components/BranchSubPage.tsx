
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Send, CheckCircle2, User, Globe, Code, Zap, ExternalLink, Tag, Lock, Brain, Loader2, Terminal, ShieldAlert, Cpu, Fingerprint, Activity, Network, TerminalSquare, Server, Globe2, ShieldCheck, Layers, Layout, Palette, Sparkles, Wand2, MousePointer2, Film, Clapperboard, Video, Play, GraduationCap, BookOpen, Library } from 'lucide-react';
import { Branch } from '../types';
import { ICONS } from '../constants';

interface Props {
  branch: Branch;
  view: 'about' | 'contact' | 'projects';
  onNavigate: (view: string) => void;
}

const BranchSubPage: React.FC<Props> = ({ branch, view, onNavigate }) => {
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
  }, [branch.id, view]);

  const renderProjects = () => {
    if (branch.projects.length === 0) {
      return (
        <div className="max-w-6xl mx-auto py-20 reveal-up">
           <div className={`glass-card rounded-[4rem] p-12 md:p-24 border-white/5 relative overflow-hidden 
            ${isAI ? 'bg-black/60 border-violet-500/20' : 
              isSoftware ? 'bg-slate-950 border-blue-600/20' : 
              isDesign ? 'bg-slate-950 border-pink-500/20' : 
              isMedia ? 'bg-black border-red-600/20' : 
              isEducation ? 'bg-slate-950 border-emerald-600/20' : 'bg-slate-900/40'}`}>
              
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 
                ${isAI ? 'bg-gradient-to-r from-transparent via-violet-500 to-transparent shadow-[0_0_30px_rgba(139,92,246,0.3)]' : 
                  isSoftware ? 'bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_30px_rgba(37,99,235,0.3)]' : 
                  isDesign ? 'bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_30px_rgba(244,63,94,0.3)]' :
                  isMedia ? 'bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_30px_rgba(220,38,38,0.3)]' :
                  isEducation ? 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_30px_rgba(16,185,129,0.3)]' :
                  'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent'}`}></div>
              
              <div className="flex flex-col items-center text-center">
                <div className={`inline-flex p-8 rounded-2xl 
                  ${isAI ? 'bg-violet-500/5 border border-violet-500/20 text-violet-400 mb-10 shadow-[0_0_50px_rgba(139,92,246,0.1)]' : 
                    isSoftware ? 'bg-blue-600/5 border border-blue-500/20 text-blue-500 mb-10' : 
                    isDesign ? 'bg-pink-500/5 border border-pink-500/20 text-pink-500 mb-10' :
                    isMedia ? 'bg-red-600/5 border border-red-500/20 text-red-500 mb-10' :
                    isEducation ? 'bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 mb-10' :
                    'bg-white/5 border border-white/10 text-slate-400'} mb-10`}>
                  {isAI ? <TerminalSquare className="w-20 h-20" /> : 
                   isSoftware ? <Layers className="w-20 h-20" /> : 
                   isDesign ? <Palette className="w-20 h-20" /> : 
                   isMedia ? <Clapperboard className="w-20 h-20" /> : 
                   isEducation ? <Library className="w-20 h-20" /> : <Lock className="w-16 h-16" />}
                </div>
                
                <h2 className={`text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter 
                  ${isAI ? 'font-mono-tech text-white' : 
                    isSoftware ? 'font-game text-white glow-text-game' : 
                    isDesign ? 'font-serif-elegant text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400' : 
                    isMedia ? 'font-display text-white italic tracking-widest' : 
                    isEducation ? 'text-white italic' : ''}`}>
                  {isEducation ? 'No Courses Launched Yet.' : isAI || isSoftware || isDesign || isMedia ? 'No Projects build till now.' : 'Stealth Phase'}
                </h2>
                
                <p className={`text-slate-400 font-sans max-w-2xl mx-auto mb-16 text-lg md:text-xl leading-relaxed font-medium ${isAI || isSoftware || isDesign || isMedia || isEducation ? 'opacity-80' : ''}`}>
                  {isAI 
                    ? 'Our repository is currently being provisioned for initial public deployment. All active R&D nodes are locked for internal system testing.' 
                    : isSoftware 
                    ? 'The Software Works development vault is currently undergoing architectural auditing by Co-Founder Anagh Singh. Initial project releases expected in early 2026.'
                    : isDesign
                    ? 'Quantara Design is currently sketching the future. Anagh Singh and the creative team are refining the Figma asset library. First case studies are under embargo.'
                    : isMedia
                    ? 'Quantara Media is currently in post-production. Directed by Anagh Singh, the first wave of high-fidelity narratives is being mastered for 2026 release.'
                    : isEducation
                    ? 'Quantara Education is currently drafting the 2026 Curriculum. Led by Anagh Singh, elite tutorials for software tech and academic subjects are being recorded and vetted.'
                    : 'The project repository is currently restricted to internal members.'}
                </p>
                
                {(isAI || isSoftware || isDesign || isMedia || isEducation) && (
                  <div className={`w-full max-w-4xl p-10 bg-black/40 rounded-3xl border border-white/5 font-mono-tech text-left space-y-4 
                    ${isSoftware ? 'border-blue-500/10' : isDesign ? 'border-pink-500/10' : isMedia ? 'border-red-500/10' : isEducation ? 'border-emerald-500/10' : ''}`}>
                    <div className={`flex items-center gap-4 border-b border-white/5 pb-4 mb-6 
                      ${isSoftware ? 'text-blue-500/60' : isDesign ? 'text-pink-500/60' : isMedia ? 'text-red-600/60' : isEducation ? 'text-emerald-500/60' : 'text-violet-500/60'}`}>
                      {isDesign ? <Sparkles className="w-4 h-4" /> : isMedia ? <Video className="w-4 h-4" /> : isEducation ? <BookOpen className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
                      <span className="text-[10px] uppercase tracking-[0.4em] font-black">
                        {isSoftware ? 'ARCHITECTURE_LOGS' : isDesign ? 'CREATIVE_MANIFESTO' : isMedia ? 'PRODUCTION_SLATE' : isEducation ? 'ACADEMIC_SYLLABUS' : 'SYSTEM_DIAGNOSTICS'}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                       <p className="flex justify-between text-[11px]"><span className="text-slate-600">{isEducation ? 'COURSE_MANIFEST_ID:' : 'MANIFEST_ID:'}</span> <span className="text-slate-300">{isEducation ? '0xQN_ED_2026' : isMedia ? '0xQN_MD_2026' : isDesign ? '0xQN_DS_2026' : isSoftware ? '0xQN_SW_2026' : '0xQN_AI_2026'}</span></p>
                       <p className="flex justify-between text-[11px]"><span className="text-slate-600">{isEducation ? 'ACADEMIC_LEAD:' : 'DIRECTOR:'}</span> <span className={`${isSoftware ? 'text-blue-400' : isDesign ? 'text-pink-400' : isMedia ? 'text-red-500' : isEducation ? 'text-emerald-500' : 'text-violet-400'} font-bold`}>{isSoftware || isDesign || isMedia || isEducation ? 'ANAGH_SINGH' : 'PROVISIONING'}</span></p>
                       <p className="flex justify-between text-[11px]"><span className="text-slate-600">STATE:</span> <span className="text-slate-300">{isEducation ? 'DRAFTING_CURRICULUM' : isMedia ? 'POST_PRODUCTION' : isDesign ? 'IDLE_SKETCHING' : 'ARCHITECTING'}</span></p>
                       <p className="flex justify-between text-[11px]"><span className="text-slate-600">{isEducation ? 'MODULE_COUNT:' : 'RELEASE_COUNT:'}</span> <span className="text-red-500 font-bold">0_PUBLIC</span></p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                       <span className={`w-2 h-2 rounded-full animate-pulse ${isSoftware ? 'bg-blue-500' : isDesign ? 'bg-pink-500' : isMedia ? 'bg-red-600' : isEducation ? 'bg-emerald-500' : 'bg-violet-500'}`}></span>
                       <span className="text-[9px] text-slate-500 uppercase tracking-widest">
                          {isEducation ? 'Provisioning knowledge nodes...' : isMedia ? 'Rendering cinematic frames...' : isDesign ? 'Curating visual fragments...' : 'Awaiting deployment authorization...'} 
                          <span className={`inline-block w-1.5 h-3 ml-1 animate-pulse ${isSoftware ? 'bg-blue-500' : isDesign ? 'bg-pink-500' : isMedia ? 'bg-red-600' : isEducation ? 'bg-emerald-500' : 'bg-violet-500'}`}></span>
                       </span>
                    </div>
                  </div>
                )}
              </div>
           </div>
        </div>
      );
    }

    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 reveal-up">
          <span className={`text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block text-transparent bg-clip-text bg-gradient-to-r ${branch.color}`}>MANIFESTO // {isEducation ? 'COURSES' : 'PROJECTS'}</span>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-10 tracking-tighter leading-none uppercase ${isGames ? 'glow-text-game' : isSoftware ? 'font-game text-white' : isDesign ? 'font-serif-elegant text-white' : isMedia ? 'text-white italic' : isEducation ? 'text-white' : ''}`}>
             {isDesign ? 'Artistry.' : isMedia ? 'Narrative.' : isEducation ? 'Mastery.' : 'Engineering.'}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-sans max-w-3xl leading-relaxed font-medium italic">
            {isDesign ? 'Figma mockups and visual systems that redefine digital interfaces.' : isMedia ? 'Cinematic productions and high-fidelity storytelling for the digital age.' : isEducation ? 'Premium tutorials across academic and software domains.' : 'The following builds represent our core technical baseline for the 2026 roadmap.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {branch.projects.map((project, idx) => {
            const isComingSoon = project.title === 'Echoless';
            return (
              <div key={idx} className={`reveal-up group relative glass-card p-10 rounded-[3rem] border-white/5 hover:border-pink-500/20 transition-all ${isComingSoon && isGames ? 'game-border' : isSoftware ? 'border-blue-500/10' : isDesign ? 'border-pink-500/10 hover:bg-white/[0.03]' : isMedia ? 'border-red-500/10' : isEducation ? 'border-emerald-500/10' : ''}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                {isComingSoon && (
                  <div className="absolute -top-4 -left-4 z-20 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-[10px] font-bold tracking-widest text-white animate-pulse shadow-lg">
                    COMING SOON
                  </div>
                )}
                {(isDesign || isMedia || isEducation) && (
                  <div className={`absolute top-8 right-8 ${isMedia ? 'text-red-500/20' : isEducation ? 'text-emerald-500/20' : 'text-pink-500/20'} group-hover:opacity-100 transition-opacity`}>
                    {isMedia ? <Video className="w-10 h-10" /> : isEducation ? <GraduationCap className="w-10 h-10" /> : <Sparkles className="w-10 h-10" />}
                  </div>
                )}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${branch.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}></div>
                <h3 className={`text-3xl font-black mb-4 ${isComingSoon ? 'text-blue-400' : isDesign ? 'text-pink-400 font-serif-elegant' : isMedia ? 'text-red-500' : isEducation ? 'text-emerald-500' : 'text-white'}`}>{project.title}</h3>
                <p className="text-slate-500 font-sans mb-8 leading-relaxed font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`px-3 py-1 ${isDesign ? 'bg-pink-500/5 text-pink-300' : isMedia ? 'bg-red-600/5 text-red-400' : isEducation ? 'bg-emerald-600/5 text-emerald-400' : 'bg-white/5 text-slate-400'} rounded-full text-[9px] font-mono-tech uppercase tracking-widest`}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="max-w-6xl mx-auto">
      <div className="mb-32 reveal-up text-center lg:text-left relative">
        <div className={`absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r ${branch.color} opacity-10 blur-[100px] rounded-full`}></div>
        <span className={`text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block text-transparent bg-clip-text bg-gradient-to-r ${branch.color}`}>SYSTEM_INFO // LOGS</span>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-10 tracking-tighter leading-none uppercase ${isGames ? 'glow-text-game' : isAI ? 'font-mono-tech text-white' : isSoftware ? 'font-game text-white glow-text-game' : isDesign ? 'font-serif-elegant text-white' : isMedia ? 'text-white italic' : isEducation ? 'text-white' : 'text-white'}`}>
          {isAI ? 'RESEARCH_DNA' : isSoftware ? 'ENGINEERING_DNA' : isDesign ? 'CREATIVE_DNA' : isMedia ? 'VISUAL_DNA' : isEducation ? 'KNOWLEDGE_DNA' : `About ${branch.name.split(' ').pop()}.`}
        </h1>
        <p className={`text-xl md:text-2xl lg:text-3xl text-slate-300 leading-tight max-w-4xl font-sans font-medium ${isAI ? 'opacity-80' : ''}`}>
          We operate as the vanguard of high-fidelity interaction. {isAI ? 'Quantara AI is a specialized research laboratory defining the future of machine cognition.' : isSoftware ? 'Software Works architects the structural foundations of modern enterprise systems and web applications.' : isDesign ? 'Quantara Design is where aesthetic intuition meets technical precision using the power of Figma.' : isMedia ? 'Quantara Media architects high-end visual narratives and cinematic ecosystems for global attention.' : isEducation ? 'Quantara Education bridges the gap between fundamental subjects and advanced technology through elite tutorials.' : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
        <div className="lg:col-span-7 reveal-up">
           <h3 className={`text-3xl font-black mb-8 uppercase tracking-widest ${isGames ? 'font-game' : isAI ? 'font-mono-tech text-violet-400' : isSoftware ? 'font-game text-blue-500' : isDesign ? 'font-serif-elegant text-pink-500' : isMedia ? 'text-red-600' : isEducation ? 'text-emerald-500' : ''}`}>
              {isDesign ? 'The Canvas Principle' : isMedia ? 'Cinematic Philosophy' : isEducation ? 'Pedagogical Logic' : 'Development Ethos'}
           </h3>
           <div className="space-y-8">
             {[
               { icon: isEducation ? <BookOpen /> : isDesign ? <Wand2 /> : isMedia ? <Video /> : isSoftware ? <Server /> : <Code />, title: isEducation ? "Syllabus Rigor" : isDesign ? "Creative Intuition" : isMedia ? "Visual Impact" : isSoftware ? "Architectural Rigor" : "Silicon Mastery", text: isEducation ? "Structured learning paths from primary education to advanced software engineering." : isDesign ? "Translating abstract concepts into vivid, high-fidelity visual assets." : isMedia ? "Crafting imagery that commands attention and tells a profound technical story." : isSoftware ? "Deploying load-balanced, zero-downtime infrastructure that sustains high-traffic loads." : "Direct hardware optimization ensuring consistent performance on target platforms." },
               { icon: isEducation ? <Library /> : isDesign ? <Sparkles /> : isMedia ? <Play /> : isSoftware ? <ShieldCheck /> : <Zap />, title: isEducation ? "Global Knowledge" : isDesign ? "Pixel Perfection" : isMedia ? "High Frame Logic" : isSoftware ? "Secure by Design" : "Hyper Efficient", text: isEducation ? "A curated vault of tutorials covering Maths, Science, Hindi, English, and Tech." : isDesign ? "Every stroke is calculated for maximum visual impact and cross-device clarity." : isMedia ? "Optimized visual delivery at 4K/60FPS for modern digital platforms." : isSoftware ? "Security is not an add-on; it's integrated into the kernel of every system we build." : "Our algorithms are audited for absolute responsiveness and low-resource overhead." },
               { icon: isEducation ? <GraduationCap /> : isDesign ? <Layout /> : isMedia ? <Film /> : isSoftware ? <Globe2 /> : <Globe />, title: isEducation ? "Mentorship Core" : isDesign ? "Dynamic Systems" : isMedia ? "Global Narrative" : isSoftware ? "Global Scale" : "Open Frontiers", text: isEducation ? "Direct technical mentorship for the next generation of engineers and students." : isDesign ? "Building scalable component libraries in Figma that empower engineering teams." : isMedia ? "Translating local values into a global visual language that resonates everywhere." : isSoftware ? "Architecting solutions that bridge continents with distributed ledger technology." : "Bridging ecosystems through unified cross-platform protocols." }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 group">
                 <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform h-fit ${isAI ? 'border-violet-500/20' : isSoftware ? 'border-blue-500/20' : isDesign ? 'border-pink-500/20 text-pink-400' : isMedia ? 'border-red-500/20 text-red-500' : isEducation ? 'border-emerald-500/20 text-emerald-500' : ''}`}>
                   {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                 </div>
                 <div>
                   <h4 className={`text-xl font-black mb-2 uppercase ${isGames ? 'font-game' : isAI ? 'font-mono-tech' : isSoftware ? 'font-game' : isDesign ? 'font-serif-elegant' : isMedia ? 'italic' : isEducation ? 'tracking-wider' : ''}`}>{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium">{item.text}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
        
        <div className="lg:col-span-5 space-y-8">
           <div className={`glass-card p-10 rounded-[3rem] reveal-up border-white/10 relative overflow-hidden group ${isGames ? 'game-border' : isAI ? 'bg-violet-950/20 border-violet-500/10' : isSoftware ? 'bg-blue-950/10 border-blue-500/10' : isDesign ? 'bg-pink-950/10 border-pink-500/10' : isMedia ? 'bg-red-950/10 border-red-500/10' : isEducation ? 'bg-emerald-950/10 border-emerald-500/10' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-0 right-0 p-4 opacity-5"><Activity className="w-12 h-12" /></div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${branch.color} flex items-center justify-center text-white mb-8 shadow-xl`}>
                {isDesign || isMedia || isEducation ? <GraduationCap className="w-7 h-7" /> : <Fingerprint className="w-7 h-7" />}
              </div>
              <h3 className={`text-2xl font-black mb-4 uppercase ${isGames ? 'font-game' : isAI ? 'font-mono-tech' : isSoftware ? 'font-game' : isDesign ? 'font-serif-elegant' : isMedia ? 'italic' : isEducation ? '' : ''}`}>Personnel</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans font-medium mb-6">
                Directly supervised by {isSoftware || isDesign || isMedia || isEducation ? 'Co-Founder **Anagh Singh**' : 'Founder **Harshit Yadav**'}, the department maintains an uncompromising stance on educational quality and technical depth.
              </p>
              {(isAI || isSoftware || isDesign || isMedia || isEducation) && (
                <div className={`pt-4 border-t border-white/5 font-mono-tech text-[9px] uppercase tracking-[0.3em] font-black ${isAI ? 'text-violet-500' : isSoftware ? 'text-blue-500' : isDesign ? 'text-pink-500' : isMedia ? 'text-red-600' : isEducation ? 'text-emerald-500' : ''}`}>
                  ACCESS_LEVEL: {isSoftware || isDesign || isMedia || isEducation ? 'CO-FOUNDER_CLEARANCE' : 'FOUNDER_CLEARANCE'}
                </div>
              )}
           </div>

           {!isAI && !isGames && (
           <div className={`glass-card p-10 rounded-[3rem] reveal-up border-white/5 ${isSoftware ? 'bg-blue-900/5' : isDesign ? 'bg-pink-900/5' : isMedia ? 'bg-red-900/5' : isEducation ? 'bg-emerald-900/5' : 'bg-white/5'}`} style={{ transitionDelay: '300ms' }}>
              <h4 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${isSoftware ? 'text-blue-500 font-mono-tech' : isDesign ? 'text-pink-500 font-display' : isMedia ? 'text-red-500 italic' : isEducation ? 'text-emerald-500' : 'text-blue-500'}`}>DEPARTMENT_STATS</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className={`text-3xl font-black text-white mb-1 tracking-tighter ${isDesign ? 'font-serif-elegant' : isGames ? 'font-game' : ''}`}>
                    {isSoftware ? 'SYSTEMS' : isDesign ? 'PIXELS' : isMedia ? 'BITRATE' : isEducation ? 'MODULES' : 'CLOUD'}
                  </p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold font-mono-tech">
                    {isSoftware ? 'Active Deployment' : isDesign ? 'Visual Accuracy' : isMedia ? '4K Mastering' : isEducation ? 'Knowledge Base' : 'Main Platform'}
                  </p>
                </div>
              </div>
           </div>
           )}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
      <div className="lg:col-span-5 reveal-up">
        <span className={`text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block text-transparent bg-clip-text bg-gradient-to-r ${branch.color}`}>UPLINK // CONTACT</span>
        <h1 className={`text-5xl sm:text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none uppercase ${isGames ? 'glow-text-game font-game' : isAI ? 'font-mono-tech' : isSoftware ? 'font-game' : isDesign ? 'font-serif-elegant' : isMedia ? 'italic' : isEducation ? 'text-emerald-500' : ''}`}>Inquire.</h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 font-sans leading-tight font-medium">
          Ready to deploy <span className="text-white font-black">{branch.name}</span> elite narratives? Initiate briefing.
        </p>
        
        <div className={`glass-card p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden group ${isGames ? 'game-border' : isAI ? 'border-violet-500/20' : isSoftware ? 'border-blue-500/20' : isDesign ? 'border-pink-500/20' : isMedia ? 'border-red-500/20' : isEducation ? 'border-emerald-500/20' : ''}`}>
          <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${branch.color}`}></div>
          <p className="text-white font-black text-lg mb-3 font-mono-tech">PRIORITY_QUEUE:</p>
          <div className="flex items-center gap-2 mb-6">
            <span className={`w-2 h-2 rounded-full ${isSoftware ? 'bg-blue-500' : isDesign ? 'bg-pink-500' : isMedia ? 'bg-red-600' : isEducation ? 'bg-emerald-500' : 'bg-blue-500'} animate-ping`}></span>
            <p className={`text-sm ${isDesign ? 'text-pink-400' : isMedia ? 'text-red-600' : isEducation ? 'text-emerald-400' : 'text-blue-400'} font-mono tracking-widest uppercase font-bold font-mono-tech`}>ACTIVE / SECURE</p>
          </div>
          <p className="text-slate-500 text-sm font-sans leading-relaxed font-medium">
            Academic leads monitor this frequency for new curriculum requests.
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 reveal-up" style={{ transitionDelay: '200ms' }}>
        <div className={`glass-card p-12 md:p-16 rounded-[4rem] border-white/5 relative shadow-2xl ${isGames ? 'border-blue-500/10' : isAI ? 'border-violet-500/10 bg-black/40' : isSoftware ? 'border-blue-500/10 bg-slate-950' : isDesign ? 'border-pink-500/10 bg-slate-950' : isMedia ? 'border-red-600/10 bg-black' : isEducation ? 'border-emerald-500/10 bg-slate-950' : ''}`}>
          <form className="relative space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2 font-mono-tech">Entity_ID</label>
                <input type="text" placeholder="Individual / Company" className={`w-full bg-slate-900/50 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none ${isDesign ? 'focus:border-pink-500/30' : isMedia ? 'focus:border-red-500/30' : isEducation ? 'focus:border-emerald-500/30' : 'focus:border-blue-500/30'} transition-all text-white placeholder:text-slate-700 font-sans font-medium`} />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2 font-mono-tech">Comms_Hash</label>
                <input type="email" placeholder="contact@domain.com" className={`w-full bg-slate-900/50 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none ${isDesign ? 'focus:border-pink-500/30' : isMedia ? 'focus:border-red-500/30' : isEducation ? 'focus:border-emerald-500/30' : 'focus:border-blue-500/30'} transition-all text-white placeholder:text-slate-700 font-sans font-medium`} />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2 font-mono-tech">Objective_Set</label>
              <select className={`w-full bg-slate-900/50 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none ${isDesign ? 'focus:border-pink-500/30' : isMedia ? 'focus:border-red-500/30' : isEducation ? 'focus:border-emerald-500/30' : 'focus:border-blue-500/30'} transition-all text-white appearance-none cursor-pointer font-sans font-medium`}>
                <option className="bg-slate-950">New Tutorial Request</option>
                <option className="bg-slate-950">Curriculum Review</option>
                <option className="bg-slate-950">Technical Mentorship</option>
                <option className="bg-slate-950">Academic Partnership</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2 font-mono-tech">Transmission_Payload</label>
              <textarea rows={6} placeholder="Education requirements..." className={`w-full bg-slate-900/50 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none ${isDesign ? 'focus:border-pink-500/30' : isMedia ? 'focus:border-red-500/30' : isEducation ? 'focus:border-emerald-500/30' : 'focus:border-blue-500/30'} transition-all text-white placeholder:text-slate-700 font-sans font-medium resize-none`}></textarea>
            </div>
            <button className={`w-full py-6 bg-gradient-to-r ${branch.color} text-white font-black rounded-2xl flex items-center justify-center gap-4 text-xl transition-all active:scale-95 shadow-2xl uppercase tracking-widest ${isAI ? 'font-mono-tech' : isGames ? 'font-game' : isSoftware ? 'font-game' : isDesign ? 'font-serif-elegant' : isMedia ? 'italic font-display' : isEducation ? 'font-sans' : ''}`}>
              Dispatch
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'about': return renderAbout();
      case 'contact': return renderContact();
      case 'projects': return renderProjects();
      default: return renderAbout();
    }
  };

  return (
    <div className={`pt-32 pb-24 relative ${isGames ? 'font-game' : ''}`} ref={containerRef}>
      {isGames && <div className="scanline-overlay"></div>}
      {isAI && <div className="neural-bg"></div>}
      {isSoftware && <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>}
      {isDesign && <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>}
      {isMedia && <div className="absolute inset-0 bg-red-600/[0.02] pointer-events-none"></div>}
      {isEducation && <div className="absolute inset-0 bg-emerald-600/[0.02] pointer-events-none"></div>}
      
      <div className="container mx-auto px-6 relative z-10">
        <button 
          onClick={() => onNavigate('home')}
          className={`flex items-center gap-3 text-slate-400 hover:text-white transition-all mb-16 font-black uppercase tracking-widest text-xs reveal-up ${isAI || isSoftware ? 'font-mono-tech' : isDesign ? 'font-display' : isMedia ? 'font-display italic' : isEducation ? 'font-sans' : ''}`}
        >
          <ArrowLeft className="w-5 h-5" />
          {isAI ? 'CORE_LINK_RETURN' : isSoftware ? 'RETURN_TO_SYSTEM_CORE' : isDesign ? 'BACK_TO_STUDIO' : isMedia ? 'BACK_TO_GALLERY' : isEducation ? 'BACK_TO_LIBRARY' : `Return to ${branch.name.split(' ').pop()} Core`}
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default BranchSubPage;
