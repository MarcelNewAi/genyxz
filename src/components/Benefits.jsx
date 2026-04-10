import { useMemo } from 'react'
import { IconShield, IconSpark } from './Icons'
import { useTranslation } from '../utils/useTranslation'

function BenefitItem({ text, delay, icon }) {
  return (
    <li className="benefit-item" data-reveal data-reveal-style="up" data-reveal-delay={delay}>
      <span className="benefit-icon" aria-hidden="true">
        {icon}
      </span>
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
    <section id="kaj-pridobis" className="editorial-section section-surface section-rhythm-compact">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('labels.kaj_pridobis')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('kaj_pridobis.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-style="up" data-reveal-delay="140">
          {t('kaj_pridobis.subtitle')}
        </p>

        <div className="benefits-columns" data-reveal data-reveal-style="up" data-reveal-delay="200">
          <article className="benefits-card">
            <h3 className="benefits-heading">{t('kaj_pridobis.skills_heading')}</h3>
            <ul className="benefits-list">
              {skills.map((item, index) => (
                <BenefitItem key={item} delay={`${240 + index * 80}`} icon={<IconSpark />} text={item} />
              ))}
            </ul>
          </article>

          <article className="benefits-card benefits-card-accent">
            <h3 className="benefits-heading">{t('kaj_pridobis.benefits_heading')}</h3>
            <ul className="benefits-list">
              {extras.map((item, index) => (
                <BenefitItem key={item} delay={`${260 + index * 90}`} icon={<IconShield />} text={item} />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}