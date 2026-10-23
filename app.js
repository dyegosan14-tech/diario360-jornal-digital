/**
 * DIÁRIO 360 - JORNALISMO DIGITAL MULTIMÍDIA E ORIENTADO A DADOS
 * Integração CNN Brasil (Cobertura ao vivo e multimídia) + Poder360 (Dados e tópicos)
 * Versão 2.0 com Sparklines, PiP Player, Exportação de Gráficos e Acessibilidade
 */

// Banco de Dados Editorial Inicial
const INITIAL_ARTICLES = [
  {
    id: 1,
    category: "politica",
    categoryLabel: "POLÍTICA & PLANALTO",
    scope: "EXCLUSIVO",
    scopeClass: "badge-exclusive",
    title: "Governo costura acordo com líderes partidários e define cronograma de votação do marco orçamentário",
    subtitle: "Articulação no Congresso prevê garantia de emendas em troca de aprovação de matérias econômicas prioritárias antes do recesso.",
    bullets: [
      "Acordo prevê votação final no Senado até a próxima quinta-feira.",
      "Ministério da Fazenda concorda com ajustes graduais no teto de despesas discricionárias.",
      "Lideranças do centrão garantem quórum constitucional mínimo de 315 deputados.",
      "Mercado financeiro reagiu com alívio, e curva de juros futuros recuou 14 pontos-base."
    ],
    content: `
      <p>Em uma reunião que se estendeu até o final da madrugada no Palácio do Planalto, articuladores do governo federal selaram um termo de compromisso com presidentes de seis legendas partidárias para destravar a pauta fiscal no Congresso Nacional.</p>
      
      <div class="pull-quote">"O Brasil precisa de estabilidade nas contas para que os juros continuem a trajetória de corte sustentável e os investimentos voltem com vigor", afirmou o ministro da Fazenda após o encontro.</div>
      
      <p>O texto de consenso prevê a manutenção dos limites estruturais de despesas públicas, mas inclui salvaguardas para aportes estratégicos em infraestrutura e no programa de transição energética. A oposição sinalizou que apresentará destaques em plenário, mas admitiu que a base aliada conta com folga para rejeitar modificações no mérito.</p>
      
      <p>No Congresso, a bancada ruralista e representantes do setor de serviços comemoraram a preservação dos incentivos fiscais regionais já pactuados na reforma anterior, evitando novo contencioso com governadores.</p>
    `,
    author: "Fabio Vasconcellos",
    authorRole: "Analista Chefe de Política em Brasília",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    caption: "Congresso Nacional em Brasília durante a sessão deliberativa extraordinária. Foto: Agência Brasil",
    readTime: "4 min de leitura",
    date: "23/10/2026 às 15:10",
    isLead: true,
    isBreaking: true,
    tags: ["Congresso", "Orçamento", "Fazenda", "Brasília", "Política Fiscal"]
  },
  {
    id: 2,
    category: "economia",
    categoryLabel: "ECONOMIA & MERCADOS",
    scope: "BASTIDORES",
    scopeClass: "badge-bastidores",
    title: "Banco Central aponta alívio na inflação de serviços, mas reitera prudência em ata do Copom",
    subtitle: "Autoridade monetária destaca resiliência do mercado de trabalho e monitora cenário fiscal internacional.",
    bullets: [
      "Ata reforça que próximos passos dependerão de dados de inflação e expectativas ancoradas.",
      "IPCA acumulado em 12 meses atingiu 4,24%, dentro da banda de tolerância estipulada pelo CMN.",
      "Dólar comercial operou estável, fechando cotado a R$ 5,432 após divulgação."
    ],
    content: `
      <p>O Comitê de Política Monetária (Copom) do Banco Central divulgou na manhã desta quinta-feira a ata de sua mais recente reunião, trazendo uma avaliação equilibrada entre os avanços na desinflação e as incertezas globais.</p>
      <p>O documento ressalta que o comportamento dos preços de alimentos e energia tem surpreendido positivamente, porém os serviços intensivos em mão de obra demandam vigilância constante por conta da baixa taxa de desemprego.</p>
    `,
    author: "Renata Aguiar",
    authorRole: "Editora de Economia e Macroindicadores",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    caption: "Sede do Banco Central do Brasil em Brasília. Foto: Banco Central / Divulgação",
    readTime: "3 min de leitura",
    date: "23/10/2026 às 14:40",
    isSecondary: true,
    tags: ["Banco Central", "Selic", "Copom", "Inflação", "Mercado"]
  },
  {
    id: 3,
    category: "judiciario",
    categoryLabel: "JUDICIÁRIO / STF",
    scope: "ANÁLISE",
    scopeClass: "badge-analise",
    title: "Supremo forma maioria para fixar tese sobre responsabilidade civil de plataformas digitais",
    subtitle: "Julgamento histórico estabelece limites para remoção de conteúdos ilegais e moderação por inteligência artificial.",
    bullets: [
      "Placar atingiu 6 a 2 pelo dever de agir rápido diante de notificações de crimes flagrantes.",
      "Ministro relator ressaltou proteção da liberdade de expressão com responsabilização proporcional.",
      "Empresas de tecnologia terão prazo de 90 dias para adequar relatórios de transparência."
    ],
    content: `
      <p>O Plenário do Supremo Tribunal Federal (STF) consolidou uma das mais aguardadas teses jurídicas da década sobre a regulação do ecossistema de internet no país.</p>
      <div class="pull-quote">"A internet não é um território sem lei. A liberdade de expressão não pode ser utilizada como escudo para impunidade e agressão à democracia", frisou o relator no voto condutor.</div>
      <p>A decisão modula os efeitos do Marco Civil da Internet sem revogar seus pilares, mas exigindo mecanismos preventivos mais eficazes contra redes de desinformação automatizada e fraudes financeiras.</p>
    `,
    author: "Carlos Mendonça",
    authorRole: "Correspondente Jurídico nos Tribunais Superiores",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    caption: "Fachada do Supremo Tribunal Federal, Praça dos Três Poderes. Foto: STF",
    readTime: "5 min de leitura",
    date: "23/10/2026 às 13:15",
    isSecondary: true,
    tags: ["STF", "Justiça", "Internet", "Regulação", "Direito Digital"]
  },
  {
    id: 4,
    category: "internacional",
    categoryLabel: "INTERNACIONAL",
    scope: "DIPLOMACIA",
    scopeClass: "badge-exclusive",
    title: "Cúpula do G20 avança em pacto de cooperação tributária global sobre grandes fortunas e IA",
    subtitle: "Delegação brasileira atua como mediadora entre economias desenvolvidas e emergentes em busca de consenso.",
    bullets: [
      "Texto preliminar prevê alíquota mínima harmonizada para evitar paraísos fiscais digitais.",
      "União Europeia e Estados Unidos sinalizam convergência após rodadas bilaterais de negociação.",
      "Acordo histórico deve ser formalizado no encerramento da cúpula com líderes mundiais."
    ],
    content: `
      <p>Negociadores das maiores economias do planeta alcançaram um princípio de consenso diplomático sobre o pacote de tributação internacional que tramita na cúpula do G20 sob presidência brasileira.</p>
      <p>O plano busca criar mecanismos conjuntos para rastrear fluxos de capital derivados de sistemas autônomos e impedir a elisão fiscal de gigantes do setor de tecnologia.</p>
    `,
    author: "Mariana Duarte",
    authorRole: "Enviada Especial para Assuntos Internacionais",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    caption: "Líderes de delegações no salão principal do G20. Foto: Divulgação Internacional",
    readTime: "4 min de leitura",
    date: "23/10/2026 às 12:00",
    isSecondary: true,
    tags: ["G20", "Geopolítica", "Economia Global", "Tributação"]
  }
];

