import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z
      .string()
      .transform((str: string) =>
        new Date(str).toLocaleDateString(undefined, { dateStyle: "medium" }),
      ),
    tags: z.array(z.string()),
    published: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
