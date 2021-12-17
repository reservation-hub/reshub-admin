import React from 'react'
import { Role } from '@entities/Role'
import { TDays } from '@constants/Days'
import { TArea, TCity, TPrefecture } from '@model/Location'
export type MatchParams = {
  id: string
}

export interface IMainTemplateProps extends ClassesAndChildren {
  onLogout?: () => void
}

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}

export interface IPickerProps extends IInputProps {
  data?: TArea[] | TPrefecture[] | TCity[] | Role[] | TDays[]
}

export interface IInputProps extends ClassesAndChildren {
  id?: string
  name?: string
  label?: string
  value?: string
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | { value: unknown }
  >
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
