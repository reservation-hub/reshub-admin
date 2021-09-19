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

const useValidation = <T>(initialValues: T, validationValues: TValid) => {
  const [error, setError] = useState<TValid>(validationValues)

  const validation = useCallback(
    (name: T) => {
      for (const [key, value] of Object.entries(name)) {
        switch (key) {
          case VALID_TYPE.EMAIL:
            if (!VALID_REGEX.EMAIL.test(value)) {
              setError((error) => ( { ...error, email: true } ))
            } else {
              setError((error) => ( { ...error, email: false } ))
            }
            continue
          case VALID_TYPE.PASSWORD:
            if (!VALID_REGEX.PASSWORD.test(value)) {
              setError((error) => ( { ...error, password: true } ))
            } else {
              setError((error) => ( { ...error, password: false } ))
            }
            continue
          case VALID_TYPE.CONFIRM:
            if (!VALID_REGEX.CONFIRM.test(value)) {
              setError((error) => ( { ...error, confirm: true } ))
            } else {
              setError((error) => ( { ...error, confirm: false } ))
            }
            continue
          case VALID_TYPE.FIRST_NAME_KANA:
            if (!VALID_REGEX.KANA_NAME.test(value)) {
              setError((error) => ( { ...error, firstNameKana: true } ))
            } else {
              setError((error) => ( { ...error, firstNameKana: false } ))
            }
            continue
          case VALID_TYPE.LAST_NAME_KANA:
            if (!VALID_REGEX.KANA_NAME.test(value)) {
              setError((error) => ( { ...error, lastNameKana: true } ))
            } else {
              setError((error) => ( { ...error, lastNameKana: false } ))
            }
            break
          default:
            setError((error) => ( { ...error } ))
        }
      }
      if (error) {
        throw new Error('error')
      }
    }, [error]
  )

  return { validation, error, setError }
}

export default useValidation