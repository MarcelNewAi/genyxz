import { useEffect, useState } from 'react'
import ApplicationForm from './components/ApplicationForm'
import Benefits from './components/Benefits'
import ChoosePath from './components/ChoosePath'
import FirstGeneration from './components/FirstGeneration'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LookingFor from './components/LookingFor'
import MarqueeStrip from './components/MarqueeStrip'
import Navbar from './components/Navbar'
import PartnerBar from './components/PartnerBar'
import ScrollProgress from './components/ScrollProgress'
import SectionDivider from './components/SectionDivider'
import StatsSection from './components/StatsSection'
import StickyBar from './components/StickyBar'
import WhySection from './components/WhySection'
import { useScrollReveal } from './utils/useScrollReveal'

function App() {
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [isInApplication, setIsInApplication] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const heroElement = document.getElementById('hero')
    const applicationElement = document.getElementById('prijava')

    if (!heroElement || !applicationElement) {
      return undefined
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0.45 },
    )

    const applicationObserver = new IntersectionObserver(
      ([entry]) => setIsInApplication(entry.isIntersecting),
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
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <WhySection />
      <StatsSection />
      <SectionDivider />
      <FirstGeneration />
      <ChoosePath />
      <PartnerBar />
      <Benefits />
      <SectionDivider />
      <LookingFor />
      <ApplicationForm />
      <Footer />
      <StickyBar show={showStickyBar && !isInApplication} />
    </div>
  )
}

export default App