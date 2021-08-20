import { User } from '../../entities/User'

export interface MatchParams {
  id: string
}

export type ListTopBarProps = {
  title: string
  type?: string
  modalOpenHandler?: () => void
  onDelete?: () => void
}

export type UserListProps = {
  users?: User[]
  user?: User
  modalOpenHandler?: () => void
  onDelete?: () => void
}
