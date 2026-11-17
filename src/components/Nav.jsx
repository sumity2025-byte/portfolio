import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data/site'
import Icon from './Icon'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[65] transition-all duration-500 ${
          solid
            ? 'border-b border-white/[0.06] bg-void/70 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:h-[72px] md:px-8">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Sumit Yadav — home">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 font-mono text-[11px] tracking-tight text-bone transition-colors duration-300 group-hover:border-ember group-hover:text-ember">
              SY
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-mute sm:block">
              {profile.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.13em] transition-colors duration-300 ${
                  active === n.id ? 'text-bone' : 'text-faint hover:text-bone'
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                    transition={{ type: 'spring', stiffness: 340, damping: 32 }}
                  />
                )}
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-ember px-4 py-2 font-mono text-[11px] uppercase tracking-[0.13em] text-void transition-all duration-300 hover:bg-ember-soft sm:flex"
            >
              Get in touch
              <Icon name="arrow-up-right" size={13} strokeWidth={2} />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-bone md:hidden"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-[1.5px] w-4 bg-current" />
                <span className="block h-[1.5px] w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-void/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="label">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10"
                aria-label="Close menu"
              >
                <Icon name="close" size={16} />
              </button>
            </div>
            <nav className="mt-6 flex flex-col px-5">
              {nav.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between border-b border-white/[0.07] py-5 font-display text-4xl text-bone"
                >
                  {n.label}
                  <span className="font-mono text-[10px] tracking-widest text-faint">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-ember py-4 font-mono text-xs uppercase tracking-[0.16em] text-void"
              >
                Get in touch <Icon name="arrow-up-right" size={14} strokeWidth={2} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
