/**
 * DIÁRIO 360 — LÓGICA EDITORIAL E DADOS JORNALÍSTICOS
 * Modelo de Imprensa Real (Poder360 + CNN Brasil)
 */

// Banco de Dados de Notícias Reais de Brasília
const INITIAL_ARTICLES = [
  {
    id: 1,
    category: "politica",
    categoryLabel: "PLANALTO & MINISTÉRIOS",
    chapeu: "BASTIDORES DO PODER",
    title: "Governo e cúpula do Congresso selam acordo para destravar votação de diretrizes fiscais",
    subtitle: "Entendimento preserva teto de investimentos prioritários na Esplanada e assegura emendas parlamentares antes de viagens oficiais de líderes à Ásia.",
    bullets: [
      "Acordo prevê <mark class=\"marker-highlight\">votação nominal no plenário do Senado até a próxima quinta-feira</mark> com quórum qualificado.",
      "Ministério da Fazenda concorda com liberação escalonada de emendas de bancada para estados do Nordeste e Sul.",
      "Lideranças do centrão garantem apoio formal para rejeitar destaques da oposição que desidratavam a arrecadação.",
      "Mercado financeiro reagiu com <mark class=\"marker-highlight\">alívio na curva de juros futuros</mark> e queda na cotação do dólar comercial."
    ],
    content: `
      <p>BRASÍLIA — Em uma rodada de conversas que se estendeu até a madrugada na residência oficial da presidência da Câmara, interlocutores diretos do Palácio do Planalto e presidentes de partidos fecharam os termos de um pacto para garantir a estabilidade das regras de despesas federais.</p>
      
      <div class="official-quote">"O Brasil precisa de previsibilidade orçamentária para que a curva de juros continue cedendo e o investimento produtivo encontre segurança jurídica", ressaltou o titular da Fazenda ao término do encontro.</div>
      
      <p>Pelo acordo costurado, a equipe econômica aceitou calibrar os gatilhos fiscais de forma a proteger os programas de infraestrutura e transição energética. Em contrapartida, as lideranças partidárias se comprometeram a votar a matéria sem criar brechas para despesas extrateto nos próximos dois exercícios financeiros.</p>
      
      <p>A oposição anunciou que apresentará destaques em plenário para contestar medidas de tributação setorial, mas parlamentares governistas sustentam que a base conta com margem superior a 320 votos favoráveis para aprovar o texto-base sem modificações de mérito.</p>
    `,
    author: "Fabio Vasconcellos",
    authorRole: "Editor de Política em Brasília",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    caption: "Cúpulas do Congresso Nacional durante a sessão deliberativa extraordinária. Foto: Marcelo Camargo / Agência Brasil",
    readTime: "4 min de leitura",
    date: "23 de outubro de 2026 às 15h10",
    isLead: true,
    tags: ["Congresso", "Orçamento", "Fazenda", "Esplanada", "Política Fiscal"]
  },
  {
    id: 2,
    category: "economia",
    categoryLabel: "MACROECONOMIA & MERCADO",
    chapeu: "BANCO CENTRAL",
    title: "Ata do Copom aponta arrefecimento na inflação de serviços e reitera prudência nos juros",
    subtitle: "Diretoria do Banco Central destaca que pleno emprego e pressões externas demandam manutenção de taxa em nível contracionista.",
    bullets: [
      "Documento aponta que <mark class=\"marker-highlight\">IPCA acumulado em 12 meses recuou para 4,24%</mark>, dentro da banda de tolerância do CMN.",
      "Mercado de trabalho aquecido segue como o principal foco de atenção para as projeções do primeiro trimestre de 2027.",
      "Dólar operou em leve queda, cotado a R$ 5,432, acompanhando a melhora na percepção de risco soberano."
    ],
    content: `
      <p>SÃO PAULO — A ata da 265ª reunião do Comitê de Política Monetária (Copom), divulgada na manhã desta quinta-feira pelo Banco Central, reforçou a mensagem de cautela em relação ao ritmo de flexibilização da taxa Selic, atualmente em 10,75% ao ano.</p>
      <p>Os diretores observaram que a trajetória dos preços de alimentos e bens industrializados tem mostrado comportamento benigno, mas os serviços intensivos em mão de obra ainda requerem monitoramento constante.</p>
    `,
    author: "Renata Aguiar",
    authorRole: "Correspondente de Economia na B3",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    caption: "Edifício-sede do Banco Central em Brasília. Foto: Divulgação / BC",
    readTime: "3 min de leitura",
    date: "23 de outubro de 2026 às 14h40",
    isSub: true,
    tags: ["Banco Central", "Selic", "Copom", "Inflação", "Mercado"]
  },
  {
    id: 3,
    category: "judiciario",
    categoryLabel: "SUPREMO TRIBUNAL FEDERAL",
    chapeu: "DIREITO & TECNOLOGIA",
    title: "STF consolida maioria para fixar dever de moderação de plataformas em crimes graves",
    subtitle: "Julgamento histórico estabelece regras de remoção rápida de contas sem necessidade de prévia ordem judicial em casos de ameaça à vida.",
    bullets: [
      "Placar atingiu 6 a 2 em favor do voto do relator no Plenário do Supremo.",
      "Empresas de redes sociais terão prazo de <mark class=\"marker-highlight\">90 dias para publicar relatórios de integridade</mark> auditados.",
      "Decisão preserva a liberdade de manifestação de opinião, mas coíbe impulsionamento pago de golpes e fraudes."
    ],
    content: `
      <p>BRASÍLIA — O Plenário do Supremo Tribunal Federal concluiu o julgamento conjunto dos recursos que discutem a responsabilidade civil dos provedores de internet e aplicações digitais no Brasil.</p>
      <div class="official-quote">"A internet brasileira não pode ser uma trincheira para a proliferação de crimes contra vulneráveis e desestabilização institucional sob o manto da omissão algorítmica", afirmou o relator em seu voto.</div>
      <p>A tese fixada preserva os fundamentos do Marco Civil da Internet para casos gerais, mas estabelece o dever de resposta imediata das plataformas em denúncias de pedofilia, terrorismo e fraudes financeiras com transações via Pix.</p>
    `,
    author: "Carlos Mendonça",
    authorRole: "Analista de Tribunais Superiores",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    caption: "Fachada do Supremo Tribunal Federal, Praça dos Três Poderes. Foto: Nelson Jr. / SCO / STF",
    readTime: "5 min de leitura",
    date: "23 de outubro de 2026 às 13h15",
    isSub: true,
    tags: ["STF", "Justiça", "Internet", "Regulação", "Marco Civil"]
  },
  {
    id: 4,
    category: "internacional",
    categoryLabel: "GEOPOLÍTICA & COMÉRCIO",
    chapeu: "DIPLOMACIA",
    title: "Cúpula do G20 avança em declaração de cooperação tributária sobre grandes fortunas",
    subtitle: "Proposta liderada pelo Brasil reúne apoio de europeus e emergentes em busca de consenso antes da cúpula de líderes.",
    bullets: [
      "Texto preliminar prevê alíquota mínima coordenada para coibir a evasão fiscal digital.",
      "Delegações de Washington e Bruxelas concordam com rodada de consultas técnicas em Genebra.",
      "Documento final deve ser assinado pelos chefes de Estado na sessão de encerramento."
    ],
    content: `
      <p>RIO DE JANEIRO — Negociadores das maiores economias do mundo alcançaram nesta tarde um princípio de redação consensual para o capítulo tributário da declaração de líderes do G20.</p>
      <p>A formulação, capitaneada pela chancelaria e pelo Ministério da Fazenda, propõe um arcabouço comum de compartilhamento de dados fiscais entre países membros para monitorar patrimônios offshore e fluxos oriundos de supercomputação.</p>
    `,
    author: "Mariana Duarte",
    authorRole: "Enviada Especial a Cúpulas Internacionais",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    caption: "Mesa diretora das delegações plenárias do G20. Foto: Agência Brasil / Divulgação",
    readTime: "4 min de leitura",
    date: "23 de outubro de 2026 às 12h00",
    isSub: true,
    tags: ["G20", "Geopolítica", "Economia", "Tributação"]
  }
];

