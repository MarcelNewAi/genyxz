import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

function CheckItem({ text }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-bold text-text-primary"
      >
        ✓
      </span>
      <span className="text-text-primary">{text}</span>
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

  const benefits = useMemo(
    () => [t('kaj_pridobis.benefit1'), t('kaj_pridobis.benefit2'), t('kaj_pridobis.benefit3')],
    [t],
  )

  return (
    <section id="kaj-pridobis" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="section-label">{t('kaj_pridobis.label')}</p>
        <h2 className="section-title mt-3">{t('kaj_pridobis.title')}</h2>
        <p className="mt-3 text-text-secondary">{t('kaj_pridobis.subtitle')}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg">{t('kaj_pridobis.skills_label')}</h3>
            <ul className="grid gap-3">
              {skills.map((skill) => (
                <CheckItem key={skill} text={skill} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg">{t('kaj_pridobis.benefits_label')}</h3>
            <ul className="grid gap-3">
              {benefits.map((benefit) => (
                <CheckItem key={benefit} text={benefit} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
