import { $authHost, $host } from "./api";
import jwt_decode from "jwt-decode";
import { storageName } from "../redux/reducers/auth-reducer";

export const registration = async (email: string, password: string) => {
	const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
	console.log('Работает Registration', data);
	localStorage.setItem(storageName, data.token)
	return jwt_decode(data.token)
}

export const login = async (email: string, password: string) => {
	const { data } = await $host.post('api/user/login', { email, password })
	console.log('Работает Login', data);
	localStorage.setItem(storageName, JSON.stringify({ userId: data.id, token: data.token }))
	// return jwt_decode(data.token)
	return JSON.stringify({ userId: data.id, token: jwt_decode(data.token) })
}

export const check = async () => {
	const { data } = await $authHost.get('api/user/auth')
	localStorage.setItem(storageName, data.token)
	return jwt_decode(data.token)
}
