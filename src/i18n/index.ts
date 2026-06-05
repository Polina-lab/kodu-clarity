import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import et from "./locales/et.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export const supportedLanguages = ["et", "en", "ru"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export function normalizeLanguage(language?: string | null): SupportedLanguage | undefined {
  const base = language?.toLowerCase().split("-")[0];
  return supportedLanguages.find((item) => item === base);
}

export function getActiveLanguage(): SupportedLanguage {
  return normalizeLanguage(i18n.resolvedLanguage || i18n.language) ?? "et";
}

export async function changeAppLanguage(language: SupportedLanguage) {
  const next = normalizeLanguage(language) ?? "et";
  if (typeof window !== "undefined") window.localStorage.setItem("i18nextLng", next);
  document.documentElement.lang = next;
  await i18n.changeLanguage(next);
}

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
      cleanCode: true,
      nonExplicitSupportedLngs: true,
      returnObjects: true,
      returnNull: false,
      returnEmptyString: false,
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      react: { useSuspense: false, bindI18n: "languageChanged loaded" },
      initAsync: false,
    } satisfies InitOptions);
}

i18n.on("languageChanged", (language) => {
  const active = normalizeLanguage(language) ?? "et";
  document.documentElement.lang = active;
  if (typeof window !== "undefined") window.localStorage.setItem("i18nextLng", active);
});

document.documentElement.lang = getActiveLanguage();

export default i18n;
