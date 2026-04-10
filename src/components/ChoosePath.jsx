import { useMemo } from 'react'
import { IconNetwork, IconOrbit } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function ChoosePath() {
  const { t } = useTranslation()

  const cards = useMemo(
    () => [
      {
        title: t('izberi_pot.community_title'),
        text: t('izberi_pot.community_text'),
        icon: IconNetwork,
        accentClass: 'path-accent-community',
      },
      {
        title: t('izberi_pot.lifestyle_title'),
        text: t('izberi_pot.lifestyle_text'),
        icon: IconOrbit,
        accentClass: 'path-accent-lifestyle',
      },
    ],
    [t],
  )

  return (
    <section id="izberi-pot" className="editorial-section section-light">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('labels.izberi_pot')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('izberi_pot.title')}
        </h2>

        <div className="path-grid" data-reveal data-reveal-style="up" data-reveal-delay="150">
          {cards.map((card, index) => {
            const CardIcon = card.icon

            return (
              <article
                key={card.title}
                className="path-panel"
                data-reveal
                data-reveal-style={index % 2 === 0 ? 'left' : 'right'}
                data-reveal-delay={`${220 + index * 100}`}
              >
                <span className={`path-accent ${card.accentClass}`} aria-hidden="true" />
                <span className="path-icon" aria-hidden="true">
                  <CardIcon />
                </span>
                <h3 className="path-title">{card.title}</h3>
                <p className="path-text">{card.text}</p>
                <span className="path-sheen" aria-hidden="true" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}