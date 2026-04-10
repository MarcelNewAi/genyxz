import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function ChoosePath() {
  const { t } = useTranslation()

  const cards = useMemo(
    () => [
      {
        title: t('izberi_pot.community_title'),
        text: t('izberi_pot.community_text'),
        icon: '🌐',
        accentClass: 'path-accent-community',
      },
      {
        title: t('izberi_pot.lifestyle_title'),
        text: t('izberi_pot.lifestyle_text'),
        icon: '⚡',
        accentClass: 'path-accent-lifestyle',
      },
    ],
    [t],
  )

  return (
    <section id="izberi-pot" className="editorial-section section-light">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal>
          {t('labels.izberi_pot')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('izberi_pot.title')}
        </h2>

        <div className="path-grid" data-reveal data-reveal-delay="160">
          {cards.map((card, index) => (
            <article key={card.title} className="path-panel" data-reveal data-reveal-delay={`${220 + index * 120}`}>
              <span className={`path-accent ${card.accentClass}`} aria-hidden="true" />
              <p className="path-icon" aria-hidden="true">
                {card.icon}
              </p>
              <h3 className="path-title">{card.title}</h3>
              <p className="path-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
