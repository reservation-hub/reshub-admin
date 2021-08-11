import React, { ChangeEventHandler, FormEventHandler } from 'react'

export type ModalProps = {
  children: React.ReactNode
  modalOpen: boolean
  modalCloseHandler: () => void
  modalTitle: string
}

export type modalFormProps = {
  input: {
    email: string
    password: string
    confirm: string
    firstnameKanji: string
    lastnameKanji: string
    firstnameKana: string
    lastnameKana: string
    gender: string
    birthdayY: string
    birthdayM: string
    birthdayD: string
    role: string[] | string
  }
  setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>
  onSubmit: FormEventHandler<HTMLFormElement>
}