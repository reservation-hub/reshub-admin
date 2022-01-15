import { VALIDATION_TEXT } from '@/constants/FormValid'
import { z } from 'zod'

export const reservationSchema = z.object({
  reservationDate: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  userId: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  menuId: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
  stylistId: z.string().nonempty({ message: VALIDATION_TEXT.IS_EMPTY }),
})

export type ReservationSchema = z.infer<typeof reservationSchema>