import { useTranslation } from '../utils/useTranslation'

export default function WhySection() {
  const { t } = useTranslation()

  return (
    <section id="zakaj" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">{t('zakaj.label')}</p>
        <h2 className="section-title mt-3">{t('zakaj.title')}</h2>

        <div className="mt-8 grid gap-4 sm:gap-5">
          <article className="section-card">
            <p>{t('zakaj.text1')}</p>
          </article>
          <article className="section-card">
            <p>{t('zakaj.text2')}</p>
          </article>
          <article className="section-card">
            <p>{t('zakaj.text3')}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
