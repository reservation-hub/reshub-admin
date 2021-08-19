import instance from './api'

const setAuthToken = (token: string | undefined) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${ token }`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export default setAuthToken