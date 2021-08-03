//　県情報のりクエストをスタート
import { LocationData } from "../../interface/interface";

export const LOCATION_REQUEST_START = 'LOCATION_REQUEST_START' as const

//　県の情報取得に成功の場合
export const LOCATION_REQUEST_SUCCESS = 'LOCATION_REQUEST_SUCCESS' as const

export interface LocationState {
  loading: boolean
  location: LocationData[] | null
}