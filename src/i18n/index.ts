import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import et from "./locales/et.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        et: { translation: et },
        en: { translation: en },
        ru: { translation: ru },
      },
      fallbackLng: "et",
      supportedLngs: ["et", "en", "ru"],
      load: "languageOnly",
      nonExplicitSupportedLngs: true,
      returnObjects: true,
      returnNull: false,
      interpolation: { escapeValue: false },
      detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
      react: { useSuspense: false },
      initImmediate: false,
    } as never);
}

export default i18n;
