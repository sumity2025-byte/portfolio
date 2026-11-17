import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'

const EASE = [0.16, 1, 0.3, 1]

function Card({ p, onOpen, featured }) {
  return (
    <button
      onClick={() => onOpen(p)}
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-surface/70 to-abyss/30 p-6 text-left transition-all duration-500 hover:border-ember/30 hover:from-surface md:p-7 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-ember/[0.05] blur-3xl transition-all duration-700 group-hover:bg-ember/[0.13]" />

      {featured && (
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 text-right lg:block">
          <div className="font-display text-[clamp(3.5rem,6.5vw,5.8rem)] leading-none text-white/[0.07] transition-colors duration-700 group-hover:text-ember/[0.16]">
            {p.hero[0]}
          </div>
          <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.24em] text-white/15">
            {p.hero[1]}
          </div>
        </div>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-bone/75 transition-colors duration-500 group-hover:border-ember/40 group-hover:text-ember">
            <Icon name={p.icon} size={14} />
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">
            {p.kicker}
          </span>
        </div>
        {p.featured && (
          <span className="rounded-full border border-ember/30 bg-ember/[0.08] px-2 py-[3px] font-mono text-[8.5px] uppercase tracking-[0.14em] text-ember">
            Featured
          </span>
        )}
      </div>

      <h3
        className={`relative mt-5 font-display leading-[1.08] tracking-tight text-bone ${
          featured ? 'text-[clamp(1.55rem,3.6vw,2.5rem)] max-w-[20ch]' : 'text-[clamp(1.3rem,2.6vw,1.7rem)]'
        }`}
      >
        {p.title}
      </h3>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ember/80">
        {p.subtitle}
      </div>

      <p className="relative mt-4 max-w-[52ch] text-[12.5px] leading-relaxed text-mute line-clamp-3">
        {p.summary}
      </p>

      <div className="relative mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {p.metrics.slice(0, featured ? 4 : 3).map((m) => (
            <div key={m.l}>
              <div className="font-display text-lg leading-none text-bone">{m.v}</div>
              <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint">
                {m.l}
              </div>
            </div>
          ))}
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint transition-colors duration-300 group-hover:text-ember">
          Case study
          <Icon
            name="arrow-up-right"
            size={12}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </button>
  )
}

function CaseSheet({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-void/85 backdrop-blur-md" onClick={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        initial={{ y: 40, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 30, scale: 0.985, opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="relative z-10 max-h-[92svh] w-full max-w-[860px] overflow-y-auto rounded-t-3xl border border-white/[0.09] bg-abyss sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.07] bg-abyss/90 px-6 py-4 backdrop-blur-xl">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">
            {p.kicker}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-mute transition-colors hover:border-ember/40 hover:text-ember"
          >
            <Icon name="close" size={14} />
          </button>
        </div>

        <div className="px-6 pb-10 pt-8 md:px-10 md:pt-10">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-ember/30 bg-ember/[0.08] text-ember">
              <Icon name={p.icon} size={16} />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ember/90">
              {p.subtitle}
            </span>
          </div>

          <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(1.8rem,5vw,3rem)] leading-[1.03] tracking-tight text-bone">
            {p.title}
          </h2>

          <p className="mt-5 max-w-[62ch] text-[13.5px] leading-[1.75] text-mute">{p.summary}</p>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
            {p.metrics.map((m) => (
              <div key={m.l} className="bg-abyss p-4">
                <div className="font-display text-xl leading-none text-bone">{m.v}</div>
                <div className="mt-1.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint">
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-ember/50 pl-5">
            <div className="label mb-2">The story</div>
            <p className="text-[13.5px] leading-[1.75] text-bone/85">{p.story}</p>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-void transition-colors hover:bg-ember-soft"
          >
            Talk about this work
            <Icon name="arrow-right" size={13} strokeWidth={2} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="work" className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="03"
          label="Case studies"
          title={
            <>
              Proof, not <span className="italic ember-text">promises.</span>
            </>
          }
          lede="Seven pieces of work across operations, growth, capex and consulting. Open any card for the full case."
        />

        <Stagger className="grid gap-3 md:grid-cols-2" step={0.05}>
          {projects.map((p) => (
            <StaggerItem key={p.id} className={p.featured ? 'md:col-span-2' : ''}>
              <Card p={p} onOpen={setActive} featured={p.featured} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-surface/30 px-6 py-5">
            <p className="max-w-[46ch] text-[13px] text-mute">
              One pilot became a chain-wide system. Pick-path adherence moved{' '}
              <span className="text-bone">43% → 92%</span> across 2,300+ dark stores.
            </p>
            <div className="flex items-center gap-6">
              {[
                ['43%', 'Before'],
                ['92%', 'After'],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl leading-none text-bone">{v}</div>
                  <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>{active && <CaseSheet p={active} onClose={close} />}</AnimatePresence>
    </section>
  )
}
