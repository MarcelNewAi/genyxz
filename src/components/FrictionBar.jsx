import { IconCheck, IconClock, IconHeartUsers, IconMentor } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function FrictionBar() {
  const { t } = useTranslation()

  const items = [
    { icon: <IconCheck />, label: t('friction.item1') },
    { icon: <IconClock />, label: t('friction.item2') },
    { icon: <IconMentor />, label: t('friction.item3') },
    { icon: <IconHeartUsers />, label: t('friction.item4') },
  ]

  return (
    <section className="main-section main-section-soft friction-strip" aria-label={t('friction.aria_label')}>
      <div className="site-container">
        <div className="friction-grid" data-reveal data-reveal-style="up">
          {items.map((item, index) => (
            <div key={item.label} className="friction-item" data-reveal data-reveal-style="up" data-reveal-delay={`${80 + index * 70}`}>
              <span className="friction-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
