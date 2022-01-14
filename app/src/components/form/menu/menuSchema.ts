import { VALIDATION_TEXT } from '@/constants/FormValid'
import { z } from 'zod'

export const menuSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  price: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  duration: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  description: z.string()
})

export type MenuSchema = z.infer<typeof menuSchema>
