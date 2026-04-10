import { IconNetwork, IconSpark } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function ChoosePath() {
  const { t } = useTranslation()

  return (
    <section id="izberi-pot" className="editorial-section section-light">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('labels.izberi_pot')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('izberi_pot.title')}
        </h2>

        <div className="path-flow" data-reveal data-reveal-style="up" data-reveal-delay="150">
          <article className="path-row path-row-community" data-reveal data-reveal-style="left" data-reveal-delay="220">
            <span className="path-row-icon" aria-hidden="true">
              <IconNetwork />
            </span>
            <div className="path-row-content">
              <h3 className="path-title">{t('izberi_pot.community_title')}</h3>
              <p className="path-text">{t('izberi_pot.community_text')}</p>
            </div>
            <span className="path-row-line" aria-hidden="true" />
          </article>

          <article className="path-row path-row-lifestyle" data-reveal data-reveal-style="right" data-reveal-delay="320">
            <span className="path-row-icon" aria-hidden="true">
              <IconSpark />
            </span>
            <div className="path-row-content">
              <h3 className="path-title">{t('izberi_pot.lifestyle_title')}</h3>
              <p className="path-text">{t('izberi_pot.lifestyle_text')}</p>
            </div>
            <span className="path-row-line" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>
  )
}