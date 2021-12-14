import { TReservationForList } from './Reservation'
import { TShop, TShopForList } from './Shop'
import { TStylist } from './Stylist'
import { TUserForList } from './User'

export type TStaffDashbaord = {
  shops: TShopForList[]
  shopTotalCount: number
  reservations: TReservationForList[]
  stylists: TStylist[]
}

export type TAdminDashboard = {
  user: {
    users: TUserForList[]
    totalCount: number
  }
  shop: {
    shops: TShopForList[]
    totalCount: number
  }
}
