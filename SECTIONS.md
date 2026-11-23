# Planejamento de Seções (`SECTIONS.md`) — Geek Friends | UNEGEEK XP

**Referência estrutural:** `https://avengerscountdown.com/pt-br`  
**Identidade visual:** `@unegeekxp` (`https://www.instagram.com/unegeekxp/`)  
**Evento:** Geek Friends — 5 de dezembro de 2026 às 16h00 (`UTC-4`, UNEMAT Campus Sinop)

---

## Direções Estéticas Propostas (Escolha na Fase 2)

1. **Portal Cinematográfico (Recomendado — mais fiel ao `avengerscountdown.com`)**
   - **DNA e Referências (`knowledge/`):** `128-dark-design` (luminância obsidian e elevação por luz aditiva) + `084-shaders-paper-design` (atmosfera fluida/volumétrica de baixo custo com suporte a `prefers-reduced-motion`).
   - **Atmosfera:** Fundo `#07050E` com feixes de luz volumétricos sutis em Roxo Elétrico (`#7C3AED` / `#8B2CF5`), Verde Lima Neon (`#B6FF00`) e toque Ciano (`#22D3EE`), mantendo o relógio em dígitos grandes sem caixas pesadas.
   - **Tipografia:** Space Grotesk / Syne (Display com tracking óptico negativo) + Inter (Corpo) + JetBrains Mono / `tabular-nums` (Dígitos estáveis).
   - **Proporção 60-30-10:** 60% canvas escuro e hierarquia tipográfica limpa; 30% transições suaves nos dígitos e botões; 10% atmosfera volumétrica e acentos em lima neon.

2. **Arcade Cyber-Pop (Mais próximo aos cartazes do `@unegeekxp`)**
   - **DNA e Referências (`knowledge/`):** `129-brutalistwebsites` (contraste duro, linhas secas e identidade direta) + estética gamer/quadrinhos do perfil `@unegeekxp` com ícones vetoriais pixel-art em SVG modular.
   - **Atmosfera:** Grid retro-futurista em `#07050E` / `#120D21`, contornos marcantes em branco e roxo, sombras sólidas deslocadas em Verde Lima Neon (`#B6FF00`) e detalhes geométricos inspirados nos destaques do Instagram (`Cosplay`, `Showdown`, `XP`).
   - **Tipografia:** Chakra Petch / Space Grotesk em caixa alta pesada + Inter + JetBrains Mono `tabular-nums`.
   - **Proporção 60-30-10:** 60% estrutura em grid escuro de alto contraste; 30% micro-estados táteis de hover com inversão seca; 10% grafismos pixel-art em SVG e monograma `UG/XP` animado.

3. **Editorial Minimalista Neon**
   - **DNA e Referências (`knowledge/`):** `minimal-gallery` (silêncio visual e espaço negativo ativo) + `typewolf` / `148-fontsinuse` (rigor tipográfico e numerais tabulares).
   - **Atmosfera:** Fundo quase absoluto em `#07050E` com linhas divisórias finas (`1px` translúcido), gradiente radial contido em roxo e lima neon, e foco total na monumentalidade do contador.
   - **Tipografia:** Geist / Plus Jakarta Sans + Inter + Geist Mono `tabular-nums`.
   - **Proporção 60-30-10:** 60% espaço negativo e composição centralizada; 30% micro-iluminação de bordas `1px`; 10% acento direcionado no CTA principal e no indicador do evento.

---

## Estrutura Planejada de Seções

### Seção 1: Header + Hero Countdown *(Construção exclusiva na Fase 5)*
- **Objetivo de Conversão:** Comunicar imediatamente quanto tempo falta para o **Geek Friends** e converter o visitante para acompanhar o perfil `@unegeekxp` no Instagram.
- **Header fixo minimalista (`h-14` / `h-16`):**
  - Esquerda: Monograma vetorial modular `UG/XP` em SVG (`<MonogramParts />`) + marca `UNEGEEK XP` sem subtítulos decorativos.
  - Centro/Direita: Links limpos para as seções da página (`Contagem`, `Destaques`, `O Evento`) + botão direto `Seguir @unegeekxp` apontando para `https://www.instagram.com/unegeekxp/`.
- **Hero em tela cheia (*above the fold*, `min-h-screen`):**
  - Camada atmosférica (`z-0`, `pointer-events-none`) vinculada à direção escolhida + vinheta escura para legibilidade máxima.
  - Título principal (`H1`): `CONTAGEM REGRESSIVA PARA O GEEK FRIENDS`
  - Subtítulo: `5 DE DEZEMBRO ÀS 16H · UNEMAT SINOP`
  - Relógio em tempo real (`tabular-nums`, fuso fixo `America/Cuiaba`, alvo `2026-12-05T16:00:00-04:00`):
    - **Opção A (4 unidades):** `DIAS : HORAS : MIN : SEG`
    - **Opção B (5 unidades — fiel ao `avengerscountdown.com`):** `MESES : DIAS : HORAS : MIN : SEG`
  - CTA principal no centro (abaixo do contador): botão de destaque direcionando para `https://www.instagram.com/unegeekxp/` (`Acompanhar no Instagram @unegeekxp`).
  - Barra flutuante discreta no canto inferior esquerdo (inspirada no controle de mídia do `avengerscountdown.com`): botão para pausar/retomar a animação de fundo (respeitando acessibilidade e `prefers-reduced-motion`) e atalho rápido para detalhes do evento.

---

### Seção 2: Destaques do Geek Friends *(Fase 7 — apenas após aprovação do Hero)*
- **Objetivo:** Apresentar os 4 pilares centrais divulgados no cartaz oficial do Geek Friends no `@unegeekxp` sem poluir a primeira dobra.
- **Conteúdo:** Grade de 4 blocos enxutos:
  1. **Cosplay** — Desfile e encontro da comunidade cosplay.
  2. **Anime** — Cultura pop japonesa e referências de animação.
  3. **Games** — Arena de jogos e interação entre participantes.
  4. **Batalhas** — Disputas e torneios ao vivo.
- **Elementos visuais:** Ícones SVG vetoriais (Lucide React ou componentes SVG pixel-art modulares alinhados aos destaques do Instagram), bordas sutis de `1px` e acentos em Roxo Elétrico (`#7C3AED`), Verde Lima (`#B6FF00`) e Ciano (`#22D3EE`). Zero emojis e zero badges de status fictícios.

---

### Seção 3: Chamada Oficial para o Instagram `@unegeekxp` *(Fase 7 — substitui o bloco de e-mail da referência)*
- **Objetivo de Conversão:** Substituir integralmente a seção *"Alertas Doomsday"* (que pedia e-mail no `avengerscountdown.com`) por um convite claro para seguir e acompanhar as atualizações no Instagram.
- **Conteúdo:**
  - Título: `ACOMPANHE AS NOVIDADES NO INSTAGRAM`
  - Texto de apoio: Programação completa, confirmação de atrações, horários e avisos do Geek Friends são publicados oficialmente no perfil `@unegeekxp`.
  - Ação única: Botão de conversão externa para `https://www.instagram.com/unegeekxp/` com o selo/monograma `UG/XP` em SVG.

---

### Seção 4: Rodapé Institucional *(Fase 7)*
- **Objetivo:** Encerrar a página com identidade acadêmica e dados objetivos do projeto de extensão.
- **Conteúdo:**
  - **UNEGEEK XP** — Projeto de Extensão da **UNEMAT — Campus Sinop**
  - Evento: **Geek Friends** · 5 de dezembro de 2026 às 16h
  - Link oficial: `instagram.com/unegeekxp`
