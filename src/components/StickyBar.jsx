import { IconArrow } from './Icons'
import { useTranslation } from '../utils/useTranslation'

export default function StickyBar({ show }) {
  const { t } = useTranslation()

  return (
    <div className={`sticky-bar ${show ? 'sticky-bar-visible' : ''}`}>
      <a className="btn-premium btn-sticky" href="#prijava">
        <span>{t('sticky.text')}</span>
        <IconArrow />
      </a>
    </div>
  )
}
