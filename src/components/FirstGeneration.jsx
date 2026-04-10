import { useMemo } from 'react'
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
      <div className="dark-glow dark-glow-top" aria-hidden="true" />
      <div className="dark-glow dark-glow-bottom" aria-hidden="true" />

      <div className="site-container section-narrow-wide">
        <p className="section-label section-label-dark" data-reveal>
          {t('labels.prva_generacija')}
        </p>
        <h2 className="section-title section-title-on-dark" data-reveal data-reveal-delay="80">
          {t('prva_generacija.title')}
        </h2>
        <p className="dark-intro" data-reveal data-reveal-delay="140">
          {t('prva_generacija.intro_line')}
        </p>

        <ul className="perk-list" data-reveal data-reveal-delay="200">
          {perks.map((perk, index) => (
            <li key={perk.title} className="perk-entry" data-reveal data-reveal-delay={`${260 + index * 80}`}>
              <p className="perk-number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="perk-title">{perk.title}</h3>
              <p className="perk-description">{perk.text}</p>
            </li>
          ))}
        </ul>

        <p className="pull-quote" data-reveal data-reveal-delay="420">
          {t('prva_generacija.closing_line1')} {t('prva_generacija.closing_line2')}
        </p>

        <a className="btn-outline-dark" href="#prijava" data-reveal data-reveal-delay="500">
          {t('hero.cta')} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
