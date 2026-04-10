import { IconSocial } from './Icons'
import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')

  return <img alt={title} className="brand-logo brand-logo-footer" src="/Logo%20-%20GenYXZ.svg" />
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="footer-line" aria-hidden="true" />
      <div className="site-container footer-grid" data-reveal data-reveal-style="up">
        <div className="footer-column footer-brand">
          <LogoWordmark />
          <p className="footer-copy">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="footer-credit">{t('footer.credit')}</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{t('footer.links_heading')}</p>
          <div className="footer-links">
            <a href="#privacy">{t('footer.privacy')}</a>
            <a href="#terms">{t('footer.terms')}</a>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{t('footer.social_heading')}</p>
          <div className="footer-socials">
            <a href="#social" aria-label={t('footer.social_1')}>
              <IconSocial />
              <span>{t('footer.social_1')}</span>
            </a>
            <a href="#social" aria-label={t('footer.social_2')}>
              <IconSocial />
              <span>{t('footer.social_2')}</span>
            </a>
            <a href="#social" aria-label={t('footer.social_3')}>
              <IconSocial />
              <span>{t('footer.social_3')}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}