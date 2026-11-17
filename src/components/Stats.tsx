import { stats, marquee, logos } from '../data/site'
import Counter from './ui/Counter'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'

export function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] bg-abyss/60">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4" step={0.1}>
          {stats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={`relative px-1 py-9 md:px-7 md:py-12 ${
                i % 2 === 1 ? 'border-l border-white/[0.06] pl-5' : ''
              } ${i > 1 ? 'border-t border-white/[0.06] lg:border-t-0' : ''} ${
                i === 2 ? 'lg:border-l lg:border-white/[0.06] lg:pl-7' : ''
              }`}
            >
              <div className="font-display text-[clamp(1.9rem,4.6vw,3.1rem)] leading-none tracking-tight text-bone">
                <Counter to={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} />
              </div>
              <div className="mt-2.5 text-[12.5px] text-mute">{s.label}</div>
              <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
                {s.note}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] py-5">
      <div
        className="flex w-max animate-[marquee-x_42s_linear_infinite] gap-10 whitespace-nowrap will-change-transform"
        style={{ animationDirection: 'normal' }}
      >
        {row.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="flex items-center gap-10 font-mono text-[10.5px] uppercase tracking-[0.22em] text-faint"
          >
            {m}
            <span className="h-1 w-1 rounded-full bg-ember/60" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent" />
    </div>
  )
}

export function Logos() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-16">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="label">Built with</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Strategy · Growth · Ops
          </span>
        </div>
      </Reveal>
      <Stagger className="grid grid-cols-3 items-center gap-x-6 gap-y-9 sm:grid-cols-4 md:grid-cols-7" step={0.06}>
        {logos.map((l) => (
          <StaggerItem key={l.name}>
            <a
              href={l.href}
              title={l.name}
              className="group flex h-12 items-center justify-center opacity-45 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                className="max-h-8 w-auto max-w-[104px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
