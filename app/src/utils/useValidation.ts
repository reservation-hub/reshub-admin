import { useCallback, useState } from 'react'
import { VALID_REGEX, VALID_TYPE } from '../constants/FormValid'

export type TValid = {
  email?: boolean,
  password?: boolean
  confirm?: boolean
  firstNameKana?: boolean,
  lastNameKana?: boolean,
  duplicated?: boolean
}

const useValidation = <T>(
  initialValues: T,
  validationValues: TValid
) => {
  const [error, setError] = useState<TValid>(validationValues)

  const validation = useCallback(
    (name: T, value1, value2) => {
      for (const [key, value] of Object.entries(name)) {
        switch (key) {
          case VALID_TYPE.EMAIL:
            if (!VALID_REGEX.EMAIL.test(value)) {
              setError((error) => ( { ...error, email: true } ))
            } else {
              setError((error) => ( { ...error, email: false } ))
            }
            break
          case VALID_TYPE.PASSWORD:
            if (!VALID_REGEX.PASSWORD.test(value)) {
              setError((error) => ( { ...error, password: true } ))
            } else {
              setError((error) => ( { ...error, password: false } ))
            }
            break
          case VALID_TYPE.CONFIRM:
            if (!VALID_REGEX.CONFIRM.test(value)) {
              setError((error) => ( { ...error, confirm: true } ))
            } else {
              setError((error) => ( { ...error, confirm: false } ))
            }
            break
          case VALID_TYPE.FIRST_NAME_KANA:
            if (!VALID_REGEX.KANA_NAME.test(value)) {
              setError((error) => ( { ...error, firstNameKana: true } ))
            } else {
              setError((error) => ( { ...error, firstNameKana: false } ))
            }
            break
          case VALID_TYPE.LAST_NAME_KANA:
            if (!VALID_REGEX.KANA_NAME.test(value)) {
              setError((error) => ( { ...error, lastNameKana: true } ))
            } else {
              setError((error) => ( { ...error, lastNameKana: false } ))
            }
            break
          default:
            setError((error) => ( { ...error } ))
            break
        }
      }
      if (value1 !== value2) {
        setError((error) => ( { ...error, duplicated: true } ))
      } else {
        setError((error) => ( { ...error, duplicated: false } ))
      }
    }, []
  )

  return { validation, error }
}

export default useValidation