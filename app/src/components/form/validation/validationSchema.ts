import { VALIDATION_TEXT, VALID_REGEX } from '@/constants/FormValid'
import { Role, RoleSlug } from '@/utils/api/request-response-types/models/Role'
import { Gender } from '@/utils/api/request-response-types/models/User'
import { ScheduleDays } from '@utils/api/request-response-types/models/Common'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: VALIDATION_TEXT.EMAIL })
    .nonempty({ message: VALIDATION_TEXT.EMAIL }),
  password: z.string().nonempty({ message: VALIDATION_TEXT.PASSWORD })
})

export type LoginSchema = z.infer<typeof loginSchema>

export const shopSchema = z.object({
  name: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  address: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  phoneNumber: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  areaId: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  prefectureId: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  cityId: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  days: z.nativeEnum(ScheduleDays, { required_error: 'error' }).array(),
  startTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  endTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  seats: z.string({ required_error: VALIDATION_TEXT.IS_EMPTY }),
  details: z.string()
})

export type ShopSchema = z.infer<typeof shopSchema>

export const userSchema = z
  .object({
    email: z
      .string()
      .email({ message: VALIDATION_TEXT.EMAIL })
      .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
    password: z
      .string()
      .regex(VALID_REGEX.PASSWORD, VALIDATION_TEXT.PASSWORD)
      .nonempty({ message: VALIDATION_TEXT.PASSWORD }),
    confirm: z
      .string()
      .regex(VALID_REGEX.PASSWORD, VALIDATION_TEXT.PASSWORD)
      .nonempty({ message: VALIDATION_TEXT.PASSWORD }),
    firstNameKana: z
      .string()
      .regex(VALID_REGEX.KANA_NAME, VALIDATION_TEXT.KANA_NAME)
      .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
    lastNameKana: z
      .string()
      .regex(VALID_REGEX.KANA_NAME, VALIDATION_TEXT.KANA_NAME)
      .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
    roleSlug: z.nativeEnum(RoleSlug, {
      required_error: VALIDATION_TEXT.IS_EMPTY,
      invalid_type_error: VALIDATION_TEXT.IS_EMPTY
    }),
    gender: z.nativeEnum(Gender, {
      required_error: VALIDATION_TEXT.IS_EMPTY,
      invalid_type_error: VALIDATION_TEXT.IS_EMPTY
    }),
    username: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
    firstNameKanji: z.string(),
    lastNameKanji: z.string(),
    birthday: z.string()
  })
  .refine((value) => value.password === value.confirm, {
    message: VALIDATION_TEXT.DUPLICATED,
    path: ['confirm']
  })

export type UserSchema = z.infer<typeof userSchema>

export const userEditSchema = z.object({
  email: z
    .string()
    .email({ message: VALIDATION_TEXT.EMAIL })
    .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  firstNameKana: z
    .string()
    .regex(VALID_REGEX.KANA_NAME, VALIDATION_TEXT.KANA_NAME)
    .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  lastNameKana: z
    .string()
    .regex(VALID_REGEX.KANA_NAME, VALIDATION_TEXT.KANA_NAME)
    .nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  roleSlug: z.nativeEnum(RoleSlug, {
    required_error: VALIDATION_TEXT.IS_EMPTY,
    invalid_type_error: VALIDATION_TEXT.IS_EMPTY
  }),
  gender: z.nativeEnum(Gender, {
    required_error: VALIDATION_TEXT.IS_EMPTY,
    invalid_type_error: VALIDATION_TEXT.IS_EMPTY
  }),
  username: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  firstNameKanji: z.string(),
  lastNameKanji: z.string(),
  birthday: z.string()
})
