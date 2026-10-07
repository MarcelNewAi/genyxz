import { useState } from 'react'
import AmbassadorRoleDetails from './AmbassadorRoleDetails'
import { IconArrowUpRight } from './Icons'
import { submitForm } from '../utils/submitForm'
import { useTranslation } from '../utils/useTranslation'

function FloatingField({ helper, id, inputMode, isTextarea = false, label, maxLength, onChange, pattern, required = false, rows = 3, type = 'text', value }) {
  const Control = isTextarea ? 'textarea' : 'input'

  return (
    <label className="floating-field" htmlFor={id}>
      <Control
        id={id}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={onChange}
        pattern={pattern}
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
  const [birthYear, setBirthYear] = useState('')
  const [studyProgram, setStudyProgram] = useState('')
  const [studyYear, setStudyYear] = useState('')
  const [graduateStatus, setGraduateStatus] = useState('')
  const [residence, setResidence] = useState('')
  const [workRegion, setWorkRegion] = useState('')
  const [roleAcknowledged, setRoleAcknowledged] = useState(false)
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState({ message: '', type: 'idle' })

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status.type === 'sending') {
      return
    }

    setStatus({ message: 'Pošiljanje prijave ...', type: 'sending' })

    try {
      await submitForm({
        birthYear,
        email,
        graduateStatus,
        motivation,
        name,
        path,
        phone,
        reason,
        residence,
        roleAcknowledged,
        studyProgram,
        studyYear,
        type: 'application',
        website,
        workRegion,
      })
      setName('')
      setPath('community')
      setReason('')
      setMotivation('')
      setEmail('')
      setPhone('')
      setBirthYear('')
      setStudyProgram('')
      setStudyYear('')
      setGraduateStatus('')
      setResidence('')
      setWorkRegion('')
      setRoleAcknowledged(false)
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
          <AmbassadorRoleDetails />

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

          <div className="application-extra-fields">
            <FloatingField
              id="field-birth-year"
              inputMode="numeric"
              label={t('prijava.birth_year_label')}
              maxLength={4}
              onChange={(event) => setBirthYear(event.target.value)}
              pattern="[0-9]{4}"
              required
              value={birthYear}
            />
            <FloatingField
              helper={t('prijava.study_not_applicable')}
              id="field-study-program"
              label={t('prijava.study_program_label')}
              maxLength={120}
              onChange={(event) => setStudyProgram(event.target.value)}
              required
              value={studyProgram}
            />
            <FloatingField
              helper={t('prijava.study_not_applicable')}
              id="field-study-year"
              label={t('prijava.study_year_label')}
              maxLength={60}
              onChange={(event) => setStudyYear(event.target.value)}
              required
              value={studyYear}
            />
            <fieldset className="graduate-status">
              <legend>{t('prijava.graduate_status_label')}</legend>
              <div className="graduate-status-options">
                <label>
                  <input checked={graduateStatus === 'yes'} name="graduate-status" onChange={() => setGraduateStatus('yes')} required type="radio" value="yes" />
                  <span>{t('prijava.yes')}</span>
                </label>
                <label>
                  <input checked={graduateStatus === 'no'} name="graduate-status" onChange={() => setGraduateStatus('no')} required type="radio" value="no" />
                  <span>{t('prijava.no')}</span>
                </label>
              </div>
            </fieldset>
            <FloatingField
              id="field-residence"
              label={t('prijava.residence_label')}
              maxLength={120}
              onChange={(event) => setResidence(event.target.value)}
              required
              value={residence}
            />
            <FloatingField
              id="field-work-region"
              label={t('prijava.work_region_label')}
              maxLength={120}
              onChange={(event) => setWorkRegion(event.target.value)}
              required
              value={workRegion}
            />
          </div>

          <label className="role-acknowledgment">
            <input checked={roleAcknowledged} onChange={(event) => setRoleAcknowledged(event.target.checked)} required type="checkbox" />
            <span>{t('prijava.role_acknowledgment')}</span>
          </label>

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
