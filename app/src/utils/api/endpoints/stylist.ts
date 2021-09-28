//-----------------------------------------------
// stylist
//-----------------------------------------------
import instance from '@utils/api'
import {
  insertStylistQuery,
  updateStylistQuery
} from '@utils/api/request-response-types/ShopService'

export const getStylists = async () => await instance.get('/stylists')

export const getStylist = async (id: number) =>
  await instance.get(`/stylists/${id}`)

export const createStylist = async (stylistData: insertStylistQuery) =>
  await instance.post(`/shops/${stylistData.shopId}/stylists`, {
    ...stylistData
  })
export const patchStylist = async (stylistData: updateStylistQuery) =>
  await instance.patch(
    `/shops/${stylistData.shopId}/stylists/${stylistData.stylistId}`,
    { ...stylistData }
  )
export const deleteStylist = async (shopId: number, stylistId: number) =>
  await instance.delete(`/shops/${shopId}/stylists/${stylistId}`)

const stylist = {
  getStylists,
  getStylist,
  createStylist,
  patchStylist,
  deleteStylist
}

export default stylist
