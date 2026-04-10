import { useEffect, useState } from 'react'
import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')
  const gen = title.slice(0, 3)
  const y = title.slice(3, 4)
  const x = title.slice(4, 5)
  const z = title.slice(5, 6)

  return (
    <span aria-label={title} className="logo-wordmark">
      <span className="logo-gen">{gen}</span>
      <span className="logo-y">{y}</span>
      <span className="logo-x">{x}</span>
      <span className="logo-z">{z}</span>
    </span>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100)
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

        <a className="btn-gradient btn-nav" href="#prijava">
          {t('site.sticky_cta')}
        </a>
      </div>
    </header>
  )
}

