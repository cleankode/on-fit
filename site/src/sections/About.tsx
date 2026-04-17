import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    title: 'Branded ONFIT machines',
    desc: 'Our entire plate-loaded line is custom-built and branded. Honest mechanics, no excuses.',
  },
  {
    title: 'A floor built to deliver',
    desc: '18,000 sq ft of branded equipment, full dumbbell racks, cable jungles, and dedicated cardio decks.',
  },
  {
    title: '"ONE MORE." mentality',
    desc: 'It\'s painted on the wall and lived on the floor. We\'re here to push, not posture.',
  },
  {
    title: 'No half-empty racks',
    desc: 'Every rack full. Every machine working. Every rep counted. That\'s the promise.',
  },
];

export default function About() {
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
              Why ONFIT
            </div>
            <h2 className="section-title">
              Not another
              <br />
              <span className="text-stroke">big box</span>
              <br />
              <span className="text-brand-400">gym.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-100/80 max-w-md">
              We built ONFIT for people who want more than mirrors and machines.
              You bring the drive — we bring the science, the space, and the squad.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-5">
            {pillars.map((p, i) => (
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
