import { Items } from '@/constants/items'

export interface IListProps extends Items {
  admin?: boolean
}

export type TCurrentPage = {
  currentPage: number
}
