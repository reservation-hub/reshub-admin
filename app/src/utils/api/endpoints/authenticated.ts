//-----------------------------------------------
// authenticate
//-----------------------------------------------
import { localAuthenticationQuery } from '@utils/api/request-response-types/AuthService'
import instance from '@utils/api'

export const localLogin = async (formData: localAuthenticationQuery) =>
  await instance.post(`/auth/login`, {
    email: formData.email,
    password: formData.password
  })

export const googleLogin = async (provider: string, tokenId: string) =>
  await instance.post(`/auth/google`, { provider, tokenId })

export const silentRefresh = async () =>
  await instance.post('/auth/silent_refresh')

export const logout = async () => await instance.get('/auth/logout')

const authenticated = {
  localLogin,
  googleLogin,
  silentRefresh,
  logout
}

export default authenticated