// Radar do Poder / Minuto a Minuto (Estilo Agência Oficial)
const INITIAL_WIRE = [
  { time: "16:04", title: "Câmara aprova urgência de projeto sobre incentivos ao setor de semicondutores", cat: "Congresso" },
  { time: "15:48", title: "Dólar comercial fecha cotado a R$ 5,432 com fluxo estrangeiro e exterior calmo", cat: "Economia" },
  { time: "15:22", title: "Tesouro Nacional capta US$ 2,5 bilhões com títulos verdes soberanos em Nova York", cat: "Economia" },
  { time: "14:50", title: "Ministério da Agricultura eleva projeção de colheita de grãos para 318 milhões de t", cat: "Economia" },
  { time: "14:15", title: "Comissão de Constituição e Justiça pauta PEC sobre mandato de ministros do STF", cat: "Judiciário" },
  { time: "13:30", title: "Petrobras inicia operação de nova plataforma no pré-sal da Bacia de Santos", cat: "Economia" },
  { time: "12:10", title: "Pacheco e Lira alinham pauta da sessão conjunta do Congresso para votação de vetos", cat: "Congresso" }
];

// Colunistas Reais de Imprensa
const COLUMNISTS = [
  {
    name: "Helena Prado",
    role: "Bastidores do Planalto & Eleições",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    title: "O xadrez da presidência da Câmara: por que o centro controla o relógio da Esplanada",
    snippet: "Nos corredores do poder em Brasília, a sucessão na mesa diretora dita o ritmo de cada votação econômica."
  },
  {
    name: "Eduardo Camargo",
    role: "Macroeconomia & Finanças",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    title: "A âncora invisível: o custo real do endividamento para o investimento produtivo privado",
    snippet: "Os números do balanço fiscal revelam que a disciplina orçamentária é a única garantia de corte sustentável da Selic."
  },
  {
    name: "Beatriz Nogueira",
    role: "Supremo & Constituição",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
    title: "Ativismo em debate: até onde vai a autorregulação do STF sem atrito com o Legislativo",
    snippet: "A demarcação de competências entre os Três Poderes passa pelo julgamento das regras de transparência nas redes."
  },
  {
    name: "Marcus Vinicius",
    role: "Infraestrutura & Agro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    title: "Ferrovias e hidrovias: o escoamento eficiente pode destravar mais 1% de crescimento no PIB",
    snippet: "Com safra recorde nos armazéns, a modernização dos portos do Arco Norte se consolida como prioridade estratégica."
  }
];

