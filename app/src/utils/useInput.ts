import { useState, useCallback, ChangeEvent } from 'react'

const useInput = <T>(initialState: T) => {

  const [state, setState] = useState<T>(initialState)

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target
      setState({
        ...state,
        [name]: value,
      })
    }, [state],
  )


  return { state, onChangeHandler }
}

export default useInput
