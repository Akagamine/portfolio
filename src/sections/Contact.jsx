import { useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { CONTACT } from '../translations';

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const submit = (ev) => {
    ev.preventDefault();
    const subject = encodeURIComponent(`${c.form.subject} ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const input = 'w-full px-space-sm py-2 bg-surface-container text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary hover:bg-surface-container-high transition-all duration-200';

  return (
    <section id="contact" className="w-full bg-surface-container-lowest px-gutter lg:px-gutter-desktop py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg xl:gap-space-xl">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-tertiary">
              <span className="material-symbols-outlined text-[14px]">radio_button_checked</span>
              <span className="tracking-wider">{c.eyebrow}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{c.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{c.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between gap-space-xs hover:bg-surface-container transition-colors shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">{c.mail}</span>
                <button type="button" onClick={copyEmail} className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1 font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">{copied ? 'check' : 'content_copy'}</span>
                  <span>{copied ? c.copied : c.copy}</span>
                </button>
              </div>
              <a href={`mailto:${CONTACT.email}`} dir="ltr" className="font-code-inline text-code-inline text-on-surface font-medium truncate text-start">{CONTACT.email}</a>
            </div>

            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between gap-space-xs hover:bg-surface-container transition-colors shadow-sm border border-outline-variant/20 group">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">{c.phone}</span>
                <span className="material-symbols-outlined text-[14px] text-tertiary">call</span>
              </div>
              <span dir="ltr" className="font-code-inline text-code-inline text-on-surface font-medium text-start">{CONTACT.phone}</span>
            </a>

            <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between gap-space-xs shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">{c.location}</span>
                <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-medium">{c.locationValue}</span>
            </div>

            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between gap-space-xs hover:bg-surface-container transition-colors shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">GitHub</span>
                <span className="material-symbols-outlined text-[14px] text-tertiary rtl:-scale-x-100">north_east</span>
              </div>
              <span dir="ltr" className="font-code-inline text-code-inline text-on-surface font-medium text-start">@{CONTACT.githubHandle}</span>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 p-space-lg bg-surface-container-low rounded-xl flex flex-col gap-space-md shadow-md border border-outline-variant/20 self-start">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">{c.form.title}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <label className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface-variant">
              <span>{c.form.name} <span className="text-primary">*</span></span>
              <input className={input} required type="text" placeholder={c.form.namePh} value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface-variant">
              <span>{c.form.email} <span className="text-primary">*</span></span>
              <input className={input} required type="email" dir="ltr" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <label className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface-variant">
            <span>{c.form.message} <span className="text-primary">*</span></span>
            <textarea className={`${input} min-h-32 resize-y`} required placeholder={c.form.msgPh} value={msg} onChange={(e) => setMsg(e.target.value)} />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{c.form.hint}</span>
            <button type="submit" className="px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-semibold flex items-center gap-space-xs shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200">
              <span>{c.form.send}</span>
              <span className="material-symbols-outlined text-[18px] rtl:-scale-x-100">send</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
