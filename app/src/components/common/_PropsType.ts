import React from 'react'

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