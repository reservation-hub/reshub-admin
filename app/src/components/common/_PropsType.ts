import React from 'react'
import { Area, City, Prefecture } from '@entities/Location'
import { Role } from '@entities/Role'
import { TDays } from '@constants/Days'

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
  data?: Area[] | Prefecture[] | City[] | Role[] | TDays[]
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
