//　県情報のりクエストをスタート
export const LOCATION_REQUEST_START = 'LOCATION_REQUEST_START'

//　県の情報取得に成功の場合
export const LOCATION_REQUEST_SUCCESS = 'LOCATION_REQUEST_SUCCESS'

export interface Location {
  id: number
  name: string
}