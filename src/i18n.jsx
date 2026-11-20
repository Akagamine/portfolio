import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LANGS, translations } from './translations';

const I18nContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) return saved;
  } catch {}
  const nav = (navigator.language || 'en').slice(0, 2);
  return translations[nav] ? nav : 'en';
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const meta = LANGS.find((l) => l.code === lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.title = translations[lang].docTitle;
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang, meta.dir]);

  const value = useMemo(() => ({ lang, setLang, dir: meta.dir, t: translations[lang] }), [lang, meta.dir]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
