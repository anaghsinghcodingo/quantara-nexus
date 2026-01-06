
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-card transition-all duration-500 transform flex items-center justify-center border border-white/10 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      } hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] group`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
    </button>
  );
};

export default ScrollToTop;
