import {
  salonIndexAdminResponse,
  salonIndexShopStaffResponse
} from '@/utils/api/request-response-types/Dashboard'

export type AdminDashboardProps = {
  data: salonIndexAdminResponse & salonIndexShopStaffResponse
}
