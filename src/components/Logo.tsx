import React from 'react';

interface LogoProps {
  className?: string;
  /** Compact mode drops the mark to 28px and hides the descriptor line. */
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', compact = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Heritage insignia — sized to the cap-height of the wordmark, not larger */}
      <svg
        className={`shrink-0 transition-all duration-300 ${compact ? 'h-7 w-7' : 'h-8 w-8'}`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="20"
          y="3"
          width="24"
          height="24"
          transform="rotate(45 20 3)"
          stroke="#B45309"
          strokeWidth="1.1"
          strokeOpacity="0.45"
        />
        <path d="M20 8L28.5 30.5H24.4L22.5 25.4H17.5L15.6 30.5H11.5L20 8Z" fill="#1C1917" />
        <path d="M18.6 22.6H21.4" stroke="#D97706" strokeWidth="1.7" strokeLinecap="round" />
        <polygon points="20,13.5 21.6,16.2 20,18.9 18.4,16.2" fill="#D97706" />
      </svg>

      {/* Wordmark — single baseline, descriptor only when there is room */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif font-bold tracking-[0.04em] text-stone-950 leading-none transition-all duration-300 ${
              compact ? 'text-[17px]' : 'text-[19px]'
            }`}
          >
            ACKERMAN
          </span>
          <span className="font-sans text-[10px] font-bold tracking-[0.14em] text-amber-700 leading-none">
            CPAs
          </span>
        </div>
        <span
          className={`hidden font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-400 leading-none transition-all duration-300 sm:block ${
            compact ? 'mt-0 h-0 overflow-hidden opacity-0' : 'mt-[5px] h-[8px] opacity-100'
          }`}
        >
          Certified Public Accountants
        </span>
      </div>
    </div>
  );
};
