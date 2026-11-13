# Amanda Inagaki · Portfolio

Portfólio editorial com estética japonesa, construído com React e motion design.

## Sobre

Um site pessoal que une tipografia editorial, animações suaves e uma paleta inspirada no vermelho japonês. Cada seção foi pensada pra guiar o visitante de forma natural, do hero até o contato.

O projeto nasceu da vontade de criar algo que não parecesse um portfólio genérico. A ideia era juntar o que eu gosto em design editorial com a possibilidade de colocar tudo em código.

## O que tem

- Animações de scroll com GSAP e ScrollTrigger
- Sistema de internacionalização (PT, EN, JA)
- Layout responsivo com mobile first
- Marquee com ícones de flor (react-icons)
- Menu overlay com transições suaves
- Custom cursor
- Tema com cores do Japão

## Tech Stack

- React 19
- Vite
- GSAP
- i18next
- react-icons
- CSS Modules

## Como rodar

```bash
npm install
npm run dev
```

| Script                 | O que faz                                  |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Servidor de desenvolvimento                |
| `npm run build`        | Build de produção em `dist/`               |
| `npm run preview`      | Serve o build de produção localmente       |
| `npm run lint`         | Lint com oxlint (inclui regras de a11y)    |
| `npm run format`       | Formata o código com Prettier              |
| `npm run format:check` | Verifica a formatação sem alterar arquivos |
| `npm test`             | Testes com Vitest                          |

A CI (GitHub Actions) roda lint, formatação, testes e build em todo push na
`front` e em todo pull request.

## Estrutura

```
src/
├── animations/      # Funções GSAP (hero, seções, projetos, barra de progresso)
├── assets/
│   └── images/optimized/  # AVIF/WebP/JPG gerados a partir dos originais
├── components/      # Componentes React organizados por seção
│   ├── ui/          # Reutilizáveis (ResponsiveImage, SectionHead)
│   ├── Decorative/  # Ilustrações SVG (sakura, pétalas) e relógio de Tóquio
│   ├── IntroScreen/ # Tela de abertura
│   ├── Navbar/      # Navbar, menu overlay e seletor de idioma
│   ├── Hero/        # Capa + CircleTransition (transição do círculo)
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Contact/
│   ├── ScrollProgress/
│   └── CustomCursor/
├── data/            # Conteúdo: perfil, seções, projetos, stack e imagens
├── hooks/           # useAnimation, useNavState, useScrollLock
├── i18n/            # Configuração, locales (en, pt, ja) e teste de paridade
├── lib/             # Setup compartilhado do GSAP
└── utils/
```

Cada seção chama `useAnimation(ref, initXAnimations)`: o componente só cria a
ref, e a animação fica em `src/animations/`, respeitando
`prefers-reduced-motion` via `withMotion`. Para adicionar ou reordenar uma
seção, edite `src/data/sections.js` — a numeração, o menu e o índice do hero
são gerados a partir dele.

As imagens em `src/assets/images/optimized/` são geradas a partir dos
originais com `ffmpeg` e entregues via `srcset` em AVIF/WebP, com fallback
em JPG/PNG.

## Autora

Amanda Inagaki
Desenvolvedora Front-end

GitHub: [@inagakidev](https://github.com/inagakidev)
