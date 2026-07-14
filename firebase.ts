import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Heart, 
  Clock, 
  Flame, 
  BookOpen, 
  Smartphone, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Award,
  Sparkles,
  Info,
  Calendar,
  CheckSquare,
  Gift,
  Lock,
  Unlock,
  Download,
  Trophy,
  Search,
  ChevronDown,
  ChevronUp,
  Share2,
  RefreshCw,
  ShoppingCart,
  Trash2,
  Square
} from 'lucide-react';
import { Recipe } from '../types';
import { recipes } from '../data';
import OvOLogo from './OvOLogo';
import { 
  proteinSnacks, 
  healthySauces, 
  preservationGuide, 
  BonusRecipe, 
  SauceItem, 
  ConservationItem 
} from '../recompensasData';

export const shoppingWeeksData = {
  1: {
    days: "Receitas 1 a 7",
    categories: {
      "Proteínas": [
        { id: "w1_prot_1", name: "3 dúzias de Ovos Caipiras" },
        { id: "w1_prot_2", name: "500g de Peito de Frango" },
        { id: "w1_prot_3", name: "2 latas de Atum ao Natural" }
      ],
      "Hortifruti": [
        { id: "w1_hort_1", name: "1 maço de Espinafre fresco" },
        { id: "w1_hort_2", name: "1 caixinha de Tomate Cereja" },
        { id: "w1_hort_3", name: "3 Bananas Prata" },
        { id: "w1_hort_4", name: "2 Abacates médios" }
      ],
      "Grãos": [
        { id: "w1_grao_1", name: "250g de Aveia em Flocos Finos" },
        { id: "w1_grao_2", name: "100g de Sementes de Chia" }
      ],
      "Laticínios": [
        { id: "w1_lat_1", name: "1 pote de Creme de Ricota Light" },
        { id: "w1_lat_2", name: "1 peça de Queijo Minas Frescal" }
      ],
      "Temperos": [
        { id: "w1_temp_1", name: "Garrafa de Azeite Extra Virgem" },
        { id: "w1_temp_2", name: "Sal marinho e Orégano" }
      ]
    }
  },
  2: {
    days: "Receitas 8 a 15",
    categories: {
      "Proteínas": [
        { id: "w2_prot_1", name: "3 dúzias de Ovos Caipiras" },
        { id: "w2_prot_2", name: "600g de Patinho Moído magro" },
        { id: "w2_prot_3", name: "300g de Filé de Tilápia" }
      ],
      "Hortifruti": [
        { id: "w2_hort_1", name: "1 maço de Brócolis fresco" },
        { id: "w2_hort_2", name: "1 unidade de Alface Crespa" },
        { id: "w2_hort_3", name: "1 saco de Cenouras" },
        { id: "w2_hort_4", name: "4 unidades de Limão" }
      ],
      "Grãos": [
        { id: "w2_grao_1", name: "500g de Arroz Integral" },
        { id: "w2_grao_2", name: "100g de Linhaça Dourada" }
      ],
      "Laticínios": [
        { id: "w2_lat_1", name: "4 potes de Iogurte Desnatado" },
        { id: "w2_lat_2", name: "1 pacote de Queijo Parmesão Ralado" }
      ],
      "Temperos": [
        { id: "w2_temp_1", name: "Açafrão da Terra (Cúrcuma)" },
        { id: "w2_temp_2", name: "Alho em flocos e Pimenta do reino" }
      ]
    }
  },
  3: {
    days: "Receitas 16 a 22",
    categories: {
      "Proteínas": [
        { id: "w3_prot_1", name: "3 dúzias de Ovos Caipiras" },
        { id: "w3_prot_2", name: "500g de Peito de Frango desfiado" }
      ],
      "Hortifruti": [
        { id: "w3_hort_1", name: "1 maço de Couve Manteiga" },
        { id: "w3_hort_2", name: "2 Abobrinhas verdes" },
        { id: "w3_hort_3", name: "1 caixinha de Morango fresco" },
        { id: "w3_hort_4", name: "1 unidade de Cebola Roxa" }
      ],
      "Grãos": [
        { id: "w3_grao_1", name: "250g de Farelo de Aveia" },
        { id: "w3_grao_2", name: "1 pacote de Tapioca Goma" }
      ],
      "Laticínios": [
        { id: "w3_lat_1", name: "1 pote de Creme de Ricota Light" },
        { id: "w3_lat_2", name: "1 peça de Queijo Minas Frescal" }
      ],
      "Temperos": [
        { id: "w3_temp_1", name: "Manjericão fresco" },
        { id: "w3_temp_2", name: "Canela em pó para panquecas" }
      ]
    }
  },
  4: {
    days: "Receitas 23 a 30",
    categories: {
      "Proteínas": [
        { id: "w4_prot_1", name: "4 dúzias de Ovos Caipiras" },
        { id: "w4_prot_2", name: "500g de Patinho Moído magro" },
        { id: "w4_prot_3", name: "2 latas de Atum" }
      ],
      "Hortifruti": [
        { id: "w4_hort_1", name: "1 saco de Batata Doce" },
        { id: "w4_hort_2", name: "1 maço de Espinafre" },
        { id: "w4_hort_3", name: "2 mangas Palmer médias" },
        { id: "w4_hort_4", name: "1 cabeça de Alho" }
      ],
      "Grãos": [
        { id: "w4_grao_1", name: "1 pacote de Quinoa em grãos" },
        { id: "w4_grao_2", name: "100g de Chia" }
      ],
      "Laticínios": [
        { id: "w4_lat_1", name: "4 potes de Iogurte Desnatado" },
        { id: "w4_lat_2", name: "1 peça de Queijo Coalho Light" }
      ],
      "Temperos": [
        { id: "w4_temp_1", name: "Chimichurri sem sal" },
        { id: "w4_temp_2", name: "Azeite Extra Virgem" }
      ]
    }
  }
} as const;

export const getCategoryForIngredient = (ing: string): 'Proteínas' | 'Hortifruti' | 'Grãos' | 'Laticínios' | 'Temperos' => {
  const lower = ing.toLowerCase();
  
  if (
    lower.includes('ovo') || 
    lower.includes('frango') || 
    lower.includes('atum') || 
    lower.includes('tilápia') || 
    lower.includes('patinho') || 
    lower.includes('carne') || 
    lower.includes('lombo') || 
    lower.includes('presunto') || 
    lower.includes('peito')
  ) {
    return 'Proteínas';
  }
  
  if (
    lower.includes('queijo') || 
    lower.includes('ricota') || 
    lower.includes('cottage') || 
    lower.includes('parmesão') || 
    lower.includes('coalho') || 
    lower.includes('minas') || 
    lower.includes('muçarela') || 
    lower.includes('creme') || 
    lower.includes('requeijão') || 
    lower.includes('iogurte') || 
    lower.includes('leite') || 
    lower.includes('manteiga')
  ) {
    return 'Laticínios';
  }
  
  if (
    lower.includes('tapioca') || 
    lower.includes('aveia') || 
    lower.includes('chia') || 
    lower.includes('linhaça') || 
    lower.includes('arroz') || 
    lower.includes('quinoa') || 
    lower.includes('farelo') || 
    lower.includes('pão') || 
    lower.includes('torrada') || 
    lower.includes('muffin') || 
    lower.includes('brioche') || 
    lower.includes('centeio') ||
    lower.includes('massa')
  ) {
    return 'Grãos';
  }
  
  if (
    lower.includes('tomate') || 
    lower.includes('manjericão') || 
    lower.includes('espinafre') || 
    lower.includes('cebolinha') || 
    lower.includes('brócolis') || 
    lower.includes('alface') || 
    lower.includes('cenoura') || 
    lower.includes('limão') || 
    lower.includes('couve') || 
    lower.includes('abobrinha') || 
    lower.includes('morango') || 
    lower.includes('cebola') || 
    lower.includes('alho') || 
    lower.includes('batata') || 
    lower.includes('abacate') || 
    lower.includes('coentro') || 
    lower.includes('pimentão') || 
    lower.includes('alho-poró') || 
    lower.includes('gengibre') || 
    lower.includes('acelga') || 
    lower.includes('banana') || 
    lower.includes('manga') || 
    lower.includes('cogumelo') || 
    lower.includes('salsinha') || 
    lower.includes('ervas') ||
    lower.includes('milho') ||
    lower.includes('ervilha')
  ) {
    return 'Hortifruti';
  }
  
  return 'Temperos';
};

