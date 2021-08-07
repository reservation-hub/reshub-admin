//　県情報のりクエストをスタート


import { Area, City, Prefecture } from '../../entities/Location'

export const LOCATION_REQUEST_START = 'LOCATION_REQUEST_START' as const

//　県の情報取得に成功の場合
export const LOCATION_REQUEST_SUCCESS = 'LOCATION_REQUEST_SUCCESS' as const