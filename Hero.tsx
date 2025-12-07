import React from 'react';
import { Mic, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2301&auto=format&fit=crop")',
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#022c19]/70 via-[#022c19]/80 to-[#022c19]"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center md:text-left max-w-[1200px] flex flex-col md:flex-row items-center gap-12 mt-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d66b]/30 bg-[#00d66b]/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d66b] animate-pulse"></span>
            <span className="text-[#00d66b] text-xs font-bold tracking-widest uppercase">
              Næste generations ejendomsservice
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
            Din Ejendom.<br />
            Vores <span className="bg-gradient-to-r from-white to-[#00d66b] bg-clip-text text-transparent">Ansvar.</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Vi kombinerer klassisk håndværk med moderne teknologi for at sikre grønne, rene og velfungerende omgivelser. Effektivt, bæredygtigt og gennemskueligt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00d66b] text-[#022c19] font-bold transition-all hover:bg-white hover:scale-[1.02] shadow-[0_0_20px_rgba(0,214,107,0.3)]"
            >
              <Mic className="w-5 h-5 group-hover:animate-bounce" />
              <span>Book med Stemmen</span>
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-500 text-white font-medium hover:bg-white hover:text-[#022c19] transition-all"
            >
              <span>Se Vores Ydelser</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Abstract Circle decoration */}
        <div className="hidden md:block flex-1 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#00d66b]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#00d66b]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;