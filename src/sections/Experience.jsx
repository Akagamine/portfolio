import { useI18n } from '../i18n.jsx';
import { CONTACT } from '../translations';

const STYLE = [
  { text: 'text-primary', border: 'border-primary/20', hoverBorder: 'hover:border-primary/50 group-hover:border-primary/50', glow: 'hover:shadow-[0_0_24px_rgba(6,182,212,0.25)]', gh: 'group-hover:text-primary', dot: 'bg-primary', icon: 'memory' },
  { text: 'text-secondary', border: 'border-secondary/20', hoverBorder: 'hover:border-secondary/50 group-hover:border-secondary/50', glow: 'hover:shadow-[0_0_24px_rgba(192,193,255,0.25)]', gh: 'group-hover:text-secondary', dot: 'bg-secondary', icon: 'build' },
  { text: 'text-tertiary', border: 'border-tertiary/20', hoverBorder: 'hover:border-tertiary/50 group-hover:border-tertiary/50', glow: 'hover:shadow-[0_0_24px_rgba(208,188,255,0.25)]', gh: 'group-hover:text-tertiary', dot: 'bg-tertiary', icon: 'travel_explore' },
];

export default function Experience() {
  const { t } = useI18n();
  const e = t.experience;
  return (
    <section id="experience" className="w-full px-gutter lg:px-gutter-desktop py-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div className="space-y-space-xs">
          <div className="font-label-sm text-label-sm text-primary tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-primary"></span>
            {e.eyebrow}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{e.title}</h2>
        </div>
        <a href={CONTACT.cv} download className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors mt-space-sm md:mt-0">
          <span>{e.viewAll}</span>
          <span className="material-symbols-outlined text-[16px] rtl:rotate-180">chevron_right</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        {e.items.map((it, i) => {
          const s = STYLE[i];
          return (
            <article key={i} className={`bg-surface-container rounded-xl p-space-lg flex flex-col justify-between border border-outline-variant/20 shadow-md ${s.hoverBorder.split(' ')[0]} ${s.glow} hover:-translate-y-1.5 hover:bg-surface-bright transition-all duration-300 group`}>
              <div className="space-y-space-md">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className={`px-space-xs py-0.5 rounded bg-surface-container-high ${s.text} font-label-sm text-label-sm border ${s.border} transition-colors duration-200`}>{it.tag}</span>
                  <span className={`material-symbols-outlined text-[20px] text-on-surface-variant ${s.gh} transition-colors`}>{s.icon}</span>
                </div>
                <div className="space-y-space-xs">
                  <h3 className={`font-headline-md text-headline-md text-on-surface ${s.gh} transition-colors duration-200`}>{it.title}</h3>
                  <div className="font-label-md text-label-md text-on-surface-variant">{it.org}</div>
                  <div className={`font-label-sm text-label-sm ${s.text}`}>{it.period}</div>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">{it.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-space-xs">
                  {it.chips.map((c) => (
                    <span key={c} className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant border border-outline-variant/20">{c}</span>
                  ))}
                </div>
              </div>
              <div className="mt-space-lg bg-surface-container-low group-hover:bg-surface-container rounded-lg p-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant border border-outline-variant/20 transition-colors duration-200">
                <span>{it.foot}</span>
                <span className={`${s.text} font-semibold flex items-center gap-1`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`}></span>
                  {it.status}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
