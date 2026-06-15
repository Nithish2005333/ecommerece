import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0a0b] text-white pt-12 md:pt-16 pb-8 md:pb-12 overflow-hidden">
      <div className="absolute bottom-[-2%] right-[-2%] text-6xl sm:text-9xl md:text-[16rem] font-black italic select-none pointer-events-none tracking-tighter leading-none overflow-hidden opacity-5 md:opacity-[0.03] uppercase">
        <span 
          className="block"
          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)', color: 'transparent' }}
        >
          SACROSANCT
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-6 md:mb-8">
          <a href="/" className="inline-block h-8 md:h-10 hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="/logo-full.png" 
              alt="SACROSANCT" 
              className="h-full w-auto object-contain brightness-0 invert" 
            />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-6 mb-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl md:text-5xl font-black italic mb-2 tracking-tighter">
              JOURNAL
            </h3>
            <p className="text-[10px] text-white/30 max-w-sm mb-6 leading-relaxed font-black uppercase tracking-[0.2em]">
              SUBSCRIBE TO THE ARCHIVES FOR EXCLUSIVE MONTHLY RELEASES.
            </p>
            <form className="relative max-w-sm group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border-b border-white/10 py-3 pr-10 text-[10px] font-black tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2" aria-label="Subscribe">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-0">
            <div>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase mb-6 text-white/20">Collections</h4>
              <ul className="space-y-3">
                {['Archives', 'Editorial', 'Exclusives'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[11px] font-black tracking-widest uppercase hover:text-[#2563eb] transition-colors inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase mb-6 text-white/20">Service</h4>
              <ul className="space-y-3">
                {['Shipping', 'Returns', 'Sustainability'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[11px] font-black tracking-widest uppercase hover:text-[#2563eb] transition-colors inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase mb-6 text-white/20">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: InstagramIcon, href: '#' },
                  { icon: XIcon, href: '#' },
                  { icon: FacebookIcon, href: '#' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black tracking-[0.2em] text-white/10 uppercase">
            © 2026 SACROSANCT EDITORIAL.
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-[10px] font-black tracking-[0.2em] text-white/10 hover:text-white transition-colors uppercase underline-offset-4 hover:underline">Privacy</a>
             <a href="#" className="text-[10px] font-black tracking-[0.2em] text-white/10 hover:text-white transition-colors uppercase underline-offset-4 hover:underline">Terms</a>
             <a href="#" className="text-[10px] font-black tracking-[0.2em] text-white/10 hover:text-white transition-colors uppercase underline-offset-4 hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
