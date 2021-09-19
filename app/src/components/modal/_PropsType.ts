import React from 'react'
import { schema } from '../../pages/user/Users'
import { FormikHelpers } from 'formik'

export type ModalOverlayProps = {
  children?: React.ReactNode
  modalOpen: boolean
  modalCloseHandler?: () => void
}

export type ModalProps = {
  modalCloseHandler: () => void
  alertText?: string
  modalTitle?: string
  modalHandler?: () => void
  buttonText?: string
}

export interface IModalFormProps {
  validation: object,
  onSubmit: (values: IUserFormInput, formikHelpers: FormikHelpers<IUserFormInput>) => ( void | Promise<any> )
  formInitialState: object
}

export type ModalForm = (props: IModalFormProps) => JSX.Element

export interface IUserFormInput {
  email: string
  lastNameKanji: string
  firstNameKanji: string
  lastNameKana: string
  firstNameKana: string
  password: string
  confirm: string
  gender: string
  birthdayY: string
  birthdayM: string
  birthdayD: string
  role: string
}

interface UserModalFormProps extends IModalFormProps {
  validation: typeof schema
  formInitialState: IUserFormInput
}

export type UserModalForm = (props: UserModalFormProps) => JSX.Element
