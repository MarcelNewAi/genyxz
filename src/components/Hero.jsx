import { IconArrow } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero-section editorial-section section-light">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-grid-overlay" />
      </div>

      <div className="site-container hero-grid">
        <div className="hero-content">
          <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
            {t('labels.hero')}
          </p>

          <h1 className="hero-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
            <span className="block">{t('hero.title_line1')}</span>
            <span className="block">{t('hero.title_line2')}</span>
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

        <div className="hero-visual hero-signal-board" data-reveal data-reveal-style="right" data-reveal-delay="220" aria-hidden="true">
          <div className="signal-track signal-track-a">
            <span className="signal-runner" />
          </div>
          <div className="signal-track signal-track-b">
            <span className="signal-runner" />
          </div>
          <div className="signal-track signal-track-c">
            <span className="signal-runner" />
          </div>
          <div className="signal-bars">
            <span className="signal-bar signal-bar-1" />
            <span className="signal-bar signal-bar-2" />
            <span className="signal-bar signal-bar-3" />
            <span className="signal-bar signal-bar-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
