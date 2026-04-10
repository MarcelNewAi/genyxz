import { useEffect, useState } from 'react'
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
import { useScrollReveal } from './utils/useScrollReveal'

function App() {
  const [isPastHero, setIsPastHero] = useState(false)
  const [isInApplication, setIsInApplication] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const heroElement = document.getElementById('hero')
    const applicationElement = document.getElementById('prijava')

    if (!heroElement || !applicationElement) {
      return undefined
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting)
      },
      { threshold: 0.45 },
    )

    const applicationObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInApplication(entry.isIntersecting)
      },
      { threshold: 0.35 },
    )

    heroObserver.observe(heroElement)
    applicationObserver.observe(applicationElement)

    return () => {
      heroObserver.disconnect()
      applicationObserver.disconnect()
    }
  }, [])

  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <WhySection />
      <FirstGeneration />
      <ChoosePath />
      <Benefits />
      <LookingFor />
      <ApplicationForm />
      <Footer />
      <StickyCta show={isPastHero && !isInApplication} />
    </div>
  )
}

export default App
