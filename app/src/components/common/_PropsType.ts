import React from 'react'
import { Area, City, Prefecture } from '@entity/Location'
import { Role } from '@entity/Role'
import { TDays } from '@constants/Days'

export type MatchParams = {
  id: string
}

export interface IMainTemplateProps extends ClassesAndChildren {
  onLogout?: () => void
}

export interface IButtonProps extends ClassesAndChildren {
  onClick?: () => void
  disabled?: boolean
}

export interface ITableProps extends ClassesAndChildren {
  cell?: Record<string, any>
  data?: any[]
  index?: number
}

export interface IH1Props extends ClassesAndChildren {
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
}

export interface IPaginateProps {
  totalPage: number
  page?: string | number | null
  pageChangeHandler: (selectedItem: { selected: number }) => void
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

export interface ITopBarProps extends ClassesAndChildren {
  title: string
  type?: string
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}
