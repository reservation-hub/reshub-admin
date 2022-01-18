export type TStateInId = {
  shopId: string
}

export interface IDetailProps {
  item?: Record<string, any>
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}
