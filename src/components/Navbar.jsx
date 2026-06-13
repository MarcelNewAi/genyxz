import { useEffect, useState } from 'react'
import { IconArrowUpRight } from './Icons'
import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')

  return (
    <img
      alt={title}
      className="brand-logo brand-logo-nav"
      decoding="async"
      fetchPriority="high"
      height="1065"
      src="/locales/sl/dna-logo-bg.svg"
      width="1477"
    />
  )
}

export default function Navbar({ variant = 'main' }) {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)
  const isActive = (href) => currentPath === href
  const navLinks = [
    { href: '/o-nas', label: 'O nas' },
    { href: '/kaj-delamo', label: 'Kaj delamo' },
    { href: '/ambasadorji', label: 'Ambasadorji' },
    { href: '/kontakt', label: 'Kontakt' },
  ]
  const leftNavLinks = navLinks.slice(0, 2)
  const rightNavLinks = navLinks.slice(2)

  if (variant === 'landing') {
    return (
      <header className={`site-nav ${isScrolled ? 'site-nav-scrolled' : ''}`}>
        <div className="site-container site-nav-inner site-nav-inner-landing">
          <a className="landing-home-link" href="/">
            Domov
          </a>

          <a className="no-underline" href="#hero">
            <LogoWordmark />
          </a>

          <a className="btn-premium main-btn-primary btn-nav" href="#prijava" aria-label={t('hero.cta')}>
            <span>{t('hero.cta')}</span>
            <IconArrowUpRight />
          </a>
        </div>
      </header>
    )
  }

  return (
    <header className={`site-nav ${isScrolled ? 'site-nav-scrolled' : ''}`}>
      <div className="site-container site-nav-inner">
        <nav className="site-nav-links site-nav-links-left" aria-label="Glavna navigacija levo">
          {leftNavLinks.map((link) => (
            <a className={isActive(link.href) ? 'site-nav-link-active' : undefined} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="no-underline site-nav-logo" href="/" onClick={closeMenu}>
          <LogoWordmark />
        </a>

        <nav className="site-nav-links site-nav-links-right" aria-label="Glavna navigacija desno">
          {rightNavLinks.map((link) => (
            <a className={isActive(link.href) ? 'site-nav-link-active' : undefined} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? t('nav.menu_close') : t('nav.menu_open')}
          className="site-menu-toggle"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`site-mobile-menu ${isOpen ? 'site-mobile-menu-open' : ''}`}>
          {navLinks.map((link) => (
            <a className={isActive(link.href) ? 'site-nav-link-active' : undefined} href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
