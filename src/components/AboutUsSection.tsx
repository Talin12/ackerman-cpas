import React from 'react';
import { Award, Compass, Users, ArrowRight, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';

interface AboutUsSectionProps {
  onOpenConsultation: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenConsultation }) => {
  const industries = [
    'Healthcare & Physician Groups',
    'Commercial Real Estate & Syndicates',
    'Advanced Manufacturing & Logistics',
    'Bourbon, Spirits & Hospitality',
    'Family Offices & Private Wealth',
    'Construction & Engineering',
    'Technology & Professional Services',
    'Non-Profit & Foundation Trusts',
  ];

  return (
    <section id="about" className="relative bg-white py-20 lg:py-28 border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-0.5 w-8 bg-amber-600" />
          <span className="text-xs font-sans font-bold tracking-[0.22em] text-amber-800 uppercase">
            ABOUT OUR PRACTICE &bull; LOUISVILLE, KY
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Metrics (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-[1.14]">
              The strategic ally behind Kentucky’s{' '}
              <span className="font-serif italic font-normal text-amber-700">
                enduring
              </span>{' '}
              enterprises.
            </h2>

            {/* Gold Accent Bar */}
            <div className="mt-4 mb-10 h-1 w-16 bg-amber-600 rounded-full" />

            {/* 3 Bespoke Metric Counters */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-stone-100">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                  <Award className="h-4 w-4" />
                </div>
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  25+ Yrs
                </span>
                <span className="text-[11px] font-sans text-stone-500 font-medium mt-1 leading-snug">
                  Louisville Heritage
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                  <Compass className="h-4 w-4" />
                </div>
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  100%
                </span>
                <span className="text-[11px] font-sans text-stone-500 font-medium mt-1 leading-snug">
                  Partner-Led Advisory
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                  <Users className="h-4 w-4" />
                </div>
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  $500M+
                </span>
                <span className="text-[11px] font-sans text-stone-500 font-medium mt-1 leading-snug">
                  Capital Stewarded
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider text-amber-900 hover:text-stone-950 transition-colors group"
              >
                <span>SCHEDULE AN INITIAL CONSULTATION</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Original Editorial Narrative for Ackerman CPAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Headquartered on West Market Street in Louisville, <strong className="font-semibold text-stone-900">Ackerman CPAs</strong> was established in 1998 to provide privately held corporations, multi-generational family enterprises, and institutional leaders with an uncompromising caliber of fiduciary accounting and proactive tax structuring.
            </p>

            <p>
              We believe meaningful CPA advisory must look far beyond retrospective bookkeeping. By immersing our senior partners directly into your operational model, we uncover actionable tax mitigations, fortify liquidity reserves, and design financial frameworks that withstand economic cycles and state regulatory audits.
            </p>

            <p>
              As an <strong className="font-semibold text-stone-900">AICPA Peer-Reviewed Practice</strong> licensed by the <strong className="font-semibold text-stone-900">Kentucky State Board of Accountancy</strong>, our engagements operate under strict confidentiality and ethical governance—ensuring your corporate financials and personal wealth are guarded with absolute discretion.
            </p>

            {/* Core Sectors */}
            <div className="pt-4">
              <span className="text-xs font-semibold text-stone-500 tracking-wider uppercase block mb-3">
                Key Sector Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-stone-200 bg-stone-50/80 px-4 py-1.5 text-xs font-medium text-stone-700 hover:border-amber-600 hover:bg-white hover:text-amber-900 transition-all cursor-default"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
