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
    <section id="prva-generacija" className="editorial-section section-dark">
      <div className="site-container">
        <p className="section-label section-label-lime" data-reveal>
          {t('sections.prva_label')}
        </p>
        <h2 className="section-title section-title-dark" data-reveal data-reveal-delay="80">
          {t('prva_generacija.title')}
        </h2>
        <p className="dark-intro" data-reveal data-reveal-delay="130">
          {t('prva_generacija.intro_line')}
        </p>

        <ul className="perk-grid" data-reveal data-reveal-delay="180">
          {perks.map((perk, index) => (
            <li key={perk.title} className="perk-item">
              <p className="perk-title">
                <span className="perk-bullet" aria-hidden="true">
                  {index + 1}.
                </span>
                {perk.title}
              </p>
              <p className="perk-text">{perk.text}</p>
            </li>
          ))}
        </ul>

        <blockquote className="pull-quote" data-reveal data-reveal-delay="240">
          {t('prva_generacija.closing_line1')} {t('prva_generacija.closing_line2')}
        </blockquote>

        <a className="dark-outline-cta" href="#prijava" data-reveal data-reveal-delay="300">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  )
}
