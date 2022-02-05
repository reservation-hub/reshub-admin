import { z } from 'zod'

export const tagSchema = z.object({
  tagIds: z.array(z.number()).nonempty()
})

export type TagSchema = z.infer<typeof tagSchema>
