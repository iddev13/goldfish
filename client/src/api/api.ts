import axios from 'axios'

const $host = axios.create({
	baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
	baseURL: process.env.REACT_APP_API_URL
})


const instance = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL
})

export const getProducts = () => {
	return instance.get(`api/user/auth`)
		.then(response => response.data)
}

const authInterceptor = (config: any) => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
	$host,
	$authHost
}
