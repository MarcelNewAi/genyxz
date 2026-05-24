import { useEffect, useState } from 'react'
import ApplicationForm from './components/ApplicationForm'
import Benefits from './components/Benefits'
import ChoosePath from './components/ChoosePath'
import FinalCta from './components/FinalCta'
import FirstGeneration from './components/FirstGeneration'
import Footer from './components/Footer'
import FrictionBar from './components/FrictionBar'
import Hero from './components/Hero'
import LookingFor from './components/LookingFor'
import MarqueeStrip from './components/MarqueeStrip'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import StickyBar from './components/StickyBar'
import WhySection from './components/WhySection'
import MainSite from './pages/MainSite'
import { useScrollReveal } from './utils/useScrollReveal'

function App() {
  const isAmbassadorLanding =
    typeof window !== 'undefined' && window.location.pathname === '/postani-ambasador'
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [isInApplication, setIsInApplication] = useState(false)

  useScrollReveal()

  useEffect(() => {
    if (!isAmbassadorLanding) {
      return undefined
    }

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
  }, [isAmbassadorLanding])

  if (!isAmbassadorLanding) {
    return <MainSite />
  }

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar variant="landing" />
      <Hero />
      <FrictionBar />
      <MarqueeStrip />
      <WhySection />
      <FirstGeneration />
      <ChoosePath />
      <Benefits />
      <LookingFor />
      <ApplicationForm />
      <FinalCta />
      <Footer />
      <StickyBar show={showStickyBar && !isInApplication} />
    </div>
  )
}

export default App
