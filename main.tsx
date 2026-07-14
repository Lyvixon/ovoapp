import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X } from 'lucide-react';

const NAMES = [
  "Mariana", "Juliana", "Fernanda", "Patrícia", "Camila", "Amanda",
  "Natália", "Bruna", "Aline", "Larissa", "Priscila", "Carla",
  "Paula", "Vanessa", "Tatiane", "Renata", "Cristiane", "Luciana",
  "Bianca", "Daniela", "Gabriela", "Simone", "Débora", "Adriana",
  "Sabrina", "Letícia", "Rafaela", "Viviane", "Mônica", "Sandra"
];

const CITIES = [
  "São Paulo", "Campinas", "Sorocaba", "Santos", "Curitiba",
  "Londrina", "Maringá", "Florianópolis", "Joinville", "Porto Alegre",
  "Caxias do Sul", "Belo Horizonte", "Uberlândia", "Juiz de Fora",
  "Rio de Janeiro", "Niterói", "Vitória", "Salvador", "Fortaleza",
  "Recife", "João Pessoa", "Natal", "Brasília", "Goiânia", "Manaus"
];

const ACTIONS = [
  "acabou de garantir acesso ao Aplicativo Completo",
  "iniciou as 30 receitas saudáveis",
  "entrou para o aplicativo Ovos Hoje!",
  "desbloqueou o aplicativo Ovos Hoje!",
  "começou a cozinhar pratos incríveis",
  "garantiu a recompensa de Lanches Proteicos"
];

const AVATAR_COLORS = [
  "bg-brand-yolk text-brand-ink",
  "bg-brand-green text-white",
  "bg-amber-500 text-white",
  "bg-emerald-500 text-white",
  "bg-yellow-400 text-brand-ink",
  "bg-orange-400 text-white"
];

interface Alert {
  name: string;
  city: string;
  action: string;
  colorClass: string;
  time: string;
}

export default function SocialProofPopup() {
  const [currentAlert, setCurrentAlert] = useState<Alert | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Trigger first popup after 5 seconds
    const firstTimer = setTimeout(() => {
      triggerAlert();
    }, 5000);

    return () => clearTimeout(firstTimer);
  }, [isDismissed]);

  const triggerAlert = () => {
    if (isDismissed) return;

    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    const colorClass = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
    const minutes = Math.floor(Math.random() * 8) + 1;
    const time = minutes === 1 ? "há 1 minuto" : `há ${minutes} minutos`;

    setCurrentAlert({ name, city, action, colorClass, time });
    setIsVisible(true);

    // Hide after 6 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next one between 15 and 30 seconds
      const nextDelay = (Math.floor(Math.random() * 15) + 15) * 1000;
      const nextTimer = setTimeout(() => {
        triggerAlert();
      }, nextDelay);

      return () => clearTimeout(nextTimer);
    }, 6000);

    return () => clearTimeout(hideTimer);
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && currentAlert && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 left-4 z-50 w-full max-w-sm bg-white border border-stone-200/80 rounded-2xl p-4 shadow-xl flex gap-3.5 items-start mr-4"
        >
          {/* Avatar Icon */}
          <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-sm ${currentAlert.colorClass}`}>
            {currentAlert.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <h5 className="text-[13px] font-extrabold text-brand-ink leading-tight">
              {currentAlert.name}, de {currentAlert.city}
            </h5>
            <p className="text-xs text-brand-ink-light font-medium mt-0.5 leading-snug">
              {currentAlert.action}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-brand-green-dark font-bold uppercase tracking-wider">
              {/* green pulse dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span>{currentAlert.time}</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-0.5">
                <Check className="w-3 h-3 stroke-[3px]" /> Acesso verificado
              </span>
            </div>
          </div>

          <button 
            onClick={handleClose}
            className="text-slate-400 hover:text-brand-ink p-1 rounded-full transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
