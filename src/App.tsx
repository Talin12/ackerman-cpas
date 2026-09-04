import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUsSection } from './components/AboutUsSection';
import { AboutUsModal } from './components/AboutUsModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CalendarCheck } from 'lucide-react';

const BACKGROUND_IMAGE_URL =
  'https://res.cloudinary.com/duk9coqow/image/upload/v1788527071/Generating_new_firm_frame_2K_202609041833_impbwe.jpg';

const MOBILE_BACKGROUND_IMAGE_URL =
  'https://res.cloudinary.com/duk9coqow/image/upload/v1788529409/Create_9_16_website_background_r__202609041913_so6hmj.jpg';

export default function App() {
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-stone-900 selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      
      {/* Top Navbar inspired by the reference website */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onScrollToAbout={scrollToAbout}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Left-Aligned Editorial Punch & Directional Background Gradient */}
        <HeroSection
          bgImageUrl={BACKGROUND_IMAGE_URL}
          mobileBgImageUrl={MOBILE_BACKGROUND_IMAGE_URL}
          onOpenConsultation={() => setConsultationOpen(true)}
          onScrollToAbout={scrollToAbout}
        />

        {/* Dedicated "About Us" Section directly inspired by the second reference image */}
        <AboutUsSection
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      </main>

      {/* Clean, Refined Footer */}
      <footer className="relative z-10 border-t border-stone-200/70 bg-[#FAF9F6] py-6 px-6 sm:px-8 lg:px-12 text-xs font-sans text-stone-500">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="font-semibold text-stone-900">
              Ackerman CPAs
            </span>
            <span className="hidden sm:inline text-stone-300">&bull;</span>
            <span>400 West Market Street, Suite 1800, Louisville, KY 40202</span>
            <span className="hidden sm:inline text-stone-300">&bull;</span>
            <span>(502) 589-3200</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToAbout}
              className="text-stone-600 hover:text-amber-800 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => setConsultationOpen(true)}
              className="font-medium text-amber-900 hover:text-stone-950 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-4 pt-4 border-t border-stone-200/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] text-stone-400">
          <p>&copy; {new Date().getFullYear()} Ackerman CPAs. All rights reserved.</p>
          <p>Licensed by Kentucky State Board of Accountancy &bull; AICPA Member</p>
        </div>
      </footer>

      {/* Floating consultation action — styled off the primary CTA so it reads as
          part of the firm's identity rather than a third-party chat widget */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setConsultationOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-stone-950 text-white ring-1 ring-amber-600/30 shadow-[0_8px_28px_-6px_rgba(28,25,23,0.45)] transition-all duration-300 hover:bg-stone-800 hover:ring-amber-500/60 active:scale-95"
          aria-label="Schedule a consultation"
        >
          <CalendarCheck className="h-[22px] w-[22px] text-amber-400 transition-transform duration-300 group-hover:scale-110" />
          {/* Tooltip — pointer devices only; it can't be dismissed on touch */}
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded bg-stone-950 px-3 py-1.5 text-xs font-sans font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
            Schedule a Consultation
          </span>
        </button>
      </div>

      {/* Modals */}
      <AboutUsModal
        isOpen={aboutUsOpen}
        onClose={() => setAboutUsOpen(false)}
        onOpenConsultation={() => {
          setAboutUsOpen(false);
          setConsultationOpen(true);
        }}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

    </div>
  );
}
