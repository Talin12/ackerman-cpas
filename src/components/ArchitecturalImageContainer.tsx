import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Sliders, Check, ExternalLink, RefreshCw } from 'lucide-react';
import { HeroImageConfig } from '../types';

interface ArchitecturalImageContainerProps {
  config: HeroImageConfig;
  onChangeConfig: (newConfig: Partial<HeroImageConfig>) => void;
  onOpenConsultation: () => void;
}

// Curated high-quality, royalty-free architectural photography presets
export const ARCHITECTURAL_PRESETS = [
  {
    id: 'limestone-columns',
    title: 'Neoclassical Colonnade',
    subtitle: 'Institutional trust, permanence & structural integrity',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1600&q=80',
    location: 'Symmetric Stone Colonnade'
  },
  {
    id: 'minimalist-financial',
    title: 'Metropolitan Financial Facade',
    subtitle: 'Geometric precision, contemporary corporate advisory',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    location: 'Minimalist Glass & Granite Lines'
  },
  {
    id: 'vaulted-atrium',
    title: 'Monochromatic Light Atrium',
    subtitle: 'Clarity of vision, expansive executive perspective',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    location: 'Architectural Vaulting'
  }
];

export const ArchitecturalImageContainer: React.FC<ArchitecturalImageContainerProps> = ({
  config,
  onChangeConfig,
  onOpenConsultation,
}) => {
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState(config.imageUrl);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInputUrl.trim()) {
      onChangeConfig({ imageUrl: customInputUrl.trim() });
      setShowConfigModal(false);
    }
  };

  const currentPreset = ARCHITECTURAL_PRESETS.find(p => p.url === config.imageUrl);

  return (
    <div className="relative w-full">
      {/* Outer framing container with subtle gold hairline border and architectural crop marks */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/50 shadow-2xl shadow-stone-200/50 transition-all duration-700 hover:border-amber-700/30">
        
        {/* Subtle Architectural Corner Crop Marks */}
        <div className="pointer-events-none absolute top-3 left-3 z-20 font-mono text-[10px] text-amber-700/60 select-none">
          ┌ LOUISVILLE [KY]
        </div>
        <div className="pointer-events-none absolute top-3 right-3 z-20 font-mono text-[10px] text-amber-700/60 select-none">
          38.2527° N ┐
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 z-20 font-mono text-[10px] text-amber-700/60 select-none">
          └ CPAs EST.
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 z-20 font-mono text-[10px] text-amber-700/60 select-none">
          85.7585° W ┘
        </div>

        {/* Hero Image / Placeholder Display */}
        <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-16/11 w-full overflow-hidden bg-stone-100">
          {config.imageUrl ? (
            <img
              src={config.imageUrl}
              alt={config.altText || "Ackerman CPAs Louisville Office Architectural Context"}
              className="h-full w-full object-cover object-center grayscale contrast-105 brightness-100 transition-all duration-700 hover:scale-105"
              loading="eager"
            />
          ) : (
            // Dedicated visual placeholder if no image URL
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-stone-200/70 p-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-amber-600/30 bg-white shadow-sm">
                <Camera className="h-6 w-6 text-amber-700" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900">
                Architectural Photography Anchor
              </h4>
              <p className="mt-1 max-w-sm text-xs font-sans text-stone-500 leading-relaxed">
                Reserved placeholder container for your custom high-resolution architectural background.
              </p>
            </div>
          )}

          {/* Elegant gold-tinted gradient veil overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-amber-900/5 mix-blend-color-burn" />

          {/* Lower caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-stone-950/60 px-2.5 py-0.5 text-[10px] font-sans tracking-widest text-amber-200 backdrop-blur-md uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Architectural Anchor
              </span>
              <p className="font-serif text-lg sm:text-xl font-normal tracking-wide text-white mt-2">
                {currentPreset?.title || 'Louisville Corporate Headquarters'}
              </p>
              <p className="text-xs font-sans text-stone-300 font-light mt-0.5">
                {currentPreset?.subtitle || 'Anchoring strategic financial trust & enduring stability.'}
              </p>
            </div>

            {/* Quick Action in Card */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowConfigModal(true)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-sans font-medium text-white backdrop-blur-md transition-all hover:bg-white/25 hover:border-amber-300/40"
              >
                <Sliders className="h-3.5 w-3.5 text-amber-300" />
                <span>Replace Image / URL</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Sub-bar */}
        <div className="flex items-center justify-between border-t border-stone-200/80 bg-white px-5 py-3 text-xs text-stone-500 font-sans">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-amber-600" />
            <span className="font-medium text-stone-700">Anchor Frame</span>
            <span className="text-stone-400">&bull;</span>
            <span className="hidden sm:inline text-stone-500">Monochromatic Architectural Anchor</span>
          </div>

          <button
            type="button"
            onClick={() => setShowConfigModal(true)}
            className="group flex items-center gap-1.5 text-amber-800 hover:text-amber-950 font-medium transition-colors"
          >
            <span>Custom Background Settings</span>
            <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Image URL & Background Mode Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl border border-amber-900/20 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-widest text-amber-700 uppercase">
                  Ackerman CPAs Design Engine
                </span>
                <h3 className="font-serif text-2xl font-normal text-stone-900 mt-1">
                  Hero Image & Background Settings
                </h3>
                <p className="text-xs font-sans text-stone-500 mt-1">
                  You can provide your own image URL below, or choose one of our high-quality architectural presets.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Custom URL Form */}
            <form onSubmit={handleApplyCustomUrl} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  Paste Custom Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customInputUrl}
                    onChange={(e) => setCustomInputUrl(e.target.value)}
                    placeholder="https://example.com/your-firm-building.jpg"
                    className="flex-1 rounded-lg border border-stone-200 px-3 py-2 text-xs text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-amber-700"
                  >
                    Apply URL
                  </button>
                </div>
                <p className="mt-1 text-[11px] text-stone-400">
                  Direct links to JPG, PNG, or WebP images are supported.
                </p>
              </div>

              {/* Background vs Anchor Mode Toggle */}
              <div className="rounded-xl border border-stone-200/80 bg-stone-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-stone-800">
                      Full-Bleed Page Background Mode
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Stretch this image as a subtle background behind the white hero section.
                    </p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={config.isBackgroundMode}
                      onChange={(e) => onChangeConfig({ isBackgroundMode: e.target.checked })}
                      className="peer sr-only"
                    />
                    <div className="h-6 w-11 rounded-full bg-stone-300 peer-checked:bg-amber-600 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
                  </label>
                </div>

                {config.isBackgroundMode && (
                  <div className="mt-3 pt-3 border-t border-stone-200">
                    <div className="flex justify-between text-[11px] text-stone-600 mb-1">
                      <span>Background Image Tint / White Veil</span>
                      <span className="font-mono">{Math.round(config.opacity * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.4"
                      step="0.02"
                      value={config.opacity}
                      onChange={(e) => onChangeConfig({ opacity: parseFloat(e.target.value) })}
                      className="w-full accent-amber-700 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                      <span>Subtle (White dominant)</span>
                      <span>High contrast</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Architectural Presets */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-2">
                  Or select curated architectural photography:
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {ARCHITECTURAL_PRESETS.map((preset) => {
                    const isSelected = config.imageUrl === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          onChangeConfig({ imageUrl: preset.url });
                          setCustomInputUrl(preset.url);
                        }}
                        className={`flex w-full items-center gap-3 rounded-xl border p-2 text-left transition-all ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50/50 shadow-sm'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        <img
                          src={preset.url}
                          alt={preset.title}
                          className="h-12 w-12 rounded-lg object-cover grayscale"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-stone-900 truncate">
                            {preset.title}
                          </p>
                          <p className="text-[11px] text-stone-500 truncate">
                            {preset.subtitle}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
