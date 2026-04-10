import { useState } from 'react'
import { useTranslation } from './utils/useTranslation'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <header className="site-nav">
        <div className="site-nav-inner">
          <a className="nav-brand tap-target" href="#hero">
            {t('site.title')}
          </a>
          <button
            aria-controls="nav-menu"
            aria-expanded={navOpen}
            className="nav-toggle tap-target"
            onClick={() => setNavOpen((value) => !value)}
            type="button"
          >
            Menu
          </button>
          <nav
            className={`nav-menu ${navOpen ? 'nav-menu-open' : ''}`}
            id="nav-menu"
          >
            <a href="#hero">{t('nav.hero')}</a>
            <a href="#zakaj">{t('nav.zakaj')}</a>
            <a href="#prva-generacija">{t('nav.prva-generacija')}</a>
            <a href="#izberi-pot">{t('nav.izberi-pot')}</a>
            <a href="#kaj-pridobis">{t('nav.kaj-pridobis')}</a>
            <a href="#koga-iscemo">{t('nav.koga-iscemo')}</a>
            <a href="#prijava">{t('nav.prijava')}</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl overflow-x-clip px-4 pt-28 pb-10 text-text-primary md:px-8">
        <section id="hero" className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-secondary">
            {t('hero.subtitle')}
          </p>
          <h1>
            {t('hero.title_line1')}
            <br />
            {t('hero.title_line2')}
          </h1>
          <p className="max-w-2xl text-text-secondary">{t('hero.text')}</p>
          <p className="max-w-2xl text-sm text-text-secondary">{t('hero.micro_text')}</p>
          <button className="btn btn-primary" type="button">
            {t('hero.cta')}
          </button>
        </section>

        <section id="zakaj" className="mt-10 space-y-3">
          <h2>{t('zakaj.title')}</h2>
          <p className="text-text-secondary">{t('zakaj.text1')}</p>
          <p className="text-text-secondary">{t('zakaj.text2')}</p>
          <p className="text-text-secondary">{t('zakaj.text3')}</p>
        </section>

        <section id="prijava" className="mt-10 space-y-3">
          <h2>{t('prijava.title')}</h2>
          <p className="text-text-secondary">{t('prijava.micro_text')}</p>
          <div className="rounded-xl border border-border bg-surface p-4 md:p-6">
            <label className="form-field">
              <span className="field-label">{t('prijava.field1_label')}</span>
              <input
                className="tap-target"
                placeholder={t('prijava.field1_placeholder')}
                type="text"
              />
            </label>
            <label className="form-field mt-3">
              <span className="field-label">{t('prijava.field4_label')}</span>
              <input className="tap-target" placeholder={t('prijava.field4_placeholder')} type="text" />
            </label>
            <div className="mt-4">
              <button className="btn btn-secondary" type="button">
                {t('prijava.cta')}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
