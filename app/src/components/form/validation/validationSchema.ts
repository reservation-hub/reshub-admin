import { VALIDATION_TEXT, VALID_REGEX } from '@/constants/FormValid'
import { ScheduleDays } from '@utils/api/request-response-types/models/Common'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: VALIDATION_TEXT.EMAIL })
    .nonempty({ message: VALIDATION_TEXT.EMAIL }),
  password: z
    .string()
    .regex(VALID_REGEX.PASSWORD, VALIDATION_TEXT.PASSWORD)
    .nonempty({ message: VALIDATION_TEXT.PASSWORD })
})

export type LoginSchema = z.infer<typeof loginSchema>

export const shopSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  address: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  phoneNumber: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  areaId: z.number({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  prefectureId: z.number({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  cityId: z.number({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  days: z.nativeEnum(ScheduleDays, { required_error: 'error' }).array(),
  startTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  endTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  seats: z.number({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  details: z.string()
})

export type ShopSchema = z.infer<typeof shopSchema>
