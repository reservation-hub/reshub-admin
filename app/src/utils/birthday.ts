import dayjs from 'dayjs'

const birthday = (birthday: Date | string | null | undefined) => {
  return dayjs(birthday).format('YYYY-MM-DD')
}

export default birthday