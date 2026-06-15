import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactSection: React.FC = () => {
  const [sentStatus, setSentStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const renderSendButton = () => (
    <button
      onClick={(e) => {
        e.preventDefault();
        setSentStatus('sending');
        setTimeout(() => setSentStatus('done'), 2000);
        setTimeout(() => setSentStatus('idle'), 5000);
      }}
      className={`group relative w-[130px] h-[48px] md:h-[54px] items-center justify-center rounded-xl overflow-hidden cursor-pointer flex transition-all duration-300 ${
        sentStatus === 'idle' ? 'bg-[#161c2d] hover:bg-[#2563eb]' : 'bg-[#2563eb]'
      } hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] border-none`}
    >
      <AnimatePresence mode="wait">
        {sentStatus === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white">SEND</span>
            <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </motion.div>
        )}
        {sentStatus === 'sending' && (
          <motion.div
            key="sending"
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-60, 0, 0, 200],
              scale: [0.8, 1, 1, 0.5],
              rotate: [0, 0, 0, 15]
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
            className="relative"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </motion.div>
        )}
        {sentStatus === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white">SENT</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );

  return (
    <section id="contact" className="bg-[#f8f9fa] text-[#1e293b] border-t border-black/5 overflow-hidden">
      <div className="md:hidden bg-white pt-8 pb-12 px-2">
        <div className="m-4 border border-gray-100 rounded-[2.5rem] p-6 shadow-sm flex flex-col gap-4">
          <div className="space-y-1 mb-2">
            <h2 className="text-[32px] font-black tracking-tight text-[#111] leading-none uppercase italic">
              Contact <span className="text-[#2563eb] not-italic">Us</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#2563eb]"></div>
            <p className="text-[13px] text-gray-400 font-bold tracking-[0.05em] uppercase pt-1">Get in touch</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-[10px] font-black tracking-widest text-[#111]/40 ml-1 uppercase">
                    Full Name <span className="text-[#2563eb]">*</span>
                  </label>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <User className="w-4 h-4" />
                    </div>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#2563eb', boxShadow: '0 0 0 1px #2563eb' }}
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl py-3 pl-10 pr-3 focus:border-[#2563eb] focus:ring-0 focus:outline-none transition-all text-sm outline-none font-medium relative z-0"
                    />
                  </motion.div>
                </div>
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-[10px] font-black tracking-widest text-[#111]/40 ml-1 uppercase">
                    Your Email <span className="text-[#2563eb]">*</span>
                  </label>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <Mail className="w-4 h-4" />
                    </div>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#2563eb', boxShadow: '0 0 0 1px #2563eb' }}
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl py-3 pl-10 pr-3 focus:border-[#2563eb] focus:ring-0 focus:outline-none transition-all text-sm outline-none font-medium relative z-0"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-[10px] font-black tracking-widest text-[#111]/40 ml-1 uppercase">Your Mobile Number</label>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: '#2563eb', boxShadow: '0 0 0 1px #2563eb' }}
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl py-3 pl-10 pr-3 focus:border-[#2563eb] focus:ring-0 focus:outline-none transition-all text-sm outline-none font-medium relative z-0"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </motion.div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-[10px] font-black tracking-widest text-[#111]/40 ml-1 uppercase">Message</label>
                <motion.textarea
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileFocus={{ scale: 1.01, borderColor: '#2563eb', boxShadow: '0 0 0 1px #2563eb' }}
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 focus:border-[#2563eb] focus:ring-0 focus:outline-none transition-all text-sm outline-none resize-none font-medium"
                />
              </div>
            </div>

            <div className="pt-2">
              {renderSendButton()}
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:block">
        <ScrollReveal variant="rise" amount={0.08}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div className="grid md:grid-cols-2 items-center gap-4 md:gap-12 lg:gap-20">
              <div className="relative aspect-[1.15/1] w-full overflow-hidden rounded-none shadow-sm border border-black/5">
                <img
                  src="/contact_models.png"
                  alt="Sacrosanct Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#161c2d]/5 mix-blend-multiply transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-4 md:mb-8 uppercase leading-none text-[#1e293b]">
                  Contact <span className="text-[#2563eb]">Us</span>
                </h2>

                <div className="border-t border-l border-black p-4 md:p-8 relative bg-white/50 backdrop-blur-sm">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2 order-1 md:order-1">
                      <label className="text-base font-semibold text-[#1A1F3A]">Full Name</label>
                      <motion.input
                        whileFocus={{ borderBottomColor: '#2563eb', scaleX: 1.02 }}
                        type="text"
                        className="bg-transparent border-b border-black py-1 focus:border-[#2563eb] transition-colors focus:outline-none origin-left"
                      />
                    </div>
                    <div className="pl-6 border-l border-black/10 space-y-0.5 order-4 md:order-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#1A1F3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#1A1F3A]/60">Contact</h4>
                      </div>
                      <p className="text-lg text-[#1A1F3A] font-light tracking-tight">hi@sacrosanct.studio</p>
                    </div>

                    <div className="flex flex-col gap-2 order-2 md:order-3">
                      <label className="text-base font-semibold text-[#1A1F3A]">Mobile Number</label>
                      <motion.input
                        whileFocus={{ borderBottomColor: '#2563eb', scaleX: 1.02 }}
                        type="tel"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                        }}
                        className="bg-transparent border-b border-black py-1 focus:border-[#2563eb] transition-colors focus:outline-none origin-left"
                      />
                    </div>
                    <div className="pl-6 border-l border-black/10 space-y-0.5 order-5 md:order-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#1A1F3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#1A1F3A]/60">Flagship Store</h4>
                      </div>
                      <p className="text-lg text-[#1A1F3A] font-light tracking-tight leading-relaxed">Bangalore, <br className="hidden sm:block" /> India</p>
                    </div>

                    <div className="flex flex-col gap-4 order-3 md:order-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-base font-semibold text-[#1A1F3A]">Message</label>
                        <motion.textarea
                          whileFocus={{ borderBottomColor: '#2563eb', scaleX: 1.02 }}
                          className="bg-transparent border-b border-black py-1 focus:border-[#2563eb] transition-colors focus:outline-none min-h-[50px] resize-none origin-left"
                        ></motion.textarea>
                      </div>
                      <div className="md:hidden">
                        {renderSendButton()}
                      </div>
                    </div>
                    <div className="pl-6 border-l border-black/10 space-y-0.5 order-6 md:order-6">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#1A1F3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#1A1F3A]/60">Assistance</h4>
                      </div>
                      <p className="text-lg text-[#1A1F3A] font-light tracking-tight leading-relaxed">E-commerce Inquiries</p>
                    </div>

                    <div className="hidden md:flex items-center order-7 md:order-7">
                      {renderSendButton()}
                    </div>
                    <div className="hidden md:flex items-center gap-8 pl-2 order-8 md:order-8 text-[#1A1F3A]">
                      <a href="#" className="group relative flex items-center justify-center text-[#1A1F3A]/60 hover:text-[#2563eb] transition-all duration-300">
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1F3A] text-white text-[9px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1A1F3A]">
                          Facebook
                        </span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      
                      <a href="#" className="group relative flex items-center justify-center text-[#1A1F3A]/60 hover:text-[#2563eb] transition-all duration-300">
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1F3A] text-white text-[9px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1A1F3A]">
                          Instagram
                        </span>
                        <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      
                      <a href="#" className="group relative flex items-center justify-center text-[#1A1F3A]/60 hover:text-[#2563eb] transition-all duration-300">
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1F3A] text-white text-[9px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1A1F3A]">
                          X
                        </span>
                        <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                        </svg>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
