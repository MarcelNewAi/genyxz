import { useTranslation } from '../utils/useTranslation'

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')
  const gen = title.slice(0, 3)
  const y = title.slice(3, 4)
  const x = title.slice(4, 5)
  const z = title.slice(5, 6)

  return (
    <span aria-label={title} className="font-heading text-xl font-extrabold tracking-[-0.02em]">
      <span className="text-[#F0F4F8]">{gen}</span>
      <span className="text-[#C218D8]">{y}</span>
      <span className="text-[#3B82F6]">{x}</span>
      <span className="text-[#14B8A6]">{z}</span>
    </span>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="site-container footer-row" data-reveal>
        <LogoWordmark />
        <p className="footer-copy">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <div className="footer-links">
          <a href="#privacy">{t('footer.privacy')}</a>
          <a href="#terms">{t('footer.terms')}</a>
        </div>
      </div>
      <p className="footer-draft">{t('footer.draft_note')}</p>
    </footer>
  )
}
