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
    <span aria-label={title} className="font-heading text-xl font-extrabold tracking-[-0.02em] sm:text-2xl">
      <span className="text-text-primary">{gen}</span>
      <span className="text-[#C218D8]">{y}</span>
      <span className="text-[#3B82F6]">{x}</span>
      <span className="text-[#14B8A6]">{z}</span>
    </span>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${isScrolled ? 'site-nav-solid' : 'site-nav-clear'}`}>
      <div className="site-container flex h-14 items-center justify-between sm:h-16">
        <a className="inline-flex min-h-11 items-center no-underline" href="#hero">
          <LogoWordmark />
        </a>

        <a className="nav-cta" href="#prijava">
          {t('hero.cta')}
        </a>
      </div>
    </header>
  )
}
