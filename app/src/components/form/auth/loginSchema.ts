import { VALIDATION_TEXT, VALID_REGEX } from '@constants/FormValid'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: VALIDATION_TEXT.EMAIL })
    .nonempty({ message: VALIDATION_TEXT.EMAIL }),
  password: z.string().nonempty({ message: VALIDATION_TEXT.PASSWORD })
})

export type LoginSchema = z.infer<typeof loginSchema>
