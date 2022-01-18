import React from 'react'
import {
  MenuListResponse,
  ReservationListResponse,
  ShopListResponse,
  StylistListResponse
} from '@utils/api/request-response-types/Shop'
import instance from '@utils/api'
import { LoadOptions } from 'react-select-async-paginate'
import { GroupBase, OptionsOrGroups } from 'react-select'
import { UserListResponse } from '../api/request-response-types/User'
import { OptionsType } from '@components/common/_PropsType'

export const useLoadOptions = <
  T extends
    | ReservationListResponse
    | MenuListResponse
    | ShopListResponse
    | StylistListResponse
    | UserListResponse
>(
  baseEndpoint: string,
  shopId?: number,
  url?: string
) => {
  const loadOptions = async (search: string, page: number) => {
    const res = await instance.get<T>(
      url
        ? `${baseEndpoint}/${shopId}/${url}?page=${page}&order=desc`
        : `${baseEndpoint}?page=${page}&order=desc`
    )
    const data = res.data?.values?.map((v: any, i: number) => ({
      label: String(v.name || v.clientName),
      value: String(v.id)
    }))

    let filterdOptions

    if (!search) {
      filterdOptions = data
    } else {
      const searchLowercase = search.toLowerCase()
      filterdOptions = data.filter(({ label }: any) =>
        label.includes(searchLowercase)
      )
    }
    return {
      options: filterdOptions,
      hasMore: filterdOptions.length > page
    }
  }

  const loadMore: LoadOptions<string, any, { page: number }> = async (
    queryString: string,
    group: OptionsOrGroups<OptionsType, GroupBase<OptionsType>>,
    additional: { page: number } | undefined
  ) => {
    const { options, hasMore } = await loadOptions(
      queryString,
      Number(additional?.page)
    )

    return {
      options,
      hasMore,
      additional: {
        page: Number(additional?.page) + 1
      }
    }
  }

  return { loadMore }
}
