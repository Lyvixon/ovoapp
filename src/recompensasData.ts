export interface BonusRecipe {
  title: string;
  desc: string;
  time: string;
  calories: string;
  protein: string;
  ingredients: string[];
  instructions: string[];
}

export interface SauceItem {
  title: string;
  desc: string;
  ingredients: string[];
  instructions: string[];
}

export interface ConservationItem {
  title: string;
  subtitle: string;
  points: string[];
}

export const proteinSnacks: BonusRecipe[] = [
  {
    title: "1. Pãezinhos de Queijo Express",
    desc: "Lanche super rápido com sabor de pão de queijo quentinho e muita proteína.",
    time: "5 min",
    calories: "160 kcal",
    protein: "14g",
    ingredients: [
      "1 ovo grande",
      "2 colheres de sopa de queijo cottage (ou ricota cremosa)",
      "2 colheres de sopa de polvilho doce ou azedo",
      "1 pitada de sal",
      "1 colher de chá de fermento químico"
    ],
    instructions: [
      "Misture muito bem todos os ingredientes em uma caneca ou tigela com um garfo.",
      "Leve ao micro-ondas por 2 minutos (ou asse em frigideira tampada em fogo muito baixo).",
      "Abra ao meio e doure na frigideira se quiser uma casquinha crocante."
    ]
  },
  {
    title: "2. Crepioca de Linhaça e Queijo",
    desc: "A crepioca tradicional com adição de fibras saudáveis para aumentar a saciedade.",
    time: "6 min",
    calories: "190 kcal",
    protein: "13g",
    ingredients: [
      "1 ovo inteiro",
      "1 colher de sopa cheia de goma de tapioca",
      "1 colher de sopa de farinha de linhaça dourada",
      "1 fatia de queijo coalho ou queijo minas padrão",
      "Orégano a gosto"
    ],
    instructions: [
      "Bata o ovo, a tapioca, a linhaça e o sal com um garfo até homogeneizar.",
      "Despeje em frigideira antiaderente pré-aquecida em fogo baixo.",
      "Vire o disco, adicione o queijo e o orégano no centro, dobre e abafe por 1 minuto."
    ]
  },
  {
    title: "3. Muffins de Ovo e Espinafre",
    desc: "Muffins práticos e assados para ter lanches proteicos prontos para a semana toda.",
    time: "15 min",
    calories: "110 kcal (2 unid)",
    protein: "12g",
    ingredients: [
      "2 ovos grandes",
      "1/2 xícara de espinafre fresco picadinho",
      "4 tomates cereja cortados ao meio",
      "2 colheres de sopa de ricota esfarelada",
      "Sal e pimenta-do-reino"
    ],
    instructions: [
      "Bata os ovos vigorosamente com temperos em uma tigela.",
      "Incorpore o espinafre picado, os tomates cereja e a ricota.",
      "Distribua em forminhas de silicone para muffin e asse na Airfryer a 160°C por 8-10 minutos."
    ]
  },
  {
    title: "4. Omelete de Caneca no Micro-ondas",
    desc: "A solução perfeita para quando você tem literalmente 3 minutos para lanchar.",
    time: "3 min",
    calories: "140 kcal",
    protein: "13g",
    ingredients: [
      "2 ovos frescos",
      "2 fatias de peito de peru light picadas",
      "1 colher de sopa de tomate picadinho",
      "Cebolinha fresca e pitada de sal"
    ],
    instructions: [
      "Unte levemente uma caneca com um fio de azeite.",
      "Bata os ovos e adicione os outros ingredientes direto na caneca.",
      "Leve ao micro-ondas em potência alta por 1 minuto e meio a 2 minutos."
    ]
  },
  {
    title: "5. Panqueca de Cacau e Whey",
    desc: "Para salvar a vontade de comer doce à tarde com baixíssimo carboidrato.",
    time: "5 min",
    calories: "175 kcal",
    protein: "22g",
    ingredients: [
      "1 ovo grande",
      "1 colher de sopa (15g) de whey protein de chocolate ou baunilha",
      "1 colher de chá de cacau em pó 100%",
      "1 colher de sopa de água filtrada"
    ],
    instructions: [
      "Bata vigorosamente todos os ingredientes com um garfo até dissolver bem.",
      "Grelhe em frigideira untada em fogo baixo por 2 minutos de cada lado.",
      "Sirva puro ou com morangos frescos fatiados por cima."
    ]
  },
  {
    title: "6. Wrap de Claras com Frango",
    desc: "Uma panqueca finíssima feita apenas de claras, recheada com frango desfiado cremoso.",
    time: "8 min",
    calories: "180 kcal",
    protein: "25g",
    ingredients: [
      "3 claras de ovo",
      "1 colher de sopa de creme de ricota light ou requeijão cremoso",
      "3 colheres de sopa de frango desfiado temperado",
      "Salsinha e cebolinha picadas"
    ],
    instructions: [
      "Bata as claras no garfo com sal por 30 segundos.",
      "Despeje em frigideira grande untada, espalhando bem para ficar bem fina.",
      "Misture o frango com a ricota e recheie a panqueca de claras, enrolando como wrap."
    ]
  },
  {
    title: "7. Ovos Cozidos Recheados de Abacate",
    desc: "Substitua a tradicional maionese calórica por gorduras boas do abacate.",
    time: "10 min",
    calories: "195 kcal",
    protein: "13g",
    ingredients: [
      "2 ovos cozidos firmes",
      "2 colheres de sopa de abacate maduro amassado",
      "1 colher de chá de suco de limão",
      "Páprica defumada, sal e pimenta"
    ],
    instructions: [
      "Corte os ovos cozidos ao meio e retire as gemas com cuidado.",
      "Misture as gemas cozidas com o abacate maduro, limão, sal e pimenta.",
      "Preencha as cavidades das claras com esse creme e salpique páprica por cima."
    ]
  },
  {
    title: "8. Toast de Batata Doce com Ovo",
    desc: "Uma alternativa sem glúten ao pão de forma, crocante e saudável.",
    time: "10 min",
    calories: "210 kcal",
    protein: "11g",
    ingredients: [
      "1 fatia grossa de batata doce (cerca de 1cm de espessura)",
      "1 ovo fresco",
      "1 colher de chá de azeite de oliva",
      "Sementes de chia para polvilhar"
    ],
    instructions: [
      "Coloque a fatia de batata doce na torradeira ou na Airfryer (180°C) por 8 minutos até dourar e amaciar.",
      "Prepare um ovo frito na frigideira com o azeite de gema mole ou firme.",
      "Coloque o ovo por cima da toast de batata doce e finalize com chia."
    ]
  },
  {
    title: "9. Crepe Fit de Atum",
    desc: "Dobradinha clássica de proteínas do mar e da terra que garante saciedade prolongada.",
    time: "7 min",
    calories: "230 kcal",
    protein: "24g",
    ingredients: [
      "1 ovo inteiro + 1 clara",
      "1 colher de sopa de farelo de aveia",
      "2 colheres de sopa de atum sólido em conserva escorrido",
      "1 colher de sopa de tomate picado"
    ],
    instructions: [
      "Misture ovo, clara e farelo de aveia. Asse o crepe na frigideira dos dois lados.",
      "Em um prato, misture o atum com o tomate picado e uma pitada de sal.",
      "Coloque o recheio de atum no centro do crepe e dobre-o em quatro partes."
    ]
  },
  {
    title: "10. Quiche Low Carb de Caneca",
    desc: "Receita quentinha, reconfortante e muito baixa em carboidratos.",
    time: "5 min",
    calories: "190 kcal",
    protein: "15g",
    ingredients: [
      "1 ovo inteiro",
      "1 colher de sopa de farinha de amêndoas ou de coco",
      "2 colheres de sopa de brócolis cozido bem picadinho",
      "1 colher de sopa de queijo parmesão ralado",
      "Sal e noz-moscada"
    ],
    instructions: [
      "Bata todos os ingredientes em uma caneca untada até virar uma mistura uniforme.",
      "Leve ao micro-ondas por 1 minuto e 40 segundos.",
      "Desenforme no prato e sirva ainda fumegante."
    ]
  },
  {
    title: "11. Pão de Frigideira Proteico",
    desc: "Pãozinho rápido que substitui o pão de padaria francês no lanche da tarde.",
    time: "6 min",
    calories: "170 kcal",
    protein: "12g",
    ingredients: [
      "1 ovo grande",
      "1 colher de sopa cheia de farelo de aveia",
      "1 colher de sopa de iogurte natural desnatado",
      "1 pitada de sal",
      "1 colher de chá de fermento químico"
    ],
    instructions: [
      "Misture o ovo, aveia, iogurte e sal com um garfo. Adicione o fermento por último.",
      "Grelhe em uma mini frigideira antiaderente tampada em fogo baixíssimo.",
      "Vire quando estiver firme e doure o outro lado. Pode rechear com queijo leve."
    ]
  },
  {
    title: "12. Ovos Mexidos Cremosos com Cottage",
    desc: "A técnica perfeita para ovos mexidos super cremosos e com dose extra de proteína.",
    time: "5 min",
    calories: "185 kcal",
    protein: "16g",
    ingredients: [
      "2 ovos inteiros",
      "2 colheres de sopa de queijo cottage",
      "1/2 colher de chá de manteiga sem sal",
      "Cúrcuma em pó e pimenta-do-reino"
    ],
    instructions: [
      "Bata os ovos no garfo com o queijo cottage, uma pitada de cúrcuma e pimenta.",
      "Aqueça a manteiga na frigideira em fogo baixo.",
      "Mexa os ovos constantemente com espátula até formarem coágulos macios e cremosos."
    ]
  },
  {
    title: "13. Waffle de Tapioca e Parmesão",
    desc: "Sabor de pão de queijo crocante por fora feito na máquina de waffle ou sanduicheira.",
    time: "5 min",
    calories: "195 kcal",
    protein: "11g",
    ingredients: [
      "1 ovo fresco",
      "2 colheres de sopa de goma de tapioca",
      "1 colher de sopa de queijo parmesão ralado fino",
      "1 colher de sopa de água filtrada"
    ],
    instructions: [
      "Bata tudo em um recipiente até obter uma massa líquida homogênea.",
      "Despeje na sanduicheira ou máquina de waffle previamente untada e bem quente.",
      "Feche e deixe dourar por 3 a 4 minutos até ficar bem dourado e crocante."
    ]
  },
  {
    title: "14. Muffin Salgado de Frango",
    desc: "Aproveite as sobras de frango desfiado para criar um muffin delicioso de lanche.",
    time: "15 min",
    calories: "120 kcal",
    protein: "14g",
    ingredients: [
      "1 ovo inteiro + 1 clara",
      "4 colheres de sopa de frango desfiado cozido",
      "2 colheres de sopa de cenoura ralada bem fina",
      "Sal, salsinha e fermento em pó"
    ],
    instructions: [
      "Bata os ovos e incorpore o frango, a cenoura e os temperos.",
      "Misture uma pitadinha de fermento químico em pó.",
      "Asse em forminhas individuais na Airfryer a 160°C por 8 minutos até dourar."
    ]
  },
  {
    title: "15. Crepioca Doce de Canela",
    desc: "Uma delícia que imita sobremesa saudável para o lanche ou pós-treino.",
    time: "6 min",
    calories: "180 kcal",
    protein: "10g",
    ingredients: [
      "1 ovo inteiro",
      "1 colher de sopa de goma de tapioca",
      "1/2 banana pequena amassada",
      "Canela em pó a gosto"
    ],
    instructions: [
      "Bata bem o ovo com a tapioca e a banana amassada no prato.",
      "Coloque na frigideira antiaderente em fogo baixo até dourar os dois lados.",
      "Dobre ao meio e finalize polvilhando canela em pó por cima."
    ]
  },
  {
    title: "16. Chips de Queijo com Ovo Pochê",
    desc: "Crocância salgada combinada com a cremosidade luxuosa da gema de ovo escorrendo.",
    time: "8 min",
    calories: "190 kcal",
    protein: "14g",
    ingredients: [
      "2 colheres de sopa de queijo parmesão ralado grosso",
      "1 ovo caipira fresco",
      "1 colher de sopa de vinagre branco (para o pochê)"
    ],
    instructions: [
      "Espalhe o parmesão em círculos numa frigideira antiaderente. Grelhe até derreter e ficar crocante. Reserve.",
      "Faça um redemoinho em água fervente com vinagre e coloque o ovo para cozinhar pochê por 3 minutos.",
      "Coloque o ovo pochê em cima do disco de parmesão crocante e sirva."
    ]
  },
  {
    title: "17. Omelete Caprese Rápida",
    desc: "Leve sabor da Itália para o seu lanche saudável de forma extremamente prática.",
    time: "5 min",
    calories: "195 kcal",
    protein: "14g",
    ingredients: [
      "2 ovos inteiros",
      "4 tomates cereja fatiados",
      "20g de muçarela de búfala ou minas picado",
      "Folhas frescas de manjericão, sal e azeite"
    ],
    instructions: [
      "Bata os ovos com uma pitada de sal e cozinhe na frigideira untada.",
      "Quando estiver quase firme, coloque os tomates, o queijo e o manjericão na metade.",
      "Dobre a omelete ao meio e abafe por 1 minuto para o queijo derreter suavemente."
    ]
  },
  {
    title: "18. Pão de Queijo de Frigideira com Chia",
    desc: "A cremosidade do requeijão unida à saciedade e fibras extras da semente de chia.",
    time: "5 min",
    calories: "185 kcal",
    protein: "12g",
    ingredients: [
      "1 ovo inteiro",
      "1 colher de sopa de tapioca",
      "1 colher de sopa de requeijão light",
      "1 colher de chá de sementes de chia"
    ],
    instructions: [
      "Bata tudo muito bem até obter um creme sedoso.",
      "Asse em frigideira antiaderente tampada em fogo baixo.",
      "Grelhe dos dois lados e sirva quentinho."
    ]
  },
  {
    title: "19. Rolo de Clara Recheado com Ricota",
    desc: "Lanche ultra magro, rico em proteína pura e muito saboroso devido ao tempero do queijo.",
    time: "6 min",
    calories: "115 kcal",
    protein: "15g",
    ingredients: [
      "3 claras de ovo batidas",
      "2 colheres de sopa de creme de ricota temperada",
      "1 pitada de pimenta calabresa e orégano"
    ],
    instructions: [
      "Unte a frigideira com uma gota de azeite e despeje as claras em camada bem fina.",
      "Assim que secar, espalhe a ricota temperada por toda a superfície.",
      "Enrole como um rocambole direto na frigideira e doure levemente as laterais."
    ]
  },
  {
    title: "20. Egg Cups de Bacon e Tomate",
    desc: "Um snack saboroso, perfeito para preparar em quantidade para levar ao trabalho.",
    time: "15 min",
    calories: "155 kcal (2 unid)",
    protein: "13g",
    ingredients: [
      "2 ovos inteiros",
      "2 fatias bem finas de bacon artesanal",
      "1/2 tomate italiano picado em cubos",
      "Salsinha picada"
    ],
    instructions: [
      "Forre as forminhas de silicone colocando a fatia de bacon contornando a lateral.",
      "Adicione cubinhos de tomate no fundo e quebre o ovo inteiro por cima.",
      "Asse na Airfryer por 8-10 minutos a 180°C até o bacon dourar e a clara firmar."
    ]
  }
];

