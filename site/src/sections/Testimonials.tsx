import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/site';

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="inline-block h-px w-8 bg-brand-400" />
            Members
          </div>
          <h2 className="section-title">
            Real people.
            <br />
            <span className="text-brand-400">Real results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card p-8 md:p-10 relative"
            >
              <Quote
                size={44}
                className="absolute top-6 right-6 text-brand-400/20"
              />
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-brand-400 text-brand-400"
                  />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                "{t.quote}"
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-display text-ink-950">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-ink-100/60">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
