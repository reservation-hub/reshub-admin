import { VALIDATION_TEXT } from '@constants/FormValid'
import { z } from 'zod'

export const reservationSchema = z.object({
  reservationDay: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  reservationTime: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  userId: z.number({ invalid_type_error: VALIDATION_TEXT.IS_EMPTY }),
  menuId: z.number({ invalid_type_error: VALIDATION_TEXT.IS_EMPTY }),
  stylistId: z.number({ invalid_type_error: VALIDATION_TEXT.IS_EMPTY })
})

export type ReservationSchema = z.infer<typeof reservationSchema>