export const healthySauces: SauceItem[] = [
  {
    title: "🌿 1. Molho Pesto de Manjericão Fit",
    desc: "Um clássico refrescante e aromático para acompanhar omeletes e ovos mexidos.",
    ingredients: [
      "1 xícara de folhas frescas de manjericão lavado",
      "4 colheres de sopa de azeite de oliva extra virgem",
      "2 colheres de sopa de castanhas de caju ou nozes picadas",
      "2 colheres de sopa de queijo parmesão ralado fino",
      "1 dente de alho pequeno sem o miolo",
      "1 pitada de sal marinho"
    ],
    instructions: [
      "Em um mini processador, mixer ou almofariz, triture o manjericão com o alho e as castanhas.",
      "Adicione o azeite aos poucos em fio, continuando a bater para emulsificar.",
      "Incorpore o queijo ralado e o sal com uma colher. Guarde em pote de vidro tampado na geladeira por até 7 dias."
    ]
  },
  {
    title: "🍋 2. Molho de Iogurte com Ervas",
    desc: "Leve e cremoso, combina incrivelmente bem com wraps, crepiocas e ovos cozidos.",
    ingredients: [
      "1 pote (170g) de iogurte natural desnatado ou iogurte grego fit",
      "1 colher de sopa de suco de limão espremido na hora",
      "1 colher de sopa de azeite de oliva",
      "2 colheres de sopa de folhas de hortelã fresca e salsinha picadas",
      "Sal e pimenta-do-reino moída na hora"
    ],
    instructions: [
      "Em uma tigela pequena, adicione o iogurte natural e misture com o suco de limão e o azeite.",
      "Pique as ervas frescas muito finamente com uma faca e incorpore ao creme.",
      "Tempere com uma pitada de sal e pimenta-do-reino. Fica sensacional servido gelado por cima de ovos mexidos."
    ]
  },
  {
    title: "🍯 3. Molho de Mostarda e Mel Saudável",
    desc: "Equilíbrio doce-azedo para dar um toque gourmet a ovos pochê ou saladas no dia a dia.",
    ingredients: [
      "2 colheres de sopa de mostarda amarela (ou mostarda dijon para sabor mais intenso)",
      "1 colher de sopa de mel silvestre puro",
      "2 colheres de sopa de azeite de oliva extra virgem",
      "1 colher de chá de vinagre de maçã",
      "1 colher de sopa de água morna para ajustar a espessura"
    ],
    instructions: [
      "Misture a mostarda, o mel, o azeite de oliva e o vinagre de maçã em um recipiente pequeno.",
      "Misture vigorosamente com um batedor pequeno de arame ou garfo até emulsionar perfeitamente.",
      "Se estiver muito denso, adicione a colher de água filtrada para torná-lo mais fluido."
    ]
  },
  {
    title: "🥑 4. Maionese Verde de Clara de Ovo",
    desc: "Maionese ultra cremosa livre de óleos vegetais refinados e rica em proteínas limpas.",
    ingredients: [
      "2 ovos inteiros cozidos firmes por 10 minutos",
      "1 colher de sopa de azeite de oliva extra virgem",
      "1/2 xícara de salsinha e cebolinha picadas (cheiro verde)",
      "1 colher de sopa de suco de limão",
      "1 dente de alho pequeno (opcional)",
      "Sal e pimenta a gosto"
    ],
    instructions: [
      "Corte os ovos cozidos ainda mornos e adicione no copo do mixer.",
      "Adicione o azeite de oliva, o suco de limão, o cheiro verde picado, o alho e o sal.",
      "Bata com o mixer de mão na velocidade máxima por 1 a 2 minutos até virar uma maionese bem verde e cremosa."
    ]
  },
  {
    title: "🍅 5. Vinagrete Especial com Sementes de Chia",
    desc: "Perfeito para cobrir ovos fritos de gema mole e adicionar fibras saciantes.",
    ingredients: [
      "1 tomate italiano firme picado em cubinhos",
      "1/2 cebola roxa picada finamente",
      "2 colheres de sopa de azeite de oliva",
      "1 colher de sopa de vinagre de maçã",
      "1 colher de sopa de sementes de chia",
      "Salsinha picada e sal marinho"
    ],
    instructions: [
      "Em um pote, misture o tomate, a cebola e a salsinha.",
      "Adicione o azeite de oliva, o vinagre de maçã e tempere com uma pitada de sal.",
      "Incorpore a chia seca por último. Deixe descansar por 15 minutos na geladeira para a chia hidratar e criar textura."
    ]
  },
  {
    title: "🧂 6. Mix de Temperos Secos 'Egg Dust'",
    desc: "O segredo para polvilhar sobre qualquer receita rápida com ovos e dar um toque defumado irresistível.",
    ingredients: [
      "1 colher de sopa de páprica defumada",
      "1 colher de sopa de alho desidratado em pó",
      "1 colher de sopa de cebola desidratada em pó",
      "1 colher de chá de cúrcuma (açafrão-da-terra) pura",
      "1/2 colher de chá de pimenta caiena moída (opcional)",
      "1 colher de sopa de orégano seco",
      "1 colher de chá de flor de sal"
    ],
    instructions: [
      "Combine todos os temperos secos em uma tigela pequena e misture bem.",
      "Transfira a mistura para um saleiro ou pote de vidro hermético.",
      "Polvilhe generosamente por cima de ovos fritos, mexidos, cozidos ou omeletes no momento de servir!"
    ]
  }
];

