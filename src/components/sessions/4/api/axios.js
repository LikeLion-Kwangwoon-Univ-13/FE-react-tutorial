import axios from "axios"

const baseUrl = import.meta.env.VITE_API_ORIGIN_
const httpRequest = axios.create({
	baseURL: baseUrl,
	withCredentials: false,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})

export default httpRequest
