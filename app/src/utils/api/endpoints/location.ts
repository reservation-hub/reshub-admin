//-----------------------------------------------
// location
//-----------------------------------------------
import instance from '@utils/api'

export const getAreas = async () => await instance.get('/areas')

export const getPrefectures = async () => await instance.get('/prefectures')

export const getCities = async () => await instance.get('/cities')

export const getArea = async (id: number) => await instance.get(`/areas/${id}`)

export const getPrefecture = async (id: number) =>
  await instance.get(`/prefectures/${id}`)

export const getCity = async (id: number) => await instance.get(`/cities/${id}`)

const location = {
  getAreas,
  getPrefectures,
  getCities,
  getArea,
  getPrefecture,
  getCity
}

export default location
