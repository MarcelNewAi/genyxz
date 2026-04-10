import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

const PERK_ICONS = ['🚀', '🤝', '🌱', '🧭']

export default function FirstGeneration() {
  const { t } = useTranslation()
  const perks = useMemo(
    () => [
      {
        title: t('prva_generacija.perk1_title'),
        text: t('prva_generacija.perk1_text'),
      },
      {
        title: t('prva_generacija.perk2_title'),
        text: t('prva_generacija.perk2_text'),
      },
      {
        title: t('prva_generacija.perk3_title'),
        text: t('prva_generacija.perk3_text'),
      },
      {
        title: t('prva_generacija.perk4_title'),
        text: t('prva_generacija.perk4_text'),
      },
    ],
    [t],
  )

  return (
    <section id="prva-generacija" className="scroll-mt-24 py-16 sm:py-20">
      <div className="rounded-3xl border border-primary/30 bg-[#133156] p-6 text-white shadow-[0_0_0_1px_rgba(67,209,171,0.2),0_0_42px_rgba(67,209,171,0.2)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">{t('prva_generacija.label')}</p>
        <h2 className="mt-3 text-white">{t('prva_generacija.title')}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {perks.map((perk, index) => (
            <article
              key={perk.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-xl" aria-hidden="true">
                {PERK_ICONS[index]}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{perk.title}</h3>
              <p className="mt-2 text-sm text-white/85">{perk.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-lg italic text-secondary sm:text-xl">
          <span className="block">{t('prva_generacija.closing_line1')}</span>
          <span className="block">{t('prva_generacija.closing_line2')}</span>
        </p>
      </div>
    </section>
  )
}
