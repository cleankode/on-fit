import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { pricing } from '../data/site';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-4">
            <span className="inline-block h-px w-8 bg-brand-400" />
            Membership
          </div>
          <h2 className="section-title">
            Flexible plans.
            <br />
            <span className="text-brand-400">No contracts.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-100/75 max-w-xl">
            Month-to-month. Cancel or pause anytime. Every plan includes access to
            our members-only app, programming library, and events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative card p-8 md:p-10 flex flex-col ${
                tier.featured
                  ? 'border-brand-400/50 bg-gradient-to-b from-brand-400/[0.08] to-ink-900/60 shadow-[0_30px_100px_-30px_rgba(63,169,220,0.4)]'
                  : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950">
                  <Sparkles size={12} />
                  Most popular
                </div>
              )}

              <div>
                <h3 className="text-3xl font-display tracking-hero text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-ink-100/70 max-w-[30ch]">{tier.desc}</p>
              </div>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-6xl font-display tracking-hero text-white">
                  ${tier.price}
                </span>
                <span className="mb-2 text-sm text-ink-100/60">/ {tier.period}</span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-100/85">
                    <Check
                      size={18}
                      className={`mt-0.5 flex-none ${
                        tier.featured ? 'text-brand-400' : 'text-brand-400/80'
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 ${
                  tier.featured ? 'btn-primary' : 'btn-ghost'
                } w-full justify-center`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-100/60">
          All plans start with a free consultation and intro session. No joining fee.
        </p>
      </div>
    </section>
  );
}
