import { nav, profile } from '../data/site'
import Icon, { type IconName } from './Icon'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-abyss/60">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <a href="#top" className="group inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 font-mono text-[11px] text-bone transition-colors group-hover:border-ember group-hover:text-ember">
                SY
              </span>
              <span className="font-display text-2xl text-bone">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-[36ch] text-[12px] leading-relaxed text-faint">
              IIM Calcutta MBA · Strategy, Growth &amp; Operations. Currently at Blinkit · Zomato.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
                { icon: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
                { icon: 'github', href: profile.github, label: 'GitHub' },
                { icon: 'phone', href: `tel:${profile.phoneHref}`, label: 'Phone' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === 'linkedin' || s.icon === 'github' ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-faint transition-colors duration-300 hover:border-ember/50 hover:text-ember"
                >
                  <Icon name={s.icon as IconName} size={13} />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-2">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="font-mono text-[10px] uppercase tracking-[0.13em] text-faint transition-colors hover:text-bone"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/docs/My_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.13em] text-faint transition-colors hover:text-bone"
            >
              Resume
            </a>
            <a
              href="#top"
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-faint transition-colors hover:text-bone"
            >
              Back to top <Icon name="arrow-up" size={11} />
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
            © {YEAR} {profile.name} · All rights reserved
          </p>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
            Built with React · Three.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
