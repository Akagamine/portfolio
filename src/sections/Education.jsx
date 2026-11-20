import { useI18n } from '../i18n.jsx';

export default function Education() {
  const { t } = useI18n();
  const e = t.education;
  return (
    <section id="education" className="w-full px-gutter lg:px-gutter-desktop py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        <div className="lg:col-span-7 space-y-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm text-primary tracking-widest">{e.eyebrow}</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{e.title}</h2>
          </div>
          <div className="flex flex-col gap-space-md">
            {e.items.map((it, i) => (
              <article key={i} className="group p-space-lg bg-surface-container-low hover:bg-surface-container rounded-xl transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 border border-outline-variant/15">
                <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xs">
                  <span className="font-label-sm text-label-sm text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">school</span>
                    {it.period}
                  </span>
                  {it.note && (
                    <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant/30 flex items-center gap-1">
                      {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>}
                      {it.note}
                    </span>
                  )}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors tracking-tight">{it.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{it.school}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-space-md lg:pt-[4.5rem]">
          <div className="p-space-lg bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-md">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="material-symbols-outlined text-[20px] text-secondary">translate</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{e.languages}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {e.langList.map((l) => (
                <span key={l} className="px-space-sm py-1 rounded bg-surface-container font-label-md text-label-md text-on-surface border border-outline-variant/20">{l}</span>
              ))}
            </div>
          </div>
          <div className="p-space-lg bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-md">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="material-symbols-outlined text-[20px] text-tertiary">interests</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{e.interests}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {e.interestList.map((l) => (
                <span key={l} className="px-space-sm py-1 rounded bg-surface-container font-label-md text-label-md text-on-surface border border-outline-variant/20">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
