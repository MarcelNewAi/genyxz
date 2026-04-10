import { useMemo } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function MarqueeStrip() {
  const { t } = useTranslation()

  const items = useMemo(
    () => [t('marquee.item1'), t('marquee.item2'), t('marquee.item3'), t('marquee.item4')],
    [t],
  )

  const loopItems = [...items, ...items]

  return (
    <section className="marquee-section" aria-label={t('marquee.aria_label')}>
      <div className="marquee-track">
        {loopItems.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            <span className="marquee-dot" aria-hidden="true" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </section>
  )
}