import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Smartphone, 
  Star, 
  Sparkles, 
  Clock, 
  Flame, 
  ArrowRight, 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  Heart, 
  CheckSquare, 
  FlameKindling,
  SmartphoneNfc,
  X,
  Lock,
  Award,
  BookOpen,
  Gift
} from 'lucide-react';

import PhoneSimulator from './components/PhoneSimulator';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import SocialProofPopup from './components/SocialProofPopup';
import OvOLogo from './components/OvOLogo';
import RecipeCarousel from './components/RecipeCarousel';
import { benefits, testimonials } from './data';

export default function App() {
  const [isAppOnly, setIsAppOnly] = React.useState(() => {
    const params = new URLSearchParams(window.location.search);
    const hasSalesParam = params.get('landing') === 'true' || params.get('vendas') === 'true' || params.get('sales') === 'true' || params.get('venda') === 'true';
    if (hasSalesParam) {
      return false;
    }
    return true; // Default is the standalone App itself for buyers!
  });

  const isPreview = React.useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('preview') === 'true' || params.get('sim') === 'true' || params.get('test') === 'true';
  }, []);

  const [showHelperBanner, setShowHelperBanner] = React.useState(isPreview);
  const [showUpsellModal, setShowUpsellModal] = React.useState(false);

  React.useEffect(() => {
    try {
      if (isAppOnly) {
        // Standalone Web App: increase font size of all rem elements by ~2 steps (18px)
        document.documentElement.style.fontSize = '18px';
      } else {
        // Sales Page: reduce font size of all rem elements by ~1 step (15px)
        document.documentElement.style.fontSize = '15px';
      }
    } catch (e) {
      console.error("Error setting root font-size", e);
    }
    return () => {
      try {
        document.documentElement.style.fontSize = '';
      } catch (e) {}
    };
  }, [isAppOnly]);
  
  const scrollToOffer = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isAppOnly) {
    return (
      <div className="h-[100dvh] md:h-auto md:min-h-screen bg-stone-100 flex flex-col overflow-hidden md:overflow-visible" id="app-only-root">
        {/* Helper Header - Switch back to Sales Page */}
        {showHelperBanner && (
          <div className="bg-amber-500 text-brand-ink text-[11px] sm:text-xs font-bold py-2.5 px-4 text-center flex flex-wrap items-center justify-center gap-2 shadow-xs select-none relative z-50 flex-shrink-0">
            <span>📱 Você está no <strong>Modo Aplicativo Standalone</strong> (ideal para entregar para o cliente e testar no celular)</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  setIsAppOnly(false);
                  localStorage.removeItem('ovo_app_only');
                }}
                className="bg-brand-ink hover:bg-slate-800 text-white text-[10px] font-black px-2.5 py-1 rounded-md transition-all active:scale-95 cursor-pointer"
              >
                Ver Site de Vendas 🖥️
              </button>
              <button 
                onClick={() => setShowHelperBanner(false)}
                className="text-amber-950 hover:text-black font-extrabold text-xs ml-1 cursor-pointer"
                title="Ocultar aviso"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        <div className="flex-1 min-h-0 flex items-center justify-center w-full relative">
          <PhoneSimulator standalone={true} isPreview={isPreview} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-egg text-brand-ink selection:bg-brand-yolk selection:text-brand-ink overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-brand-egg/85 backdrop-blur-md border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <OvOLogo size="sm" />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-lg sm:text-xl tracking-tight px-3 py-0.5 rounded-lg ml-1.5 shadow-xs border border-amber-600/10">
              OvOChef+
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-ink-light">
            <a href="#experiencia" className="hover:text-brand-ink transition-colors">O Aplicativo</a>
            <a href="#como-funciona" className="hover:text-brand-ink transition-colors">Como Funciona</a>
            <a href="#comparativo" className="hover:text-brand-ink transition-colors">App vs PDF</a>
            <a href="#depoimentos" className="hover:text-brand-ink transition-colors">Depoimentos</a>
            <a href="#perguntas" className="hover:text-brand-ink transition-colors">FAQ</a>
          </nav>

          <button 
            onClick={scrollToOffer}
            className="bg-brand-green text-white hover:bg-brand-green-dark text-xs sm:text-sm font-extrabold px-5 py-3 rounded-full shadow-md shadow-brand-green/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Quero Começar
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-yolk/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (Copy and Transformation Focus) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-amber-200">
                  🥚 O aplicativo nº1 para quem quer variar receitas com ovos
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-tight tracking-tight text-brand-ink">
                Seu cardápio de ovos <br className="hidden sm:inline" />
                <span className="relative inline-block text-brand-green-dark">
                  já está pronto
                  <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-brand-yolk/75" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>{" "}
                pelos próximos 30 dias.
              </h1>

              {/* Star Rating Trust Block */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-extrabold text-brand-ink-light bg-amber-500/10 border border-amber-500/15 px-5 py-3 rounded-2xl w-fit mx-auto lg:mx-0">
                <span className="text-brand-yolk text-base">★★★★★</span>
                <span>Mais de 3.200 pessoas já organizam suas refeições com o OvoChef+</span>
              </div>


            </div>

            {/* Right Column (Clickable Interactive App Simulator) - CELULAR GIGANTE */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full" id="phone-simulator-container">
              {/* Floating tip bubble */}
              <div className="absolute -top-6 bg-brand-yolk text-brand-ink font-black text-xs px-4 py-2.5 rounded-2xl shadow-md border border-brand-yolk-dark/20 z-10 flex items-center gap-1.5 animate-bounce max-w-[280px] text-center">
                <span>📱</span>
                <span>Toque na tela do simulador para testar o aplicativo!</span>
              </div>
              
              <PhoneSimulator isPreview={true} />

              {/* Subheadline description and list of benefits placed directly below the mobile simulator */}
              <div className="w-full mt-10 space-y-6">
                <p className="text-base sm:text-lg text-brand-ink-light font-semibold leading-relaxed text-center max-w-xl mx-auto">
                  Receba acesso imediato a um aplicativo completo com mais de 400 combinações possíveis de pratos, jornada guiada de 30 dias, lista inteligente de compras, favoritos, progresso diário, Espaço OVO Kids e atualizações gratuitas, tudo por um único pagamento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
                  <div className="flex gap-2.5 items-start">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Mais de 400 combinações possíveis de refeições</span>
                  </div>

                  <div className="flex gap-2.5 items-center">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Jornada diária pronta</span>
                  </div>

                  <div className="flex gap-2.5 items-center">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Lista de compras automática</span>
                  </div>

                  <div className="flex gap-2.5 items-center">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Favoritos</span>
                  </div>

                  <div className="flex gap-2.5 items-center">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Passo a passo interativo</span>
                  </div>

                  <div className="flex gap-2.5 items-center">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Espaço Kids incluso</span>
                  </div>

                  <div className="flex gap-2.5 items-center col-span-1 sm:col-span-2 sm:justify-center">
                    <span className="w-6 h-6 bg-brand-green/15 text-brand-green-dark rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs mr-1">
                      ✓
                    </span>
                    <span className="font-extrabold text-sm text-brand-ink">Certificados de conclusão</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. UNDERSTAND IN 5 SECONDS - INTERACTIVE CAPABILITY HIGHLIGHTS */}
      <section id="experiencia" className="py-16 bg-white border-y border-stone-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black bg-brand-green/10 text-brand-green-dark px-4 py-1.5 rounded-full uppercase tracking-wider">
              Esqueça os PDFs e Livros Digitais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">
              Uma verdadeira ferramenta de acompanhamento, desenhada para o seu celular
            </h2>
            <p className="text-brand-ink-light font-medium mt-2.5 text-base sm:text-lg">
              Nosso objetivo é tornar a sua jornada prazerosa e sem atritos. Por isso, desenvolvemos um aplicativo web moderno, limpo e super amigável que funciona exatamente como os grandes apps de rotina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-brand-egg p-6 sm:p-8 rounded-3xl border border-stone-200/30 hover:border-brand-yolk/30 hover:shadow-lg hover:shadow-stone-200/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm mb-5 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-brand-ink mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-light font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVE TABLE SECTOR */}
      <section id="comparativo" className="py-16 sm:py-24 bg-brand-egg border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black bg-brand-yolk/20 text-brand-yolk-dark px-4 py-1.5 rounded-full uppercase tracking-wider">
              A Escolha Óbvia
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">
              Aplicativo Móvel vs PDF Estático
            </h2>
            <p className="text-brand-ink-light font-medium mt-2 text-base">
              Entenda por que preferimos entregar uma experiência moderna de software interativo em vez de uma apostila digital cansativa.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* 7. PREVIEW OF THE 30 RECIPES (Netflix-Style Showcase) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-black bg-brand-green/10 text-brand-green-dark px-4 py-1.5 rounded-full uppercase tracking-wider">
                Cardápio de elite
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-3 leading-tight text-brand-ink">
                Sempre uma nova receita para facilitar o seu dia
              </h2>
              <p className="text-brand-ink-light font-semibold mt-1.5 text-xs sm:text-sm">
                Confira uma prévia do que te espera no painel interativo. Receitas nutritivas e super rápidas!
              </p>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="text-xs sm:text-sm font-bold text-brand-green-dark flex items-center gap-1 hover:underline text-left self-start sm:self-auto"
            >
              Ver todas as receitas no app <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Carousel */}
          <RecipeCarousel />
        </div>
      </section>



      {/* 8. TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-stone-50 border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black bg-brand-green/10 text-brand-green-dark px-4 py-1.5 rounded-full uppercase tracking-wider">
              Feedback Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">
              Quem usa o aplicativo, aprova!
            </h2>
            <p className="text-brand-ink-light font-medium mt-2 text-base">
              Depoimentos de praticantes reais de dieta que salvaram suas rotinas alimentares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-100 shadow-xs space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-yolk text-sm font-bold">
                      {"★".repeat(testi.stars)}
                    </span>
                    <span className="text-[10px] font-black bg-brand-green/10 text-brand-green-dark px-2.5 py-0.5 rounded-full">
                      {testi.platform}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-ink font-medium leading-relaxed italic">
                    "{testi.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-brand-yolk/10 text-brand-yolk-dark flex items-center justify-center font-black text-sm">
                    {testi.avatar}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-brand-ink">{testi.name}</h4>
                    <p className="text-slate-400 text-[11px] font-semibold">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

         {/* 8.5. BONUS EXCLUSIVOS COMPLETO */}
      <section className="py-16 bg-amber-500/5 border-b border-stone-200/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
              <Gift className="w-3.5 h-3.5 text-amber-600 animate-pulse" /> Bônus Exclusivos de Lançamento
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 text-brand-ink leading-tight">
              Ganhando Mais com o Plano Completo 🎁
            </h2>
            <p className="text-brand-ink-light font-medium mt-2 text-sm sm:text-base">
              Ao adquirir o acesso completo, você não ganha só as funcionalidades do app, mas sim uma experiência completa de transformação com estes super bônus integrados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bonus 1: 8 Progressive Rewards */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border-2 border-amber-500/20 shadow-md space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-brand-ink leading-snug">
                    8 RECOMPENSAS PROGRESSIVAS NO APP 🎁
                  </h3>
                  <p className="text-xs text-amber-800 font-bold mt-1">
                    Liberadas dia a dia conforme você avança na sua consistência saudável:
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-stone-100">
                <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-stone-700">
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">📋</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 1: Lista Compras + 3 Cafés Express</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Lista automática e as primeiras receitas ultra rápidas</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">⏱️</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 2: Mini-Guia Ponto Gema</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Acerte sempre o ponto preferido da sua gema</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">🥪</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 3: 3 Lanches de Frigideira</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Adeus industrializados à tarde</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">🥗</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 4: 3 Omeletes & Frittatas</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Almoço nutritivo em menos de 10 minutos</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">🍰</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 5: Ciência: Aeração & Textura</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Descubra as claras em neve perfeitas e o poder da albumina</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">🎒</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 6: Lanches Práticos Portáteis</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Ideais para levar para o trabalho ou passeios</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100">
                    <span className="text-sm">🍷</span>
                    <div>
                      <strong className="text-brand-ink block">Dia 7: Jantar Gourmet Leve</strong>
                      <span className="text-[10px] text-stone-500 font-medium">Sabor extraordinário e sono de alta qualidade</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50/50 p-2 rounded-xl border border-amber-200 bg-amber-50/20">
                    <span className="text-sm">🏆</span>
                    <div>
                      <strong className="text-amber-950 block">Dia 8: Ebook Completo + Certificado</strong>
                      <span className="text-[10px] text-amber-800 font-semibold">Liberados para download ao fim da jornada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus 2: Super Ebook Exclusivo */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border-2 border-emerald-500/20 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-brand-ink leading-snug">
                      SUPER EBOOK EXCLUSIVO OvOChef+ 50+ 📚
                    </h3>
                    <p className="text-xs text-emerald-800 font-bold mt-1">
                      Acesso completo ao super livro digital
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50/40 p-4.5 rounded-2xl border border-emerald-100 space-y-3.5">
                  <p className="text-sm text-emerald-950 font-semibold leading-relaxed">
                    Livro secreto inteiramente diagramado para você levar para onde quiser, contendo:
                  </p>
                  <ul className="space-y-2.5 text-xs text-emerald-900 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">📚</span>
                      <span><strong>50 receitas fits extras</strong> para nunca enjoar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">⏱️</span>
                      <span><strong>20 lanches proteicos e rápidos</strong> de preparar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">🍯</span>
                      <span><strong>6 molhos Chefs fits</strong> à base de ovo para dar um toque especial</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/50 text-center text-xs font-bold text-stone-600">
                ⭐ Integrado nativamente no seu painel de conquistas!
              </div>
            </div>

            {/* Bonus 3: Kids Space (Simplified) */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border-2 border-amber-500/20 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0 text-2xl">
                    👶
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-brand-ink leading-snug">
                      MODO EXCLUSIVO PARA CRIANÇAS 👶
                    </h3>
                    <p className="text-xs text-amber-800 font-bold mt-1 uppercase tracking-wider">
                      O aplicativo também possui uma área Kids
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <p className="text-xs text-brand-ink-light font-bold">
                    O aplicativo também possui um modo exclusivo para crianças:
                  </p>
                  <p className="text-xs text-amber-900 font-semibold italic">
                    Enquanto você cozinha para você... Seu filho também participa!
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-stone-700 pt-1">
                    <div className="flex items-center gap-1.5 bg-[#FFFDF9] border border-amber-100 p-2 rounded-xl">
                      <span>✓ Receitas divertidas</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FFFDF9] border border-amber-100 p-2 rounded-xl">
                      <span>✓ Personagens</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FFFDF9] border border-amber-100 p-2 rounded-xl">
                      <span>✓ Certificados</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FFFDF9] border border-amber-100 p-2 rounded-xl">
                      <span>✓ Saudável</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100/50 text-center text-xs font-bold text-amber-800">
                ⭐ Estimule a boa alimentação com diversão!
              </div>
            </div>

            {/* Bonus 4: Certificates (Simplified) */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border-2 border-brand-green/20 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green-dark flex-shrink-0 text-2xl">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-brand-ink leading-snug">
                      CERTIFICADOS DE CONCLUSÃO 📜
                    </h3>
                    <p className="text-xs text-brand-green font-bold mt-1 uppercase tracking-wider">
                      Reconhecimento oficial de hábitos
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 text-xs sm:text-sm font-semibold text-stone-700 space-y-3">
                  <p className="text-brand-ink-light leading-relaxed">
                    🎓 Receba certificados exclusivos ao concluir sua jornada.
                  </p>
                  <p className="text-xs text-stone-500 font-medium leading-relaxed">
                    Comemore seu compromisso diário com a saúde e gere ótimas lembranças com certificados prontos para imprimir e exibir com orgulho!
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100/50 text-center text-xs font-bold text-brand-green-dark">
                🏆 Certificado de Chef Saudável & Kids inclusos!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EXCLUSIVE OFFER / PRICING BOX */}
      <section id="oferta" className="py-16 sm:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-brand-yolk/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-black bg-brand-yolk text-brand-ink px-4 py-2 rounded-full uppercase tracking-wider shadow-sm inline-block">
              🔥 Oferta de Lançamento por Tempo Limitado
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-brand-ink">
              Mude a sua rotina hoje com o nosso Aplicativo
            </h2>
            <p className="text-brand-ink-light font-medium text-base sm:text-lg max-w-2xl mx-auto">
              Ganhe acesso imediato e vitalício à nossa ferramenta de acompanhamento. Sem pegadinhas, sem taxas mensais ocultas.
            </p>
          </div>

          {/* Two-Plan Pricing Cards (Basic vs. Complete) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left max-w-5xl mx-auto items-stretch">
            
            {/* 1. CARD PREMIUM */}
            <div className="bg-brand-egg border-4 border-brand-green rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden ring-4 ring-brand-green/20 transform md:scale-105 z-10 transition-all duration-300 hover:scale-[1.07] hover:shadow-brand-green/10">
              {/* Top Banner Accent */}
              <div className="absolute top-0 right-0 left-0 bg-brand-green text-white font-black text-[11px] uppercase tracking-wider py-2.5 text-center flex items-center justify-center gap-1.5 shadow-sm">
                <Award className="w-4 h-4 text-brand-yolk fill-brand-yolk animate-pulse" />
                🏆 ESCOLHA DE 94% DOS CLIENTES
              </div>

              <div className="space-y-6 pt-6">
                <div>
                  <h3 className="text-3xl font-black text-brand-ink mt-2 flex items-center gap-2">
                    👑 Premium Completo
                  </h3>
                  <p className="text-xs text-brand-ink-light font-bold mt-1.5 leading-relaxed">
                    O aplicativo completo para transformar sua rotina na cozinha.
                  </p>
                </div>

                {/* Features Group 1: Aplicativo Completo */}
                <div className="border-t border-stone-200/50 pt-5 space-y-3">
                  <h4 className="font-extrabold text-xs sm:text-sm text-brand-ink uppercase tracking-wider flex items-center gap-1.5">
                    📱 Aplicativo Completo
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>60 receitas organizadas por refeição</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>Jornada guiada de 30 dias</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>Saiba exatamente o que cozinhar todos os dias</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>Progresso salvo automaticamente</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>Lista inteligente de compras</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>Favoritos ilimitados</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-brand-green-dark font-black">✅</span>
                      <span>Passo a passo interativo</span>
                    </li>
                  </ul>
                </div>

                {/* Features Group 2: Conteúdos Exclusivos */}
                <div className="border-t border-stone-200/50 pt-5 space-y-3.5">
                  <h4 className="font-extrabold text-xs sm:text-sm text-brand-ink uppercase tracking-wider flex items-center gap-1.5">
                    🎁 Conteúdos Exclusivos
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-2 items-start bg-white p-3 rounded-2xl border border-stone-100 shadow-3xs">
                      <span className="text-lg leading-none">🔓</span>
                      <div className="text-xs">
                        <span className="font-extrabold text-brand-ink block">Sistema de Recompensas da Jornada</span>
                        <span className="text-stone-500 font-semibold leading-relaxed block mt-0.5">
                          Desbloqueie 8 conteúdos exclusivos conforme avança no aplicativo.
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start bg-white p-3 rounded-2xl border border-stone-100 shadow-3xs">
                      <span className="text-lg leading-none">📚</span>
                      <div className="text-xs">
                        <span className="font-extrabold text-brand-ink block">Super Ebook OvOChef+ 50+</span>
                        <span className="text-stone-500 font-semibold leading-relaxed block mt-0.5">
                          Mais de 50 receitas extras, lanches, molhos e conteúdos especiais.
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start bg-amber-500/5 p-3 rounded-2xl border border-amber-500/15 shadow-3xs">
                      <span className="text-lg leading-none">👶</span>
                      <div className="text-xs">
                        <span className="font-extrabold text-amber-950 block">Espaço OvOChef+ Kids</span>
                        <span className="text-amber-900 font-semibold leading-relaxed block mt-0.5">
                          Receitas divertidas, jogos e desafios para incentivar uma alimentação saudável nas crianças.
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start bg-brand-green/5 p-3 rounded-2xl border border-brand-green/15 shadow-3xs">
                      <span className="text-lg leading-none">🎓</span>
                      <div className="text-xs">
                        <span className="font-extrabold text-brand-green-dark block">Certificados Oficiais</span>
                        <span className="text-brand-green-dark font-semibold leading-relaxed block mt-0.5">
                          Receba os certificados Chef Saudável e Mini Chef de Ouro ao concluir a jornada.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Group 3: Você recebe tudo isso */}
                <div className="border-t border-stone-200/50 pt-5 space-y-3 bg-brand-green/5 p-4 rounded-2xl border border-brand-green/10">
                  <h4 className="font-extrabold text-xs sm:text-sm text-brand-green-dark uppercase tracking-wider">
                    🚀 Você recebe tudo isso por apenas R$ 27,90
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-stone-700">
                    <li className="flex gap-1.5 items-center">
                      <span>✅</span>
                      <span>Atualizações gratuitas para sempre</span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span>✅</span>
                      <span>Suporte VIP</span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span>✅</span>
                      <span>Funciona direto no celular</span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span>✅</span>
                      <span>Sem instalar aplicativos</span>
                    </li>
                    <li className="flex gap-1.5 items-center col-span-1 sm:col-span-2">
                      <span>✅</span>
                      <span>Acesso imediato</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Price and Action Button */}
              <div className="pt-8 space-y-6">
                <div className="border-t border-stone-200/50 pt-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-stone-400 line-through">De R$ 97,00</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-sm font-black text-brand-ink">Por apenas</span>
                      <span className="text-4xl font-black text-brand-green-dark tracking-tight">R$ 27,90</span>
                    </div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mt-1">
                      Pagamento único • Acesso vitalício • Sem mensalidades
                    </p>
                  </div>

                  {/* Specific Nudge Phrase right below the price */}
                  <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-4 text-xs font-bold text-brand-green-dark leading-relaxed">
                    Por apenas R$ 18,00 a mais que o Plano Básico, você desbloqueia a experiência completa do aplicativo, incluindo Jornada Guiada, Espaço Kids, Recompensas, Certificados, eBook exclusivo, atualizações vitalícias e muito mais.
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://pay.kiwify.com.br" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-black py-4.5 px-6 rounded-full shadow-lg shadow-brand-green/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Quero Meu Acesso Vitalício →
                  </a>
                  
                  <div className="flex justify-center items-center gap-3 text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <span>💳</span> Pagamento único
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span>🔒</span> Compra 100% segura
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span>🛡</span> Garantia incondicional de 7 dias
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CARD BÁSICO */}
            <div className="bg-white border-2 border-stone-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden group hover:border-stone-300 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">📄</span>
                    <h3 className="text-2xl font-black text-brand-ink">Plano Básico</h3>
                  </div>
                  <p className="text-xs text-brand-ink-light font-medium mt-1">
                    Receba apenas as receitas essenciais.
                  </p>
                </div>

                {/* Included Checklist */}
                <div className="border-t border-stone-100 pt-6 space-y-3">
                  <h4 className="font-extrabold text-xs sm:text-sm text-brand-ink uppercase tracking-wider">
                    Incluído
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-emerald-500 font-black">✅</span>
                      <span>Receitas organizadas</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-emerald-500 font-black">✅</span>
                      <span>Lista básica de ingredientes</span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm font-bold text-stone-700 items-start">
                      <span className="text-emerald-500 font-black">✅</span>
                      <span>Consulta simples das receitas</span>
                    </li>
                  </ul>
                </div>

                {/* Not Included Checklist */}
                <div className="border-t border-stone-100 pt-6 space-y-3">
                  <h4 className="font-extrabold text-xs sm:text-sm text-stone-400 uppercase tracking-wider">
                    Não inclui
                  </h4>
                  <ul className="space-y-2 text-stone-400 text-xs sm:text-sm font-semibold">
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Jornada guiada de 30 dias</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Progresso diário</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Favoritos</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Lista inteligente de compras</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Passo a passo interativo</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Sistema de Recompensas</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Espaço OvOChef+ Kids</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Certificados</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Ebook 50+ Receitas Extras</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Atualizações gratuitas</span>
                    </li>
                    <li className="flex gap-2 items-center opacity-65">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="line-through">Suporte VIP</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Price and Action Button */}
              <div className="pt-8 space-y-6">
                <div className="border-t border-stone-200/50 pt-6">
                  <span className="text-xs font-semibold text-brand-ink-light line-through block">De R$ 27,90</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-sm font-bold text-brand-ink">Por</span>
                    <span className="text-4xl font-black text-stone-700 tracking-tight">R$ 9,90</span>
                  </div>
                  <p className="text-[10px] text-stone-500 font-bold mt-1 uppercase tracking-wider">
                    Pagamento único
                  </p>
                </div>

                <div>
                  <button 
                    onClick={() => setShowUpsellModal(true)}
                    className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-extrabold py-3.5 px-6 rounded-2xl transition-all text-xs text-center block cursor-pointer animate-pulse hover:animate-none"
                  >
                    Continuar com o Plano Básico
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. RISK FREE GUARANTEE */}
      <section className="py-16 bg-[#F3EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-20 h-20 bg-brand-yolk rounded-full flex flex-col items-center justify-center text-white font-black mx-auto shadow-lg shadow-brand-yolk/20 relative">
            <span className="text-[10px] uppercase font-bold tracking-wider leading-none">Garantia</span>
            <span className="text-2xl leading-none">7</span>
            <span className="text-[10px] uppercase font-bold tracking-wider leading-none">Dias</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-brand-ink">
            Garantia Incondicional de 7 Dias
          </h2>

          <p className="text-brand-ink-light font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Queremos que você tome essa decisão com total segurança. Acesse a plataforma hoje. Se em até 7 dias você achar que o nosso aplicativo interativo não ajudou a variar o seu cardápio, ou se você preferir um PDF tradicional, basta nos enviar um e-mail. Nós devolveremos todo o seu dinheiro imediatamente, sem perguntas e sem complicação.
          </p>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="perguntas" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black bg-brand-yolk/20 text-brand-yolk-dark px-4 py-1.5 rounded-full uppercase tracking-wider">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-brand-ink-light font-medium mt-2 text-base">
              Ainda com dúvida sobre como funciona o nosso aplicativo de receitas? Confira as respostas rápidas abaixo.
            </p>
          </div>

          <FAQ />
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-brand-ink text-brand-egg pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-stone-200/10">
            <div className="flex items-center gap-1.5">
              <OvOLogo size="sm" />
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-lg tracking-tight px-3 py-0.5 rounded-lg ml-1.5 shadow-xs border border-amber-600/10">
                OvOChef+
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-300 font-bold">
              <a href="#experiencia" className="hover:text-brand-yolk transition-colors">O Aplicativo</a>
              <a href="#como-funciona" className="hover:text-brand-yolk transition-colors">Como funciona</a>
              <a href="#comparativo" className="hover:text-brand-yolk transition-colors">Tabela comparativa</a>
              <a href="#depoimentos" className="hover:text-brand-yolk transition-colors">Depoimentos</a>
              <a href="#perguntas" className="hover:text-brand-yolk transition-colors">Perguntas Frequentes</a>
            </div>
          </div>

          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div className="space-y-1">
              <p className="font-bold text-slate-300">OvOChef+ • Plataforma Interativa Móvel</p>
              <p>Este produto não substitui o parecer de um profissional de saúde. Sempre consulte um médico ou nutricionista.</p>
            </div>
            <p className="flex-shrink-0">
              © {new Date().getFullYear()} Ovos Hoje. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </footer>

      {/* 13. FLOATING BUYER ALERTS POPUP */}
      <SocialProofPopup />

      {/* 14. UPSELL POPUP FOR BASIC PLAN CLICK */}
      {showUpsellModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-[#FFFDF9] max-w-lg w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-amber-400 relative p-6 sm:p-8 space-y-5 text-left font-sans"
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowUpsellModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 hover:bg-stone-100 rounded-full transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-[10px] tracking-widest px-3 py-1 rounded-full uppercase shadow-2xs border border-amber-600/10">
                ⚡ OPORTUNIDADE ÚNICA & LIMITADA
              </span>
            </div>

            {/* Title */}
            <div className="text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-brand-ink leading-tight">
                🛑 ESPERE! NÃO COMPRE O BÁSICO AINDA!
              </h3>
              <p className="text-xs text-brand-ink-light font-semibold">
                Temos uma proposta irresistível de Upgrade para você hoje!
              </p>
            </div>

            {/* Comparison Box */}
            <div className="bg-stone-50 border border-stone-200/50 rounded-2xl p-4 space-y-3">
              <p className="text-xs text-brand-ink font-semibold leading-relaxed">
                Você escolheu o <strong className="text-stone-700">Plano Básico (R$ 9,90)</strong>. Mas por apenas <strong className="text-brand-green-dark">R$ 10,00 extras</strong>, você leva a experiência <strong className="text-amber-600">Premium Completa 👑</strong>:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="flex gap-2 items-start opacity-60">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-stone-500">O Plano Básico <strong>NÃO</strong> inclui o Espaço Kids, Certificados e o Super Ebook.</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-brand-green-dark font-extrabold">✓</span>
                  <span className="text-brand-ink"><strong>Espaço Kids Completo</strong> com pratos divertidos & Jogo lúdico 👶</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-brand-green-dark font-extrabold">✓</span>
                  <span className="text-brand-ink"><strong>Certificados Oficiais</strong> de Chef Saudável & Mini Chef 🎓</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-brand-green-dark font-extrabold">✓</span>
                  <span className="text-brand-ink"><strong>Super Ebook Completo</strong> compilado para você salvar 📚</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-brand-green-dark font-extrabold">✓</span>
                  <span className="text-brand-ink">Aba de Favoritos & Ferramenta de Substituição de Receitas</span>
                </div>
              </div>
            </div>

            {/* Pricing Offer */}
            <div className="bg-amber-500/10 border-2 border-dashed border-amber-400 p-4 rounded-2xl text-center space-y-1">
              <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest block">SUPER DESCONTO DE UPGRADE</span>
              <div className="flex justify-center items-center gap-2">
                <span className="text-xs text-stone-400 line-through">De R$ 27,90</span>
                <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">ECONOMIZE 30% NO PREMIUM</span>
              </div>
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="text-xs font-bold text-brand-ink">Apenas</span>
                <span className="text-4xl font-black text-brand-green-dark tracking-tight">R$ 19,90</span>
                <span className="text-xs text-brand-ink-light font-bold">à vista</span>
              </div>
              <p className="text-[9px] text-amber-900 font-bold uppercase tracking-wider">
                Acesso Vitalício Imediato • Sem assinaturas
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <a
                href="https://pay.kiwify.com.br"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowUpsellModal(false)}
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-6 rounded-2xl shadow-md text-sm text-center block transition-all transform hover:scale-[1.01] cursor-pointer"
              >
                Sim! Quero o Upgrade Premium por R$ 19,90 👑
              </a>

              <a
                href="https://pay.kiwify.com.br"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowUpsellModal(false)}
                className="w-full text-stone-500 hover:text-stone-800 font-bold py-2 text-[11px] text-center block underline cursor-pointer"
              >
                Não, obrigado. Prefiro o Plano Básico de R$ 9,90
              </a>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
