import { portraitImage } from './images';

export const profile = {
  name: {
    first: 'Amanda',
    last: 'Inagaki',
    monogram: 'AI',
  },
  roleJp: 'フロントエンド開発者',
  year: 2026,
  heroJp: '創る',
  portrait: portraitImage,
  socials: {
    email: 'inagakilanding@gmail.com',
    github: 'https://github.com/inagakidev',
    linkedin: 'https://www.linkedin.com/in/amanda-inagaki',
    instagram: 'https://www.instagram.com/amandfsk',
  },
};

// Ordem de exibição na seção de contato; o rótulo vem do i18n (contact.<id>).
export const contactLinks = [
  { id: 'email', value: profile.socials.email, href: `mailto:${profile.socials.email}` },
  { id: 'linkedin', value: '@amanda-inagaki', href: profile.socials.linkedin },
  { id: 'github', value: '@inagakidev', href: profile.socials.github },
  { id: 'instagram', value: '@amandfsk', href: profile.socials.instagram },
];
