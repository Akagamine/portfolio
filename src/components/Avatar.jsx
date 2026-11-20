import { useState } from 'react';

/**
 * Profile photo slot.
 * Put your photo at /public/profile.jpg — until it exists, a placeholder is shown.
 */
export default function Avatar({ className = '', rounded = 'rounded-full', iconClass = 'text-[18px]', alt = '', hint = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} ${rounded} bg-surface-container-high border border-dashed border-outline flex flex-col items-center justify-center gap-1 text-on-surface-variant text-center overflow-hidden`}
      >
        <span className={`material-symbols-outlined ${iconClass}`}>add_a_photo</span>
        {hint && <span className="font-label-sm text-[10px] px-1 leading-tight">{hint}</span>}
      </div>
    );
  }
  return (
    <img
      src="/profile.jpg"
      alt={alt}
      onError={() => setFailed(true)}
      className={`${className} ${rounded} object-cover border border-outline-variant/40`}
    />
  );
}
