import { useState } from 'react'

export const useModal = (initialState: boolean) => {
  const [open, setModalState] = useState<boolean>(initialState)

  const openModal = ():void => setModalState(true)
  const closeModal = ():void => setModalState(false)

  return { open, openModal, closeModal }
}