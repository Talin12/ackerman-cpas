import React from 'react';
import { ShieldCheck, Award, Building2, Users } from 'lucide-react';

export const TrustMetricsBar: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      number: '25+',
      label: 'Years in Practice',
      description: 'Serving the greater Louisville commonwealth since 1998'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Licensed CPAs',
      description: 'AICPA and Kentucky State Board of Accountancy certified'
    },
    {
      icon: Building2,
      number: '$450M+',
      label: 'Client Capital Advised',
      description: 'Strategic tax efficiency and audit defense across diverse entities'
    },
    {
      icon: Users,
      number: '98.4%',
      label: 'Annual Retention',
      description: 'Long-term client relationships built on precision and discretion'
    }
  ];

  return (
    <section className="relative border-y border-stone-200/80 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Label */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[11px] font-sans font-medium tracking-[0.25em] text-stone-400 uppercase">
            Institutional Trust &bull; Fiduciary Rigor &bull; Discretion
          </p>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-amber-600/60" />
        </div>

        {/* 4-column Trust Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center p-4 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Metric Icon with Subtle Gold Accents */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-amber-900/20 bg-stone-50 text-amber-800 transition-colors group-hover:border-amber-700 group-hover:bg-amber-50">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Number in Luxurious Serif */}
                <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
                  {item.number}
                </span>

                {/* Metric Label */}
                <span className="mt-1 text-xs font-sans font-semibold tracking-wider text-amber-900 uppercase">
                  {item.label}
                </span>

                {/* Subtext */}
                <p className="mt-2 text-xs font-sans text-stone-500 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Association Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 border-t border-stone-100 pt-8 text-[11px] font-sans tracking-wider text-stone-500 uppercase">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            AICPA Member Firm
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Kentucky Society of CPAs (KyCPA)
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            IRS Authorized E-File Provider
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            QuickBooks Certified ProAdvisors
          </span>
        </div>

      </div>
    </section>
  );
};
