import { useState } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function ApplicationForm() {
  const { t } = useTranslation()
  const [path, setPath] = useState('community')

  return (
    <section id="prijava" className="editorial-section section-application">
      <div className="site-container section-narrow">
        <p className="section-label section-label-light" data-reveal>
          {t('labels.prijava')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="80">
          {t('prijava.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-delay="140">
          {t('prijava.micro_text')}
        </p>

        <form className="application-form" onSubmit={(event) => event.preventDefault()} data-reveal data-reveal-delay="200">
          <label className="form-group">
            <span>{t('prijava.field1_label')}</span>
            <textarea placeholder={t('prijava.field1_placeholder')} rows={3} />
          </label>

          <label className="form-group">
            <span>{t('prijava.field2_label')}</span>
            <textarea placeholder={t('prijava.field2_placeholder')} rows={3} />
          </label>

          <fieldset className="path-toggle">
            <legend>{t('prijava.field3_label')}</legend>
            <div className="path-toggle-grid">
              <label className={`toggle-option ${path === 'community' ? 'toggle-option-active' : ''}`}>
                <input
                  checked={path === 'community'}
                  name="path"
                  onChange={() => setPath('community')}
                  type="radio"
                  value="community"
                />
                <span>{t('prijava.field3_option1')}</span>
              </label>

              <label className={`toggle-option ${path === 'lifestyle' ? 'toggle-option-active' : ''}`}>
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

          <label className="form-group">
            <span>{t('prijava.field4_label')}</span>
            <input placeholder={t('prijava.field4_placeholder')} type="text" />
          </label>

          <button className="btn-gradient btn-submit" type="submit">
            {t('prijava.cta')}
          </button>
        </form>

        <p className="application-closing" data-reveal data-reveal-delay="260">
          <span>{t('prijava.closing_line1')}</span>
          <span className="application-closing-strong">{t('prijava.closing_line2')}</span>
        </p>
      </div>
    </section>
  )
}
