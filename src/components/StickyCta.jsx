import { useTranslation } from '../utils/useTranslation'

export default function StickyCta({ show }) {
  const { t } = useTranslation()

  return (
    <a
      aria-hidden={!show}
      className={`fixed bottom-4 left-1/2 z-40 inline-flex min-h-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-text-primary no-underline shadow-xl transition-all duration-200 ${
        show ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      href="#prijava"
    >
      {t('site.sticky_cta')}
    </a>
  )
}
