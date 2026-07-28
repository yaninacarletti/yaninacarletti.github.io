import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),

    category: z.string(),

    problemType: z.string(),

    role: z.string(),

    duration: z.string(),

    order: z.number(),

    technologies: z.array(z.string()),

    github: z.string().url(),

    featured: z.boolean().default(false),

    cover: z.string(),

    businessProblem: z.string(),

    solution: z.string(),

    results: z.array(z.string()),

    publishedDate: z.coerce.date(),

    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
