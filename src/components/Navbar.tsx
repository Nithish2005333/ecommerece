import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';
import Lottie from 'lottie-react';
import cartAnimation from '../assets/cart-animation.json';

const LottieComponent = (Lottie as any).default || Lottie;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'COLLECTIONS',
    'ACCESSORIES',
    'EDITORIAL',
    'EXCLUSIVES',
    'TESTIMONIALS',
    'CONTACT',
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[60] bg-[#ECECF1]/80 backdrop-blur-xl border-b border-black/5 h-14 md:h-[4.5rem] flex items-center justify-between px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 2.7,
          ease: [0.16, 1, 0.3, 1] as any,
        }}
      >
        <div className="flex flex-1 justify-start items-center">
          <div className="relative block h-7 md:h-10 aspect-[4/1] hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="/logo-full.png" 
              alt="SACROSANCT" 
              className="h-full w-auto object-contain" 
            />
          </div>
        </div>

        <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] md:text-[11px] font-black tracking-[0.15em] uppercase text-[#1e293b] hover:text-[#2563eb] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 justify-end items-center gap-1 md:gap-4 lg:gap-6">
          <button
            className="p-2 hover:bg-black/5 rounded-full transition-all hover:scale-110 active:scale-90 cursor-pointer text-[#1e293b] hover:text-[#2563eb]"
            aria-label="Search"
          >
            <Search className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
          </button>
          
          <button 
            className="p-2 hover:bg-black/5 rounded-full transition-all hover:scale-110 active:scale-90 cursor-pointer text-[#1e293b] hover:text-[#2563eb]"
            aria-label="Account"
          >
            <User className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
          </button>

          <button 
            className="relative p-2 hover:bg-black/5 rounded-full transition-all hover:scale-110 active:scale-90 flex items-center justify-center cursor-pointer text-[#1e293b] hover:text-[#2563eb]"
            aria-label="Cart"
          >
            <div className="relative w-[18px] h-[18px] md:w-6 md:h-6 flex items-center justify-center">
              <LottieComponent 
                animationData={cartAnimation} 
                loop={true} 
                className="w-full h-full" 
              />
            </div>
          </button>

          <button
            className="sm:hidden p-1 flex flex-col gap-1 h-auto w-auto group relative z-[70] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-[#1e293b] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#1e293b] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#1e293b] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </motion.header>

      <div className={`fixed inset-0 z-[55] bg-[#ECECF1] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] sm:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-[6rem] pb-12 px-8 overflow-y-auto">
          <div className="flex flex-col items-start gap-8">
            {menuItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${idx * 150}ms` : '0ms' }}
                className={`group relative flex items-baseline gap-4 transition-all duration-700 cursor-pointer ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
              >
                <span className="text-[10px] font-black italic text-[#2563eb]/40 group-hover:text-[#2563eb] transition-colors">0{idx + 1}</span>
                <span className="text-2xl font-black tracking-tighter uppercase group-hover:italic group-hover:translate-x-2 transition-all duration-500 text-[#1e293b]">
                  {item}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-8">
            <div className="h-px w-full bg-[#1e293b]/5" />
            <div className="text-[9px] font-black tracking-[0.2em] uppercase opacity-30">
              Sacrosanct Studio &copy; 2026
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
