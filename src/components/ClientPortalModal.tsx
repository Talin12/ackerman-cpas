import React, { useState } from 'react';
import { X, Lock, Shield, ArrowRight, UploadCloud, FileCheck, KeyRound } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'upload'>('login');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl">
        
        {/* Header */}
        <div className="border-b border-stone-100 bg-[#FAF9F6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-amber-700" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-amber-900 uppercase">
              Encrypted Client Vault
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-stone-400 hover:bg-stone-200 hover:text-stone-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-stone-100 bg-stone-50/50 text-xs font-sans font-medium text-stone-600">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'login'
                ? 'border-amber-600 text-stone-900 font-semibold bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Portal Sign In
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'upload'
                ? 'border-amber-600 text-stone-900 font-semibold bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Quick Document Drop-Off
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTab === 'login' ? (
            <form onSubmit={(e) => { e.preventDefault(); alert("Ackerman CPAs Secure Portal Authentication: Redirecting to verified client tenant..."); }} className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  Client Portal Access
                </h3>
                <p className="text-xs font-sans text-stone-500 mt-1">
                  Access your filed returns, quarterly financials, and secure communication channel.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Client ID or Authorized Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@enterprise.com"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-medium text-stone-700">
                    Password
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert("A password reset link will be sent to your verified CPA firm contact email."); }} className="text-[11px] text-amber-800 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/60 text-[11px] text-stone-500 flex items-start gap-2">
                <Shield className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  Protected by 256-bit TLS bank-level encryption. Session logged for compliance under IRS Pub 4557.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-stone-950 py-2.5 text-xs font-semibold tracking-wider text-amber-100 transition-colors hover:bg-amber-800"
                >
                  SECURE PORTAL LOGIN
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  Guest Document Drop-Off
                </h3>
                <p className="text-xs font-sans text-stone-500 mt-1">
                  Securely transmit tax records, W-2s, 1099s, or bank statements directly to your Ackerman CPA advisor.
                </p>
              </div>

              {uploadSuccess ? (
                <div className="rounded-xl border border-amber-300 bg-amber-50/50 p-6 text-center">
                  <FileCheck className="h-10 w-10 text-amber-700 mx-auto mb-2" />
                  <p className="font-serif text-lg font-medium text-stone-900">
                    Documents Encrypted & Delivered
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    Your assigned CPA has received an automated notification.
                  </p>
                  <button
                    onClick={() => setUploadSuccess(false)}
                    className="mt-4 rounded-md bg-stone-900 px-4 py-1.5 text-xs font-medium text-amber-100"
                  >
                    Upload Another Document
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setUploadSuccess(true)}
                  className="cursor-pointer rounded-xl border-2 border-dashed border-stone-300 hover:border-amber-600 bg-stone-50 hover:bg-amber-50/30 p-8 text-center transition-all"
                >
                  <UploadCloud className="h-10 w-10 text-stone-400 hover:text-amber-700 mx-auto mb-2" />
                  <p className="text-xs font-medium text-stone-800">
                    Click to browse files or drag and drop here
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    PDF, XLSX, CSV, or Scanned TIFF up to 50MB
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-100 bg-stone-50 px-6 py-3 text-center text-[11px] text-stone-400">
          Need immediate support? Call our Louisville operations desk at (502) 589-3200
        </div>
      </div>
    </div>
  );
};
