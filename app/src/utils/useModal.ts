import { useCallback, useState } from 'react'

export const useModal = (initialState: boolean, modalState: string) => {
  const [open, setModalState] = useState<boolean>(initialState)
  const [modalStat, setModalStat] = useState<string>(modalState)
  
  const openModal = useCallback(
    () => {
      setModalStat(modalState)
      setModalState(true)
    }, [modalState])
  
  const closeModal = useCallback(
    (): void => {
      setModalStat('')
      setModalState(false)
    }, [])
  
  return { open, openModal, closeModal, modalStat }
}