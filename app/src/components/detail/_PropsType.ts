import { User } from '@entity/User'
import { ShopList } from '@Model/ShopResponse'

export interface IDetailProps {
  user?: User
  modalOpenHandler?: () => void
  subModalHandler?: () => void
  shop?: ShopList
}
