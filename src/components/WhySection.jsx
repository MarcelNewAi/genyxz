import { useTranslation } from '../utils/useTranslation'

export default function WhySection() {
  const { t } = useTranslation()
  const blocks = [t('zakaj.block1'), t('zakaj.block2'), t('zakaj.block3')]

  return (
    <section id="zakaj" className="editorial-section section-surface section-rhythm-compact">
      <div className="site-container section-narrow">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('labels.zakaj')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('zakaj.title')}
        </h2>

        <div className="why-grid" data-reveal data-reveal-style="up" data-reveal-delay="140">
          {blocks.map((block, index) => (
            <article key={block} className="why-card" data-reveal data-reveal-style={index % 2 === 0 ? 'left' : 'right'} data-reveal-delay={`${200 + index * 90}`}>
              <p className="why-line">{block}</p>
            </article>
          ))}
        </div>

        <p className="why-closing" data-reveal data-reveal-style="up" data-reveal-delay="420">
          {t('zakaj.closing')}
        </p>
      </div>
    </section>
  )
}
