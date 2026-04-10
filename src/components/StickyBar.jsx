import { IconArrow } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function StickyBar({ show }) {
  const { t } = useTranslation()

  return (
    <a className={`sticky-bar ${show ? 'sticky-bar-visible' : ''}`} href="#prijava">
      <span className="sticky-content">
        <span className="sticky-kicker">{t('site.title')}</span>
        <span>{t('sticky.text')}</span>
      </span>
      <span className="sticky-arrow" aria-hidden="true">
        <IconArrow />
      </span>
    </a>
  )
}