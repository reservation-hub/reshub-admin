import { VALIDATION_TEXT } from '@constants/FormValid'
import { ScheduleDays } from '@utils/api/request-response-types/models/Common'
import { z } from 'zod'

export const shopSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  address: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  phoneNumber: z
    .string()
    .regex(/[0-9]{10,11}/, VALIDATION_TEXT.PHONE_NUMBER_ERROR)
    .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  areaId: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  prefectureId: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  cityId: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  startTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  endTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  seats: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  days: z
    .nativeEnum(ScheduleDays, { required_error: VALIDATION_TEXT.IS_EMPTY })
    .array()
    .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  details: z.string()
})

export type ShopSchema = z.infer<typeof shopSchema>
