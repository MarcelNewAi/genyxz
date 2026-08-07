import {
  IconInstagram,
  IconPrivacy,
  IconTerms,
  IconTiktok,
} from './Icons'
import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')

  return <img alt={title} className="brand-logo brand-logo-footer" src="/locales/sl/dna-logo-bg.svg" />
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="footer-line" aria-hidden="true" />
      <div className="site-container">
        <div className="footer-grid" data-reveal data-reveal-style="up">
          <div className="footer-column footer-brand">
            <LogoWordmark />
            <p className="footer-copy">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <p className="footer-credit">Povezujemo znanje, ljudi in sodobne rešitve.</p>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t('footer.links_heading')}</p>
            <div className="footer-links">
              <a href="/o-nas">
                <IconPrivacy />
                <span>O nas</span>
              </a>
              <a href="/kaj-delamo">
                <IconTerms />
                <span>Kaj delamo</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t('footer.social_heading')}</p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/genyxz.si?igsh=MWN1N29peXppc3dxNA=="
                aria-label={t('footer.social_1')}
                target="_blank"
                rel="noreferrer"
              >
                <IconInstagram />
                <span>{t('footer.social_1')}</span>
              </a>
              <a
                href="https://www.tiktok.com/@genyxz.si?_r=1&amp;_t=ZN-98YKIYRFi3W"
                aria-label={t('footer.social_2')}
                target="_blank"
                rel="noreferrer"
              >
                <IconTiktok />
                <span>{t('footer.social_2')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
