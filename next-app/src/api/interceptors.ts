import { getAccessToken, removeFromStorage } from '@/services/token.service'
import axios, { type CreateAxiosDefaults } from 'axios'
import { errorCatch, getContentType } from './api.helper'

// const options: CreateAxiosDefaults = {
// 	baseURL: 'http://api.frontsupport.pp.ua/v1/',
// 	headers: getContentType(),
// 	withCredentials: true,
// }
const options: CreateAxiosDefaults = {
	baseURL: 'https://api.frontsupport.pp.ua/v1',
	headers: getContentType(),
	withCredentials: true,
}
const optionsV2: CreateAxiosDefaults = {
	baseURL: 'https://api.frontsupport.pp.ua/v2',
	headers: getContentType(),
	withCredentials: true,
}
const deliveryOptions: CreateAxiosDefaults = {
	baseURL: 'https://api.novaposhta.ua/v2.0/json',
	headers: getContentType(),
}
export const instance = axios.create(options)
export const instanceWithAuthIllia = axios.create(options)
export const instanceWithAuthStas = axios.create(optionsV2)
export const instanceLocation = axios.create(deliveryOptions)

instanceLocation.interceptors.request.use(async config => {
	config.data = {
		apiKey: '1f0cee4246a32cc95b71365f91a63bc3',
		...config.data,
	}
	return config
})

instanceWithAuthIllia.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`
	//config.headers.Authorization = `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzdW1pY2tAZ21haWwuY29tIiwiaWF0IjoxNzE0MjA0OTU2LCJleHAiOjE3MTQyNjQ5NTZ9.Aai6V0XD8-qubzCJcNr_r1XnGsVZkTwSIhT1UppmJI2sR-ZJ5qEz9MAePrTuPB4d`

	return config
})

instanceWithAuthIllia.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				//await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
				}
				removeFromStorage()
			}
		}
	}
)
instanceWithAuthStas.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instanceWithAuthStas.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				//await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
				}
				removeFromStorage()
			}
		}
	}
)