export const preservationGuide: ConservationItem[] = [
  {
    title: "🥚 Regras de Ouro dos Ovos",
    subtitle: "Armazenamento seguro para evitar contaminações e prolongar a durabilidade",
    points: [
      "**Geladeira sempre:** Nunca guarde os ovos na porta da geladeira. O abre e fecha gera choque térmico constante que acelera a deterioração e facilita a proliferação de bactérias (Salmonella). Mantenha-os nas prateleiras internas, preferencialmente na embalagem original ou pote fechado.",
      "**Não lave antes de guardar:** Os ovos possuem uma película protetora natural invisível. Lavá-los remove essa película, abrindo os poros da casca e permitindo que bactérias de fora entrem. Se precisar limpar, use papel toalha seco e lave apenas imediatamente antes do consumo.",
      "**Durabilidade dos Cozidos:** Ovos cozidos com casca duram até 7 dias na geladeira. Se você descascar, guarde em recipiente fechado com água fria cobrindo-os e consuma em no máximo 2 dias."
    ]
  },
  {
    title: "🍱 Conservação de Marmitas e Pratos Prontos",
    subtitle: "Dicas de resfriamento e técnicas para reaquecer as receitas do app",
    points: [
      "**Tempo limite fora do frio:** Nunca deixe preparações prontas com ovos (omeletes, crepiocas, muffins) por mais de 1 hora em temperatura ambiente pós-cozimento.",
      "**Potes de vidro:** Prefira recipientes de vidro com tampa hermética em vez de plástico. O vidro preserva melhor o sabor fresco do ovo, evita a absorção de cheiros na geladeira e facilita o aquecimento uniforme.",
      "**Prazo na geladeira:** Pratos prontos com ovos duram com sabor e segurança ótimos de 3 a 4 dias sob refrigeração perfeita.",
      "**Como reaquecer sem ressecar:** Evite micro-ondas na potência máxima por muito tempo para os ovos não ficarem borrachudos. Prefira aquecer em fogo bem baixo numa frigideira tampada com um fio de água ou manteiga para criar vapor quente."
    ]
  },
  {
    title: "❄️ Como Congelar Pratos do Cardápio",
    subtitle: "Quais receitas podem ir ao freezer e como descongelá-las de forma segura",
    points: [
      "**O que congela super bem:** Crepiocas salgadas, muffins de ovo assados, quiches e omeletes simples congelam com excelente resultado por até 45 dias no freezer.",
      "**O que NÃO deve congelar:** Ovos cozidos inteiros (a clara fica com textura de borracha aguada) e maioneses (vão talhar e separar os óleos ao descongelar).",
      "**Como congelar:** Espere esfriar completamente, embale individualmente em plástico filme ou saquinhos herméticos livres de BPA, retirando o máximo de ar possível.",
      "**Descongelamento seguro:** Transfira o lanche do freezer para a geladeira na noite anterior. Na hora de comer, aqueça rapidamente na frigideira tampada ou airfryer a 160°C para devolver a consistência fresca e crocante."
    ]
  },
  {
    title: "🥬 Conservação de Ingredientes Complementares",
    subtitle: "Como manter espinafre, brócolis, tapioca e farinhas sempre frescos",
    points: [
      "**Goma de Tapioca:** Após abrir o pacote, mantenha-o sempre sob refrigeração na geladeira e bem vedado. Consuma em até 7 dias. Se notar cheiro azedo, descarte.",
      "**Folhas verdes (espinafre, couve):** Lave bem, seque completamente na centrífuga de saladas. Guarde em pote de vidro com folhas de papel toalha intercaladas entre as camadas. O papel absorve o excesso de umidade e faz as folhas durarem o dobro do tempo.",
      "**Farinhas saudáveis (linhaça, aveia):** Guarde-as em potes de vidro herméticos em armário escuro e fresco. Atenção para a farinha de linhaça: após triturada, guarde-a sempre na geladeira para evitar que os óleos saudáveis oxidem e fiquem rançosos."
    ]
  }
];
