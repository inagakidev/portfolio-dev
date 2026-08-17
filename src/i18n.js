import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'portfolio.lang';

const en = {
  translation: {
    meta: {
      title: 'Amanda Inagaki — Portfolio',
      description:
        'Amanda Inagaki — Front-end developer. Clear interfaces with attention to visual details and user experience.',
    },
    common: {
      skipToContent: 'Skip to content',
      menu: 'Menu',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      backToTop: 'Back to top',
    },
    nav: {
      langLabel: 'Language',
      navigation: 'Navigation',
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      coverAria: 'Cover',
      kicker: 'Portfolio · {{year}}',
      available: 'Available for work',
      role: 'Front-end Developer',
      location: 'São Paulo · Brazil',
      intro:
        'Started in graphic design, found my way to code. Today I build interfaces where creativity and technical precision meet.',
      viewWork: 'View Work',
      contact: 'Get in touch',
      scroll: 'Scroll',
    },
    reveal: {
      label: 'The Portfolio',
      title: 'SELECTED',
      titleEm: 'WORK',
      indexAria: 'Portfolio index',
      scroll: 'Scroll to explore',
      selectedWork: 'Selected Work',
    },
    about: {
      eyebrow: 'About',
      h1a: 'Building interfaces',
      h1b: 'that make sense.',
      tagline: "I don't write code just to make things work. I think about how each element communicates, navigates, and behaves for the person on the other side.",
      paragraphs: [
        "I'm a front-end developer focused on interfaces that combine aesthetics and functionality. I started studying graphic design, but it was in code that I found the space to put ideas into practice for real.",
        "I have about two years of experience and have delivered over 10 projects. My work is building clear interfaces, with attention to visual details and the experience of whoever is using them.",
        "I'm expanding my skills to back-end, because I understand that a good product depends on both ends. Meanwhile, keeping focus on what I do best: thinking through the interface before writing the first line.",
      ],
      approachTitle: 'How I work',
      approach: [
        'I architect before I code',
        'I prefer clear processes',
        'Each project is a different problem',
        'Continuous learning is a priority',
        'Visual details matter',
      ],
      portraitLabel: 'Portrait',
      portraitAlt: 'Portrait of Amanda Inagaki',
    },
    stack: {
      eyebrow: 'Stack',
      h1a: 'Tools &',
      h1b: 'technologies<dot>.</dot>',
      groups: {
        front: 'Front-end',
        back: 'Back-end',
        flow: 'Workflow',
      },
    },
    projects: {
      eyebrow: 'Selected Work',
      h1a: 'Selected',
      h1b: '<em>work</em>',
      intro:
        "A selection of what I've built. Each project solves a specific problem with attention to detail and the final experience.",
      projectLabel: 'Project — {{num}}',
      techsAria: 'Technologies used',
      visit: 'Visit',
      github: 'Code',
      list: {
        'fora-do-jogo': {
          category: 'Front-end · Articles Platform',
          description:
            'A platform where anyone can publish articles about the internet, going through a review process before going live. The content focuses on the real impact of the internet on people\'s lives, both the benefits and the risks. Every text goes through a verification to ensure the information is reliable.',
        },
        'mr-beagles': {
          category: 'Front-end · Pet Services',
          description:
            'Website for the Mr Beagles kennel presenting their breeding work with Fox Terrier and Beagle breeds. Breed information, care guidelines, and a contact form integrated directly to WhatsApp to make communication easier.',
        },
        'kami-notes': {
          category: 'Full-stack',
          description:
            'A markdown note-taking app focused on simplicity. Keyboard-only navigation, real-time sync. Inspired by the aesthetic of Japanese washi paper.',
        },
        'hanami-sounds': {
          category: 'Creative Dev',
          description:
            'An interactive sound experience that combines lo-fi soundscapes with cherry blossom seasons. Built with scroll-driven animation and the GSAP ecosystem.',
        },
        'tokyo-type': {
          category: 'Front-end',
          description:
            'An editorial site about typography in Tokyo. Progressive text animations, vertical Japanese composition, and obsessive attention to typographic details.',
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      h1a: "Let's exchange",
      h1b: 'some ideas.',
      note: "If you have a project in mind, want to chat about development, or just want to say hi, my WhatsApp and email are always open.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
      footerCopy: '© {{year}} Amanda Inagaki · All rights reserved',
      footerNote: 'Built with intention',
      backToTop: 'Back to top',
    },
  },
};

const pt = {
  translation: {
    meta: {
      title: 'Amanda Inagaki — Portfólio',
      description:
        'Amanda Inagaki — Desenvolvedora Front-end. Interfaces claras, com atenção aos detalhes visuais e à experiência de quem usa.',
    },
    common: {
      skipToContent: 'Pular para o conteúdo',
      menu: 'Menu',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      backToTop: 'Voltar ao topo',
    },
    nav: {
      langLabel: 'Idioma',
      navigation: 'Navegação',
      about: 'Sobre',
      stack: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      coverAria: 'Capa',
      kicker: 'Portfólio · {{year}}',
      available: 'Disponível para trabalho',
      role: 'Desenvolvedora Front-end',
      location: 'São Paulo · Brasil',
      intro:
        'Comecei querendo fazer design gráfico, descobri que código podia ir além. Hoje construo interfaces onde criatividade e técnica se encontram.',
      viewWork: 'Ver Projetos',
      contact: 'Falar comigo',
      scroll: 'Role',
    },
    reveal: {
      label: 'O Portfólio',
      title: 'PROJETOS',
      titleEm: 'SELECIONADOS',
      indexAria: 'Índice do portfólio',
      scroll: 'Role para explorar',
      selectedWork: 'Projetos',
    },
    about: {
      eyebrow: 'Sobre',
      h1a: 'Criando interfaces',
      h1b: 'que fazem sentido.',
      tagline: 'Não escrevo código só pra funcionar. Penso em como cada elemento comunica, navega e se comporta pra quem tá do outro lado.',
      paragraphs: [
        'Sou desenvolvedora front-end com foco em interfaces que unem estética e funcionalidade. Comecei estudando design gráfico, mas foi no código que encontrei o espaço pra colocar as ideias em prática de verdade.',
        'Hoje tenho cerca de dois anos de experiência e já entreguei mais de 10 projetos. Meu trabalho é construir interfaces claras, com atenção aos detalhes visuais e à experiência de quem usa.',
        'Estou expandindo minhas habilidades pro back-end, porque entendo que um produto bom depende das duas pontas. Enquanto isso, mantendo o foco no que faço de melhor: pensar a interface antes de escrever a primeira linha.',
      ],
      approachTitle: 'Como eu trabalho',
      approach: [
        'Arquiteto antes de codar',
        'Prefiro processos claros',
        'Cada projeto é um problema diferente',
        'Aprendizado contínuo é prioridade',
        'Detalhes visuais importam',
      ],
      portraitLabel: 'Retrato',
      portraitAlt: 'Retrato de Amanda Inagaki',
    },
    stack: {
      eyebrow: 'Habilidades',
      h1a: 'Ferramentas &',
      h1b: 'tecnologias<dot>.</dot>',
      groups: {
        front: 'Front-end',
        back: 'Back-end',
        flow: 'Fluxo de trabalho',
      },
    },
    projects: {
      eyebrow: 'Projetos',
      h1a: 'Projetos',
      h1b: '<em>selecionados</em>',
      intro:
        'Uma seleção do que já construí. Cada projeto resolve um problema específico com atenção ao detalhe e à experiência final.',
      projectLabel: 'Projeto — {{num}}',
      techsAria: 'Tecnologias utilizadas',
      visit: 'Ver ao vivo',
      github: 'Código',
      list: {
        'fora-do-jogo': {
          category: 'Front-end · Plataforma de Artigos',
          description:
            'Plataforma onde qualquer pessoa pode publicar artigos sobre a internet, passando por um processo de revisão antes de ir ao ar. O conteúdo foca no impacto real da internet na vida das pessoas, tanto os benefícios quanto os riscos. Cada texto passa por uma verificação pra garantir que a informação é confiável.',
        },
        'mr-beagles': {
          category: 'Front-end · Pet Shop',
          description:
            'Site do canil Mr Beagles apresentando o trabalho de criação com Fox Terrier e Beagle. Informações sobre as raças, cuidados e um formulário de contato integrado direto ao WhatsApp pra facilitar a comunicação com os interessados.',
        },
        'kami-notes': {
          category: 'Full-stack',
          description:
            'Aplicativo de notas em markdown com foco em simplicidade. Navegação feita pelo teclado, sincronização em tempo real. Inspirado na estética de papel japonês washi.',
        },
        'hanami-sounds': {
          category: 'Dev Criativo',
          description:
            'Experiência sonora interativa que combina paisagens lo-fi com as estações das cerejeiras. Construída com scroll-driven animation e o ecossistema GSAP.',
        },
        'tokyo-type': {
          category: 'Front-end',
          description:
            'Site editorial sobre tipografia em Tóquio. Animações progressivas de texto, composição vertical em japonês e atenção obsessiva aos detalhes tipográficos.',
        },
      },
    },
    contact: {
      eyebrow: 'Contato',
      h1a: 'Bora trocar',
      h1b: 'uma ideia.',
      note: 'Se você tem um projeto em mente, quer trocar uma ideia sobre desenvolvimento ou só quer dizer oi, meu WhatsApp e e-mail estão sempre abertos.',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
      footerCopy: '© {{year}} Amanda Inagaki · Todos os direitos reservados',
      footerNote: 'Feito com intenção',
      backToTop: 'Voltar ao topo',
    },
  },
};

const ja = {
  translation: {
    meta: {
      title: 'アマンダ・イナガキ — ポートフォリオ',
      description:
        'アマンダ・イナガキ — フロントエンド開発者。視覚的なディテールとユーザー体験に配慮したクリアなインターフェース。',
    },
    common: {
      skipToContent: '本文へスキップ',
      menu: 'メニュー',
      menuOpen: 'メニューを開く',
      menuClose: 'メニューを閉じる',
      backToTop: 'トップへ戻る',
    },
    nav: {
      langLabel: '言語',
      navigation: 'ナビゲーション',
      about: '私について',
      stack: 'スキル',
      projects: '作品',
      contact: 'お問い合わせ',
    },
    hero: {
      coverAria: '表紙',
      kicker: 'ポートフォリオ · {{year}}',
      available: 'お仕事のご相談受付中',
      role: 'フロントエンド開発者',
      location: 'サンパウロ・ブラジル',
      intro:
        'グラフィックデザインから始まり、コードの世界に出会った。今天才と技術が出会うインターフェースを作っています。',
      viewWork: '作品を見る',
      contact: 'お問い合わせ',
      scroll: 'スクロール',
    },
    reveal: {
      label: 'ポートフォリオ',
      title: '厳選された',
      titleEm: '作品',
      indexAria: 'ポートフォリオ目次',
      scroll: 'スクロールして探索',
      selectedWork: '作品',
    },
    about: {
      eyebrow: '私について',
      h1a: 'インターフェースを',
      h1b: '作っています。',
      tagline: '動くコードを書くだけでなく、各要素が向こう側の人にどう伝わり、どうNavigateし、どう振る舞うかを考えています。',
      paragraphs: [
        'フロントエンド開発者として、美学と機能性を兼ね備えたインターフェースに取り組んでいます。グラフィックデザインから始めましたが、コードの中にアイデアを実現する場所を見つけました。',
        '現在2年程度の経験があり、10以上のプロジェクトを納品しています。クリアで、視覚的な詳細とユーザー体験に配慮したインターフェースを構築することが私の仕事です。',
        'バックエンドのスキルも広げています。良いプロダクトには両方が必要だと考えているからです。その一方で、最初の一行を書く前にインターフェースを設計すること、これが一番得意なことです。',
      ],
      approachTitle: '私のアプローチ',
      approach: [
        'コードを書く前に設計する',
        'クリアなプロセスを重視する',
        'それぞれのプロジェクトは異なる問題',
        '継続的な学びを優先する',
        'ビジュアルなディテールを大切にする',
      ],
      portraitLabel: '肖像',
      portraitAlt: 'アマンダ・イナガキの肖像',
    },
    stack: {
      eyebrow: 'スキル',
      h1a: 'ツールと',
      h1b: '技術<dot>。</dot>',
      groups: {
        front: 'フロントエンド',
        back: 'バックエンド',
        flow: 'ワークフロー',
      },
    },
    projects: {
      eyebrow: '作品',
      h1a: '厳選された',
      h1b: '<em>作品</em>',
      intro:
        '私が構築したものから選りすぐり。それぞれのプロジェクトは、ディテールと最終的な体験に配慮しながら、特定の問題を解決しています。',
      projectLabel: 'プロジェクト — {{num}}',
      techsAria: '使用技術',
      visit: 'サイトを見る',
      github: 'コード',
      list: {
        'fora-do-jogo': {
          category: 'フロントエンド · コンテンツプラットフォーム',
          description:
            '誰もがインターネットに関する記事を公開できるプラットフォーム。公開前にレビュー工程を経ます。インターネットが人の生活に与える実際の影響、プラスもマイナスも焦点を当てています。すべての記事は信頼性を確認するための検証を通過します。',
        },
        'mr-beagles': {
          category: 'フロントエンド · ペットサービス',
          description:
            'ミスタービーグル犬舎のウェブサイト。フォックステリアーリーブーグル犬種のブリーディング活動を紹介。犬種情報、ケアガイド、WhatsAppに直接連絡できるお問い合わせフォームを統合。',
        },
        'kami-notes': {
          category: 'フルスタック',
          description:
            'シンプルさにフォーカスしたマークダウンノートアプリ。キーボードのみのナビゲーション、リアルタイム同期。和紙の美学に着想を得て。',
        },
        'hanami-sounds': {
          category: 'クリエイティブ開発',
          description:
            'ローファイなサウンドスケープと桜の季節を組み合わせたインタラクティブな音の体験。スクロール駆動のアニメーションとGSAPエコシステムで構築。',
        },
        'tokyo-type': {
          category: 'フロントエンド',
          description:
            '東京のタイポグラフィをテーマにしたエディトリアルサイト。段階的なテキストアニメーション、日本語の縦組み、タイポグラフィへの徹底したこだわり。',
        },
      },
    },
    contact: {
      eyebrow: 'お問い合わせ',
      h1a: 'イデアを',
      h1b: '交換しましょう。',
      note: 'プロジェクトのアイデアがある方、開発について話したい方、ただ挨拶したい方も、WhatsAppとメールはいつでも受け付けています。',
      email: 'メール',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
      footerCopy: '© {{year}} アマンダ・イナガキ · 無断転載を禁じます',
      footerNote: '意図を持って作る',
      backToTop: 'トップへ戻る',
    },
  },
};

const savedLang =
  typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources: { en, pt, ja },
  lng: savedLang && ['en', 'pt', 'ja'].includes(savedLang) ? savedLang : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

function applyDocumentMeta() {
  if (typeof document === 'undefined') return;
  const lang = i18n.resolvedLanguage;
  document.documentElement.lang = lang;
  document.title = i18n.t('meta.title');
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', i18n.t('meta.description'));
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', i18n.t('meta.title'));
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', i18n.t('meta.description'));
}

i18n.on('languageChanged', (lng) => {
  window.localStorage.setItem(STORAGE_KEY, lng);
  applyDocumentMeta();
});

applyDocumentMeta();

export default i18n;
