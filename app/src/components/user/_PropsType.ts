import { User } from '../../entities/User'
import { ShopList } from '../../Model/ShopResponse'

export interface MatchParams {
  id: string
}

export type ListTopBarProps = {
  title: string
  type?: string
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}

export type UserListProps = {
  users?: User[]
  user?: User
  modalOpenHandler?: () => void
  subModalHandler?: () => void
  shops?: ShopList[]
  shop?: ShopList
}
