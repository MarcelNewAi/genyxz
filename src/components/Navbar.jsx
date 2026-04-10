import { useEffect, useState } from 'react'
import { IconArrowUpRight } from './Icons'
import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')

  return <img alt={title} className="brand-logo" src="/Logo%20-%20GenYXZ.svg" />
}

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${isScrolled ? 'site-nav-scrolled' : ''}`}>
      <div className="site-container site-nav-inner">
        <a className="no-underline" href="#hero">
          <LogoWordmark />
        </a>

        <a className="btn-premium btn-nav" href="#prijava">
          <span>{t('site.sticky_cta')}</span>
          <IconArrowUpRight />
        </a>
      </div>
    </header>
  )
}