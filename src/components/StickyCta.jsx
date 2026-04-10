import { useTranslation } from '../utils/useTranslation'

export default function StickyCta({ show }) {
  const { t } = useTranslation()

  return (
    <a
      aria-hidden={!show}
      className={`sticky-bottom-bar ${show ? 'sticky-bottom-bar-visible' : ''}`}
      href="#prijava"
    >
      <span>{t('site.sticky_bar')}</span>
      <span aria-hidden="true">→</span>
    </a>
  )
}