// Dados da Divisão de Pesquisas PoderData
const PODERDATA_SETS = {
  aprovacao: {
    title: "Avaliação da Gestão Federal (PoderData)",
    subtitle: "Pergunta: Você aprova ou desaprova o desempenho geral da administração federal?",
    labels: ["Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26", "Out/26"],
    datasets: [
      { name: "Aprova", color: "#15803D", data: [48, 50, 49, 52, 53, 54] },
      { name: "Desaprova", color: "#B91C1C", data: [44, 43, 44, 41, 40, 39] },
      { name: "Não sabe / Regular", color: "#6B7280", data: [8, 7, 7, 7, 7, 7] }
    ],
    stats: [
      { label: "Aprovação", value: "54%", color: "#15803D" },
      { label: "Desaprovação", value: "39%", color: "#B91C1C" },
      { label: "Saldo Líquido", value: "+15 pts", color: "#D97706" }
    ]
  },
  inflacao: {
    title: "Expectativa de Preços e Inflação (PoderData)",
    subtitle: "Pergunta: Nos próximos 6 meses, os preços dos alimentos e serviços vão subir, cair ou ficar estáveis?",
    labels: ["Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26", "Out/26"],
    datasets: [
      { name: "Vão subir", color: "#B91C1C", data: [58, 55, 52, 49, 46, 44] },
      { name: "Ficar iguais", color: "#2563EB", data: [26, 28, 30, 32, 35, 37] },
      { name: "Vão cair", color: "#15803D", data: [16, 17, 18, 19, 19, 19] }
    ],
    stats: [
      { label: "Preveem alta", value: "44%", color: "#B91C1C" },
      { label: "Estabilidade", value: "37%", color: "#2563EB" },
      { label: "Otimismo", value: "56%", color: "#15803D" }
    ]
  },
  congresso: {
    title: "Avaliação do Congresso Nacional (Câmara e Senado)",
    subtitle: "Pergunta: Como você avalia a atuação dos deputados federais e senadores?",
    labels: ["Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26", "Out/26"],
    datasets: [
      { name: "Ótimo / Bom", color: "#15803D", data: [18, 20, 21, 23, 24, 26] },
      { name: "Regular", color: "#D97706", data: [42, 41, 43, 44, 45, 46] },
      { name: "Ruim / Péssimo", color: "#B91C1C", data: [40, 39, 36, 33, 31, 28] }
    ],
    stats: [
      { label: "Positiva", value: "26%", color: "#15803D" },
      { label: "Regular", value: "46%", color: "#D97706" },
      { label: "Negativa", value: "28%", color: "#B91C1C" }
    ]
  }
};

