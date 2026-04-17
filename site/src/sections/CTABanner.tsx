import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { asset } from '../data/site';
import { useLang } from '../i18n/LanguageContext';

export default function CTABanner() {
  const { t } = useLang();
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={asset('videos/vid1.mp4')}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={asset('images/IMG_1236.jpg')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/40" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="relative p-10 md:p-20 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-display tracking-hero leading-[0.95] text-white">
              {t.cta.headlineA}
              <br />
              {t.cta.headlineB} <span className="text-brand-400">{t.cta.highlight}</span>
            </h2>
            <p className="mt-6 text-lg text-ink-100/85 max-w-xl">
              {t.cta.body}{' '}
              <span className="text-brand-300 font-semibold">{t.cta.tagline}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary group">
                {t.cta.primary}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#pricing" className="btn-ghost">
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
