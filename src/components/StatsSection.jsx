import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from '../utils/useTranslation'

function useCountUp(target, duration = 1200) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return undefined
    }

    let frameId = 0
    let startedAt = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        observer.disconnect()

        const tick = (timestamp) => {
          if (!startedAt) {
            startedAt = timestamp
          }

          const progress = Math.min((timestamp - startedAt) / duration, 1)
          const nextValue = Math.round(target * progress)
          setValue(nextValue)

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick)
          }
        }

        frameId = window.requestAnimationFrame(tick)
      },
      {
        threshold: 0.45,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frameId)
    }
  }, [target, duration])

  return [ref, value]
}

function StatCard({ label, target, suffix, delay }) {
  const [counterRef, counter] = useCountUp(target, 1500 + delay)

  return (
    <article className="stats-card" data-reveal data-reveal-delay={delay}>
      <p className="stats-value" ref={counterRef}>
        <span>{new Intl.NumberFormat('sl-SI').format(counter)}</span>
        <span className="stats-suffix">{suffix}</span>
      </p>
      <p className="stats-label">{label}</p>
    </article>
  )
}

export default function StatsSection() {
  const { t } = useTranslation()

  const stats = useMemo(
    () => [
      {
        label: t('stats.item1_label'),
        target: Number(t('stats.item1_value')),
        suffix: t('stats.item1_suffix'),
      },
      {
        label: t('stats.item2_label'),
        target: Number(t('stats.item2_value')),
        suffix: t('stats.item2_suffix'),
      },
      {
        label: t('stats.item3_label'),
        target: Number(t('stats.item3_value')),
        suffix: t('stats.item3_suffix'),
      },
    ],
    [t],
  )

  return (
    <section className="stats-section editorial-section section-light">
      <div className="site-container">
        <p className="section-label section-label-light" data-reveal>
          {t('stats.label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="clip" data-reveal-delay="80">
          {t('stats.title')}
        </h2>

        <div className="stats-grid" data-reveal data-reveal-style="up" data-reveal-delay="140">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              delay={220 + index * 120}
              label={stat.label}
              suffix={stat.suffix}
              target={stat.target}
            />
          ))}
        </div>
      </div>
    </section>
  )
}