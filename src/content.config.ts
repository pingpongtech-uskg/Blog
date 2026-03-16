import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  lang: z.enum(["en", "zh-tw", "ja"]),
  translationKey: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional()
});

const articles = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    topic: z.string(),
    category: z.string(),
    readingTime: z.string()
  })
});

const resources = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    resourceType: z.string(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().url().optional()
  })
});

const topics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "zh-tw", "ja"]),
    translationKey: z.string(),
    draft: z.boolean().default(false),
    order: z.number(),
    focus: z.array(z.string()).min(2)
  })
});

export const collections = {
  articles,
  resources,
  topics
};
