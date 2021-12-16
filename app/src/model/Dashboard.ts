import { TReservationForList } from './Reservation'
import { TShopForList } from './Shop'
import { TStylistForList } from './Stylist'
import { TUserForList } from './User'

export type TStaffDashbaord = {
  shops: TShopForList[]
  shopTotalCount: number
  reservations: TReservationForList[]
  stylists: TStylistForList[]
}

export type TAdminDashboard = {
  user: {
    users: TUserForList[]
    totalCount: number
  }
  shop: {
    shopData: TShopForList[]
    totalCount: number
  }
}
