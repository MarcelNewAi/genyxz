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
        <p className="section-label section-label-mint" data-reveal>
          {t('sections.koga_label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('koga_iscemo.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-delay="130">
          {t('koga_iscemo.subtitle')}
        </p>

        <ul className="trait-list" data-reveal data-reveal-delay="180">
          {traits.map((trait, index) => (
            <li key={trait} data-reveal data-reveal-delay={`${220 + index * 80}`}>
              <span aria-hidden="true">•</span>
              {trait}
            </li>
          ))}
        </ul>

        <p className="editorial-note" data-reveal data-reveal-delay="260">
          {t('koga_iscemo.note')}
        </p>
      </div>
    </section>
  )
}
