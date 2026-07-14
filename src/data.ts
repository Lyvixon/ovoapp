import { Recipe, Benefit, Testimonial, FAQItem } from './types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Crepioca Caprese Premium",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "220 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-151062780277d-3d98c18ecf0d?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "2 colheres de sopa de goma de tapioca",
      "4 tomates cereja picados",
      "50g de queijo branco em cubos",
      "Folhas de manjericão fresco",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Bata os ovos com a tapioca e uma pitada de sal até ficar homogêneo.",
      "Aqueça uma frigideira antiaderente em fogo baixo e despeje a mistura.",
      "Quando começar a firmar, distribua os tomates, o queijo e o manjericão em uma das metades.",
      "Dobre ao meio, abafe com uma tampa por 1 minuto para derreter o queijo e sirva quente!"
    ]
  },
  {
    id: 2,
    title: "Nuvem de Ovos com Parmesão",
    time: "12 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "180 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "20g de queijo parmesão ralado na hora",
      "Cebolinha picada para decorar",
      "Uma pitada de sal"
    ],
    steps: [
      "Separe as claras das gemas, mantendo as gemas intactas em potinhos separados.",
      "Bata as claras em neve bem firme com uma pitada de sal.",
      "Com uma colher, faça duas 'nuvens' com as claras em uma assadeira untada e crie uma cavidade no centro.",
      "Asse a 200°C por 5 minutos. Adicione as gemas nas cavidades, jogue o parmesão e asse por mais 3 minutos. Decore com cebolinha."
    ]
  },
  {
    id: 3,
    title: "Shakshuka Express",
    time: "15 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "290 kcal",
    protein: "16g",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos",
      "1 xícara de molho de tomate caseiro encorpado",
      "1/2 cebola roxa picada",
      "1/2 pimentão amarelo em cubos",
      "Azeite de oliva, cominho e páprica defumada",
      "Coentro fresco picado"
    ],
    steps: [
      "Em uma frigideira funda, refogue a cebola e o pimentão no azeite até dourarem.",
      "Adicione o cominho, a páprica e o molho de tomate. Cozinhe em fogo baixo por 3 minutos.",
      "Faça 3 pequenas cavidades no molho e quebre os ovos diretamente nelas.",
      "Tampe a frigideira e cozinhe por 5 a 7 minutos, até que as claras estejam brancas e a gema ainda mole. Finalize com coentro."
    ]
  },
  {
    id: 4,
    title: "Wrap de Aveia e Espinafre",
    time: "10 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "260 kcal",
    protein: "18g",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1 colher de sopa de farelo de aveia",
      "1 xícara de folhas de espinafre cru",
      "50g de frango desfiado temperado",
      "1 colher de sopa de requeijão light"
    ],
    steps: [
      "Bata os ovos, a aveia, o espinafre e uma pitada de sal no liquidificador ou mixer até virar um creme verde.",
      "Espalhe em uma frigideira antiaderente grande untada, cobrindo todo o fundo como uma panqueca.",
      "Vire para dourar os dois lados.",
      "Recheie com o frango desfiado e o requeijão, dobre como um wrap e doure levemente na frigideira antes de comer."
    ]
  },
  {
    id: 5,
    title: "Omelete Soufflé Ultra Fofinho",
    time: "10 min",
    difficulty: "Médio",
    category: "Lanche",
    calories: "170 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 colher de chá de manteiga sem sal",
      "Sal e pimenta-do-reino moída na hora",
      "Ervas finas picadas (salsa e tomilho)"
    ],
    steps: [
      "Separe as claras das gemas.",
      "Bata as claras em neve até obter picos suaves. Em outra vasilha, bata as gemas com sal e pimenta.",
      "Incorpore delicadamente as claras em neve às gemas usando uma espátula, mantendo o ar.",
      "Derreta a manteiga na frigideira, despeje a mistura delicadamente. Cozinhe tampado por 4 minutos em fogo baixíssimo. Dobre ao meio e sirva."
    ]
  },
  {
    id: 6,
    title: "Muffins de Ovo com Legumes",
    time: "15 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "140 kcal (2 unid)",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "4 ovos inteiros",
      "1/2 xícara de brócolis cozido bem picadinho",
      "1/2 tomate picado sem sementes",
      "30g de queijo minas ralado",
      "Orégano e sal a gosto"
    ],
    steps: [
      "Em uma tigela, bata bem os ovos com sal, pimenta e orégano.",
      "Misture os vegetais picados e o queijo minas à mistura de ovos.",
      "Distribua em forminhas de silicone untadas.",
      "Leve ao forno médio pré-aquecido (180°C) por cerca de 12 a 15 minutos, até dourarem e crescerem."
    ]
  },
  {
    id: 7,
    title: "Torrada Avocado com Ovo Pochê",
    time: "9 min",
    difficulty: "Médio",
    category: "Café da Manhã",
    calories: "310 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "1 ovo fresco",
      "1 fatia de pão de fermentação natural (ou integral)",
      "1/2 abacate maduro amaciado",
      "Suco de 1/2 limão",
      "Flor de sal, pimenta calabresa e azeite",
      "1 colher de sopa de vinagre branco"
    ],
    steps: [
      "Toste o pão. Amasse o abacate com limão, sal e um fio de azeite e espalhe na torrada.",
      "Ferva água em uma panela pequena com o vinagre, crie um redemoinho com a colher e quebre o ovo bem no centro.",
      "Cozinhe por exatos 3 minutos. Retire com escumadeira e seque levemente com papel toalha.",
      "Coloque o pochê sobre a torrada, finalize com flor de sal e pimenta calabresa."
    ]
  },
  {
    id: 8,
    title: "Tortilla de Batata Rápida",
    time: "12 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "280 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 batata inglesa média ralada no ralo grosso",
      "1/4 cebola cortada bem fina",
      "1 colher de sopa de azeite de oliva",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Lave a batata ralada em água corrente e esprema muito bem em um pano limpo para tirar todo o amido.",
      "Refogue a cebola e a batata seca na frigideira com azeite até dourarem por 5 minutos.",
      "Bata os ovos em um prato com sal e pimenta, despeje na frigideira por cima da batata.",
      "Deixe dourar por baixo em fogo baixo, vire com a ajuda de um prato e doure o outro lado por mais 3 minutos."
    ]
  },
  {
    id: 9,
    title: "Eggs Benedict Saudáveis",
    time: "14 min",
    difficulty: "Médio",
    category: "Café da Manhã",
    calories: "295 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos escalfados (pochê)",
      "1 muffin inglês integral (ou fatia de pão)",
      "2 fatias de lombo canadense ou peito de peru grelhado",
      "Para o molho: 3 colheres de iogurte grego desnatado, 1/2 colher de chá de mostarda dijon, limão e pitada de cúrcuma"
    ],
    steps: [
      "Prepare os ovos pochê (3 min em água fervente com vinagre).",
      "Aqueça o peito de peru e toste o pão.",
      "Prepare o falso molho holandês misturando bem o iogurte, a mostarda, gotas de limão e cúrcuma (para cor amarela) com uma pitada de sal.",
      "Monte colocando o pão, a carne grelhada, os ovos por cima e regando generosamente com o molho de iogurte."
    ]
  },
  {
    id: 10,
    title: "Ovos Mexidos Cremosos de Hotel",
    time: "6 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "160 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 colher de chá de manteiga sem sal gelada",
      "1 colher de sopa de creme de leite fresco (ou leite integral)",
      "Sal refinado e pimenta branca a gosto"
    ],
    steps: [
      "Quebre os ovos direto em uma panela fria, adicione a manteiga gelada e ligue o fogo baixo.",
      "Mexa sem parar com uma espátula de silicone, raspando as bordas e o fundo constantemente.",
      "Após 3-4 minutos, quando começar a coalhar levemente, retire a panela do fogo por 15 segundos para parar a cocção, continuando a mexer.",
      "Volte ao fogo por mais 1 minuto. Desligue, misture o creme de leite, sal e sirva imediatamente (super aveludado)."
    ]
  },
  {
    id: 11,
    title: "Pizza de Ovos na Frigideira",
    time: "10 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "280 kcal",
    protein: "19g",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos batidos",
      "2 colheres de sopa de molho de tomate",
      "50g de queijo muçarela light ralado",
      "Orégano e folhas de manjericão fresco",
      "Fio de azeite"
    ],
    steps: [
      "Bata os ovos com sal e despeje na frigideira untada em fogo baixo.",
      "Tampe e espere a massa de ovos firmar (cerca de 3-4 minutos).",
      "Sem virar, espalhe delicadamente o molho de tomate sobre os ovos firmes, adicione a muçarela e o orégano.",
      "Tampe novamente até o queijo derreter completamente. Finalize com manjericão fresco e sirva fatiado como pizza."
    ]
  },
  {
    id: 12,
    title: "Ovos Cremosos com Pesto",
    time: "8 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "245 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1 colher de sopa de molho pesto de manjericão",
      "1 colher de sobremesa de queijo parmesão ralado",
      "Torrada integral para acompanhar"
    ],
    steps: [
      "Em fogo baixo, adicione o molho pesto diretamente na frigideira fria.",
      "Quando começar a aquecer e liberar o aroma, quebre os ovos sobre o pesto.",
      "Mexa delicadamente para misturar as claras ao molho, mantendo as gemas inteiras ou quebrando-as conforme preferir.",
      "Tampe e deixe cozinhar por 3 minutos. Retire, polvilhe parmesão e sirva com torrada crocante."
    ]
  },
  {
    id: 13,
    title: "Crepe Fit de Claras com Frango",
    time: "8 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "190 kcal",
    protein: "24g",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 claras de ovo (pode usar pasteurizada)",
      "1 colher de chá de aveia em flocos finos",
      "60g de peito de frango desfiado",
      "1 colher de sopa de creme de ricota light"
    ],
    steps: [
      "Bata bem as claras com a aveia e uma pitada de sal.",
      "Em uma frigideira antiaderente untada de tamanho médio, despeje as claras em fogo baixo e tampe.",
      "Assim que secar em cima, solte as bordas com espátula e vire.",
      "Recheie com frango desfiado misturado com o creme de ricota, dobre no meio e sirva quente."
    ]
  },
  {
    id: 14,
    title: "Omelete de Caneca de 3 Minutos",
    time: "4 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "155 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "2 colheres de sopa de leite de sua preferência",
      "2 colheres de sopa de milho ou ervilha",
      "20g de queijo coalho ralado",
      "Sal e orégano"
    ],
    steps: [
      "Pincele um pouquinho de azeite ou manteiga dentro de uma caneca grande de cerâmica.",
      "Quebre os ovos dentro e bata vigorosamente com um garfo.",
      "Misture o leite, o queijo, os vegetais, o sal e o orégano.",
      "Leve ao micro-ondas em potência alta por 1 minuto e 30 segundos. Se ainda estiver mole no meio, coloque mais 30 segundos."
    ]
  },
  {
    id: 15,
    title: "Ovo Crocante com Alho-poró",
    time: "7 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "145 kcal",
    protein: "11g",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos fresquinhos",
      "1/2 xícara de alho-poró cortado em rodelas muito finas",
      "1 colher de sopa de manteiga clarificada ou azeite",
      "Sal defumado"
    ],
    steps: [
      "Aqueça a gordura escolhida na frigideira antiaderente em fogo médio-alto.",
      "Adicione o alho-poró e mexa até começar a ficar bem dourado e com as bordinhas crocantes.",
      "Quebre os ovos sobre o alho-poró, abaixe o fogo imediatamente e tampe.",
      "Deixe cozinhar até a clara firmar e as bordas ficarem douradinhas. Finalize com sal defumado."
    ]
  },
  {
    id: 16,
    title: "Salada Egg Salad Japonesa",
    time: "12 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "230 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos cozidos firmes (10 minutos de fervura)",
      "1 colher de sopa de maionese caseira (ou iogurte natural)",
      "1 colher de café de mostarda amarela",
      "Cebolinha verde fatiada fina",
      "Pão brioche integral ou torrada"
    ],
    steps: [
      "Descasque os ovos cozidos frios e corte-os ao meio.",
      "Retire as gemas e misture em um pote com a maionese, mostarda, sal e uma gota de limão até virar uma pasta laranjinha.",
      "Pique bem as claras e adicione à pasta de gema.",
      "Adicione a cebolinha, misture bem e monte o sanduíche com o brioche levemente tostado na chapa."
    ]
  },
  {
    id: 17,
    title: "Frittata Italiana de Abobrinha",
    time: "15 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "210 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos grandes",
      "1/2 abobrinha cortada em meia-lua fininha",
      "1 colher de sopa de cebola ralada",
      "30g de queijo feta ou ricota esfarelada",
      "Azeite de oliva extra virgem"
    ],
    steps: [
      "Dourar a cebola e a abobrinha no azeite por 4 minutos até ficarem macias.",
      "Bata os ovos vigorosamente para aerar e tempere com sal e noz-moscada.",
      "Despeje os ovos na frigideira por cima da abobrinha, espalhe o queijo feta por cima e cozinhe tampado por 5 minutos em fogo baixo.",
      "Leve ao forno por 3 minutos no grill para dourar por cima ou vire em um prato e cozinhe o outro lado."
    ]
  },
  {
    id: 18,
    title: "Ovos Cozidos Marinados Shoyu",
    time: "10 min",
    difficulty: "Médio",
    category: "Lanche",
    calories: "140 kcal (2 unid)",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos frescos grandes",
      "1/4 xícara de molho shoyu",
      "1/4 xícara de água mineral",
      "1 colher de chá de gengibre fresco ralado",
      "1 colher de café de açúcar demerara ou mel"
    ],
    steps: [
      "Coloque os ovos na água fervente com cuidado e cozinhe por exatos 6 minutos e 30 segundos (gema cremosa).",
      "Retire e mergulhe em uma bacia com água e gelo para parar a cocção. Descasque os ovos com cuidado embaixo da água.",
      "Misture o shoyu, água, gengibre e mel em um copo largo.",
      "Mergulhe os ovos nessa mistura por pelo menos 2 horas na geladeira. Corte ao meio antes de servir e veja a cor dourada na borda!"
    ]
  },
  {
    id: 19,
    title: "Crepioca Doce de Banana e Canela",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "240 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1 colher de sopa de tapioca",
      "1/2 banana nanica madura amassada",
      "Canela em pó a gosto",
      "Fio de mel opcional"
    ],
    steps: [
      "Bata bem os ovos e a tapioca no garfo.",
      "Misture a banana bem amassada e a canela à massa líquida de ovos.",
      "Em frigideira bem aquecida, jogue um pingo de óleo de coco ou manteiga e despeje.",
      "Espere cozinhar em fogo baixo até desgrudar as bordinhas, vire e doure por mais 2 minutos. Sirva com o mel."
    ]
  },
  {
    id: 20,
    title: "Cocotte Gourmet de Cogumelos",
    time: "15 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "185 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1/2 xícara de cogumelos paris fatiados",
      "1 colher de sopa de creme de leite leve ou creme de ricota",
      "Azeite, sal, pimenta preta e tomilho fresco"
    ],
    steps: [
      "Refogue os cogumelos no azeite com sal e tomilho por 4 minutos.",
      "Passe os cogumelos para um ramequim de cerâmica, junte o creme de leite no fundo.",
      "Quebre os ovos com cuidado por cima do refogado, sem quebrar as gemas.",
      "Cozinhe em banho-maria tampado no fogão ou asse em forno a 180°C por 10 minutos até a clara cozinhar levemente."
    ]
  },
  {
    id: 21,
    title: "Panqueca de Aveia Express",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "215 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "2 colheres de sopa cheias de aveia em flocos finos",
      "1 colher de sopa de água ou leite desnatado",
      "Sal ou adoçante natural (se preferir doce)"
    ],
    steps: [
      "Coloque tudo no mixer ou bata vigorosamente no prato por 1 minuto.",
      "Esquente uma frigideira média antiaderente untada com fiozinho de azeite.",
      "Adicione a massa e espere preencher o fundo. Tampe para ajudar a cozinhar por cima.",
      "Vire após 3 minutos e deixe dourar. Recheie com o que gostar (pasta de amendoim, queijo ou ovos mexidos adicionais)."
    ]
  },
  {
    id: 22,
    title: "Ovos Assados no Abacate",
    time: "15 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "320 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos médios",
      "1 abacate maduro cortado ao meio sem o caroço",
      "Pimenta caiena, sal rosa e coentro picado"
    ],
    steps: [
      "Pré-aqueça o forno a 200°C.",
      "Retire um pouquinho da polpa do abacate ao redor da cavidade para caber o ovo inteiro.",
      "Coloque as metades de abacate firmes em uma assadeira e quebre um ovo cru no meio de cada uma.",
      "Asse por 12 a 15 minutos até as claras firmarem. Tempere na hora de servir com sal, caiena e coentro."
    ]
  },
  {
    id: 23,
    title: "Tortinha de Omelete com Atum",
    time: "10 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "270 kcal",
    protein: "26g",
    image: "https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "2 colheres de sopa de atum ralado ao natural escorrido",
      "1 colher de sopa de milho verde cozido",
      "1 colher de sopa de requeijão light",
      "Sal e salsinha verde"
    ],
    steps: [
      "Bata os ovos em uma tigela com uma pitada de sal e a salsinha picada.",
      "Misture o atum, o milho e o requeijão diretamente nos ovos batidos.",
      "Despeje na frigideira pequena bem quente e untada.",
      "Tampe e asse por 5 minutos em fogo baixo. Vire com ajuda de uma tampa para dourar por mais 2 minutos."
    ]
  },
  {
    id: 24,
    title: "Croque Madame Saudável",
    time: "11 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "340 kcal",
    protein: "20g",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "1 ovo frito na manteiga (gema cremosa)",
      "2 fatias de pão de forma integral tostado",
      "1 fatia de presunto magro cozido",
      "Para a cobertura: 1 colher de sopa de queijo cottage batido, 1 colher de sopa de leite quente e pitada de noz-moscada"
    ],
    steps: [
      "Prepare um sanduíche quente de presunto com as fatias de pão integral tostado.",
      "Misture o cottage batido, leite quente, sal e noz-moscada para simular o molho bechamel e espalhe sobre o pão superior.",
      "Grelhe na frigideira ou forno por 3 minutos até derreter levemente o molho.",
      "Frite um ovo separado e monte coroando o topo do sanduíche com o ovo de gema mole."
    ]
  },
  {
    id: 25,
    title: "Ovos Mexidos Estilo Asiático",
    time: "8 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "170 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 colher de chá de óleo de gergelim torrado",
      "1/2 xícara de talos de cebolinha fatiados finos",
      "1 colher de chá de sementes de gergelim tostadas",
      "1 colher de chá de shoyu suave"
    ],
    steps: [
      "Em um prato fundo, bata os ovos com o shoyu até espumar levemente.",
      "Aqueça o óleo de gergelim na frigideira em fogo médio.",
      "Despeje os ovos e jogue a cebolinha fresca por cima.",
      "Cozinhe puxando as bordas para o centro lentamente para fazer dobras cremosas por 3 minutos. Desligue e polvilhe gergelim."
    ]
  },
  {
    id: 26,
    title: "Sanduíche Saudável de Cenoura e Ovo",
    time: "8 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "220 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "1 ovo cozido e amassado no garfo",
      "3 colheres de sopa de cenoura ralada bem fina",
      "1 colher de sopa de iogurte grego natural",
      "Fatias de pão de centeio ou integral",
      "Sal e pimenta do reino"
    ],
    steps: [
      "Misture o ovo amassado com a cenoura ralada e o iogurte grego.",
      "Tempere com sal, pimenta e ervas de sua preferência.",
      "Toste levemente duas fatias de pão.",
      "Recheie o sanduíche com a pasta saudável e consuma imediatamente."
    ]
  },
  {
    id: 27,
    title: "Crepe Crocante com Parmesão",
    time: "7 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "235 kcal",
    protein: "16g",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos",
      "1 colher de sopa de tapioca",
      "20g de queijo parmesão de saquinho (fino)",
      "Orégano"
    ],
    steps: [
      "Espalhe o parmesão cobrindo o fundo de uma frigideira fria antiaderente.",
      "Bata os ovos com a tapioca e despeje com cuidado por cima do queijo.",
      "Ligue o fogo médio e tampe por 3 minutos.",
      "Quando o fundo estiver com uma casca de parmesão super crocante e dourada, dobre ao meio e retire."
    ]
  },
  {
    id: 28,
    title: "Ovo Pochê no Caldo de Gengibre",
    time: "10 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "160 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500&auto=format&fit=crop",
    ingredients: [
      "2 ovos frescos",
      "1 e 1/2 xícara de caldo de legumes natural quente",
      "1 rodela grossa de gengibre amassado",
      "Folhas de acelga picadas",
      "Cebolinha fresca"
    ],
    steps: [
      "Ferva o caldo de legumes em uma panela com o gengibre por 3 minutos para pegar sabor.",
      "Adicione as folhas de acelga e abaixe o fogo.",
      "Quebre os ovos com cuidado dentro do caldo quente e cozinhe em fervura suave por 4 minutos.",
      "Retire o gengibre, sirva o caldo quente em uma tigela grande com os ovos pochês inteiros boiando. Decore com cebolinha."
    ]
  },
  {
    id: 29,
    title: "Frittata de Ricota e Espinafre",
    time: "14 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "220 kcal",
    protein: "17g",
    image: "https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos grandes",
      "1 xícara de folhas de espinafre rasgadas",
      "50g de ricota fresca esfarelada",
      "1 colher de chá de noz-moscada moída",
      "Azeite de oliva"
    ],
    steps: [
      "Refogue o espinafre no azeite por 2 minutos até murchar e tempere com noz-moscada.",
      "Bata bem os ovos e adicione à frigideira cobrindo o espinafre.",
      "Distribua a ricota fresca esfarelada por cima de forma uniforme.",
      "Cozinhe em fogo baixo tampado até secar as claras. Vire se quiser dourar por cima ou asse por 3 min."
    ]
  },
  {
    id: 30,
    title: "Soufflé de Caneca Super Express",
    time: "5 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "165 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1 colher de sopa cheia de creme de ricota",
      "2 colheres de sopa de queijo parmesão ralado",
      "1/2 colher de chá de fermento químico em pó",
      "Sal e pimenta branca"
    ],
    steps: [
      "Separe as claras e bata em neve em uma caneca grande usando um mixer ou batedor pequeno.",
      "Em outro potinho, misture bem as gemas, o creme de ricota, parmesão ralado, sal e fermento.",
      "Incorpore as claras em neve na mistura de gemas muito delicadamente para não perder o volume.",
      "Despeje na caneca e leve ao micro-ondas por 2 minutos. Coma quentinho enquanto está inflado e fofinho!"
    ]
  },
  {
    id: 31,
    title: "Ovos Nuvem ao Pesto",
    time: "10 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "195 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 colher de sopa de molho pesto de manjericão",
      "Uma pitada de sal",
      "Torrada integral para acompanhar"
    ],
    steps: [
      "Separe as claras das gemas, deixando as claras bem limpas.",
      "Bata as claras in neve com uma pitada de sal até ficarem firmes.",
      "Faça montinhos com as claras em neve em uma assadeira e adicione o pesto por cima.",
      "Asse a 200°C por 5 minutos, acrescente as gemas no centro e asse por mais 3 minutos."
    ]
  },
  {
    id: 32,
    title: "Wrap Proteico de Clara com Atum",
    time: "8 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "180 kcal",
    protein: "22g",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 claras de ovo",
      "1 lata de atum ralado ao natural",
      "1 colher de sopa de creme de ricota",
      "Folhas de rúcula fresca",
      "Sal e orégano"
    ],
    steps: [
      "Bata as claras de ovo com sal e orégano até homogeneizar.",
      "Despeje em uma frigideira antiaderente para fazer uma massa de crepe bem fina.",
      "Misture o atum com o creme de ricota e tempere a gosto.",
      "Coloque o recheio na massa de claras, adicione rúcula, dobre no formato de wrap e sirva."
    ]
  },
  {
    id: 33,
    title: "Frittata de Cogumelos e Espinafre",
    time: "12 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "210 kcal",
    protein: "16g",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos inteiros",
      "1/2 xícara de cogumelos paris fatiados",
      "1 xícara de folhas de espinafre cruas",
      "1 dente de alho picado",
      "1 colher de sopa de azeite de oliva",
      "Sal e pimenta"
    ],
    steps: [
      "Refogue o alho, os cogumelos e o espinafre no azeite por 3 minutos.",
      "Bata os ovos temperando com sal e pimenta até espumarem.",
      "Espalhe os ovos sobre os cogumelos e o espinafre na frigideira.",
      "Tampe e asse em fogo baixo por 6 minutos ou até que esteja firme no centro."
    ]
  },
  {
    id: 34,
    title: "Omelete de Abóbora com Parmesão",
    time: "10 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "190 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "50g de abóbora cozida e amassada",
      "1 colher de sopa de queijo parmesão ralado",
      "Sal, orégano e pimenta-do-reino",
      "Cebolinha picada"
    ],
    steps: [
      "Bata os ovos vigorosamente em um recipiente médio.",
      "Adicione a abóbora amassada, o parmesão ralado, cebolinha e temperos.",
      "Aqueça uma frigideira antiaderente untada e adicione a massa.",
      "Deixe dourar por baixo em fogo médio, vire e asse o outro lado por mais 2 minutos."
    ]
  },
  {
    id: 35,
    title: "Ovos Cozidos com Páprica e Ervas",
    time: "8 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "150 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos cozidos e firmes",
      "1 colher de chá de azeite de oliva",
      "1/2 colher de chá de páprica defumada",
      "Salsinha e cebolinha verde bem picadas",
      "Sal grosso e pimenta rosa moída"
    ],
    steps: [
      "Corte os ovos cozidos ao meio no sentido do comprimento.",
      "Disponha as metades em um prato com a gema voltada para cima.",
      "Regue levemente com azeite de oliva extra virgem.",
      "Salpique a páprica defumada, as ervas frescas picadinhas, sal e pimenta rosa."
    ]
  },
  {
    id: 36,
    title: "Shakshuka de Espinafre e Feta",
    time: "15 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "240 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos",
      "1 e 1/2 xícara de creme de espinafre leve",
      "50g de queijo feta esfarelado",
      "Azeite de oliva",
      "Pimenta calabresa e noz-moscada"
    ],
    steps: [
      "Em uma frigideira média, aqueça o creme de espinafre temperado com noz-moscada.",
      "Faça pequenas cavidades com uma colher e quebre os ovos em cada uma delas.",
      "Distribua o queijo feta esfarelado ao redor dos ovos na frigideira.",
      "Tampe e deixe em fogo baixo por 7 minutos, até as claras estarem cozidas. Polvilhe pimenta calabresa."
    ]
  },
  {
    id: 37,
    title: "Panqueca de Banana Proteica de Caneca",
    time: "6 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "220 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 banana madura pequena amassada",
      "1 colher de sopa de farelo de aveia",
      "Canela em pó a gosto",
      "1 colher de chá de mel para finalizar"
    ],
    steps: [
      "Bata os ovos em uma caneca grande untada.",
      "Incorpore a banana amassada, o farelo de aveia e a canela até homogeneizar.",
      "Leve ao forno micro-ondas por 1 minuto e 40 segundos.",
      "Retire e sirva com um fio de mel e mais canela polvilhada."
    ]
  },
  {
    id: 38,
    title: "Ovos Mexidos com Tomate e Manjericão",
    time: "5 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "165 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos frescos",
      "1 colher de chá de azeite ou manteiga",
      "4 tomates cereja fatiados",
      "Folhas frescas de manjericão",
      "Sal e pimenta moída"
    ],
    steps: [
      "Grelhe os tomates cereja na manteiga em fogo médio por 1 minuto.",
      "Bata os ovos levemente com sal e pimenta e despeje sobre os tomates.",
      "Misture delicadamente em movimentos circulares para obter cremosidade.",
      "Desligue o fogo quando estiver úmido e misture as folhas de manjericão fresco."
    ]
  },
  {
    id: 39,
    title: "Muffins de Forno Práticos de Ovos",
    time: "15 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "135 kcal (2 unid)",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "4 ovos",
      "20g de queijo branco picado",
      "1 colher de sopa de milho verde",
      "1/2 cenoura ralada fina",
      "Orégano e sal"
    ],
    steps: [
      "Preaqueça o forno a 180°C.",
      "Em uma tigela, misture os ovos batidos com os demais ingredientes de forma uniforme.",
      "Distribua em forminhas de silicone untadas.",
      "Leve para assar por 12 a 15 minutos até que fiquem bem dourados e firmes."
    ]
  },
  {
    id: 40,
    title: "Crepioca de Ricota com Ervas",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "205 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-151062780277d-3d98c18ecf0d?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "2 colheres de sopa de goma de tapioca",
      "50g de creme de ricota light com salsinha picada",
      "Sal e pimenta branca"
    ],
    steps: [
      "Bata muito bem os ovos com la goma de tapioca e o sal.",
      "Aqueça uma frigideira antiaderente untada e adicione a mistura líquida.",
      "Assim que a base desgrudar, adicione o creme de ricota temperado de um lado.",
      "Dobre a massa ao meio e cozinhe por mais 1 minuto para aquecer o recheio."
    ]
  },
  {
    id: 41,
    title: "Salada de Ovos Especial com Mostarda",
    time: "10 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "215 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos cozidos firmes",
      "1 colher de sopa de iogurte grego natural",
      "1/2 colher de chá de mostarda amarela ou escura",
      "Cebolinha fresca fatiada",
      "Pitada de sal e páprica"
    ],
    steps: [
      "Descasque e corte os ovos cozidos em cubos médios.",
      "Em um recipiente, prepare o molho misturando o iogurte grego, a mostarda, sal e cebolinha.",
      "Adicione os ovos picados ao molho e misture de forma delicada.",
      "Finalize polvilhando páprica por cima e sirva fresco com torradas."
    ]
  },
  {
    id: 42,
    title: "Ovo Frito Perfeito com Parmesão",
    time: "6 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "180 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos frescos",
      "20g de queijo parmesão ralado fino",
      "1/2 colher de sopa de azeite",
      "Pimenta do reino"
    ],
    steps: [
      "Polvilhe o queijo parmesão ralado na frigideira fria antiaderente criando uma camada.",
      "Ligue o fogo em temperatura média e espere o queijo começar a derreter.",
      "Quebre os ovos cuidadosamente sobre o queijo derretido, tempere e tampe.",
      "Retire assim que a clara cozinhar e o queijo formar uma casquinha dourada crocante."
    ]
  },
  {
    id: 43,
    title: "Wrap de Crepioca com Peito de Peru",
    time: "8 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "240 kcal",
    protein: "18g",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1 colher de sopa de goma de tapioca",
      "2 fatias de peito de peru magro",
      "1 colher de sopa de creme de ricota",
      "Sal e pimenta"
    ],
    steps: [
      "Bata os ovos e a tapioca com uma pitada de sal em um prato.",
      "Despeje em uma frigideira grande para fazer um disco fino.",
      "Asse os dois lados e retire para um prato plano.",
      "Passe o creme de ricota, coloque o peito de peru, enrole bem firme e sirva cortado ao meio."
    ]
  },
  {
    id: 44,
    title: "Tortilla de Abobrinha Fácil",
    time: "12 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "175 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1/2 abobrinha cortada em fatias super finas",
      "1/2 cebola pequena fatiada",
      "1 colher de sopa de azeite de oliva",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Refogue a cebola e as fatias de abobrinha no azeite até ficarem macias.",
      "Bata os ovos com sal e pimenta e adicione à frigideira cobrindo os vegetais.",
      "Deixe dourar por baixo em fogo baixo com a frigideira tampada.",
      "Vire a tortilla utilizando um prato e doure o outro lado por 3 minutos."
    ]
  },
  {
    id: 45,
    title: "Ovos Cozidos Gratinados com Muçarela",
    time: "10 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "230 kcal",
    protein: "16g",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos cozidos firmes",
      "2 colheres de sopa de molho de tomate",
      "30g de muçarela ralada light",
      "Orégano e sal"
    ],
    steps: [
      "Corte os ovos cozidos ao meio e coloque em uma pequena travessa.",
      "Adicione um pouquinho de molho de tomate sobre cada metade de ovo.",
      "Salpique a muçarela ralada e o orégano sobre eles.",
      "Leve ao forno micro-ondas por 1 minuto ou ao forno convencional até derreter e gratinar."
    ]
  },
  {
    id: 46,
    title: "Omelete Suíço com Minas Padrão",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "220 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "40g de queijo minas padrão ralado",
      "1 colher de chá de manteiga",
      "Sal e pimenta branca"
    ],
    steps: [
      "Bata os ovos em um prato com sal e pimenta até espumarem.",
      "Derreta a manteiga na frigideira em fogo médio.",
      "Adicione os ovos batidos e mexa as bordas em direção ao centro.",
      "Quando estiver quase firme, espalhe o queijo, dobre ao meio e abafe por 30 segundos."
    ]
  },
  {
    id: 47,
    title: "Sopa de Legumes com Ovo Fio",
    time: "12 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "190 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 e 1/2 xícara de caldo de legumes quente",
      "1/2 xícara de legumes cozidos picados",
      "Cebolinha fresca e sal"
    ],
    steps: [
      "Aqueça o caldo de legumes em uma panela com os legumes cozidos até ferver.",
      "Bata os ovos em um pote até ficarem completamente homogêneos.",
      "Despeje os ovos batidos lentamente no caldo fervente em formato de fio, mexendo com garfo.",
      "Cozinhe por 1 minuto para os ovos firmarem em fios finos. Polvilhe cebolinha."
    ]
  },
  {
    id: 48,
    title: "Arroz de Couve-Flor com Ovo",
    time: "10 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "160 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1 e 1/2 xícara de couve-flor picada fina (estilo arroz)",
      "1 colher de chá de óleo de gergelim",
      "Gergelim torrado e cebolinha",
      "Sal e shoyu suave"
    ],
    steps: [
      "Refogue o arroz de couve-flor no óleo de gergelim with uma pitada de sal por 3 minutos.",
      "Abra um espaço no centro da frigideira e quebre os ovos inteiros.",
      "Misture os ovos mexendo bem até que cozinhem e incorporem na couve-flor.",
      "Finalize com um fio de shoyu suave, sementes de gergelim e cebolinha fatiada."
    ]
  },
  {
    id: 49,
    title: "Ovos Pochê com Iogurte e Alho",
    time: "9 min",
    difficulty: "Médio",
    category: "Café da Manhã",
    calories: "185 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos frescos",
      "1/2 xícara de iogurte natural sem açúcar",
      "1/2 dente de alho ralado bem fino",
      "1 colher de chá de azeite aromatizado com páprica",
      "Sal e vinagre"
    ],
    steps: [
      "Misture o iogurte natural com o alho ralado e uma pitada de sal e coloque no prato.",
      "Prepare dois ovos pochê (3 minutos cozidos em água com vinagre).",
      "Coloque os ovos pochês com cuidado por cima da base de iogurte.",
      "Finalize regando com o azeite de páprica aquecido e sirva quente."
    ]
  },
  {
    id: 50,
    title: "Panqueca de Maçã Fit e Canela",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "210 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1/2 maçã ralada no ralo grosso",
      "1 colher de sopa de farelo de aveia",
      "Canela em pó a gosto",
      "Manteiga para untar"
    ],
    steps: [
      "Misture bem os ovos batidos, a maçã ralada, a aveia e a canela.",
      "Unte uma frigideira pequena com manteiga e leve ao fogo baixo.",
      "Adicione a massa e deixe cozinhar tampado por 4 minutos até firmar.",
      "Vire delicadamente para dourar o outro lado por mais 2 minutos."
    ]
  },
  {
    id: 51,
    title: "Crepioca de Frango com Requeijão",
    time: "9 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "280 kcal",
    protein: "22g",
    image: "https://images.unsplash.com/photo-151062780277d-3d98c18ecf0d?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "2 colheres de sopa de goma de tapioca",
      "50g de frango cozido desfiado e temperado",
      "1 colher de sopa de requeijão light",
      "Sal e pimenta"
    ],
    steps: [
      "Bata os ovos com a tapioca e o sal e faça um disco de crepe na frigideira.",
      "Misture o frango cozido e desfiado com o requeijão light em um recipiente.",
      "Recheie a crepioca colocando o frango cremoso na metade.",
      "Dobre e deixe dourar levemente os dois lados na frigideira quente."
    ]
  },
  {
    id: 52,
    title: "Ovos ao Forno com Tomatinhos",
    time: "12 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "170 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos frescos",
      "1/2 xícara de tomates cereja cortados ao meio",
      "1 colher de sopa de queijo cottage",
      "Azeite, sal e manjericão"
    ],
    steps: [
      "Unte um ramequim ou pequena travessa com um fio de azeite.",
      "Coloque os tomates cereja e o queijo cottage no fundo do pote.",
      "Quebre os ovos inteiros cuidadosamente por cima.",
      "Asse em forno preaquecido a 180°C por 10 minutos até que as claras estejam brancas."
    ]
  },
  {
    id: 53,
    title: "Omelete Fit de Brócolis e Cottage",
    time: "10 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "160 kcal",
    protein: "15g",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "1/2 xícara de brócolis cozido e bem picado",
      "2 colheres de sopa de queijo cottage",
      "Sal, orégano e fio de azeite"
    ],
    steps: [
      "Bata os ovos em uma tigela média com uma pitada de sal e orégano.",
      "Incorpore o brócolis picado e o cottage diretamente na mistura.",
      "Despeje em uma frigideira antiaderente untada e aquecida em fogo baixo.",
      "Cozinhe tampado por 4 minutos, dobre a omelete no meio e doure o outro lado."
    ]
  },
  {
    id: 54,
    title: "Wrap Verde com Ovos Mexidos",
    time: "8 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "210 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes para recheio",
      "1 folha grande de couve manteiga lavada (sem o talo grosso)",
      "1/2 tomate picadinho",
      "Sal e azeite"
    ],
    steps: [
      "Faça ovos mexidos rápidos na frigideira com o tomate picado e sal.",
      "Abafe a folha de couve com água quente por 30 segundos para amolecer.",
      "Coloque os ovos mexidos quentes no centro da folha de couve.",
      "Dobre as laterais da couve envolvendo os ovos como um wrap bem fechado."
    ]
  },
  {
    id: 55,
    title: "Sanduíche de Ovo de Frigideira",
    time: "7 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "260 kcal",
    protein: "16g",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "2 fatias de pão de forma integral",
      "1 fatia de queijo muçarela light",
      "Manteiga e sal"
    ],
    steps: [
      "Bata os ovos e despeje em uma frigideira grande untada com manteiga.",
      "Coloque as duas fatias de pão sobre o ovo cru e vire-as para umedecer dos dois lados.",
      "Assim que o ovo assar por baixo, vire toda a estrutura (pão e ovo juntos).",
      "Coloque o queijo em um dos lados do pão, dobre as bordas de ovo para dentro e feche o sanduíche."
    ]
  },
  {
    id: 56,
    title: "Frittata de Tomate Seco e Rúcula",
    time: "13 min",
    difficulty: "Médio",
    category: "Jantar",
    calories: "210 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "3 ovos inteiros",
      "4 pedaços de tomate seco picados",
      "1 xícara de folhas de rúcula rasgadas",
      "Azeite de oliva",
      "Sal e orégano"
    ],
    steps: [
      "Bata os ovos inteiros com sal, orégano e pimenta preta em uma vasilha.",
      "Aqueça a frigideira com um fiozinho de azeite e despeje os ovos.",
      "Distribua o tomate seco e as folhas de rúcula por cima dos ovos ainda líquidos.",
      "Tampe e deixe em fogo bem baixo por 6 minutos até dourar por baixo e firmar."
    ]
  },
  {
    id: 57,
    title: "Ovos Mexidos Cremosos com Chia",
    time: "6 min",
    difficulty: "Fácil",
    category: "Café da Manhã",
    calories: "175 kcal",
    protein: "13g",
    image: "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos grandes",
      "1 colher de chá de sementes de chia",
      "1 colher de sobremesa de creme de leite light",
      "Sal e manteiga"
    ],
    steps: [
      "Bata os ovos em uma vasilha, misture o creme de leite, sal e as sementes de chia.",
      "Aqueça a manteiga na frigideira em fogo muito baixo.",
      "Despeje a mistura de ovos e mexa sem parar até começar a coagular com cremosidade.",
      "Retire do fogo enquanto ainda estiver úmido e brilhante."
    ]
  },
  {
    id: 58,
    title: "Suflê de Legumes de Caneca Rápido",
    time: "6 min",
    difficulty: "Fácil",
    category: "Jantar",
    calories: "150 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos inteiros",
      "2 colheres de sopa de ervilha e cenoura cozidas picadinhas",
      "1 colher de sopa de requeijão light",
      "1/2 colher de chá de fermento em pó",
      "Sal e pimenta"
    ],
    steps: [
      "Bata muito bem os ovos com o requeijão e o fermento em uma caneca untada.",
      "Misture os vegetais picadinhos e tempere com sal e pimenta.",
      "Leve ao micro-ondas por 1 minuto e 45 segundos.",
      "Sirva em seguida com salada verde acompanhando."
    ]
  },
  {
    id: 59,
    title: "Ovo no Pão Integral com Parmesão",
    time: "8 min",
    difficulty: "Fácil",
    category: "Lanche",
    calories: "220 kcal",
    protein: "14g",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "1 ovo caipira",
      "1 fatia grossa de pão integral",
      "1 colher de sopa de parmesão ralado",
      "Fio de azeite e sal"
    ],
    steps: [
      "Faça uma cavidade quadrada ou redonda no centro da fatia de pão integral.",
      "Coloque o pão em uma frigideira untada com azeite em fogo médio.",
      "Quebre o ovo cru diretamente na cavidade do pão, salpique sal e tampe.",
      "Vire o pão inteiro para dourar e tostar o outro lado, salpique o queijo parmesão e sirva."
    ]
  },
  {
    id: 60,
    title: "Salada de Batata e Ovos Fit",
    time: "15 min",
    difficulty: "Fácil",
    category: "Almoço",
    calories: "240 kcal",
    protein: "12g",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop",
    ingredients: [
      "2 ovos cozidos picados",
      "1 batata média cozida e cortada em cubos",
      "1 colher de sopa de iogurte natural sem açúcar",
      "1 colher de chá de azeite e ervas frescas",
      "Sal e gotas de limão"
    ],
    steps: [
      "Misture o iogurte natural, o azeite, gotas de limão e sal em uma tigela grande.",
      "Adicione as batatas cozidas frias em cubos.",
      "Adicione os ovos cozidos picados e as ervas frescas de sua preferência.",
      "Misture tudo delicadamente e leve para gelar antes de servir."
    ]
  }
];

