
import React from 'react';
import { ArrowLeft, Mail, Send } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ContactView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 min-h-[90vh]">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-16 font-medium reveal-up"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">CONNECT</span>
            <h1 className="title-architect text-6xl md:text-8xl flex flex-col mb-12">
              <span>Get in</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Touch.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 font-sans leading-relaxed max-w-lg">
              Whether you're looking to start a new project, inquire about our engineering services, or discuss a collaboration, we're ready to listen.
            </p>

            <div className="inline-block glass-card p-8 rounded-[2rem] border-blue-500/10 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-blue-600/10 text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Transmission</p>
                  <a 
                    href="mailto:nexus@quantara.io" 
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    nexus@quantara.io
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="glass-card p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full"></div>
              
              <form className="relative space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Digital Address</label>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans text-white placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Objective</label>
                  <select className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all font-sans text-white appearance-none cursor-pointer">
                    <option className="bg-slate-950">General Inquiry</option>
                    <option className="bg-slate-950">Project Partnership</option>
                    <option className="bg-slate-950">Technical Consultation</option>
                    <option className="bg-slate-950">Careers</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Briefing</label>
                  <textarea 
                    placeholder="Your message..." 
                    rows={5}
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans text-white placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 text-lg transition-all active:scale-[0.98] shadow-xl shadow-blue-600/20">
                  Send Transmission
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
