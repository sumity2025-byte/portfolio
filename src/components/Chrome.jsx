import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const SUPPORTS_HOVER = () =>
  typeof window === 'undefined' ? false : window.matchMedia('(hover: hover)').matches

/** Film grain + vignette + ember cursor spotlight. Pure decoration. */
export function Chrome() {
  const spot = useRef(null)
  const [hover] = useState(SUPPORTS_HOVER)

  useEffect(() => {
    if (hover) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const loop = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      if (spot.current) {
        spot.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [hover])

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] grain-layer mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[59]"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      {hover && (
        <div
          aria-hidden
          ref={spot}
          className="pointer-events-none fixed left-0 top-0 z-[58] h-[600px] w-[600px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(255,107,61,0.10) 0%, rgba(255,107,61,0.04) 35%, transparent 70%)',
            willChange: 'transform',
          }}
        />
      )}
    </>
  )
}

/** Thin ember progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: x }}
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-gradient-to-r from-ember via-ember-soft to-sky"
    />
  )
}
