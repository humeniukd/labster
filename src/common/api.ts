import axios, { AxiosRequestConfig } from 'axios'
import appConfig from '../config'

axios.defaults.baseURL = appConfig.apiUrl || ''

let currentToken: string = ''
let authInterceptorId: number | null = null

const getContentTypeHeader = (config: AxiosRequestConfig) => {
  const defaultContentTypeHeader = config.headers['content-type']

  if (!config.data) {
    return defaultContentTypeHeader
  }

  const hasFormData = config.data instanceof FormData
  return hasFormData ? 'multipart/form-data' : defaultContentTypeHeader
}

export const setAccessToken = (accessToken: string) => {
  if (currentToken === accessToken) {
    return
  }

  if (authInterceptorId) {
    axios.interceptors.request.eject(authInterceptorId)
  }

  if (accessToken) {
    currentToken = accessToken
    authInterceptorId = axios.interceptors.request.use(config => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${currentToken}`,
        'content-type': getContentTypeHeader(config),
      },
    }))
  }
}

export const camelToSnakeCase = (word: string) =>
  word.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

export default axios
