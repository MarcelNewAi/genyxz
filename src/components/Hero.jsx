import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function Hero() {
  const { t } = useTranslation()

  const heroLine2 = useMemo(() => {
    const line = t('hero.title_line2')
    const emphasis = t('hero.title_line2_emphasis')
    if (!line.includes(emphasis)) {
      return <span>{line}</span>
    }

    const [before, after] = line.split(emphasis)
    return (
      <>
        {before}
        <span className="hero-emphasis">{emphasis}</span>
        {after}
      </>
    )
  }, [t])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-blob" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="section-label section-label-mint" data-reveal>
            {t('sections.hero_label')}
          </p>

          <h1 className="hero-title" data-reveal data-reveal-delay="80">
            <span className="block">{t('hero.title_line1')}</span>
            <span className="block">{heroLine2}</span>
          </h1>

          <p className="hero-text" data-reveal data-reveal-delay="160">
            {t('hero.text')}
          </p>

          <a className="hero-cta" href="#prijava" data-reveal data-reveal-delay="240">
            {t('hero.cta')}
          </a>

          <p className="hero-micro" data-reveal data-reveal-delay="300">
            {t('hero.micro_text')}
          </p>
        </div>
      </div>
    </section>
  )
}
