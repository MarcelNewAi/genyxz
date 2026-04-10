import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')
  const gen = title.slice(0, 3)
  const y = title.slice(3, 4)
  const x = title.slice(4, 5)
  const z = title.slice(5, 6)

  return (
    <span aria-label={title} className="font-heading text-lg font-extrabold tracking-tight">
      <span className="text-text-primary">{gen}</span>
      <span className="text-[#C218D8]">{y}</span>
      <span className="text-[#3B82F6]">{x}</span>
      <span className="text-[#14B8A6]">{z}</span>
    </span>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <LogoWordmark />
        <p className="text-sm text-text-secondary">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <div className="flex items-center gap-4">
          <a className="text-sm" href="#privacy">
            {t('footer.privacy')}
          </a>
          <a className="text-sm" href="#terms">
            {t('footer.terms')}
          </a>
        </div>
      </div>
    </footer>
  )
}
