import { useState, useCallback } from 'react'

const useInput = (initalValue: string | object) => {
  
  const [input, setInput] = useState(initalValue)
  
  const changeHandler = useCallback((e) => {
    const { value, name } = e.target
    setInput({
      ...input,
      [name]: value
    })
  }, [input])

  return [input, changeHandler]
}

export default useInput