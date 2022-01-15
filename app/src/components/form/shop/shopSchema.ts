import { VALIDATION_TEXT } from '@constants/FormValid'
import { ScheduleDays } from '@utils/api/request-response-types/models/Common'
import { z } from 'zod'

export const shopSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  address: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  phoneNumber: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  areaId: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  prefectureId: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  cityId: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  startTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  endTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  seats: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  days: z
    .nativeEnum(ScheduleDays, { required_error: VALIDATION_TEXT.IS_EMPTY })
    .array(),
  details: z.string()
})

export type ShopSchema = z.infer<typeof shopSchema>
