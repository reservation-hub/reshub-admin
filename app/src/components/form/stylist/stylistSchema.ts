import { VALIDATION_TEXT } from '@/constants/FormValid'
import { ScheduleDays } from '@/utils/api/request-response-types/models/Common'
import { z } from 'zod'

export const stylistSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  price: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  days: z
    .nativeEnum(ScheduleDays, { required_error: VALIDATION_TEXT.IS_EMPTY })
    .array(),
  startTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  endTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY })
})

export type StylistSchema = z.infer<typeof stylistSchema>
