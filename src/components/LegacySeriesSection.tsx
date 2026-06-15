import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const LegacySeriesSection: React.FC = () => {
  return (
    <section className="relative bg-[#ECECF1] py-16 md:py-24 overflow-hidden border-t border-black/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-full md:hidden opacity-[0.12] pointer-events-none z-0 scale-125">
          <img
            src="/philosophy_image.png"
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative grid md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[420px] md:min-h-0">
          <ScrollReveal variant="fade-right" amount={0.15}>
            <div className="relative group p-0 md:p-2 z-10 md:z-auto max-w-[500px] mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-white/60 md:hidden z-[5] rounded-[1.5rem]"></div>

              <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl border border-white/20 bg-slate-100">
                <img
                  src="/philosophy_image.png"
                  alt="Philosophy"
                  className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-[1.05] transition-transform duration-[2500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#2563eb]/20 rounded-bl-3xl hidden lg:block -z-10"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#2563eb]/20 rounded-tr-3xl hidden lg:block -z-10"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.18} amount={0.15}>
            <div className="relative flex flex-col items-start gap-6 z-10 py-2 md:py-0 pl-4 md:pl-0">
              <div className="space-y-4">
                <div className="flex items-center gap-3 group/meta cursor-default">
                  <span className="text-[9px] font-black tracking-[0.3em] text-[#2563eb] uppercase bg-[#2563eb]/5 px-3 py-1 rounded-full border border-[#2563eb]/10">
                    Legacy Series
                  </span>
                  <div className="h-px w-8 bg-[#2563eb]/20 group-hover/meta:w-16 transition-all duration-500"></div>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.9] text-slate-900">
                  The <span className="italic text-[#2563eb] drop-shadow-sm">Complete</span> <br className="hidden md:block" />
                  <span className="inline-block translate-x-0 md:translate-x-4">Uniform</span>
                </h2>
              </div>

              <div className="space-y-5 border-l-[3px] border-[#2563eb]/10 pl-6 md:pl-8 py-2">
                <p className="text-sm md:text-base font-semibold text-slate-700 leading-relaxed max-w-lg italic">
                  &quot;At SACROSANCT, we curate collections that speak to the modern individual who refuses to compromise on quality or aesthetics.&quot;
                </p>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-md font-medium">
                  Each piece is carefully selected, representing the pinnacle of contemporary fashion editorial. We don&apos;t follow trends—we set them with unwavering intent.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-10">
                <button
                  className="group relative flex items-center gap-4 md:gap-8 bg-slate-950 text-white pl-5 pr-3.5 py-3 md:pl-8 md:pr-5 md:py-4 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)] hover:scale-[1.02] cursor-pointer border-none"
                >
                  <div className="absolute inset-x-0 bottom-0 top-full bg-[#2563eb] group-hover:top-0 transition-all duration-500 ease-in-out z-0 opacity-90"></div>

                  <div className="relative z-10 flex items-center gap-3 md:gap-6">
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] md:text-[10px] font-black tracking-[0.25em] md:tracking-[0.4em] uppercase leading-none mb-1 text-white">
                        Enter the Gallery
                      </span>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-white/10 rounded-full scale-150 group-hover:scale-[2.5] transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                      <ArrowRight className="relative w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform duration-500 text-white" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LegacySeriesSection;
