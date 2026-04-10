import { useMemo } from 'react'
import { IconArrow, IconPulseCore } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function FirstGeneration() {
  const { t } = useTranslation()

  const perks = useMemo(
    () => [
      { title: t('prva_generacija.perk1_title'), text: t('prva_generacija.perk1_text') },
      { title: t('prva_generacija.perk2_title'), text: t('prva_generacija.perk2_text') },
      { title: t('prva_generacija.perk3_title'), text: t('prva_generacija.perk3_text') },
      { title: t('prva_generacija.perk4_title'), text: t('prva_generacija.perk4_text') },
    ],
    [t],
  )

  return (
    <section id="prva-generacija" className="editorial-section section-dark-gradient">
      <div className="dark-atmosphere" aria-hidden="true">
        <span className="dark-grid" />
        <span className="dark-glow dark-glow-top" />
        <span className="dark-glow dark-glow-bottom" />
        <span className="dark-line dark-line-a" />
        <span className="dark-line dark-line-b" />
      </div>

      <div className="site-container section-narrow-wide">
        <p className="section-label section-label-dark" data-reveal data-reveal-style="clip">
          {t('labels.prva_generacija')}
        </p>
        <h2 className="section-title section-title-on-dark" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('prva_generacija.title')}
        </h2>
        <p className="dark-intro" data-reveal data-reveal-style="up" data-reveal-delay="140">
          {t('prva_generacija.intro_line')}
        </p>

        <ul className="perk-list">
          {perks.map((perk, index) => (
            <li key={perk.title} className="perk-entry" data-reveal data-reveal-style="up" data-reveal-delay={`${200 + index * 80}`}>
              <div className="perk-head">
                <span className="perk-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="perk-icon" aria-hidden="true">
                  <IconPulseCore />
                </span>
              </div>
              <h3 className="perk-title">{perk.title}</h3>
              <p className="perk-description">{perk.text}</p>
            </li>
          ))}
        </ul>

        <div className="dark-closing" data-reveal data-reveal-style="up" data-reveal-delay="460">
          <p className="pull-quote">
            {t('prva_generacija.closing_line1')} {t('prva_generacija.closing_line2')}
          </p>
          <a className="btn-outline-dark" href="#prijava">
            <span>{t('hero.cta')}</span>
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  )
}