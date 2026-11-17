import Nav from './components/Nav'
import Hero from './components/Hero'
import { Stats, Marquee, Logos } from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import { Suspense, lazy, useRef, type ReactNode } from 'react'
import { useInView } from 'motion/react'
import Frameworks from './components/Frameworks'
import Process from './components/Process'
import Skills from './components/Skills'
import Education from './components/Education'
import Documents from './components/Documents'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Chrome, ScrollProgress } from './components/Chrome'

/** The glass console carries gsap, so it only loads once it is nearly on screen. */
const Console = lazy(() => import('./components/Console'))

function Deferred({ children, reserve = 460 }: { children: ReactNode; reserve?: number }) {
  const gate = useRef<HTMLDivElement>(null)
  const near = useInView(gate, { once: true, margin: '700px' })
  return (
    <div ref={gate} style={near ? undefined : { minHeight: reserve }}>
      {near && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-bone">
      <Chrome />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Logos />
        <About />
        <Experience />
        <Work />
        <div id="console" className="scroll-mt-20">
          <Deferred>
            <Console />
          </Deferred>
        </div>
        <Frameworks />
        <Process />
        <Skills />
        <Education />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
