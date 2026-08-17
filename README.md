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
├── assets/          # Imagens e fontes
├── components/      # Componentes React organizados por seção
│   ├── About/
│   ├── Contact/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── Skills/
├── data/            # Dados de projetos, stack e perfil
└── i18n.js          # Traduções (português, inglês, japonês)
```

## Autora

Amanda Inagaki
Desenvolvedora Front-end

GitHub: [@inagakidev](https://github.com/inagakidev)
