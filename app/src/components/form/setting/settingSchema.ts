import { VALIDATION_TEXT, VALID_REGEX } from '@/constants/FormValid'
import { z } from 'zod'

export const settingSchema = z.object({
  oldPassword: z.string().regex(VALID_REGEX.PASSWORD, VALIDATION_TEXT.PASSWORD).nonempty({ message: VALIDATION_TEXT.PASSWORD }),
  newPassword: z.string().regex(VALID_REGEX.PASSWORD, VALIDATION_TEXT.PASSWORD).nonempty({ message: VALIDATION_TEXT.PASSWORD }),
  confirmNewPassword: z.string().regex(VALID_REGEX.PASSWORD, VALIDATION_TEXT.PASSWORD).nonempty({ message: VALIDATION_TEXT.PASSWORD })
})

export type SettingSchema = z.infer<typeof settingSchema>
