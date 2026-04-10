import { useState } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function ApplicationForm() {
  const { t } = useTranslation()
  const [path, setPath] = useState('community')

  return (
    <section id="prijava" className="editorial-section section-application">
      <div className="site-container section-narrow">
        <p className="section-label section-label-mint" data-reveal>
          {t('sections.prijava_label')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('prijava.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-delay="130">
          {t('prijava.micro_text')}
        </p>

        <form className="application-form" onSubmit={(event) => event.preventDefault()} data-reveal data-reveal-delay="180">
          <label className="application-field">
            <span>{t('prijava.field1_label')}</span>
            <textarea className="field-underline min-h-30" placeholder={t('prijava.field1_placeholder')} />
          </label>

          <label className="application-field">
            <span>{t('prijava.field2_label')}</span>
            <textarea className="field-underline min-h-28" placeholder={t('prijava.field2_placeholder')} />
          </label>

          <fieldset className="path-selector">
            <legend>{t('prijava.field3_label')}</legend>
            <div className="path-selector-grid">
              <label className={`path-option ${path === 'community' ? 'path-option-active' : ''}`}>
                <input
                  checked={path === 'community'}
                  name="path"
                  onChange={() => setPath('community')}
                  type="radio"
                  value="community"
                />
                <span>{t('prijava.field3_option1')}</span>
              </label>

              <label className={`path-option ${path === 'lifestyle' ? 'path-option-active' : ''}`}>
                <input
                  checked={path === 'lifestyle'}
                  name="path"
                  onChange={() => setPath('lifestyle')}
                  type="radio"
                  value="lifestyle"
                />
                <span>{t('prijava.field3_option2')}</span>
              </label>
            </div>
          </fieldset>

          <label className="application-field">
            <span>{t('prijava.field4_label')}</span>
            <input className="field-underline" placeholder={t('prijava.field4_placeholder')} type="text" />
          </label>

          <button className="submit-cta" type="submit">
            {t('prijava.cta')}
          </button>
        </form>

        <p className="application-closing" data-reveal data-reveal-delay="240">
          <span>{t('prijava.closing_line1')}</span>
          <span>{t('prijava.closing_line2')}</span>
        </p>
      </div>
    </section>
  )
}
