import { User } from '@entity/User'
import { TShopList } from '@Model/ShopResponse'

export interface IListProps {
  users?: User[]
  modalOpenHandler?: () => void
  shops?: TShopList[]
  shop?: TShopList
}
