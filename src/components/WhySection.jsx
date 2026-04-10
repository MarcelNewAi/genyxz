import { useTranslation } from '../utils/useTranslation'

export default function WhySection() {
  const { t } = useTranslation()

  return (
    <section id="zakaj" className="editorial-section section-white">
      <div className="site-container section-narrow">
        <p className="section-label section-label-mint" data-reveal>
          {t('sections.zakaj_label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('zakaj.title')}
        </h2>

        <div className="flowing-copy" data-reveal data-reveal-delay="140">
          <p>{t('zakaj.text1')}</p>
          <span className="flow-divider" aria-hidden="true" />
          <p>{t('zakaj.text2')}</p>
          <span className="flow-divider" aria-hidden="true" />
          <p>{t('zakaj.text3')}</p>
        </div>
      </div>
    </section>
  )
}
