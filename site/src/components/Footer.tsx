import { Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import Wordmark from './Wordmark';
import Logo from './Logo';
import { navHrefs, site } from '../data/site';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-5">
            <a href="#top" aria-label="ONFIT — home" className="inline-block">
              <Wordmark size="text-3xl md:text-4xl" />
            </a>
            <p className="text-ink-100/70 max-w-sm leading-relaxed">
              {t.footer.tagline}{' '}
              <span className="text-brand-300 font-semibold">ONE MORE.</span>
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Instagram, href: site.socials.instagram, label: 'Instagram' },
                { icon: Facebook, href: site.socials.facebook, label: 'Facebook' },
                { icon: Youtube, href: site.socials.youtube, label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-brand-400 hover:text-brand-400 hover:bg-brand-400/5"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-ink-100/60 mb-4">
              {t.footer.explore}
            </div>
            <ul className="space-y-2">
              {navHrefs.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-1 text-ink-100 hover:text-brand-300 transition"
                  >
                    {t.nav[n.key]}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-ink-100/60 mb-4">
              {t.footer.visit}
            </div>
            <address className="not-italic text-ink-100/90 leading-relaxed">
              {t.address}
              <br />
              <a href={`tel:${site.phone}`} className="hover:text-brand-300">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                {site.email}
              </a>
            </address>
          </div>
        </div>

        {/* Oversized brand statement */}
        <div className="mt-16 select-none overflow-hidden">
          <div className="flex items-center justify-center gap-[0.18em] font-sans font-extrabold tracking-tight leading-[0.85] text-white text-[clamp(4rem,22vw,22rem)]">
            <Logo
              withGlow={false}
              className="h-[0.85em] w-[0.85em] text-brand-400 drop-shadow-[0_0_60px_rgba(63,169,220,0.55)]"
            />
            <span>
              <span className="text-brand-300">O</span>NFIT
            </span>
          </div>
          <div className="mt-3 text-center text-[10px] md:text-xs uppercase tracking-[0.5em] text-ink-100/40">
            {t.footer.oneMore}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-100/50">
          <div>© {new Date().getFullYear()} {t.footer.rights}</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
