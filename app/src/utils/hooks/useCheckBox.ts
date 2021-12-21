import { ChangeEvent, useCallback, useState } from 'react'

export const useCheckBox = (initialState: any[]) => {
  const [checked, setChecked] = useState(initialState)

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      if (target.checked) {
        setChecked([...checked, [target.value]])
      } else {
        setChecked(checked?.filter((value) => value !== target.value))
      }
    },
    [checked]
  )
  return { checked, changeHandler }
}
