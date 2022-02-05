//-----------------------------------------------
// tags
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  TagLinkQuery,
  TagUnlinkQuery,
  TagListResponse
} from '@utils/api/request-response-types/Shop'

export const getTags = async (
  shopId: number,
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<TagListResponse>> => {
  return await instance.get<TagListResponse>(
    `${baseEndpoint.shops}/${shopId}/tags?page=${page}&order=${order}`
  )
}

export const linkTag = async (
  tagData: TagLinkQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(
    `${baseEndpoint.shops}/${tagData.shopId}/tags`,
    { ...tagData.params }
  )
}

export const unlinkTag = async (
  query: TagUnlinkQuery
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(
    `${baseEndpoint.shops}/${query.shopId}/${query.tagId}`
  )
}

const shopTags = {
  getTags,
  linkTag,
  unlinkTag
}

export default shopTags
