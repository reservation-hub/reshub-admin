export type TArea = {
  id: number
  name: string
  slug: string
}

export type TPrefecture = {
  id: number
  name: string
  slug: string
}

export type TCity = {
  id: number
  name: string
  slug: string
}

export type TLocation = {
  area: TArea
  prefecture: TPrefecture
  city: TCity
}
