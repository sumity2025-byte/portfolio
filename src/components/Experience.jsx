import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal } from './ui/Reveal'

const EASE = [0.16, 1, 0.3, 1]

function Role({ job, open, onToggle, index }) {
  return (
    <Reveal delay={index * 0.04}>
      <div
        className={`group relative border-b border-white/[0.07] transition-colors duration-500 ${
          open ? 'bg-surface/30' : 'hover:bg-white/[0.015]'
        }`}
      >
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-start gap-4 px-1 py-6 text-left md:gap-6 md:px-5"
        >
          <span className="mt-1 hidden font-mono text-[10px] tracking-[0.14em] text-faint md:block md:w-8">
            0{index + 1}
          </span>

          <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] md:h-11 md:w-11">
            {job.logo ? (
              <img src={job.logo} alt="" loading="lazy" className="h-5 w-5 object-contain" />
            ) : (
              <Icon name="layers" size={16} className="text-mute" />
            )}
          </span>

          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[15px] font-medium text-bone">{job.company}</span>
              {job.current && (
                <span className="rounded-full bg-ember/12 px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.12em] text-ember">
                  Current
                </span>
              )}
            </span>
            <span className="mt-0.5 block text-[13px] text-mute">{job.role}</span>
          </span>

          <span className="hidden shrink-0 flex-col items-end gap-1 md:flex">
            <span className="font-mono text-[10.5px] tracking-[0.06em] text-bone/70">
              {job.period}
            </span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
              {job.duration} · {job.place}
            </span>
          </span>

          <span
            className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 text-faint transition-all duration-300 ${
              open ? 'rotate-45 border-ember/50 text-ember' : 'group-hover:border-white/25'
            }`}
          >
            <Icon name="plus" size={12} strokeWidth={2} />
          </span>
        </button>

        <div className="flex gap-3 px-1 pb-2 md:hidden md:px-5">
          <span className="font-mono text-[10px] tracking-[0.06em] text-bone/60">{job.period}</span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
            · {job.duration}
          </span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="px-1 pb-8 md:pl-[76px] md:pr-14">
                <p className="mb-5 max-w-[62ch] text-[13.5px] leading-relaxed text-bone/75">
                  {job.blurb}
                </p>
                <ul className="space-y-3">
                  {job.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.035, duration: 0.45, ease: EASE }}
                      className="flex gap-3 text-[13px] leading-relaxed text-mute"
                    >
                      <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-ember" />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.09] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="02"
          label="Work history"
          title={
            <>
              Where I&apos;ve <span className="italic ember-text">shipped.</span>
            </>
          }
          lede="35 months across strategy, growth, operations and B2B sales. Tap a role to expand."
          right={
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/[0.09] px-3.5 py-2 md:mt-0">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-bone/70">
                6 roles · 35 months
              </span>
            </div>
          }
        />

        <div className="border-t border-white/[0.07]">
          {experience.map((job, i) => (
            <Role
              key={job.company}
              job={job}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
