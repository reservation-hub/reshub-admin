//-----------------------------------------------
// authenticate
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { localAuthenticationQuery } from '@utils/api/request-response-types/Auth'

export const localLogin = async (formData: localAuthenticationQuery) =>
  await instance.post(`${baseEndpoint.auth}/login`, {
    email: formData.email,
    password: formData.password
  })

export const googleLogin = async (provider: string, tokenId: string) =>
  await instance.post(`${baseEndpoint.auth}/google`, { provider, tokenId })

export const silentRefresh = async () =>
  await instance.post(`${baseEndpoint.auth}/silent_refresh`)

export const logout = async () =>
  await instance.get(`${baseEndpoint.auth}/logout`)

const authenticated = {
  localLogin,
  googleLogin,
  silentRefresh,
  logout
}

export default authenticated
