import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from '../utils/useTranslation'

const NAV_ITEMS = [
  { id: 'hero', key: 'nav.hero' },
  { id: 'zakaj', key: 'nav.zakaj' },
  { id: 'prva-generacija', key: 'nav.prva-generacija' },
  { id: 'izberi-pot', key: 'nav.izberi-pot' },
  { id: 'kaj-pridobis', key: 'nav.kaj-pridobis' },
  { id: 'koga-iscemo', key: 'nav.koga-iscemo' },
  { id: 'prijava', key: 'nav.prijava' },
]

function LogoWordmark() {
  const { t } = useTranslation()
  const title = t('site.title')
  const gen = title.slice(0, 3)
  const y = title.slice(3, 4)
  const x = title.slice(4, 5)
  const z = title.slice(5, 6)

  return (
    <span aria-label={title} className="font-heading text-xl font-extrabold tracking-tight">
      <span className="text-text-primary">{gen}</span>
      <span className="text-[#C218D8]">{y}</span>
      <span className="text-[#3B82F6]">{x}</span>
      <span className="text-[#14B8A6]">{z}</span>
    </span>
  )
}

export default function Navbar({ activeSection }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)
  const menuButtonLabel = isOpen ? t('nav.menu_close') : t('nav.menu_open')

  const navItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        ...item,
        label: t(item.key),
      })),
    [t],
  )

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const onPointerDown = (event) => {
      if (!panelRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onEscape)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onEscape)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="inline-flex min-h-11 items-center no-underline" href="#hero">
          <LogoWordmark />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t('nav.menu_label')}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium no-underline transition ${
                  isActive
                    ? 'bg-primary text-text-primary'
                    : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          aria-expanded={isOpen}
          aria-label={menuButtonLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-primary md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {isOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-text-primary/30 md:hidden">
          <div
            ref={panelRef}
            className="absolute right-0 top-0 flex h-full w-[min(22rem,92vw)] flex-col bg-background p-5 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <LogoWordmark />
              <button
                aria-label={t('nav.menu_close')}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-primary"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ✕
                </span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2" aria-label={t('nav.menu_label')}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.id}
                    className={`inline-flex min-h-12 items-center rounded-xl px-4 text-base font-medium no-underline ${
                      isActive
                        ? 'bg-primary text-text-primary'
                        : 'bg-surface text-text-secondary hover:bg-secondary/40 hover:text-text-primary'
                    }`}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
