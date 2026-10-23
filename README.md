# 📰 DIÁRIO 360 — Modelo de Jornal Digital Moderno (Poder360 + CNN Brasil)

> **Portal de Notícias Editorial de Alta Credibilidade**, desenhado com rigor tipográfico, densidade jornalística e diagramação modular inspirada no **Poder360, CNN Brasil e Folha**. Zero visual genérico de IA: layout limpo de imprensa, fios de chumbo divisórios, terminal de dados e leitor executivo.

![Capa Diário 360](assets/preview-home.jpg)

---

## 🎯 A Proposta: Jornalismo Real, Sem Clichês Visuais de IA

A maioria dos modelos gerados por IA sofre dos mesmos problemas: temas escuros com neons exagerados, cartões arredondados flutuantes com sombras pesadas e falta de densidade. 

O **Diário 360** foi reconstruído do zero seguindo as convenções visuais consagradas do jornalismo profissional brasileiro:

* 📄 **Modo Diurno Editorial como Padrão:** Fundo branco nobre com alto contraste, preto de tinta de imprensa e fios de chumbo (`1px`) dividindo as colunas.
* 🖋 **Tipografia com Peso de Imprensa:** Títulos pesados em serifa nobre (*Merriweather* e *Playfair*), combinados com entrelinha justa e chapéus em caixa alta.
* 🖊 **Efeito Marca-Texto Poder360:** Frases-chave nos tópicos de resumo executivo destacadas com marcador amarelo suave (`<mark>`).
* 🥇 **Ranking "AS MAIS LIDAS" (Top 1 a 5):** Coluna lateral com numeração de grande impacto, presente em todos os grandes portais de notícias.
* 🏛 **Cobertura Autêntica de Brasília:** Foco em Planalto, Congresso, Fazenda, STF e pesquisas eleitorais.
* 📊 **Divisão de Pesquisas PoderData:** Gráficos com metodologia aberta, margem de erro e botão de download em PNG formatado para redes sociais.

---

## 🌟 Demonstração ao Vivo

* 🚀 **Site no ar (GitHub Pages):** [https://dyegosan14-tech.github.io/diario360-jornal-digital/](https://dyegosan14-tech.github.io/diario360-jornal-digital/)
* 📦 **Repositório Oficial:** [https://github.com/dyegosan14-tech/diario360-jornal-digital](https://github.com/dyegosan14-tech/diario360-jornal-digital)

---

## 📸 Leitor de Artigo Imersivo
![Página do Artigo](assets/preview-article.jpg)

### Recursos da Página de Matéria:
1. **Letra Capitular (*Drop Cap*):** Primeira letra do parágrafo inicial ampliada no estilo de jornal impresso tradicional.
2. **"O que você precisa saber":** Bloco antes do texto com tópicos diretos e marcação visual amarela para leitura rápida de tomadores de decisão.
3. **Barra de Progresso no Topo:** Acompanhamento dinâmico da rolagem da matéria.
4. **Ouvir Reportagem (Voz IA):** Player de áudio discreto e integrado.
5. **Ferramentas de Leitura:** Aumentar/diminuir fonte (`A-`, `A`, `A+`) e impressão limpa formatada.
6. **Embed de Documento Oficial:** Download do PDF citado na reportagem.

---

## 📁 Estrutura do Projeto

```
diario360-jornal-digital/
├── index.html       # Diagramação da Capa, Leitor de Notícia, Radar e Modais
├── styles.css       # Design System de imprensa, fios de chumbo e temas claro/escuro
├── app.js           # Lógica do jornal: PoderData Canvas, cotações, busca, PiP e CMS
├── assets/          # Capturas de tela e mockups oficiais do jornal
├── README.md        # Documentação completa
└── LICENSE          # Licença MIT
```

---

## 🚀 Como Executar Localmente

```bash
# Clone o projeto
git clone https://github.com/dyegosan14-tech/diario360-jornal-digital.git

# Acesse o diretório
cd diario360-jornal-digital

# Iniciar servidor local
python -m http.server 8080
```
Acesse no seu navegador: **`http://localhost:8080`**

---

## 📄 Licença
Distribuído sob a licença **MIT**. Aberto para uso como modelo de jornalismo digital, blogs analíticos e portais de notícias.
