import { useEffect, useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { LANGS, CONTACT } from '../translations';
import Avatar from './Avatar.jsx';

const SECTIONS = ['overview', 'experience', 'skills', 'education', 'contact'];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [active, setActive] = useState('overview');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-16 w-full px-gutter lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md shrink-0">
          <a className="flex items-center gap-space-sm group" href="#overview">
            <span className="h-8 w-8 rounded-lg bg-primary-container text-on-primary-container font-code-inline text-code-inline font-bold flex items-center justify-center" dir="ltr">EB</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors tracking-tight">{CONTACT.name}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{t.role}</span>
            </div>
          </a>
          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{t.available}</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-space-md" aria-label="Main">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`py-space-xs px-space-xs transition-colors ${
                active === id ? 'text-primary font-bold' : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm shrink-0">
          <div className="flex items-center gap-1 bg-surface-container-low rounded-lg p-0.5" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                title={l.full}
                className={`min-w-8 px-2 py-1 rounded-md font-label-md text-label-md transition-all ${
                  lang === l.code ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="hidden sm:block h-4 w-px bg-surface-variant"></div>
          <a href="#contact" className="hidden sm:block" aria-label={t.nav.contact}>
            <Avatar className="w-8 h-8 hover:border-primary transition-all" alt={CONTACT.name} />
          </a>
          <button
            type="button"
            className="lg:hidden w-8 h-8 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[20px]">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-gutter py-space-sm flex flex-col" aria-label="Mobile">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`py-space-sm font-body-md text-body-md ${active === id ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
