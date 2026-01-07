
import React from 'react';
import { Cpu, Twitter, Github, Linkedin, Gamepad2, BrainCircuit, Code2, ExternalLink, GraduationCap, Film, Palette } from 'lucide-react';
import { Branch } from '../types';
import { BRANCHES } from '../constants';

interface Props {
  onNavigate: (id: string) => void;
  activeBranch?: Branch | null;
}

const Footer: React.FC<Props> = ({ onNavigate, activeBranch }) => {
  const isGames = activeBranch?.id === 'games';
  const isAI = activeBranch?.id === 'ai';
  
  const getAbbreviation = () => {
    if (!activeBranch) return 'QN';
    if (activeBranch.id === 'games') return 'QSG';
    if (activeBranch.id === 'ai') return 'QAI';
    if (activeBranch.id === 'software') return 'QSW';
    return activeBranch.name.split(' ').map(w => w[0]).join('').toUpperCase();
  };

  const getFullName = () => {
    if (!activeBranch) return 'Quantara Nexus';
    return activeBranch.name.toUpperCase();
  };

  const commonFooterContent = (
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${activeBranch ? activeBranch.color : 'from-blue-600 to-indigo-600'} shadow-lg`}>
              {activeBranch ? (
                activeBranch.id === 'games' ? <Gamepad2 className="w-6 h-6 text-white" /> :
                activeBranch.id === 'ai' ? <BrainCircuit className="w-6 h-6 text-white" /> :
                activeBranch.id === 'education' ? <GraduationCap className="w-6 h-6 text-white" /> :
                activeBranch.id === 'media' ? <Film className="w-6 h-6 text-white" /> :
                activeBranch.id === 'design' ? <Palette className="w-6 h-6 text-white" /> :
                activeBranch.id === 'software' ? <Code2 className="w-6 h-6 text-white" /> :
                <Cpu className="w-6 h-6 text-white" />
              ) : <Cpu className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-widest">{activeBranch ? activeBranch.name : 'Quantara Nexus'}</h3>
              <p className="text-[10px] text-blue-400 font-mono tracking-[0.4em] uppercase">
                {activeBranch ? 'Quantara Nexus Branch' : 'Corporate Headquarters'}
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-sm max-w-md mb-8 leading-relaxed font-sans">
            {activeBranch ? activeBranch.description : 'Reliable software engineering, high-fidelity gaming, and practical AI. Founded Sept 2025.'}
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 glass-card rounded-xl hover:text-blue-400 transition-all border-white/10"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-3 glass-card rounded-xl hover:text-blue-400 transition-all border-white/10"><Github className="w-5 h-5" /></a>
            <a href="#" className="p-3 glass-card rounded-xl hover:text-blue-400 transition-all border-white/10"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Portal</h4>
          <ul className="space-y-4 text-xs text-slate-500 font-sans font-bold">
            {activeBranch && (
              <li>
                <button 
                  onClick={() => onNavigate('nexus')} 
                  className="text-blue-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
                >
                  Return to Nexus
                </button>
              </li>
            )}
            <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors uppercase tracking-widest">Home</button></li>
            <li><button onClick={() => onNavigate('expertise')} className="hover:text-blue-400 transition-colors uppercase tracking-widest">Expertise</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors uppercase tracking-widest">About</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors uppercase tracking-widest">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Expertise</h4>
          <ul className="space-y-4 text-xs text-slate-500 font-sans font-bold">
            {BRANCHES.map((branch) => (
              <li key={branch.id}>
                <button 
                  onClick={() => onNavigate(branch.id)} 
                  className={`hover:text-blue-400 transition-colors uppercase tracking-widest ${activeBranch?.id === branch.id ? 'text-white' : ''}`}
                >
                  {branch.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full bg-blue-500 ${isGames || isAI ? 'animate-ping' : ''}`}></span>
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">© 2026 QUANTARA NEXUS // SYSTEMS OPERATIONAL</p>
          </div>
          <p className="text-[9px] font-mono text-blue-500/70 uppercase tracking-[0.2em] font-bold">Developed By The Co-Founder- Anagh</p>
        </div>
        <div className="flex gap-6 text-[10px] font-mono text-slate-600">
          <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">SECURITY</a>
        </div>
      </div>
    </div>
  );

  return (
    <footer className={`bg-slate-950 pt-24 ${activeBranch ? 'border-t border-white/5' : ''} relative overflow-hidden`}>
      {isGames && <div className="absolute inset-0 bg-blue-500/5 opacity-20 pointer-events-none tech-grid"></div>}
      {isAI && <div className="neural-bg"></div>}
      
      {commonFooterContent}

      {/* Deep Branding Section - Styled after AFSH Photo */}
      <div className="mt-24 relative overflow-hidden h-[350px] md:h-[500px] flex items-center justify-center bg-slate-950 border-t border-white/5">
        <div 
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[40vw] md:text-[30vw] font-black text-slate-900/40 leading-none tracking-tighter uppercase">
            {getAbbreviation()}
          </span>
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="font-serif-elegant text-xl sm:text-2xl md:text-4xl font-normal tracking-[0.6em] text-[#d4af37] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {getFullName()}
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

