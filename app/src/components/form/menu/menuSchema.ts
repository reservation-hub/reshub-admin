import { VALIDATION_TEXT } from '@constants/FormValid'
import { z } from 'zod'

export const menuSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  price: z.preprocess(
    (x) => parseInt(x as string, 10),
    z.number().int().positive()
  ),
  duration: z.preprocess(
    (x) => parseInt(x as string, 10),
    z.number().int().positive()
  ),
  description: z.string()
})

export type MenuSchema = z.infer<typeof menuSchema>
