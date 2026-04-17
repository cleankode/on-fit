import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navHrefs } from '../data/site';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/dict';
import Wordmark from './Wordmark';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a
          href="#top"
          aria-label="ONFIT — home"
          className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <Wordmark size="text-2xl md:text-[1.7rem]" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navHrefs.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink-100/80 transition-colors hover:text-white"
            >
              <span className="relative">
                {t.nav[item.key]}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-ink-100/80 hover:text-white">
            {t.nav.signIn}
          </a>
          <a href="#pricing" className="btn-primary text-sm">
            {t.nav.joinNow}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x pb-8 pt-2 flex flex-col gap-1 border-t border-white/5 bg-ink-950/95 backdrop-blur-xl">
          {navHrefs.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-medium text-ink-100 hover:bg-white/5"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary mt-4 text-base">
            {t.nav.joinNow}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const base =
    'px-2.5 py-1 text-xs font-semibold uppercase tracking-widest transition-colors';
  const active = 'text-ink-950 bg-brand-400';
  const idle = 'text-ink-100/70 hover:text-white';
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? active : idle}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ti')}
        aria-pressed={lang === 'ti'}
        className={`${base} ${lang === 'ti' ? active : idle}`}
      >
        ትግ
      </button>
    </div>
  );
}
