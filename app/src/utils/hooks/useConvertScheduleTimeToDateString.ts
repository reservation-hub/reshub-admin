import dayjs from '@utils/hooks/useDayJs'
import { currentDate } from '@constants/Time'
const convertScheduleTimeToDateString = (dateString: string): string =>
  dayjs(`${currentDate} ${dateString}:00`).format('YYYY-MM-DDTHH:mm:ss')

export default convertScheduleTimeToDateString
