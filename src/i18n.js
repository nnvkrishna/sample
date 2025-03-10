import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if the selected language doesn't exist
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
