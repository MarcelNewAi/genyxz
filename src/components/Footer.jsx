import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')
  const gen = title.slice(0, 3)
  const y = title.slice(3, 4)
  const x = title.slice(4, 5)
  const z = title.slice(5, 6)

  return (
    <span aria-label={title} className="logo-wordmark logo-wordmark-footer">
      <span className="logo-gen-footer">{gen}</span>
      <span className="logo-y">{y}</span>
      <span className="logo-x">{x}</span>
      <span className="logo-z">{z}</span>
    </span>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="footer-line" aria-hidden="true" />
      <div className="site-container footer-top" data-reveal>
        <LogoWordmark />
        <p className="footer-copy">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <div className="footer-links">
          <a href="#privacy">{t('footer.privacy')}</a>
          <a href="#terms">{t('footer.terms')}</a>
        </div>
      </div>
      <p className="footer-credit">{t('footer.credit')}</p>
    </footer>
  )
}
