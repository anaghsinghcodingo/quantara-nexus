
import React, { useState, useEffect } from 'react';

const Logo3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * -20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 md:opacity-30 overflow-hidden">
      <div 
        className="perspective-1000 preserve-3d transition-transform duration-700 ease-out"
        style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)` }}
      >
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] preserve-3d animate-float-rotate">
          {/* Main Layer - The "CPU" Base */}
          <div className="absolute inset-0 border-4 border-blue-500/40 rounded-[20%] preserve-3d">
             <div className="absolute inset-[15%] border-2 border-cyan-500/20 rounded-[15%]"></div>
          </div>

          {/* Circuit Trace Layers */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute inset-0 border border-blue-400/10 rounded-[20%] preserve-3d"
              style={{ transform: `translateZ(${(i + 1) * 30}px)` }}
            >
              {/* Decorative Pins */}
              <div className="absolute -top-4 left-1/4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute -top-4 left-3/4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute -bottom-4 left-1/4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute -bottom-4 left-3/4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute -left-4 top-1/4 h-1 w-8 bg-blue-500/30"></div>
              <div className="absolute -left-4 top-3/4 h-1 w-8 bg-blue-500/30"></div>
              <div className="absolute -right-4 top-1/4 h-1 w-8 bg-blue-500/30"></div>
              <div className="absolute -right-4 top-3/4 h-1 w-8 bg-blue-500/30"></div>
            </div>
          ))}

          {/* Center Core */}
          <div 
            className="absolute inset-[30%] bg-gradient-to-br from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-40 animate-pulse"
            style={{ transform: 'translateZ(100px)' }}
          ></div>
          <div 
            className="absolute inset-[40%] bg-white rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.8)]"
            style={{ transform: 'translateZ(110px)' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
