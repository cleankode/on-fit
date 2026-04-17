import { motion } from 'framer-motion';
import { galleryImages } from '../data/site';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-36 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">
              <span className="inline-block h-px w-8 bg-brand-400" />
              Inside ONFIT
            </div>
            <h2 className="section-title">
              The space
              <br />
              <span className="text-brand-400">built for you.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-100/70 text-lg">
            18,000 sq ft of premium equipment, recovery tools, and design that makes you
            want to show up — every single day.
          </p>
        </div>
      </div>

      {/* Full-bleed collage grid — 8 images, mixed spans */}
      <div className="container-x">
        <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[140px] md:auto-rows-[180px] gap-3 md:gap-4">
          {galleryImages.map((src, i) => {
            const span = [
              'col-span-4 md:col-span-3 row-span-2',
              'col-span-2 md:col-span-3 row-span-1',
              'col-span-2 md:col-span-2 row-span-1',
              'col-span-4 md:col-span-2 row-span-2',
              'col-span-2 md:col-span-2 row-span-1',
              'col-span-2 md:col-span-3 row-span-1',
              'col-span-4 md:col-span-3 row-span-1',
              'col-span-4 md:col-span-3 row-span-1',
            ][i];
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
                className={`relative overflow-hidden rounded-2xl group ${span}`}
              >
                <img
                  src={src}
                  alt="ONFIT facility"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