export const normalizeIngredientName = (ing: string): string => {
  const lower = ing.toLowerCase();
  if (lower.includes('ovo')) return 'Ovos Caipiras (sugerido 3 a 4 dúzias por semana)';
  if (lower.includes('tapioca') || lower.includes('goma')) return 'Goma de Tapioca';
  if (lower.includes('tomate')) return 'Tomates Cereja / Italianos';
  if (lower.includes('queijo branco') || lower.includes('minas')) return 'Queijo Minas Frescal';
  if (lower.includes('manjericão')) return 'Manjericão Fresco';
  if (lower.includes('parmesão')) return 'Queijo Parmesão Ralado';
  if (lower.includes('cebolinha')) return 'Cebolinha Fresca';
  if (lower.includes('molho de tomate')) return 'Molho de Tomate Caseiro';
  if (lower.includes('cebola roxa')) return 'Cebola Roxa';
  if (lower.includes('cebola')) return 'Cebola Comum';
  if (lower.includes('pimentão')) return 'Pimentão Amarelo ou Vermelho';
  if (lower.includes('coentro')) return 'Coentro Fresco';
  if (lower.includes('aveia') || lower.includes('farelo')) return 'Aveia em Flocos ou Farelo';
  if (lower.includes('espinafre')) return 'Espinafre Fresco';
  if (lower.includes('frango')) return 'Peito de Frango';
  if (lower.includes('requeijão')) return 'Requeijão Light';
  if (lower.includes('manteiga')) return 'Manteiga sem Sal';
  if (lower.includes('brócolis')) return 'Brócolis Fresco';
  if (lower.includes('abacate') || lower.includes('avocado')) return 'Abacate ou Avocado';
  if (lower.includes('pão') || lower.includes('brioche') || lower.includes('torrada') || lower.includes('muffin')) return 'Pão Integral ou de Fermentação Natural';
  if (lower.includes('limão')) return 'Limão';
  if (lower.includes('vinagre')) return 'Vinagre Branco';
  if (lower.includes('batata doce')) return 'Batata Doce';
  if (lower.includes('batata')) return 'Batata Inglesa';
  if (lower.includes('mostarda')) return 'Mostarda';
  if (lower.includes('iogurte')) return 'Iogurte Grego ou Desnatado';
  if (lower.includes('peito de peru') || lower.includes('lombo') || lower.includes('presunto')) return 'Peito de Peru / Presunto Magro';
  if (lower.includes('leite')) return 'Leite de sua preferência';
  if (lower.includes('creme de leite') || lower.includes('creme de ricota')) return 'Creme de Ricota Light';
  if (lower.includes('atum')) return 'Atum ao Natural (lata)';
  if (lower.includes('pesto')) return 'Molho Pesto';
  if (lower.includes('milho') || lower.includes('ervilha')) return 'Milho ou Ervilha em lata';
  if (lower.includes('alho-poró')) return 'Alho-poró';
  if (lower.includes('alface')) return 'Alface Fresca';
  if (lower.includes('cenoura')) return 'Cenouras';
  if (lower.includes('ricota fresca') || lower.includes('ricota')) return 'Ricota Fresca';
  if (lower.includes('feta')) return 'Queijo Feta ou Ricota';
  if (lower.includes('shoyu')) return 'Molho Shoyu';
  if (lower.includes('gengibre')) return 'Gengibre Fresco';
  if (lower.includes('mel')) return 'Mel de Abelha';
  if (lower.includes('açúcar')) return 'Açúcar Demerara';
  if (lower.includes('banana')) return 'Banana madura';
  if (lower.includes('cogumelo')) return 'Cogumelos Frescos (Paris)';
  if (lower.includes('abobrinha')) return 'Abobrinhas Verdes';
  if (lower.includes('caiena')) return 'Pimenta Caiena';
  if (lower.includes('salsinha')) return 'Salsinha Verde';
  if (lower.includes('óleo de gergelim')) return 'Óleo de Gergelim';
  if (lower.includes('gergelim')) return 'Sementes de Gergelim';
  if (lower.includes('acelga')) return 'Acelga Fresca';
  if (lower.includes('manga')) return 'Manga Palmer';
  if (lower.includes('azeite')) return 'Azeite de Oliva Extra Virgem';
  if (lower.includes('chia')) return 'Sementes de Chia';
  if (lower.includes('linhaça')) return 'Linhaça Dourada';
  if (lower.includes('quinoa')) return 'Quinoa em Grãos';
  if (lower.includes('coalho')) return 'Queijo Coalho Light';
  if (lower.includes('chimichurri')) return 'Tempero Chimichurri';
  if (lower.includes('sal')) return 'Sal Marinho';
  if (lower.includes('pimenta')) return 'Pimenta-do-reino';
  if (lower.includes('orégano')) return 'Orégano seco';
  if (lower.includes('alho')) return 'Alho';
  if (lower.includes('ervas')) return 'Ervas Finas';
  if (lower.includes('cominho')) return 'Cominho em pó';
  if (lower.includes('páprica')) return 'Páprica Defumada';
  if (lower.includes('canela')) return 'Canela em pó';
  if (lower.includes('no-moscada') || lower.includes('noz-moscada')) return 'Noz-moscada';
  if (lower.includes('tomilho')) return 'Tomilho fresco';
  
  const cleaned = ing.replace(/^\d+(\/\d+)?\s*(g|kg|ml|l|xícara|xícaras|colher|colheres|fatia|fatias|unidade|unidades|dúzia|dúzias|maço|maços|caixinha|pote|potes|saco|peça|folhas)?\s*(de\s+|do\s+)?/i, '');
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

const getPlateStyle = (plateColor: string) => {
  switch (plateColor) {
    case 'pink':
      return 'bg-pink-50 border-pink-300 shadow-[inset_0_4px_12px_rgba(244,143,177,0.25)] bg-[radial-gradient(#fbcfe8_1px,transparent_1px)] [background-size:12px_12px]';
    case 'blue':
      return 'bg-sky-50 border-sky-300 shadow-[inset_0_4px_12px_rgba(56,189,248,0.25)] bg-[radial-gradient(#bae6fd_1px,transparent_1px)] [background-size:12px_12px]';
    case 'yellow':
      return 'bg-amber-50 border-amber-300 shadow-[inset_0_4px_12px_rgba(251,191,36,0.25)] bg-[radial-gradient(#fde68a_1px,transparent_1px)] [background-size:12px_12px]';
    case 'space':
      return 'bg-slate-950 border-slate-800 shadow-[inset_0_4px_12px_rgba(99,102,241,0.35)] bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:12px_12px]';
    case 'rainbow':
      return 'bg-[linear-gradient(135deg,#fae8ff_0%,#f5f3ff_50%,#e0f2fe_100%)] border-purple-300 shadow-[inset_0_4px_12px_rgba(168,85,247,0.18)]';
    case 'beach':
      return 'bg-amber-50/80 border-amber-300 shadow-[inset_0_4px_12px_rgba(217,119,6,0.18)] bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:12px_12px]';
    default:
      return 'bg-white border-stone-200 shadow-inner';
  }
};

const kidsRecipes = [
  {
    id: 1,
    title: "🐣 Pintinho Feliz",
    emoji: "🐥",
    difficulty: "Super Fácil",
    time: "10 min",
    plateColor: "pink",
    backgroundName: "Jardim Florido 🌸",
    desc: "Um ovinho cozido recheado fofinho no jardim!",
    presentation: "Um ovinho cozido decorado como um pintinho feliz no jardim de ervas, com asas e pezinhos divertidos.",
    story: "O Pintinho Pipo acabou de nascer no jardim florido! Mas o vento soprou forte e levou suas asinhas e seu biquinho para piar feliz. Vamos ajudá-lo a encontrar tudo e deixá-lo bem quentinho no prato?",
    ingredients: [
      "2 Ovos cozidos firmes",
      "1 pedaço pequeno de cenoura (para bico e pés)",
      "Folhas de salsinha ou alface (para as asas e grama)",
      "Gergelim preto (para os olhinhos)"
    ],
    items: [
      { id: 'ovo', label: 'Ovo cozido 🍳', emoji: '🥚' },
      { id: 'olhos', label: 'Olhos de gergelim 👀', emoji: '👀' },
      { id: 'bico', label: 'Bico de cenoura 🥕', emoji: '🥕' },
      { id: 'asas', label: 'Asas de salsinha 🥬', emoji: '🥬' },
      { id: 'pes', label: 'Pézinhos de laranja/cenoura 🍊', emoji: '🍊' },
      { id: 'grama', label: 'Graminha de alface 🌱', emoji: '🌱' }
    ],
    steps: [
      "Cozinhe o ovo por 10 minutos com ajuda de um adulto.",
      "Descasque e corte ao meio fazendo zig-zag.",
      "Posicione os olhinhos de gergelim e o biquinho de cenoura.",
      "Encaixe as folhinhas nas laterais para fazer as asinhas.",
      "Coloque os pezinhos embaixo e espalhe a graminha de alface ao redor!"
    ],
    funSecret: "Se você fizer bem quietinho, quase dá para ouvir o Pipo piar de felicidade no prato! 🤫🐥"
  },
  {
    id: 2,
    title: "🐙 Polvo Dançarino",
    emoji: "🐙",
    difficulty: "Fácil",
    time: "12 min",
    plateColor: "blue",
    backgroundName: "Fundo do Mar 🌊",
    desc: "O ovinho polvo que adora nadar nas profundezas do oceano!",
    presentation: "Um polvo simpático com longos tentáculos de salsicha ou tirinhas de cenoura no prato azul.",
    story: "O Polvinho Otto adora dançar sob as ondas do mar! Mas hoje as correntes marinhas levaram seus tentáculos brincalhões e suas bolhas de sabão. Você consegue reconstruir o Otto para ele dar um show de natação?",
    ingredients: [
      "1 Ovo cozido firme",
      "Tirinhas de salsicha cozida ou cenoura (para os tentáculos)",
      "Azeitonas pretas ou gergelim (para olhos grandes)",
      "Tomates cereja cortados (para fazer bolhas de água)"
    ],
    items: [
      { id: 'ovo', label: 'Corpo de Ovo 🍳', emoji: '🥚' },
      { id: 'tentaculos', label: 'Tentáculos 🌭', emoji: '🌭' },
      { id: 'olhos_grandes', label: 'Olhos Grandes 👁️', emoji: '👁️' },
      { id: 'bolhas', label: 'Bolhas de Tomate 🫧', emoji: '🫧' }
    ],
    steps: [
      "Com ajuda de um adulto, cozinhe o ovo e corte a base para ele ficar em pé.",
      "Corte tirinhas finas de salsicha ou cenoura para simular os tentáculos.",
      "Arrume as tirinhas saindo debaixo do ovo como se fossem perninhas.",
      "Crie olhos grandes com pedacinhos de azeitona e use tomatinhos redondos ao redor para simular bolhas!"
    ],
    funSecret: "Faça movimentos de onda com os braços e dê um mergulho a cada mordida saudável! 🌊"
  },
  {
    id: 3,
    title: "🦁 Leão da Savana",
    emoji: "🦁",
    difficulty: "Divertido",
    time: "15 min",
    plateColor: "yellow",
    backgroundName: "Savana Solar ☀️",
    desc: "O rei da selva com uma juba de queijo brilhante!",
    presentation: "Um leãozinho com cara de ovo e uma juba majestosa de queijo ralado ou cenoura em fios.",
    story: "O Leão Léo é o rei da savana, mas hoje ele acordou sem sua juba fofinha e seu narizinho vermelho! Ajude o Léo a recuperar sua juba majestosa para ele dar o rugido mais feliz do Safari!",
    ingredients: [
      "1 Ovo frito com gema centralizada",
      "Queijo ralado ou cenoura ralada (para a juba fofinha)",
      "Rodelas de azeitona (para os olhos)",
      "1 Tomatinho cereja (para o nariz)"
    ],
    items: [
      { id: 'ovo', label: 'Rosto de Ovo 🍳', emoji: '🥚' },
      { id: 'juba', label: 'Juba de Queijo 🧀', emoji: '🧀' },
      { id: 'olhos', label: 'Olhos de Azeitona 👀', emoji: '👀' },
      { id: 'nariz', label: 'Nariz de Tomate 🍅', emoji: '🍅' }
    ],
    steps: [
      "Frite um ovo com gema inteira bem no centro.",
      "Apoie o ovo no centro do prato como a carinha do leão.",
      "Espalhe queijo ralado ou cenoura ralada em círculo ao redor do ovo para fazer a juba selvagem.",
      "Crie os olhos com rodelas de azeitona e coloque o tomatinho na gema para ser o nariz fofinho!"
    ],
    funSecret: "Dê o rugido mais forte que puder antes de saborear essa juba deliciosa! RRRRRR! 🦁"
  },
  {
    id: 4,
    title: "🚀 Foguete Espacial",
    emoji: "🚀",
    difficulty: "Mestre Chef",
    time: "15 min",
    plateColor: "space",
    backgroundName: "Galáxia Estrelada 🌌",
    desc: "Decole para o espaço com um foguete de ovo frito!",
    presentation: "Um foguete montado com metades de ovos, fumaça de couve-flor e estrelas amarelas no prato espacial.",
    story: "O Foguete Zapt está na plataforma de lançamento prontinho para viajar até a Lua! Mas falta o motor liberar aquela fumaça poderosa e as estrelas brilhantes guiarem o caminho. Vamos decolar juntos?",
    ingredients: [
      "2 Ovos cozidos cortados em rodelas",
      "Pimentão vermelho ou tomate (para o bico e asas do foguete)",
      "Couve-flor cozida ou purê (para a fumaça do motor)",
      "Pedacinhos de manga ou queijo (para as estrelas)"
    ],
    items: [
      { id: 'ovo', label: 'Janela de Ovo 🍳', emoji: '🥚' },
      { id: 'fumaca', label: 'Fumaça do Motor ☁️', emoji: '☁️' },
      { id: 'estrelas', label: 'Estrelas Guia ⭐', emoji: '⭐' }
    ],
    steps: [
      "Arrume as rodelas de ovo cozido in linha vertical para fazer o corpo do foguete.",
      "Corte um triângulo de pimentão para fazer a pontinha do foguete e dois menores para as asas laterais.",
      "Coloque couve-flor ou purê na base para ser a fumaça da decolagem.",
      "Espalhe estrelas feitas de queijo ou frutas amarelas pelo espaço sideral do prato!"
    ],
    funSecret: "Faça a contagem regressiva: 5... 4... 3... 2... 1... Decolar! Nhac! 🚀"
  },
  {
    id: 5,
    title: "🐰 Coelho Saltitante",
    emoji: "🐰",
    difficulty: "Fácil",
    time: "10 min",
    plateColor: "rainbow",
    backgroundName: "Horta Encantada 🌈",
    desc: "Um coelhinho fofinho com orelhas compridas de banana!",
    presentation: "Um coelho com rosto de ovo e grandes orelhas feitas com fatias de banana ou maçã.",
    story: "O Coelho Boni adora dar cambalhotas na horta! Mas ele correu tanto que acabou perdendo suas orelhas compridas e sua cenourinha preferida. Vamos ajudá-lo a ficar pronto para os saltos na horta?",
    ingredients: [
      "1 Ovo cozido cortado ao meio",
      "Fatias longitudinais de banana ou maçã (para as orelhas)",
      "1 Cenourinha baby ou tira de cenoura (para a comida dele)",
      "Cebolinha (para os bigodes de coelho)"
    ],
    items: [
      { id: 'ovo', label: 'Corpo de Ovo 🍳', emoji: '🥚' },
      { id: 'orelhas', label: 'Orelhas de Banana 🍌', emoji: '🍌' },
      { id: 'cenoura', label: 'Cenourinha da Horta 🥕', emoji: '🥕' }
    ],
    steps: [
      "Coloque a metade do ovo cozido com a parte lisa para cima no prato.",
      "Corte fatias finas de banana e posicione no topo do ovo como duas orelhas compridas.",
      "Crie bigodes com pedaços de cebolinha.",
      "Coloque a cenourinha ao lado do coelho para ele lanchar!"
    ],
    funSecret: "Mexa o nariz igual a um coelhinho de verdade enquanto saboreia essa delícia! 🐰"
  },
  {
    id: 6,
    title: "🐟 Peixinho Dourado",
    emoji: "🐟",
    difficulty: "Super Fácil",
    time: "8 min",
    plateColor: "beach",
    backgroundName: "Recife de Corais 🏖️",
    desc: "Um peixinho alegre que nada num mar de algas verdes!",
    presentation: "Um peixinho montado com ovo cozido cortado de lado, cauda de mexerica e algas de brócolis.",
    story: "O Peixinho Bibi adora apostar corrida com os golfinhos no recife! Mas ele ficou sem sua cauda veloz e as algas do seu esconderijo secreto sumiram. Vamos ajudá-lo a nadar super rápido no prato praia?",
    ingredients: [
      "1 Ovo cozido cortado ao meio longitudinalmente",
      "Gomos de mexerica ou laranja (para a cauda e nadadeiras)",
      "Raminhos de brócolis cozido ou salsinha (para as algas marinhas)",
      "Gergelim preto (para o olhinho)"
    ],
    items: [
      { id: 'ovo', label: 'Corpo de Peixe 🍳', emoji: '🥚' },
      { id: 'cauda', label: 'Cauda de Mexerica 🍊', emoji: '🍊' },
      { id: 'algas', label: 'Algas de Brócolis 🌿', emoji: '🌿' }
    ],
    steps: [
      "Coloque a metade de ovo deitado no centro do prato.",
      "Posicione um gomo de mexerica ou laranja na parte de trás para formar a cauda de peixe.",
      "Use raminhos de brócolis na base do prato para fazer a floresta de algas marinhas.",
      "Coloque o gergelim na frente do ovo para fazer o olhinho do Bibi!"
    ],
    funSecret: "Faça barulho de bolhas com a boca 'glub glub' a cada pedacinho! 🐟"
  }
];

import { checkUserPlan } from '../lib/firebase';

export default function PhoneSimulator({ 
  standalone = false,
  isPreview
}: { 
  standalone?: boolean;
  isPreview?: boolean;
}) {
  const [isDemoMode] = useState(() => {
    if (isPreview !== undefined) return isPreview;
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('preview') === 'true' || params.get('sim') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [showAdminPanel, setShowAdminPanel] = useState(false);
  // State for simulated app
  const [activeTab, setActiveTab] = useState<'hoje' | 'cardapio' | 'favoritos' | 'recompensas' | 'certificado' | 'como_acessar' | 'kids'>('hoje');
  const [userPlan, setUserPlan] = useState<'trial' | 'basic' | 'complete'>(() => {
    try {
      const savedPlan = localStorage.getItem('ovo_buyer_plan');
      return (savedPlan === 'basic' || savedPlan === 'complete' || savedPlan === 'trial') ? savedPlan : 'trial';
    } catch (e) {
      return 'trial';
    }
  });
  
  // Buyer Authentication states
  const [emailInput, setEmailInput] = useState('');
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(() => {
    if (isDemoMode) {
      return 'demo@ovoapp.com';
    }
    try {
      return localStorage.getItem('ovo_buyer_email') || null;
    } catch (e) {
      return null;
    }
  });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [checkingLogin, setCheckingLogin] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail) return;
    setCheckingLogin(true);
    setLoginError(null);
    setLoginSuccess(false);

    const adminEmails = [
      'coelhosoftwareinformatica@gmail.com',
      'admin@ovoapp.com',
      'admin@ovo.com',
      'admin@ovoapp.com.br'
    ];
    const isAdmin = adminEmails.includes(cleanEmail);

    try {
      let result;
      if (isAdmin) {
        result = { exists: true, plano: 'premium' as const };
      } else {
        result = await checkUserPlan(cleanEmail);
      }

      if (result.exists) {
        setLoggedInEmail(cleanEmail);
        try {
          localStorage.setItem('ovo_buyer_email', cleanEmail);
        } catch (err) {}
        
        let resolvedPlan: 'basic' | 'complete' = 'complete';
        if (result.plano === 'premium') {
          resolvedPlan = 'complete';
        } else {
          resolvedPlan = 'basic';
        }
        setUserPlan(resolvedPlan);
        try {
          localStorage.setItem('ovo_buyer_plan', resolvedPlan);
        } catch (err) {}
        
        setLoginSuccess(true);
        if (isAdmin) {
          setBonusUnlockedToast("Olá Administrador 👑! Acesso total liberado.");
        } else {
          setBonusUnlockedToast(`Sucesso! Plano ${result.plano === 'premium' ? 'Premium 👑' : 'Básico 🔓'} ativado.`);
        }
      } else {
        setLoginError(isDemoMode 
          ? "E-mail não encontrado! Caso tenha comprado agora, aguarde até 2 min para aprovação. Ou use os e-mails de teste abaixo." 
          : "E-mail de compra não cadastrado! Caso tenha comprado agora, aguarde até 5 min para sincronização automática da Kiwify ou entre em contato com o suporte."
        );
      }
    } catch (err) {
      setLoginError("Erro de conexão. Verifique sua rede.");
    } finally {
      setCheckingLogin(false);
    }
  };
  const [guidedStartTime, setGuidedStartTime] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('ovo_guided_start_time');
      if (saved) return parseInt(saved, 10);
      const now = Date.now();
      localStorage.setItem('ovo_guided_start_time', now.toString());
      return now;
    } catch (e) {
      return Date.now();
    }
  });

  const [guidedDaysOffset, setGuidedDaysOffset] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('ovo_guided_days_offset');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem('ovo_guided_days_offset', guidedDaysOffset.toString());
  }, [guidedDaysOffset]);

  const guidedJourneyDay = Math.min(isDemoMode ? 3 : 30, Math.max(1, Math.floor((Date.now() - guidedStartTime) / 86400000) + 1 + guidedDaysOffset));

  const [selectedDay, setSelectedDay] = useState<number>(() => {
    try {
      const savedSelected = localStorage.getItem('ovo_selected_recipe_day');
      if (savedSelected) return parseInt(savedSelected, 10);

      const savedStart = localStorage.getItem('ovo_guided_start_time');
      const startTime = savedStart ? parseInt(savedStart, 10) : Date.now();
      const savedOffset = localStorage.getItem('ovo_guided_days_offset');
      const offset = savedOffset ? parseInt(savedOffset, 10) : 0;
      return Math.min(isDemoMode ? 3 : 30, Math.max(1, Math.floor((Date.now() - startTime) / 86400000) + 1 + offset));
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    localStorage.setItem('ovo_selected_recipe_day', selectedDay.toString());
  }, [selectedDay]);

  const [progressCount, setProgressCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('ovo_progress_count');
      return saved ? parseInt(saved, 10) : 1;
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    localStorage.setItem('ovo_progress_count', progressCount.toString());
  }, [progressCount]);

  const completedRecipes = Array.from({ length: progressCount }, (_, i) => i + 1);
  const [favoritedRecipes, setFavoritedRecipes] = useState<number[]>([1, 5]);
  const [selectedRecipeDetail, setSelectedRecipeDetail] = useState<Recipe | null>(null);
  const [selectedKidsRecipe, setSelectedKidsRecipe] = useState<number | null>(null);
  const [kidsPlateElements, setKidsPlateElements] = useState<string[]>(['ovinho']);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [certName, setCertName] = useState('Seu Nome');
  const [simulatedComplete, setSimulatedComplete] = useState(false);
  const [downloadingCert, setDownloadingCert] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [bonusUnlockedToast, setBonusUnlockedToast] = useState<string | null>(null);
  const [recipeCategoryFilter, setRecipeCategoryFilter] = useState<string>('Tudo');
  
  // Categories menu drag scrolling handlers
  const categoriesRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleCategoriesMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!categoriesRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - categoriesRef.current.offsetLeft;
    scrollLeft.current = categoriesRef.current.scrollLeft;
  };

  const handleCategoriesMouseLeave = () => {
    isDown.current = false;
  };

  const handleCategoriesMouseUp = () => {
    isDown.current = false;
  };

  const handleCategoriesMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !categoriesRef.current) return;
    e.preventDefault();
    const x = e.pageX - categoriesRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed multiplier
    categoriesRef.current.scrollLeft = scrollLeft.current - walk;
  };
  
  // Kids progress states
  const [completedKidsRecipes, setCompletedKidsRecipes] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('ovo_completed_kids_recipes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [kidsCertName, setKidsCertName] = useState('Super Ajudante');
  const [downloadingKidsCert, setDownloadingKidsCert] = useState(false);
  const [downloadKidsSuccess, setDownloadKidsSuccess] = useState(false);

  // New Kids Space game states
  const [kidsGameMode, setKidsGameMode] = useState<'challenge' | 'free'>('challenge');
  const [currentChallengeRecipeId, setCurrentChallengeRecipeId] = useState<number>(() => {
    const day = new Date().getDate();
    return (day % 6) + 1; // deterministically 1 to 6
  });
  const [challengeStep, setChallengeStep] = useState<'idle' | 'story' | 'memorize' | 'play' | 'result'>('idle');
  const [storyTimer, setStoryTimer] = useState<number>(20);
  const [memorizeTimer, setMemorizeTimer] = useState<number>(5);
  const [activeKidsSticker, setActiveKidsSticker] = useState<string | null>(null);
  const [kidsPlateColor, setKidsPlateColor] = useState<string>('pink');
  const [showConfettiEffect, setShowConfettiEffect] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{ score: number, total: number, message: string } | null>(null);

  // Handle countdown timers for Story and Memorization steps
  useEffect(() => {
    let interval: any = null;
    if (challengeStep === 'story') {
      interval = setInterval(() => {
        setStoryTimer((prev) => {
          if (prev <= 1) {
            setChallengeStep('memorize');
            setMemorizeTimer(5);
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (challengeStep === 'memorize') {
      const activeRecipe = kidsRecipes.find(r => r.id === currentChallengeRecipeId);
      if (activeRecipe) {
        setKidsPlateElements(activeRecipe.items.map(it => it.id));
        setKidsPlateColor(activeRecipe.plateColor);
      }
      interval = setInterval(() => {
        setMemorizeTimer((prev) => {
          if (prev <= 1) {
            setKidsPlateElements([]);
            setChallengeStep('play');
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [challengeStep, currentChallengeRecipeId]);

  useEffect(() => {
    localStorage.setItem('ovo_completed_kids_recipes', JSON.stringify(completedKidsRecipes));
  }, [completedKidsRecipes]);

  const [selectedMeal, setSelectedMeal] = useState<'cafe' | 'almoco' | 'jantar'>('cafe');
  const [lastCheckInTime, setLastCheckInTime] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem('last_check_in_time');
      return saved ? parseInt(saved, 10) : null;
    } catch (e) {
      console.error("Error reading last_check_in_time", e);
      return null;
    }
  });

  // Recompensas states
  const [activeRewardSubTab, setActiveRewardSubTab] = useState<'lanches' | 'molhos' | 'conservacao'>('lanches');
  const [snackSearch, setSnackSearch] = useState('');
  const [expandedLancheTitle, setExpandedLancheTitle] = useState<string | null>(null);
  const [expandedSauceTitle, setExpandedSauceTitle] = useState<string | null>(null);
  
  // 50 Extra Recipes states linked to Certificate
  const [expandedBonusTitle, setExpandedBonusTitle] = useState<string | null>(null);
  const [downloadingEbook, setDownloadingEbook] = useState(false);
  const [ebookDownloaded, setEbookDownloaded] = useState(false);

  // Swapped recipes state (substitute recipe from favorites)
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [showShoppingListModal, setShowShoppingListModal] = useState(false);
  const [swappedRecipes, setSwappedRecipes] = useState<Record<string, Recipe>>(() => {
    try {
      const saved = localStorage.getItem('swapped_recipes');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Error reading swapped_recipes", e);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('swapped_recipes', JSON.stringify(swappedRecipes));
  }, [swappedRecipes]);

  useEffect(() => {
    if (lastCheckInTime) {
      localStorage.setItem('last_check_in_time', lastCheckInTime.toString());
    } else {
      localStorage.removeItem('last_check_in_time');
    }
  }, [lastCheckInTime]);
  
  // Auto-dismiss custom toast
  useEffect(() => {
    if (bonusUnlockedToast) {
      const timer = setTimeout(() => {
        setBonusUnlockedToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bonusUnlockedToast]);
  
  // Shopping list state
  const [selectedShoppingWeek, setSelectedShoppingWeek] = useState<1 | 2 | 3 | 4>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('checked_ingredients');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Error reading checked_ingredients", e);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('checked_ingredients', JSON.stringify(checkedIngredients));
  }, [checkedIngredients]);
  
  // Real-time simulated clock
  const [simTime, setSimTime] = useState('09:41');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setSimTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Deterministic recipe retrieval based on the day and chosen meal
  const getRecipeForDayAndMeal = (day: number, meal: 'cafe' | 'almoco' | 'jantar'): Recipe => {
    const key = `${day}_${meal}`;
    if (swappedRecipes[key] && swappedRecipes[key].id && swappedRecipes[key].title) {
      return swappedRecipes[key];
    }

    let categoryFilter: string[] = [];
    if (meal === 'cafe') categoryFilter = ['Café da Manhã', 'Lanche'];
    else if (meal === 'almoco') categoryFilter = ['Almoço'];
    else if (meal === 'jantar') categoryFilter = ['Jantar'];

    const filtered = recipes.filter(r => r && categoryFilter.includes(r.category));
    if (filtered.length > 0) {
      const index = (day - 1) % filtered.length;
      const found = filtered[index];
      if (found) {
        return {
          ...found,
          // Ensure ID is stable and unique per day and meal
          id: found.id + (day * 100),
          category: meal === 'cafe' ? 'Café da Manhã' : meal === 'almoco' ? 'Almoço' : 'Jantar'
        };
      }
    }
    
    // Ultimate fallback if recipes array exists and is not empty
    const fallbackIdx = recipes.length > 0 ? (day - 1) % recipes.length : 0;
    return recipes[fallbackIdx] || {
      id: 999,
      title: "Receita de Ovo",
      time: "10 min",
      difficulty: "Fácil",
      category: "Café da Manhã",
      calories: "150 kcal",
      protein: "12g",
      image: "https://images.unsplash.com/photo-151062780277d-3d98c18ecf0d?q=80&w=400&auto=format&fit=crop",
      ingredients: ["Ovo"],
      steps: ["Prepare do seu jeito."]
    };
  };

  const getWeeklyIngredientsDynamic = (week: number) => {
    let days: number[] = [];
    if (week === 1) days = [1, 2, 3, 4, 5, 6, 7];
    else if (week === 2) days = [8, 9, 10, 11, 12, 13, 14, 15];
    else if (week === 3) days = [16, 17, 18, 19, 20, 21, 22];
    else if (week === 4) days = [23, 24, 25, 26, 27, 28, 29, 30];

    const itemNamesMap: Record<string, { id: string, name: string, category: 'Proteínas' | 'Hortifruti' | 'Grãos' | 'Laticínios' | 'Temperos' }> = {};

    days.forEach(day => {
      (['cafe', 'almoco', 'jantar'] as const).forEach(meal => {
        const recipe = getRecipeForDayAndMeal(day, meal);
        if (recipe && recipe.ingredients) {
          recipe.ingredients.forEach(ing => {
            const normalizedName = normalizeIngredientName(ing);
            const category = getCategoryForIngredient(ing);
            const slug = normalizedName.toLowerCase().replace(/[^a-z0-9]/g, '_');
            const id = `w${week}_${slug}`;
            
            if (!itemNamesMap[normalizedName]) {
              itemNamesMap[normalizedName] = { id, name: normalizedName, category };
            }
          });
        }
      });
    });

    const categories: Record<'Proteínas' | 'Hortifruti' | 'Grãos' | 'Laticínios' | 'Temperos', Array<{ id: string, name: string }>> = {
      'Proteínas': [],
      'Hortifruti': [],
      'Grãos': [],
      'Laticínios': [],
      'Temperos': []
    };

    Object.values(itemNamesMap).forEach(item => {
      categories[item.category].push({ id: item.id, name: item.name });
    });

    return categories;
  };

  const toggleKidsRecipe = (recipeId: number, title: string) => {
    if (completedKidsRecipes.includes(recipeId)) {
      setCompletedKidsRecipes(completedKidsRecipes.filter(id => id !== recipeId));
      setBonusUnlockedToast(`Receita "${title}" marcada como não realizada.`);
    } else {
      setCompletedKidsRecipes([...completedKidsRecipes, recipeId]);
      setBonusUnlockedToast(`Receita "${title}" preparada com as crianças! 🥳🎈 Medalha de Mini Chef conquistada!`);
    }
  };

  const activeRecipe = getRecipeForDayAndMeal(selectedDay, selectedMeal);

  // Check if progress is locked (same calendar day as last check-in)
  const isProgressLocked = (): boolean => {
    if (!lastCheckInTime) return false;
    const lastDate = new Date(lastCheckInTime);
    const currentDate = new Date();
    return (
      lastDate.getDate() === currentDate.getDate() &&
      lastDate.getMonth() === currentDate.getMonth() &&
      lastDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const getLockTimeRemaining = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Midnight of next calendar day
    const diffMs = tomorrow.getTime() - now.getTime();
    const secondsLeft = Math.max(0, Math.ceil(diffMs / 1000));
    const hoursLeft = Math.floor(secondsLeft / 3600);
    const minutesLeft = Math.floor((secondsLeft % 3600) / 60);
    return { hoursLeft, minutesLeft };
  };

  const getNextReward = () => {
    if (progressCount < 1) return { day: 1, title: "Lista de Compras + Café da Manhã" };
    if (progressCount < 2) return { day: 2, title: "Mini Guia Visual dos Ovos" };
    if (progressCount < 3) return { day: 3, title: "3 Lanches Práticos" };
    if (progressCount < 4) return { day: 4, title: "3 Omeletes & Frittatas" };
    if (progressCount < 5) return { day: 5, title: "Técnica de Aeração" };
    if (progressCount < 6) return { day: 6, title: "Marmitas & Snacks" };
    if (progressCount < 7) return { day: 7, title: "Jantar Gourmet Leve" };
    if (progressCount < 8) return { day: 8, title: "Ebook + Certificado Oficial! 🎓" };
    return { day: 8, title: "Todos os Prêmios Desbloqueados! 🎉" };
  };

  const toggleComplete = (id: number) => {
    if (progressCount >= 8) {
      setBonusUnlockedToast("🏆 Sensacional! Você já concluiu todas as 8 etapas da Jornada do Chef!");
      return;
    }

    // Check calendar-day lock limit (resets at midnight)
    const isLocked = isProgressLocked();

    if (isLocked) {
      const { hoursLeft, minutesLeft } = getLockTimeRemaining();
      if (isDemoMode && loggedInEmail === 'demo@ovoapp.com') {
        setBonusUnlockedToast(`⚠️ Bloqueio de 24h Ativo! Próximo progresso liberado em ${hoursLeft}h ${minutesLeft}m. Use o botão "Acelerar 24 Horas" abaixo para testar!`);
      } else {
        setBonusUnlockedToast(`⚠️ Bloqueio de Dia Ativo! Próximo progresso liberado em ${hoursLeft}h ${minutesLeft}m (à meia-noite).`);
      }
    } else {
      const newProgress = progressCount + 1;
      setProgressCount(newProgress);
      setLastCheckInTime(Date.now());
      if (newProgress === 8) {
        setBonusUnlockedToast(`🏆 Parabéns! Você concluiu os 8 dias da Jornada do Chef! Seu Certificado Oficial e o Ebook Completo estão 100% liberados! 🎉`);
      } else {
        setBonusUnlockedToast(`🎉 Progresso registrado! Você avançou para o Dia ${newProgress} de 8 da Jornada.`);
      }
    }
  };

  const toggleFavorite = (id: number) => {
    if (favoritedRecipes.includes(id)) {
      setFavoritedRecipes(favoritedRecipes.filter((item) => item !== id));
    } else {
      setFavoritedRecipes([...favoritedRecipes, id]);
    }
  };

  const handleNextDay = () => {
    if (selectedDay >= 3 && (userPlan === 'trial' || isDemoMode)) {
      setShowPremiumModal(true);
    } else if (selectedDay < 60) {
      setSelectedDay(selectedDay + 1);
    } else {
      setSelectedDay(1);
    }
  };

  const handlePrevDay = () => {
    if (selectedDay > 1) {
      setSelectedDay(selectedDay - 1);
    }
  };

  const percentComplete = Math.min(100, Math.round((progressCount / 8) * 100));
  const isFullyCompleted = progressCount >= 8 || simulatedComplete;

  const renderAppContent = () => {
    if (!loggedInEmail) {
      return (
        <div className={`w-full h-full bg-white overflow-hidden flex flex-col relative text-brand-ink ${standalone ? 'rounded-none md:rounded-[38px]' : 'rounded-[38px]'}`}>
          {/* Status Bar */}
          <div className="h-10 pt-4 px-6 flex justify-between items-center bg-[#FAF6F0] text-brand-ink text-xs font-semibold z-40 select-none">
            <span>{simTime}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-brand-green/20 text-brand-green-dark px-1.5 py-0.5 rounded-full font-bold">Acesso Restrito</span>
              {/* Battery icon */}
              <div className="w-5 h-2.5 border border-brand-ink rounded-sm p-[1px] flex items-center">
                <div className="h-full w-4 bg-brand-ink rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Locked App Header */}
          <div className="bg-[#FAF6F0] pb-4 px-4 pt-2.5 border-b border-stone-200 select-none text-center flex flex-col items-center">
            <div className="scale-90 mb-1">
              <OvOLogo size="md" />
            </div>
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md mt-1.5 shadow-2xs border border-amber-600/10 uppercase">OvOChef+</span>
            <h4 className="text-xs font-black text-brand-ink mt-1">
              Área de Membros Exclusiva 🍳
            </h4>
          </div>

          {/* Scrollable Gated Login Form */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fbfaf8]">
            <div className="text-center py-3 px-1 space-y-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black text-brand-ink">Conteúdo 100% Protegido</h3>
              <p className="text-[10.5px] text-brand-ink-light leading-relaxed font-semibold">
                Este aplicativo é restrito para compradores do método **OvOChef+**. 
                Digite o e-mail que usou na compra da Kiwify para liberar seu acesso imediatamente.
              </p>
            </div>

            {/* Login form */}
            <div className="bg-gradient-to-br from-amber-50 to-brand-egg p-4 rounded-2xl border-2 border-brand-yolk/30 space-y-3.5 shadow-xs">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-brand-yolk/20 rounded-lg">
                  <Unlock className="w-4 h-4 text-brand-ink" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-ink">Ativar Meu Aplicativo</h4>
                  <p className="text-[9px] text-brand-ink-light font-bold">Verificação instantânea do e-mail de compra</p>
                </div>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-3">
                <div>
                  <label className="block text-[9px] font-black text-brand-ink-light uppercase mb-1">Seu E-mail de Compra:</label>
                  <input 
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="exemplo@seuemail.com"
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-yolk/50"
                  />
                </div>
                
                {loginError && (
                  <p className="text-[10px] text-rose-500 font-extrabold leading-tight">
                    ⚠️ {loginError}
                  </p>
                )}
                
                {loginSuccess && (
                  <p className="text-[10px] text-brand-green-dark font-extrabold leading-tight">
                    ✨ Acesso verificado com sucesso! Carregando aplicativo...
                  </p>
                )}

                <button
                  type="submit"
                  disabled={checkingLogin}
                  className="w-full bg-brand-yolk hover:bg-brand-yolk-dark disabled:bg-stone-200 text-brand-ink font-black py-2.5 rounded-xl text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {checkingLogin ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Verificando...</span>
                    </>
                  ) : (
                    <>
                      <span>Entrar no Aplicativo ⚡</span>
                    </>
                  )}
                </button>
                
                {isDemoMode && (
                  <div className="bg-white/50 p-2.5 rounded-xl border border-stone-200/40 text-[9px] text-brand-ink-light font-bold space-y-1.5">
                    <span className="block text-stone-600 font-extrabold">💡 Teste instantâneo (compradores virtuais):</span>
                    <div className="flex flex-col gap-1">
                      <button 
                        type="button" 
                        className="text-left text-amber-800 hover:underline font-extrabold text-[9.5px] flex items-center gap-1"
                        onClick={() => setEmailInput('completo@teste.com')}
                      >
                        👑 completo@teste.com (Acesso Premium)
                      </button>
                      <button 
                        type="button" 
                        className="text-left text-stone-700 hover:underline font-extrabold text-[9.5px] flex items-center gap-1"
                        onClick={() => setEmailInput('basico@teste.com')}
                      >
                        🔓 basico@teste.com (Acesso Básico)
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Gated Footer branding */}
          <div className="py-2.5 text-center border-t border-stone-100 select-none bg-stone-50">
            <p className="text-[8.5px] text-brand-ink-light font-bold">OvOChef+ © {new Date().getFullYear()} - Todos os Direitos Reservados</p>
          </div>
        </div>
      );
    }

    return (
      <div className={`w-full h-full bg-white overflow-hidden flex flex-col relative text-brand-ink ${standalone ? 'rounded-none md:rounded-[38px]' : 'rounded-[38px]'}`}>
          
          {/* Status Bar */}
          <div className="h-10 pt-4 px-6 flex justify-between items-center bg-[#FAF6F0] text-brand-ink text-xs font-semibold z-40 select-none">
            <span>{simTime}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-brand-green/20 text-brand-green-dark px-1.5 py-0.5 rounded-full">Web App</span>
              {/* Battery icon */}
              <div className="w-5 h-2.5 border border-brand-ink rounded-sm p-[1px] flex items-center">
                <div className="h-full w-4 bg-brand-ink rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Dynamic App Header */}
          <div className="bg-[#FAF6F0] pb-3 px-4 pt-1.5 border-b border-stone-200 select-none">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <OvOLogo size="sm" />
                <div>
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-[8px] tracking-widest px-1.5 py-0.2 rounded-md shadow-3xs border border-amber-600/10 uppercase">OvOChef+</span>
                  <h4 className="text-[11px] font-bold text-brand-ink leading-tight max-w-[130px] mt-0.5">
                    O que cozinhar hoje? 🍳
                  </h4>
                </div>
              </div>
              {/* Progress Badge */}
              <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 transition-all flex-shrink-0 ${isFullyCompleted && !isDemoMode ? 'bg-amber-100 text-amber-700 animate-pulse' : 'bg-brand-green/10 text-brand-green-dark'}`}>
                {isFullyCompleted && !isDemoMode ? <Trophy className="w-3 h-3 text-amber-500 fill-amber-500" /> : <Award className="w-3 h-3" />}
                <span>{isDemoMode ? (userPlan === 'trial' ? '🆓 Teste' : userPlan === 'basic' ? '🔓 Básico' : '👑 Completo') : (userPlan === 'trial' ? '🆓 Teste' : userPlan === 'basic' ? '🔓 Básico' : isFullyCompleted ? 'MasterChef 👑' : `Dia ${progressCount}/8`)}</span>
              </div>
            </div>
            
            {/* Attention-Grabbing Progress Bar & Reward Call-to-Action */}
            <div 
              onClick={() => setActiveTab('recompensas')}
              className={`mt-1.5 p-3 rounded-2xl border cursor-pointer transition-all ${
                isDemoMode
                  ? 'bg-stone-50 border-stone-200 opacity-75 hover:bg-stone-100/80'
                  : isFullyCompleted 
                    ? 'bg-gradient-to-r from-amber-500/10 via-brand-yolk/10 to-amber-500/10 border-amber-300 shadow-xs animate-pulse' 
                    : 'bg-white border-amber-200/40 hover:bg-white/95 hover:shadow-2xs'
              }`}
            >
              <div className="text-center space-y-1">
                {isDemoMode ? (
                  <>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-black text-stone-500 uppercase tracking-wide">
                      <span>🏆 Jornada do Chef 🔒</span>
                    </div>
                    
                    <div className="text-[10px] font-extrabold text-stone-400">
                      Desativado na Demonstração
                    </div>

                    {/* Styled segmented blocks representation of 8 segments */}
                    <div className="flex gap-1.5 justify-center py-1.5 opacity-50">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-6.5 h-2 rounded-[2px] bg-stone-200"
                        />
                      ))}
                    </div>

                    <div className="pt-1.5 border-t border-stone-200/60 flex flex-col items-center justify-center space-y-0.5">
                      <span className="text-[8.5px] font-extrabold text-stone-400 uppercase tracking-widest flex items-center gap-1">
                        🎁 Recompensas Progressivas:
                      </span>
                      <span className="text-[10px] font-black text-stone-500">
                        Disponível apenas na versão de produção
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-black text-amber-800 uppercase tracking-wide">
                      <span>🏆 Jornada do Chef</span>
                    </div>
                    
                    <div className="text-[10px] font-black text-brand-ink">
                      Dia {progressCount} de 8
                    </div>

                    {/* Styled segmented blocks representation of 8 segments */}
                    <div className="flex gap-1.5 justify-center py-1.5">
                      {Array.from({ length: 8 }).map((_, i) => {
                        const isFilled = i < progressCount;
                        return (
                          <div 
                            key={i} 
                            className={`w-6.5 h-2 rounded-[2px] transition-all duration-500 ${
                              isFilled 
                                ? 'bg-amber-500 shadow-[0_1px_2px_rgba(245,158,11,0.3)]' 
                                : 'bg-stone-200/70'
                            }`}
                          />
                        );
                      })}
                    </div>

                    <div className="pt-1.5 border-t border-stone-100 flex flex-col items-center justify-center space-y-0.5">
                      <span className="text-[8.5px] font-extrabold text-stone-500 uppercase tracking-widest flex items-center gap-1">
                        🎁 Próxima recompensa:
                      </span>
                      <span className="text-[10.5px] font-black text-amber-700">
                        {getNextReward().title}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        {/* Inner Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#FAF8F5] px-3 py-3 pb-20 relative scrollbar-none">
          
          <AnimatePresence mode="wait">
            {/* HOJE TAB */}
            {activeTab === 'hoje' && (
              <motion.div
                key="hoje"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                {/* Botão de Marcar Progresso do Dia */}
                <div className="bg-white p-2.5 rounded-xl shadow-sm border border-stone-200/60">
                  <button 
                    onClick={() => toggleComplete(activeRecipe.id)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isProgressLocked()
                        ? 'bg-stone-50 text-stone-400 border border-stone-150 cursor-not-allowed'
                        : 'bg-brand-green text-white shadow-sm hover:bg-brand-green-dark active:scale-[0.98]'
                    }`}
                  >
                    <Check className="w-4.5 h-4.5" />
                    {isProgressLocked()
                      ? '⏱️ Progresso de Hoje Concluído!' 
                      : 'Marcar Dia como Concluído! 🚀'
                    }
                  </button>
                </div>

                {/* Day Navigation */}
                <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-xs border border-stone-200/60">
                  <button 
                    onClick={handlePrevDay} 
                    disabled={selectedDay === 1}
                    className={`p-1 rounded-lg text-brand-ink-light transition-all ${selectedDay === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-stone-50'}`}
                    aria-label="Receita anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-brand-yolk-dark bg-brand-yolk/10 px-3 py-1 rounded-full">
                    RECEITA {selectedDay}
                  </span>
                  <button 
                    onClick={handleNextDay} 
                    className="p-1 rounded-lg hover:bg-stone-50 text-brand-ink-light"
                    aria-label="Próxima receita"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Opção de horário da receita (Café da Manhã, Almoço, Jantar) */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold text-brand-ink-light uppercase tracking-wider block px-1">
                    Escolha a refeição desta receita:
                  </span>
                  <div className="bg-white p-1 rounded-xl border border-stone-200/60 flex gap-1 shadow-2xs">
                    {[
                      { id: 'cafe', label: 'Café', icon: '🌅' },
                      { id: 'almoco', label: 'Almoço', icon: '☀️' },
                      { id: 'jantar', label: 'Jantar', icon: '🌙' }
                    ].map((mealItem) => (
                      <button
                        key={mealItem.id}
                        onClick={() => setSelectedMeal(mealItem.id as any)}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${
                          selectedMeal === mealItem.id
                            ? 'bg-brand-yolk text-brand-ink shadow-xs scale-[1.02]'
                            : 'text-brand-ink-light hover:bg-stone-50'
                        }`}
                      >
                        <span>{mealItem.icon}</span>
                        <span>{mealItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Controle de Bloqueio Antiansiedade de 24h & Simulador de Aceleração */}
                {isProgressLocked() ? (
                  <div className="bg-amber-500/10 border border-amber-300/60 p-2.5 rounded-xl text-center space-y-1.5 shadow-2xs relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-amber-500/10 rounded-bl-full flex items-center justify-center text-[8px]">🔒</div>
                    <p className="text-[9.5px] text-amber-800 font-extrabold leading-tight">
                      ⏱️ Bloqueio de Progresso Ativo (Evita Ansiedade!)
                    </p>
                    <p className="text-[8.5px] text-amber-700 font-medium leading-snug px-2">
                      Foco no processo saudável: o aplicativo permite 1 registro de progresso por dia. Próxima etapa liberada à meia-noite!
                    </p>
                    {isDemoMode && loggedInEmail === 'demo@ovoapp.com' && (
                      <button 
                        onClick={() => {
                          setLastCheckInTime(null);
                          setBonusUnlockedToast("⚡ Simulação: Próximo dia liberado com sucesso!");
                        }}
                        className="py-1 px-2.5 bg-amber-500 hover:bg-amber-600 text-white text-[9px] font-black rounded-lg shadow-sm transition-all uppercase tracking-wider inline-flex items-center gap-1 hover:scale-105 active:scale-95"
                      >
                        <span>Acelerar Dia ⚡</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="bg-brand-green/5 border border-brand-green/20 p-2 rounded-xl text-center flex items-center justify-center gap-1 shadow-3xs">
                    <span className="text-[10px] animate-pulse">🥚</span>
                    <p className="text-[9.5px] text-brand-green-dark font-extrabold">
                      Registro de progresso liberado! Marque seu avanço no programa.
                    </p>
                  </div>
                )}

                {/* Recipe Highlight Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-stone-200/60">
                  {/* 30-Day Guided Journey Interactive Header */}
                  <div className="bg-stone-50 border-b border-stone-150 p-3 text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-brand-ink uppercase tracking-wider flex items-center gap-1">
                        📅 Jornada Guiada (30 Dias)
                      </span>
                      <span className="text-[9.5px] font-bold text-brand-green-dark bg-brand-green/10 px-2 py-0.5 rounded-full">
                        Dia {guidedJourneyDay} de 30 Ativo
                      </span>
                    </div>

                    {/* Horizontal Scroll of Days */}
                    <div className="flex gap-1.5 overflow-x-auto pb-1 pt-0.5 scrollbar-none px-0.5">
                      {Array.from({ length: 30 }, (_, i) => {
                        const dayNum = i + 1;
                        const isCurrentActiveDay = dayNum === guidedJourneyDay;
                        const isCompleted = dayNum < guidedJourneyDay;
                        const isLocked = dayNum > 2 && (userPlan === 'trial' || isDemoMode);

                        return (
                          <button
                            key={dayNum}
                            onClick={() => {
                              if (isLocked) {
                                setShowPremiumModal(true);
                              } else {
                                setSelectedDay(dayNum);
                              }
                            }}
                            className={`flex-shrink-0 w-11 h-11 rounded-xl flex flex-col items-center justify-center transition-all select-none relative ${
                              isCurrentActiveDay
                                ? 'bg-brand-yolk text-brand-ink border-2 border-amber-500 font-extrabold shadow-3xs scale-102 font-sans'
                                : isCompleted
                                  ? 'bg-brand-green/15 text-brand-green-dark border border-brand-green/30 font-extrabold font-sans'
                                  : 'bg-white border border-stone-200 text-stone-500 hover:border-stone-300 font-bold font-sans'
                            }`}
                          >
                            <span className="text-[7.5px] uppercase tracking-wider leading-none">Dia</span>
                            <span className="text-xs leading-none mt-0.5">{dayNum}</span>
                            
                            {/* Mini check or padlock overlay */}
                            {isCompleted && (
                              <span className="absolute -top-1 -right-1 bg-brand-green text-white w-3 h-3 rounded-full flex items-center justify-center text-[7px] border border-white">
                                ✓
                              </span>
                            )}
                            {isLocked && (
                              <span className="absolute -top-1 -right-1 bg-amber-500 text-white w-3 h-3 rounded-full flex items-center justify-center text-[7px] border border-white">
                                🔒
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-3.5">
                    <div className="flex gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-ink-light bg-slate-100 px-2 py-0.5 rounded-md">
                        <Clock className="w-3 h-3 text-brand-yolk-dark" />
                        {activeRecipe.time}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-ink-light bg-slate-100 px-2 py-0.5 rounded-md">
                        <Flame className="w-3 h-3 text-orange-500" />
                        {activeRecipe.calories}
                      </span>
                      {swappedRecipes[`${selectedDay}_${selectedMeal}`] && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-md border border-amber-200/50">
                          🔄 Substituta
                        </span>
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-extrabold leading-snug text-brand-ink flex-1">
                        {activeRecipe.title}
                      </h3>
                      <button 
                        onClick={() => toggleFavorite(activeRecipe.id)}
                        className="w-8 h-8 flex-shrink-0 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-brand-ink border border-stone-150 transition-all"
                        aria-label="Favoritar"
                      >
                        <Heart 
                          className={`w-4.5 h-4.5 ${favoritedRecipes.includes(activeRecipe.id) ? 'fill-red-500 text-red-500' : 'text-stone-400'}`} 
                        />
                      </button>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 space-y-2">
                      <button 
                        onClick={() => setShowSwapModal(true)}
                        className="w-full py-2 bg-amber-500/10 hover:bg-amber-500/15 text-amber-800 border border-amber-300/30 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                        {swappedRecipes[`${selectedDay}_${selectedMeal}`] 
                          ? 'Mudar / Restaurar Favorito' 
                          : 'Trocar por um Favorito ❤️'
                        }
                      </button>

                      <button 
                        onClick={() => setShowShoppingListModal(true)}
                        className="w-full py-2 bg-brand-green/10 hover:bg-brand-green/15 text-brand-green-dark border border-brand-green/30 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 text-brand-green" />
                        Lista de Compras Inteligente 🛒
                      </button>
                    </div>
                  </div>
                </div>

                {/* Inline Complete Recipe Details */}
                <div className="bg-white rounded-2xl p-4 border border-stone-200/60 text-left space-y-4 shadow-2xs">
                  {/* Ingredients Section */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-stone-100/60">
                      <CheckSquare className="w-4 h-4 text-brand-green" />
                      Ingredientes Necessários
                    </h4>
                    <div className="grid grid-cols-1 gap-1 pl-0.5">
                      {activeRecipe.ingredients.map((ing, i) => (
                        <label key={i} className="flex gap-2 items-center text-[11px] py-1 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            className="accent-brand-green w-3.5 h-3.5 rounded border-stone-300" 
                          />
                          <span className="text-brand-ink font-semibold leading-tight">{ing}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Steps/Preparation Section */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-stone-100/60">
                      <Flame className="w-4 h-4 text-brand-yolk-dark" />
                      Modo de Preparo Passo a Passo
                    </h4>
                    <div className="space-y-2.5">
                      {activeRecipe.steps.map((step, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <span className="w-5 h-5 rounded-full bg-brand-yolk/10 text-brand-yolk-dark text-[10px] font-black flex items-center justify-center flex-shrink-0 border border-brand-yolk/20">
                            {i + 1}
                          </span>
                          <p className="text-brand-ink text-[11.5px] font-semibold leading-relaxed pt-0.5">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CARDÁPIO TAB */}
            {activeTab === 'cardapio' && (
              <motion.div
                key="cardapio"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-brand-ink-light">TODAS AS RECEITAS</h4>
                  <span className="text-[10px] text-brand-ink-light bg-slate-100 px-2 py-0.5 rounded-full font-bold">Várias Opções</span>
                </div>

                {/* Categories filter chips */}
                <div 
                  ref={categoriesRef}
                  onMouseDown={handleCategoriesMouseDown}
                  onMouseLeave={handleCategoriesMouseLeave}
                  onMouseUp={handleCategoriesMouseUp}
                  onMouseMove={handleCategoriesMouseMove}
                  className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1 cursor-grab active:cursor-grabbing select-none touch-pan-x"
                >
                  {[
                    { id: 'Tudo', label: '✨ Tudo' },
                    { id: 'Café da Manhã', label: '🌅 Café' },
                    { id: 'Almoço', label: '☀️ Almoço' },
                    { id: 'Lanche', label: '🥪 Lanche' },
                    { id: 'Jantar', label: '🌙 Jantar' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setRecipeCategoryFilter(cat.id)}
                      className={`text-[9px] font-black px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 transition-all border pointer-events-auto ${
                        recipeCategoryFilter === cat.id
                          ? 'bg-brand-yolk border-brand-yolk text-brand-ink shadow-3xs scale-102'
                          : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Compact grid list categorized */}
                <div className="space-y-3.5 max-h-[385px] overflow-y-auto scrollbar-none pr-0.5">
                  {(() => {
                    const filteredCats = recipeCategoryFilter === 'Tudo'
                      ? ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar']
                      : [recipeCategoryFilter];

                    return filteredCats.map((cat) => {
                      const catRecipes = recipes.filter(r => r.category === cat);
                      if (catRecipes.length === 0) return null;

                      return (
                        <div key={cat} className="space-y-1.5">
                          {/* Sticky Category Divider Header */}
                          <div className="sticky top-0 bg-[#FFFDF9] py-0.5 z-10 flex items-center justify-between border-b border-stone-100/60 mb-1">
                            <div className="flex items-center gap-1">
                              {cat === 'Café da Manhã' && <span className="text-xs">🌅</span>}
                              {cat === 'Almoço' && <span className="text-xs">☀️</span>}
                              {cat === 'Lanche' && <span className="text-xs">🥪</span>}
                              {cat === 'Jantar' && <span className="text-xs">🌙</span>}
                              <span className="text-[9.5px] font-black tracking-wider text-brand-yolk-dark uppercase">
                                {cat}
                              </span>
                            </div>
                            <span className="text-[8px] bg-stone-100 text-stone-500 font-bold px-1.5 py-0.2 rounded-full">
                              {catRecipes.length} itens
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {catRecipes.map((recipe) => {
                              const isCompleted = completedRecipes.includes(recipe.id);
                              const isFav = favoritedRecipes.includes(recipe.id);
                              return (
                                <div 
                                  key={recipe.id}
                                  onClick={() => {
                                    if (recipe.id > 3 && (userPlan === 'trial' || isDemoMode)) {
                                      setShowPremiumModal(true);
                                    } else {
                                      setSelectedRecipeDetail(recipe);
                                    }
                                  }}
                                  className="bg-white p-2 rounded-xl border border-stone-200/50 hover:border-brand-yolk/30 cursor-pointer flex items-center justify-between gap-2.5 transition-all shadow-3xs"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-50 border border-stone-200/30 shadow-4xs">
                                      {(() => {
                                        switch (recipe.category) {
                                          case 'Café da Manhã': return <span className="text-lg">🌅</span>;
                                          case 'Almoço': return <span className="text-lg">☀️</span>;
                                          case 'Jantar': return <span className="text-lg">🌙</span>;
                                          default: return <span className="text-lg">🥪</span>;
                                        }
                                      })()}
                                      {isCompleted && (
                                        <div className="absolute -top-1 -right-1 bg-brand-green text-white w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-2xs">
                                          <Check className="w-2.5 h-2.5 stroke-[3.5px]" />
                                        </div>
                                      )}
                                    </div>
                                    <div className="min-w-0">
                                      <span className="text-[8px] font-bold text-brand-yolk-dark block">RECEITA {recipe.id}</span>
                                      <h5 className="text-[11.5px] font-extrabold truncate text-brand-ink leading-tight">
                                        {recipe.title}
                                      </h5>
                                      <span className="text-[9px] text-brand-ink-light">{recipe.time} • {recipe.calories}</span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                    <button 
                                      onClick={() => toggleFavorite(recipe.id)}
                                      className="p-1 rounded-lg text-brand-ink-light hover:bg-slate-100"
                                      aria-label="Favoritar"
                                    >
                                      <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : 'text-slate-300'}`} />
                                    </button>
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </motion.div>
            )}

            {/* FAVORITOS TAB */}
            {activeTab === 'favoritos' && (
              <motion.div
                key="favoritos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <h4 className="text-xs font-bold text-brand-ink-light">SEUS FAVORITOS SALVOS</h4>
                
                {favoritedRecipes.length === 0 ? (
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 text-center space-y-3">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold">Nenhum favorito ainda</h5>
                      <p className="text-xs text-brand-ink-light leading-relaxed">
                        Toque no coração das receitas que você mais gostar para salvá-las aqui instantaneamente.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-none">
                    {recipes.filter((r) => favoritedRecipes.includes(r.id)).map((recipe) => (
                      <div 
                        key={recipe.id}
                        onClick={() => {
                          if (recipe.id > 3 && (userPlan === 'trial' || isDemoMode)) {
                            setShowPremiumModal(true);
                          } else {
                            setSelectedRecipeDetail(recipe);
                          }
                        }}
                        className="bg-white p-2.5 rounded-xl border border-stone-200/50 hover:border-brand-yolk/30 cursor-pointer flex items-center justify-between gap-2.5 transition-all shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-50 border border-stone-200/50 shadow-3xs">
                            {(() => {
                              switch (recipe.category) {
                                case 'Café da Manhã': return <span className="text-xl">🌅</span>;
                                case 'Almoço': return <span className="text-xl">☀️</span>;
                                case 'Jantar': return <span className="text-xl">🌙</span>;
                                default: return <span className="text-xl">🥪</span>;
                              }
                            })()}
                          </div>
                          <div className="min-w-0">
                            <span className="text-[9px] font-bold text-brand-yolk-dark block">RECEITA {recipe.id}</span>
                            <h5 className="text-xs font-bold truncate text-brand-ink leading-tight">
                              {recipe.title}
                            </h5>
                            <span className="text-[10px] text-brand-ink-light">{recipe.time} • {recipe.calories}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => toggleFavorite(recipe.id)}
                            className="p-1 rounded-lg text-brand-ink-light"
                            aria-label="Desfavoritar"
                          >
                            <Heart className="w-4.5 h-4.5 fill-red-500 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* RECOMPENSAS TAB */}
            {activeTab === 'recompensas' && (
              <motion.div
                key="recompensas"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3.5 pb-4 text-left"
              >
                {isDemoMode ? (
                  /* RECOMPENSAS BLOCKED/PAYWALL SCREEN FOR DEMO */
                  <div className="space-y-4 py-6 text-center">
                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto shadow-inner text-3xl">
                      🎁🔒
                    </div>
                    
                    <div className="space-y-1.5 px-2">
                      <h4 className="text-sm font-black text-stone-600 uppercase tracking-wider">Recurso Desativado no Demo</h4>
                      <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                        A <strong className="text-stone-700 font-bold">Jornada do Chef</strong> e as <strong className="text-stone-700 font-bold">Recompensas Progressivas</strong> estão desativadas no simulador de demonstração.
                      </p>
                      <p className="text-[10.5px] text-stone-400 leading-relaxed font-medium">
                        Esses recursos funcionam exclusivamente na versão oficial de produção após o login do aluno pagante.
                      </p>
                    </div>

                    <div className="bg-[#FEFDF9] border border-stone-200 p-3.5 rounded-2xl text-left space-y-1.5 mx-1">
                      <p className="text-[10px] font-black text-stone-500 uppercase tracking-wider">Como funcionam na produção 👑:</p>
                      <ul className="space-y-1.5 text-[10.5px] text-stone-600 font-medium">
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">✨</span>
                          <span><strong>Liberação Diária:</strong> Cada dia que você confirma seu progresso de refeições, uma nova recompensa (ebooks, guias de temperos, molhos) é liberada.</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">✨</span>
                          <span><strong>Certificado de Conclusão:</strong> Após concluir os 8 dias de consistência com o Ovo, o seu certificado oficial de Chef do OvOChef+ é gerado automaticamente.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : userPlan === 'basic' || userPlan === 'trial' ? (
                  /* RECOMPENSAS BLOCKED/PAYWALL SCREEN */
                  <div className="space-y-4 py-6 text-center">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-inner text-3xl animate-bounce">
                      🎁🔒
                    </div>
                    
                    <div className="space-y-1.5 px-2">
                      <h4 className="text-sm font-black text-brand-ink uppercase tracking-wider">Acesso Premium Bloqueado</h4>
                      <p className="text-[11.5px] text-brand-ink-light leading-relaxed font-medium">
                        O espaço de <strong className="text-amber-600 font-bold">Recompensas Progressivas</strong> (com pílulas de conhecimento, ebooks de lanches proteicos, molhos saudáveis e guias liberados dia após dia) é exclusivo do <strong className="text-brand-ink font-extrabold">Acesso Completo</strong>!
                      </p>
                    </div>

                    <div className="bg-[#FEFDF9] border border-amber-100 p-3.5 rounded-2xl text-left space-y-1.5 mx-1">
                      <p className="text-[10px] font-black text-amber-800 uppercase tracking-wider">Bônus inclusos no Acesso Completo 👑:</p>
                      <ul className="space-y-1 text-[10.5px] text-brand-ink">
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">✨</span>
                          <span><strong>Jornada Guiada de 30 Dias</strong> de recompensas</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">✨</span>
                          <span><strong>Lista de Compras Semanal</strong> inteligente</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">✨</span>
                          <span><strong>Ebooks de Bônus</strong> completos liberados progressivamente</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setShowPremiumModal(true)}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl text-xs transition-colors uppercase tracking-wider shadow-md shadow-amber-500/10 flex items-center justify-center gap-1.5"
                    >
                      👑 Liberar Acesso Completo!
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Header with Progressive Message */}
                    <div className="bg-gradient-to-br from-brand-yolk/10 to-amber-500/10 p-3 rounded-2xl border border-amber-200/40 space-y-2">
                      <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider flex items-center gap-1.5">
                        <Gift className="w-4 h-4 text-amber-500" /> Jornada de 8 Dias
                      </h4>
                      <p className="text-[10.5px] text-brand-ink leading-relaxed italic font-medium bg-white/70 p-2 rounded-xl border border-amber-100/40">
                        "Nosso método exige consistência. Complete sua jornada de 8 dias para validar seu aprendizado e liberar sua certificação oficial."
                      </p>
                      
                      {/* Interactive Progress Meter */}
                      <div className="bg-white/90 p-2 rounded-xl border border-stone-100 shadow-3xs space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-bold">
                          <span className="text-amber-800">Seu Progresso de Desbloqueios</span>
                          <span className="text-brand-ink-light">Dia {progressCount} de 8</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-500 to-brand-yolk transition-all duration-500"
                            style={{ width: `${(progressCount / 8) * 100}%` }}
                          />
                        </div>
                        <p className="text-[8.5px] text-stone-500 text-center font-semibold">
                          {progressCount >= 8 ? "🏆 Todas as recompensas e o certificado estão totalmente liberados!" : `⏱️ Próxima recompensa é liberada no seu próximo progresso diário!`}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Days List */}
                    <div className="space-y-3 mt-1.5">
                      {/* Render Days */}
                      {[
                        {
                          day: 1,
                          title: "O Começo Prático",
                          objective: "Dar utilidade imediata e organizar o planejamento de compras.",
                          message: "Seja bem-vindo! Vamos começar organizando a sua semana. Baixe sua lista de compras e confira as 3 primeiras receitas rápidas para o seu café da manhã!",
                          icon: "🥚",
                          badge: "Lista & Café da Manhã",
                          content: (
                            <div className="space-y-3 pt-2 text-[10.5px]">
                              {/* Shopping List Button */}
                              <div className="bg-white border border-brand-green/20 rounded-xl p-2.5 space-y-2 shadow-3xs">
                                <span className="text-[9.5px] font-extrabold text-brand-green-dark uppercase tracking-wider flex items-center gap-1">
                                  📋 LISTA DE COMPRAS SEMANAL INTELIGENTE
                                </span>
                                <p className="text-[9.5px] text-brand-ink-light leading-relaxed">
                                  Vá ao supermercado sabendo exatamente o que comprar para sua semana saudável prática!
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                                  <div className="space-y-1 bg-stone-50 p-1.5 rounded-lg border border-stone-200/40">
                                    <span className="font-extrabold text-brand-ink block text-stone-700">🍗 Proteínas:</span>
                                    <p className="text-stone-500">• 3 dúzias de ovos caipiras<br />• 500g de frango desfiado<br />• 2 latas de atum sólido</p>
                                  </div>
                                  <div className="space-y-1 bg-stone-50 p-1.5 rounded-lg border border-stone-200/40">
                                    <span className="font-extrabold text-brand-ink block text-stone-700">🥬 Vegetais & Grãos:</span>
                                    <p className="text-stone-500">• Espinafre & Tomate cereja<br />• Goma de tapioca & Chia<br />• Abobrinha fresca</p>
                                  </div>
                                </div>
                                <button
                                  onClick={() => setBonusUnlockedToast("📥 Lista de compras salva no seu dispositivo!")}
                                  className="w-full py-1.5 bg-brand-green hover:bg-brand-green-dark text-white text-[9.5px] font-black rounded-lg flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer"
                                >
                                  📥 Baixar Lista de Compras (.PDF)
                                </button>
                              </div>

                              {/* 3 recipes */}
                              <div className="space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  🥞 3 RECEITAS DE CAFÉ DA MANHÃ VAPT-VUPT (5 MIN)
                                </span>
                                
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">1. Ovos Mexidos Cremosos Supreme</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">2 ovos caipiras batidos com 1 colher de sopa de requeijão light e uma pitada de cúrcuma. Prepare na frigideira morna mexendo sempre para obter textura sedosa.</p>
                                  </div>
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">2. Panqueca Doce de Banana Fit</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">1 ovo grande + 1 clara batidos com meia banana madura amassada e salpicada de canela em pó. Doure 2 minutos de cada lado e sirva.</p>
                                  </div>
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">3. Crepioca Clássica Crocante</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">1 ovo inteiro agitado com 2 colheres de tapioca e sal. Coloque na frigideira, recheie com uma fatia de queijo minas e dobre em formato meia-lua.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 2,
                          title: "Ovos Perfeitos",
                          objective: "Dominar técnicas culinárias básicas para ganho imediato de confiança.",
                          message: "Dia 2! Hoje você vai dominar o básico. Descubra os segredos do relógio para acertar a gema do ovo do jeito que você mais gosta.",
                          icon: "⏱️",
                          badge: "Ponto da Gema Perfeita",
                          content: (
                            <div className="space-y-2.5 pt-2 text-[10.5px]">
                              <div className="bg-white border border-stone-200/60 rounded-xl p-2.5 space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  📊 MINI-GUIA VISUAL: O PONTO DA GEMA PERFEITA
                                </span>
                                <p className="text-brand-ink-light text-[10px] leading-relaxed">
                                  O segredo dos chefs franceses é o tempo exato! Adicione os ovos apenas com a água já fervendo levemente e use um cronômetro:
                                </p>
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-2 p-1.5 bg-stone-50 rounded-lg border border-stone-200/40">
                                    <span className="text-lg">🥚</span>
                                    <div>
                                      <span className="font-extrabold text-brand-ink block text-[10px]">6 Minutos: Gema Mole Líquida</span>
                                      <span className="text-[9px] text-stone-500">Clara perfeitamente cozida e gema super líquida, ideal para saborear na casca.</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 p-1.5 bg-stone-50 rounded-lg border border-stone-200/40">
                                    <span className="text-lg">🍲</span>
                                    <div>
                                      <span className="font-extrabold text-brand-ink block text-[10px]">8 Minutos: Gema Cremosa / Aveludada</span>
                                      <span className="text-[9px] text-stone-500">Clara bem firme e gema pastosa cor de laranja vibrante. É o famoso ovo estilo Ramen!</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 p-1.5 bg-stone-50 rounded-lg border border-stone-200/40">
                                    <span className="text-lg">🍳</span>
                                    <div>
                                      <span className="font-extrabold text-brand-ink block text-[10px]">10 Minutos: Gema Totalmente Firme</span>
                                      <span className="text-[9px] text-stone-500">Totalmente cozido e firme por inteiro, ideal para picar em saladas ou marmitas diárias.</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-2 bg-amber-50 rounded-lg border border-amber-200/50 text-[9px] text-amber-800">
                                  💡 <strong>Dica de Chef:</strong> Ao retirar da fervura, mergulhe os ovos em água com bastante gelo. Isso para o cozimento na hora e ajuda a descolar a casca perfeitamente!
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 3,
                          title: "Lanche da Tarde Inteligente",
                          objective: "Manter a consistência na alimentação substituindo snacks ultraprocessados.",
                          message: "Dia 3! Chega de apelar para industrializados no meio da tarde. Liberamos 3 receitas de lanches práticos, saudáveis e rápidos para salvar a sua rotina!",
                          icon: "🥪",
                          badge: "3 Lanches Práticos",
                          content: (
                            <div className="space-y-3.5 pt-2 text-[10.5px]">
                              <div className="space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  🥪 3 RECEITAS DE LANCHES PROTEICOS DE FRIGIDEIRA
                                </span>
                                <div className="space-y-2">
                                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50 text-left">
                                    <h5 className="font-extrabold text-brand-ink text-[11px] flex justify-between">
                                      <span>1. Pão de Queijo de Caneca</span>
                                      <span className="text-[9px] text-amber-600 font-mono font-bold">3 min</span>
                                    </h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Misture 1 ovo, 2 colheres de sopa de tapioca, 1 colher de requeijão light e pitada de sal. Coloque numa caneca e asse no micro-ondas por 1m30s.</p>
                                  </div>
                                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50 text-left">
                                    <h5 className="font-extrabold text-brand-ink text-[11px] flex justify-between">
                                      <span>2. Crepioca Cremosa de Atum</span>
                                      <span className="text-[9px] text-amber-600 font-mono font-bold">6 min</span>
                                    </h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Bata 1 ovo com 1 colher de tapioca. Asse na frigideira. Recheie com 2 colheres de atum sólido em conserva misturado com tomate picadinho e orégano.</p>
                                  </div>
                                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50 text-left">
                                    <h5 className="font-extrabold text-brand-ink text-[11px] flex justify-between">
                                      <span>3. Salgado Maromba Fit Express</span>
                                      <span className="text-[9px] text-amber-600 font-mono font-bold">8 min</span>
                                    </h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Misture 1 ovo inteiro com 3 colheres de frango desfiado, 1 colher de sopa de farelo de aveia e sal. Modele e asse na Airfryer ou na frigideira tampada.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 4,
                          title: "O Almoço está Servido",
                          objective: "Resolver a dor do almoço corrido de forma muito rica em proteínas.",
                          message: "Metade do caminho! Que tal um almoço saudável e que fica pronto em 10 minutos? Liberamos 3 receitas incríveis de Frittatas.",
                          icon: "🥗",
                          badge: "3 Omeletes & Frittatas",
                          content: (
                            <div className="space-y-3 pt-2 text-[10.5px]">
                              <div className="space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  🍳 3 FRITTATAS E OMELETES PARADISÍACAS (10 MIN)
                                </span>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">1. Frittata Rápida de Espinafre e Cottage</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Bata 3 ovos com sal e pimenta. Jogue na frigideira com espinafre fresco rasgado e queijo cottage. Deixe cozinhar em fogo baixo com tampa até inflar.</p>
                                  </div>
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">2. Omelete Suíça de Abobrinha</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">2 ovos batidos misturados com meia xícara de abobrinha crua ralada fina e espremida, orégano e queijo minas ralado. Super úmida e nutritiva!</p>
                                  </div>
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">3. Frittata de Peito de Frango e Tomate</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Bata 3 ovos, acrescente frango desfiado temperado, tomates cereja fatiados e manjericão fresco. Grelhe tampado e finalize com um fio de azeite.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 5,
                          title: "O Segredo dos Confeiteiros",
                          objective: "Elevar o nível culinário ensinando ciência de panificação e aeração.",
                          message: "Dia 5 concluído! Hoje vamos desvendar como o ovo transforma a textura das suas massas. O segredo dos chefs revelado!",
                          icon: "🍰",
                          badge: "Técnica de Aeração",
                          content: (
                            <div className="space-y-2 pt-2 text-[10.5px]">
                              <div className="bg-white border border-stone-200/60 rounded-xl p-2.5 space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  💡 CIÊNCIA DA COZINHA: O PODER DOS OVOS
                                </span>
                                <div className="space-y-2 text-brand-ink-light text-[10px] leading-relaxed">
                                  <p>
                                    👩‍🍳 <strong>Claras em Neve Perfeitas:</strong> Quando batemos as claras, o ar é capturado pelas proteínas do ovo (albumina), criando uma espuma super estável que expande o volume das suas receitas em até 8 vezes! Para obter o ponto perfeito, use recipientes de vidro ou inox totalmente limpos e sem nenhuma gotícula de gordura ou gema.
                                  </p>
                                  <p>
                                    🔄 <strong>Emulsificação e Textura:</strong> A gema do ovo é rica em lecitina, um composto capaz de unir gordura e líquidos que não se misturam (como o azeite e o limão). Use as gemas para dar brilho e texturas sedosas aos seus suflês fit e tortas salgadas sem precisar usar farinhas brancas ou amidos refinados.
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 6,
                          title: "Lanches para Viagem & Trabalho",
                          objective: "Apoiar a rotina do usuário oferecendo soluções altamente portáteis.",
                          message: "Faltam só 2 dias! Garanta opções saudáveis e práticas para comer fora de casa com as novas receitas de snacks liberadas hoje.",
                          icon: "🎒",
                          badge: "Marmitas & Snacks",
                          content: (
                            <div className="space-y-2.5 pt-2 text-[10.5px]">
                              <div className="space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  🎒 LANCHES PORTÁTEIS DE ALTA DURABILIDADE
                                </span>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">1. Mini Muffins Salgados de Legumes</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Bata 3 ovos com pitada de sal e fermento químico. Coloque em forminhas de silicone com brócolis cozido bem picadinho e cenoura ralada. Asse na Airfryer a 160°C por 8 min. Super fáceis de levar!</p>
                                  </div>
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">2. Ovos Cozidos Temperados "Egg To Go"</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Cozinhe 2 ovos firmes, retire a casca e corte ao meio. Tempere com sal rosa, orégano, gotas de limão e azeite dentro de um pequeno pote vedado. Perfeitos para comer gelados!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 7,
                          title: "Jantar Leve & Sofisticado",
                          objective: "Oferecer uma experiência elegante de prato único leve para fechar a semana.",
                          message: "Para fechar a semana com chave de ouro, liberamos receitas incríveis para um jantar especial e leve. Prepare-se, amanhã o livro completo e seu certificado serão seus!",
                          icon: "🍷",
                          badge: "Jantar Gourmet Leve",
                          content: (
                            <div className="space-y-3 pt-2 text-[10.5px]">
                              <div className="space-y-2">
                                <span className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-wider block">
                                  🍷 JANTAR ELEGANTE DE BAIXA CALORIA (10 MIN)
                                </span>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">1. Shakshuka Rápida (Ovos no Purgatório)</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Aqueça um molho de tomates rústico temperado com alho picado e páprica. Quebre 2 ovos por cima do molho fervente na panela, tampe e cozinhe em fogo baixo até as claras firmarem. Finalize com coentro ou salsinha.</p>
                                  </div>
                                  <div className="bg-white p-2 rounded-xl border border-stone-200/50">
                                    <h5 className="font-extrabold text-brand-ink text-[11px]">2. Suflê de Queijo Nuvem Light</h5>
                                    <p className="text-[10px] text-brand-ink-light mt-0.5">Bata as claras em neve firme. Incorpore lentamente um creme de ricota leve temperado com noz-moscada, sal e uma gema. Asse em potinho cerâmico por 10 min na Airfryer.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        },
                        {
                          day: 8,
                          title: "O Grande Chef",
                          objective: "Celebrar a conclusão do ciclo de consistência de 8 dias com grandes recompensas.",
                          message: "Parabéns, você concluiu a jornada! Você dominou a cozinha prática ao longo destes 8 dias. Baixe agora seu e-book completo com todas as 50 receitas Fits e pegue seu certificado de mestre!",
                          icon: "👑",
                          badge: "Ebook + Certificado!",
                          content: (
                            <div className="space-y-3 pt-2 text-[10.5px]">
                              <div className="bg-gradient-to-br from-amber-500/10 to-brand-yolk/10 p-3 rounded-xl border border-amber-300 text-center space-y-2.5">
                                <span className="text-xl animate-bounce block">🏆🎓🎉</span>
                                <h5 className="font-black text-brand-ink uppercase text-[11px] tracking-wider">Jornada Concluída com Sucesso!</h5>
                                <p className="text-[10px] text-brand-ink-light leading-relaxed">
                                  Você provou sua consistência e maestria culinária. Libere seus prêmios exclusivos:
                                </p>
                                
                                <div className="space-y-2">
                                  <button
                                    onClick={() => {
                                      if (isDemoMode) {
                                        setBonusUnlockedToast("⚠️ O download do ebook está desativado no modo demonstrativo!");
                                        return;
                                      }
                                      setDownloadingEbook(true);
                                      setTimeout(() => {
                                        setDownloadingEbook(false);
                                        setEbookDownloaded(true);
                                        setBonusUnlockedToast("📥 Ebook de 50 Receitas Extras baixado com sucesso!");
                                      }, 1500);
                                    }}
                                    className="w-full py-2 bg-brand-green hover:bg-brand-green-dark text-white text-[10px] font-black rounded-lg flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer"
                                  >
                                    <span>{downloadingEbook ? "Baixando Ebook..." : "📥 Baixar Ebook 50 Receitas Extras"}</span>
                                  </button>

                                  <button
                                    onClick={() => {
                                      setActiveTab('certificado');
                                      setBonusUnlockedToast("Redirecionado para a emissão de Certificado!");
                                    }}
                                    className="w-full py-2 bg-amber-500 text-white text-[10px] font-black rounded-lg flex items-center justify-center gap-1 transition-all active:scale-95 hover:bg-amber-600 cursor-pointer"
                                  >
                                    <span>🎓 Emitir Meu Certificado de Chef</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      ].map((item) => {
                        const isUnlocked = progressCount >= item.day || simulatedComplete;
                        return (
                          <div 
                            key={item.day}
                            className={`p-3 rounded-2xl border transition-all ${
                              isUnlocked 
                                ? 'bg-white border-amber-200/60 shadow-3xs' 
                               : 'bg-stone-50 border-stone-200/40 opacity-75'
                            }`}
                          >
                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg ${
                                  isUnlocked ? 'bg-amber-500/10 border border-amber-200/50 text-amber-600 font-bold' : 'bg-stone-200 text-stone-400'
                                }`}>
                                  {item.icon}
                                </div>
                                <div>
                                  <span className="text-[8.5px] font-bold text-brand-yolk-dark tracking-wider block uppercase">
                                    Dia {item.day} de 8
                                  </span>
                                  <h5 className="text-[11.5px] font-black text-brand-ink leading-tight">
                                    {item.title}
                                  </h5>
                                </div>
                              </div>
                              
                              {/* Status Badge */}
                              <div className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold ${
                                isUnlocked 
                                  ? 'bg-brand-green/10 text-brand-green-dark' 
                                  : 'bg-stone-200/60 text-stone-500'
                              }`}>
                                {isUnlocked ? '🔓 Liberado' : '🔒 Bloqueado'}
                              </div>
                            </div>

                            {/* Objective Badge */}
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              <span className={`text-[8.5px] font-extrabold px-1.5 py-0.5 rounded-md ${
                                isUnlocked ? 'bg-amber-100/60 text-amber-800' : 'bg-stone-200 text-stone-500'
                              }`}>
                                🎯 {item.badge}
                              </span>
                            </div>

                            {/* Message bubble */}
                            <p className="text-[10px] text-brand-ink-light mt-2 bg-stone-50/50 p-2 rounded-xl border border-stone-100 leading-relaxed italic">
                              "{item.message}"
                            </p>

                            {/* Unlocked Content (Only show if unlocked) */}
                            {isUnlocked ? (
                              <div className="mt-2.5 border-t border-dashed border-stone-200 pt-2.5">
                                {item.content}
                              </div>
                            ) : (
                              <div className="mt-2.5 bg-stone-100/50 border border-dashed border-stone-200 rounded-xl p-2 text-center text-stone-400 text-[9px] font-bold">
                                🔒 Complete os check-ins diários anteriores para desbloquear as revelações desta etapa!
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* CERTIFICADO TAB */}
            {activeTab === 'certificado' && (
              <motion.div
                key="certificado"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3.5 pb-4"
              >
                {userPlan === 'basic' || userPlan === 'trial' ? (
                  /* CERTIFICATE BLOCKED/PAYWALL SCREEN FOR BASIC ACCESS */
                  <div className="space-y-4 py-6 text-center text-left">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-inner text-3xl animate-pulse">
                      🎓🔒
                    </div>
                    
                    <div className="space-y-1.5 px-2">
                      <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider">Evolução & Certificado Bloqueados</h4>
                      <p className="text-[11.5px] text-brand-ink-light leading-relaxed font-medium">
                        O acompanhamento de evolução da jornada de 8 dias e a emissão do <strong className="text-amber-600 font-bold">Certificado Oficial Chef do OvOChef+</strong> são recursos exclusivos do <strong className="text-brand-ink font-extrabold">Acesso Completo</strong>!
                      </p>
                    </div>

                    <div className="bg-[#FEFDF9] border border-amber-100 p-3.5 rounded-2xl text-left space-y-1.5 mx-1">
                      <p className="text-[10px] font-black text-amber-800 uppercase tracking-wider">Por que obter o Acesso Completo 👑:</p>
                      <ul className="space-y-1.5 text-[10.5px] text-brand-ink">
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">🎓</span>
                          <span><strong>Certificado Oficial</strong> em PDF personalizado com seu nome</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">📚</span>
                          <span><strong>Ebook Exclusivo</strong> com 50 Receitas Extras Rápidas</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">📈</span>
                          <span>Acompanhamento real-time do seu progresso</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setShowPremiumModal(true)}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl text-xs transition-colors uppercase tracking-wider shadow-md shadow-amber-500/10 flex items-center justify-center gap-1.5"
                    >
                      👑 Desbloquear Meu Certificado!
                    </button>
                  </div>
                ) : !isFullyCompleted ? (
                  /* CERTIFICATE LOCKED STATE */
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-amber-500/10 to-brand-yolk/10 p-4 rounded-2xl border border-amber-200/50 text-center space-y-3 relative overflow-hidden">
                      <div className="absolute top-1.5 right-2.5 bg-amber-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        CERTIFICADO
                      </div>
                      
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <Lock className="w-5.5 h-5.5 text-amber-600" />
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider">Certificado Bloqueado</h4>
                        <p className="text-[11px] text-brand-ink-light leading-relaxed font-medium italic">
                          "Nosso método exige consistência. Complete sua jornada de 8 dias para validar seu aprendizado e liberar sua certificação oficial Chef do OvOChef+ e seu Ebook de 50 Receitas Fits Extra."
                        </p>
                      </div>
                      
                      {/* Micro progress indicator */}
                      <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/40 text-left space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-brand-ink-light">
                          <span>Seu Progresso Atual</span>
                          <span>{percentComplete}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-green" style={{ width: `${percentComplete}%` }} />
                        </div>
                        <p className="text-[9px] text-brand-ink-light text-center pt-0.5">
                          Conclua {8 - progressCount} {8 - progressCount === 1 ? 'dia' : 'dias'} {8 - progressCount === 1 ? 'restante' : 'restantes'} para emitir!
                        </p>
                      </div>
                    </div>

                    {/* Locked info card */}
                    <div className="bg-white p-3.5 rounded-2xl border border-stone-200/50 flex gap-3 opacity-70">
                      <div className="w-9 h-9 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0 text-stone-500">
                        <Award className="w-5 h-5 text-amber-500" />
                      </div>
                      <div className="space-y-0.5 min-w-0 text-left">
                        <h5 className="text-[11px] font-extrabold text-brand-ink">Certificado Oficial de Chef</h5>
                        <p className="text-[10px] text-brand-ink-light leading-snug">
                          Um diploma digital oficial atestando sua dedicação ao preparo de receitas práticas e saudáveis com ovo na cozinha.
                        </p>
                      </div>
                    </div>

                    {/* Locked info card for eBook */}
                    <div className="bg-white p-3.5 rounded-2xl border border-stone-200/50 flex gap-3 opacity-70">
                      <div className="w-9 h-9 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0 text-stone-500">
                        <BookOpen className="w-5 h-5 text-brand-green" />
                      </div>
                      <div className="space-y-0.5 min-w-0 text-left">
                        <h5 className="text-[11px] font-extrabold text-brand-ink">Ebook: 50 Receitas Extras com Ovo Fit</h5>
                        <p className="text-[10px] text-brand-ink-light leading-snug">
                          Acesso completo ao livro secreto com 50 receitas especiais liberado juntamente com o seu certificado!
                        </p>
                      </div>
                    </div>

                    {/* SIMULATOR QUICK TEST BUTTON */}
                    {isDemoMode && loggedInEmail === 'demo@ovoapp.com' && (
                      <div className="bg-brand-yolk/10 p-3 rounded-xl border border-brand-yolk/30 space-y-1.5 text-center">
                        <p className="text-[10px] text-brand-ink leading-snug">
                          💡 <strong>Área de Teste do Comprador:</strong> Desbloqueie agora para visualizar o gerador de certificado e o acesso ao ebook de bônus!
                        </p>
                        <button 
                          onClick={() => {
                            setSimulatedComplete(true);
                            setBonusUnlockedToast("Simulação Ativada! 🎉 Certificado e Ebook de 50 Receitas Extras liberados.");
                          }}
                          className="py-1.5 px-3 bg-brand-yolk hover:bg-brand-yolk-dark text-brand-ink text-[10px] font-black rounded-lg shadow-xs transition-all uppercase tracking-wider"
                        >
                          ⚡ Simular Jornada Concluída (Testar Certificado!)
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* CERTIFICATE UNLOCKED STATE */
                  <div className="space-y-3.5">
                    <div className="bg-gradient-to-r from-amber-500/10 via-brand-yolk/15 to-amber-500/10 p-3 rounded-2xl border border-amber-300 text-center space-y-1.5 relative overflow-hidden">
                      <div className="absolute top-1 left-2 text-base animate-bounce">🎉</div>
                      <div className="absolute top-1 right-2 text-base animate-bounce delay-75">✨</div>
                      
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider">Cardápio Concluído!</h4>
                        <p className="text-[10.5px] text-brand-ink-light leading-relaxed">
                          Espetacular! Você dominou a arte de preparar ovos de forma criativa e variada no seu dia a dia. Baixe seu diploma e ganhe acesso ao seu Ebook exclusivo abaixo!
                        </p>
                      </div>

                      {simulatedComplete && (
                        <button
                          onClick={() => {
                            setSimulatedComplete(false);
                            setDownloadSuccess(false);
                            setEbookDownloaded(false);
                          }}
                          className="text-[9px] text-stone-400 hover:text-brand-ink underline font-bold"
                        >
                          Voltar ao estado normal (bloqueado)
                        </button>
                      )}
                    </div>

                    {/* Digital Certificate Generator Form */}
                    <div className="bg-white rounded-2xl p-3 border border-stone-200/60 space-y-2.5">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        <h5 className="text-xs font-bold text-brand-ink uppercase tracking-wider">Seu Certificado Oficial</h5>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-brand-ink-light block text-left">Escreva seu nome completo:</label>
                        <input 
                          type="text" 
                          value={certName}
                          onChange={(e) => {
                            setCertName(e.target.value);
                            setDownloadSuccess(false);
                          }}
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-brand-yolk focus:outline-none font-bold text-brand-ink"
                          placeholder="Ex: Maria Oliveira"
                        />
                      </div>

                      {/* CERTIFICATE PREVIEW CONTAINER */}
                      <div className="relative bg-[#FFFDF9] border-2 border-amber-400 p-3.5 rounded-xl shadow-xs text-center space-y-1.5 overflow-hidden select-none">
                        {/* Gold borders */}
                        <div className="absolute inset-1 border border-amber-200/60 pointer-events-none"></div>
                        {/* Gold stamp decoration */}
                        <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full bg-amber-400/20 border border-amber-500/30 flex items-center justify-center text-[8px] rotate-12">
                          🏆
                        </div>

                        <div className="text-[7px] tracking-widest font-black text-amber-700 uppercase font-mono">
                          OvOChef+
                        </div>
                        <h6 className="text-[10px] font-black text-brand-ink leading-tight uppercase tracking-wide">
                          Certificado de Conclusão
                        </h6>
                        <p className="text-[7px] text-brand-ink-light">
                          Certificamos com honra que o(a) aluno(a)
                        </p>
                        <div className="text-xs font-black text-amber-800 border-b border-dashed border-amber-300 pb-0.5 mx-4 capitalize italic">
                          {certName || "Seu Nome"}
                        </div>
                        <p className="text-[6.5px] text-brand-ink-light leading-relaxed px-2">
                          Concluiu com êxito o cronograma interativo de receitas rápidas e criativas de ovos, comprovando persistência, estilo de vida saudável e foco impecável na rotina diária.
                        </p>

                        <div className="flex justify-between items-center text-[5px] pt-1 text-stone-400">
                          <div>
                            <span className="block border-t border-stone-200/50 pt-0.5 px-1 font-mono">Assinatura do Chef</span>
                          </div>
                          <div className="text-right">
                            <span className="block border-t border-stone-200/50 pt-0.5 px-1 font-mono">Data: {new Date().toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <button 
                        onClick={() => {
                          if (isDemoMode) {
                            setBonusUnlockedToast("⚠️ A emissão de certificado está desativada no modo demonstrativo!");
                            return;
                          }
                          if (downloadingCert) return;
                          setDownloadingCert(true);
                          setDownloadSuccess(false);
                          setTimeout(() => {
                            setDownloadingCert(false);
                            setDownloadSuccess(true);
                            setBonusUnlockedToast("Certificado PDF gerado! Pronto para imprimir ou salvar 🖨️");

                            const name = certName || "Seu Nome";
                            const printWindow = window.open('', '_blank');
                            if (printWindow) {
                              printWindow.document.write(`
                                <html>
                                  <head>
                                    <title>Certificado Chef Saudável - ${name}</title>
                                    <style>
                                      body {
                                        margin: 0;
                                        padding: 40px;
                                        font-family: 'Georgia', 'Times New Roman', serif;
                                        background-color: #fdfaf6;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        min-height: 100vh;
                                        box-sizing: border-box;
                                      }
                                      .border-outer {
                                        border: 15px double #b45309;
                                        padding: 10px;
                                        border-radius: 4px;
                                        background-color: white;
                                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                                        width: 100%;
                                        max-width: 800px;
                                        box-sizing: border-box;
                                      }
                                      .border-inner {
                                        border: 2px solid #b45309;
                                        padding: 50px 30px;
                                        text-align: center;
                                        position: relative;
                                      }
                                      .logo-seal {
                                        font-size: 50px;
                                        margin: 10px;
                                      }
                                      h1 {
                                        color: #1c1917;
                                        font-size: 38px;
                                        margin-top: 0;
                                        letter-spacing: 2px;
                                        text-transform: uppercase;
                                        font-weight: 400;
                                      }
                                      h2 {
                                        color: #b45309;
                                        font-size: 20px;
                                        margin: 15px 0;
                                        font-style: italic;
                                        font-weight: normal;
                                      }
                                      .subtitle {
                                        font-size: 16px;
                                        color: #78716c;
                                        margin-bottom: 30px;
                                        text-transform: uppercase;
                                        letter-spacing: 1px;
                                      }
                                      .name {
                                        font-size: 36px;
                                        font-weight: bold;
                                        color: #1c1917;
                                        border-bottom: 2px solid #f59e0b;
                                        display: inline-block;
                                        padding-bottom: 5px;
                                        margin: 15px 0;
                                        font-family: 'Times New Roman', serif;
                                        max-width: 90%;
                                        text-transform: capitalize;
                                      }
                                      .description {
                                        font-size: 15px;
                                        color: #44403c;
                                        line-height: 1.6;
                                        margin: 30px auto;
                                        max-width: 600px;
                                      }
                                      .footer {
                                        display: flex;
                                        justify-content: space-between;
                                        margin-top: 60px;
                                        padding: 0 50px;
                                        font-size: 13px;
                                        color: #78716c;
                                      }
                                      .signature {
                                        border-top: 1px solid #d6d3d1;
                                        padding-top: 8px;
                                        width: 200px;
                                      }
                                      @media print {
                                        body { background-color: white; padding: 0; }
                                        .border-outer { box-shadow: none; }
                                      }
                                    </style>
                                  </head>
                                  <body>
                                    <div class="border-outer">
                                      <div class="border-inner">
                                        <div class="logo-seal">🍳🏆🍳</div>
                                        <h1>CERTIFICADO DE CONCLUSÃO</h1>
                                        <div class="subtitle">OvOChef+</div>
                                        <div class="description">Certificamos com honra que o(a) dedicado(a) aluno(a)</div>
                                        <div class="name">${name}</div>
                                        <div class="description">
                                          Concluiu com êxito o cronograma interativo de receitas rápidas e criativas de ovos, comprovando persistência, estilo de vida saudável e foco impecável na rotina diária de alimentação limpa e funcional.
                                        </div>
                                        <h2>🏆 Certificação de Chef Saudável 🏆</h2>
                                        <div class="footer">
                                          <div class="signature">
                                            ✍️ Assinatura do Diretor do App
                                          </div>
                                          <div class="signature">
                                            📅 Data: ${new Date().toLocaleDateString('pt-BR')}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <script>
                                      window.onload = function() {
                                        window.print();
                                      }
                                    </script>
                                  </body>
                                </html>
                              `);
                              printWindow.document.close();
                            }
                          }, 1500);
                        }}
                        disabled={downloadingCert}
                        className={`w-full py-1.5 rounded-lg text-[10px] font-extrabold flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider ${
                          downloadSuccess
                            ? 'bg-brand-green/20 text-brand-green-dark'
                            : 'bg-brand-ink text-white hover:bg-black shadow-xs'
                        }`}
                      >
                        {downloadingCert ? (
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Gerando PDF...
                          </span>
                        ) : downloadSuccess ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Certificado PDF Baixado!
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            Baixar Certificado em PDF
                          </>
                        )}
                      </button>

                      <button 
                        onClick={() => {
                          if (isDemoMode) {
                            setBonusUnlockedToast("⚠️ Compartilhamento desativado no modo demonstrativo!");
                            return;
                          }
                          const name = certName || "Seu Nome";
                          const messageText = `🎉🍳 Olha que conquista incrível! Acabei de concluir a jornada de 8 dias do app "OvOChef+" e acabei de emitir meu Certificado Oficial de Chef Saudável para o nome: *${name}*! \n\nO aplicativo é sensacional, com pratos incríveis e fáceis de preparar! Quer começar também? Acesse o app e venha ver!`;
                          const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageText)}`;
                          window.open(whatsappUrl, '_blank');
                          setBonusUnlockedToast("Abrindo WhatsApp para enviar seu Certificado! 📲");
                        }}
                        className="w-full py-1.5 bg-[#25D366] hover:bg-[#1ebd54] text-white rounded-lg text-[10px] font-extrabold flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider shadow-xs"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        Enviar para o WhatsApp
                      </button>
                    </div>

                    {/* 50 Extra Recipes Ebook section - UNLOCKED TOGETHER WITH CERTIFICATE */}
                    <div className="bg-white rounded-2xl p-3 border border-stone-200/60 space-y-2.5 text-left">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-brand-green" />
                        <h5 className="text-xs font-bold text-brand-ink uppercase tracking-wider">Super Bônus Desbloqueado!</h5>
                      </div>

                      <div className="bg-gradient-to-br from-brand-green/8 to-emerald-500/5 p-2.5 rounded-xl border border-brand-green/20 space-y-1">
                        <h6 className="text-[10.5px] font-black text-brand-green-dark">Ebook: 50 Receitas Extras com Ovo Fit</h6>
                        <p className="text-[9.5px] text-brand-ink-light leading-relaxed">
                          Você ganhou acesso exclusivo ao livro completo! Veja algumas das receitas inclusas abaixo e baixe o arquivo em PDF:
                        </p>
                      </div>

                      {/* Teaser expanding / clickable recipe previews */}
                      <div className="space-y-1.5">
                        {[
                          { title: "🥪 Crepe Fit de Claras Super Proteico", desc: "Claras batidas com farinha de aveia, queijo minas e orégano. Super leve!", time: "5m", ing: ["4 claras de ovo", "1 colher de farelo de aveia", "50g de queijo minas frescal", "Orégano e sal a gosto"], prep: "Bata as claras com a aveia e o sal. Despeje em uma frigideira antiaderente untada e cozinhe dos dois lados. Recheie com o queijo minas e tempere com orégano." },
                          { title: "🥞 Panqueca de Banana Proteica", desc: "1 banana amassada com 2 ovos inteiros e canela. Frite na manteiga.", time: "4m", ing: ["1 banana média madura", "2 ovos inteiros", "1 pitada de canela em pó", "1 colher de chá de manteiga para grelhar"], prep: "Amasse bem a banana com um garfo. Misture os ovos e a canela até ficar homogêneo. Grelhe em uma frigideira untada com manteiga em fogo baixo até dourar os dois lados." },
                          { title: "🥑 Ovos Benedict Saudáveis Express", desc: "Ovos pochê perfeitos servidos com base de ricota temperada e abacate.", time: "8m", ing: ["2 ovos caipiras", "1 fatia de pão integral tostado", "1/4 de abacate fatiado", "2 colheres de creme de ricota light", "Limão, sal e pimenta do reino"], prep: "Toste o pão e passe o creme de ricota. Coloque as fatias de abacate por cima com gotas de limão. Prepare dois ovos pochê em água fervente com vinagre por 3 minutos e coloque cuidadosamente sobre o abacate." },
                          { title: "🥗 Maionese Fit Cremosa de Ovo Cozido", desc: "Ovos cozidos batidos com azeite, limão, salsinha e pitada de alho.", time: "5m", ing: ["3 ovos cozidos firmes", "2 colheres de sopa de azeite de oliva", "Suco de 1/2 limão", "Salsinha picada a gosto", "1/2 dente de alho pequeno (opcional)", "Sal a gosto"], prep: "No liquidificador ou mixer, bata os ovos cozidos com o azeite, suco de limão, alho e sal até obter um creme bem liso. Misture a salsinha picada e leve à geladeira antes de servir." },
                          { title: "🍅 Shakshuka de Caneca Instantânea", desc: "Molho de tomate artesanal, ovo caipira no centro, coentro e queijo ralado.", time: "6m", ing: ["1 ovo inteiro", "3 colheres de sopa de molho de tomate caseiro", "1 colher de chá de cebola picadinha", "1 pitada de queijo muçarela ralado", "Coentro ou salsinha para finalizar"], prep: "Em uma caneca média, misture o molho de tomate, a cebola e o sal. Quebre o ovo cuidadosamente no centro do molho. Fure levemente a gema com um palito. Cubra com plástico filme com furos e leve ao micro-ondas por 1 a 1.5 minutos. Finalize com queijo ralado e ervas." }
                        ].map((bonusRec, bIdx) => {
                          const isExpanded = expandedBonusTitle === bonusRec.title;
                          return (
                            <div 
                              key={bIdx}
                              className="bg-stone-50 border border-stone-200/60 rounded-xl overflow-hidden transition-all text-left"
                            >
                              <div 
                                onClick={() => setExpandedBonusTitle(isExpanded ? null : bonusRec.title)}
                                className="p-2 cursor-pointer hover:bg-stone-100/50 transition-colors flex justify-between items-center gap-1.5"
                              >
                                <div className="min-w-0 flex-1">
                                  <span className="text-[10.5px] font-extrabold text-brand-ink block truncate">{bonusRec.title}</span>
                                  <span className="text-[9px] text-brand-ink-light block truncate leading-tight">{bonusRec.desc}</span>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                  <span className="text-[8px] font-extrabold text-brand-green-dark bg-brand-green/10 px-1.5 py-0.5 rounded font-mono">
                                    {bonusRec.time}
                                  </span>
                                  <div className="text-stone-400">
                                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                  </div>
                                </div>
                              </div>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-stone-200/40 bg-white p-2.5 text-[10px] space-y-2 text-brand-ink-light leading-relaxed"
                                  >
                                    <div>
                                      <span className="text-[8.5px] font-black text-brand-green-dark uppercase tracking-wider block mb-0.5">🛒 Ingredientes:</span>
                                      <ul className="list-disc pl-3.5 space-y-0.5">
                                        {bonusRec.ing.map((item, idx) => <li key={idx}>{item}</li>)}
                                      </ul>
                                    </div>
                                    <div>
                                      <span className="text-[8.5px] font-black text-amber-700 uppercase tracking-wider block mb-0.5">🍳 Preparo rápido:</span>
                                      <p>{bonusRec.prep}</p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-1">
                        <button 
                          onClick={() => {
                            if (isDemoMode) {
                              setBonusUnlockedToast("⚠️ O download do ebook está desativado no modo demonstrativo!");
                              return;
                            }
                            if (downloadingEbook) return;
                            setDownloadingEbook(true);
                            setEbookDownloaded(false);
                            setTimeout(() => {
                              setDownloadingEbook(false);
                              setEbookDownloaded(true);
                              setBonusUnlockedToast("Ebook completo em PDF gerado com sucesso! Pronto para imprimir ou salvar 🖨️");

                              const printWindow = window.open('', '_blank');
                              if (printWindow) {
                                // Prepare recipes html
                                const planRecipesHtml = recipes.map((r, i) => `
                                  <div class="recipe-card">
                                    <h3>${i + 1}. ${r.title} (${r.category})</h3>
                                    <div class="meta">⏱️ Tempo: ${r.time} | 🔥 Calorias: ${r.calories} | 💪 Proteínas: ${r.protein}</div>
                                    <div class="section-title">🛒 Ingredientes:</div>
                                    <ul>
                                      ${r.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                                    </ul>
                                    <div class="section-title">🍳 Modo de Preparo:</div>
                                    <ol>
                                      ${r.steps.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                  </div>
                                `).join('');

                                const snackRecipesHtml = proteinSnacks.map((s, i) => `
                                  <div class="recipe-card">
                                    <h3>${i + 31}. ${s.title.replace(/^\d+\.\s*/, '')}</h3>
                                    <p class="desc">${s.desc}</p>
                                    <div class="meta">⏱️ Tempo: ${s.time} | 🔥 Calorias: ${s.calories} | 💪 Proteínas: ${s.protein}</div>
                                    <div class="section-title">🛒 Ingredientes:</div>
                                    <ul>
                                      ${s.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                                    </ul>
                                    <div class="section-title">🍳 Modo de Preparo:</div>
                                    <ol>
                                      ${s.instructions.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                  </div>
                                `).join('');

                                const sauceRecipesHtml = healthySauces.map((sa, i) => `
                                  <div class="recipe-card">
                                    <h3>${i + 51}. ${sa.title.replace(/^[^a-zA-Z0-9\s]*\s*/, '')}</h3>
                                    <p class="desc">${sa.desc}</p>
                                    <div class="section-title">🛒 Ingredientes:</div>
                                    <ul>
                                      ${sa.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                                    </ul>
                                    <div class="section-title">🍳 Modo de Preparo:</div>
                                    <ol>
                                      ${sa.instructions.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                  </div>
                                `).join('');

                                printWindow.document.write(`
                                  <html>
                                    <head>
                                      <title>Ebook Oficial - OvOChef+ 50+ Receitas Fits</title>
                                      <style>
                                        body {
                                          font-family: 'Helvetica Neue', Arial, sans-serif;
                                          color: #1c1917;
                                          margin: 0;
                                          padding: 0;
                                          background-color: #fcfbf7;
                                        }
                                        .container {
                                          max-width: 900px;
                                          margin: 0 auto;
                                          padding: 40px 20px;
                                          background-color: white;
                                        }
                                        .cover {
                                          text-align: center;
                                          padding: 80px 40px;
                                          background: linear-gradient(135deg, #10b981 0%, #047857 100%);
                                          color: white;
                                          border-radius: 20px;
                                          margin-bottom: 50px;
                                        }
                                        .cover h1 {
                                          font-size: 54px;
                                          margin: 0;
                                          font-weight: 900;
                                          letter-spacing: -1.5px;
                                          text-transform: uppercase;
                                        }
                                        .cover h2 {
                                          font-size: 24px;
                                          margin: 15px 0 30px;
                                          font-weight: 300;
                                          color: #a7f3d0;
                                        }
                                        .cover-seal {
                                          font-size: 80px;
                                          margin-bottom: 20px;
                                        }
                                        .introduction {
                                          font-size: 16px;
                                          line-height: 1.7;
                                          color: #4b5563;
                                          background: #f0fdf4;
                                          border-left: 5px solid #10b981;
                                          padding: 20px;
                                          border-radius: 8px;
                                          margin-bottom: 40px;
                                        }
                                        h2.section-header {
                                          font-size: 28px;
                                          color: #047857;
                                          border-bottom: 3px solid #10b981;
                                          padding-bottom: 8px;
                                          margin-top: 50px;
                                          margin-bottom: 25px;
                                          text-transform: uppercase;
                                          page-break-before: always;
                                        }
                                        .recipe-grid {
                                          display: grid;
                                          grid-template-columns: 1fr;
                                          gap: 30px;
                                        }
                                        .recipe-card {
                                          background-color: #fafaf9;
                                          border: 1px solid #e7e5e4;
                                          border-radius: 12px;
                                          padding: 25px;
                                          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                                          page-break-inside: avoid;
                                        }
                                        .recipe-card h3 {
                                          font-size: 20px;
                                          color: #1c1917;
                                          margin-top: 0;
                                          margin-bottom: 10px;
                                          border-bottom: 1px solid #e7e5e4;
                                          padding-bottom: 5px;
                                        }
                                        .desc {
                                          font-style: italic;
                                          color: #6b7280;
                                          font-size: 13px;
                                          margin-top: -5px;
                                          margin-bottom: 15px;
                                        }
                                        .meta {
                                          display: inline-block;
                                          background-color: #d1fae5;
                                          color: #065f46;
                                          font-size: 12px;
                                          font-weight: bold;
                                          padding: 6px 12px;
                                          border-radius: 20px;
                                          margin-bottom: 15px;
                                        }
                                        .section-title {
                                          font-size: 13px;
                                          font-weight: 800;
                                          color: #047857;
                                          text-transform: uppercase;
                                          letter-spacing: 0.5px;
                                          margin-top: 15px;
                                          margin-bottom: 5px;
                                        }
                                        ul, ol {
                                          margin-top: 0;
                                          margin-bottom: 15px;
                                          padding-left: 20px;
                                          font-size: 13.5px;
                                          line-height: 1.6;
                                          color: #44403c;
                                        }
                                        li {
                                          margin-bottom: 4px;
                                        }
                                        @media print {
                                          body {
                                            background-color: white;
                                          }
                                          .container {
                                            padding: 0;
                                          }
                                          .cover {
                                            background: #10b981 !important;
                                            color: white !important;
                                            -webkit-print-color-adjust: exact;
                                            print-color-adjust: exact;
                                          }
                                        }
                                      </style>
                                    </head>
                                    <body>
                                      <div class="container">
                                        <div class="cover">
                                          <div class="cover-seal">🍳📚🥑</div>
                                          <h1>EBOOK OFICIAL</h1>
                                          <h2>OvOChef+: 50+ Receitas Extras & Fits Saudáveis</h2>
                                          <p style="font-size: 14px; opacity: 0.9;">Seu guia definitivo para emagrecimento, hipertrofia e muito mais energia na rotina diária.</p>
                                        </div>

                                        <div class="introduction">
                                          <strong>Bem-vindo ao seu novo estilo de vida!</strong><br>
                                          Este Ebook foi compilado especialmente para você que deseja extrair o máximo de benefícios do alimento mais perfeito do mundo: o ovo! Aqui você encontrará as receitas exclusivas da nossa jornada de 30 dias, além de lanches proteicos práticos e molhos artesanais para enriquecer seu cardápio diário com muito sabor e zero culpa.
                                        </div>

                                        <h2 class="section-header">PARTE 1: Receitas do Plano de 30 Dias (Café, Almoço e Jantar)</h2>
                                        <div class="recipe-grid">
                                          ${planRecipesHtml}
                                        </div>

                                        <h2 class="section-header">PARTE 2: 20 Lanches Proteicos Práticos & Rápidos</h2>
                                        <div class="recipe-grid">
                                          ${snackRecipesHtml}
                                        </div>

                                        <h2 class="section-header">PARTE 3: 6 Molhos & Temperos Funcionais</h2>
                                        <div class="recipe-grid">
                                          ${sauceRecipesHtml}
                                        </div>
                                      </div>

                                      <script>
                                        window.onload = function() {
                                          window.print();
                                        }
                                      </script>
                                    </body>
                                  </html>
                                `);
                                printWindow.document.close();
                              }
                            }, 1500);
                          }}
                          disabled={downloadingEbook}
                          className={`w-full py-2 rounded-lg text-[10px] font-extrabold flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider ${
                            ebookDownloaded
                              ? 'bg-brand-green/20 text-brand-green-dark'
                              : 'bg-brand-green hover:bg-brand-green-dark text-white shadow-xs cursor-pointer'
                          }`}
                        >
                          {downloadingEbook ? (
                            <span className="flex items-center gap-1">
                              <span className="w-2.5 h-2.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                              Baixando PDF...
                            </span>
                          ) : ebookDownloaded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Ebook 50 Receitas Baixado!
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              Baixar Ebook Completo (50 Receitas)
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Link back to Rewards Ebook */}
                    <button
                      onClick={() => setActiveTab('recompensas')}
                      className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-brand-ink text-[10px] font-black rounded-xl transition-all flex items-center justify-center gap-1"
                    >
                      🎁 Ver as 3 Recompensas Exclusivas
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* COMO ACESSAR TAB */}
            {activeTab === 'como_acessar' && (
              <motion.div
                key="como_acessar"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                {/* LOGIN FORM FOR KIWIFY PURCHASE VERIFICATION */}
                <div className="bg-gradient-to-br from-amber-50 to-brand-egg p-4 rounded-2xl border-2 border-brand-yolk/30 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🔑</span>
                    <div>
                      <h4 className="text-sm font-black text-brand-ink">Área do Comprador</h4>
                      <p className="text-[10px] text-brand-ink-light font-bold">Verifique seu acesso ao app automaticamente</p>
                    </div>
                  </div>
                  
                  {loggedInEmail ? (
                    <div className="bg-white/90 p-3 rounded-xl border border-brand-yolk/20 space-y-2 text-center">
                      <p className="text-xs text-brand-ink font-bold">
                        Conectado: <span className="text-brand-green-dark">{loggedInEmail}</span>
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-[11px] font-black">
                        {userPlan === 'complete' ? '👑 Acesso Premium Ativo' : userPlan === 'basic' ? '🔓 Acesso Básico Ativo' : '🧪 Teste Grátis Ativo'}
                      </div>
                      <button 
                        type="button"
                        onClick={() => {
                          setLoggedInEmail(null);
                          setEmailInput('');
                          setLoginSuccess(false);
                          try {
                            localStorage.removeItem('ovo_buyer_email');
                            localStorage.removeItem('ovo_buyer_plan');
                          } catch (err) {}
                          setBonusUnlockedToast("Sessão encerrada!");
                        }}
                        className="block w-full text-center text-[10px] text-rose-500 hover:underline font-bold mt-2"
                      >
                        Sair da Conta ✕
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleLogin} className="space-y-2.5">
                      <div>
                        <label className="block text-[10px] font-black text-brand-ink-light uppercase mb-1">E-mail da compra Kiwify:</label>
                        <input 
                          type="email"
                          required
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          placeholder="exemplo@seuemail.com"
                          className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-yolk/50"
                        />
                      </div>
                      
                      {loginError && (
                        <p className="text-[10.5px] text-rose-500 font-extrabold leading-tight">
                          ⚠️ {loginError}
                        </p>
                      )}
                      
                      {loginSuccess && (
                        <p className="text-[10.5px] text-brand-green-dark font-extrabold leading-tight">
                          ✨ Acesso ativado com sucesso! Aproveite.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={checkingLogin}
                        className="w-full bg-brand-yolk hover:bg-brand-yolk-dark disabled:bg-stone-200 text-brand-ink font-black py-2 rounded-xl text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {checkingLogin ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Verificando...</span>
                          </>
                        ) : (
                          <>
                            <span>Ativar Meu Acesso ⚡</span>
                          </>
                        )}
                      </button>
                      
                      <div className="bg-white/40 p-2.5 rounded-lg border border-stone-200/40 text-[9.5px] text-brand-ink-light font-bold space-y-1">
                        <span className="block text-stone-600">💡 E-mails de teste instantâneo:</span>
                        <div className="flex flex-col gap-1 mt-0.5">
                          <button 
                            type="button" 
                            className="text-left text-amber-800 hover:underline font-bold text-[10px]"
                            onClick={() => setEmailInput('teste.completo@ovoapp.com')}
                          >
                            👉 teste.completo@ovoapp.com (Completo 👑)
                          </button>
                          <button 
                            type="button" 
                            className="text-left text-stone-700 hover:underline font-bold text-[10px]"
                            onClick={() => setEmailInput('teste.basico@ovoapp.com')}
                          >
                            👉 teste.basico@ovoapp.com (Básico 🔓)
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>

                <div className="bg-brand-green/5 p-3 rounded-2xl border border-brand-green/20 space-y-2">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green-dark">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-brand-ink">Como funciona no celular?</h4>
                  <p className="text-xs text-brand-ink-light leading-relaxed">
                    Você **não precisa instalar nem baixar nada** da App Store ou Google Play. O nosso sistema funciona direto na tela do seu celular por meio de um atalho seguro, sem ocupar espaço na memória!
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-stone-200/50 space-y-3">
                  <h5 className="text-xs font-bold text-brand-ink-light uppercase tracking-wider">Passo a Passo</h5>
                  
                  {/* Step 1 */}
                  <div className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-brand-yolk/20 text-brand-yolk-dark text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <p className="text-xs text-brand-ink">
                      Abra o link exclusivo de acesso enviado para o seu e-mail ou WhatsApp direto no celular.
                    </p>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-brand-yolk/20 text-brand-yolk-dark text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <div className="text-xs text-brand-ink space-y-1">
                      <p>
                        No **iPhone (Safari)**, toque em <span className="font-bold">Compartilhar</span> e depois em <span className="font-bold">Adicionar à Tela de Início</span>.
                      </p>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        No **Android (Chrome)**, toque nos 3 pontinhos e escolha <span className="font-bold">Adicionar à tela inicial</span>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center gap-2">
                    <Info className="w-4.5 h-4.5 text-brand-yolk-dark flex-shrink-0" />
                    <p className="text-[10px] text-brand-ink-light leading-snug">
                      Pronto! Um ícone de acesso surge na tela do seu celular automaticamente. É só clicar e usar!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* KIDS SPACE TAB */}
            {activeTab === 'kids' && (
              <motion.div
                key="kids_space"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {userPlan === 'basic' || userPlan === 'trial' ? (
                  /* KIDS ACCESS BLOCKED/PAYWALL SCREEN FOR BASIC PLAN */
                  <div className="space-y-4 py-6 text-center text-left">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-inner text-3xl animate-pulse">
                      👶🔒
                    </div>
                    
                    <div className="space-y-1.5 px-2">
                      <h4 className="text-xs font-black text-brand-ink uppercase tracking-wider">Espaço OvO Kids Bloqueado</h4>
                      <p className="text-[11.5px] text-brand-ink-light leading-relaxed font-medium">
                        O lúdico <strong className="text-amber-600 font-bold">Espaço OvO Kids 🧸</strong>, com jogo interativo de montar o prato e receitas decoradas engraçadas, é um recurso exclusivo do <strong className="text-brand-ink font-extrabold">Acesso Completo</strong>!
                      </p>
                    </div>

                    <div className="bg-[#FEFDF9] border border-amber-100 p-3.5 rounded-2xl text-left space-y-1.5 mx-1">
                      <p className="text-[10px] font-black text-amber-800 uppercase tracking-wider">Benefícios do Espaço Kids Premium 👑:</p>
                      <ul className="space-y-1.5 text-[10.5px] text-brand-ink">
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">🎨</span>
                          <span><strong>Desafios Interativos</strong> de copiar desenhos e criar bichinhos</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">🎈</span>
                          <span><strong>Adesivos Divertidos</strong> colecionáveis para personalizar seus pratos (Chapéu, Bigode...)</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <span className="text-amber-500">🏅</span>
                          <span><strong>Mestre do Ovo</strong>: Missões lúdicas com geração de certificado e medalhas reais</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setShowPremiumModal(true)}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl text-xs transition-colors uppercase tracking-wider shadow-md shadow-amber-500/10 flex items-center justify-center gap-1.5"
                    >
                      👑 Desbloquear Espaço Kids + Acesso Completo
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-3 text-brand-ink text-left relative overflow-hidden shadow-xs">
                      <div className="absolute right-1 -bottom-2 text-4xl opacity-20">🧸</div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center gap-1">
                        <span>Aventura do OvO Kids 🐥</span>
                      </h4>
                      <p className="text-[11px] text-amber-900 font-medium leading-relaxed mt-1">
                        Brinque com os pratos interativos, complete os desafios com historinhas e colecione adesivos super divertidos!
                      </p>
                    </div>

                    {/* MODE SELECTION TABS */}
                    <div className="flex bg-stone-100 p-1 rounded-xl">
                      <button
                        onClick={() => {
                          setKidsGameMode('challenge');
                          setChallengeStep('idle');
                        }}
                        className={`flex-1 py-1.5 text-[10px] font-black rounded-lg transition-all ${
                          kidsGameMode === 'challenge' 
                            ? 'bg-white text-amber-600 shadow-xs' 
                            : 'text-stone-500 hover:text-stone-800'
                        }`}
                      >
                        ⏱️ Copie o Desenho
                      </button>
                      <button
                        onClick={() => {
                          setKidsGameMode('free');
                          setChallengeStep('idle');
                          // Load pintinho by default in free mode
                          setKidsPlateElements(['ovo']);
                          setKidsPlateColor('pink');
                        }}
                        className={`flex-1 py-1.5 text-[10px] font-black rounded-lg transition-all ${
                          kidsGameMode === 'free' 
                            ? 'bg-white text-amber-600 shadow-xs' 
                            : 'text-stone-500 hover:text-stone-800'
                        }`}
                      >
                        🎨 Modo Livre
                      </button>
                    </div>

                    {/* INTERACTIVE PLAY ZONE */}
                    <div className="bg-[#FEFBF6] rounded-3xl p-4 border border-amber-100 space-y-3 text-center relative overflow-hidden">
                      {/* CONFETTI BURST EFFECT */}
                      {showConfettiEffect && (
                        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                          {Array.from({ length: 35 }).map((_, i) => {
                            const x = Math.random() * 260 - 130;
                            const y = Math.random() * -240 - 60;
                            const rot = Math.random() * 360;
                            const emoji = ['🎉', '✨', '🎈', '💖', '⭐', '🌈', '🐥', '🐣'][i % 8];
                            return (
                              <motion.div
                                key={i}
                                initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                                animate={{ x: x, y: y, scale: [0, 1.3, 1, 0.7], opacity: [1, 1, 1, 0], rotate: rot }}
                                transition={{ duration: 2.8, ease: 'easeOut' }}
                                className="absolute left-1/2 bottom-1/3 text-lg"
                                style={{ transform: 'translate(-50%, 50%)' }}
                              >
                                {emoji}
                              </motion.div>
                            );
                          })}
                        </div>
                      )}

                      {/* STAGE & PLAYBACK TITLE */}
                      {kidsGameMode === 'challenge' ? (
                        <div>
                          {challengeStep === 'idle' && (
                            <div className="space-y-2">
                              <span className="text-[10px] bg-amber-100 text-amber-800 font-black px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit mx-auto">
                                🌟 Desafio do Dia
                              </span>
                              
                              <div className="bg-amber-500/10 p-3 rounded-2xl border border-amber-300/20 text-left space-y-1.5">
                                <p className="text-xs font-black text-amber-950 flex items-center gap-1">
                                  <span>📅 Hoje:</span>
                                  <span className="bg-amber-400 text-amber-950 px-1.5 py-0.2 rounded text-[10px] font-black">
                                    {kidsRecipes.find(r => r.id === currentChallengeRecipeId)?.emoji} {kidsRecipes.find(r => r.id === currentChallengeRecipeId)?.title}
                                  </span>
                                </p>
                                <p className="text-[10px] text-amber-900 leading-normal">
                                  Você terá <strong>20 segundos</strong> de historinha animada para entender a missão, depois <strong>5 segundos</strong> para memorizar a receita antes dela sumir do prato! Tente copiar perfeitamente!
                                </p>
                                
                                <button
                                  onClick={() => {
                                    setChallengeStep('story');
                                    setStoryTimer(20);
                                  }}
                                  className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-[10.5px] rounded-xl transition-all shadow-md shadow-amber-500/15 uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                                >
                                  <span>▶️ Começar Aventura do Dia!</span>
                                </button>
                              </div>

                              <div className="text-left pt-2">
                                <p className="text-[9px] font-black text-brand-ink uppercase tracking-wider pl-1 mb-1.5">Outros Desafios para Escolher:</p>
                                <div className="grid grid-cols-3 gap-1.5">
                                  {kidsRecipes.map(r => (
                                    <button
                                      key={r.id}
                                      onClick={() => {
                                        if (r.id > 3 && (userPlan === 'trial' || isDemoMode)) {
                                          setShowPremiumModal(true);
                                        } else {
                                          setCurrentChallengeRecipeId(r.id);
                                          setChallengeStep('story');
                                          setStoryTimer(20);
                                          setKidsPlateColor(r.plateColor);
                                        }
                                      }}
                                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                                        currentChallengeRecipeId === r.id 
                                          ? 'border-amber-400 bg-amber-50/50' 
                                          : 'border-stone-200 bg-white hover:bg-stone-50'
                                      }`}
                                    >
                                      <span className="text-2xl">{r.emoji}</span>
                                      <span className="text-[8px] font-black text-brand-ink truncate w-full">{r.title.split(' ')[0]}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {challengeStep === 'story' && (
                            <div className="space-y-3 py-2">
                              {/* CHARACTER SPEECH BUBBLE */}
                              <div className="relative bg-white border border-amber-200 rounded-2xl p-3 shadow-xs text-left">
                                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white"></div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[11px] border-t-amber-200 z-[-1]"></div>
                                
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-2xl animate-bounce">💬</span>
                                  <h6 className="text-[11px] font-black text-amber-950 uppercase">Era uma vez...</h6>
                                </div>
                                <p className="text-[11px] text-brand-ink leading-relaxed font-medium">
                                  "{kidsRecipes.find(r => r.id === currentChallengeRecipeId)?.story}"
                                </p>
                              </div>

                              <div className="flex flex-col items-center gap-2">
                                <div className="text-5xl my-2 animate-bounce">
                                  {kidsRecipes.find(r => r.id === currentChallengeRecipeId)?.emoji}
                                </div>
                                <div className="text-[10px] text-amber-800 font-bold bg-amber-100 px-3 py-1 rounded-full animate-pulse">
                                  Aventura começa em: <span className="font-black text-xs text-amber-950">{storyTimer}s</span>
                                </div>
                                
                                <button
                                  onClick={() => {
                                    setChallengeStep('memorize');
                                    setMemorizeTimer(5);
                                  }}
                                  className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white font-black text-[9px] rounded-lg tracking-wider uppercase transition-all"
                                >
                                  Pular Historinha ⏭️
                                </button>
                              </div>
                            </div>
                          )}

                          {challengeStep === 'memorize' && (
                            <div className="space-y-1">
                              <span className="text-[10px] bg-red-100 text-red-800 font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest animate-pulse">
                                ⏱️ MEMORIZE O DESENHO! {memorizeTimer}s
                              </span>
                              <p className="text-[9.5px] text-stone-500">Veja quais ingredientes estão no prato antes que eles sumam!</p>
                            </div>
                          )}

                          {challengeStep === 'play' && (
                            <div className="space-y-1">
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                👩‍🍳 MODO REPRODUZIR: MONTE!
                              </span>
                              <p className="text-[9.5px] text-stone-500">Adicione os ingredientes corretos para salvar seu amigo!</p>
                            </div>
                          )}

                          {challengeStep === 'result' && evaluationResult && (
                            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center space-y-3.5">
                              <div className="text-3xl">
                                {evaluationResult.score === evaluationResult.total ? '👑🏆⭐' : '🌟👏😊'}
                              </div>
                              
                              <h5 className="text-xs font-black text-brand-ink uppercase">Desafio Concluído!</h5>
                              
                              {/* Star rendering helper inline */}
                              <div className="flex gap-1 justify-center my-2 text-2xl">
                                {Array.from({ length: 5 }).map((_, i) => {
                                  const rating = evaluationResult.score === evaluationResult.total ? 5 : Math.max(1, Math.round((evaluationResult.score / evaluationResult.total) * 5));
                                  return (
                                    <span key={i} className={i < rating ? "text-amber-400 drop-shadow-xs animate-bounce" : "text-slate-300"}>
                                      ⭐
                                    </span>
                                  );
                                })}
                              </div>
                              
                              <p className="text-[11.5px] font-black text-amber-600">
                                Você conseguiu {evaluationResult.score} de {evaluationResult.total} peças certas!
                              </p>
                              
                              <p className="text-[10.5px] text-brand-ink-light leading-relaxed font-medium px-2">
                                {evaluationResult.message}
                              </p>

                              {/* Parent real-world cooking verification */}
                              <div className="bg-amber-500/5 rounded-xl p-2.5 border border-amber-200/40 space-y-1.5 text-center">
                                <p className="text-[10px] font-black text-amber-950 flex items-center justify-center gap-1">
                                  <span>👨‍👩‍👦 Cozinharam juntos na vida real?</span>
                                </p>
                                <p className="text-[9.5px] text-stone-500 leading-normal">
                                  Se vocês prepararam essa receita de verdade hoje na cozinha com os pais, confirme abaixo para receber a medalha e desbloquear o certificado!
                                </p>
                                <button
                                  onClick={() => {
                                    const currentRecipe = kidsRecipes.find(r => r.id === currentChallengeRecipeId) || kidsRecipes[0];
                                    toggleKidsRecipe(currentRecipe.id, currentRecipe.title);
                                  }}
                                  className={`w-full py-2 px-3 rounded-xl text-[9.5px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
                                    completedKidsRecipes.includes(currentChallengeRecipeId)
                                      ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                                      : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/10 animate-pulse'
                                  }`}
                                >
                                  {completedKidsRecipes.includes(currentChallengeRecipeId) ? (
                                    <span>⭐ Fizemos Juntos! (Registrado)</span>
                                  ) : (
                                    <span>🎉 Fizemos Juntos de verdade! 🍳</span>
                                  )}
                                </button>
                              </div>

                              <div className="grid grid-cols-2 gap-1.5 pt-1">
                                <button
                                  onClick={() => {
                                    setChallengeStep('story');
                                    setStoryTimer(20);
                                    setKidsPlateElements([]);
                                  }}
                                  className="py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-black text-[9px] uppercase tracking-wider transition-all"
                                >
                                  Jogar de Novo 🔄
                                </button>
                                <button
                                  onClick={() => {
                                    setChallengeStep('idle');
                                    setKidsPlateElements([]);
                                  }}
                                  className="py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-black text-[9px] uppercase tracking-wider transition-all"
                                >
                                  Ver Desafios ➡️
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <span className="text-[10px] bg-sky-100 text-sky-800 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            🎨 MODO LIVRE ATIVO
                          </span>
                          <p className="text-[9.5px] text-stone-500">Crie o seu próprio bichinho sem regras e divirta-se!</p>
                          
                          {/* Character selection base */}
                          <div className="flex gap-1.5 justify-center overflow-x-auto py-1.5 no-scrollbar">
                            {kidsRecipes.map(r => (
                              <button
                                key={r.id}
                                onClick={() => {
                                  setKidsPlateColor(r.plateColor);
                                  // Seed plate with base egg
                                  setKidsPlateElements(['ovo']);
                                  setBonusUnlockedToast(`Tema "${r.title}" carregado no prato!`);
                                }}
                                className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold border flex-shrink-0 transition-all flex items-center gap-1 ${
                                  kidsPlateColor === r.plateColor 
                                    ? 'bg-sky-500 text-white border-sky-600 shadow-xs' 
                                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                                }`}
                              >
                                <span>{r.emoji}</span>
                                <span>{r.title.split(' ')[0]}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* THE INTERACTIVE PLATE CONTAINER */}
                      {(challengeStep === 'memorize' || challengeStep === 'play' || challengeStep === 'result' || kidsGameMode === 'free') && (
                        <div className="relative flex justify-center py-2">
                          <div className={`relative w-40 h-40 rounded-full border-4 shadow-xl flex items-center justify-center transition-all duration-500 overflow-hidden ${getPlateStyle(kidsPlateColor)}`}>
                            
                            {/* Twinkling star layout for cosmic space plate */}
                            {kidsPlateColor === 'space' && (
                              <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px]" />
                            )}

                            {/* STICKERS RENDERED DYNAMICALLY OVER CHARACTER */}
                            {activeKidsSticker === 'hat' && (
                              <motion.span 
                                animate={{ y: [0, -2, 0], rotate: [-2, 2, -2] }} 
                                transition={{ repeat: Infinity, duration: 2.2 }} 
                                className="absolute top-[8px] left-[53%] -translate-x-1/2 text-3xl z-40 pointer-events-none drop-shadow-md select-none"
                              >
                                🎩
                              </motion.span>
                            )}
                            {activeKidsSticker === 'glasses' && (
                              <motion.span 
                                animate={{ scale: [1, 1.05, 1] }} 
                                transition={{ repeat: Infinity, duration: 2.5 }} 
                                className="absolute top-[34%] left-1/2 -translate-x-1/2 text-2xl z-40 pointer-events-none drop-shadow-sm select-none"
                              >
                                🕶️
                              </motion.span>
                            )}
                            {activeKidsSticker === 'mustache' && (
                              <motion.span 
                                animate={{ rotate: [-4, 4, -4], y: [0, 0.5, 0] }} 
                                transition={{ repeat: Infinity, duration: 1.8 }} 
                                className="absolute top-[58%] left-[51%] -translate-x-1/2 text-2xl z-40 pointer-events-none drop-shadow-sm select-none"
                              >
                                👨
                              </motion.span>
                            )}
                            {activeKidsSticker === 'heart' && (
                              <motion.span 
                                animate={{ scale: [1, 1.25, 1] }} 
                                transition={{ repeat: Infinity, duration: 1.5 }} 
                                className="absolute top-[40%] right-[18%] text-2xl z-40 pointer-events-none drop-shadow-md select-none"
                              >
                                ❤️
                              </motion.span>
                            )}
                            {activeKidsSticker === 'crown' && (
                              <motion.span 
                                animate={{ y: [0, -3, 0], rotate: [-6, 6, -6] }} 
                                transition={{ repeat: Infinity, duration: 2.4 }} 
                                className="absolute top-[3px] left-[52%] -translate-x-1/2 text-3xl z-40 pointer-events-none drop-shadow-md select-none"
                              >
                                👑
                              </motion.span>
                            )}
                            {activeKidsSticker === 'rainbow' && (
                              <motion.span 
                                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }} 
                                transition={{ repeat: Infinity, duration: 3.5 }} 
                                className="absolute top-[-4px] left-1/2 -translate-x-1/2 text-4xl z-0 pointer-events-none select-none opacity-80"
                              >
                                🌈
                              </motion.span>
                            )}

                            {/* CHARACTER INGREDIENTS LAYOUT AND RENDER */}
                            {/* PINTINHO RENDERER */}
                            {kidsPlateColor === 'pink' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Ovo Base */}
                                {kidsPlateElements.includes('ovo') && (
                                  <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-26 bg-white border border-stone-200 rounded-full flex flex-col items-center justify-center relative shadow-md z-10"
                                  >
                                    {/* Yolk */}
                                    <div className="w-9 h-9 rounded-full bg-brand-yolk shadow-inner flex items-center justify-center">
                                      {/* Beak opens anim */}
                                      {kidsPlateElements.includes('bico') && (
                                        <motion.div 
                                          animate={{ scaleY: [1, 1.4, 1], y: [0, -2, 0] }}
                                          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                                          className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[11px] border-t-amber-500 rotate-180 z-20 absolute top-[52%]"
                                        />
                                      )}
                                    </div>

                                    {/* Eyes blinking anim */}
                                    {kidsPlateElements.includes('olhos') && (
                                      <motion.div 
                                        animate={{ scaleY: [1, 0.1, 1] }}
                                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
                                        className="absolute top-[32%] left-0 right-0 flex justify-around px-5 z-20"
                                      >
                                        <span className="w-3.5 h-3.5 rounded-full bg-stone-900 relative shadow-inner">
                                          <span className="w-1 h-1 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                                        </span>
                                        <span className="w-3.5 h-3.5 rounded-full bg-stone-900 relative shadow-inner">
                                          <span className="w-1 h-1 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                                        </span>
                                      </motion.div>
                                    )}

                                    {/* Wings */}
                                    {kidsPlateElements.includes('asas') && (
                                      <>
                                        <motion.span animate={{ rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -left-6 top-[40%] text-2xl select-none z-0">🥬</motion.span>
                                        <motion.span animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute -right-6 top-[40%] text-2xl select-none z-0 -scale-x-100">🥬</motion.span>
                                      </>
                                    )}

                                    {/* Feet */}
                                    {kidsPlateElements.includes('pes') && (
                                      <div className="absolute -bottom-2 flex gap-5 z-20 select-none">
                                        <motion.span animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="text-xl">🍊</motion.span>
                                        <motion.span animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.3 }} className="text-xl">🍊</motion.span>
                                      </div>
                                    )}
                                  </motion.div>
                                )}

                                {/* Grass decoration */}
                                {kidsPlateElements.includes('grama') && (
                                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-emerald-500/25 border-t border-emerald-400 flex items-center justify-center text-[8px] font-black text-emerald-800 tracking-wider pointer-events-none select-none z-20">
                                    🌱 JARDIM DE ERVAS 🌱
                                  </div>
                                )}
                              </div>
                            )}

                            {/* POLVO RENDERER */}
                            {kidsPlateColor === 'blue' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Bubbles */}
                                {kidsPlateElements.includes('bolhas') && (
                                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
                                    <motion.span animate={{ y: [40, -50], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3.2 }} className="absolute bottom-4 left-6 text-sm">🫧</motion.span>
                                    <motion.span animate={{ y: [30, -60], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 4.1, delay: 1 }} className="absolute bottom-2 right-8 text-xs">🫧</motion.span>
                                    <motion.span animate={{ y: [50, -40], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 2 }} className="absolute bottom-6 left-1/3 text-[10px]">🫧</motion.span>
                                  </div>
                                )}

                                {/* Egg Body */}
                                {kidsPlateElements.includes('ovo') && (
                                  <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-22 h-22 bg-white border border-stone-200 rounded-full flex items-center justify-center relative shadow-md z-10"
                                  >
                                    {/* Big Eyes */}
                                    {kidsPlateElements.includes('olhos_grandes') && (
                                      <motion.div 
                                        animate={{ scaleY: [1, 0.1, 1], rotate: [0, -3, 3, 0] }}
                                        transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 0.3 }}
                                        className="absolute top-[28%] left-0 right-0 flex justify-around px-4 z-20"
                                      >
                                        <span className="w-5 h-5 rounded-full bg-white border border-stone-900 relative flex items-center justify-center shadow-xs">
                                          <span className="w-3 h-3 rounded-full bg-sky-950 relative flex items-center justify-center">
                                            <span className="w-1 h-1 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                                          </span>
                                        </span>
                                        <span className="w-5 h-5 rounded-full bg-white border border-stone-900 relative flex items-center justify-center shadow-xs">
                                          <span className="w-3 h-3 rounded-full bg-sky-950 relative flex items-center justify-center">
                                            <span className="w-1 h-1 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                                          </span>
                                        </span>
                                      </motion.div>
                                    )}

                                    {/* Inner yolk mouth */}
                                    <div className="w-8 h-8 rounded-full bg-brand-yolk shadow-inner flex items-center justify-center">
                                      <div className="w-3 h-3 rounded-full bg-amber-600 animate-ping"></div>
                                    </div>

                                    {/* Tentacles */}
                                    {kidsPlateElements.includes('tentaculos') && (
                                      <div className="absolute -bottom-4 flex justify-center gap-1 z-0 select-none">
                                        <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }} className="text-lg">🌭</motion.span>
                                        <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }} className="text-lg">🌭</motion.span>
                                        <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.5 }} className="text-lg">🌭</motion.span>
                                        <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.7 }} className="text-lg">🌭</motion.span>
                                      </div>
                                    )}
                                  </motion.div>
                                )}
                              </div>
                            )}

                            {/* LEAO RENDERER */}
                            {kidsPlateColor === 'yellow' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Mane (Juba) */}
                                {kidsPlateElements.includes('juba') && (
                                  <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                                    className="absolute w-28 h-28 rounded-full border-4 border-dashed border-amber-500 bg-amber-400/20 z-0 flex items-center justify-center text-[10px] select-none pointer-events-none"
                                  >
                                    🧀 🧀 🧀 🧀 🧀 🧀 🧀 🧀
                                  </motion.div>
                                )}

                                {/* Egg base Face */}
                                {kidsPlateElements.includes('ovo') && (
                                  <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-white border border-stone-200 rounded-full flex items-center justify-center relative shadow-md z-10"
                                  >
                                    {/* Eyes */}
                                    {kidsPlateElements.includes('olhos') && (
                                      <motion.div 
                                        animate={{ scaleY: [1, 0.1, 1] }}
                                        transition={{ repeat: Infinity, repeatDelay: 2.8, duration: 0.2 }}
                                        className="absolute top-[28%] left-0 right-0 flex justify-around px-5 z-20"
                                      >
                                        <span className="w-3 h-3 rounded-full bg-slate-900 relative shadow-sm">
                                          <span className="w-0.5 h-0.5 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                                        </span>
                                        <span className="w-3 h-3 rounded-full bg-slate-900 relative shadow-sm">
                                          <span className="w-0.5 h-0.5 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                                        </span>
                                      </motion.div>
                                    )}

                                    {/* Inner yolk cheek */}
                                    <div className="w-8 h-8 rounded-full bg-brand-yolk shadow-inner" />

                                    {/* Nose (Nariz) and Whiskers */}
                                    {kidsPlateElements.includes('nariz') && (
                                      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 flex flex-col items-center z-20 select-none">
                                        <span className="text-sm">🍅</span>
                                        <span className="text-[6px] text-stone-500 font-black -mt-1 tracking-widest leading-none">:: ::</span>
                                      </div>
                                    )}
                                  </motion.div>
                                )}
                              </div>
                            )}

                            {/* FOGUETE RENDERER */}
                            {kidsPlateColor === 'space' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Stars */}
                                {kidsPlateElements.includes('estrelas') && (
                                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
                                    <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} className="absolute top-4 left-6 text-sm">⭐</motion.span>
                                    <motion.span animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 5, ease: 'linear' }} className="absolute top-8 right-6 text-xs">⭐</motion.span>
                                    <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-16 left-8 text-[10px]">✨</motion.span>
                                    <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }} className="absolute top-16 right-10 text-[10px]">✨</motion.span>
                                  </div>
                                )}

                                {/* Rocket Frame and window egg */}
                                <div className="relative flex flex-col items-center z-10">
                                  {/* Red Rocket Frame */}
                                  <div className="w-16 h-24 bg-red-500 rounded-t-full border-2 border-red-700 flex flex-col items-center justify-center relative shadow-sm z-10">
                                    {/* Wings/Fins */}
                                    <div className="absolute bottom-0 -left-3 w-3 h-8 bg-amber-500 rounded-l-full border-l border-t border-amber-700"></div>
                                    <div className="absolute bottom-0 -right-3 w-3 h-8 bg-amber-500 rounded-r-full border-r border-t border-amber-700"></div>

                                    {/* Egg Cockpit window */}
                                    {kidsPlateElements.includes('ovo') && (
                                      <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center relative shadow-inner z-20"
                                      >
                                        <div className="w-5 h-5 rounded-full bg-brand-yolk flex items-center justify-center">
                                          <span className="text-[7px]">👩‍🚀</span>
                                        </div>
                                      </motion.div>
                                    )}
                                  </div>
                                </div>

                                {/* Smoke (Fumaça) at the bottom */}
                                {kidsPlateElements.includes('fumaca') && (
                                  <div className="absolute bottom-0 inset-x-0 h-6 flex justify-center gap-1 z-20 pointer-events-none select-none">
                                    <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-2xl">☁️</motion.span>
                                    <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="text-2xl animate-pulse">☁️</motion.span>
                                    <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }} className="text-2xl">☁️</motion.span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* COELHO RENDERER */}
                            {kidsPlateColor === 'rainbow' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Long ears behind */}
                                {kidsPlateElements.includes('orelhas') && (
                                  <div className="absolute top-1.5 flex gap-7 z-0 pointer-events-none select-none">
                                    <motion.span animate={{ rotate: [-6, 6, -6], y: [0, -1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-2xl -rotate-12">🍌</motion.span>
                                    <motion.span animate={{ rotate: [6, -6, 6], y: [0, -1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }} className="text-2xl rotate-12">🍌</motion.span>
                                  </div>
                                )}

                                {/* Egg Body */}
                                {kidsPlateElements.includes('ovo') && (
                                  <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-18 h-24 bg-white border border-stone-200 rounded-full flex flex-col items-center justify-center relative shadow-md z-10"
                                  >
                                    {/* Big Bunny eyes */}
                                    <div className="absolute top-[28%] left-0 right-0 flex justify-around px-4 z-20">
                                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800 flex items-center justify-center">
                                        <span className="w-0.5 h-0.5 rounded-full bg-white"></span>
                                      </span>
                                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800 flex items-center justify-center">
                                        <span className="w-0.5 h-0.5 rounded-full bg-white"></span>
                                      </span>
                                    </div>

                                    {/* Pink cheek yolk */}
                                    <div className="w-7 h-7 rounded-full bg-brand-yolk shadow-inner flex items-center justify-center">
                                      <span className="text-[6px] text-pink-600">🐰</span>
                                    </div>

                                    {/* Whiskers */}
                                    <span className="text-[7px] text-stone-500 font-bold -mt-0.5 leading-none">:: ::</span>
                                  </motion.div>
                                )}

                                {/* Carrot in the corner */}
                                {kidsPlateElements.includes('cenoura') && (
                                  <motion.span 
                                    animate={{ y: [0, -3, 0], scale: [1, 1.1, 1] }} 
                                    transition={{ repeat: Infinity, duration: 2 }} 
                                    className="absolute bottom-4 right-5 text-2xl z-20 select-none"
                                  >
                                    🥕
                                  </motion.span>
                                )}
                              </div>
                            )}

                            {/* PEIXE RENDERER */}
                            {kidsPlateColor === 'beach' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Tail on the side */}
                                {kidsPlateElements.includes('cauda') && (
                                  <motion.span 
                                    animate={{ rotate: [-8, 8, -8] }} 
                                    transition={{ repeat: Infinity, duration: 1.2 }} 
                                    className="absolute left-[14px] top-[40%] text-2xl z-0 select-none pointer-events-none"
                                  >
                                    🍊
                                  </motion.span>
                                )}

                                {/* Sideways Egg Body */}
                                {kidsPlateElements.includes('ovo') && (
                                  <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-24 h-18 bg-white border border-stone-200 rounded-full flex items-center justify-center relative shadow-md z-10"
                                  >
                                    {/* Fish Eye */}
                                    <div className="absolute top-[25%] right-[22%] z-20">
                                      <span className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-white flex items-center justify-center">
                                        <span className="w-1 h-1 rounded-full bg-white"></span>
                                      </span>
                                    </div>

                                    {/* Yolk middle */}
                                    <div className="w-7 h-7 rounded-full bg-brand-yolk shadow-inner flex items-center justify-center">
                                      <span className="text-[6px]">🫧</span>
                                    </div>
                                  </motion.div>
                                )}

                                {/* Algae at bottom */}
                                {kidsPlateElements.includes('algas') && (
                                  <div className="absolute bottom-1 inset-x-0 flex justify-between px-6 z-20 pointer-events-none select-none">
                                    <motion.span animate={{ rotate: [-6, 12, -6] }} transition={{ repeat: Infinity, duration: 3.5 }} className="text-2xl origin-bottom">🌿</motion.span>
                                    <motion.span animate={{ rotate: [12, -6, 12] }} transition={{ repeat: Infinity, duration: 3.2 }} className="text-2xl origin-bottom">🌿</motion.span>
                                  </div>
                                )}
                              </div>
                            )}

                          </div>
                        </div>
                      )}

                      {/* GAMEPAD / INGREDIENT CONTROLS & READY BUTTONS */}
                      {(challengeStep === 'play' || kidsGameMode === 'free') && (
                        <div className="space-y-3">
                          <p className="text-[10px] text-brand-ink-light font-medium">Toque para adicionar ingredientes no prato virtual:</p>
                          
                          {/* List ingredients toggles based on selected recipe base */}
                          <div className="grid grid-cols-3 gap-1.5 pt-1">
                            {(kidsRecipes.find(r => r.plateColor === kidsPlateColor) || kidsRecipes[0]).items.map(item => {
                              const active = kidsPlateElements.includes(item.id);
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    if (active) {
                                      setKidsPlateElements(kidsPlateElements.filter(x => x !== item.id));
                                    } else {
                                      setKidsPlateElements([...kidsPlateElements, item.id]);
                                    }
                                  }}
                                  className={`py-1.5 px-1 rounded-xl text-[9px] font-black border transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer ${
                                    active 
                                      ? 'bg-amber-500 border-amber-600 text-white shadow-xs' 
                                      : 'bg-white border-stone-200 text-brand-ink-light hover:bg-stone-50'
                                  }`}
                                >
                                  <span>{item.emoji}</span>
                                  <span>{item.label.split(' ')[0]}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* ACTION SUBMISSION FOR CHALLENGE MODE */}
                          {kidsGameMode === 'challenge' && challengeStep === 'play' && (
                            <button
                              onClick={() => {
                                const currentRecipe = kidsRecipes.find(r => r.id === currentChallengeRecipeId) || kidsRecipes[0];
                                const requiredIds = currentRecipe.items.map(it => it.id);
                                const correctCount = requiredIds.filter(id => kidsPlateElements.includes(id)).length;
                                const incorrectCount = kidsPlateElements.filter(id => !requiredIds.includes(id)).length;
                                
                                let messageText = "";
                                if (correctCount === requiredIds.length && incorrectCount === 0) {
                                  messageText = `👑 Incrível! Você montou o prato com 100% de perfeição no joguinho! Para desbloquear sua medalha real e avançar no certificado de Mini Chef, toque no botão verde abaixo confirmando que vocês prepararam essa receita de verdade na cozinha!`;
                                  setShowConfettiEffect(true);
                                  setTimeout(() => setShowConfettiEffect(false), 3500);
                                } else if (correctCount >= requiredIds.length - 1) {
                                  messageText = `👏 Quase perfeito no joguinho! Você esqueceu ou errou muito pouquinho! Tente colocar exatamente as peças corretas ou prepare a receita real na cozinha com seus pais para marcar como feito!`;
                                } else {
                                  messageText = `👍 Bom esforço! Que tal olhar o passo a passo da receita real logo abaixo para memorizar as posições dos ingredientes e tentar novamente com seus pais?`;
                                }

                                setEvaluationResult({
                                  score: correctCount,
                                  total: requiredIds.length,
                                  message: messageText
                                });
                                setChallengeStep('result');
                              }}
                              className="w-full py-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-black text-xs rounded-xl tracking-wider uppercase transition-all shadow-md shadow-emerald-600/10 cursor-pointer"
                            >
                              🏁 Pronto! Concluir Desafio e Avaliar
                            </button>
                          )}
                        </div>
                      )}

                      {/* STICKER BOX ALBUM FOR UNLOCKED STICKERS */}
                      <div className="pt-2 border-t border-amber-200/40 text-left space-y-1.5">
                        <p className="text-[9.5px] font-black text-amber-950 uppercase tracking-wider pl-1 flex items-center justify-between">
                          <span>🎒 Álbum de Adesivos Colecionáveis:</span>
                          <span className="text-[8px] bg-amber-100 text-amber-800 font-extrabold px-1.5 rounded">
                            {completedKidsRecipes.length} de 6 liberados
                          </span>
                        </p>
                        
                        <div className="flex gap-2 justify-between bg-white/60 p-2 rounded-xl border border-amber-200/20">
                          {[
                            { id: 'hat', emoji: '🎩', label: 'Chapéu', req: 1 },
                            { id: 'glasses', emoji: '👓', label: 'Óculos', req: 2 },
                            { id: 'mustache', emoji: '👨', label: 'Bigode', req: 3 },
                            { id: 'heart', emoji: '❤️', label: 'Coração', req: 4 },
                            { id: 'crown', emoji: '👑', label: 'Coroa', req: 5 },
                            { id: 'rainbow', emoji: '🌈', label: 'Arco-íris', req: 6 },
                          ].map(st => {
                            const isUnlocked = completedKidsRecipes.length >= st.req;
                            const isActive = activeKidsSticker === st.id;
                            return (
                              <button
                                key={st.id}
                                disabled={!isUnlocked}
                                onClick={() => {
                                  if (isActive) {
                                    setActiveKidsSticker(null);
                                    setBonusUnlockedToast(`Adesivo ${st.emoji} removido!`);
                                  } else {
                                    setActiveKidsSticker(st.id);
                                    setBonusUnlockedToast(`Adesivo ${st.emoji} aplicado no prato! 🎉`);
                                  }
                                }}
                                className={`flex-1 flex flex-col items-center p-1 rounded-lg border text-center transition-all ${
                                  !isUnlocked 
                                    ? 'bg-stone-100/50 border-stone-200/40 opacity-30 cursor-not-allowed' 
                                    : isActive
                                      ? 'bg-amber-400 border-amber-500 scale-105 shadow-xs text-brand-ink'
                                      : 'bg-white border-stone-100 hover:border-amber-300'
                                }`}
                                title={isUnlocked ? `Clique para aplicar o adesivo ${st.label}` : `Faça ${st.req} receitas para liberar o adesivo ${st.label}`}
                              >
                                <span className="text-lg">{isUnlocked ? st.emoji : '🔒'}</span>
                                <span className="text-[7.5px] font-bold mt-0.5 tracking-tight truncate w-full text-stone-500">
                                  {isUnlocked ? st.label : `Fez ${st.req}`}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Missão em Família & Progresso de Medalhas */}
                    <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FDF2E9] rounded-2xl p-3.5 border border-amber-200/60 space-y-3 text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">💡</span>
                        <h5 className="text-[11px] font-black text-amber-950 uppercase tracking-wider">Missão em Família</h5>
                      </div>
                      <p className="text-[10.5px] text-amber-900 leading-relaxed font-medium">
                        Cozinhar com as crianças estimula a curiosidade e reduz a seletividade alimentar! 
                        <strong> A nossa estratégia juntos:</strong>
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[9px] text-amber-950 font-bold bg-white/75 p-2.5 rounded-xl border border-amber-200/35">
                        <div className="space-y-1">
                          <p className="text-amber-800 text-[9.5px] font-black">👨‍🍳 Adulto faz:</p>
                          <p className="font-semibold text-stone-700 leading-tight">Mexe na frigideira quente, cuida das facas e supervisiona tudo.</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-emerald-800 text-[9.5px] font-black">👦 Criança faz:</p>
                          <p className="font-semibold text-stone-700 leading-tight">Decora com cenoura, espalha tomate e cria os rostinhos divertidos!</p>
                        </div>
                      </div>
                      
                      {/* Medal Track */}
                      <div className="pt-2 border-t border-amber-200/40 space-y-2">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-black text-amber-900 flex items-center gap-1">🎖️ Medalhas de Mini Chef:</span>
                          <span className="font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">{completedKidsRecipes.length} de 5</span>
                        </div>
                        <div className="flex items-center justify-around bg-white/40 p-2 rounded-xl border border-amber-200/10">
                          {kidsRecipes.map(r => {
                            const isMade = completedKidsRecipes.includes(r.id);
                            return (
                              <div key={r.id} className="flex flex-col items-center gap-0.5">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base border-2 transition-all ${
                                  isMade 
                                    ? 'bg-amber-400 border-amber-500 scale-110 shadow-xs animate-pulse' 
                                    : 'bg-stone-100/70 border-stone-200 opacity-40'
                                }`}>
                                  {r.emoji}
                                </div>
                                <span className="text-[8px] font-bold text-stone-500">{isMade ? '⭐' : '🔒'}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Certificado com Medalhas e Missões Mestre do Ovo */}
                    <div className="bg-white rounded-2xl p-3.5 border border-stone-200/60 space-y-4 text-left">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">🏅</span>
                          <h5 className="text-[11.5px] font-black text-brand-ink uppercase tracking-wider">Mestre do Ovo</h5>
                        </div>
                        <span className="text-[8.5px] bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider animate-pulse">
                          Aventura Kids 🐥
                        </span>
                      </div>

                      {/* Missions checklist */}
                      <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FDF2E9] rounded-xl p-3 border border-amber-200/40 space-y-2">
                        <p className="text-[10px] font-black text-amber-950 uppercase tracking-wider">📋 Suas Missões:</p>
                        
                        <div className="space-y-1.5">
                          {/* Mission 1: Fez 1 receita */}
                          <div className="flex items-center justify-between bg-white/80 px-2.5 py-2 rounded-lg border border-amber-200/20 text-[10px]">
                            <span className="font-bold text-stone-700 flex items-center gap-1.5">
                              {completedKidsRecipes.length >= 1 ? (
                                <span className="text-emerald-600 font-extrabold text-xs">✅</span>
                              ) : (
                                <span className="text-stone-300">🥚</span>
                              )}
                              <span>Fez 1 receita com os pais</span>
                            </span>
                            <span className={`text-[8.5px] font-black px-1.5 py-0.2 rounded ${
                              completedKidsRecipes.length >= 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-400'
                            }`}>
                              {completedKidsRecipes.length >= 1 ? 'Concluído' : 'Pendente'}
                            </span>
                          </div>

                          {/* Mission 2: Fez 3 receitas */}
                          <div className="flex items-center justify-between bg-white/80 px-2.5 py-2 rounded-lg border border-amber-200/20 text-[10px]">
                            <span className="font-bold text-stone-700 flex items-center gap-1.5">
                              {completedKidsRecipes.length >= 3 ? (
                                <span className="text-emerald-600 font-extrabold text-xs">✅</span>
                              ) : (
                                <span className="text-stone-300">🍳</span>
                              )}
                              <span>Fez 3 receitas com os pais</span>
                            </span>
                            <span className={`text-[8.5px] font-black px-1.5 py-0.2 rounded ${
                              completedKidsRecipes.length >= 3 ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-400'
                            }`}>
                              {completedKidsRecipes.length >= 3 ? 'Concluído' : `${completedKidsRecipes.length}/3`}
                            </span>
                          </div>

                          {/* Mission 3: Fez 6 receitas */}
                          <div className="flex items-center justify-between bg-white/80 px-2.5 py-2 rounded-lg border border-amber-200/20 text-[10px]">
                            <span className="font-bold text-stone-700 flex items-center gap-1.5">
                              {completedKidsRecipes.length >= 6 ? (
                                <span className="text-emerald-600 font-extrabold text-xs">✅</span>
                              ) : (
                                <span className="text-stone-300">👑</span>
                              )}
                              <span>Fez 6 receitas com os pais</span>
                            </span>
                            <span className={`text-[8.5px] font-black px-1.5 py-0.2 rounded ${
                              completedKidsRecipes.length >= 6 ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-400'
                            }`}>
                              {completedKidsRecipes.length >= 6 ? 'Concluído' : `${completedKidsRecipes.length}/6`}
                            </span>
                          </div>
                        </div>

                        {/* Title Milestone Indicator */}
                        <div className="pt-2 border-t border-amber-200/40 flex justify-between items-center text-[10px]">
                          <span className="font-black text-amber-900">Seu Status Atual:</span>
                          <span className={`font-black px-2.5 py-0.5 rounded-full text-[9px] ${
                            completedKidsRecipes.length >= 6 
                              ? 'bg-amber-400 text-amber-950 animate-bounce' 
                              : 'bg-stone-100 text-stone-500'
                          }`}>
                            {completedKidsRecipes.length >= 6 ? '🏆 Chef Mirim' : '🐣 Aprendiz de Cozinha'}
                          </span>
                        </div>
                      </div>

                      {completedKidsRecipes.length < 6 ? (
                        <div className="bg-stone-50 border border-stone-200/40 p-4 rounded-xl text-center space-y-2.5 select-none">
                          <div className="text-3xl opacity-50">🔒🎓</div>
                          <p className="text-[10.5px] text-brand-ink-light leading-relaxed font-medium">
                            O <strong>Certificado Oficial de Chef Mirim</strong> está bloqueado! Prepare as <strong>6 Receitas Divertidas</strong> reais com seu pequeno e aperte o botão <strong>"🎉 Fizemos Juntos!"</strong> em cada uma delas para cumprir as missões.
                          </p>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-amber-400 h-1.5 transition-all duration-500" style={{ width: `${(completedKidsRecipes.length / 6) * 100}%` }}></div>
                          </div>
                          <span className="text-[9px] font-black text-stone-400 block uppercase tracking-wider">
                            Progresso: {completedKidsRecipes.length} de 6 receitas ({Math.round((completedKidsRecipes.length / 6) * 100)}%)
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-center gap-2">
                            <span className="text-xl">🎉</span>
                            <p className="text-[10.5px] text-emerald-950 font-semibold leading-snug">
                              <strong>Parabéns!</strong> Você completou todas as receitas reais e desbloqueou o título máximo de <strong>🏆 Chef Mirim</strong>!
                            </p>
                          </div>
                          
                          {/* Name input */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-black text-brand-ink-light uppercase tracking-wider block">Nome do Pequeno Chef Mirim:</label>
                            <input 
                              type="text" 
                              value={kidsCertName}
                              onChange={(e) => setKidsCertName(e.target.value)}
                              placeholder="Ex: Pedro Henrique"
                              className="w-full px-3 py-2 border border-stone-200 rounded-xl text-xs font-bold text-brand-ink focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-stone-50"
                            />
                          </div>

                          {/* Certificate Miniature Design Mockup */}
                          <div className="border-4 border-amber-300 rounded-2xl bg-amber-50/20 p-3.5 text-center relative overflow-hidden shadow-inner select-none space-y-1 bg-[radial-gradient(#fef3c7_1px,transparent_1px)] [background-size:16px_16px]">
                            {/* Colorful sprinkles decorations */}
                            <div className="absolute top-1 left-2 text-xs opacity-50">🎈</div>
                            <div className="absolute top-1 right-2 text-xs opacity-50">✨</div>
                            <div className="absolute bottom-1 left-3 text-xs opacity-50">🍰</div>
                            <div className="absolute bottom-1 right-3 text-xs opacity-50">🍳</div>
                            
                            <p className="text-[7.5px] font-black text-amber-800 tracking-widest uppercase">CERTIFICADO OFICIAL</p>
                            <h6 className="text-[11px] font-extrabold text-amber-950 uppercase tracking-tight -mt-1 leading-none">CHEF MIRIM OFICIAL 🏆</h6>
                            
                            <p className="text-[7.5px] text-amber-900 leading-normal italic px-2 pt-1">
                              Concedido com muito orgulho ao dedicado ajudante de cozinha e mestre dos pratos lúdicos:
                            </p>
                            
                            <p className="text-xs font-black text-brand-green-dark tracking-wide font-sans py-0.5 border-b-2 border-dashed border-amber-300/60 max-w-[180px] mx-auto truncate">
                              {kidsCertName || "Super Ajudante"}
                            </p>
                            
                            <p className="text-[7px] text-stone-500 leading-relaxed px-3">
                              Por concluir com bravura todas as missões divertidas, demonstrando criatividade, coragem e alegria ao preparar receitas saudáveis e felizes com os seus pais!
                            </p>

                            <div className="flex justify-between items-center text-[5.5px] pt-1.5 text-stone-400">
                              <div className="border-t border-stone-300/40 px-1 pt-0.5">
                                <span className="block font-bold text-stone-600">👨‍👩‍👦 Chef Responsável</span>
                              </div>
                              <div className="border-t border-stone-300/40 px-1 pt-0.5 text-right">
                                <span className="block font-mono">Data: {new Date().toLocaleDateString('pt-BR')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-1.5">
                            {/* Print/Download Button */}
                            <button 
                              onClick={() => {
                                if (isDemoMode) {
                                  setBonusUnlockedToast("⚠️ A emissão de certificado está desativada no modo demonstrativo!");
                                  return;
                                }
                                if (downloadingKidsCert) return;
                                setDownloadingKidsCert(true);
                                setDownloadKidsSuccess(false);
                                setTimeout(() => {
                                  setDownloadingKidsCert(false);
                                  setDownloadKidsSuccess(true);
                                  setBonusUnlockedToast("Certificado PDF gerado! Pronto para imprimir ou salvar 🖨️");
                                  
                                  const name = kidsCertName || "Super Ajudante";
                                  const printWindow = window.open('', '_blank');
                                  if (printWindow) {
                                    printWindow.document.write(`
                                      <html>
                                        <head>
                                          <title>Certificado Chef Mirim - ${name}</title>
                                          <style>
                                            body {
                                              margin: 0;
                                              padding: 40px;
                                              font-family: 'Comic Sans MS', 'Chalkboard SE', 'Inter', sans-serif;
                                              background-color: #fffbeb;
                                              display: flex;
                                              align-items: center;
                                              justify-content: center;
                                              min-height: 100vh;
                                              box-sizing: border-box;
                                            }
                                            .border-outer {
                                              border: 15px solid #fcd34d;
                                              padding: 10px;
                                              border-radius: 30px;
                                              background-color: white;
                                              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                                              width: 100%;
                                              max-width: 800px;
                                              box-sizing: border-box;
                                            }
                                            .border-inner {
                                              border: 4px dashed #fbbf24;
                                              padding: 50px 30px;
                                              border-radius: 20px;
                                              text-align: center;
                                              position: relative;
                                            }
                                            .emojis {
                                              font-size: 40px;
                                              margin: 10px;
                                            }
                                            h1 {
                                              color: #78350f;
                                              font-size: 36px;
                                              margin-top: 0;
                                              letter-spacing: -1px;
                                              text-transform: uppercase;
                                            }
                                            h2 {
                                              color: #047857;
                                              font-size: 24px;
                                              margin: 20px 0;
                                            }
                                            .subtitle {
                                              font-size: 18px;
                                              color: #92400e;
                                              margin-bottom: 30px;
                                              font-style: italic;
                                            }
                                            .name {
                                              font-size: 42px;
                                              font-weight: 900;
                                              color: #047857;
                                              border-bottom: 3px dashed #fcd34d;
                                              display: inline-block;
                                              padding-bottom: 5px;
                                              margin: 10px 0;
                                              max-width: 90%;
                                            }
                                            .description {
                                              font-size: 16px;
                                              color: #4b5563;
                                              line-height: 1.6;
                                              margin: 30px auto;
                                              max-width: 600px;
                                            }
                                            .footer {
                                              display: flex;
                                              justify-content: space-between;
                                              margin-top: 50px;
                                              padding: 0 40px;
                                              font-size: 14px;
                                              color: #9ca3af;
                                            }
                                            .signature {
                                              border-top: 1px solid #e5e7eb;
                                              padding-top: 8px;
                                              width: 200px;
                                            }
                                            @media print {
                                              body { background-color: white; padding: 0; }
                                              .border-outer { box-shadow: none; border-color: #fcd34d !important; }
                                            }
                                          </style>
                                        </head>
                                        <body>
                                          <div class="border-outer">
                                            <div class="border-inner">
                                              <div class="emojis">🎈🍳✨🍰🧸</div>
                                              <h1>Certificado de Chef Mirim</h1>
                                              <div class="subtitle">Concedido com muito orgulho e carinho ao incrível ajudante da cozinha e 🏅 Mestre do Ovo:</div>
                                              <div class="name">${name}</div>
                                              <div class="description">
                                                Por sua valiosa participação, criatividade e alegria ao preparar com seus pais deliciosas e saudáveis receitas divertidas de ovos, completando com 100% de sucesso todas as missões gastronômicas da infância!
                                              </div>
                                              <h2>🏆 Consagrado como Chef Mirim Oficial! 🏆</h2>
                                              <div class="footer">
                                                <div class="signature">
                                                  ✍️ Assinatura do Papai/Mamãe
                                                </div>
                                                <div class="signature">
                                                  📅 Data: ${new Date().toLocaleDateString('pt-BR')}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <script>
                                            window.onload = function() {
                                              window.print();
                                            }
                                          </script>
                                        </body>
                                      </html>
                                    `);
                                    printWindow.document.close();
                                  }
                                }, 1500);
                              }}
                              disabled={downloadingKidsCert}
                              className={`w-full py-2.5 rounded-xl text-[10px] font-black flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider ${
                                downloadKidsSuccess
                                  ? 'bg-brand-green/20 text-brand-green-dark'
                                  : 'bg-brand-green text-white hover:bg-brand-green-dark shadow-xs cursor-pointer'
                              }`}
                            >
                              {downloadingKidsCert ? (
                                <span className="flex items-center gap-1">
                                  <span className="w-2.5 h-2.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                  Gerando PDF...
                                </span>
                              ) : downloadKidsSuccess ? (
                                <>
                                  <span>✅ Certificado Baixado! Imprimir de novo 🖨️</span>
                                </>
                              ) : (
                                <>
                                  <span>📥 Baixar Certificado para Imprimir (PDF) 🖨️</span>
                                </>
                              )}
                            </button>
 
                            {/* Share on WhatsApp */}
                            <button 
                              onClick={() => {
                                if (isDemoMode) {
                                  setBonusUnlockedToast("⚠️ Compartilhamento desativado no modo demonstrativo!");
                                  return;
                                }
                                const name = kidsCertName || "Super Ajudante";
                                 const messageText = `🍳🎈 Olha que orgulho! Hoje fomos para a cozinha e o meu pequeno chef *${name}* preparou todas as receitas divertidas saudáveis do aplicativo "OvOChef+". \n\nEle(a) acabou de ganhar o seu *Certificado Oficial de Chef Mirim*! Foi um momento incrível em família! Conecte-se também e faça com as crianças! 🎉🐣`;
                                const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageText)}`;
                                window.open(whatsappUrl, '_blank');
                                setBonusUnlockedToast("Compartilhando conquista no WhatsApp! 📲");
                              }}
                              className="w-full py-2 bg-[#25D366] hover:bg-[#1ebd54] text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider shadow-xs cursor-pointer"
                            >
                              <span>📲 Compartilhar no WhatsApp</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sub-section: List of Kids Recipes */}
                    <div className="space-y-2 text-left">
                      <h5 className="text-xs font-black text-brand-ink uppercase tracking-wider pl-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-brand-yolk fill-brand-yolk" />
                        Receitas Divertidas (Passo a Passo)
                      </h5>

                      <div className="space-y-2">
                        {kidsRecipes.map(recipe => (
                          <div 
                            key={recipe.id}
                            className="bg-white rounded-xl border border-stone-200/60 overflow-hidden shadow-xs hover:border-amber-300 transition-all"
                          >
                            {/* Summary bar */}
                            <div 
                              onClick={() => setSelectedKidsRecipe(selectedKidsRecipe === recipe.id ? null : recipe.id)}
                              className="p-3 flex items-center justify-between cursor-pointer hover:bg-stone-50 transition-colors select-none"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-2xl bg-amber-50 p-1.5 rounded-lg">{recipe.emoji}</span>
                                <div className="min-w-0">
                                  <h6 className="text-[11.5px] font-extrabold text-brand-ink leading-tight flex items-center gap-1.5 flex-wrap">
                                    <span>{recipe.title}</span>
                                    {completedKidsRecipes.includes(recipe.id) && (
                                      <span className="text-[8.5px] bg-amber-400 text-amber-950 px-1.5 py-0.2 rounded-md font-extrabold flex items-center gap-0.5">⭐ FEITO</span>
                                    )}
                                  </h6>
                                  <p className="text-[9.5px] text-brand-ink-light leading-snug mt-0.5 truncate max-w-[190px]">{recipe.desc}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                <span className="text-[8.5px] font-black bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded-md">{recipe.time}</span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${selectedKidsRecipe === recipe.id ? 'rotate-180 text-amber-500' : ''}`} />
                              </div>
                            </div>

                            {/* Expandable detail section */}
                            {selectedKidsRecipe === recipe.id && (
                              <div className="bg-stone-50/55 border-t border-stone-200/40 p-3.5 space-y-3 text-xs text-brand-ink">
                                {/* Presentation Idea */}
                                <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-300/20 space-y-1">
                                  <p className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider">Apresentação Divertida 🎨</p>
                                  <p className="text-[10.5px] text-brand-ink-light leading-relaxed">{recipe.presentation}</p>
                                </div>

                                {/* Ingredients */}
                                <div className="space-y-1">
                                  <p className="text-[10px] font-extrabold text-brand-ink-light uppercase tracking-wider">Ingredientes</p>
                                  <ul className="space-y-1 pl-1">
                                    {recipe.ingredients.map((ing, i) => (
                                      <li key={i} className="flex gap-1.5 items-start text-[10.5px] text-brand-ink">
                                        <span className="text-amber-500 mt-0.5 flex-shrink-0">🐤</span>
                                        <span>{ing}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Steps */}
                                <div className="space-y-1">
                                  <p className="text-[10px] font-extrabold text-brand-ink-light uppercase tracking-wider">Como preparar passo a passo</p>
                                  <ol className="space-y-2 pl-1">
                                    {recipe.steps.map((step, i) => (
                                      <li key={i} className="flex gap-2 items-start text-[10.5px] text-brand-ink leading-relaxed">
                                        <span className="w-4 h-4 bg-amber-500/15 text-amber-700 text-[9px] font-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                                        <span>{step}</span>
                                      </li>
                                    ))}
                                  </ol>
                                </div>

                                {/* Funny Chef Secret */}
                                <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-300/20 space-y-1">
                                  <p className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">Segredo do Chef Kids 🤫</p>
                                  <p className="text-[10.5px] text-emerald-950 italic font-medium leading-relaxed">{recipe.funSecret}</p>
                                </div>

                                {/* Mark as made button */}
                                <button
                                  onClick={() => toggleKidsRecipe(recipe.id, recipe.title)}
                                  className={`w-full py-2 bg-brand-green text-white font-black rounded-xl text-[10px] hover:bg-brand-green-dark transition-all uppercase tracking-wider shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer ${
                                    completedKidsRecipes.includes(recipe.id)
                                      ? 'bg-amber-500 hover:bg-amber-600'
                                      : 'bg-brand-green hover:bg-brand-green-dark'
                                  }`}
                                >
                                  {completedKidsRecipes.includes(recipe.id) ? '⭐ Fizemos Juntos! (Remover)' : '🎉 Fizemos Juntos!'}
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Dynamic Details Bottom Sheet Modal */}
        <AnimatePresence>
          {selectedRecipeDetail && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-end select-none"
              onClick={() => setSelectedRecipeDetail(null)}
            >
              <motion.div 
                initial={{ y: 250 }}
                animate={{ y: 0 }}
                exit={{ y: 250 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-t-3xl max-h-[85%] overflow-y-auto p-4 space-y-4 shadow-xl text-brand-ink"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close handle */}
                <div className="flex justify-between items-center pb-2 border-b border-stone-200/60">
                  <span className="text-[11px] font-bold text-brand-yolk-dark bg-brand-yolk/10 px-2.5 py-0.5 rounded-md">
                    RECEITA {selectedRecipeDetail.id}
                  </span>
                  <button 
                    onClick={() => setSelectedRecipeDetail(null)}
                    className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-ink"
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-extrabold">{selectedRecipeDetail.title}</h3>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded-md text-brand-ink-light">
                      ⏱️ {selectedRecipeDetail.time}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded-md text-brand-ink-light">
                      🔥 {selectedRecipeDetail.calories}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded-md text-brand-ink-light">
                      💪 {selectedRecipeDetail.protein} Proteína
                    </span>
                  </div>
                </div>

                {/* Ingredients Checkboxes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-brand-ink-light uppercase tracking-wider flex items-center gap-1">
                    <CheckSquare className="w-3.5 h-3.5 text-brand-green" />
                    Ingredientes
                  </h4>
                  <div className="space-y-1 bg-[#FAF8F5] p-2.5 rounded-xl border border-stone-200/50">
                    {selectedRecipeDetail.ingredients.map((ing, i) => (
                      <label key={i} className="flex gap-2 items-center text-xs py-1 cursor-pointer">
                        <input type="checkbox" className="accent-brand-green w-3.5 h-3.5 rounded" />
                        <span className="text-brand-ink text-[11.5px]">{ing}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step */}
                <div className="space-y-2 pb-2">
                  <h4 className="text-xs font-bold text-brand-ink-light uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-yolk" />
                    Modo de Preparo
                  </h4>
                  <div className="space-y-3">
                    {selectedRecipeDetail.steps.map((step, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-brand-ink text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-brand-ink text-[11.5px] leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                 {/* Action button inside Detail */}
                <button 
                  onClick={() => {
                    toggleComplete(selectedRecipeDetail.id);
                    setSelectedRecipeDetail(null);
                  }}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 ${
                    isProgressLocked()
                      ? 'bg-stone-100 text-stone-500 border border-stone-200 cursor-not-allowed'
                      : 'bg-brand-green text-white shadow-xs hover:bg-brand-green-dark'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  {isProgressLocked()
                    ? '⏱️ Progresso Salvo (Nova Etapa Amanhã)' 
                    : 'Marcar Progressão 🚀'
                  }
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Shopping List Bottom Sheet Modal */}
        <AnimatePresence>
          {showShoppingListModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-end select-none"
              onClick={() => setShowShoppingListModal(false)}
            >
              <motion.div 
                initial={{ y: 250 }}
                animate={{ y: 0 }}
                exit={{ y: 250 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-t-3xl max-h-[85%] overflow-y-auto p-4 space-y-4 shadow-xl text-brand-ink"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close handle */}
                <div className="flex justify-between items-center pb-2 border-b border-stone-200/60">
                  <div className="flex items-center gap-1.5">
                    <ShoppingCart className="w-4.5 h-4.5 text-brand-yolk-dark" />
                    <span className="text-[11px] font-bold text-brand-ink uppercase tracking-wider">
                      Lista de Compras Inteligente
                    </span>
                  </div>
                  <button 
                    onClick={() => setShowShoppingListModal(false)}
                    className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-ink"
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] text-brand-ink-light font-medium">Selecione e organize os ingredientes da semana</p>

                {/* Week Tabs Navigation (S1 to S4) */}
                <div className="flex items-center gap-1">
                  {([1, 2, 3, 4] as const).map((wk) => {
                    const isActive = selectedShoppingWeek === wk;
                    return (
                      <button
                        key={wk}
                        onClick={() => setSelectedShoppingWeek(wk)}
                        className={`flex-1 py-1.5 rounded-lg text-[9px] font-extrabold uppercase transition-all ${
                          isActive
                            ? 'bg-brand-yolk text-brand-ink shadow-3xs'
                            : 'bg-stone-100 text-brand-ink-light hover:bg-stone-200/60'
                        }`}
                      >
                        Sem. {wk}
                      </button>
                    );
                  })}
                </div>

                {/* Days Covered subtitle */}
                <div className="flex justify-between items-center text-[10px] text-brand-ink-light px-0.5">
                  <span>Período: <strong className="text-brand-ink">{shoppingWeeksData[selectedShoppingWeek].days}</strong></span>
                  <button
                    onClick={() => {
                      const dynamicIngredients = getWeeklyIngredientsDynamic(selectedShoppingWeek);
                      const categories = Object.keys(dynamicIngredients) as Array<keyof typeof dynamicIngredients>;
                      const allItems = categories.flatMap(cat => dynamicIngredients[cat]);
                      const updated = { ...checkedIngredients };
                      allItems.forEach(item => {
                        delete updated[item.id];
                      });
                      setCheckedIngredients(updated);
                      setBonusUnlockedToast(`Lista da Semana ${selectedShoppingWeek} resetada! 🛒`);
                    }}
                    className="text-red-500 hover:text-red-700 font-bold flex items-center gap-0.5"
                  >
                    <Trash2 className="w-3 h-3" />
                    Desmarcar tudo
                  </button>
                </div>

                {/* Progress Bar & Stats */}
                {(() => {
                  const dynamicIngredients = getWeeklyIngredientsDynamic(selectedShoppingWeek);
                  const categories = Object.keys(dynamicIngredients) as Array<keyof typeof dynamicIngredients>;
                  const allItems = categories.flatMap(cat => dynamicIngredients[cat]);
                  const totalItems = allItems.length;
                  const checkedCount = allItems.filter(item => !!checkedIngredients[item.id]).length;
                  const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

                  return (
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/30 space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-extrabold text-brand-ink">Progresso da semana</span>
                        <span className="font-bold text-brand-green-dark">{checkedCount}/{totalItems} ({percentage}%)</span>
                      </div>
                      <div className="w-full bg-stone-200/60 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-brand-green h-full rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })()}

                {/* Categorized Ingredients List */}
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 scrollbar-none">
                  {(() => {
                    const dynamicIngredients = getWeeklyIngredientsDynamic(selectedShoppingWeek);
                    const categories = Object.keys(dynamicIngredients) as Array<keyof typeof dynamicIngredients>;

                    return categories.map((cat) => {
                      const items = dynamicIngredients[cat];
                      if (items.length === 0) return null;
                      const checkedCount = items.filter(item => !!checkedIngredients[item.id]).length;
                      const totalCount = items.length;

                      return (
                        <div key={cat} className="space-y-1.5">
                          {/* Category Header */}
                          <div className="flex justify-between items-center bg-stone-50/70 px-2 py-1 rounded-md text-[9px] font-black uppercase text-brand-ink-light tracking-wide">
                            <span>{cat}</span>
                            <span className="text-brand-green-dark font-extrabold">{checkedCount}/{totalCount} riscados</span>
                          </div>

                          {/* Ingredient Items */}
                          <div className="space-y-1 pl-0.5">
                            {items.map((item) => {
                              const isChecked = !!checkedIngredients[item.id];
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => {
                                    setCheckedIngredients({
                                      ...checkedIngredients,
                                      [item.id]: !isChecked
                                    });
                                  }}
                                  className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-stone-50 cursor-pointer transition-colors"
                                >
                                  {isChecked ? (
                                    <CheckSquare className="w-4 h-4 text-brand-green flex-shrink-0" />
                                  ) : (
                                    <Square className="w-4 h-4 text-stone-300 flex-shrink-0" />
                                  )}
                                  <span className={`text-[11.5px] truncate leading-tight select-none ${
                                    isChecked ? 'line-through text-stone-400 font-medium' : 'text-brand-ink font-semibold'
                                  }`}>
                                    {item.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>

                {/* Share Remaining Items on WhatsApp button */}
                <button
                  onClick={() => {
                    const weekDaysText = shoppingWeeksData[selectedShoppingWeek].days;
                    const dynamicIngredients = getWeeklyIngredientsDynamic(selectedShoppingWeek);
                    const categories = Object.keys(dynamicIngredients) as Array<keyof typeof dynamicIngredients>;
                    
                    const missingByCategory = categories.map(cat => {
                      const missingItems = dynamicIngredients[cat].filter(item => !checkedIngredients[item.id]);
                      return { cat, missingItems };
                    }).filter(group => group.missingItems.length > 0);

                    let message = `🛒 *Minha Lista de Compras - Semana ${selectedShoppingWeek} (${weekDaysText})*\n`;
                    if (missingByCategory.length === 0) {
                      message += `\n🎉 *Todos os ingredientes já foram comprados! Pronto para cozinhar!* \n`;
                    } else {
                      message += `_Ainda falta comprar estes itens para o cardápio:_ \n\n`;
                      missingByCategory.forEach(group => {
                        message += `*${String(group.cat)}:*\n`;
                        group.missingItems.forEach(item => {
                          message += `▫️ ${item.name}\n`;
                        });
                        message += `\n`;
                      });
                    }
                    message += `🍳 _OvOChef+_`;

                    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setBonusUnlockedToast("Enviando o que falta para o WhatsApp! 📲");
                  }}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#1ebd54] text-white text-[10px] font-black rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <Share2 className="w-4 h-4" />
                  Enviar o que falta para o WhatsApp
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Swap Recipe with Favorite Bottom Sheet Modal */}
        <AnimatePresence>
          {showSwapModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-end select-none"
              onClick={() => setShowSwapModal(false)}
            >
              <motion.div 
                initial={{ y: 250 }}
                animate={{ y: 0 }}
                exit={{ y: 250 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-t-3xl max-h-[85%] overflow-y-auto p-4 space-y-4 shadow-xl text-brand-ink"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close handle */}
                <div className="flex justify-between items-center pb-2 border-b border-stone-200/60">
                  <span className="text-[11px] font-bold text-brand-yolk-dark bg-brand-yolk/10 px-2.5 py-0.5 rounded-md">
                    SUBSTITUIR REFEIÇÃO
                  </span>
                  <button 
                    onClick={() => setShowSwapModal(false)}
                    className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-ink"
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-brand-ink">
                    Mudar {selectedMeal === 'cafe' ? 'Café da Manhã' : selectedMeal === 'almoco' ? 'Almoço' : 'Jantar'} da Receita {selectedDay}
                  </h3>
                  <p className="text-[10.5px] text-brand-ink-light leading-relaxed">
                    Escolha uma das suas receitas favoritas abaixo para colocar no lugar desta receita.
                  </p>
                </div>

                {/* List of favorited recipes */}
                <div className="space-y-2 max-h-[220px] overflow-y-auto scrollbar-none">
                  {favoritedRecipes.length === 0 ? (
                    <div className="text-center py-6 px-4 space-y-2">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mx-auto text-red-500">
                        ❤️
                      </div>
                      <p className="text-[11px] text-brand-ink-light leading-normal">
                        Você ainda não favoritou nenhuma receita. Para favoritar, vá no <strong>Cardápio</strong> ou na receita de hoje e toque no coração ❤️!
                      </p>
                    </div>
                  ) : (
                    recipes.filter((r) => favoritedRecipes.includes(r.id)).map((recipe) => {
                      const isCurrentlyActive = swappedRecipes[`${selectedDay}_${selectedMeal}`]?.id === recipe.id;
                      return (
                        <div 
                          key={recipe.id}
                          onClick={() => {
                            setSwappedRecipes({
                              ...swappedRecipes,
                              [`${selectedDay}_${selectedMeal}`]: recipe
                            });
                            setShowSwapModal(false);
                            setBonusUnlockedToast("Refeição substituída com sucesso! 🎉");
                          }}
                          className={`p-2 rounded-xl border cursor-pointer flex items-center justify-between gap-2 transition-all ${
                            isCurrentlyActive 
                              ? 'border-brand-yolk bg-brand-yolk/5 shadow-2xs' 
                              : 'border-stone-200 hover:border-brand-yolk/30'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-lg">
                              {recipe.category === 'Café da Manhã' ? '🌅' : recipe.category === 'Almoço' ? '☀️' : '🌙'}
                            </span>
                            <div className="min-w-0">
                              <h5 className="text-[11.5px] font-bold text-brand-ink truncate leading-tight">{recipe.title}</h5>
                              <span className="text-[9px] text-brand-ink-light block">{recipe.time} • {recipe.calories}</span>
                            </div>
                          </div>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            isCurrentlyActive 
                              ? 'bg-brand-yolk text-brand-ink' 
                              : 'bg-stone-100 text-brand-ink-light'
                          }`}>
                            {isCurrentlyActive ? 'Ativa' : 'Selecionar'}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* If already swapped, show option to restore original */}
                {swappedRecipes[`${selectedDay}_${selectedMeal}`] && (
                  <button
                    onClick={() => {
                      const updated = { ...swappedRecipes };
                      delete updated[`${selectedDay}_${selectedMeal}`];
                      setSwappedRecipes(updated);
                      setShowSwapModal(false);
                      setBonusUnlockedToast("Receita original restaurada! 🍳");
                    }}
                    className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl border border-red-200/50 transition-all flex items-center justify-center gap-1.5"
                  >
                    Restaurar Receita Original
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium Upgrade Modal */}
        <AnimatePresence>
          {showPremiumModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-ink/90 z-50 flex flex-col justify-center items-center p-5 select-none"
              onClick={() => setShowPremiumModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[32px] p-6 border border-stone-200 shadow-2xl text-center space-y-4 max-w-[280px]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-16 bg-brand-yolk/10 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner relative">
                  🍳
                  <span className="absolute -bottom-1 -right-1 bg-brand-green text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    PRO
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-brand-ink leading-tight">
                    Gostou do teste grátis?
                  </h3>
                  <p className="text-[11.5px] text-brand-ink-light leading-relaxed">
                    Você experimentou as 3 primeiras receitas! 
                    <br />
                    Para ter acesso ao cardápio completo com as <strong>mais de 400 combinações exclusivas de refeições saudáveis</strong>, lista de compras inteligente, favoritos e contador calórico direto na sua tela, garanta o seu acesso!
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <button 
                    onClick={() => {
                      setShowPremiumModal(false);
                      const element = document.getElementById('oferta');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-2.5 bg-brand-green hover:bg-brand-green-dark text-white text-xs font-bold rounded-xl shadow-md transition-all uppercase tracking-wider"
                  >
                    Quero Acesso Completo
                  </button>

                  <button 
                    onClick={() => setShowPremiumModal(false)}
                    className="w-full py-2 text-brand-ink-light hover:text-brand-ink text-[11px] font-bold underline transition-colors"
                  >
                    Continuar navegando grátis
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom Toast Notification inside Phone Frame */}
        <AnimatePresence>
          {bonusUnlockedToast && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-16 left-3.5 right-3.5 bg-brand-ink/95 border border-brand-yolk/30 text-white rounded-2xl p-3 shadow-xl z-50 flex items-start gap-2.5"
            >
              <div className="text-sm bg-brand-yolk/20 p-1.5 rounded-xl leading-none">✨</div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-extrabold text-brand-yolk uppercase tracking-wider">Sucesso!</p>
                <p className="text-[10px] text-stone-200 leading-snug font-medium pt-0.5">{bonusUnlockedToast}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Playful Simulator Overlay Tag (Explains what they are doing) */}
        {/* Floating Playful Simulator Overlay Tag (Explains what they are doing) */}
        {isDemoMode && loggedInEmail === 'demo@ovoapp.com' && !isDemoMode && (
          <div className="absolute top-[132px] right-2 bg-brand-yolk text-brand-ink text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow-md animate-bounce pointer-events-none z-30">
            CLIQUE PARA TESTAR! 👉
          </div>
        )}

        {/* Simulated Phone Navigation Bar */}
        <nav className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-slate-100 px-1 flex justify-between items-center z-40 select-none">
          <button 
            onClick={() => setActiveTab('hoje')} 
            className={`flex flex-col items-center justify-center flex-1 py-1 ${activeTab === 'hoje' ? 'text-brand-yolk-dark font-black' : 'text-slate-400'}`}
          >
            <span className="text-base">📅</span>
            <span className="text-[9px] font-bold">Hoje</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('cardapio')} 
            className={`flex flex-col items-center justify-center flex-1 py-1 ${activeTab === 'cardapio' ? 'text-brand-yolk-dark font-black' : 'text-slate-400'}`}
          >
            <span className="text-base">🍽️</span>
            <span className="text-[9px] font-bold">Receitas</span>
          </button>

          <button 
            onClick={() => setActiveTab('kids')} 
            className={`flex flex-col items-center justify-center flex-1 py-1 ${activeTab === 'kids' ? 'text-amber-600 font-black' : 'text-slate-400'}`}
          >
            <span className="text-base">👶{userPlan !== 'complete' && '🔒'}</span>
            <span className="text-[9px] font-bold">Kids</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('favoritos')} 
            className={`flex flex-col items-center justify-center flex-1 py-1 ${activeTab === 'favoritos' ? 'text-brand-yolk-dark font-black' : 'text-slate-400'}`}
          >
            <span className="text-base">❤️</span>
            <span className="text-[9px] font-bold">Favoritos</span>
          </button>

          <button 
            onClick={() => setActiveTab('recompensas')} 
            className={`flex flex-col items-center justify-center flex-1 py-1 relative ${activeTab === 'recompensas' ? 'text-amber-600 font-black' : 'text-slate-400'}`}
          >
            <motion.span 
              animate={isFullyCompleted && !isDemoMode ? { scale: [1, 1.25, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-base relative"
            >
              🎁{isDemoMode && <span className="text-[7.5px] absolute -top-1 -right-1">🔒</span>}
            </motion.span>
            <span className="text-[9px] font-bold">Recompensas</span>
            {/* Visual notification dot to call attention */}
            {!isDemoMode && (
              <span className={`absolute top-1.5 right-3 w-2 h-2 rounded-full ${isFullyCompleted ? 'bg-amber-500 animate-ping' : 'bg-brand-yolk'}`}></span>
            )}
          </button>
          
          <button 
            onClick={() => setActiveTab('como_acessar')} 
            className={`flex flex-col items-center justify-center flex-1 py-1 ${activeTab === 'como_acessar' ? 'text-brand-yolk-dark font-black' : 'text-slate-400'}`}
          >
            <span className="text-base">📲</span>
            <span className="text-[9px] font-bold">Como Acessar</span>
          </button>
        </nav>

        {/* Home Indicator bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full z-45"></div>

      </div>
    );
  };

  if (standalone) {
    return (
      <div className="w-full h-full md:h-auto md:min-h-screen bg-stone-100 flex justify-center items-center p-0 md:p-4" id="standalone-app-root">
        {/* Standalone mockup: full screen on mobile, styled mockup on desktop */}
        <div className="w-full h-full bg-white flex flex-col relative text-brand-ink shadow-2xl md:max-w-[400px] md:h-[820px] md:rounded-[48px] md:border-[10px] md:border-slate-900 md:my-8 overflow-hidden select-none">
          
          {/* Subtle Floating Admin/Simulation Panel for testing inside Standalone App */}
          {isDemoMode && (
            <div className="absolute top-[48px] right-3.5 z-50">
              <button 
                onClick={() => setShowAdminPanel(!showAdminPanel)} 
                className="p-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md flex items-center justify-center gap-1 text-[10px] font-black active:scale-95 transition-all cursor-pointer"
              >
                <span>⚙️ Testar Planos</span>
              </button>
              {showAdminPanel && (
                <div className="absolute right-0 mt-2 bg-white rounded-2xl border-2 border-amber-500 p-3 shadow-xl w-[260px] space-y-2.5 text-left text-brand-ink z-50">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-[10px] font-black uppercase text-amber-600">Simulador de Acesso</span>
                    <button onClick={() => setShowAdminPanel(false)} className="text-stone-400 hover:text-stone-700 text-xs font-bold">✕</button>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-stone-500 block">TIPO DE PLANO:</span>
                    <div className="flex bg-stone-100 p-1 rounded-lg gap-0.5">
                      <button
                        onClick={() => {
                          setUserPlan('trial');
                          setBonusUnlockedToast("Simulado: Teste Grátis 🧪");
                        }}
                        className={`flex-1 py-1 rounded-md text-[9px] font-bold ${userPlan === 'trial' ? 'bg-stone-300 text-stone-800 shadow-2xs' : 'text-stone-500'}`}
                      >
                        Teste
                      </button>
                      <button
                        onClick={() => {
                          setUserPlan('basic');
                          setBonusUnlockedToast("Simulado: Plano Básico 🔓");
                        }}
                        className={`flex-1 py-1 rounded-md text-[9px] font-bold ${userPlan === 'basic' ? 'bg-white shadow-2xs text-stone-800' : 'text-stone-500'}`}
                      >
                        Básico
                      </button>
                      <button
                        onClick={() => {
                          setUserPlan('complete');
                          setBonusUnlockedToast("Simulado: Plano Completo 👑");
                        }}
                        className={`flex-1 py-1 rounded-md text-[9px] font-bold ${userPlan === 'complete' ? 'bg-amber-500 text-white shadow-2xs' : 'text-stone-500'}`}
                      >
                        Completo
                      </button>
                    </div>
                  </div>
                  <div className="pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px]">
                    <span className="font-bold text-stone-600">Progresso: Dia {progressCount}/8</span>
                    <button
                      onClick={() => {
                        setProgressCount(1);
                        setSelectedDay(1);
                        setSimulatedComplete(false);
                        setLastCheckInTime(null);
                        setUserPlan('complete');
                        setCompletedKidsRecipes([]);
                        localStorage.setItem('ovo_progress_count', '1');
                        localStorage.removeItem('last_check_in_time');
                        localStorage.removeItem('ovo_completed_kids_recipes');
                        setBonusUnlockedToast("🔄 App Reiniciado!");
                      }}
                      className="px-2 py-1 bg-rose-500 text-white font-black rounded-md text-[9px] hover:bg-rose-600 active:scale-95 transition-all cursor-pointer"
                    >
                      Resetar 🔄
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {renderAppContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full" id="phone-layout-wrapper">
      {/* Simulation Plan Selector Switcher */}
      {isDemoMode && (
        <div className="bg-amber-500/10 border-2 border-amber-500/25 p-3 rounded-2xl flex flex-col items-stretch gap-3 w-full max-w-[330px] shadow-xs select-none">
          <div className="flex items-center justify-between gap-2">
            <div className="text-left">
              <span className="text-[9px] bg-amber-500 text-white font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider block w-max leading-none mb-1">
                Simulador de Planos
              </span>
              <span className="text-[11px] font-extrabold text-brand-ink leading-tight flex items-center gap-1">
                <span>⚙️ Tipo de Acesso:</span>
              </span>
            </div>
            <div className="flex bg-stone-200/80 p-1 rounded-xl">
              <button
                onClick={() => {
                  setUserPlan('trial');
                  setBonusUnlockedToast("Mudou para: Teste Grátis 🧪 (Limite de 3 dias e 3 receitas ativo)");
                }}
                className={`px-2 py-1 rounded-lg text-[9px] font-black transition-all flex items-center justify-center gap-1 ${
                  userPlan === 'trial'
                    ? 'bg-stone-400 text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                🧪 Teste
              </button>
              <button
                onClick={() => {
                  setUserPlan('basic');
                  setBonusUnlockedToast("Mudou para: Plano Básico 🔓 (Recompensas e Certificado Bloqueados)");
                }}
                className={`px-2 py-1 rounded-lg text-[9px] font-black transition-all flex items-center justify-center gap-1 ${
                  userPlan === 'basic'
                    ? 'bg-white text-stone-800 shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                🔓 Básico
              </button>
              <button
                onClick={() => {
                  setUserPlan('complete');
                  setBonusUnlockedToast("Mudou para: Plano Completo 👑 (Acesso Ilimitado)");
                }}
                className={`px-2 py-1 rounded-lg text-[9px] font-black transition-all flex items-center justify-center gap-1 ${
                  userPlan === 'complete'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                👑 Completo
              </button>
            </div>
          </div>

          {/* Guided Journey Simulation Controls */}
          <div className="border-t border-amber-500/15 pt-2 flex flex-col gap-1 text-left">
            <span className="text-[9.5px] font-extrabold text-brand-ink/70 uppercase">Simular Jornada Guiada ({isDemoMode ? '3 Dias Max' : '30 Dias'}):</span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-black text-amber-600">Dia {guidedJourneyDay}/{isDemoMode ? 3 : 30} Ativo</span>
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    const newOffset = Math.max(0, guidedDaysOffset - 1);
                    setGuidedDaysOffset(newOffset);
                    const newDay = Math.min(isDemoMode ? 3 : 30, Math.max(1, Math.floor((Date.now() - guidedStartTime) / 86400000) + 1 + newOffset));
                    setSelectedDay(newDay);
                    setBonusUnlockedToast(`⚡ Voltou 1 dia na Jornada Guiada. Agora no Dia ${newDay}!`);
                  }}
                  disabled={guidedDaysOffset <= 0}
                  className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded text-[9px] transition-all disabled:opacity-40 cursor-pointer"
                >
                  -1 Dia
                </button>
                <button
                  onClick={() => {
                    const newOffset = Math.min(35, guidedDaysOffset + 1);
                    setGuidedDaysOffset(newOffset);
                    const newDay = Math.min(isDemoMode ? 3 : 30, Math.max(1, Math.floor((Date.now() - guidedStartTime) / 86400000) + 1 + newOffset));
                    setSelectedDay(newDay);
                    setBonusUnlockedToast(`⚡ Avançou 1 dia na Jornada Guiada. Agora no Dia ${newDay}!`);
                  }}
                  disabled={guidedJourneyDay >= (isDemoMode ? 3 : 30)}
                  className="px-2 py-0.5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded text-[9px] transition-all cursor-pointer disabled:opacity-40"
                >
                  +1 Dia ⚡
                </button>
              </div>
            </div>
          </div>

          {/* Reset progress block */}
          <div className="border-t border-amber-500/15 pt-2 flex items-center justify-between gap-2">
            <div className="text-left">
              <span className="text-[10px] font-bold text-brand-ink">Progresso Chef:</span>
              <span className="text-[10.5px] font-black text-amber-600 ml-1">Dia {progressCount}/8</span>
            </div>
            <button
              onClick={() => {
                setProgressCount(1);
                const now = Date.now();
                setGuidedStartTime(now);
                setGuidedDaysOffset(0);
                setSelectedDay(1);
                setSimulatedComplete(false);
                setLastCheckInTime(null);
                setUserPlan('complete');
                setCompletedKidsRecipes([]);
                localStorage.setItem('ovo_progress_count', '1');
                localStorage.setItem('ovo_guided_start_time', now.toString());
                localStorage.setItem('ovo_guided_days_offset', '0');
                localStorage.setItem('ovo_selected_recipe_day', '1');
                localStorage.removeItem('last_check_in_time');
                localStorage.removeItem('ovo_completed_kids_recipes');
                setBonusUnlockedToast("🔄 App reiniciado com sucesso! Você voltou ao Dia 1 com Acesso Completo 👑");
              }}
              className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-black rounded-lg shadow-2xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
            >
              <span>Reiniciar no Dia 1 🔄</span>
            </button>
          </div>
        </div>
      )}

      <div id="phone-container" className="relative mx-auto w-full max-w-[360px] xs:max-w-[390px] sm:max-w-[420px] md:max-w-[450px] h-[670px] xs:h-[740px] sm:h-[820px] md:h-[860px] bg-brand-ink rounded-[40px] xs:rounded-[48px] p-3 shadow-2xl border-4 border-slate-800 ring-6 xs:ring-12 ring-slate-900/10 overflow-hidden select-none">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-brand-ink rounded-b-2xl z-50 flex items-center justify-center">
          <div className="w-12 h-1 bg-slate-900 rounded-full mr-4"></div>
          <div className="w-2.5 h-2.5 bg-slate-950 rounded-full"></div>
        </div>

        {renderAppContent()}
      </div>
    </div>
  );
}
