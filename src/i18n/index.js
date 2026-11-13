import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';

const STORAGE_KEY = 'portfolio.lang';
export const SUPPORTED_LANGUAGES = ['en', 'pt', 'ja'];

const localeLoaders = {
  pt: () => import('./locales/pt.js'),
  ja: () => import('./locales/ja.js'),
};

function getSavedLanguage() {
  if (typeof window === 'undefined') return null;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved && SUPPORTED_LANGUAGES.includes(saved) ? saved : null;
  } catch {
    return null;
  }
}

async function loadLocale(lng) {
  if (i18n.hasResourceBundle(lng, 'translation')) return;
  const loader = localeLoaders[lng];
  if (!loader) return;
  const { default: translation } = await loader();
  i18n.addResourceBundle(lng, 'translation', translation, true, true);
}

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

let initPromise;

export function initI18n() {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const lng = getSavedLanguage() ?? 'en';
    const resources = { en: { translation: en } };

    if (lng !== 'en') {
      try {
        const { default: translation } = await localeLoaders[lng]();
        resources[lng] = { translation };
      } catch (error) {
        console.error(`Failed to load locale "${lng}"`, error);
      }
    }

    await i18n.use(initReactI18next).init({
      resources,
      lng,
      fallbackLng: 'en',
      supportedLngs: SUPPORTED_LANGUAGES,
      interpolation: { escapeValue: false },
      partialBundledLanguages: true,
    });

    i18n.on('languageChanged', (nextLng) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLng);
      } catch {
        // Storage can be unavailable in private browsing modes.
      }
      applyDocumentMeta();
    });

    applyDocumentMeta();
    return i18n;
  })();

  return initPromise;
}

export async function changeLanguage(lng) {
  if (!SUPPORTED_LANGUAGES.includes(lng)) return;

  try {
    await loadLocale(lng);
    await i18n.changeLanguage(lng);
  } catch (error) {
    console.error(`Failed to change language to "${lng}"`, error);
  }
}

export default i18n;
