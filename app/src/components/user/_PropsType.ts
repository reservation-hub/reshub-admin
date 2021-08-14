import { User } from '../../entities/User'

export type ListTopBarProps = {
  title: string
  modalOpenHandler: () => void
}

export type UserListProps = {
  users: User[]
  modalOpenHandler: () => void
}