// Feed Minuto a Minuto (Wire)
const INITIAL_WIRE = [
  { time: "15:38", title: "Presidente da Câmara convoca líderes para discutir pauta da inteligência artificial", cat: "Congresso" },
  { time: "15:22", title: "Tesouro Nacional emite US$ 2 bilhões em títulos sustentáveis soberanos no exterior", cat: "Economia" },
  { time: "14:55", title: "Petrobras bate recorde trimestral de extração no pré-sal com novos poços em Búzios", cat: "Economia" },
  { time: "14:10", title: "Ministro da Agricultura prevê safra histórica de grãos acima de 315 milhões de toneladas", cat: "Economia" },
  { time: "13:42", title: "Senado conclui sabatina e aprova novo diretor da Agência Nacional de Energia Elétrica", cat: "Congresso" },
  { time: "12:50", title: "STF pauta retomada do marco temporal de terras indígenas para sessão da próxima quarta", cat: "Judiciário" },
  { time: "12:15", title: "Índice de Confiança do Consumidor sobe pelo terceiro mês consecutivo, aponta FGV", cat: "Economia" }
];

// Colunistas
const COLUMNISTS = [
  {
    name: "Helena Prado",
    role: "Bastidores do Planalto & Eleições",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    title: "O xadrez da sucessão na mesa diretora: por que o centro controla o relógio da Esplanada",
    date: "Hoje às 11h"
  },
  {
    name: "Eduardo Camargo",
    role: "Macroeconomia & Cenários Globais",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    title: "A âncora invisível: o custo real do endividamento público para o investimento privado",
    date: "Hoje às 09h"
  },
  {
    name: "Beatriz Nogueira",
    role: "Judiciário, STF e Constituição",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
    title: "O ativismo em debate: até onde vai a autorregulação do Supremo sem confronto entre poderes",
    date: "Ontem às 18h"
  },
  {
    name: "Marcus Vinicius",
    role: "Agro, Infraestrutura & Logística",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    title: "Ferrovias e hidrovias: como o escoamento eficiente pode destravar 1% a mais de PIB",
    date: "Ontem às 16h"
  }
];

