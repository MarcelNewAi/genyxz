import { useTranslation } from '../utils/useTranslation'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pb-10 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-28 bottom-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="mb-3 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
          {t('hero.subtitle')}
        </p>

        <h1 className="font-heading text-[clamp(2rem,9vw,4.2rem)] font-extrabold leading-tight text-text-primary">
          <span className="block">{t('hero.title_line1')}</span>
          <span className="block">{t('hero.title_line2')}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-text-secondary sm:text-lg">{t('hero.text')}</p>

        <a
          className="btn btn-cta mt-7 min-h-12 rounded-full px-7 py-3 text-base font-semibold no-underline"
          href="#prijava"
        >
          {t('hero.cta')}
        </a>

        <p className="mt-3 text-sm text-text-secondary">{t('hero.micro_text')}</p>
      </div>
    </section>
  )
}