// Programação TV 360
const TV_PLAYLIST = [
  {
    title: "Debate Brasília: O impasse do teto orçamentário e a pauta da sucessão parlamentar",
    author: "Bancada Diário 360",
    thumb: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Entrevista Exclusiva: Secretário de Reformas Econômicas explica nova alíquota do IVA",
    author: "Direto da Esplanada",
    thumb: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Giro B3: Como a ata do Copom e os dados dos EUA mexem com a curva de juros",
    author: "Mercados ao Vivo",
    thumb: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=300&q=80"
  }
];

class NewspaperApp {
  constructor() {
    this.articles = this.loadArticles();
    this.wireItems = [...INITIAL_WIRE];
    this.currentChartKey = 'aprovacao';
    this.isPlayingAudio = false;
    this.audioProgress = 0;
    this.audioInterval = null;
    this.activeCategory = 'todos';
    this.activeWireFilter = 'todos';
    this.fontSizeRem = 1.18;
    this.isPipClosed = false;

    this.init();
  }

  loadArticles() {
    const saved = localStorage.getItem('diario360_real_articles');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_ARTICLES;
  }

  saveArticles() {
    localStorage.setItem('diario360_real_articles', JSON.stringify(this.articles));
  }

  init() {
    this.renderFrontPage();
    this.renderWire();
    this.renderPoderDataChart(this.currentChartKey);
    this.renderColumnists();
    this.renderPlaylist();
    this.setupEventListeners();
    this.setupReadingProgress();
    this.startMarketSimulation();
  }

  // ==========================================
  // RENDERIZAÇÃO DA CAPA EDITORIAL
  // ==========================================
  renderFrontPage() {
    const leadContainer = document.getElementById('leadStoryContainer');
    const subContainer = document.getElementById('leadSubgridContainer');
    if (!leadContainer || !subContainer) return;

    let filtered = this.articles;
    if (this.activeCategory !== 'todos') {
      filtered = this.articles.filter(a => a.category === this.activeCategory);
      if (filtered.length === 0) filtered = this.articles;
    }

    const lead = filtered[0] || this.articles[0];
    const subs = filtered.slice(1, 3);

    // 1. Super Manchete
    leadContainer.innerHTML = `
      <div class="lead-chapeu-row">
        <span class="chapeu-tag">${lead.chapeu || 'BASTIDORES'}</span>
        <span class="chapeu-time">Publicado às ${lead.date.split('às')[1] || '15h10'}</span>
      </div>
      <h2 class="lead-title-link" onclick="app.openArticle(${lead.id})">${lead.title}</h2>
      <p class="lead-deck">${lead.subtitle}</p>

      <div class="lead-photo-frame">
        <img src="${lead.image}" alt="${lead.title}">
        <div class="lead-photo-credit">${lead.caption}</div>
      </div>

      <!-- Resumo Estilo Poder360 Marca-Texto -->
      <div class="lead-takeaways-highlight">
        <div class="takeaways-label"><i class="fa-solid fa-bookmark"></i> O QUE VOCÊ PRECISA SABER:</div>
        <ul class="takeaways-points">
          ${lead.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>

      <div class="lead-byline-meta">
        <strong>Reportagem de ${lead.author}</strong> • ${lead.authorRole}
      </div>
    `;

    // 2. Notícias Complementares (Fio de chumbo duplo)
    subContainer.innerHTML = subs.map(sub => `
      <article class="subgrid-article" onclick="app.openArticle(${sub.id})">
        <div class="subgrid-photo">
          <img src="${sub.image}" alt="${sub.title}">
        </div>
        <span class="subgrid-chapeu">${sub.chapeu || sub.categoryLabel}</span>
        <h3 class="subgrid-title">${sub.title}</h3>
        <p class="subgrid-summary">${sub.subtitle}</p>
        <span class="subgrid-meta">Por ${sub.author} • ${sub.readTime}</span>
      </article>
    `).join('');

    // Atualiza Plantão de Última Hora
    const breakingTitle = document.getElementById('breakingTitle');
    if (breakingTitle) {
      breakingTitle.textContent = lead.title;
      breakingTitle.onclick = () => this.openArticle(lead.id);
    }
  }

