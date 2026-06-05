import { IconArrow } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function FinalCta() {
  const { t } = useTranslation()

  return (
    <section className="main-section main-ambassador-band ambassador-final-cta final-cta-section">
      <div className="site-container section-narrow final-cta-wrap" data-reveal data-reveal-style="up">
        <h2 className="section-title section-title-on-dark final-cta-title">{t('final_cta.title')}</h2>
        <a className="btn-premium main-btn-primary ambassador-final-cta-button" href="#prijava">
          <span>{t('final_cta.cta')}</span>
          <IconArrow />
        </a>
      </div>
    </section>
  )
}
