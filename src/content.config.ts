import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  news: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      category: z.enum(['announcement', 'event', 'program', 'achievement']),
      image: z.string().optional(),
      author: z.string().optional(),
    }),
  }),
};
