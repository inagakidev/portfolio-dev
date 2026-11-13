import { describe, expect, it } from 'vitest';
import en from './locales/en';
import pt from './locales/pt';
import ja from './locales/ja';
import { SUPPORTED_LANGUAGES } from './index';
import { projects } from '../data/projects';
import { stack } from '../data/stack';
import { sections } from '../data/sections';
import { contactLinks } from '../data/profile';

const locales = { en, pt, ja };

// Achata { a: { b: 'x' } } em { 'a.b': 'x' }; arrays contam como valor.
function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(acc, flatten(value, path));
    } else {
      acc[path] = value;
    }
    return acc;
  }, {});
}

function placeholders(value) {
  return [...String(value).matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]).sort();
}

const flat = Object.fromEntries(
  Object.entries(locales).map(([lng, messages]) => [lng, flatten(messages)]),
);
const enKeys = Object.keys(flat.en).sort();

describe('locales', () => {
  it('cobre todos os idiomas suportados', () => {
    expect(Object.keys(locales).sort()).toEqual([...SUPPORTED_LANGUAGES].sort());
  });

  describe.each(['pt', 'ja'])('%s', (lng) => {
    it('tem exatamente as mesmas chaves que en', () => {
      expect(Object.keys(flat[lng]).sort()).toEqual(enKeys);
    });

    it('usa as mesmas interpolações que en', () => {
      for (const key of enKeys) {
        expect(placeholders(flat[lng][key]), key).toEqual(placeholders(flat.en[key]));
      }
    });

    it('usa os mesmos tipos de valor que en', () => {
      for (const key of enKeys) {
        expect(Array.isArray(flat[lng][key]), key).toBe(Array.isArray(flat.en[key]));
      }
    });
  });

  it('não tem textos vazios', () => {
    for (const [lng, messages] of Object.entries(flat)) {
      for (const [key, value] of Object.entries(messages)) {
        const values = Array.isArray(value) ? value : [value];
        for (const text of values) expect(String(text).trim(), `${lng}:${key}`).not.toBe('');
      }
    }
  });
});

describe('dados com tradução', () => {
  const required = [
    ...projects.flatMap(({ id }) => [
      `projects.list.${id}.category`,
      `projects.list.${id}.description`,
    ]),
    ...stack.groups.map(({ id }) => `stack.groups.${id}`),
    ...sections.flatMap(({ id }) => [`${id}.eyebrow`, `nav.${id}`]),
    ...contactLinks.map(({ id }) => `contact.${id}`),
  ];

  it.each(required)('%s existe em en', (key) => {
    expect(flat.en).toHaveProperty([key]);
  });
});
