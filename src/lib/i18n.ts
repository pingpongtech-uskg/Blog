import { getCollection } from "astro:content";
import { defaultLanguage, languageLabels, languages, routes, type Language } from "../config/site";

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getLangFromUrl(url: URL): Language {
  const [, maybeLang] = url.pathname.split("/");
  return isLanguage(maybeLang) ? maybeLang : defaultLanguage;
}

export function localizePath(lang: Language, route: keyof typeof routes) {
  const segment = routes[route];
  return segment ? `/${lang}/${segment}/` : `/${lang}/`;
}

export function buildLanguageLinks(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const rest = isLanguage(segments[0]) ? segments.slice(1) : segments;
  const suffix = rest.length > 0 ? `${rest.join("/")}/` : "";

  return languages.map((lang) => ({
    lang,
    label: languageLabels[lang],
    href: `/${lang}/${suffix}`
  }));
}

export function getLocalizedSlug(slug: string) {
  const segments = slug.split("/");
  return segments.length > 1 ? segments.slice(1).join("/") : slug;
}

export async function getEntryLanguageLinks(
  collection: "articles" | "resources" | "topics",
  translationKey: string
) {
  const entries = await getCollection(collection, ({ data }) => data.translationKey === translationKey && !data.draft);

  return entries
    .sort((a, b) => languages.indexOf(a.data.lang) - languages.indexOf(b.data.lang))
    .map((entry) => ({
      lang: entry.data.lang,
      label: languageLabels[entry.data.lang],
      href: `/${entry.data.lang}/${collection}/${getLocalizedSlug(entry.slug)}/`
    }));
}

export async function getTranslatedEntries(collection: "articles" | "resources" | "topics", lang: Language) {
  const entries = await getCollection(collection, ({ data }) => data.lang === lang && !data.draft);
  return entries.sort((a, b) => {
    if ("order" in a.data && "order" in b.data) {
      return a.data.order - b.data.order;
    }

    const aTime = "publishDate" in a.data ? a.data.publishDate.getTime() : 0;
    const bTime = "publishDate" in b.data ? b.data.publishDate.getTime() : 0;
    return bTime - aTime;
  });
}

export async function getTranslationState(
  collection: "articles" | "resources" | "topics",
  translationKey: string
) {
  const entries = await getCollection(collection, ({ data }) => data.translationKey === translationKey && !data.draft);
  const available = new Set(entries.map((entry) => entry.data.lang));

  return {
    available: languages.filter((lang) => available.has(lang)),
    missing: languages.filter((lang) => !available.has(lang))
  };
}

export function getMissingTranslationMessage(lang: Language) {
  return {
    en: "Some translations are still in progress.",
    "zh-tw": "部分語言版本仍在整理中。",
    ja: "一部の翻訳は準備中です。"
  }[lang];
}

export { languageLabels };
