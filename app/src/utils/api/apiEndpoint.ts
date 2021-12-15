import instance from './index'
import authenticated from '@utils/api/endpoints/authenticated'
import users from '@utils/api/endpoints/users'
import shops from '@utils/api/endpoints/shops'
import location from '@utils/api/endpoints/location'
import reservation from '@utils/api/endpoints/reservation'
import stylist from '@utils/api/endpoints/stylist'
import menu from '@utils/api/endpoints/menu'
import dashboard from '@utils/api/endpoints/dashboard'

//-----------------------------------------------
// get method
//-----------------------------------------------

export const fetchAll = async () => await instance.get(`/`)
<<<<<<< HEAD
=======
export const getDashboard = async () =>
  await instance.get(`${baseEndpoint.dashboard}/salon`)
>>>>>>> 2fe21c7 (axios / endpoint 修正)

export const baseEndpoint = {
  shops: '/shops',
  users: '/users',
  area: '/areas',
  prefecture: '/prefectures',
  dashboard: '/dashboard',
  auth: '/auth'
<<<<<<< HEAD
} as const
=======
}
>>>>>>> 2fe21c7 (axios / endpoint 修正)

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
  instance
}

export default apiEndpoint
