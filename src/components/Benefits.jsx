import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

function BenefitItem({ text, delay }) {
  return (
    <li className="benefit-item" data-reveal data-reveal-delay={delay}>
      <span className="benefit-dash" aria-hidden="true" />
      <span>{text}</span>
    </li>
  )
}

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
    <section id="kaj-pridobis" className="editorial-section section-surface">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal>
          {t('labels.kaj_pridobis')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('kaj_pridobis.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-delay="140">
          {t('kaj_pridobis.subtitle')}
        </p>

        <div className="benefits-columns" data-reveal data-reveal-delay="200">
          <div>
            <h3 className="benefits-heading">{t('kaj_pridobis.skills_heading')}</h3>
            <ul className="benefits-list">
              {skills.map((item, index) => (
                <BenefitItem key={item} delay={`${240 + index * 100}`} text={item} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="benefits-heading">{t('kaj_pridobis.benefits_heading')}</h3>
            <ul className="benefits-list">
              {extras.map((item, index) => (
                <BenefitItem key={item} delay={`${240 + index * 100}`} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
