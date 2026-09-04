import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Shield, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    entityType: 'LLC / S-Corporation',
    serviceNeeded: 'Strategic Tax Planning',
    message: '',
    preferredContact: 'phone',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl">
        
        {/* Header Ribbon */}
        <div className="border-b border-stone-100 bg-[#FAF9F6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-amber-900 uppercase">
              Confidential Advisory Consultation
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-stone-400 hover:bg-stone-200 hover:text-stone-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[68svh] sm:max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900">
                Consultation Request Received
              </h3>
              <p className="mt-2 text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. A senior CPA from our Louisville office will contact you within 1 business day to confirm your consultation schedule.
              </p>

              <div className="mt-6 rounded-xl border border-amber-900/10 bg-stone-50 p-4 text-left max-w-md mx-auto text-xs text-stone-700 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Service Category:</span>
                  <span className="font-medium text-stone-900">{formData.serviceNeeded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Primary Contact:</span>
                  <span className="font-medium text-stone-900">{formData.phone || formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-medium text-stone-900">Louisville, KY Office or Virtual</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg bg-stone-900 px-6 py-2.5 text-xs font-semibold tracking-wider text-amber-100 hover:bg-amber-800 transition-colors"
                >
                  RETURN TO HOME
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
                  Schedule a Complimentary Consultation
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Meet with our partner-level certified public accountants to review your tax structure, corporate bookkeeping, or executive advisory needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Jonathan Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Telephone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(502) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Company / Entity (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Louisville Medical Partners LLC"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Entity Classification
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 bg-white"
                    >
                      <option value="LLC / S-Corporation">LLC / S-Corporation</option>
                      <option value="C-Corporation">C-Corporation</option>
                      <option value="Partnership / LP">Partnership / LP</option>
                      <option value="Individual / High Net Worth">Individual / High Net Worth</option>
                      <option value="Estate & Trust">Estate & Trust</option>
                      <option value="Non-Profit / 501(c)(3)">Non-Profit / 501(c)(3)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Primary Practice Area Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 bg-white"
                    >
                      <option value="Strategic Tax Planning & Compliance">Strategic Tax Planning & Compliance</option>
                      <option value="Full-Service Accounting & Bookkeeping">Full-Service Accounting & Bookkeeping</option>
                      <option value="Fractional CFO & Advisory">Fractional CFO & Advisory</option>
                      <option value="Audits, Reviews & Compilations">Audits, Reviews & Compilations</option>
                      <option value="IRS Audit Defense & Resolution">IRS Audit Defense & Resolution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Brief Notes on Your Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide any context regarding upcoming filings, business acquisitions, or accounting restructuring..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2 text-[11px] text-stone-500">
                  <Shield className="h-4 w-4 text-amber-700 shrink-0" />
                  <span>
                    Strict client confidentiality guaranteed under Kentucky CPA professional ethics and standards.
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-stone-950 px-6 py-2.5 text-xs font-semibold tracking-wider text-amber-100 transition-all hover:bg-amber-800 hover:text-white"
                  >
                    <span>SUBMIT CONSULTATION REQUEST</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