export const benefits: Benefit[] = [
  {
    icon: "🔄",
    title: "Variedade Sem Esforço",
    description: "Esqueça a repetição de receitas. O aplicativo guia você dia a dia para experimentar novos sabores e combinações surpreendentes."
  },
  {
    icon: "📈",
    title: "Acompanhamento de Progresso",
    description: "Marque suas receitas como concluídas, acumule estrelas e marque sua presença diária diretamente no painel interativo do app."
  },
  {
    icon: "⭐",
    title: "Favoritos e Notas",
    description: "Gostou muito de um prato? Salve nos favoritos em 1 clique e filtre instantaneamente para repetir quantas vezes quiser."
  },
  {
    icon: "📲",
    title: "Sem Download (Acesso direto na tela)",
    description: "Não precisa baixar nem instalar nada. Por ser um sistema moderno, você acessa tudo direto pela tela do seu celular sem gastar memória!"
  },
  {
    icon: "🛒",
    title: "Lista de Compras Inteligente",
    description: "Sempre saiba exatamente o que comprar para a semana corrente, evitando compras desnecessárias e desperdício de comida."
  },
  {
    icon: "🔋",
    title: "Funciona Offline",
    description: "Sem internet na cozinha? Sem problemas. As receitas abrem instantaneamente pois o app salva os dados no seu aparelho."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Costa",
    avatar: "MC",
    role: "Praticante de musculação",
    comment: "Eu comia ovo cozido ou omelete todo santo dia e já não aguentava mais o cheiro. O aplicativo mudou tudo! Hoje coloco meu celular na bancada da cozinha e sigo as receitas de 10 minutinhos. A Crepioca Caprese e o Muffin de caneca são meus preferidos!",
    stars: 5,
    platform: "E-mail"
  },
  {
    name: "Juliana Rodrigues",
    avatar: "JR",
    role: "Mãe de duas crianças",
    comment: "Grupo do WhatsApp: 'Gente, fiz a Pizza de Ovo com massa crocante ontem de noite e as crianças devoraram sem perceber! 😍 Fica idêntico a uma pizza real e me salvou de pedir delivery na janta. Melhor investimento que fiz para variar a janta do pessoal.'",
    stars: 5,
    platform: "WhatsApp"
  },
  {
    name: "Carlos Eduardo",
    avatar: "CE",
    role: "Profissional de TI, mora sozinho",
    comment: "Moro sozinho e odeio receita demorada de 1 hora. O app é fantástico porque as receitas ficam prontas em 10 ou 15 minutos e só usa uma frigideira ou caneca de microondas. E o fato de salvar o progresso dos dias me motivou a manter a alimentação saudável todos os dias. Nota 10.",
    stars: 5,
    platform: "Instagram"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "O que exatamente é esse acesso ao aplicativo?",
    answer: "Não é um PDF ou livro digital comum. É um sistema interativo super simples e moderno. Você entra com o link enviado para o seu e-mail, e pode colocá-lo diretamente na tela inicial do seu celular. Ele funciona igual a um aplicativo, salvando seu progresso diário e suas receitas prediletas sem gastar memória e sem precisar baixar nada."
  },
  {
    question: "Vou precisar instalar ou baixar algo no meu celular?",
    answer: "De jeito nenhum! Muitas pessoas têm receio ou dificuldade de baixar ou instalar coisas novas. Por isso, criamos uma tecnologia segura onde você não precisa fazer downloads nem colocar senhas complicadas de lojas de aplicativos. Nós enviamos um link exclusivo de acesso que abre direto na tela do seu celular de forma simples e rápida."
  },
  {
    question: "O progresso é salvo se eu fechar o aplicativo?",
    answer: "Sim! O aplicativo utiliza armazenamento local inteligente do seu próprio celular. Toda vez que você concluir um dia de receita ou favoritar um prato, essa informação fica salva permanentemente. Ao abrir o aplicativo novamente, ele lembrará exatamente onde você parou."
  },
  {
    question: "As receitas são difíceis ou caras?",
    answer: "Absolutamente não. Nosso principal foco é a praticidade. O ingrediente central é sempre o ovo de galinha comum. Os acompanhamentos e temperos são extremamente fáceis de achar e baratos: tapioca, abobrinha, queijo cottage, manjericão, limão, cebola, tomate. O tempo médio de preparo de todo o cardápio é de apenas 12 minutos!"
  },
  {
    question: "O aplicativo expira depois de um tempo?",
    answer: "De jeito nenhum! Seu acesso é vitalício e o pagamento é único. Você pode usar o aplicativo no seu próprio ritmo, cozinhar suas receitas favoritas quantas vezes quiser e receberá todas as atualizações e novas receitas que adicionarmos no futuro sem pagar nenhum centavo extra."
  },
  {
    question: "Tenho alguma garantia de satisfação?",
    answer: "Sim, risco zero! Oferecemos 7 dias de garantia incondicional. Se você acessar o aplicativo e achar que preferia um PDF comum ou que as receitas não são para você, basta nos enviar um e-mail. Nós fazemos o reembolso integral do seu pagamento na hora."
  }
];
