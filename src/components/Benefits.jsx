import { useMemo } from 'react'
import { IconArrow, IconCheck } from './Icons'
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
    () => [t('kaj_pridobis.skill1'), t('kaj_pridobis.skill2'), t('kaj_pridobis.skill3'), t('kaj_pridobis.skill4'), t('kaj_pridobis.skill5')],
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

        <div className="benefits-columns benefits-columns-single" data-reveal data-reveal-style="up" data-reveal-delay="200">
          <article className="benefits-card benefits-card-accent">
            <h3 className="benefits-heading">{t('kaj_pridobis.skills_heading')}</h3>
            <ul className="benefits-list">
              {skills.map((item, index) => (
                <BenefitItem key={item} delay={`${240 + index * 80}`} icon={<IconCheck />} text={item} />
              ))}
            </ul>
          </article>
        </div>

        <div className="section-cta" data-reveal data-reveal-style="up" data-reveal-delay="520">
          <a className="btn-premium" href="#prijava">
            <span>{t('hero.cta')}</span>
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  )
}
