import { useEffect, useMemo, useState } from 'react'
import ApplicationForm from './components/ApplicationForm'
import Benefits from './components/Benefits'
import ChoosePath from './components/ChoosePath'
import FirstGeneration from './components/FirstGeneration'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LookingFor from './components/LookingFor'
import Navbar from './components/Navbar'
import StickyCta from './components/StickyCta'
import WhySection from './components/WhySection'

const SECTION_IDS = [
  'hero',
  'zakaj',
  'prva-generacija',
  'izberi-pot',
  'kaj-pridobis',
  'koga-iscemo',
  'prijava',
]

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showStickyCta, setShowStickyCta] = useState(false)

  const sectionSelector = useMemo(
    () => SECTION_IDS.map((id) => `#${id}`).join(','),
    [],
  )

  useEffect(() => {
    const heroElement = document.getElementById('hero')
    if (!heroElement) {
      return undefined
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting)
      },
      {
        threshold: 0.4,
      },
    )

    heroObserver.observe(heroElement)
    return () => heroObserver.disconnect()
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(sectionSelector))
    if (!sections.length) {
      return undefined
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0.2, 0.5, 0.8],
      },
    )

    sections.forEach((section) => sectionObserver.observe(section))
    return () => sectionObserver.disconnect()
  }, [sectionSelector])

  return (
    <div className="overflow-x-clip bg-background text-text-primary">
      <Navbar activeSection={activeSection} />
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <Hero />
        <WhySection />
        <FirstGeneration />
        <ChoosePath />
        <Benefits />
        <LookingFor />
        <ApplicationForm />
      </main>
      <Footer />
      <StickyCta show={showStickyCta} />
    </div>
  )
}

export default App
