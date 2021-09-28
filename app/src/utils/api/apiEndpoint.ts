import instance from './index'
import authenticated from '@utils/api/endpoints/authenticated'
import users from '@utils/api/endpoints/users'
import shops from '@utils/api/endpoints/shops'
import location from '@utils/api/endpoints/location'
import reservation from '@utils/api/endpoints/reservation'
import stylist from '@utils/api/endpoints/stylist'
import menu from '@utils/api/endpoints/menu'

//-----------------------------------------------
// get method
//-----------------------------------------------

export const fetchAll = async () => await instance.get(`/`)
export const getDashboard = async () => await instance.get('/dashboard/salon')

const apiEndpoint = {
  fetchAll,
  getDashboard,
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
