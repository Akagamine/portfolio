import { useEffect, useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { CONTACT } from '../translations';
import Avatar from '../components/Avatar.jsx';

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  const [temp, setTemp] = useState('29.4');
  const [air, setAir] = useState(42);

  // Demo telemetry for the code card (simulated values)
  useEffect(() => {
    const id = setInterval(() => {
      setTemp((28.5 + Math.random() * 2).toFixed(1));
      setAir(38 + Math.floor(Math.random() * 10));
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="overview" className="relative w-full overflow-hidden px-gutter lg:px-gutter-desktop pt-space-lg pb-space-xl">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        {/* Narrative column */}
        <div className="lg:col-span-7 flex flex-col space-y-space-md">
          <div className="flex items-center gap-space-md">
            <Avatar className="w-72 h-80 shrink-0 shadow-[0_0_30px_rgba(6,182,212,0.25)]" rounded="rounded-xl" iconClass="text-[32px]" alt={CONTACT.name} hint={h.photoHint} />
            <div className="flex flex-col gap-space-xs items-start">
              <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-label-sm text-label-sm text-primary tracking-wide">{h.badge}</span>
              </div>
              <span className="font-headline-md text-headline-md text-5xl text-on-surface">{CONTACT.name}</span>
              <span className="font-label-md text-label-md text-lg text-on-surface-variant">{t.role}</span>
            </div>
          </div>

          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight">
            {h.t1}
            <span className="text-primary">{h.t2}</span>
            {h.t3}
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{h.about}</p>

          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <a href="#experience" className="px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-semibold flex items-center gap-space-xs shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 group">
              <span>{h.ctaExp}</span>
              <span className="material-symbols-outlined text-[18px] rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">arrow_forward</span>
            </a>
            <a href="#skills" className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright hover:shadow-[0_0_16px_rgba(192,193,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 font-headline-sm text-headline-sm transition-all duration-200 flex items-center gap-space-xs shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">code_blocks</span>
              <span>{h.ctaSkills}</span>
            </a>
            <a href={CONTACT.cv} download className="px-space-md py-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high hover:text-primary hover:-translate-y-0.5 active:scale-95 text-on-surface font-body-md text-body-md transition-all duration-200 flex items-center gap-space-xs shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">description</span>
              <span>{h.ctaCv}</span>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="px-space-sm py-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container hover:shadow-[0_0_12px_rgba(76,215,246,0.25)] hover:-translate-y-0.5 active:scale-95 text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-all duration-200">
              <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
              <span>GitHub</span>
              <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary text-[10px]" dir="ltr">@{CONTACT.githubHandle}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
            {h.stack.map((s, i) => (
              <span key={s} className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${['bg-emerald-400', 'bg-primary', 'bg-tertiary'][i]}`}></span>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Code card */}
        <div className="lg:col-span-5 mt-64 relative" dir="ltr">
          <div className="w-full rounded-xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden">
            <div className="px-space-md py-space-xs bg-surface-container flex items-center justify-between border-b border-outline-variant/20">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-surface-variant inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-primary/70 inline-block"></span>
                <span className="font-code-block text-code-block text-on-surface-variant ml-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">code</span>helmet/firmware.ino
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="px-2 py-0.5 rounded bg-surface-container-low text-primary font-label-sm text-label-sm border border-primary/20">ESP32</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 bg-surface-container-low px-space-md py-space-xs gap-2 border-b border-outline-variant/20">
              <div>
                <div className="font-label-sm text-[10px] text-on-surface-variant tracking-wider">{h.code.temp}</div>
                <div className="font-label-md text-label-md text-primary font-bold">{temp} °C</div>
              </div>
              <div>
                <div className="font-label-sm text-[10px] text-on-surface-variant tracking-wider">{h.code.air}</div>
                <div className="font-label-md text-label-md text-tertiary font-bold">{air} AQI</div>
              </div>
              <div>
                <div className="font-label-sm text-[10px] text-on-surface-variant tracking-wider">{h.code.mqtt}</div>
                <div className="font-label-md text-label-md text-emerald-400 font-bold flex items-center gap-1">
                  OK <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>
            </div>

            <div className="p-space-md font-code-block text-code-block text-on-surface-variant space-y-1.5 overflow-x-auto leading-relaxed">
              <div className="text-surface-variant/80 italic">// {h.code.note}</div>
              <div><span className="text-secondary font-semibold">void</span> <span className="text-primary font-semibold">loop</span>() &#123;</div>
              <div className="pl-4"><span className="text-tertiary">float</span> temp = <span className="text-on-surface font-semibold">readTemperature</span>();</div>
              <div className="pl-4"><span className="text-tertiary">int</span> air = <span className="text-on-surface font-semibold">readAirQuality</span>();</div>
              <div className="pl-4 text-emerald-400/90 italic">// send sensor data over MQTT</div>
              <div className="pl-4">mqtt.<span className="text-primary font-semibold">publish</span>(<span className="text-primary-container">"helmet/data"</span>, payload);</div>
              <div>&#125;</div>
            </div>

            <div className="px-space-md py-space-xs bg-surface-container-high border-t border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary animate-pulse">sensors</span>
                <span className="font-label-sm text-label-sm text-on-surface font-medium">{h.code.live}</span>
              </div>
              <svg className="w-36 h-7 overflow-visible" fill="none" viewBox="0 0 120 24" aria-hidden="true">
                <defs>
                  <linearGradient id="spark-grad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4cd7f6" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 16 L20 14 L40 18 L60 8 L80 12 L100 4 L120 7 L120 24 L0 24 Z" fill="url(#spark-fill)" />
                <path d="M0 16 L20 14 L40 18 L60 8 L80 12 L100 4 L120 7" stroke="url(#spark-grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <circle cx="120" cy="7" fill="#acedff" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
