import { useTranslation } from '../utils/useTranslation'

export default function WhySection() {
  const { t } = useTranslation()

  return (
    <section id="zakaj" className="editorial-section section-surface">
      <div className="site-container section-narrow">
        <p className="section-label section-label-light" data-reveal>
          {t('labels.zakaj')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('zakaj.title')}
        </h2>

        <div className="why-flow" data-reveal data-reveal-delay="140">
          <p data-reveal data-reveal-delay="180">{t('zakaj.text1')}</p>
          <span className="why-divider" aria-hidden="true" />
          <p data-reveal data-reveal-delay="260">{t('zakaj.text2')}</p>
          <span className="why-divider" aria-hidden="true" />
          <p data-reveal data-reveal-delay="340">{t('zakaj.text3')}</p>
        </div>
      </div>
    </section>
  )
}
