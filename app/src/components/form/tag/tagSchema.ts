import { z } from 'zod'

export const tagSchema = z.object({
  slug: z.string()
})

export type TagSchema = z.infer<typeof tagSchema>

export const tagEditSchema = z.object({
  slug: z.string()
})
