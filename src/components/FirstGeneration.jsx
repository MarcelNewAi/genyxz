import { useMemo } from 'react'
import { IconArrow, IconCheck } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function FirstGeneration() {
  const { t } = useTranslation()

  const perks = useMemo(
    () => [t('prva_generacija.perk1'), t('prva_generacija.perk2'), t('prva_generacija.perk3'), t('prva_generacija.perk4')],
    [t],
  )

  return (
    <section id="prva-generacija" className="editorial-section section-dark-gradient">
      <div className="dark-atmosphere" aria-hidden="true">
        <span className="dark-grid" />
        <span className="dark-line dark-line-a" />
        <span className="dark-line dark-line-b" />
      </div>

      <div className="site-container section-narrow-wide">
        <div className="generation-spotlight">
          <p className="section-label section-label-dark" data-reveal data-reveal-style="clip">
            {t('labels.prva_generacija')}
          </p>
          <h2 className="section-title section-title-on-dark" data-reveal data-reveal-style="up" data-reveal-delay="80">
            {t('prva_generacija.title')}
          </h2>

          <ul className="generation-list">
            {perks.map((perk, index) => (
              <li key={perk} className="generation-item" data-reveal data-reveal-style="up" data-reveal-delay={`${160 + index * 80}`}>
                <span className="generation-item-icon" aria-hidden="true">
                  <IconCheck />
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="dark-closing" data-reveal data-reveal-style="up" data-reveal-delay="500">
            <p className="pull-quote">
              <span>{t('prva_generacija.closing_line1')}</span>
              <span className="pull-quote-strong">{t('prva_generacija.closing_line2')}</span>
            </p>
            <a className="btn-premium" href="#prijava">
              <span>{t('hero.cta')}</span>
              <IconArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
