import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenServices: () => void;
  onOpenClientPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenServices,
  onOpenClientPortal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#FAF9F6] text-stone-700 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Bio (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="gold" />
            <p className="text-xs font-sans text-stone-600 leading-relaxed max-w-sm mt-3">
              Ackerman CPAs is a premier certified public accounting and fiduciary advisory firm headquartered in Louisville, Kentucky. Providing strategic tax planning, assurance, and executive advisory to high-performing businesses and families.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium text-amber-900">
                <ShieldCheck className="h-4 w-4 text-amber-700" />
                Licensed Kentucky CPA Firm #KY-CPA-44281
              </span>
            </div>
          </div>

          {/* Column 2: Louisville Office & Hours (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-stone-900 uppercase">
              Louisville Office
            </h4>
            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  400 West Market Street, Suite 1800<br />
                  Louisville, Kentucky 40202
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-700 shrink-0" />
                <a href="tel:5025893200" className="hover:text-amber-800 transition-colors">
                  (502) 589-3200
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-700 shrink-0" />
                <a href="mailto:advisory@ackermancpas.com" className="hover:text-amber-800 transition-colors">
                  advisory@ackermancpas.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-500">
                <Clock className="h-4 w-4 text-amber-700 shrink-0" />
                <span>Monday &ndash; Friday: 8:30 AM &ndash; 5:30 PM EST</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Direct Actions (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-stone-900 uppercase">
              Client & Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full rounded-md bg-stone-900 px-4 py-2 text-center text-xs font-semibold tracking-wider text-amber-100 hover:bg-amber-800 transition-colors"
                >
                  SCHEDULE CONSULTATION
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenClientPortal}
                  className="w-full rounded-md border border-stone-300 bg-white px-4 py-2 text-center text-xs font-medium text-stone-800 hover:border-amber-600 hover:bg-stone-50 transition-colors"
                >
                  SECURE CLIENT PORTAL
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenServices}
                  className="w-full text-left py-1 text-xs text-stone-600 hover:text-amber-900 transition-colors"
                >
                  &bull; Review Practice Areas &amp; Services
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Ackerman CPAs. All rights reserved. Professional Services under Kentucky Accountancy Board.
          </p>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Ackerman CPAs Privacy Notice: Client records and tax communications are kept strictly confidential."); }} className="hover:text-stone-800">
              Privacy Policy
            </a>
            <span className="text-stone-300">&bull;</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Professional Service: Certified under AICPA Standards."); }} className="hover:text-stone-800">
              Engagement Terms
            </a>
            <span className="text-stone-300">&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-amber-800 hover:text-stone-950 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
