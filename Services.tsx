import React from 'react';
import { SERVICES, ICONS } from './constants';
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
              className="group p-8 rounded-2xl bg-[#063d25] border border-transparent hover:border-[#00d66b] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
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
        <div className="bg-gradient-to-r from-[#063d25] to-[#0a4f32] rounded-2xl p-8 text-center border border-[#00d66b]/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coins className="w-8 h-8 text-[#00d66b]" />
            <h3 className="font-display text-3xl font-bold text-white">Priser</h3>
          </div>
          <p className="text-white text-xl mb-2">
            <span className="font-bold text-[#00d66b]">350 - 450 kr.</span> pr. time
          </p>
          <p className="text-gray-300 text-sm">Eksklusiv moms</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
