import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="eyebrow mb-6">
              <span className="inline-block h-px w-8 bg-brand-400" />
              {t.about.eyebrow}
            </div>
            <h2 className="section-title">
              {t.about.titleA}
              <br />
              <span className="text-stroke">{t.about.titleB}</span>
              <br />
              <span className="text-brand-400">{t.about.titleC}</span>
            </h2>
            <p className="mt-6 text-lg text-ink-100/80 max-w-md">{t.about.body}</p>
          </motion.div>

          <div className="lg:col-span-7 space-y-5">
            {t.about.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card card-hover p-8 md:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-400/10 text-brand-400 border border-brand-400/20">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl text-white font-display tracking-hero">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-ink-100/75 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
