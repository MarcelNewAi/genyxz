import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function ChoosePath() {
  const { t } = useTranslation()
  const cards = useMemo(
    () => [
      {
        icon: '🌐',
        title: t('izberi_pot.community_title'),
        text: t('izberi_pot.community_text'),
        accent: 'border-primary/60 hover:border-primary',
      },
      {
        icon: '⚡',
        title: t('izberi_pot.lifestyle_title'),
        text: t('izberi_pot.lifestyle_text'),
        accent: 'border-secondary/80 hover:border-secondary',
      },
    ],
    [t],
  )

  return (
    <section id="izberi-pot" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="section-label">{t('izberi_pot.label')}</p>
        <h2 className="section-title mt-3">{t('izberi_pot.title')}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-3xl border bg-surface p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${card.accent}`}
            >
              <p className="text-2xl" aria-hidden="true">
                {card.icon}
              </p>
              <h3 className="mt-3 text-xl">{card.title}</h3>
              <p className="mt-3 text-text-secondary">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
