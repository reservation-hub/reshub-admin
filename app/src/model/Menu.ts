export type TMenu = {
  id: number
  name: string
  description: string
  price: number
  duration: number
}

export type TMenuForList = Pick<TMenu, 'id' | 'name' | 'price' | 'duration'>

export type TMenuForDetail = Pick<
  TMenu,
  'id' | 'name' | 'duration' | 'price' | 'description'
>
