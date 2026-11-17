import { motion } from 'framer-motion'
import { about, lanes, roles, profile } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'
import { Tilt } from './ui/Counter'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="01"
          label="About"
          title={
            <>
              Engineer. <span className="italic ember-text">MBA.</span> Builder.
            </>
          }
          lede="I turn messy operating problems into systems that scale — equal parts analyst, operator and builder."
        />

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="space-y-5 text-[14.5px] leading-[1.75] text-mute">
                <p>{about.paras[0]}</p>
                <p>{about.paras[1]}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-9 border-l-2 border-ember/60 pl-5">
                <p className="font-display text-[clamp(1.15rem,2.3vw,1.6rem)] italic leading-snug text-bone/90">
                  “{about.quote}”
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10">
                <span className="label">Roles I&apos;m targeting</span>
                <div className="mt-4 space-y-2.5">
                  {roles.map((r) => (
                    <div
                      key={r.title}
                      className="group flex items-start gap-3 rounded-xl border border-white/[0.07] bg-surface/40 p-3.5 transition-colors duration-300 hover:border-ember/30 hover:bg-surface"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ember/10 text-ember">
                        <Icon name={r.icon} size={14} />
                      </span>
                      <div>
                        <div className="text-[13px] font-medium text-bone">{r.title}</div>
                        <div className="mt-0.5 text-[12px] text-faint">{r.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2" step={0.08}>
            {lanes.map((l) => (
              <StaggerItem key={l.title}>
                <Tilt max={6} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-surface/80 to-abyss/40 p-5 transition-colors duration-500 hover:border-ember/25">
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-ember/[0.07] blur-2xl transition-opacity duration-500 group-hover:bg-ember/[0.14]"
                    />
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-bone/80 transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember">
                      <Icon name={l.icon} size={16} />
                    </span>
                    <h3 className="mt-4 font-display text-xl text-bone">{l.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-faint">{l.line}</p>
                    <motion.div
                      className="mt-4 h-px w-full bg-gradient-to-r from-ember/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                </Tilt>
              </StaggerItem>
            ))}

            <StaggerItem className="sm:col-span-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-surface/40 px-5 py-4 transition-colors duration-300 hover:border-ember/30"
              >
                <span className="flex items-center gap-3">
                  <Icon name="linkedin" size={16} className="text-ember" />
                  <span className="text-[13px] text-bone">Find me on LinkedIn</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  size={15}
                  className="text-faint transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
