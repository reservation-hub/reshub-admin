import { useCallback, useState } from 'react'

export const useModal = (initialState: boolean, type: string) => {
  const [open, setModalState] = useState<boolean>(initialState)
  const [modalType, setModalType] = useState<string>(type)

  const openModal = useCallback(() => {
    setModalType(type)
    setModalState(true)
  }, [type])

  const closeModal = useCallback((): void => {
    setModalType('')
    setModalState(false)
  }, [])

  return { open, openModal, closeModal, modalType }
}
