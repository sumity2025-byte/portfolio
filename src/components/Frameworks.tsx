import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { frameworks } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Stagger, StaggerItem } from './ui/Reveal'

export default function Frameworks() {
  const [open, setOpen] = useState<number | null>(null)

  const step = (delta: number) =>
    setOpen((i) =>
      i === null ? i : (i + delta + frameworks.length) % frameworks.length,
    )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section
      id="frameworks"
      className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="04"
          label="IP"
          title={
            <>
              Frameworks I <span className="italic ember-text">built.</span>
            </>
          }
          lede="Not templates I studied — artefacts I made and teams ran daily. Tap to open."
        />

        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" step={0.08}>
          {frameworks.map((f, i) => (
            <StaggerItem key={f.title}>
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/40 text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={f.src}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
                  <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-void/50 text-bone opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <Icon name="arrow-up-right" size={12} strokeWidth={2} />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-ember/80">
                    0{i + 1}
                  </div>
                  <div className="mt-1 font-display text-lg leading-tight text-bone">{f.title}</div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-void/92 backdrop-blur-md" onClick={() => setOpen(null)} />
            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[92svh] w-full max-w-[900px] overflow-hidden rounded-2xl border border-white/10 bg-abyss"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone/70">
                  {frameworks[open].title}
                </figcaption>
                <div className="flex items-center gap-1.5">
                  <span className="mr-2 font-mono text-[9px] tracking-[0.1em] text-faint">
                    {open + 1} / {frameworks.length}
                  </span>
                  <button
                    onClick={() => step(-1)}
                    className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-mute hover:text-ember"
                    aria-label="Previous"
                  >
                    <Icon name="arrow-left" size={13} />
                  </button>
                  <button
                    onClick={() => step(1)}
                    className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-mute hover:text-ember"
                    aria-label="Next"
                  >
                    <Icon name="arrow-right" size={13} />
                  </button>
                  <button
                    onClick={() => setOpen(null)}
                    className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-mute hover:text-ember"
                    aria-label="Close"
                  >
                    <Icon name="close" size={13} />
                  </button>
                </div>
              </div>
              <div className="max-h-[80svh] overflow-auto bg-black/40">
                <img
                  src={frameworks[open].src}
                  alt={frameworks[open].title}
                  className="mx-auto w-full object-contain"
                />
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
