import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { programs } from '../data/site';

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">
              <span className="inline-block h-px w-8 bg-brand-400" />
              Programs
            </div>
            <h2 className="section-title">
              Programs built for
              <br />
              <span className="text-brand-400">every level.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-100/70 text-lg">
            Whether you're just starting or chasing a new PR, we have a track for you.
            Explore six pillars designed by coaches who compete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="card card-hover group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="font-display text-sm tracking-[0.3em] text-brand-400">
                    {p.tag}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs uppercase tracking-widest text-brand-400/90 mb-2">
                    {p.subtitle}
                  </div>
                  <h3 className="text-3xl font-display tracking-hero text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-100/80 leading-relaxed max-w-[30ch]">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
