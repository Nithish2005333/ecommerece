import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [startShutter, setStartShutter] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const duration = 2000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        const shutterTimer = setTimeout(() => {
          setStartShutter(true);
          document.body.style.overflow = 'auto';
        }, 500);

        const doneTimer = setTimeout(() => {
          setIsDone(true);
        }, 1600);

        return () => {
          clearTimeout(shutterTimer);
          clearTimeout(doneTimer);
        };
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (isDone) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center loading-grid overflow-hidden"
      initial={{ y: 0 }}
      animate={startShutter ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 1.1,
        ease: [0.87, 0, 0.13, 1]
      }}
    >
      <style>{`
        @keyframes scribble {
          0%, 100% { transform: translateY(-6px); }
          25% { transform: translateY(4px); }
          50% { transform: translateY(-8px); }
          75% { transform: translateY(6px); }
        }
        .animate-scribble {
          animation: scribble 0.25s infinite ease-in-out;
        }
        .glow-aura {
          background: radial-gradient(circle, rgba(37,99,235,0.6) 0%, rgba(37,99,235,0.2) 50%, rgba(37,99,235,0) 72%);
        }
        .loading-grid {
          background-color: #ECECF1;
        }
        @media (min-width: 768px) {
          .loading-grid {
            background-image: radial-gradient(rgba(17, 24, 39, 0.04) 1px, transparent 1px);
            background-size: 32px 32px;
          }
        }
        .glow-aura-bg {
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.015) 50%, rgba(37,99,235,0) 72%);
        }
      `}</style>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <motion.div 
        style={{ scale: 0.9 + (progress / 100) * 0.15 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] glow-aura-bg rounded-full pointer-events-none select-none z-0"
      />

      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0">
        <motion.div 
          style={{ scale: 0.95 + (progress / 100) * 0.05 }}
          className="relative flex items-center justify-center w-[1100px] h-[1100px]"
        >
          <div className="absolute w-[800px] md:w-[1100px] h-[800px] md:h-[1100px] rounded-full border border-dashed border-black/[0.012] animate-[spin_180s_linear_infinite]" />
          <div className="absolute w-[500px] md:w-[750px] h-[500px] md:h-[750px] rounded-full border border-dashed border-black/[0.018] animate-[spin_100s_linear_infinite_reverse]" />
          <div className="absolute w-[300px] md:w-[480px] h-[300px] md:h-[480px] rounded-full border border-black/[0.015]" />
          <div className="absolute w-[30px] h-[1px] bg-black/10" />
          <div className="absolute w-[1px] h-[30px] bg-black/10" />
        </motion.div>
      </div>

      <div className="hidden md:block">
        <div className="absolute left-10 md:left-16 top-10 md:top-16 bottom-24 md:bottom-32 w-[1px] bg-black/[0.03]" />
        <div className="absolute right-10 md:right-16 top-10 md:top-16 bottom-24 md:bottom-32 w-[1px] bg-black/[0.03]" />
        <div className="absolute left-10 md:left-16 right-10 md:right-16 top-10 md:top-16 h-[1px] bg-black/[0.03]" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="text-[16vw] font-black text-black tracking-tighter blur-3xl">
          SACROSANCT
        </span>
      </motion.div>

      <div className="hidden md:block">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-10 md:top-16 left-10 md:left-16 w-12 md:w-16 h-[1px] bg-black/10 origin-left" 
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-10 md:top-16 left-10 md:left-16 w-[1px] h-12 md:h-16 bg-black/10 origin-top" 
        />

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-10 md:top-16 right-10 md:right-16 w-12 md:w-16 h-[1px] bg-black/10 origin-right" 
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-10 md:top-16 right-10 md:right-16 w-[1px] h-12 md:h-16 bg-black/10 origin-top" 
        />

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 md:bottom-16 left-10 md:left-16 w-12 md:w-16 h-[1px] bg-black/10 origin-left" 
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 md:bottom-16 left-10 md:left-16 w-[1px] h-12 md:h-16 bg-black/10 origin-bottom" 
        />

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 md:bottom-16 right-10 md:right-16 w-12 md:w-16 h-[1px] bg-black/10 origin-right" 
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 md:bottom-16 right-10 md:right-16 w-[1px] h-12 md:h-16 bg-black/10 origin-bottom" 
        />
      </div>

      <div className="md:hidden relative z-10 flex items-center justify-center w-full px-6 -mt-16">
        <motion.img
          src="/logo-full.png"
          alt="SACROSANCT"
          className="h-9 sm:h-12 w-auto object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="hidden md:flex relative z-10 flex-row items-center justify-center gap-6 select-none w-full px-4 -mt-24">
        <motion.img
          src="/favicon-new.png"
          alt="SACROSANCT Logo"
          className="w-32 h-32 object-contain shrink-0 -translate-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        />

        <div className="relative flex items-center justify-start w-fit h-[120px] overflow-visible">
          
          <div 
            className="font-cursive text-[6.8rem] font-black text-[#111827]/5 tracking-wider leading-none whitespace-nowrap select-none pr-8"
            style={{ WebkitTextStroke: '2.4px rgba(17, 24, 39, 0.03)' }}
          >
            Sacrosanct
          </div>

          <div 
            className="absolute left-0 top-[-30%] h-[160%] overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 font-cursive text-[6.8rem] font-black text-[#111827] tracking-wider leading-none whitespace-nowrap select-none pr-8"
              style={{ WebkitTextStroke: '2.4px #111827' }}
            >
              Sacrosanct
            </div>

            {progress < 100 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 pointer-events-none z-10 animate-scribble">
                <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_2px_#ffffff] z-20" />
                <div className="absolute w-7 h-7 bg-[#2563eb]/30 rounded-full blur-[2px] animate-ping z-10" style={{ animationDuration: '1.6s' }} />
                <div className="absolute w-12 h-12 glow-aura rounded-full blur-[2px] z-0" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 md:bottom-16 left-8 md:left-16 right-8 md:right-16 flex flex-col items-start gap-4">
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#111827]/40 mb-1"
            >
              Sacrosanct Atelier
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#111827]/20 italic"
            >
              Something you can&apos;t compromise.
            </motion.span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-3xl md:text-6xl font-black tracking-tighter text-[#111827] tabular-nums">
              {progress}
            </span>
            <span className="text-xs md:text-sm font-black text-[#2563eb]">%</span>
          </motion.div>
        </div>

        <div className="w-full h-[1px] bg-black/10 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-[#2563eb]"
            style={{ transform: `translateX(${progress - 100}%)`, transition: 'transform 0.1s linear' }}
          />
        </div>

        <div className="flex justify-between w-full opacity-30 text-[#111827]">
           <div className="flex gap-4">
              <span className="text-[8px] font-black uppercase tracking-widest">Archive-01</span>
              <span className="text-[8px] font-black uppercase tracking-widest">/</span>
              <span className="text-[8px] font-black uppercase tracking-widest">Season 26</span>
           </div>
           <span className="text-[8px] font-black uppercase tracking-widest">Universal Studio Line</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
