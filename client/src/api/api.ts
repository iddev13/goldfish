import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://localhost5000'
})