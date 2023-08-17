import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


import tranlationEN from './locale/en.json'
import tranlationAR from './locale/ar.json'

const resources = {
  en: {
    translation: tranlationEN
  },
  ar: {
    translation: tranlationAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    },
    react: {
        useSuspense: false
    }
  });

  export default i18n;