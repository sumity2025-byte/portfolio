import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { process, proof, achievements } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'

export default function Process() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 60%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })
  const glow = useTransform(scrollYProgress, [0, 1], [0.15, 1])

  return (
    <section id="process" className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="05"
          label="Approach"
          title={
            <>
              Same approach, <span className="italic ember-text">every problem.</span>
            </>
          }
          lede="How a single Blinkit idea moved from the store floor to pan-India scale."
        />

        <div ref={ref} className="relative grid gap-10 md:grid-cols-[1fr_1.35fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="space-y-5">
              {[
                ['Own the outcome', 'From fuzzy problem to shipped result — I design it, execute it, and stay accountable for the number at the end.'],
                ['Diagnose before prescribing', 'Field discovery first. Heatmaps, variance models, funnel teardowns — data before opinion.'],
                ['Build what ships', 'Every insight becomes a dashboard, pilot or SOP the team actually uses.'],
                ['Steady under pressure', 'Partner panels, 10+ member squads, ₹180 Cr+ bid reviews — calm process beats heroics.'],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.07}>
                  <div className="group">
                    <div className="flex items-center gap-2.5">
                      <span className="h-1 w-1 rounded-full bg-ember" />
                      <h3 className="text-[14px] font-medium text-bone">{t}</h3>
                    </div>
                    <p className="mt-1.5 pl-[14px] text-[12.5px] leading-relaxed text-faint">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative pl-8 md:pl-10">
            {/* rail */}
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-white/[0.08] md:left-[5px]">
              {!reduce && (
                <motion.div
                  style={{ scaleY, originY: 0 }}
                  className="absolute inset-0 w-px bg-gradient-to-b from-ember to-ember/20"
                />
              )}
            </div>

            <div className="space-y-12">
              {process.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <div className="relative">
                    <motion.span
                      style={reduce ? {} : { opacity: glow }}
                      className="absolute -left-8 top-2 grid h-[7px] w-[7px] place-items-center rounded-full bg-ember ring-4 ring-ember/10 md:-left-10"
                    />
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-ember/70">
                        {s.n}
                      </span>
                      <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-none text-bone">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-[46ch] text-[13px] leading-relaxed text-mute">
                      {s.text}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-2.5 py-1">
                      <Icon name="arrow-up-right" size={10} className="text-ember" />
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-bone/70">
                        {s.proof}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Stagger className="mt-20 grid gap-3 border-t border-white/[0.07] pt-12 sm:grid-cols-3" step={0.09}>
          {proof.map((p) => (
            <StaggerItem key={p.l}>
              <div className="group rounded-2xl border border-white/[0.07] bg-surface/30 p-5 transition-colors duration-500 hover:border-ember/25">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl leading-none text-bone">{p.v}</span>
                  <Icon name={p.icon} size={16} className="text-ember/70" />
                </div>
                <div className="mt-2 text-[12.5px] text-bone/80">{p.l}</div>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-faint">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function Achievements() {
  return (
    <div>
      <span className="label">Also on the record</span>
      <Stagger className="mt-5 grid gap-2.5 sm:grid-cols-2" step={0.06}>
        {achievements.map((a) => (
          <StaggerItem key={a.text}>
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-surface/25 p-3.5 transition-colors duration-300 hover:border-white/15">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-ember/10 text-ember">
                <Icon name={a.icon} size={12} />
              </span>
              <p className="text-[12px] leading-relaxed text-mute">
                {a.text}
                {a.href && (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1.5 inline-flex items-center gap-1 text-ember/90 underline decoration-ember/30 underline-offset-2 hover:text-ember"
                  >
                    {a.linkLabel}
                    <Icon name="arrow-up-right" size={10} strokeWidth={2} />
                  </a>
                )}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}
