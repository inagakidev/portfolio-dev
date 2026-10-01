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
      h1b: 'that make <em>sense</em>.',
      tagline: "I don't just build with code. I connect design, strategy, and code so that every interface not only looks good — but delivers, converts, and makes sense to the person on the other side.",
      paragraphs: [
        "I'm a front-end developer who came from digital marketing. That's where I learned that a good product isn't born from code or aesthetics alone — it's born from strategy: understanding who you're talking to, what you want to say, and why.",
        "Today I combine design + strategy + code to build interfaces. Design gives form, strategy gives direction, and code brings to life what needs to actually work for the people using it.",
        "My marketing background gave me a perspective that goes beyond the screen: I think about conversion, message, journey, and experience. And front-end is where it all comes together into something tangible.",
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
      h1b: '<dot>technologies</dot><dot>.</dot>',
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
        'sixt': {
          category: 'Front-end · Car Rental',
          description:
            'Landing page for Sixt built in React with scroll-driven animations powered by GSAP. Designed with a focus on connection, ease of use, and performance — giving users a smooth and immersive way to explore Sixt\'s services and brand identity.',
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
      h1b: 'some <em>ideas</em>.',
      note: "If you have a project in mind, want to chat about development, or just want to say hi, my email are always open.",
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
      viewWork: 'Projetos',
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
      h1b: 'que fazem <em>sentido</em>.',
      tagline: 'Não construo só com código. Uno design, estratégia e código pra que cada interface não apenas fique bonita — mas entregue, converta e faça sentido pra quem tá do outro lado.',
      paragraphs: [
        'Sou desenvolvedora front-end que veio do marketing digital. Foi lá que aprendi que um bom produto não nasce só de código ou estética — nasce de estratégia: entender pra quem se fala, o que se quer comunicar e por quê.',
        'Hoje uno design + estratégia + código na construção de interfaces. O design dá forma, a estratégia dá direção e o código dá vida ao que precisa funcionar de verdade pra quem usa.',
        'Minha trajetória no marketing me trouxe um olhar que vai além da tela: penso em conversão, mensagem, jornada e experiência. E o front-end é onde tudo isso se encontra em algo tangível.',
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
      h1b: '<dot>tecnologias</dot><dot>.</dot>',
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
        'sixt': {
          category: 'Front-end · Locadora de Veículos',
          description:
            'Landing page da Sixt desenvolvida em React com animações de scroll usando GSAP. Pensada em conexão, facilidade de uso e performance — oferecendo uma experiência fluida e imersiva pra conhecer os serviços e a identidade da marca.',
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
      h1b: 'uma <em>ideia</em>.',
      note: 'Se você tem um projeto em mente, quer trocar uma ideia sobre desenvolvimento ou só quer dizer oi, meu e-mail está sempre aberto.',
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
      h1b: '作って<em>います</em>。',
      tagline: 'コードだけで構築しているわけではありません。デザイン、戦略、コードを結びつけ、すべてのインターフェースが見た目だけでなく、向こう側の人にとって価値を生み、理解できるものにしています。',
      paragraphs: [
        'デジタルマーケティング出身のフロントエンド開発者です。そこで学んだのは、良いプロダクトはコードや美しさだけから生まれるのではなく、戦略から生まれるということ：誰に伝えるのか、何を伝えたいのか、そしてなぜなのかを理解することです。',
        '今日はデザイン＋戦略＋コードを組み合わせてインターフェースを構築しています。デザインは形を与え、戦略は方向性を与え、コードは使う人にとって本当に機能するものに命を吹き込みます。',
        'マーケティングの経歴は、画面の向こうまで見渡せる視点をもたらしました：コンバージョン、メッセージ、ジャーニー、体験を考えます。そしてフロントエンドは、それらすべてが具体的な形になる場所です。',
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
      h1b: '<dot>技術</dot><dot>。</dot>',
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
        'sixt': {
          category: 'フロントエンド · カーレンタル',
          description:
            'Reactで構築し、GSAPのスクロールアニメーションを採用したSixtのランディングページ。接続性、使いやすさ、パフォーマンスを重視した設計。ブランドのサービスとアイデンティティをスムーズで没入感のある体体験で紹介します。',
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
      h1b: '交換<em>しましょう</em>。',
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
