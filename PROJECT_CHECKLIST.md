# Checklist de Acompanhamento do Projeto — Geek Friends (UNEGEEK XP)

## Fase 1: Diagnóstico & Briefing do Produto
- [x] Entidade do Produto definida: Página oficial de contagem regressiva para o evento **Geek Friends**, realizado pelo **UNEGEEK XP** (projeto de extensão universitária da **UNEMAT — Campus Sinop, MT**), com data-alvo em **5 de dezembro de 2026 às 16h00** (`2026-12-05T16:00:00-04:00`, fuso `America/Cuiaba`, UTC-4).
- [x] Público-alvo e Proposta de Valor central: Comunidade acadêmica de Sinop e público geek/gamer regional em busca da contagem oficial até a abertura do evento e acesso rápido às novidades no perfil `@unegeekxp` no Instagram (substituindo a captura de e-mail da referência por direcionamento direto para `https://www.instagram.com/unegeekxp/`).
- [x] Paleta de Cores Oficial estabelecida (extraída de `@unegeekxp`):
  - **Base Profunda (Canvas):** `#07050E` (Obsidian Violet) e `#120D21` (Superfície Escura)
  - **Primária da Marca (Energia):** `#7C3AED` / `#8B2CF5` (Roxo Elétrico)
  - **Acento de Alto Contraste (Assinatura):** `#B6FF00` (Verde Lima Neon)
  - **Tipografia / Contraste:** `#F8FAFC` (Branco Gelo)
  - **Detalhe Secundário:** `#22D3EE` (Ciano Elétrico)

## Fase 2: Curadoria de Referências & DNA Estético
- [x] Direção estética selecionada pelo usuário: **Opção 2 — Arcade Cyber-Pop** (grid retro-futurista em perspectiva, sombras sólidas deslocadas em `#B6FF00` e `#7C3AED`, grafismos pixel-art em SVG modular).
- [x] Efeitos de assinatura e materiais definidos: Grid perspectiva 3D animada (com botão de pausa e suporte a `prefers-reduced-motion`), blocos de contagem com borda branca `2px` e sombras offset sólidas (`#B6FF00` / `#7C3AED`), cantos pixel-art em SVG e raios de fundo.
- [x] Sistema Tipográfico selecionado: `Chakra Petch` (Display) + `Inter` (Corpo/UI) + `JetBrains Mono` / `tabular-nums` (Dígitos).

## Fase 3: Planejamento de Seções (`SECTIONS.md`)
- [x] Preferências de estrutura confirmadas pelo usuário:
  - **Formato do contador:** 4 unidades (`DIAS : HORAS : MIN : SEG`).
  - **Estrutura:** Página completa com rolagem (Header + Hero + Destaques `Cosplay / Anime / Games / Batalhas` + Chamada `@unegeekxp` + Rodapé UNEMAT Sinop).
- [x] Objetivos de conversão alinhados (direcionamento para `@unegeekxp` no Instagram sem formulários de e-mail).
- [x] Aprovação final do visual escolhido (**Opção 2 — Arcade Cyber-Pop**) para iniciar o código na Fase 4/5.

## Fase 4: Infraestrutura & Live Preview Contínuo
- [x] Servidor local (Vite) inicializado em background daemon (`IsDaemon: true`).
- [x] Porta e URL ativa compartilhada com o usuário (`http://localhost:5173/`).

## Fase 5: Header + Hero Section (Exclusivo)
- [x] Header limpo: Monograma vetorial `UG/XP` em SVG modular + links sem ruído + botão direto `@unegeekxp`.
- [x] Hero dentro da primeira dobra (Above the fold: título, subtítulo, contador de 4 unidades e CTA visíveis sem rolagem).
- [x] Grafismos e monograma em SVG Vetorial Modular (`src/components/UnegeekBrandParts.tsx`, zero imagens rasterizadas).
- [x] Purificação de AI Slop (Zero emojis, zero fake pills de telemetria, zero badges decorativos vazios).
- [x] Auditoria de Paleta: 100% das cores oficiais (`#07050E`, `#7C3AED`/`#8B2CF5`, `#B6FF00`, `#F8FAFC`, `#22D3EE`) aplicadas intencionalmente.

## Fase 6: Verificação Visual Real (Chrome DevTools MCP)
- [x] Screenshots desktop (`1440x900`) e mobile (`390x844`) capturados via Chrome DevTools MCP com zero erros no console.
- [x] Leitura e inspeção crítica das imagens (`read_file`).
- [x] Refinamentos de espaçamento, grade perspectiva e proporções aplicados e revalidados.

## Fase 7: Cascata Modular das Demais Seções
- [x] Seção Destaques (`Cosplay`, `Anime`, `Games`, `Batalhas`) implementada em `src/components/HighlightsSection.tsx`.
- [x] Chamada oficial para `@unegeekxp` implementada em `src/components/InstagramCtaSection.tsx` (substituindo captura de e-mail por direcionamento ao Instagram).
- [x] Rodapé institucional UNEMAT Campus Sinop implementado em `src/components/Footer.tsx`.
- [x] Página completa validada via build (`tsc -b && vite build`) e inspeção visual em desktop (`1440x900`) e mobile (`390x844`).
