import React from 'react';
import { SERVICES, ICONS } from '../constants';
import { Coins } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#022c19]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Vores Kompetencer</h2>
          <p className="text-gray-400 text-lg">Fra grøn pleje og brolægning til teknisk vedligehold.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-[#063d25] border border-transparent hover:border-[#00d66b] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-[#022c19] flex items-center justify-center group-hover:bg-[#00d66b]/10 transition-colors">
                {ICONS[service.icon]}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#00d66b] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a4f32] to-[#022c19] border border-[#00d66b]/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d66b]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#00d66b]/20 flex items-center justify-center shrink-0">
               <Coins className="w-8 h-8 text-[#00d66b]" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Gennemskuelige Priser</h3>
              <p className="text-gray-300 max-w-lg">
                Vi tror på ærlighed og kvalitet. Vores priser er konkurrencedygtige og tilpasset opgavens art, så du altid ved, hvad du betaler for.
              </p>
            </div>
          </div>

          <div className="text-center md:text-right relative z-10">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Timepris fra</p>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              350 - 450 <span className="text-xl text-[#00d66b]">kr.</span>
            </div>
            <p className="text-gray-400 text-sm">ekskl. moms</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;