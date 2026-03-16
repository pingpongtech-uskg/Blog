export const languages = ["en", "zh-tw", "ja"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "zh-tw";

export const languageLabels: Record<Language, string> = {
  en: "English",
  "zh-tw": "繁體中文",
  ja: "日本語"
};

export const routes = {
  home: "",
  articles: "articles",
  topics: "topics",
  resources: "resources",
  about: "about"
} as const;
