import { ChangeEvent, useCallback, useState } from 'react'

export const useSelect = (initialState: string) => {
  const [option, setOption] = useState<string>(initialState)

  const changeHandler = useCallback((e: ChangeEvent<{ value: unknown }>) => {
    const target = e.target as HTMLSelectElement
    setOption(target.value)
  }, [])

  return { option, changeHandler }
}
