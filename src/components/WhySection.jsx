import { useTranslation } from '../utils/useTranslation'

export default function WhySection() {
  const { t } = useTranslation()

  return (
    <section id="zakaj" className="editorial-section section-surface section-rhythm-compact">
      <div className="site-container section-narrow">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('labels.zakaj')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('zakaj.title')}
        </h2>

        <div className="why-flow" data-reveal data-reveal-style="up" data-reveal-delay="140">
          <p className="why-line" data-reveal data-reveal-style="left" data-reveal-delay="200">
            {t('zakaj.text1')}
          </p>
          <span className="why-divider" aria-hidden="true" />
          <p className="why-line" data-reveal data-reveal-style="right" data-reveal-delay="280">
            {t('zakaj.text2')}
          </p>
          <span className="why-divider" aria-hidden="true" />
          <p className="why-line" data-reveal data-reveal-style="left" data-reveal-delay="360">
            {t('zakaj.text3')}
          </p>
        </div>
      </div>
    </section>
  )
}