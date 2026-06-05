import { useMemo } from 'react'
import helixMotifSrc from '../assets/images/genyxz-first-helix-photo-preserved.svg'
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
    <section id="hero" className="main-hero landing-main-hero">
      <img alt="" aria-hidden="true" className="dna-helix main-hero-helix landing-main-hero-helix" src={helixMotifSrc} />
      <div className="site-container main-hero-grid">
        <div className="main-hero-copy landing-main-hero-copy">
          <p className="main-eyebrow" data-reveal data-reveal-style="clip">
            {t('labels.hero')}
          </p>

          <h1 data-reveal data-reveal-style="up" data-reveal-delay="80">
            <span className="block">{t('hero.title_line1')}</span>
            <span className="block">{secondLine}</span>
          </h1>

          <p className="main-lead" data-reveal data-reveal-style="up" data-reveal-delay="180">
            {t('hero.text')}
          </p>

          <div className="main-actions landing-main-actions" data-reveal data-reveal-style="up" data-reveal-delay="260">
            <a className="btn-premium main-btn-primary" href="#prijava">
              <span>{t('hero.cta')}</span>
              <IconArrow />
            </a>
            <p className="hero-micro">{t('hero.micro_text')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
