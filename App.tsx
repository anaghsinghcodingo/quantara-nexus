
import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BranchCard from './components/BranchCard';
import Footer from './components/Footer';
import BranchView from './components/BranchView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import ExpertiseView from './components/ExpertiseView';
import ScrollToTop from './components/ScrollToTop';
import BranchSubPage from './components/BranchSubPage';
import { BRANCHES } from './constants';
import { Branch } from './types';
import { ShieldCheck, Users, Code, Award, CheckCircle2 } from 'lucide-react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);
    const { current: currentObserver } = observer;
    elements.forEach((element) => currentObserver?.observe(element));
    return () => currentObserver?.disconnect();
  }, [elements, options]);

  return [setElements, entries] as const;
};

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home'); 
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const [branchSubView, setBranchSubView] = useState<'home' | 'about' | 'contact' | 'projects'>('home');

  const [setElements, entries] = useIntersectionObserver({ threshold: 0.15 });

  useEffect(() => {
    const revealedElements = document.querySelectorAll('.reveal-up');
    setElements(Array.from(revealedElements) as HTMLElement[]);
  }, [currentView, activeBranchId, branchSubView, setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, [entries]);

  const handleBranchNavigate = (branchId: string, subView: 'home' | 'about' | 'contact' | 'projects' = 'home') => {
    setActiveBranchId(branchId);
    setBranchSubView(subView);
    setCurrentView('branch-mode');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNexusNavigate = (view: string) => {
    setActiveBranchId(null);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeBranch = activeBranchId ? BRANCHES.find(b => b.id === activeBranchId) : null;

  const renderHome = () => (
    <>
      <Hero onExplore={() => setCurrentView('expertise')} />
      
      <section className="py-20 border-y border-white/5 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck />, title: "Enterprise Reliability", desc: "Proven uptime for critical systems." },
              { icon: <Users />, title: "Human Centered", desc: "Software built for the people using it." },
              { icon: <Code />, title: "Modular Architecture", desc: "Easily scalable, future-proof codebases." },
              { icon: <Award />, title: "Elite Craftsmanship", desc: "Adherence to the highest coding standards." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center reveal-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mb-4 p-3 bg-blue-600/10 text-blue-400 rounded-2xl">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center reveal-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">OUR CORE PILLARS</span>
            <h2 className="title-architect text-[12vw] sm:text-6xl md:text-7xl flex flex-col items-center">
              <span className="leading-tight">Our</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-tight">Specializations.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRANCHES.map((branch, idx) => (
              <div key={branch.id} className="reveal-up" style={{ transitionDelay: `${idx * 150}ms` }}>
                <BranchCard 
                  branch={branch} 
                  onExplore={() => handleBranchNavigate(branch.id)} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 reveal-up">
              <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">// THE CORE PHILOSOPHY</span>
              <h2 className="title-architect text-[10vw] sm:text-6xl md:text-7xl flex flex-col mb-8">
                <span className="leading-tight">Scaling</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-tight">The Future.</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-lg mb-10 leading-relaxed font-sans">
                At Quantara Nexus, we believe software shouldn't just function—it should empower. Whether it's a world-class game, a neural network, or a core banking system, we approach every project with the same level of obsessive quality.
              </p>
              <div className="space-y-4">
                {["Clear communication.", "Zero compromise on security.", "Direct leadership involvement."].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-slate-300 font-sans text-sm md:text-base">{point}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleNexusNavigate('contact')}
                className="mt-12 px-8 py-4 bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-blue-400 font-bold rounded-2xl transition-all inline-flex items-center gap-2"
              >
                Inquire About a Project
                <Code className="w-5 h-5" />
              </button>
            </div>
            <div className="lg:w-1/2 relative reveal-up w-full" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="relative rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderContent = () => {
    if (activeBranch) {
      if (branchSubView === 'home') {
        return <BranchView branch={activeBranch} onBack={() => handleNexusNavigate('expertise')} onNavigate={(v) => setBranchSubView(v as any)} />;
      } else {
        return <BranchSubPage branch={activeBranch} view={branchSubView} onNavigate={(v) => setBranchSubView(v as any)} />;
      }
    }

    switch(currentView) {
      case 'home': return renderHome();
      case 'about': return <AboutView onBack={() => handleNexusNavigate('home')} />;
      case 'expertise': return <ExpertiseView onBack={() => handleNexusNavigate('home')} onExploreBranch={(id) => handleBranchNavigate(id)} />;
      case 'contact': return <ContactView onBack={() => handleNexusNavigate('home')} />;
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navigation 
        activeView={activeBranchId ? branchSubView : currentView}
        activeBranch={activeBranch}
        onNavigate={(view) => {
          if (activeBranchId) {
            if (view === 'nexus') handleNexusNavigate('home');
            else setBranchSubView(view as any);
          } else {
            handleNexusNavigate(view);
          }
        }} 
      />
      <main className="transition-opacity duration-300 overflow-x-hidden">
        {renderContent()}
      </main>
      <Footer 
        onNavigate={(id) => {
          if (id === 'nexus') handleNexusNavigate('home');
          else if (BRANCHES.some(b => b.id === id)) handleBranchNavigate(id);
          else if (activeBranchId) setBranchSubView(id as any);
          else handleNexusNavigate(id);
        }} 
        activeBranch={activeBranch}
      />
      <ScrollToTop />
    </div>
  );
};

export default App;
