import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'

const applyHtmlLang = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = 'sl'
  }
}

export async function initI18n() {
  if (!i18n.isInitialized) {
    await i18n.use(HttpBackend).init({
      supportedLngs: ['sl'],
      lng: 'sl',
      fallbackLng: 'sl',
      defaultNS: 'translation',
      ns: ['translation'],
      debug: import.meta.env.DEV,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}/translation.json',
      },
      returnNull: false,
    })
  }

  applyHtmlLang()
  i18n.off('languageChanged', applyHtmlLang)
  i18n.on('languageChanged', applyHtmlLang)

  return i18n
}

export default i18n
