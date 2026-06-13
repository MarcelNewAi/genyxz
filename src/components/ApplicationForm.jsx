import { useState } from 'react'
import { IconArrowUpRight } from './Icons'
import { submitForm } from '../utils/submitForm'
import { useTranslation } from '../utils/useTranslation'

function FloatingField({ helper, id, isTextarea = false, label, onChange, required = false, rows = 3, type = 'text', value }) {
  const Control = isTextarea ? 'textarea' : 'input'

  return (
    <label className="floating-field" htmlFor={id}>
      <Control
        id={id}
        onChange={onChange}
        placeholder=" "
        required={required}
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
  const [name, setName] = useState('')
  const [path, setPath] = useState('community')
  const [reason, setReason] = useState('')
  const [motivation, setMotivation] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState({ message: '', type: 'idle' })

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status.type === 'sending') {
      return
    }

    setStatus({ message: 'Pošiljanje prijave ...', type: 'sending' })

    try {
      await submitForm({ email, motivation, name, path, phone, reason, type: 'application', website })
      setName('')
      setPath('community')
      setReason('')
      setMotivation('')
      setEmail('')
      setPhone('')
      setWebsite('')
      setStatus({ message: 'Prijava je bila uspešno poslana.', type: 'success' })
    } catch (error) {
      setStatus({ message: error.message, type: 'error' })
    }
  }

  return (
    <section id="prijava" className="main-section main-section-soft section-application">
      <div className="site-container section-narrow">
        <p className="main-eyebrow" data-reveal data-reveal-style="clip">
          {t('labels.prijava')}
        </p>
        <h2 className="main-section-title" data-reveal data-reveal-style="up" data-reveal-delay="80">
          {t('prijava.title')}
        </h2>
        <p className="section-subtitle" data-reveal data-reveal-style="up" data-reveal-delay="140">
          {t('prijava.subtitle')}
        </p>

        <form className="application-form" onSubmit={handleSubmit} data-reveal data-reveal-style="up" data-reveal-delay="200">
          <FloatingField
            id="field-name"
            label={t('prijava.field_name_label')}
            onChange={(event) => setName(event.target.value)}
            required
            value={name}
          />

          <FloatingField
            id="field-reason"
            isTextarea
            label={t('prijava.field1_label')}
            onChange={(event) => setReason(event.target.value)}
            required
            rows={5}
            value={reason}
          />

          <FloatingField
            id="field-motivation"
            isTextarea
            label={t('prijava.field2_label')}
            onChange={(event) => setMotivation(event.target.value)}
            required
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
                  required
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
                  required
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
            required
            type="email"
            value={email}
          />

          <FloatingField
            helper={t('prijava.field5_helper')}
            id="field-phone"
            label={t('prijava.field5_label')}
            onChange={(event) => setPhone(event.target.value)}
            required
            type="tel"
            value={phone}
          />

          <label className="form-honeypot" aria-hidden="true">
            Spletna stran
            <input autoComplete="off" name="website" onChange={(event) => setWebsite(event.target.value)} tabIndex="-1" value={website} />
          </label>

          <button className="btn-premium main-btn-primary btn-submit" disabled={status.type === 'sending'} type="submit">
            <span>{status.type === 'sending' ? 'Pošiljanje ...' : t('prijava.cta')}</span>
            <IconArrowUpRight />
          </button>
          <p aria-live="polite" className={`form-status form-status-${status.type}`}>
            {status.message}
          </p>
        </form>

      </div>
    </section>
  )
}
