import { ScheduleDays } from "@request-response-types/models/Common"

export type TDays = {
  value: string
  label: string
}

export const Days: TDays[] = [
  { value: ScheduleDays.MONDAY, label: ScheduleDays.MONDAY },
  { value: ScheduleDays.TUESDAY, label: ScheduleDays.TUESDAY },
  { value: ScheduleDays.WEDNESDAY, label: ScheduleDays.WEDNESDAY },
  { value: ScheduleDays.THURSDAY, label: ScheduleDays.THURSDAY },
  { value: ScheduleDays.FRIDAY, label: ScheduleDays.FRIDAY },
  { value: ScheduleDays.SATURDAY, label: ScheduleDays.SATURDAY },
  { value: ScheduleDays.SUNDAY, label: ScheduleDays.SUNDAY }
]
