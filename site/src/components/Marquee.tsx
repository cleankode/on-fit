import { useLang } from '../i18n/LanguageContext';

export default function Marquee() {
  const { t } = useLang();
  const items = t.marquee;
  return (
    <div className="relative border-y border-white/10 bg-ink-900/40 py-6 overflow-hidden">
      <div className="flex gap-14 whitespace-nowrap animate-marquee will-change-transform">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-14">
            <span className="font-display text-4xl md:text-5xl tracking-hero text-white/80">
              {item}
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-brand-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
