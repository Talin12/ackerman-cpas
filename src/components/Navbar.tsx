import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onScrollToAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onScrollToAbout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      // Scroll-spy: the active link follows the section actually in view.
      const about = document.getElementById('about');
      if (about && about.getBoundingClientRect().top <= 140) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToHome = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // The bar is transparent over the hero and turns solid once it sticks to the
  // top — or whenever the mobile sheet needs an opaque backdrop.
  const isSolid = isScrolled || mobileMenuOpen;

  const navLinkClass = (active: boolean) =>
    `relative py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.09em] transition-colors duration-200 ${
      active
        ? 'text-stone-950'
        : `${isSolid ? 'text-stone-500' : 'text-stone-700'} hover:text-stone-950`
    }`;

  const links: { label: string; onClick: () => void; active?: boolean }[] = [
    { label: 'Home', onClick: scrollToHome, active: activeSection === 'home' },
    { label: 'About Us', onClick: onScrollToAbout, active: activeSection === 'about' },
    { label: 'Why Us', onClick: onScrollToAbout },
    { label: 'Testimonials', onClick: onScrollToAbout },
    { label: 'Contact', onClick: onOpenConsultation },
    { label: 'Careers', onClick: onOpenConsultation },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[height,background-color,border-color,box-shadow] duration-300 ${
        isSolid
          ? 'h-14 border-stone-200 bg-white/95 shadow-[0_1px_16px_-6px_rgba(28,25,23,0.18)] backdrop-blur-md'
          : 'h-[72px] border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToHome();
          }}
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo compact={isSolid} />
        </a>

        {/* Primary navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {links.map((link) => (
            <button key={link.label} onClick={link.onClick} className={navLinkClass(!!link.active)}>
              {link.label}
              {link.active && (
                <span className="absolute -bottom-px left-0 h-[1.5px] w-full bg-amber-600" />
              )}
            </button>
          ))}
        </nav>

        {/* Actions — direct office line only; the primary CTA lives in the hero */}
        <a
          href="tel:5025893200"
          className="hidden shrink-0 items-center gap-1.5 font-sans text-[11.5px] font-medium tracking-wide text-stone-600 transition-colors hover:text-stone-950 lg:flex"
        >
          <Phone className="h-3.5 w-3.5 text-amber-700" />
          (502) 589-3200
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="-mr-2 rounded p-2 text-stone-700 transition-colors hover:bg-stone-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-56px)] overflow-y-auto border-b border-stone-200 bg-white shadow-xl lg:hidden">
          <nav className="flex flex-col px-6 py-2">
            {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    link.onClick();
                  }}
                  className="border-b border-stone-100 py-3.5 text-left font-sans text-[12px] font-medium uppercase tracking-[0.09em] text-stone-700 transition-colors hover:text-amber-800"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          <div className="space-y-3 px-6 pb-6 pt-4">
            <a
              href="tel:5025893200"
              className="flex items-center justify-center gap-2 font-sans text-[12px] font-medium text-stone-600"
            >
              <Phone className="h-3.5 w-3.5 text-amber-700" />
              Louisville: (502) 589-3200
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full rounded-sm bg-stone-950 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.11em] text-white"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
