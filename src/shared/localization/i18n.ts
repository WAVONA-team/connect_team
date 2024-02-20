import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) => import(`@/shared/localization//${language}/${language}.json`)))
    .init({
      // debug: true,
      supportedLngs: ['en','ru'],
      fallbackLng: 'en',
      lng,
      fallbackNS: 'en',
      defaultNS: 'en',
      ns
    })
  return i18nInstance
}

export async function useTranslation(lng: string, options = {}) {
  const i18nextInstance = await initI18next(lng, lng )
  return {
    t: i18nextInstance.getFixedT(lng, lng),
    i18n: i18nextInstance
  }
}
