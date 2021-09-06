import { ChangeEvent, useCallback, useState } from 'react'

export const useCheckBox = (initialState: number[]) => {
  const [checked, setChecked] = useState(initialState)
  
  
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      if (target.checked) {
        setChecked([
          ...checked,
          Number([target.value])
        ])
      } else {
        setChecked(checked?.filter(value => value !== Number(target.value)))
      }
    }, [checked]
  )
  return { checked, changeHandler }
}