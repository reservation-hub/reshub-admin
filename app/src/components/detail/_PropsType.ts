import { DetailItems } from '@constants/items'

export interface IDetailProps extends DetailItems {
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}
