import { education } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal } from './ui/Reveal'
import { Achievements } from './Process'

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="07"
          label="Background"
          title={
            <>
              Academic <span className="italic ember-text">record.</span>
            </>
          }
          lede="Twelve of fifteen IIM calls converted. GATE AIR 2070. Twice top 1.5 percentile on the NDA."
        />

        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="space-y-3">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.07}>
                <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-surface/60 to-abyss/30 p-5 transition-colors duration-500 hover:border-ember/25">
                  <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                    {e.logo ? (
                      <img src={e.logo} alt="" loading="lazy" className="h-6 w-6 object-contain" />
                    ) : (
                      <Icon name="cap" size={16} className="text-mute" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl text-bone">{e.school}</h3>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-faint">
                        {e.period}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span className="text-[12.5px] text-mute">{e.degree}</span>
                      <span className="h-1 w-1 rounded-full bg-ember/60" />
                      <span className="font-mono text-[10.5px] tracking-[0.06em] text-bone/75">
                        {e.score}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[12px] leading-relaxed text-faint">{e.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <Achievements />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
