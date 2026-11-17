import { skills, certs } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="06"
          label="Capabilities"
          title={
            <>
              Built in the field. <span className="italic ember-text">Used daily.</span>
            </>
          }
          lede="Ten-plus certifications at a 93%+ average. Tools chosen for the job, not the résumé."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4 lg:gap-x-8">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.06}>
              <div className="border-t border-white/[0.1] pt-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[13px] font-medium text-bone">{g.group}</h3>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-faint">
                    {String(g.items.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="cursor-default rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[11.5px] text-mute transition-colors duration-300 hover:border-ember/40 hover:text-bone"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center justify-between">
            <span className="label">Certifications &amp; live projects</span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
              10+ · 93%+ avg
            </span>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" step={0.07}>
            {certs.map((c) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-bone/75">
                      <Icon name={c.icon} size={14} />
                    </span>
                    {c.missing ? (
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-2 py-[3px] font-mono text-[8px] uppercase tracking-[0.12em] text-amber-300/90">
                        PDF pending
                      </span>
                    ) : (
                      <Icon name="arrow-up-right" size={13} className="text-faint" />
                    )}
                  </div>
                  <h4 className="mt-3.5 text-[12.5px] font-medium leading-snug text-bone">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-faint">{c.issuer}</p>
                  {c.score && (
                    <p className="mt-2 font-mono text-[10px] tracking-[0.1em] text-ember/80">
                      {c.score} avg
                    </p>
                  )}
                </>
              )
              return (
                <StaggerItem key={c.title}>
                  {c.missing ? (
                    <div className="h-full rounded-xl border border-white/[0.07] bg-surface/25 p-4">
                      {inner}
                    </div>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block h-full rounded-xl border border-white/[0.07] bg-surface/25 p-4 transition-colors duration-300 hover:border-ember/30"
                    >
                      {inner}
                    </a>
                  )}
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
