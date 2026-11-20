import { useI18n } from '../i18n.jsx';

const STYLE = [
  { icon: 'work', text: 'text-primary', hoverText: 'group-hover:text-primary', border: 'hover:border-primary/50', glow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]' },
  { icon: 'translate', text: 'text-secondary', hoverText: 'group-hover:text-secondary', border: 'hover:border-secondary/50', glow: 'hover:shadow-[0_0_20px_rgba(192,193,255,0.25)]' },
  { icon: 'school', text: 'text-tertiary', hoverText: 'group-hover:text-tertiary', border: 'hover:border-tertiary/50', glow: 'hover:shadow-[0_0_20px_rgba(208,188,255,0.25)]' },
  { icon: 'memory', text: 'text-emerald-400', hoverText: 'group-hover:text-emerald-400', border: 'hover:border-emerald-400/50', glow: 'hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]' },
];

export default function Metrics() {
  const { t } = useI18n();
  return (
    <section className="w-full bg-surface-container-low px-gutter lg:px-gutter-desktop py-space-lg shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
        {t.metrics.map((m, i) => {
          const s = STYLE[i];
          return (
            <div key={i} className={`p-space-md bg-surface rounded-xl flex flex-col space-y-1 border border-outline-variant/30 shadow-sm ${s.border} ${s.glow} hover:-translate-y-1 transition-all duration-200 cursor-default group`}>
              <span className={`font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 ${s.hoverText} transition-colors duration-200`}>
                <span className={`material-symbols-outlined text-[16px] ${s.text}`}>{s.icon}</span>
                {m.label}
              </span>
              <div className={`font-display-hero text-[36px] font-bold text-on-surface tracking-tight ${s.hoverText} transition-colors duration-200`}>{m.value}</div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{m.caption}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
