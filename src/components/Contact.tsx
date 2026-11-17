import { useState } from 'react'
import { motion } from 'motion/react'
import { profile, roles } from '../data/site'
import Icon, { type IconName } from './Icon'
import { Reveal } from './ui/Reveal'

function CopyEmail() {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setDone(true)
      setTimeout(() => setDone(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <button
      onClick={copy}
      className="group flex items-center gap-2.5 rounded-full border border-white/12 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.13em] text-mute transition-colors duration-300 hover:border-ember/50 hover:text-bone"
    >
      <Icon name={done ? 'check' : 'copy'} size={13} className={done ? 'text-ember' : ''} />
      {done ? 'Copied' : 'Copy email'}
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.06]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(255,107,61,0.16), transparent 62%)',
          filter: 'blur(24px)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.18em] text-ember">09</span>
                <span className="h-px w-8 bg-ember/40" />
                <span className="label">Contact</span>
              </div>
            </Reveal>

            <h2 className="font-display text-[clamp(2.5rem,7vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-bone">
              <Reveal>
                <span className="block">Ready to build</span>
              </Reveal>
              <Reveal delay={0.08}>
                <span className="block italic ember-text">together?</span>
              </Reveal>
            </h2>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[46ch] text-[14px] leading-relaxed text-mute">
                Open to Strategy, Growth &amp; Ops, Consulting and Program Management roles across
                India. If the problem is hard and the team is sharp — let&apos;s talk. I reply within
                24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Let%27s%20talk`}
                  className="group flex items-center gap-2.5 rounded-full bg-ember px-6 py-3.5 text-[13px] font-medium text-void transition-all duration-300 hover:bg-ember-soft"
                >
                  <Icon name="mail" size={15} strokeWidth={1.8} />
                  Get in touch
                  <Icon
                    name="arrow-right"
                    size={14}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <CopyEmail />
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span
                    key={r.title}
                    className="rounded-full border border-white/[0.09] px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint"
                  >
                    {r.title}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/40">
              {[
                { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
                { icon: 'linkedin', label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
                { icon: 'github', label: 'GitHub', value: 'sumity2025-byte', href: profile.github },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.icon === 'mail' || c.icon === 'phone' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-mute transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember">
                    <Icon name={c.icon as IconName} size={14} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[8.5px] uppercase tracking-[0.14em] text-faint">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[12.5px] text-bone">{c.value}</span>
                  </span>
                  <Icon
                    name="arrow-up-right"
                    size={13}
                    className="shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ember"
                  />
                </a>
              ))}
              <div className="flex items-center gap-2.5 px-5 py-3.5">
                <motion.span
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-1.5 w-1.5 rounded-full bg-ember"
                />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-faint">
                  Available now · {profile.location}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
