import React from 'react';

interface OvOLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function OvOLogo({ className = '', size = 'md' }: OvOLogoProps) {
  const sizeClasses = {
    sm: {
      eggWidth: 'w-6',
      eggHeight: 'h-7.5',
      eggText: 'text-[10px]',
      beakText: 'text-sm mt-1',
      gap: 'gap-0.5',
      hatSize: 'w-6 h-6',
      hatOffset: '-top-4 -left-1.5',
      plusSize: 'text-[7px] px-0.5 -top-1 -right-1 border',
    },
    md: {
      eggWidth: 'w-8',
      eggHeight: 'h-10',
      eggText: 'text-xs',
      beakText: 'text-lg mt-1.5',
      gap: 'gap-1',
      hatSize: 'w-8 h-8',
      hatOffset: '-top-5.5 -left-2',
      plusSize: 'text-[9px] px-1 -top-1.5 -right-1.5 border',
    },
    lg: {
      eggWidth: 'w-12',
      eggHeight: 'h-15',
      eggText: 'text-lg',
      beakText: 'text-3xl mt-2.5',
      gap: 'gap-1.5',
      hatSize: 'w-12 h-12',
      hatOffset: '-top-8 -left-3',
      plusSize: 'text-[13px] px-1.5 -top-2 -right-2 border-2',
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex items-center ${currentSize.gap} font-black select-none ${className}`} id="ovo-logo">
      {/* Left Egg "O" with Chef's Hat */}
      <div 
        className={`relative flex items-center justify-center ${currentSize.eggWidth} ${currentSize.eggHeight} bg-gradient-to-b from-[#FFFEE5] to-brand-yolk text-brand-ink rounded-[50%_50%_50%_50%_/_65%_65%_35%_35%] shadow-sm border border-brand-yolk-dark/10 ${currentSize.eggText} font-black -rotate-[15deg] transform hover:rotate-[-5deg] transition-transform duration-300`}
        style={{ boxShadow: 'inset 0 -4px 8px rgba(217, 119, 6, 0.25), 0 2px 4px rgba(0,0,0,0.06)' }}
      >
        O
        {/* Egg shine */}
        <div className="absolute top-[10%] right-[15%] w-[25%] h-[35%] bg-white/70 rounded-full rotate-[15deg] blur-[0.2px]"></div>
        
        {/* Chef's Hat */}
        <div className={`absolute ${currentSize.hatOffset} ${currentSize.hatSize} pointer-events-none -rotate-[5deg]`}>
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
            {/* Hat base */}
            <path d="M 12,24 L 12,21 C 12,19.5 13,18.5 15,18.5 L 25,18.5 C 27,18.5 28,19.5 28,21 L 28,24 Z" fill="#FFFFFF" stroke="#78350F" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Hat crown */}
            <path d="M 10,20 C 5,13 10,4 18,7 C 18,-1 22,-1 22,7 C 30,4 35,13 30,20 Z" fill="#FFFFFF" stroke="#78350F" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Folds */}
            <path d="M 17,18.5 C 17,14 20,14 20,18.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M 23,18.5 C 23,14 20,14 20,18.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Funny beak "v" */}
      <span className={`${currentSize.beakText} font-black text-brand-yolk-dark -mx-1 animate-bounce text-center`} style={{ animationDuration: '2.5s' }}>
        v
      </span>

      {/* Right Egg "O" with Golden Plus Sign */}
      <div 
        className={`relative flex items-center justify-center ${currentSize.eggWidth} ${currentSize.eggHeight} bg-gradient-to-b from-[#FFFEE5] to-brand-yolk text-brand-ink rounded-[50%_50%_50%_50%_/_65%_65%_35%_35%] shadow-sm border border-brand-yolk-dark/10 ${currentSize.eggText} font-black rotate-[15deg] transform hover:rotate-[5deg] transition-transform duration-300`}
        style={{ boxShadow: 'inset 0 -4px 8px rgba(217, 119, 6, 0.25), 0 2px 4px rgba(0,0,0,0.06)' }}
      >
        O
        {/* Egg shine */}
        <div className="absolute top-[10%] right-[15%] w-[25%] h-[35%] bg-white/70 rounded-full rotate-[15deg] blur-[0.2px]"></div>

        {/* Golden Sparkly Plus "+" */}
        <div className={`absolute bg-gradient-to-r from-amber-500 to-brand-yolk text-white font-black border-white flex items-center justify-center shadow-xs rounded-full ${currentSize.plusSize}`}>
          +
        </div>
      </div>
    </div>
  );
}
