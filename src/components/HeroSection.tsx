import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onScrollToAbout: () => void;
  bgImageUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToAbout,
  bgImageUrl,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // 0 while the hero sits at the top of the viewport, 1 once it has fully
  // scrolled past it — so the zoom tracks the scrollbar in both directions.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // A stiff spring smooths coarse wheel/trackpad ticks without lagging the scrollbar.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 34,
    restDelta: 0.001,
  });

  // The zoom is front-loaded: it reaches full scale by 70% of the hero's travel,
  // so the movement reads clearly before the section leaves the viewport.
  const scale = useTransform(smoothProgress, [0, 0.7], [1, 1.5]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* 2K Crisp Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img
          src={bgImageUrl}
          alt="Ackerman CPAs Louisville Corporate Office"
          className="h-full w-full object-cover object-[70%_center] sm:object-center will-change-transform"
          style={prefersReducedMotion ? undefined : { scale }}
        />

        {/* Directional High-Key Fade:
            Crisp pure white on left behind typography, seamlessly blending
            into the bright, natural 2K architectural photography on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-25% sm:via-white/85 sm:via-45% md:via-white/50 md:via-60% to-transparent" />
        
        {/* Subtle top & bottom vignette to softly frame the scene */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Hero Content Container - Left Aligned for Maximum Precision */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow / Location Pill */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-white/95 px-3.5 py-1 text-[11px] font-sans font-semibold tracking-wider text-amber-900 shadow-2xs backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span>LOUISVILLE, KY &bull; CERTIFIED PUBLIC ACCOUNTANTS</span>
          </div>

          {/* Bespoke, Commanding Headline for Ackerman CPAs */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-stone-950 leading-[1.08] mb-5 sm:mb-6">
            Command Your Financial Position.
            <span className="block font-serif italic font-normal text-amber-700 mt-1">
              Build Enduring Capital.
            </span>
          </h1>

          {/* Reframed Original Value Proposition */}
          <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed mb-8 max-w-lg">
            <span className="font-semibold text-stone-900">
              Partner-led tax architecture, fiduciary assurance, and proactive wealth protection
            </span>{' '}
            for Kentucky entrepreneurs, healthcare practices, and family offices.
          </p>

          {/* Premium Call to Action Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Solid Button */}
            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center justify-center gap-3 rounded bg-stone-950 px-8 py-4 text-xs font-sans font-bold tracking-[0.14em] text-white shadow-lg shadow-stone-950/15 transition-all duration-200 hover:bg-stone-800 hover:shadow-xl active:scale-98"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="h-4 w-4 text-amber-400 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Crisp White Button */}
            <button
              onClick={onScrollToAbout}
              className="inline-flex items-center justify-center gap-2 rounded border border-stone-300 bg-white/95 px-8 py-4 text-xs font-sans font-bold tracking-[0.14em] text-stone-800 shadow-2xs backdrop-blur-sm transition-all duration-200 hover:border-amber-700 hover:text-amber-900 hover:bg-white active:scale-98"
            >
              <span>EXPLORE OUR FIRM</span>
              <ChevronRight className="h-4 w-4 text-stone-400" />
            </button>
          </div>

          {/* Real Credential & Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-sans font-medium text-stone-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
              Kentucky Board Licensed
            </span>
            <span className="text-stone-300">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
              AICPA Peer-Reviewed
            </span>
            <span className="text-stone-300">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
              Established 1998
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
