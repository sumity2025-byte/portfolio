import { documents, profile } from '../data/site'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'

export default function Documents() {
  return (
    <section id="documents" className="relative scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="08"
          label="Proof of work"
          title={
            <>
              Documents &amp; <span className="italic ember-text">artefacts.</span>
            </>
          }
          lede="Real files from the work — resumes, SOPs, decks and scorecards. PDFs open in a new tab."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {documents.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.08}>
              <div>
                <div className="mb-4 flex items-center gap-2 border-b border-white/[0.1] pb-3">
                  <span className="h-1 w-1 rounded-full bg-ember" />
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone/75">
                    {group.group}
                  </h3>
                </div>
                <Stagger className="space-y-1.5" step={0.06}>
                  {group.items.map((it) =>
                    it.pending ? (
                      <StaggerItem key={it.title}>
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2.5">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-amber-400/20 bg-amber-400/[0.05] text-amber-300/80">
                            <Icon name="clipboard" size={12} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[12.5px] text-bone/70">
                              {it.title}
                            </span>
                            <span className="block truncate font-mono text-[9.5px] tracking-[0.04em] text-faint">
                              {it.meta}
                            </span>
                          </span>
                          <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-amber-300/70">
                            Pending
                          </span>
                        </div>
                      </StaggerItem>
                    ) : (
                      <StaggerItem key={it.title}>
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.04]"
                        >
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-white/10 text-mute transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember">
                            <Icon name="external" size={12} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[12.5px] text-bone transition-colors group-hover:text-white">
                              {it.title}
                            </span>
                            <span className="block truncate font-mono text-[9.5px] tracking-[0.04em] text-faint">
                              {it.meta}
                            </span>
                          </span>
                          <Icon
                            name="arrow-up-right"
                            size={12}
                            className="shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ember"
                          />
                        </a>
                      </StaggerItem>
                    ),
                  )}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-white/[0.12] px-5 py-4">
            <p className="max-w-[58ch] text-[12px] leading-relaxed text-faint">
              Some credentials are still being uploaded. Need a specific document right now?
              Email and I&apos;ll send it within a day.
            </p>
            <a
              href={`mailto:${profile.email}?subject=Document%20request`}
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-ember transition-colors hover:text-ember-soft"
            >
              Request <Icon name="arrow-right" size={12} strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
