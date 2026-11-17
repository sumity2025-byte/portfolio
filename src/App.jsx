import Nav from './components/Nav'
import Hero from './components/Hero'
import { Stats, Marquee, Logos } from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Frameworks from './components/Frameworks'
import Process from './components/Process'
import Skills from './components/Skills'
import Education from './components/Education'
import Documents from './components/Documents'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Chrome, ScrollProgress } from './components/Chrome'

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
