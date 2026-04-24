import { IconArrow } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function FinalCta() {
  const { t } = useTranslation()

  return (
    <section className="editorial-section section-surface section-rhythm-compact final-cta-section">
      <div className="site-container section-narrow final-cta-wrap" data-reveal data-reveal-style="up">
        <h2 className="section-title final-cta-title">{t('final_cta.title')}</h2>
        <a className="btn-premium" href="#prijava">
          <span>{t('hero.cta')}</span>
          <IconArrow />
        </a>
      </div>
    </section>
  )
}
