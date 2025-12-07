import React from 'react';
import { Home } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#011a0f] pt-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 pb-12 flex flex-col md:flex-row justify-between items-start gap-10">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <Home className="text-[#00d66b] w-5 h-5" />
            <span>Lyth<span className="text-[#00d66b]">.</span></span>
          </div>
          <p className="text-gray-400 text-sm">
            Lyth Ejendomsservice ApS<br />
            Fremtidens drift og vedligeholdelse.<br />
            CVR: 43288741
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold">Juridisk</h4>
            <a href="#" className="text-gray-400 text-sm hover:text-[#00d66b] transition-colors">Privatlivspolitik</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#00d66b] transition-colors">Handelsbetingelser</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold">Kontakt</h4>
            <a href="mailto:lythejendomsservice@gmail.com" className="text-gray-400 text-sm hover:text-[#00d66b] transition-colors">
              lythejendomsservice@gmail.com
            </a>
            <a href="tel:22651996" className="text-gray-400 text-sm hover:text-[#00d66b] transition-colors">
              +45 22 65 19 96
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-black py-6 text-center">
        <p className="text-[#666] text-xs">
          &copy; {new Date().getFullYear()} Lyth Ejendomsservice ApS. Alle rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;