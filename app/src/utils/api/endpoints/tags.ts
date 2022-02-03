//-----------------------------------------------
// tags
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertTagQuery,
  UpdateTagQuery,
  TagResponse,
  TagListResponse
} from '@utils/api/request-response-types/Tag'

export const getTags = async (
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<TagListResponse>> => {
  return await instance.get<TagListResponse>(
    `${baseEndpoint.tags}?page=${page}&order=${order}`
  )
}

export const getTag = async (
  id: number
): Promise<AxiosResponse<TagResponse>> => {
  return await instance.get<TagResponse>(`${baseEndpoint.tags}/${id}`)
}

export const createTag = async (
  tagData: InsertTagQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(baseEndpoint.tags, { ...tagData })
}

export const patchTag = async (
  TagData: UpdateTagQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(`${baseEndpoint.tags}/${TagData.id}`, {
    ...TagData.params
  })
}

export const deleteTag = async (id: number): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(`${baseEndpoint.tags}/${id}`)
}

export const searchTag = async (
  keyword: string,
  page?: number,
  order?: 'desc' | 'asc'
): Promise<AxiosResponse<TagResponse>> => {
  return await instance.get<TagResponse>(
    `${baseEndpoint.tags}/search?keyword=${keyword}&page=${page}&order=${order}`
  )
}

const tags = {
  getTags,
  getTag,
  createTag,
  patchTag,
  deleteTag,
  searchTag
}

export default tags
