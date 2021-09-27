import { City, Prefecture } from '@entity/Location'

export type PrefResponse = {
  id: number
  slug: string
  name: string
  prefectures: Prefecture[]
}

export type CityResponse = {
  id: number
  slug: string
  name: string
  cities: City[]
  areaId: number
}
