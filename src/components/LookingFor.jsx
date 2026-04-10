import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function LookingFor() {
  const { t } = useTranslation()

  const traits = useMemo(
    () => [
      t('koga_iscemo.trait1'),
      t('koga_iscemo.trait2'),
      t('koga_iscemo.trait3'),
      t('koga_iscemo.trait4'),
    ],
    [t],
  )

  return (
    <section id="koga-iscemo" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">{t('koga_iscemo.label')}</p>
        <h2 className="section-title mt-3">{t('koga_iscemo.title')}</h2>
        <p className="mt-3 text-text-secondary">{t('koga_iscemo.subtitle')}</p>

        <ul className="mt-8 grid gap-3">
          {traits.map((trait) => (
            <li key={trait} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-flex h-3 w-3 shrink-0 rounded-full bg-secondary ring-4 ring-secondary/25"
              />
              <span className="text-text-primary">{trait}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm font-semibold text-text-primary">
          {t('koga_iscemo.note')}
        </p>
      </div>
    </section>
  )
}
