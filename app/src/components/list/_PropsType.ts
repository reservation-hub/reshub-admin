import { User } from '@entity/User'
import { ShopList } from '@Model/ShopResponse'

export interface IListProps {
  users?: User[]
  modalOpenHandler?: () => void
  shops?: ShopList[]
}
