import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

/** Counts up from 0 to `to` once scrolled into view. */
export default function Counter({
  to,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className = '',
}: {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setVal(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setVal(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, reduce])

  const shown = to % 1 === 0 ? Math.round(val).toLocaleString('en-IN') : val.toFixed(1)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

/** 3D tilt-on-hover wrapper. */
export function Tilt({
  children,
  className = '',
  max = 8,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const rx0 = useMotionValue(0)
  const ry0 = useMotionValue(0)
  const rx = useSpring(rx0, { stiffness: 220, damping: 22 })
  const ry = useSpring(ry0, { stiffness: 220, damping: 22 })

  if (reduce) return <div className={className}>{children}</div>

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    rx.set(-py * max)
    ry.set(px * max)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          rotateX: rx,
          rotateY: ry,
          willChange: 'transform',
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
