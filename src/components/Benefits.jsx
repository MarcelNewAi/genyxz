import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function Benefits() {
  const { t } = useTranslation()

  const skills = useMemo(
    () => [
      t('kaj_pridobis.skill1'),
      t('kaj_pridobis.skill2'),
      t('kaj_pridobis.skill3'),
      t('kaj_pridobis.skill4'),
      t('kaj_pridobis.skill5'),
    ],
    [t],
  )

  const extras = useMemo(
    () => [t('kaj_pridobis.benefit1'), t('kaj_pridobis.benefit2'), t('kaj_pridobis.benefit3')],
    [t],
  )

  return (
    <section id="kaj-pridobis" className="editorial-section section-white">
      <div className="site-container">
        <p className="section-label section-label-mint" data-reveal>
          {t('sections.kaj_label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('kaj_pridobis.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-delay="130">
          {t('kaj_pridobis.subtitle')}
        </p>

        <div className="benefits-grid">
          <div data-reveal data-reveal-delay="170">
            <h3 className="column-heading">{t('kaj_pridobis.skills_label')}</h3>
            <ul className="clean-list">
              {skills.map((item, index) => (
                <li key={item} data-reveal data-reveal-delay={`${220 + index * 100}`}>
                  <span aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal data-reveal-delay="170">
            <h3 className="column-heading">{t('kaj_pridobis.benefits_label')}</h3>
            <ul className="clean-list">
              {extras.map((item, index) => (
                <li key={item} data-reveal data-reveal-delay={`${220 + index * 100}`}>
                  <span aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