// Datasets do PoderData
const PODERDATA_SETS = {
  aprovacao: {
    title: "Avaliação da Gestão Federal (PoderData)",
    subtitle: "Pergunta: Você aprova ou desaprova o desempenho geral do governo?",
    labels: ["Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26", "Out/26"],
    datasets: [
      { name: "Aprova", color: "#10B981", data: [48, 50, 49, 52, 53, 54] },
      { name: "Desaprova", color: "#EF4444", data: [44, 43, 44, 41, 40, 39] },
      { name: "Não sabe / Regular", color: "#94A3B8", data: [8, 7, 7, 7, 7, 7] }
    ],
    stats: [
      { label: "Aprovação Atual", value: "54%", color: "#10B981" },
      { label: "Desaprovação", value: "39%", color: "#EF4444" },
      { label: "Saldo Líquido", value: "+15 pts", color: "#F59E0B" }
    ]
  },
  inflacao: {
    title: "Expectativa de Inflação dos Brasileiros (PoderData)",
    subtitle: "Pergunta: Nos próximos 6 meses, os preços dos alimentos e serviços vão subir, cair ou ficar iguais?",
    labels: ["Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26", "Out/26"],
    datasets: [
      { name: "Vão subir", color: "#EF4444", data: [58, 55, 52, 49, 46, 44] },
      { name: "Ficar iguais", color: "#3B82F6", data: [26, 28, 30, 32, 35, 37] },
      { name: "Vão cair", color: "#10B981", data: [16, 17, 18, 19, 19, 19] }
    ],
    stats: [
      { label: "Preveem alta", value: "44%", color: "#EF4444" },
      { label: "Preveem estabilidade", value: "37%", color: "#3B82F6" },
      { label: "Otimismo", value: "56%", color: "#10B981" }
    ]
  },
  congresso: {
    title: "Avaliação do Congresso Nacional (Câmara e Senado)",
    subtitle: "Pergunta: Como você avalia a atuação dos deputados e senadores?",
    labels: ["Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26", "Out/26"],
    datasets: [
      { name: "Ótimo / Bom", color: "#10B981", data: [18, 20, 21, 23, 24, 26] },
      { name: "Regular", color: "#F59E0B", data: [42, 41, 43, 44, 45, 46] },
      { name: "Ruim / Péssimo", color: "#EF4444", data: [40, 39, 36, 33, 31, 28] }
    ],
    stats: [
      { label: "Positivo", value: "26%", color: "#10B981" },
      { label: "Regular", value: "46%", color: "#F59E0B" },
      { label: "Negativo", value: "28%", color: "#EF4444" }
    ]
  }
};

// Playlist TV 360
const TV_PLAYLIST = [
  {
    title: "Debate 360: As perspectivas do teto de gastos e as pressões orçamentárias",
    author: "Diário News Brasília",
    duration: "18:40",
    thumb: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Entrevista Exclusiva com o Relator da Reforma Administrativa na Câmara",
    author: "Poder em Foco",
    duration: "32:15",
    thumb: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Giro dos Mercados: Dólar, Commodities e a movimentação dos bancos centrais",
    author: "Economia ao Minuto",
    duration: "12:05",
    thumb: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=300&q=80"
  }
];

class PortalApp {
  constructor() {
    this.articles = this.loadArticles();
    this.wireItems = [...INITIAL_WIRE];
    this.currentChartKey = 'aprovacao';
    this.currentChartType = 'line'; // 'line', 'donut', 'bar'
    this.isPlayingAudio = false;
    this.audioProgress = 0;
    this.audioInterval = null;
    this.activeCategory = 'todos';
    this.activeWireFilter = 'todos';
    this.fontSizeRem = 1.15;
    this.isPipClosedManually = false;
    
    this.init();
  }

