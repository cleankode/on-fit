import { motion } from 'framer-motion';
import { ArrowRight, Play, Dumbbell, Flame, Timer } from 'lucide-react';
import { asset } from '../data/site';
import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const chipIcons = [Dumbbell, Flame, Timer];

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Video background — lightweight clip (~2.4 MB) for instant first paint */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={asset('videos/vid2.mp4')}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={asset('images/IMG_1252.jpg')}
        />
        {/* Gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/65 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative container-x flex min-h-[100svh] flex-col justify-center pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="eyebrow mb-6">
            <span className="inline-block h-px w-8 bg-brand-400" />
            {t.hero.eyebrow}
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-display leading-[0.88] tracking-hero text-white">
            {t.hero.headline1}
            <br />
            <span className="text-brand-400">{t.hero.headline2}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
            {t.hero.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="btn-primary text-base group">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#programs" className="btn-ghost text-base group">
              <Play size={16} className="fill-current" />
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Feature chips */}
          <div className="mt-12 flex flex-wrap gap-3">
            {t.hero.chips.map((label, i) => {
              const Icon = chipIcons[i] ?? Dumbbell;
              return (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-100/90 backdrop-blur-sm"
                >
                  <Icon size={15} className="text-brand-400" />
                  {label}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats floating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl"
        >
          {t.stats.map((s) => (
            <div key={s.label} className="border-l border-brand-400/40 pl-4">
              <div className="text-3xl md:text-5xl font-display tracking-hero text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-ink-100/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ink-100/60">
        <div className="flex flex-col items-center gap-2">
          Scroll
          <span className="h-8 w-px bg-gradient-to-b from-brand-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
