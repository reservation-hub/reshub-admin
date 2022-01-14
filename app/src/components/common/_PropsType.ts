import React from 'react'
import { Control } from 'react-hook-form'

export type MatchParams = {
  id: string
}

export type selectType = {
  value: string
  name: string
}

export interface IMainTemplateProps extends ClassesAndChildren {
  onLogout?: () => void
}

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}

export interface IPickerProps extends IInputProps {
  data?: selectType[]
}

export interface IInputProps extends ClassesAndChildren {
  id?: string
  name: string
  label?: string
  value?: string
  control?: Control<any>
  error?: boolean
  errorTxt?: string
  autoComplete?: 'on' | 'off'
  placeholder?: string
  required?: boolean
  fullWidth?: boolean
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | { value: unknown }
  >
}
