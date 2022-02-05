import instance from './index'
import authenticated from '@utils/api/endpoints/authenticated'
import users from '@utils/api/endpoints/users'
import shops from '@utils/api/endpoints/shops'
import location from '@utils/api/endpoints/location'
import reservation from '@utils/api/endpoints/reservation'
import stylist from '@utils/api/endpoints/stylist'
import menu from '@utils/api/endpoints/menu'
import dashboard from '@utils/api/endpoints/dashboard'
import tags from '@utils/api/endpoints/tags'
import reviews from '@utils/api/endpoints/reviews'
import shopTags from '@utils/api/endpoints/shopTags'

//-----------------------------------------------
// get method
//-----------------------------------------------

export const fetchAll = async () => await instance.get(`/`)

export const baseEndpoint = {
  shops: '/shops',
  users: '/users',
  area: '/areas',
  prefecture: '/prefectures',
  dashboard: '/dashboard',
  auth: '/auth',
  tags: '/tags'
} as const

const apiEndpoint = {
  fetchAll,
  dashboard,
  authenticated,
  users,
  shops,
  location,
  reservation,
  stylist,
  menu,
  tags,
  shopTags,
  reviews,
  instance
}

export default apiEndpoint
