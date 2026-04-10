import { useState } from 'react'
import { useTranslation } from '../utils/useTranslation'

export default function ApplicationForm() {
  const { t } = useTranslation()
  const [path, setPath] = useState('community')

  return (
    <section id="prijava" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <p className="section-label">{t('prijava.label')}</p>
        <h2 className="section-title mt-3">{t('prijava.title')}</h2>
        <p className="mt-3 text-text-secondary">{t('prijava.micro_text')}</p>

        <form className="mt-8 grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <label className="form-field">
            <span className="field-label">{t('prijava.field1_label')}</span>
            <textarea className="min-h-32" placeholder={t('prijava.field1_placeholder')} />
          </label>

          <label className="form-field">
            <span className="field-label">{t('prijava.field2_label')}</span>
            <textarea className="min-h-28" placeholder={t('prijava.field2_placeholder')} />
          </label>

          <fieldset className="rounded-2xl border border-border p-4">
            <legend className="px-1 text-sm font-semibold text-text-primary">{t('prijava.field3_label')}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <label className="inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-3">
                <input
                  checked={path === 'community'}
                  name="path"
                  onChange={() => setPath('community')}
                  type="radio"
                  value="community"
                />
                <span>{t('prijava.field3_option1')}</span>
              </label>
              <label className="inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-3">
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

          <label className="form-field">
            <span className="field-label">{t('prijava.field4_label')}</span>
            <input placeholder={t('prijava.field4_placeholder')} type="text" />
          </label>

          <div className="pt-2">
            <button className="btn btn-cta min-h-12 rounded-full px-7 text-base" type="submit">
              {t('prijava.cta')}
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-text-secondary">
          <span className="block">{t('prijava.closing_line1')}</span>
          <span className="block font-medium text-text-primary">{t('prijava.closing_line2')}</span>
        </p>
      </div>
    </section>
  )
}
