import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function ChoosePath() {
  const { t } = useTranslation()

  const cards = useMemo(
    () => [
      {
        title: t('izberi_pot.community_title'),
        text: t('izberi_pot.community_text'),
        icon: '◎',
        className: 'path-card path-community',
      },
      {
        title: t('izberi_pot.lifestyle_title'),
        text: t('izberi_pot.lifestyle_text'),
        icon: '△',
        className: 'path-card path-lifestyle',
      },
    ],
    [t],
  )

  return (
    <section id="izberi-pot" className="editorial-section section-light">
      <div className="site-container">
        <p className="section-label section-label-mint" data-reveal>
          {t('sections.izberi_label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('izberi_pot.title')}
        </h2>

        <div className="path-grid" data-reveal data-reveal-delay="160">
          {cards.map((card) => (
            <article key={card.title} className={card.className}>
              <span className="path-icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
