import { useState } from 'react'
import { IconArrowUpRight } from './Icons'
import { useTranslation } from '../utils/useTranslation'

function FloatingField({ helper, id, isTextarea = false, label, onChange, rows = 3, type = 'text', value }) {
  const Control = isTextarea ? 'textarea' : 'input'

  return (
    <label className="floating-field" htmlFor={id}>
      <Control
        id={id}
        onChange={onChange}
        placeholder=" "
        rows={isTextarea ? rows : undefined}
        type={isTextarea ? undefined : type}
        value={value}
      />
      <span>{label}</span>
      <em className="field-border" aria-hidden="true" />
      {helper ? <small>{helper}</small> : null}
    </label>
  )
}

export default function ApplicationForm() {
  const { t } = useTranslation()
  const [path, setPath] = useState('community')
  const [reason, setReason] = useState('')
  const [motivation, setMotivation] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

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
          {t('prijava.subtitle')}
        </p>

        <form className="application-form" onSubmit={(event) => event.preventDefault()} data-reveal data-reveal-style="up" data-reveal-delay="200">
          <FloatingField
            id="field-reason"
            isTextarea
            label={t('prijava.field1_label')}
            onChange={(event) => setReason(event.target.value)}
            rows={5}
            value={reason}
          />

          <FloatingField
            id="field-motivation"
            isTextarea
            label={t('prijava.field2_label')}
            onChange={(event) => setMotivation(event.target.value)}
            rows={5}
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
            helper={t('prijava.field4_helper')}
            id="field-email"
            label={t('prijava.field4_label')}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
          />

          <FloatingField
            helper={t('prijava.field5_helper')}
            id="field-phone"
            label={t('prijava.field5_label')}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            value={phone}
          />

          <button className="btn-premium btn-submit" type="submit">
            <span>{t('prijava.cta')}</span>
            <IconArrowUpRight />
          </button>
        </form>

      </div>
    </section>
  )
}
