import React from 'react'
import { Area, City, Prefecture } from '../../entities/Location'

export type MatchParams = {
  id: string
}

export interface IMainTemplateProps {
  children?: React.ReactNode
  onLogout?: () => void
}

export interface IButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  className?: string | undefined
  disabled?: boolean
}

export interface ITableProps {
  cell?: object
  data?: any[]
  children?: React.ReactNode
  index?: number
}

export interface IH1Props {
  children: React.ReactNode
  className?: string
  color?: 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
}

export interface IPaginateProps {
  totalPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  page?: string | number | null
}

export interface IPickerProps {
  selectHandler?: React.ChangeEventHandler<{ value: unknown }>
  inputHandler?: React.ChangeEventHandler<HTMLInputElement>
  data?: {
    days: { id: number, value: string }[],
    areas: Area[],
    pref: Prefecture[],
    city: City[]
  }
  checkedData?: number[]
  area?: { option: string, changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void }
  pref?: { option: string, changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void }
  city?: { option: string, changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void }
  classes?: string
  id?: string
  name?: string
  from?: number
  to?: number
  label?: string
  hh?: number
  mm?: number
  option?: string
}

export interface ITopBarProps {
  title: string
  type?: string
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}