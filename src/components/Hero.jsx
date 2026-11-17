import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/site'
import Icon from './Icon'
import { MaskLine } from './ui/Reveal'

const HeroScene = lazy(() => import('../three/HeroScene'))

function useIstClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [showScene, setShowScene] = useState(false)
  const time = useIstClock()

  // Load the WebGL layer only on larger screens, after first paint, when idle.
  useEffect(() => {
    if (reduce) return
    if (window.matchMedia('(max-width: 768px)').matches) return

    let idleId
    let timeoutId
    const schedule = () => {
      const fire = () => setShowScene(true)
      if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(fire, { timeout: 1500 })
      else timeoutId = setTimeout(fire, 600)
    }
    timeoutId = setTimeout(schedule, 300)

    return () => {
      clearTimeout(timeoutId)
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
    }
  }, [reduce])

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16 md:pt-[72px]">
      {/* 3D layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-1/2 h-[min(105vw,880px)] w-[min(105vw,880px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(255,107,61,0.13) 0%, rgba(255,107,61,0.05) 38%, transparent 66%)',
            filter: 'blur(20px)',
          }}
        />
        {showScene && (
          <div className="absolute inset-0 opacity-90">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        )}
        {/* legibility scrim so the particle field never fights the copy */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(7,8,10,0.94) 0%, rgba(7,8,10,0.86) 32%, rgba(7,8,10,0.35) 58%, rgba(7,8,10,0.55) 100%)',
          }}
        />
      </div>

      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(237,234,228,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(237,234,228,0.035) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 45%, black 20%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 45%, black 20%, transparent 78%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-[1240px] flex-col justify-center px-5 pb-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone/80">
              Available now
            </span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
            {profile.eyebrow}
          </span>
        </motion.div>

        <h1 className="max-w-[16ch] font-display text-[clamp(2.9rem,8.4vw,7.6rem)] leading-[0.92] tracking-[-0.02em]">
          <MaskLine delay={0.25}>I build strategy</MaskLine>
          <MaskLine delay={0.42} className="italic ember-text pr-[0.06em]">
            that ships.
          </MaskLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[54ch] text-[15px] leading-relaxed text-mute md:text-base"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.86, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group flex items-center gap-2.5 rounded-full bg-bone px-6 py-3.5 text-[13px] font-medium text-void transition-all duration-300 hover:bg-ember"
          >
            View my work
            <Icon
              name="arrow-right"
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="/docs/My_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-white/15 px-6 py-3.5 text-[13px] text-bone transition-all duration-300 hover:border-ember/60 hover:text-ember"
          >
            <Icon name="download" size={15} />
            Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-2 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors duration-300 hover:text-bone"
          >
            Get in touch
            <Icon name="arrow-up-right" size={13} strokeWidth={2} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-5"
        >
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            <Icon name="clock" size={12} />
            {profile.location} · {time} IST
          </span>
          <a
            href="#about"
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint transition-colors hover:text-bone"
          >
            Scroll
            <motion.span
              animate={reduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <Icon name="arrow-down" size={13} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
