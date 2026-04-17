import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ChevronDown } from 'lucide-react';
import { site, faqs } from '../data/site';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow mb-4">
              <span className="inline-block h-px w-8 bg-brand-400" />
              Join ONFIT
            </div>
            <h2 className="section-title">
              Let's get you
              <br />
              <span className="text-brand-400">started.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-100/75 max-w-lg">
              Fill out the form below and a coach will reach out within 24 hours to schedule
              your free intro and facility tour.
            </p>

            <div className="mt-10 card p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-400/10 border border-brand-400/30 text-brand-400 mb-5">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-3xl font-display tracking-hero text-white">
                    Welcome to ONFIT.
                  </h3>
                  <p className="mt-3 text-ink-100/70 max-w-sm mx-auto">
                    We got your info. A coach will reach out within 24 hours to schedule your
                    free intro.
                  </p>
                  <button
                    className="btn-ghost mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="First name" name="firstName" required />
                    <Field label="Last name" name="lastName" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <Label>Goal</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['Lose fat', 'Build muscle', 'Get strong', 'Feel better'].map((g, i) => (
                        <label
                          key={g}
                          className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-ink-100/90 cursor-pointer hover:border-brand-400/50 hover:text-white has-[:checked]:border-brand-400 has-[:checked]:bg-brand-400/10 has-[:checked]:text-brand-300 transition"
                        >
                          <input
                            type="radio"
                            name="goal"
                            value={g}
                            defaultChecked={i === 0}
                            className="sr-only"
                          />
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Message (optional)</Label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us what you're working toward..."
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-ink-50 placeholder:text-ink-100/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 transition resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Claim my free intro
                  </button>
                  <p className="text-xs text-ink-100/50 text-center">
                    By submitting you agree to our terms and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info + FAQ */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="card p-8 space-y-5"
            >
              <InfoRow icon={<MapPin size={18} />} title="Visit us" value={site.address} />
              <InfoRow icon={<Phone size={18} />} title="Call" value={site.phone} />
              <InfoRow icon={<Mail size={18} />} title="Email" value={site.email} />
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400">
                  <Clock size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-ink-100/60">Hours</div>
                  <div className="mt-2 space-y-1">
                    {site.hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm text-ink-100/90">
                        <span className="text-ink-100/70">{h.day}</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-3"
            >
              {faqs.map((f, i) => (
                <div key={f.q} className={`${i !== 0 ? 'border-t border-white/5' : ''}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left group"
                  >
                    <span className="font-semibold text-white pr-4 group-hover:text-brand-300">
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-none text-brand-400 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-ink-100/75 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block mb-2 text-xs uppercase tracking-widest text-ink-100/70">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-ink-50 placeholder:text-ink-100/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 transition"
      />
    </div>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-ink-100/60">{title}</div>
        <div className="mt-0.5 text-white">{value}</div>
      </div>
    </div>
  );
}
