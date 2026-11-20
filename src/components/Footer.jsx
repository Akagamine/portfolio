import { useI18n } from '../i18n.jsx';
import { CONTACT } from '../translations';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="w-full bg-surface-container-lowest py-space-lg border-t border-outline-variant/10">
      <div className="w-full px-gutter lg:px-gutter-desktop flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
          <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
          <span>{t.footer.built}</span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} {CONTACT.name}. {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}
