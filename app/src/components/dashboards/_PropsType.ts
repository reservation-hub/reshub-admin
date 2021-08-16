import { User } from '../../entities/User'
import { Shop } from '../../entities/Shop'

export type AdminDashboardProps = {
  user?: User[]
  shop?: Shop[]
}