import { User } from '../../entities/User'
import { ShopList } from '../../Model/ShopResponse'

export interface IListProps {
  users?: User[]
  modalOpenHandler?: () => void
  shops?: ShopList[]
}