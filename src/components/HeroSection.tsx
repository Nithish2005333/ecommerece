import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GalleryCategory {
  name: string;
  floatDuration: number;
  h: string;
  mb: string;
  shadow: string;
  color: string;
  desktopOnly?: boolean;
  tabletOnly?: boolean;
  images: string[];
  label: string;
}

const galleryCategories: GalleryCategory[] = [
  {
    name: 'shirts',
    label: 'Shirts',
    floatDuration: 4.2,
    h: 'h-[55%] sm:h-[60%]',
    mb: 'mb-12 sm:mb-16 md:mb-32 lg:mb-36',
    shadow: 'shadow-xl',
    color: 'bg-[#a7d7c5]',
    desktopOnly: true,
    images: [
      '/shirts/collection_shirts.png',
      '/shirts/shirt (1).png',
      '/shirts/shirt (2).png',
      '/shirts/shirt (3).png',
      '/shirts/shirt (4).png',
      '/shirts/shirt (5).png',
      '/shirts/shirt_featured.png',
    ],
  },
  {
    name: 'hoodies',
    label: 'Hoodies',
    floatDuration: 5.5,
    h: 'h-[65%] sm:h-[70%]',
    mb: 'mb-4 sm:mb-6 md:mb-16 lg:mb-20',
    shadow: 'shadow-2xl',
    color: 'bg-[#e7a4b8]',
    tabletOnly: true,
    images: [
      '/hoodies/hoodie (5).png',
      '/hoodies/hoodie (3).png',
      '/hoodies/hoodie (2).png',
      '/hoodies/hoodie (1).png',
      '/hoodies/hoodie (6).png',
      '/hoodies/sacred_hoodie.png',
    ],
  },
  {
    name: 'jackets',
    label: 'Puffer',
    floatDuration: 4.8,
    h: 'h-[50%] sm:h-[65%]',
    mb: 'mb-24 sm:mb-16 md:mb-32 lg:mb-36',
    shadow: 'shadow-md',
    color: 'bg-[#f2c14e]',
    images: [
      '/jackets/hyper_puffer_v1.png',
      '/jackets/jacket (1).png',
      '/jackets/jacket (2).png',
      '/jackets/jacket (3).png',
      '/jackets/jacket (4).png',
      '/jackets/vanguard_overcoat.png',
    ],
  },
  {
    name: 'accesories',
    label: 'Accessories',
    floatDuration: 6.2,
    h: 'h-[60%] sm:h-[75%]',
    mb: 'mb-20 sm:mb-24 md:mb-40 lg:mb-44',
    shadow: 'shadow-xl',
    color: 'bg-[#e07a5f]',
    images: [
      '/accesories/chain 2.jpeg',
      '/accesories/ring.jpeg',
      '/accesories/wallet.jpeg',
      '/accesories/Custom Coin Silver Necklace.jpeg',
      '/accesories/Men Metal Decor Small Wallet.jpeg',
      '/accesories/Men Sun Pendant Necklace, For Jewelry Gift And Party.jpeg',
      '/accesories/Men Two Tone Textured Ring.jpeg',
    ],
  },
  {
    name: 'pant',
    label: 'Denim',
    floatDuration: 5.0,
    h: 'h-[80%] sm:h-[95%]',
    mb: 'mb-12 sm:mb-28 md:mb-32 lg:mb-40',
    shadow: 'shadow-2xl',
    color: 'bg-[#f4dcd6]',
    images: [
      '/pant/linear_denim.png',
      '/pant/pant (1).png',
      '/pant/pant (2).png',
      '/pant/pant (3).png',
      '/pant/pant (4).png',
      '/pant/pant (5).png',
    ],
  },
];

const GalleryCard: React.FC<{ category: GalleryCategory; index: number; isMobile?: boolean }> = ({
  category,
  index,
  isMobile,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const startOffset = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
      }, 4500 + index * 800);

      return () => clearInterval(interval);
    }, index * 500);

    return () => clearTimeout(startOffset);
  }, [category.images.length, index]);

  const roundedClass = isMobile
    ? 'rounded-t-[12rem]'
    : 'rounded-t-[200px] md:rounded-t-[300px]';

  return (
    <div
      className={`relative w-full h-full ${roundedClass} overflow-hidden ${category.shadow} border-[3px] border-white/60 group cursor-pointer`}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={category.images[currentImageIndex]}
          src={category.images[currentImageIndex]}
          alt={category.label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>

      <div
        className={`absolute inset-0 ${category.color} mix-blend-multiply pointer-events-none z-10`}
      />
    </div>
  );
};

