import React from 'react';
import { X, FileText, Calculator, TrendingUp, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tax-strategy',
    title: 'Strategic Tax Planning & Compliance',
    category: 'Corporate & Individual',
    description:
      'Proactive, year-round multi-entity tax structuring designed to minimize liabilities, capitalize on deductions, and ensure absolute compliance with federal and Kentucky state tax statutes.',
    deliverables: [
      'Multi-tier corporate tax return preparation (1120, 1120-S, 1065)',
      'High-net-worth individual & family wealth strategies (1040, 706, 1041)',
      'State and Local Tax (SALT) nexus & multi-state apportionment',
      'IRS & Kentucky Department of Revenue audit representation',
    ],
  },
  {
    id: 'cfo-advisory',
    title: 'Fractional CFO & Executive Advisory',
    category: 'Strategic Growth',
    description:
      'High-level financial leadership for emerging and established enterprises needing senior strategic guidance, cash flow forecasting, and capital allocation without the overhead of an in-house CFO.',
    deliverables: [
      'Cash flow liquidity modeling & capital runway planning',
      'Mergers, acquisitions & due diligence support',
      'Banking relationships, covenant management & credit facilities',
      'Monthly executive board decks & KPI reporting suites',
    ],
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Full-Cycle Accounting & Controller Services',
    category: 'Operational Precision',
    description:
      'Turnkey accounting infrastructure built for clarity. We handle the daily entries, reconciliations, payroll compliance, and monthly closes so business leaders can focus on operational execution.',
    deliverables: [
      'Accrual and cash-basis general ledger management',
      'Automated reconciliation of accounts & credit lines',
      'Monthly GAAP-compliant financial statement packages',
      'Custom ERP & accounting tech stack implementation',
    ],
  },
  {
    id: 'assurance-review',
    title: 'Audits, Reviews & Compilations',
    category: 'Independent Assurance',
    description:
      'Rigorous independent verification of financial health demanded by commercial lenders, bonding agencies, institutional investors, and regulatory oversight bodies.',
    deliverables: [
      'Certified independent financial audits',
      'Analytical review engagements for commercial credit',
      'Notice-to-Reader financial compilations',
      'Internal control evaluations & fraud deterrence reviews',
    ],
  },
];

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="border-b border-stone-100 bg-[#FAF9F6] px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-amber-900 uppercase">
              Ackerman CPAs Practice Areas
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mt-1">
              Comprehensive Accounting & Advisory Services
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-200 hover:text-stone-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-sm font-sans text-stone-600 leading-relaxed max-w-3xl">
            Headquartered in Louisville, Kentucky, Ackerman CPAs delivers bespoke accounting, tax optimization, and fiduciary financial consulting to privately held corporations, medical practices, law firms, and family offices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-xl border border-stone-200/90 bg-stone-50/40 p-6 transition-all duration-300 hover:border-amber-600/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-sans font-semibold tracking-wider text-amber-800 uppercase">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-stone-900 mt-1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 border-t border-stone-200/60 pt-3">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-stone-700">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-amber-900 hover:text-stone-900 transition-colors"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200/80 bg-stone-50 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-700" />
            <span>All engagements adhere to AICPA professional standards and strict confidentiality.</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-md bg-stone-900 px-4 py-2 text-xs font-medium text-amber-100 hover:bg-stone-800"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
