import { User } from '@entities/User'
import { TShopList } from '@Model/ShopResponse'

export interface IListProps {
  users?: User[]
  modalOpenHandler?: () => void
  shops?: TShopList[]
  shop?: TShopList
}

export type TCurrentPage = {
  currentPage: number
}
