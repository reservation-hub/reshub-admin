import { City, Prefecture } from '@entity/Location'

export type TPrefecture = {
  id: number
  slug: string
  name: string
  prefectures: Prefecture[]
}

export type TCity = {
  id: number
  slug: string
  name: string
  cities: City[]
  areaId: number
}
