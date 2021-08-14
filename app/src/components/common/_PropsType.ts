import React from 'react'
import { User } from '../../entities/User'
import { Shop } from '../../entities/Shop'

export type MainTemplateProps = {
  children: React.ReactNode
}

export type HeaderProps = {
  onLogout: () => void
}

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string | undefined
}

export type TableProps = {
  cell: object
  data: User[] | Shop[]
}

export type BodyProps = {
  index: number
  data: User & Shop
}