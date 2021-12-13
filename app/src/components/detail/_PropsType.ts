import { Shop } from '@/entities/Shop'
import { User } from '@entities/User'
import { TShop } from '@Model/ShopResponse'

export interface IDetailProps {
  user?: User
  modalOpenHandler?: () => void
  subModalHandler?: () => void
  shop?: Shop
}
