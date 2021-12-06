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

export interface IPickerProps {
  selectHandler?: React.ChangeEventHandler<{ value: unknown }>
  inputHandler?: React.ChangeEventHandler<HTMLInputElement>
  checkedData?: number[]
  classes?: string
  id?: string
  name?: string
  from?: number
  to?: number
  label?: string
  hh?: number
  mm?: number
  option?: string
  variant?: 'filled' | 'standard' | 'outlined' | undefined
  data?: Area[] | Prefecture[] | City[] | Role[] | TDays[]
}

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}
