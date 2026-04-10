import { useMemo } from 'react'
import { IconArrow } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function Hero() {
  const { t } = useTranslation()

  const secondLine = useMemo(() => {
    const line = t('hero.title_line2')
    const emphasisWord = t('hero.title_line2_emphasis')

    if (!line.includes(emphasisWord)) {
      return <span>{line}</span>
    }

    const [before, after] = line.split(emphasisWord)
    return (
      <>
        {before}
        <span className="hero-gradient-word">{emphasisWord}</span>
        {after}
      </>
    )
  }, [t])

  return (
    <section id="hero" className="hero-section editorial-section section-light">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
        <span className="hero-grid-overlay" />
      </div>

      <div className="site-container hero-grid">
        <div className="hero-content">
          <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
            {t('labels.hero')}
          </p>

          <h1 className="hero-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
            <span className="block">{t('hero.title_line1')}</span>
            <span className="block">{secondLine}</span>
          </h1>

          <p className="hero-text" data-reveal data-reveal-style="up" data-reveal-delay="180">
            {t('hero.text')}
          </p>

          <div className="hero-actions" data-reveal data-reveal-style="up" data-reveal-delay="260">
            <a className="btn-premium btn-hero" href="#prijava">
              <span>{t('hero.cta')}</span>
              <IconArrow />
            </a>
            <p className="hero-micro">{t('hero.micro_text')}</p>
          </div>
        </div>

        <div className="hero-visual" data-reveal data-reveal-style="right" data-reveal-delay="220" aria-hidden="true">
          <div className="hero-orbit hero-orbit-a" />
          <div className="hero-orbit hero-orbit-b" />
          <div className="hero-core" />
          <div className="hero-dot hero-dot-a" />
          <div className="hero-dot hero-dot-b" />
          <div className="hero-dot hero-dot-c" />
        </div>
      </div>
    </section>
  )
}