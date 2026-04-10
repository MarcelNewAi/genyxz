import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function PartnerBar() {
  const { t } = useTranslation()

  const partners = useMemo(
    () => [
      t('partners.name1'),
      t('partners.name2'),
      t('partners.name3'),
      t('partners.name4'),
      t('partners.name5'),
      t('partners.name6'),
    ],
    [t],
  )

  return (
    <section className="partner-section section-surface">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('partners.label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('partners.title')}
        </h2>

        <div className="partner-grid" data-reveal data-reveal-style="up" data-reveal-delay="160">
          {partners.map((partner, index) => (
            <div className="partner-item" data-reveal data-reveal-style="up" data-reveal-delay={`${220 + index * 50}`} key={partner}>
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}