# Amanda Inagaki · Portfolio

Portfólio editorial com estética japonesa, construído com React e motion design.

## Sobre

Um site pessoal que une tipografia editorial, animações suaves e uma paleta inspirada no vermelho japonês. Cada seção foi pensada pra guiar o visitante de forma natural, do hero até o contato.

O projeto nasceu da vontade de criar algo que não parecesse um portfólio genérico. A ideia era juntar o que eu gosto em design editorial com a possibilidade de colocar tudo em código.

## O que tem

* Animações de scroll com GSAP e ScrollTrigger
* Sistema de internacionalização (PT, EN, JA)
* Layout responsivo com mobile first
* Marquee com ícones de flor (react-icons)
* Menu overlay com transições suaves
* Custom cursor
* Tema com cores do Japão

## Tech Stack

* React 19
* Vite
* GSAP
* i18next
* react-icons
* CSS Modules

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── animations/      # Lógica de animação (hero, scroll, projects)
├── assets/
│   └── images/optimized/  # AVIF/WebP/JPG gerados a partir dos originais
├── components/      # Componentes React organizados por seção
│   ├── ui/          # Componentes reutilizáveis (ResponsiveImage)
│   ├── About/
│   ├── Contact/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── Skills/
├── data/            # Perfil, projetos, stack e metadados das imagens
├── i18n/            # Configuração e locales (en, pt, ja)
├── lib/             # Setup compartilhado do GSAP
└── utils/
```

As imagens em `src/assets/images/optimized/` são geradas a partir dos
originais com `ffmpeg` e entregues via `srcset` em AVIF/WebP, com fallback
em JPG/PNG.

## Autora

Amanda Inagaki
Desenvolvedora Front-end

GitHub: [@inagakidev](https://github.com/inagakidev)
