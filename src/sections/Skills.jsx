import { useState } from 'react';
import { useI18n } from '../i18n.jsx';

const COLORS = {
  primary: { text: 'text-primary', gh: 'group-hover:text-primary', border: 'hover:border-primary/50' },
  secondary: { text: 'text-secondary', gh: 'group-hover:text-secondary', border: 'hover:border-secondary/50' },
  tertiary: { text: 'text-tertiary', gh: 'group-hover:text-tertiary', border: 'hover:border-tertiary/50' },
  error: { text: 'text-error', gh: 'group-hover:text-error', border: 'hover:border-error/50' },
};

const SKILLS = [
  { name: 'React.js', icon: 'integration_instructions', cat: 'front', c: 'primary' },
  { name: 'JavaScript', icon: 'javascript', cat: 'front', c: 'secondary' },
  { name: 'HTML', icon: 'html', cat: 'front', c: 'error' },
  { name: 'CSS', icon: 'css', cat: 'front', c: 'tertiary' },
  { name: 'Node.js / Express.js', icon: 'dns', cat: 'back', c: 'primary' },
  { name: 'Laravel (PHP)', icon: 'code', cat: 'back', c: 'error' },
  { name: 'MySQL', icon: 'database', cat: 'db', c: 'secondary' },
  { name: 'MongoDB', icon: 'storage', cat: 'db', c: 'primary' },
  { name: 'ESP32', icon: 'memory', cat: 'embedded', c: 'primary' },
  { name: 'Sensors', icon: 'sensors', cat: 'embedded', c: 'tertiary' },
  { name: 'Arduino', icon: 'developer_board', cat: 'embedded', c: 'secondary' },
  { name: 'Proteus', icon: 'electrical_services', cat: 'embedded', c: 'error' },
  { name: 'Git / GitHub', icon: 'merge', cat: 'tools', c: 'primary' },
  { name: 'UML', icon: 'schema', cat: 'tools', c: 'secondary' },
  { name: 'Merise', icon: 'account_tree', cat: 'tools', c: 'tertiary' },
  { name: 'Photoshop', icon: 'brush', cat: 'tools', c: 'primary' },
  { name: '3D', icon: 'view_in_ar', cat: 'tools', c: 'secondary' },
];

const TABS = ['all', 'front', 'back', 'db', 'embedded', 'tools'];

export default function Skills() {
  const { t } = useI18n();
  const [tab, setTab] = useState('all');
  const list = tab === 'all' ? SKILLS : SKILLS.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="w-full bg-surface-container-lowest px-gutter lg:px-gutter-desktop py-space-xl">
      <div className="flex flex-col space-y-space-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-primary tracking-widest">{t.skills.eyebrow}</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{t.skills.title}</h2>
          </div>
          <div className="flex flex-wrap gap-space-xs bg-surface-container p-1 rounded-lg self-start" role="tablist">
            {TABS.map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`px-space-md py-space-xs rounded-md font-label-md text-label-md transition-all ${
                  tab === id ? 'bg-surface-container-high text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {t.skills.tabs[id]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-sm">
          {list.map((s) => {
            const c = COLORS[s.c];
            return (
              <div key={s.name} className={`p-space-md rounded-xl bg-surface-container border border-outline-variant/20 flex flex-col items-center justify-center text-center space-y-2 hover:bg-surface-bright ${c.border} hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] hover:-translate-y-1 transition-all duration-200 cursor-default group`}>
                <span className={`material-symbols-outlined text-[32px] ${c.text} group-hover:scale-110 transition-transform duration-200`}>{s.icon}</span>
                <span className={`font-headline-sm text-headline-sm text-on-surface ${c.gh} transition-colors duration-200`}>{s.name}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{t.skills.cat[s.cat]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
