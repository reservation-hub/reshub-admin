import React, { ChangeEventHandler } from 'react'
import { Area, City, Prefecture } from '../../entities/Location'

export type MainTemplateProps = {
  children?: React.ReactNode
  onLogout?: () => void
}

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string | undefined
  disabled?: boolean
}

export type TableProps = {
  cell?: object
  data?: any[]
  children?: React.ReactNode
  index?: number
}

export type H1Props = {
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

export type PaginateProps = {
  totalPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export type PickerProps = {
  hh?: number
  mm?: number
  option?: string
  selectHandler?: ChangeEventHandler<{ value: unknown }>
  inputHandler?: ChangeEventHandler<HTMLInputElement>
  values?: { areas: Area[], pref: Prefecture[], city: City[] }
  area?: { option: string, changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void }
  pref?: { option: string, changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void }
  city?: { option: string, changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void }
  classes?: string
}
