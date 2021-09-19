import { City, Prefecture } from '../entities/Location'

export type AreaResponse = {
  id: number
  slug: string
  name: string
  prefectures: Prefecture[]
}

export type PrefResponse = {
  id: number
  slug: string
  name: string
  cities: City[]
  areaId: number
}