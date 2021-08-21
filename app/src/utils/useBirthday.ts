import dayjs from 'dayjs'

const useBirthday = (birthday: Date | undefined | null | string) => {
  return dayjs(birthday).format('YYYY-MM-DD')
}

export default useBirthday