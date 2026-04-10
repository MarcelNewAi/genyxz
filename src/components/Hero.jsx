import { useMemo } from 'react'
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
    <section id="hero" className="hero-section editorial-section">
      <div className="hero-glow hero-glow-top" aria-hidden="true" />
      <div className="hero-glow hero-glow-bottom" aria-hidden="true" />

      <div className="site-container hero-grid">
        <div className="hero-content">
          <p className="section-label section-label-light" data-reveal>
            {t('labels.hero')}
          </p>

          <h1 className="hero-title" data-reveal data-reveal-delay="100">
            <span className="block">{t('hero.title_line1')}</span>
            <span className="block">{secondLine}</span>
          </h1>

          <p className="hero-text" data-reveal data-reveal-delay="200">
            {t('hero.text')}
          </p>

          <a className="btn-gradient btn-lg" href="#prijava" data-reveal data-reveal-delay="300">
            {t('hero.cta')}
          </a>

          <p className="hero-micro" data-reveal data-reveal-delay="400">
            {t('hero.micro_text')}
          </p>
        </div>
      </div>
    </section>
  )
}
