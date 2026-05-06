import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const linkSchema = z.object({
  label: z.string(),
  url: z.string()
})

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        role: z.string(),
        projectType: z.string().optional(),
        status: z.string().optional(),
        timeline: z.string().optional(),
        stack: z.array(z.string()),
        links: z.array(linkSchema).default([]),
        featured: z.boolean().default(false),
        cover: z.string().optional(),
        gallery: z.array(z.string()).default([]),
        highlights: z.array(z.string()).default([]),
        problem: z.string().optional(),
        architecture: z.string().optional(),
        features: z.array(z.string()).default([]),
        learned: z.string().optional(),
        outcome: z.string().optional()
      })
    }),
    caseStudies: defineCollection({
      type: 'page',
      source: 'case-studies/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        project: z.string().optional()
      })
    }),
    notes: defineCollection({
      type: 'page',
      source: 'notes/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string()
      })
    })
  }
})
