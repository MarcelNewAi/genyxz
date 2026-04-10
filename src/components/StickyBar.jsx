import { useTranslation } from '../utils/useTranslation'

export default function StickyBar({ show }) {
  const { t } = useTranslation()

  return (
    <a className={`sticky-bar ${show ? 'sticky-bar-visible' : ''}`} href="#prijava">
      <span>{t('sticky.text')}</span>
      <span className="sticky-arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
