import React from 'react'

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