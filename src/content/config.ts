import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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
