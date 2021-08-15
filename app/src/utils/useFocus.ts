import { useCallback, FocusEvent } from "react";

const useFocus = () => {

  const FocusHandler = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      console.log('focus handler', e)
    }, []
  )
  
  const BlurHandler = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      console.log('blur handler', e)
    }, []
  )

  return { FocusHandler, BlurHandler }
}

export default useFocus