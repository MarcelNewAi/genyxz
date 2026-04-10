import { useEffect, useMemo, useState } from 'react'
import i18n from './i18n'

export function useTranslation() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const rerender = () => setTick((value) => value + 1)

    i18n.on('languageChanged', rerender)
    i18n.on('loaded', rerender)

    return () => {
      i18n.off('languageChanged', rerender)
      i18n.off('loaded', rerender)
    }
  }, [])

  const t = useMemo(() => {
    return (key, options) => i18n.t(key, options)
  }, [])

  return { t, i18n }
}
