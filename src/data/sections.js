// Fonte única das seções navegáveis: a ordem define a numeração exibida no
// cabeçalho de cada seção, no menu overlay e no índice do reveal do hero.
export const sections = [
  { id: 'about', jp: '私' },
  { id: 'stack', jp: '道具' },
  { id: 'projects', jp: '作品' },
  { id: 'contact', jp: '連絡' },
].map((section, i) => ({ ...section, number: String(i + 1).padStart(2, '0') }));

export const sectionsById = Object.fromEntries(sections.map((section) => [section.id, section]));
