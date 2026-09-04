import React from 'react';
import { X, ShieldCheck, MapPin, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutUsModal: React.FC<AboutUsModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-2xl">
        
        {/* Top Minimalist Header */}
        <div className="flex items-center justify-between border-b border-stone-100 bg-[#FAF9F6] px-6 sm:px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.24em] text-amber-900 uppercase">
              About Ackerman CPAs &bull; Louisville, KY
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-stone-400 hover:bg-stone-200 hover:text-stone-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[65svh] sm:max-h-[75vh] overflow-y-auto space-y-6">
          
          <div>
            <span className="text-xs font-sans tracking-widest text-amber-800 uppercase font-medium">
              Our Practice &bull; Established 1998
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mt-1 leading-tight">
              A Legacy of Strategic Financial Trust
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-amber-600" />
          </div>

          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Louisville, Kentucky, Ackerman CPAs was founded with a singular commitment: to provide business owners, medical and professional practices, and high-net-worth families with the highest standard of strategic tax structuring, assurance, and fiduciary accounting advisory.
          </p>

          <p className="font-sans text-stone-600 text-sm leading-relaxed">
            We believe accounting should not merely be a retrospective record of the past, but an active, forward-looking compass that protects your capital, minimizes liability, and allows you to invest your time and focus on leading your enterprise.
          </p>

          {/* Pillars of Practice */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-stone-200/70 bg-stone-50/60 p-4">
              <div className="flex items-center gap-2 mb-1.5 text-amber-900">
                <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider">
                  Partner-Led Engagements
                </h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Direct access to seasoned CPAs with deep expertise across Kentucky tax statutes and federal compliance.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200/70 bg-stone-50/60 p-4">
              <div className="flex items-center gap-2 mb-1.5 text-amber-900">
                <Award className="h-4 w-4 text-amber-700 shrink-0" />
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider">
                  Absolute Discretion
                </h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Stringent confidentiality protocols safeguarding corporate financials and private wealth assets.
              </p>
            </div>
          </div>

          {/* Louisville Office Footprint */}
          <div className="border-t border-stone-100 pt-5 flex items-center justify-between text-xs text-stone-500 font-sans">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-700" />
              <span>Louisville, KY &bull; (502) 589-3200</span>
            </div>
            <span className="text-amber-900 font-medium">AICPA &amp; KyCPA Member</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="border-t border-stone-100 bg-[#FAF9F6] px-6 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-sans text-stone-500 hover:text-stone-800 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-2 text-xs font-sans font-semibold tracking-wider text-amber-100 hover:bg-amber-800 transition-colors"
          >
            <span>SCHEDULE CONSULTATION</span>
            <ArrowRight className="h-3.5 w-3.5 text-amber-300" />
          </button>
        </div>

      </div>
    </div>
  );
};
