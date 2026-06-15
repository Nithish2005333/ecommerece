import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';

export type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom'
  | 'zoom-out'
  | 'flip-up'
  | 'flip-left'
  | 'rise'
  | 'blur'
  | 'editorial'
  | 'unmask'
  | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const variantMap: Record<RevealVariant, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40, filter: 'blur(10px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  'zoom-out': {
    hidden: { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  'flip-up': {
    hidden: { opacity: 0, rotateX: 20, y: 20, filter: 'blur(5px)' },
    visible: { opacity: 1, rotateX: 0, y: 0, filter: 'blur(0px)' },
  },
  'flip-left': {
    hidden: { opacity: 0, rotateY: -15, x: -20, filter: 'blur(5px)' },
    visible: { opacity: 1, rotateY: 0, x: 0, filter: 'blur(0px)' },
  },
  rise: {
    hidden: { opacity: 0, y: 60, scale: 0.98, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(20px)', scale: 1.02 },
    visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  },
  editorial: {
    hidden: { opacity: 0, y: 50, rotateX: 5, scale: 0.97, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' },
  },
  unmask: {
    hidden: { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', y: 30 },
    visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', y: 0 },
  },
  none: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

function getTransition(variant: RevealVariant, duration: number, delay: number): Transition {
  if (variant === 'unmask') {
    return { duration: duration, delay, ease: [0.33, 1, 0.68, 1] };
  }
  return {
    duration,
    delay,
    ease: EXPO_OUT as any,
  };
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  amount = 0.1,
  once = true,
  className,
  stagger = false,
  staggerDelay = 0.05,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    amount: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.05 : amount,
    margin: '0px 0px -20px 0px'
  });

  const parentVariants: Variants = stagger
    ? {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    }
    : variantMap[variant];

  const isUnmask = variant === 'unmask';

  return (
    <motion.div
      ref={ref}
      className={`${className} ${isUnmask ? 'overflow-hidden' : ''}`}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={stagger ? undefined : getTransition(variant, duration, delay)}
      style={{
        perspective: '1200px',
        willChange: 'transform, opacity, filter, clip-path'
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  variant = 'rise',
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variantMap[variant]}
      transition={getTransition(variant, duration, 0)}
      style={{ willChange: 'transform, opacity, filter, clip-path' }}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      variants={variantMap['editorial']}
      animate={inView ? 'visible' : 'hidden'}
      transition={getTransition('editorial', 0.8, delay)}
      style={{
        perspective: '1200px',
        willChange: 'transform, opacity, filter'
      }}
    >
      {children}
    </motion.div>
  );
}
