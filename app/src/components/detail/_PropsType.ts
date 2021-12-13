import { Shop } from '@/entities/Shop'
import { User } from '@entities/User'

export interface IDetailProps {
  user?: User
  modalOpenHandler?: () => void
  subModalHandler?: () => void
  shop?: Shop
}
