
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ArrowLeft, Home, Gamepad2 } from 'lucide-react';
import { Branch } from '../types';

interface Props {
  activeView: string;
  activeBranch: Branch | null | undefined;
  onNavigate: (view: string) => void;
}

const Navigation: React.FC<Props> = ({ activeView, activeBranch, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isGames = activeBranch?.id === 'games';
  const isEducation = activeBranch?.id === 'education';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nexusLinks = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Expertise', view: 'expertise' },
    { label: 'Contact', view: 'contact' },
  ];

  const branchLinks = [
    { label: 'Home', view: 'home' },
    { label: isEducation ? 'Courses' : 'Projects', view: 'projects' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    setMobileMenuOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = activeBranch ? branchLinks : nexusLinks;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' 
          : 'bg-transparent py-8'
      } ${isGames ? 'font-game' : ''}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6">
          {activeBranch && (
            <button 
              onClick={() => handleNavClick('nexus')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest border border-white/5 ${isGames ? 'border-blue-500/30' : ''}`}
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">Nexus</span>
            </button>
          )}
          
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <div className={`p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg ${activeBranch ? `bg-gradient-to-br ${activeBranch.color}` : 'bg-blue-600 shadow-blue-600/30'}`}>
              {isGames ? <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </div>
            <div className="text-left">
              <span className={`block font-bold text-lg sm:text-xl tracking-tight leading-none uppercase ${isGames ? 'glow-text-game' : ''}`}>
                {activeBranch ? activeBranch.name.split(' ').pop() : 'QUANTARA'}
              </span>
              <span className={`block text-[8px] sm:text-[10px] font-bold tracking-[0.3em] font-sans ${activeBranch ? 'text-white/60' : 'text-blue-400'}`}>
                {activeBranch ? 'BRANCH' : 'NEXUS'}
              </span>
            </div>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${
                activeView === link.view 
                  ? (activeBranch ? 'text-white font-black' : 'text-blue-400') 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeView === link.view && (
                <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${activeBranch ? `bg-gradient-to-r ${activeBranch.color}` : 'bg-blue-500'} ${isGames ? 'shadow-[0_0_8px_rgba(59,130,246,0.8)]' : ''}`}></span>
              )}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden p-2 text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`text-left text-lg font-bold uppercase tracking-widest ${
                activeView === link.view ? 'text-blue-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          {activeBranch && (
            <button
              onClick={() => handleNavClick('nexus')}
              className="text-left text-lg font-bold uppercase tracking-widest text-blue-500 border-t border-white/5 pt-6 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Return to Nexus
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
