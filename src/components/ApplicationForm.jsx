import { useState } from 'react'
import { IconArrowUpRight } from './Icons'
import { useTranslation } from '../utils/useTranslation'

function FloatingField({ helper, id, isTextarea = false, label, onChange, rows = 3, value }) {
  const Control = isTextarea ? 'textarea' : 'input'

  return (
    <label className="floating-field" htmlFor={id}>
      <Control
        id={id}
        onChange={onChange}
        placeholder=" "
        rows={isTextarea ? rows : undefined}
        type={isTextarea ? undefined : 'text'}
        value={value}
      />
      <span>{label}</span>
      <em className="field-border" aria-hidden="true" />
      <small>{helper}</small>
    </label>
  )
}

export default function ApplicationForm() {
  const { t } = useTranslation()
  const [path, setPath] = useState('community')
  const [reason, setReason] = useState('')
  const [motivation, setMotivation] = useState('')
  const [contact, setContact] = useState('')

  return (
    <section id="prijava" className="editorial-section section-application">
      <div className="site-container section-narrow">
        <p className="section-label section-label-light" data-reveal data-reveal-style="clip">
          {t('labels.prijava')}
        </p>
        <h2 className="section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('prijava.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-style="up" data-reveal-delay="140">
          {t('prijava.micro_text')}
        </p>

        <form className="application-form" onSubmit={(event) => event.preventDefault()} data-reveal data-reveal-style="up" data-reveal-delay="200">
          <FloatingField
            helper={t('prijava.field1_placeholder')}
            id="field-reason"
            isTextarea
            label={t('prijava.field1_label')}
            onChange={(event) => setReason(event.target.value)}
            value={reason}
          />

          <FloatingField
            helper={t('prijava.field2_placeholder')}
            id="field-motivation"
            isTextarea
            label={t('prijava.field2_label')}
            onChange={(event) => setMotivation(event.target.value)}
            value={motivation}
          />

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

          <FloatingField
            helper={t('prijava.field4_placeholder')}
            id="field-contact"
            label={t('prijava.field4_label')}
            onChange={(event) => setContact(event.target.value)}
            value={contact}
          />

          <button className="btn-premium btn-submit" type="submit">
            <span>{t('prijava.cta')}</span>
            <IconArrowUpRight />
          </button>
        </form>

        <p className="application-closing" data-reveal data-reveal-style="up" data-reveal-delay="260">
          <span>{t('prijava.closing_line1')}</span>
          <span className="application-closing-strong">{t('prijava.closing_line2')}</span>
        </p>
      </div>
    </section>
  )
}