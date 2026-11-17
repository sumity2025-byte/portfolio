import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export default function SectionHead({
  index,
  label,
  title,
  lede,
  right,
  className = '',
}: {
  index: string
  label: string
  title: ReactNode
  lede?: string
  right?: ReactNode
  className?: string
}) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-ember">{index}</span>
          <span className="h-px w-8 bg-ember/40" />
          <span className="label">{label}</span>
        </div>
      </Reveal>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal delay={0.06}>
          <h2 className="max-w-[22ch] font-display text-[clamp(2.1rem,5.2vw,3.9rem)] leading-[1.02] tracking-[-0.015em] text-bone">
            {title}
          </h2>
        </Reveal>
        {(lede || right) && (
          <Reveal delay={0.14} className="md:max-w-[38ch] md:text-right">
            {lede && <p className="text-[13.5px] leading-relaxed text-mute">{lede}</p>}
            {right}
          </Reveal>
        )}
      </div>
    </div>
  )
}
