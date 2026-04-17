import { motion } from 'framer-motion';
import { equipmentImages } from '../data/site';
import { useLang } from '../i18n/LanguageContext';

export default function Equipment() {
  const { t } = useLang();
  return (
    <section id="equipment" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">
              <span className="inline-block h-px w-8 bg-brand-400" />
              {t.equipment.eyebrow}
            </div>
            <h2 className="section-title">
              {t.equipment.titleA}
              <br />
              <span className="text-brand-400">{t.equipment.titleB}</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-100/70 text-lg">{t.equipment.body}</p>
        </div>

        {/* Alternating large feature blocks */}
        <div className="space-y-10 md:space-y-16">
          {t.equipment.items.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-12 gap-6 md:gap-10 items-center ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 group">
                  <img
                    src={equipmentImages[i]}
                    alt={item.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                    {t.equipment.signature}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-400">
                    0{i + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display tracking-hero text-white leading-[1.05]">
                    {item.title}
                  </h3>
                  <p className="text-lg text-ink-100/75 leading-relaxed">{item.desc}</p>
                  <div className="pt-2 flex items-center gap-3 text-sm text-ink-100/60">
                    <span className="inline-block h-px w-10 bg-brand-400/50" />
                    {t.equipment.tagline}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