  // ==========================================
  // RADAR DO PODER (TEMPO REAL)
  // ==========================================
  renderWire() {
    const container = document.getElementById('wireStreamContainer');
    if (!container) return;

    let items = this.wireItems;
    if (this.activeWireFilter !== 'todos') {
      items = this.wireItems.filter(i => i.cat.toLowerCase() === this.activeWireFilter.toLowerCase());
    }

    container.innerHTML = items.map(item => `
      <div class="feed-wire-item" onclick="app.showToast('Despacho de agência: ' + '${item.title.replace(/'/g, "\\'")}')">
        <div class="wire-time-tag">${item.time} — ${item.cat.toUpperCase()}</div>
        <div class="wire-headline">${item.title}</div>
      </div>
    `).join('');
  }

  filterWire(category) {
    this.activeWireFilter = category;
    document.querySelectorAll('.filter-chip').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase().includes(category.toLowerCase()));
    });
    this.renderWire();
  }

  // ==========================================
  // GRÁFICO PODERDATA (ESTILO JORNAL LIMPO)
  // ==========================================
  switchChart(key) {
    this.currentChartKey = key;
    document.querySelectorAll('.pd-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('onclick').includes(key));
    });
    this.renderPoderDataChart(key);
    this.showToast(`Pesquisa atualizada: ${PODERDATA_SETS[key].title}`);
  }

  renderPoderDataChart(datasetKey) {
    const dataObj = PODERDATA_SETS[datasetKey];
    if (!dataObj) return;

    document.getElementById('chartTitle').textContent = dataObj.title;
    document.getElementById('chartSubtitle').textContent = dataObj.subtitle;

    // Stats
    const statsContainer = document.getElementById('chartStatsSummary');
    if (statsContainer) {
      statsContainer.innerHTML = dataObj.stats.map(s => `
        <div class="pd-stat-box">
          <div class="pd-stat-num" style="color: ${s.color}">${s.value}</div>
          <div class="pd-stat-lbl">${s.label}</div>
        </div>
      `).join('');
    }

    const canvas = document.getElementById('dataChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padding = { top: 25, right: 25, bottom: 35, left: 40 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Linhas de Grade de Jornal
    ctx.strokeStyle = "#E5E7EB";
    ctx.lineWidth = 1;

    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      ctx.fillStyle = "#6B7280";
      ctx.font = "10px Inter, sans-serif";
      ctx.textAlign = "right";
      const val = Math.round(80 - (80 / 4) * i);
      ctx.fillText(val + "%", padding.left - 6, y + 3);
    }

    const stepX = chartW / (dataObj.labels.length - 1);

    // Linhas de Dados
    dataObj.datasets.forEach(ds => {
      ctx.strokeStyle = ds.color;
      ctx.lineWidth = 2.8;
      ctx.beginPath();

      ds.data.forEach((val, idx) => {
        const x = padding.left + idx * stepX;
        const y = padding.top + chartH - (val / 80) * chartH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Pontos
      ds.data.forEach((val, idx) => {
        const x = padding.left + idx * stepX;
        const y = padding.top + chartH - (val / 80) * chartH;

        ctx.fillStyle = ds.color;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#111827";
        ctx.font = "bold 11px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(val + "%", x, y - 7);
      });
    });

    // Rótulos do Eixo X
    ctx.fillStyle = "#4B5563";
    ctx.font = "11px Inter, sans-serif";
    ctx.textAlign = "center";
    dataObj.labels.forEach((lbl, idx) => {
      const x = padding.left + idx * stepX;
      ctx.fillText(lbl, x, height - padding.bottom + 18);
    });
  }

  exportChartImage() {
    const srcCanvas = document.getElementById('dataChart');
    if (!srcCanvas) return;

    const expCanvas = document.createElement('canvas');
    expCanvas.width = 800;
    expCanvas.height = 440;
    const expCtx = expCanvas.getContext('2d');

    // Fundo limpo de jornal
    expCtx.fillStyle = "#FFFFFF";
    expCtx.fillRect(0, 0, expCanvas.width, expCanvas.height);

    // Cabeçalho Oficial
    expCtx.fillStyle = "#CC0000";
    expCtx.font = "bold 13px Inter, sans-serif";
    expCtx.fillText("DIÁRIO 360 • DIVISÃO DE PESQUISAS PODERDATA", 30, 36);

    expCtx.fillStyle = "#111827";
    expCtx.font = "bold 20px Georgia, serif";
    expCtx.fillText(PODERDATA_SETS[this.currentChartKey].title, 30, 68);

    expCtx.strokeStyle = "#111827";
    expCtx.lineWidth = 1;
    expCtx.beginPath();
    expCtx.moveTo(30, 82);
    expCtx.lineTo(770, 82);
    expCtx.stroke();

    expCtx.drawImage(srcCanvas, 30, 96, 740, 280);

    expCtx.fillStyle = "#6B7280";
    expCtx.font = "11px Inter, sans-serif";
    expCtx.fillText("Fonte: Pesquisa PoderData / Metodologia Aberta e Auditada • Registro TSE/Nacional", 30, 415);

    const link = document.createElement('a');
    link.download = `poderdata_grafico_${this.currentChartKey}.png`;
    link.href = expCanvas.toDataURL('image/png');
    link.click();

    this.showToast("✓ Gráfico de pesquisa exportado com sucesso!");
  }

  // ==========================================
  // COLUNISTAS DE VERDADE
  // ==========================================
  renderColumnists() {
    const container = document.getElementById('columnistsContainer');
    if (!container) return;

    container.innerHTML = COLUMNISTS.map(col => `
      <div class="col-card-real" onclick="app.showToast('Coluna de: ' + '${col.name}')">
        <div class="col-author-strip">
          <img src="${col.avatar}" alt="${col.name}" class="col-headshot">
          <div class="col-author-meta">
            <strong>${col.name}</strong>
            <span>${col.role}</span>
          </div>
        </div>
        <h4 class="col-headline">"${col.title}"</h4>
        <p class="col-lead-snippet">${col.snippet}</p>
      </div>
    `).join('');
  }

  // ==========================================
  // PLAYLIST TV 360
  // ==========================================
  renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;

    container.innerHTML = TV_PLAYLIST.map(item => `
      <div class="playlist-item-card" onclick="app.openLiveModal()">
        <img src="${item.thumb}" alt="${item.title}" class="playlist-thumb">
        <div class="playlist-info">
          <h5>${item.title}</h5>
          <span>${item.author}</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // NAVEGAÇÃO & LEITOR DE ARTIGO
  // ==========================================
  openArticle(id) {
    const art = this.articles.find(a => a.id === id) || this.articles[0];

    document.getElementById('artBreadcrumbCat').textContent = art.categoryLabel;
    document.getElementById('artScopeBadge').textContent = art.chapeu || 'BASTIDORES DO PODER';
    document.getElementById('artHeadline').textContent = art.title;
    document.getElementById('artSubheadline').textContent = art.subtitle;
    document.getElementById('artAuthorAvatar').src = art.authorAvatar;
    document.getElementById('artAuthorName').textContent = `Por ${art.author}, ${art.authorRole}`;
    document.getElementById('artPubDate').textContent = `${art.date} • ${art.readTime}`;
    document.getElementById('artImage').src = art.image;
    document.getElementById('artImageCaption').textContent = art.caption;
    document.getElementById('artBody').innerHTML = art.content;

    // Resumo Poder360 Marca-Texto
    const bulletsEl = document.getElementById('artSummaryBullets');
    if (bulletsEl) {
      bulletsEl.innerHTML = art.bullets.map(b => `<li>${b}</li>`).join('');
    }

    // Relacionadas
    const relatedEl = document.getElementById('relatedNewsGrid');
    if (relatedEl) {
      const others = this.articles.filter(a => a.id !== art.id).slice(0, 3);
      relatedEl.innerHTML = others.map(o => `
        <div class="related-story-card" onclick="app.openArticle(${o.id})">
          <img src="${o.image}" alt="${o.title}">
          <h5>${o.title}</h5>
        </div>
      `).join('');
    }

    document.getElementById('homeView').classList.remove('active');
    document.getElementById('articleView').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.resetAudio();
  }

  backToHome() {
    document.getElementById('articleView').classList.remove('active');
    document.getElementById('homeView').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.resetAudio();
  }

  filterCategory(cat) {
    this.activeCategory = cat;
    document.querySelectorAll('.nav-links li').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-cat') === cat);
    });
    this.backToHome();
    this.renderFrontPage();
    this.showToast(`Editoria selecionada: ${cat.toUpperCase()}`);
  }

  // ==========================================
  // FERRAMENTAS DE LEITURA
  // ==========================================
  setupReadingProgress() {
    const progBar = document.getElementById('readingProgressBar');
    const pipBox = document.getElementById('pipPlayerBox');
    const multimediaSec = document.getElementById('multimediaSection');

    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0 && progBar) {
        const scrolled = (window.scrollY / docHeight) * 100;
        progBar.style.width = scrolled + '%';
      }

      if (pipBox && multimediaSec && !this.isPipClosed) {
        const rect = multimediaSec.getBoundingClientRect();
        if (rect.bottom < 0) pipBox.classList.add('active');
        else pipBox.classList.remove('active');
      }
    });
  }

  adjustFontSize(delta) {
    this.fontSizeRem = Math.max(1.0, Math.min(1.5, this.fontSizeRem + (delta * 0.1)));
    document.documentElement.style.setProperty('--article-font-size', `${this.fontSizeRem}rem`);
    this.showToast(`Tamanho da tipografia: ${Math.round((this.fontSizeRem / 1.18) * 100)}%`);
  }

  resetFontSize() {
    this.fontSizeRem = 1.18;
    document.documentElement.style.setProperty('--article-font-size', '1.18rem');
  }

  closePip() {
    document.getElementById('pipPlayerBox').classList.remove('active');
    this.isPipClosed = true;
  }

  // ==========================================
  // ÁUDIO NARRADO (IA TTS)
  // ==========================================
  toggleAudioTTS() {
    const icon = document.getElementById('audioPlayIcon');
    const fill = document.getElementById('audioProgressFill');
    const timer = document.getElementById('audioTimer');

    if (this.isPlayingAudio) {
      clearInterval(this.audioInterval);
      this.isPlayingAudio = false;
      icon.className = 'fa-solid fa-play';
      this.showToast("Áudio pausado");
    } else {
      this.isPlayingAudio = true;
      icon.className = 'fa-solid fa-pause';
      this.showToast("Reproduzindo reportagem narrada...");

      this.audioInterval = setInterval(() => {
        this.audioProgress += 1;
        if (this.audioProgress > 100) {
          this.resetAudio();
          return;
        }
        fill.style.width = this.audioProgress + '%';
        const currentSec = Math.floor((this.audioProgress / 100) * 225);
        const mins = Math.floor(currentSec / 60).toString().padStart(2, '0');
        const secs = (currentSec % 60).toString().padStart(2, '0');
        timer.textContent = `${mins}:${secs} / 03:45`;
      }, 500);
    }
  }

  resetAudio() {
    clearInterval(this.audioInterval);
    this.isPlayingAudio = false;
    this.audioProgress = 0;
    const icon = document.getElementById('audioPlayIcon');
    const fill = document.getElementById('audioProgressFill');
    const timer = document.getElementById('audioTimer');
    if (icon) icon.className = 'fa-solid fa-play';
    if (fill) fill.style.width = '0%';
    if (timer) timer.textContent = '00:00 / 03:45';
  }

  // ==========================================
  // BUSCA E REDAÇÃO (CMS)
  // ==========================================
  setupEventListeners() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', target);
      themeIcon.className = target === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      themeBtn.querySelector('span').textContent = target === 'dark' ? 'Modo Diurno' : 'Modo Noturno';
      localStorage.setItem('diario360_real_theme', target);
      this.showToast(`Visual alterado para: Modo ${target === 'dark' ? 'Noturno' : 'Diurno'}`);
    });

    const saved = localStorage.getItem('diario360_real_theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
      themeIcon.className = saved === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      themeBtn.querySelector('span').textContent = saved === 'dark' ? 'Modo Diurno' : 'Modo Noturno';
    }

    const searchTrigger = document.getElementById('searchTrigger');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchTrigger.addEventListener('click', () => {
      searchModal.classList.add('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
      setTimeout(() => searchInput.focus(), 100);
    });

    closeSearch.addEventListener('click', () => searchModal.classList.remove('active'));

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      const matches = this.articles.filter(a => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q));
      searchResults.innerHTML = matches.map(m => `
        <div class="search-result-item" onclick="app.openArticle(${m.id}); document.getElementById('searchModal').classList.remove('active');">
          <span style="font-size: 0.68rem; font-weight: 800; color: var(--brand-red);">${m.categoryLabel}</span>
          <h4 style="font-family: var(--font-serif);">${m.title}</h4>
          <p>${m.subtitle}</p>
        </div>
      `).join('');
    });

    document.getElementById('openCmsBtn').addEventListener('click', () => this.openCms());
  }

  openCms() {
    document.getElementById('cmsModal').classList.add('active');
  }

  closeCms() {
    document.getElementById('cmsModal').classList.remove('active');
  }

  handleCmsSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('cmsTitle').value.trim();
    const subtitle = document.getElementById('cmsSubtitle').value.trim();
    const category = document.getElementById('cmsCategory').value;
    const scope = document.getElementById('cmsScope').value;
    const author = document.getElementById('cmsAuthor').value.trim();
    const image = document.getElementById('cmsImage').value.trim() || "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80";
    const bulletsRaw = document.getElementById('cmsBullets').value.trim();
    const contentRaw = document.getElementById('cmsContent').value.trim();

    const bullets = bulletsRaw ? bulletsRaw.split('\n').filter(b => b.trim()) : [
      "Reportagem apurada pela redação do Diário 360 em Brasília.",
      "Desdobramentos sob acompanhamento em tempo real.",
      "Repercussão direta nas lideranças partidárias e no mercado."
    ];

    const content = contentRaw 
      ? contentRaw.split('\n\n').map(p => `<p>${p}</p>`).join('')
      : `<p>BRASÍLIA — ${subtitle}</p><p>A cobertura completa segue em apuração permanente pelos correspondentes do Diário 360 na Esplanada e nos tribunais superiores.</p>`;

    const catLabels = {
      politica: "PLANALTO & MINISTÉRIOS",
      congresso: "CONGRESSO NACIONAL",
      economia: "MACROECONOMIA & MERCADO",
      judiciario: "SUPREMO TRIBUNAL FEDERAL",
      poderdata: "PODERDATA / DADOS",
      internacional: "GEOPOLÍTICA & COMÉRCIO"
    };

    const newArticle = {
      id: Date.now(),
      category: category,
      categoryLabel: catLabels[category] || "GERAL",
      chapeu: scope,
      title: title,
      subtitle: subtitle,
      bullets: bullets,
      content: content,
      author: author,
      authorRole: "Redação de Brasília",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      image: image,
      caption: "Foto: Cobertura Especial Diário 360",
      readTime: "3 min de leitura",
      date: "Agora mesmo",
      isLead: true,
      tags: [scope, category.toUpperCase()]
    };

    this.articles.unshift(newArticle);
    this.saveArticles();
    this.closeCms();
    document.getElementById('cmsForm').reset();
    this.renderFrontPage();
    this.showToast("✓ Notícia publicada com sucesso na capa!", "success");
  }

  openLiveModal() {
    document.getElementById('liveModal').classList.add('active');
  }

  closeLiveModal() {
    document.getElementById('liveModal').classList.remove('active');
  }

  toggleVideoPlay() {
    this.openLiveModal();
  }

  handleNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('nlEmail').value;
    document.getElementById('newsletterSuccess').innerHTML = `✓ Cadastro confirmado! O Drive 360 será enviado para <strong>${email}</strong> às 06h00.`;
    this.showToast("Inscrição no Drive 360 realizada!");
    document.getElementById('newsletterForm').reset();
  }

  share(type) {
    const url = window.location.href;
    const title = document.getElementById('artHeadline').textContent;

    if (type === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - Diário 360: ' + url)}`, '_blank');
    } else if (type === 'x') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (type === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (type === 'copy') {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast("✓ Link da reportagem copiado!");
      });
    }
  }

  startMarketSimulation() {
    setInterval(() => {
      const delta = (Math.random() * 0.03 - 0.015).toFixed(3);
      const dolarEl = document.getElementById('fin-dolar');
      if (dolarEl) {
        const isUp = parseFloat(delta) >= 0;
        dolarEl.style.color = isUp ? '#15803D' : '#B91C1C';
        setTimeout(() => dolarEl.style.color = '', 700);
      }
    }, 9000);
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Inicializa o Jornal
const app = new NewspaperApp();
