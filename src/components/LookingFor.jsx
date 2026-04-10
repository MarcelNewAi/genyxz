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
    <section id="koga-iscemo" className="editorial-section section-light">
      <div className="site-container section-narrow">
        <p className="section-label section-label-light" data-reveal>
          {t('labels.koga_iscemo')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('koga_iscemo.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-delay="140">
          {t('koga_iscemo.subtitle')}
        </p>

        <ul className="traits-list" data-reveal data-reveal-delay="200">
          {traits.map((trait, index) => (
            <li key={trait} data-reveal data-reveal-delay={`${240 + index * 80}`}>
              <span className="trait-dot" aria-hidden="true" />
              <span>{trait}</span>
            </li>
          ))}
        </ul>

        <p className="note-callout" data-reveal data-reveal-delay="360">
          {t('koga_iscemo.note')}
        </p>
      </div>
    </section>
  )
}
