import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/site';
import Wordmark from './Wordmark';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink-100/80 transition-colors hover:text-white"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-ink-100/80 hover:text-white">
            Sign in
          </a>
          <a href="#pricing" className="btn-primary text-sm">
            Join Now
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x pb-8 pt-2 flex flex-col gap-1 border-t border-white/5 bg-ink-950/95 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-medium text-ink-100 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary mt-4 text-base">
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
}
