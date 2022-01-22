import { VALIDATION_TEXT } from '@constants/FormValid'
import { z } from 'zod'

export const menuSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  price: z.number({ invalid_type_error: VALIDATION_TEXT.INVALID_NUMBER }),
  duration: z.number({ invalid_type_error: VALIDATION_TEXT.INVALID_NUMBER }),
  description: z.string()
})

export type MenuSchema = z.infer<typeof menuSchema>