const HeroSection: React.FC = () => {
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const cardWidth = window.innerWidth * 0.75;
      container.scrollLeft = cardWidth * 5;
    }
  }, []);

  return (
    <section className="relative w-full h-[85svh] sm:h-[85svh] min-h-[600px] md:min-h-[700px] max-h-[1100px] overflow-hidden bg-[#ECECF1] flex flex-col md:flex-row items-center pt-8 sm:pt-0">
      <style>{`
        .uiverse-button {
          height: 38px;
          width: 186px;
          background-color: #161c2d;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: block;
          padding: 0;
        }

        .uiverse-button:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .default-state {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 6px;
          height: 100%;
          width: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-in-out;
          transform: translateY(0) scale(1) rotate(0deg);
          opacity: 1;
        }

        .hover-state {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 6px;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-in-out;
          transform: translateY(38px);
        }

        .uiverse-button:hover .default-state {
          transform: translateY(-38px) scale(0.8) rotate(12deg);
          opacity: 0;
        }

        .uiverse-button:hover .hover-state {
          transform: translateY(0);
        }
      `}</style>

      <div className="absolute top-[12%] sm:top-[8%] md:top-[13%] left-[4%] md:left-[2.5%] lg:left-[3.5%] w-full max-w-[800px] z-20 pointer-events-auto text-left px-4">

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 2.9,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1] as any
            }}
            className="text-[38px] sm:text-4xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter mb-2 text-balance leading-[1.05] text-[#1e293b] drop-shadow-sm"
          >
            Something you <br />
            <span className="text-[#2563eb]">can&apos;t compromise</span>
          </motion.h1>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-1 max-w-[800px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.8 }}
            className="text-[14px] md:text-sm text-slate-700 max-w-[420px] leading-relaxed font-medium text-balance"
          >
            Discover the sacred standard. A collection where integrity is
            interwoven with every thread.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.5, duration: 0.6 }}
          >
            <button className="uiverse-button sm:-ml-4 md:-ml-15 mt-2 sm:mt-0" aria-label="New Collection">
              <div className="default-state">
                <span className="text-[12px] font-bold text-white tracking-tight">New Collection</span>
                <div className="bg-white text-[#161c2d] rounded-full w-[26px] h-[26px] flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="hover-state">
                <span className="text-[12px] font-bold text-white tracking-tight">Shop Now</span>
                <div className="bg-[#2563eb] text-white rounded-full w-[26px] h-[26px] flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 sm:bottom-[-4%] md:bottom-[-12%] lg:bottom-[-8%] h-[55%] sm:h-[75%] md:h-[80%] z-10 pointer-events-none">

        <div ref={mobileScrollRef} className="flex sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full items-end gap-0 px-4 pb-14 pointer-events-auto">
          {(() => {
            const mobileOrder = [galleryCategories[2], galleryCategories[3], galleryCategories[4], galleryCategories[0], galleryCategories[1]];
            return [...mobileOrder, ...mobileOrder, ...mobileOrder];
          })().map((item, idx) => (
            <motion.div
              key={idx}
              className="snap-center shrink-0 w-[75vw] h-full px-3"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3.0 + (idx % 5 * 0.05), duration: 0.8 }}
            >
              <div className="relative w-full h-[98%]">
                <GalleryCard category={item} index={idx} isMobile={true} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden sm:flex flex-row justify-center items-end gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-[1700px] px-2 sm:px-4 h-full pb-0 pointer-events-auto mx-auto translate-y-[5%]">
          {galleryCategories.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.9 + (idx * 0.1),
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1] as any
              }}
              className={`relative flex-1 max-w-[320px] ${item.h} ${item.mb} ${item.desktopOnly ? 'hidden md:block' : ''} ${item.tabletOnly ? 'hidden sm:block' : ''}`}
            >
              <GalleryCard category={item} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