  loadArticles() {
    const saved = localStorage.getItem('diario360_articles');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Erro ao ler localStorage", e);
      }
    }
    return INITIAL_ARTICLES;
  }

  saveArticles() {
    localStorage.setItem('diario360_articles', JSON.stringify(this.articles));
  }

  init() {
    this.setupDateDisplay();
    this.renderHeroGrid();
    this.renderWireStream();
    this.renderPoderDataChart(this.currentChartKey, this.currentChartType);
    this.renderColumnists();
    this.renderCategorySections();
    this.renderTvPlaylist();
    this.setupEventListeners();
    this.setupScrollAndReadingProgress();
    this.startMarketFluctuation();
    this.startWireSimulation();
  }

  setupDateDisplay() {
    const el = document.getElementById('currentDate');
    if (el) {
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      el.textContent = "• " + now.toLocaleDateString('pt-BR', options);
    }
  }

  // ==========================================
  // BARRA DE PROGRESSO & SCROLL
  // ==========================================
  setupScrollAndReadingProgress() {
    const progressBar = document.getElementById('readingProgressBar');
    const pipBox = document.getElementById('pipPlayerBox');
    const multimediaSec = document.getElementById('multimediaSection');

    window.addEventListener('scroll', () => {
      // 1. Reading Progress
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        if (progressBar) progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
      }

      // 2. Picture-in-Picture trigger ao rolar além do vídeo
      if (pipBox && multimediaSec && !this.isPipClosedManually) {
        const rect = multimediaSec.getBoundingClientRect();
        // Se a seção multimídia já passou para cima da tela
        if (rect.bottom < 0) {
          pipBox.classList.add('active');
        } else {
          pipBox.classList.remove('active');
        }
      }
    });
  }

  closePip() {
    const pipBox = document.getElementById('pipPlayerBox');
    if (pipBox) pipBox.classList.remove('active');
    this.isPipClosedManually = true;
  }

  // ==========================================
  // FERRAMENTAS DE ACESSIBILIDADE DE TEXTO (A- / A+)
  // ==========================================
  adjustFontSize(delta) {
    this.fontSizeRem = Math.max(0.95, Math.min(1.55, this.fontSizeRem + (delta * 0.1)));
    document.documentElement.style.setProperty('--art-body-size', `${this.fontSizeRem}rem`);
    this.showToast(`Tamanho de texto: ${Math.round((this.fontSizeRem / 1.15) * 100)}%`);
  }

  resetFontSize() {
    this.fontSizeRem = 1.15;
    document.documentElement.style.setProperty('--art-body-size', '1.15rem');
    this.showToast("Tamanho de texto restaurado ao padrão");
  }

  // ==========================================
  // RENDERIZAÇÃO DA CAPA EDITORIAL
  // ==========================================
  renderHeroGrid() {
    const leadContainer = document.getElementById('leadStoryContainer');
    const secContainer = document.getElementById('secondaryHighlights');
    if (!leadContainer || !secContainer) return;

    let filtered = this.articles;
    if (this.activeCategory !== 'todos') {
      filtered = this.articles.filter(a => a.category === this.activeCategory);
      if (filtered.length === 0) filtered = this.articles;
    }

    const lead = filtered[0] || this.articles[0];
    const secondaries = filtered.slice(1, 4);

    // Super Manchete com Selos Editoriais
    leadContainer.innerHTML = `
      <div class="lead-media">
        <img src="${lead.image}" alt="${lead.title}">
        <div class="lead-badges-container">
          <span class="editorial-scope-badge ${lead.scopeClass || 'badge-exclusive'}">${lead.scope || 'EXCLUSIVO'}</span>
          <span class="lead-category-badge">${lead.categoryLabel}</span>
        </div>
      </div>
      <div class="lead-content">
        <h2 class="lead-headline" onclick="app.openArticle(${lead.id})">${lead.title}</h2>
        <p class="lead-subheadline">${lead.subtitle}</p>
        
        <!-- Poder360 Bullets -->
        <div class="lead-bullets-box">
          <div class="lead-bullets-title"><i class="fa-solid fa-list-check"></i> O QUE VOCÊ PRECISA SABER:</div>
          <ul class="lead-bullets-list">
            ${lead.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>

        <div class="lead-meta">
          <span><i class="fa-regular fa-user"></i> ${lead.author}</span>
          <span><i class="fa-regular fa-clock"></i> ${lead.date} • ${lead.readTime}</span>
        </div>
      </div>
    `;

    // Atualiza Breaking News Bar
    const breakingTitle = document.getElementById('breakingTitle');
    if (breakingTitle) {
      breakingTitle.textContent = lead.title;
      breakingTitle.onclick = () => this.openArticle(lead.id);
    }

    // Destaques Secundários com Selos
    secContainer.innerHTML = secondaries.map(sec => `
      <div class="secondary-card" onclick="app.openArticle(${sec.id})">
        <div class="sec-media">
          <img src="${sec.image}" alt="${sec.title}">
        </div>
        <div class="sec-badges-row">
          <span class="editorial-scope-badge ${sec.scopeClass || 'badge-bastidores'}">${sec.scope || 'BASTIDORES'}</span>
          <span class="sec-category">${sec.categoryLabel}</span>
        </div>
        <h3 class="sec-title">${sec.title}</h3>
        <p class="sec-summary">${sec.subtitle}</p>
        <div class="sec-meta">
          <span>${sec.author} • ${sec.date}</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // MINUTO A MINUTO (FEED COM FILTROS)
  // ==========================================
  renderWireStream() {
    const container = document.getElementById('wireStreamContainer');
    if (!container) return;

    let items = this.wireItems;
    if (this.activeWireFilter !== 'todos') {
      items = this.wireItems.filter(i => i.cat.toLowerCase() === this.activeWireFilter.toLowerCase());
    }

    container.innerHTML = items.map(item => `
      <div class="wire-item" onclick="app.showToast('Nota de tempo real: ' + '${item.title.replace(/'/g, "\\'")}')">
        <div class="wire-time">${item.time} • ${item.cat}</div>
        <div class="wire-item-title">${item.title}</div>
      </div>
    `).join('');
  }

  filterWire(category) {
    this.activeWireFilter = category;
    document.querySelectorAll('.wire-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase().includes(category.toLowerCase()));
    });
    this.renderWireStream();
  }

  // Simulação de nova notícia chegando no Wire a cada 25 segundos
  startWireSimulation() {
    const extraNews = [
      { title: "Planalto confirma indicação para vaga no Tribunal de Contas da União", cat: "Congresso" },
      { title: "Dólar atinge mínima do dia após anúncio de fluxo cambial positivo pelo BC", cat: "Economia" },
      { title: "Comissão de Ética conclui relatório sobre atuação de servidores em agência", cat: "Judiciário" },
      { title: "Lira e Pacheco se reúnem com ministros do STF em almoço institucional", cat: "Congresso" }
    ];

    let idx = 0;
    setInterval(() => {
      const now = new Date();
      const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
      const item = extraNews[idx % extraNews.length];
      idx++;

      this.wireItems.unshift({ time: timeStr, title: item.title, cat: item.cat });
      this.renderWireStream();

      // Destaque visual suave no primeiro item
      const firstEl = document.querySelector('.wire-item');
      if (firstEl) firstEl.classList.add('new-wire-flash');

      this.showToast(`🚨 Minuto a Minuto: ${item.title.slice(0, 50)}...`, 'gold');
    }, 25000);
  }

  // ==========================================
  // PODERDATA COM TIPOS (LINHAS, DONUT, BARRAS) & EXPORTAÇÃO
  // ==========================================
  setChartType(type) {
    this.currentChartType = type;
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('onclick').includes(type));
    });
    this.renderPoderDataChart(this.currentChartKey, type);
    this.showToast(`Modo do gráfico alterado para: ${type.toUpperCase()}`);
  }

  switchChart(key) {
    this.currentChartKey = key;
    this.renderPoderDataChart(key, this.currentChartType);
    this.showToast(`Dados atualizados: ${PODERDATA_SETS[key].title}`, 'gold');
  }

  renderPoderDataChart(datasetKey, chartType = 'line') {
    const dataObj = PODERDATA_SETS[datasetKey];
    if (!dataObj) return;

    document.getElementById('chartTitle').textContent = dataObj.title;

    document.querySelectorAll('.chart-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('onclick').includes(datasetKey));
    });

    // Stats pills
    const statsContainer = document.getElementById('chartStatsSummary');
    if (statsContainer) {
      statsContainer.innerHTML = dataObj.stats.map(s => `
        <div class="stat-pill">
          <div class="stat-number" style="color: ${s.color}">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('');
    }

    // Notícias vinculadas a dados
    const dataNewsCol = document.getElementById('dataNewsColumn');
    if (dataNewsCol) {
      dataNewsCol.innerHTML = `
        <div class="data-news-item" onclick="app.openArticle(1)">
          <span class="data-metric-tag"><i class="fa-solid fa-arrow-trend-up"></i> TENDÊNCIA DE MERCADO</span>
          <h4>Índice de estabilidade política atinge melhor patamar do semestre após avanço fiscal</h4>
          <p>Métrica apurada pelo núcleo analítico indica redução na percepção de risco para investimentos externos.</p>
        </div>
        <div class="data-news-item" onclick="app.openArticle(2)">
          <span class="data-metric-tag"><i class="fa-solid fa-calculator"></i> MACROECONOMIA</span>
          <h4>Projeções do Focus convergem com estimativas de inflação ancorada para os próximos 12 meses</h4>
          <p>Mercado financeiro eleva projeção de crescimento do PIB para 2,65% com safra robusta e consumo firme.</p>
        </div>
      `;
    }

    const canvas = document.getElementById('dataChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    if (chartType === 'line') {
      this.drawChartLine(ctx, width, height, dataObj);
    } else if (chartType === 'donut') {
      this.drawChartDonut(ctx, width, height, dataObj);
    } else if (chartType === 'bar') {
      this.drawChartBar(ctx, width, height, dataObj);
    }
  }

  // 1. Gráfico de Linhas
  drawChartLine(ctx, width, height, dataObj) {
    const padding = { top: 20, right: 30, bottom: 40, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Linhas de grade
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      ctx.fillStyle = "#64748B";
      ctx.font = "10px Inter, sans-serif";
      ctx.textAlign = "right";
      const val = Math.round(80 - (80 / 4) * i);
      ctx.fillText(val + "%", padding.left - 8, y + 3);
    }

    const stepX = chartW / (dataObj.labels.length - 1);

    // Linhas de dados
    dataObj.datasets.forEach(ds => {
      ctx.strokeStyle = ds.color;
      ctx.lineWidth = 3;
      ctx.beginPath();

      ds.data.forEach((val, idx) => {
        const x = padding.left + idx * stepX;
        const y = padding.top + chartH - (val / 80) * chartH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Pontos e valores
      ds.data.forEach((val, idx) => {
        const x = padding.left + idx * stepX;
        const y = padding.top + chartH - (val / 80) * chartH;

        ctx.fillStyle = ds.color;
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#F8FAFC";
        ctx.font = "bold 11px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(val + "%", x, y - 8);
      });
    });

    // Rótulos do eixo X (meses)
    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px Inter, sans-serif";
    ctx.textAlign = "center";
    dataObj.labels.forEach((lbl, idx) => {
      const x = padding.left + idx * stepX;
      ctx.fillText(lbl, x, height - padding.bottom + 22);
    });
  }

  // 2. Gráfico Donut (Circular)
  drawChartDonut(ctx, width, height, dataObj) {
    const centerX = width * 0.38;
    const centerY = height * 0.5;
    const outerRadius = 88;
    const innerRadius = 52;

    // Pega o último mês de dados
    const lastIdx = dataObj.labels.length - 1;
    const total = dataObj.datasets.reduce((sum, ds) => sum + ds.data[lastIdx], 0);

    let startAngle = -Math.PI / 2;

    dataObj.datasets.forEach(ds => {
      const val = ds.data[lastIdx];
      const sliceAngle = (val / total) * Math.PI * 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = ds.color;
      ctx.fill();

      startAngle += sliceAngle;
    });

    // Centro do Donut
    ctx.fillStyle = "#F8FAFC";
    ctx.font = "bold 18px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("OUT/26", centerX, centerY - 2);

    ctx.fillStyle = "#94A3B8";
    ctx.font = "10px Inter, sans-serif";
    ctx.fillText("Mais recente", centerX, centerY + 14);

    // Legenda no lado direito
    const legendX = width * 0.68;
    let legendY = 70;

    dataObj.datasets.forEach(ds => {
      const val = ds.data[lastIdx];

      ctx.fillStyle = ds.color;
      ctx.fillRect(legendX, legendY, 12, 12);

      ctx.fillStyle = "#F8FAFC";
      ctx.font = "bold 13px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${val}% - ${ds.name}`, legendX + 20, legendY + 11);

      legendY += 34;
    });
  }

  // 3. Gráfico de Barras
  drawChartBar(ctx, width, height, dataObj) {
    const padding = { top: 25, right: 30, bottom: 40, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const groupW = chartW / dataObj.labels.length;
    const barW = (groupW - 14) / dataObj.datasets.length;

    // Linhas de grade
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      ctx.fillStyle = "#64748B";
      ctx.font = "10px Inter, sans-serif";
      ctx.textAlign = "right";
      const val = Math.round(80 - (80 / 4) * i);
      ctx.fillText(val + "%", padding.left - 8, y + 3);
    }

    // Desenha Barras
    dataObj.labels.forEach((lbl, groupIdx) => {
      const groupX = padding.left + groupIdx * groupW + 7;

      dataObj.datasets.forEach((ds, dsIdx) => {
        const val = ds.data[groupIdx];
        const barH = (val / 80) * chartH;
        const x = groupX + dsIdx * barW;
        const y = padding.top + chartH - barH;

        ctx.fillStyle = ds.color;
        ctx.fillRect(x, y, barW - 2, barH);
      });

      // Rótulo do Mês
      ctx.fillStyle = "#94A3B8";
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(lbl, groupX + (groupW - 14) / 2, height - padding.bottom + 20);
    });
  }

  // EXPORTAR GRÁFICO (BAIXAR IMAGEM PNG COM MARCA D'ÁGUA PODER360)
  exportChartImage() {
    const sourceCanvas = document.getElementById('dataChart');
    if (!sourceCanvas) return;

    // Cria canvas de alta resolução com cabeçalho de imprensa
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = 800;
    exportCanvas.height = 460;
    const expCtx = exportCanvas.getContext('2d');

    // Fundo escuro oficial
    expCtx.fillStyle = "#0A0E17";
    expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Cabeçalho institucional
    expCtx.fillStyle = "#F59E0B";
    expCtx.font = "bold 13px Outfit, sans-serif";
    expCtx.fillText("DIÁRIO 360 • PODERDATA EXCLUSIVO", 30, 36);

    expCtx.fillStyle = "#FFFFFF";
    expCtx.font = "bold 20px Outfit, sans-serif";
    expCtx.fillText(PODERDATA_SETS[this.currentChartKey].title, 30, 68);

    // Borda separadora
    expCtx.strokeStyle = "#232F46";
    expCtx.lineWidth = 1;
    expCtx.beginPath();
    expCtx.moveTo(30, 84);
    expCtx.lineTo(770, 84);
    expCtx.stroke();

    // Copia o gráfico principal
    expCtx.drawImage(sourceCanvas, 30, 100, 740, 300);

    // Rodapé de Metodologia e Direitos
    expCtx.fillStyle = "#64748B";
    expCtx.font = "11px Inter, sans-serif";
    expCtx.fillText("Fonte: Levantamento Diário 360 / Metodologia Aberta • Margem de erro: ± 2 p.p.", 30, 435);

    // Dispara o download
    const link = document.createElement('a');
    link.download = `diario360_pesquisa_${this.currentChartKey}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();

    this.showToast("✓ Imagem do gráfico baixada em alta resolução!", "success");
  }

  // ==========================================
  // COLUNISTAS
  // ==========================================
  renderColumnists() {
    const container = document.getElementById('columnistsContainer');
    if (!container) return;

    container.innerHTML = COLUMNISTS.map(col => `
      <div class="columnist-card" onclick="app.showToast('Lendo coluna de: ' + '${col.name}')">
        <div class="col-header">
          <img src="${col.avatar}" alt="${col.name}" class="col-avatar">
          <div>
            <div class="col-name">${col.name}</div>
            <div class="col-role">${col.role}</div>
          </div>
        </div>
        <p class="col-article-title">"${col.title}"</p>
        <div class="col-footer">
          <span><i class="fa-regular fa-clock"></i> ${col.date}</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // PLAYLIST TV 360
  // ==========================================
  renderTvPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;

    container.innerHTML = TV_PLAYLIST.map(item => `
      <div class="playlist-card" onclick="app.openLiveModal()">
        <div class="pl-thumb">
          <img src="${item.thumb}" alt="${item.title}">
          <span class="pl-duration">${item.duration}</span>
        </div>
        <div class="pl-info">
          <h5>${item.title}</h5>
          <span class="pl-author">${item.author}</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // BLOCOS CATEGORIZADOS
  // ==========================================
  renderCategorySections() {
    const polEl = document.getElementById('politicaNewsList');
    const ecoEl = document.getElementById('economiaNewsList');
    const judEl = document.getElementById('judiciarioNewsList');

    if (polEl) {
      polEl.innerHTML = `
        <div class="column-news-item" onclick="app.openArticle(1)">
          <h4>Acordo em Brasília destrava matérias econômicas prioritárias antes do recesso</h4>
          <p>Lideranças garantem quórum de 315 deputados para o marco fiscal.</p>
          <span class="item-meta">Há 25 minutos • Redação Planalto</span>
        </div>
        <div class="column-news-item" onclick="app.showToast('Em atualização')">
          <h4>Comissão de Relações Exteriores debate entrada de novos parceiros comerciais</h4>
          <p>Diplomatas apresentam relatório sobre investimentos em cadeias de suprimento.</p>
          <span class="item-meta">Há 1 hora • Esplanada</span>
        </div>
      `;
    }

    if (ecoEl) {
      ecoEl.innerHTML = `
        <div class="column-news-item" onclick="app.openArticle(2)">
          <h4>Ata do Copom reitera prudência e monitora juros globais</h4>
          <p>Inflação de serviços arrefece, mas pleno emprego requer vigilância.</p>
          <span class="item-meta">Há 45 minutos • Mercados</span>
        </div>
        <div class="column-news-item" onclick="app.showToast('Em atualização')">
          <h4>Balança comercial registra superávit recorde impulsionado pelo setor agropecuário</h4>
          <p>Exportações de soja, milho e carnes alcançam US$ 8,4 bilhões no mês.</p>
          <span class="item-meta">Há 2 horas • Comércio Exterior</span>
        </div>
      `;
    }

    if (judEl) {
      judEl.innerHTML = `
        <div class="column-news-item" onclick="app.openArticle(3)">
          <h4>STF forma maioria sobre responsabilidade de redes em crimes digitais</h4>
          <p>Julgamento histórico estabelece normas para algoritmos e publicidade.</p>
          <span class="item-meta">Há 1 hora • Tribunais</span>
        </div>
        <div class="column-news-item" onclick="app.showToast('Em atualização')">
          <h4>Conselho Nacional de Justiça aprova resolução para acelerar execuções fiscais</h4>
          <p>Medida busca desengargalar varas de fazenda pública com integração digital.</p>
          <span class="item-meta">Há 3 horas • CNJ</span>
        </div>
      `;
    }
  }

  // ==========================================
  // NAVEGAÇÃO ENTRE PÁGINA INICIAL E MATÉRIA
  // ==========================================
  openArticle(id) {
    const article = this.articles.find(a => a.id === id) || this.articles[0];
    
    // Preenche os dados
    document.getElementById('artBreadcrumbCat').textContent = article.categoryLabel;
    document.getElementById('artCatBadge').textContent = article.categoryLabel;
    
    // Selo de escopo
    const scopeBadge = document.getElementById('artScopeBadge');
    if (scopeBadge) {
      scopeBadge.textContent = article.scope || 'EXCLUSIVO';
      scopeBadge.className = `editorial-scope-badge ${article.scopeClass || 'badge-exclusive'}`;
    }

    document.getElementById('artReadTime').innerHTML = `<i class="fa-regular fa-clock"></i> ${article.readTime}`;
    document.getElementById('artHeadline').textContent = article.title;
    document.getElementById('artSubheadline').textContent = article.subtitle;
    document.getElementById('artAuthorAvatar').src = article.authorAvatar;
    document.getElementById('artAuthorName').textContent = `Por ${article.author} • ${article.authorRole}`;
    document.getElementById('artPubDate').textContent = article.date;
    document.getElementById('artImage').src = article.image;
    document.getElementById('artImageCaption').textContent = article.caption || "Foto: Diário 360 / Divulgação";
    document.getElementById('artBody').innerHTML = article.content;

    // Resumo Executivo estilo Poder360
    const bulletsEl = document.getElementById('artSummaryBullets');
    if (bulletsEl && article.bullets) {
      bulletsEl.innerHTML = article.bullets.map(b => `<li>${b}</li>`).join('');
    }

    // Tags
    const tagsEl = document.getElementById('artTags');
    if (tagsEl && article.tags) {
      tagsEl.innerHTML = article.tags.map(t => `<span class="tag-pill" onclick="app.searchNews('${t}')">#${t}</span>`).join('');
    }

    // Notícias relacionadas
    const relatedEl = document.getElementById('relatedNewsGrid');
    if (relatedEl) {
      const others = this.articles.filter(a => a.id !== article.id).slice(0, 3);
      relatedEl.innerHTML = others.map(o => `
        <div class="related-card" onclick="app.openArticle(${o.id})">
          <img src="${o.image}" alt="${o.title}">
          <h5>${o.title}</h5>
        </div>
      `).join('');
    }

    // Alterna view
    document.getElementById('homeView').classList.remove('active');
    document.getElementById('articleView').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.resetAudioPlayer();
  }

  backToHome() {
    document.getElementById('articleView').classList.remove('active');
    document.getElementById('homeView').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.resetAudioPlayer();
  }

  filterCategory(cat) {
    this.activeCategory = cat;
    document.querySelectorAll('.nav-list li').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-cat') === cat);
    });

    this.backToHome();
    this.renderHeroGrid();
    this.showToast(`Filtrando editoria: ${cat.toUpperCase()}`);
  }

  // ==========================================
  // ÁUDIO PLAYER SIMULATOR (TTS)
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
      this.showToast("Reproduzindo narração com voz IA...");

      this.audioInterval = setInterval(() => {
        this.audioProgress += 1;
        if (this.audioProgress > 100) {
          this.resetAudioPlayer();
          this.showToast("Fim da reprodução do áudio");
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

  resetAudioPlayer() {
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
  // BUSCA E EVENT LISTENERS
  // ==========================================
  setupEventListeners() {
    // Theme Switcher
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      themeIcon.className = target === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      localStorage.setItem('diario360_theme', target);
      this.showToast(`Modo ${target === 'dark' ? 'Escuro' : 'Claro'} ativado`);
    });

    const savedTheme = localStorage.getItem('diario360_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Modal de Busca
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

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) searchModal.classList.remove('active');
    });

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      const matches = this.articles.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.subtitle.toLowerCase().includes(q) ||
        (a.tags && a.tags.some(t => t.toLowerCase().includes(q)))
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<div style="padding: 18px; color: var(--text-muted); text-align: center;">Nenhuma notícia encontrada para "${q}".</div>`;
        return;
      }

      searchResults.innerHTML = matches.map(m => `
        <div class="search-result-item" onclick="app.openArticle(${m.id}); document.getElementById('searchModal').classList.remove('active');">
          <span style="font-size: 0.7rem; font-weight: 800; color: var(--brand-red);">${m.categoryLabel}</span>
          <h4>${m.title}</h4>
          <p>${m.subtitle}</p>
        </div>
      `).join('');
    });

    // Botão de Redação (CMS)
    document.getElementById('openCmsBtn').addEventListener('click', () => this.openCms());
  }

  searchNews(term) {
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    searchModal.classList.add('active');
    searchInput.value = term;
    searchInput.dispatchEvent(new Event('input'));
  }

  // ==========================================
  // CMS / PAINEL DA REDAÇÃO
  // ==========================================
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
    const image = document.getElementById('cmsImage').value.trim() || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80";
    const bulletsRaw = document.getElementById('cmsBullets').value.trim();
    const contentRaw = document.getElementById('cmsContent').value.trim();

    const bullets = bulletsRaw ? bulletsRaw.split('\n').filter(b => b.trim()) : [
      "Notícia apurada diretamente pela equipe do Diário 360.",
      "Desdobramentos sob acompanhamento em tempo real.",
      "Impactos imediatos no setor e repercussão oficial."
    ];

    const content = contentRaw 
      ? contentRaw.split('\n\n').map(p => `<p>${p}</p>`).join('')
      : `<p>${subtitle}</p><p>A apuração completa segue em atualização permanente pelos correspondentes em Brasília e principais capitais econômicas.</p>`;

    const catLabels = {
      politica: "POLÍTICA & PLANALTO",
      congresso: "CONGRESSO NACIONAL",
      economia: "ECONOMIA & MERCADOS",
      judiciario: "JUDICIÁRIO / STF",
      poderdata: "PODERDATA / DADOS",
      internacional: "INTERNACIONAL"
    };

    const scopeClasses = {
      EXCLUSIVO: "badge-exclusive",
      BASTIDORES: "badge-bastidores",
      ANÁLISE: "badge-analise",
      URGENTE: "badge-urgente"
    };

    const newArticle = {
      id: Date.now(),
      category: category,
      categoryLabel: catLabels[category] || "GERAL",
      scope: scope,
      scopeClass: scopeClasses[scope] || "badge-exclusive",
      title: title,
      subtitle: subtitle,
      bullets: bullets,
      content: content,
      author: author,
      authorRole: "Redação Diário 360",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      image: image,
      caption: "Foto: Cobertura Especial Diário 360",
      readTime: "3 min de leitura",
      date: "Agora mesmo",
      isLead: true,
      tags: [scope, category.toUpperCase(), "Brasília"]
    };

    this.articles.unshift(newArticle);
    this.saveArticles();
    this.closeCms();
    document.getElementById('cmsForm').reset();

    this.renderHeroGrid();
    this.showToast("✓ Notícia publicada com sucesso na capa!", "success");
  }

  // ==========================================
  // VÍDEO & AO VIVO MODAL
  // ==========================================
  openLiveModal() {
    document.getElementById('liveModal').classList.add('active');
  }

  closeLiveModal() {
    document.getElementById('liveModal').classList.remove('active');
  }

  toggleVideoPlay() {
    this.openLiveModal();
  }

  // ==========================================
  // DRIVE 360 (NEWSLETTER)
  // ==========================================
  handleNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('nlEmail').value;
    const succ = document.getElementById('newsletterSuccess');
    succ.innerHTML = `✓ Sucesso! O e-mail <strong>${email}</strong> receberá o Drive 360 amanhã às 6h.`;
    this.showToast("Inscrição confirmada no Drive 360!", "success");
    document.getElementById('newsletterForm').reset();
  }

  // ==========================================
  // COMPARTILHAMENTO
  // ==========================================
  share(type) {
    const url = window.location.href;
    const title = document.getElementById('artHeadline').textContent;

    if (type === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - Leia no Diário 360: ' + url)}`, '_blank');
    } else if (type === 'x') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (type === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (type === 'copy') {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast("✓ Link copiado para a área de transferência!", "success");
      }).catch(() => {
        this.showToast("Link pronto para envio!");
      });
    }
  }

  // ==========================================
  // FLUTUAÇÃO DE MERCADO
  // ==========================================
  startMarketFluctuation() {
    setInterval(() => {
      const dollarChange = (Math.random() * 0.04 - 0.02).toFixed(3);
      const ticker = document.getElementById('marketTicker');
      if (!ticker) return;

      const dollarItem = document.getElementById('tick-dolar');
      if (dollarItem) {
        const isUp = parseFloat(dollarChange) >= 0;
        dollarItem.style.transition = 'background-color 0.4s';
        dollarItem.style.backgroundColor = isUp ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)';
        setTimeout(() => dollarItem.style.backgroundColor = '', 800);
      }
    }, 8000);
  }

  // ==========================================
  // NOTIFICAÇÕES TOAST
  // ==========================================
  showToast(message, type = 'default') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Inicializa a aplicação
const app = new PortalApp();
