//-----------------------------------------------
// location
//-----------------------------------------------
import instance from '@utils/api'

export const getAreas = async () => await instance.get('/areas')

export const getArea = async (id: number) => await instance.get(`/areas/${id}`)

export const getPrefecture = async (id: number) =>
  await instance.get(`/prefectures/${id}`)


const location = {
  getAreas,
  getArea,
  getPrefecture,
}

export default location
