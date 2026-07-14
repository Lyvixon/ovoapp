import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Clock, Flame } from 'lucide-react';

interface Recipe {
  dia: string;
  titulo: string;
  descricao: string;
  tempo: string;
  calorias: string;
  imagem: string;
}

const showcaseRecipes: Recipe[] = [
  {
    dia: "DIA 11",
    titulo: "Pizza de Ovo na Frigideira",
    descricao: "Massa de ovos fofinha coberta com molho fresco, muçarela e orégano fresco.",
    tempo: "10 min",
    calorias: "280 kcal",
    imagem: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=400&auto=format&fit=crop"
  },
  {
    dia: "DIA 01",
    titulo: "Crepioca Caprese Premium",
    descricao: "Fusão perfeita de ovos, tapioca, tomate cereja perfumado, queijo minas e manjericão.",
    tempo: "8 min",
    calorias: "220 kcal",
    imagem: "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=400&auto=format&fit=crop"
  },
  {
    dia: "DIA 04",
    titulo: "Wrap de Aveia e Espinafre",
    descricao: "Massa verde de liquidificador rica em fibras, recheada com frango desfiado cremoso.",
    tempo: "10 min",
    calorias: "260 kcal",
    imagem: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=400&auto=format&fit=crop"
  },
  {
    dia: "DIA 06",
    titulo: "Muffins de Ovo com Legumes",
    descricao: "Mini muffins fofinhos assados no forno com brócolis cozido, queijo e ervas finas.",
    tempo: "15 min",
    calorias: "140 kcal",
    imagem: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=400&auto=format&fit=crop"
  },
  {
    dia: "DIA 07",
    titulo: "Torrada de Abacate com Pochê",
    descricao: "O clássico de brunch saudável feito na sua casa em minutos, com a gema no ponto perfeito.",
    tempo: "9 min",
    calorias: "310 kcal",
    imagem: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=400&auto=format&fit=crop"
  }
];

export default function RecipeCarousel() {
  // To make it infinitely loop smoothly, we can triple the array list
  // and center our viewport on the middle set.
  const extendedRecipes = [...showcaseRecipes, ...showcaseRecipes, ...showcaseRecipes];
  const [currentIndex, setCurrentIndex] = useState(showcaseRecipes.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update visible count based on container/window size
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle instant jump when reaching boundary copies for seamless looping
  const handleTransitionEnd = () => {
    // If we scroll into the last copy
    if (currentIndex >= showcaseRecipes.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - showcaseRecipes.length);
    }
    // If we scroll into the first copy
    else if (currentIndex < showcaseRecipes.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + showcaseRecipes.length);
    }
  };

  // Re-enable transitioning on the next tick
  useEffect(() => {
    if (!isTransitioning) {
      // Force repaint
      const _ = containerRef.current?.offsetHeight;
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + showcaseRecipes.length);
  };

  const activeDotIndex = (currentIndex - showcaseRecipes.length) % showcaseRecipes.length;

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto px-4 group"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Viewport wrapper */}
      <div className="overflow-hidden py-4 -mx-3">
        <div 
          ref={containerRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
          style={{
            transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedRecipes.map((recipe, index) => {
            return (
              <div 
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
              >
                <div className="bg-brand-egg rounded-3xl border border-stone-200/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="relative overflow-hidden group/img">
                    <img 
                      src={recipe.imagem} 
                      className="w-full h-48 object-cover transform group-hover/img:scale-105 transition-transform duration-500" 
                      alt={recipe.titulo} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black text-brand-yolk-dark bg-white border border-brand-yolk/20 px-3 py-1 rounded-full shadow-2xs">
                        {recipe.dia}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-extrabold text-base sm:text-lg text-brand-ink truncate">
                      {recipe.titulo}
                    </h4>
                    <p className="text-xs text-brand-ink-light leading-relaxed line-clamp-2 h-10">
                      {recipe.descricao}
                    </p>
                    
                    <div className="flex justify-between items-center text-[11px] font-bold text-brand-ink-light pt-3 border-t border-stone-100">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-green" />
                        {recipe.tempo}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-brand-yolk" />
                        {recipe.calorias}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Chevrons */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 w-10 sm:w-12 h-10 sm:h-12 bg-white hover:bg-stone-50 border border-stone-200 text-brand-ink rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 z-10 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 sm:h-6 sm:w-6" />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 w-10 sm:w-12 h-10 sm:h-12 bg-white hover:bg-stone-50 border border-stone-200 text-brand-ink rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 z-10 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {showcaseRecipes.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeDotIndex ? 'w-6 bg-brand-green' : 'w-2 bg-stone-300 hover:bg-stone-400'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
