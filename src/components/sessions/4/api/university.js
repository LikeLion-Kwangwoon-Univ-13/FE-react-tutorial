import httpRequest from "./axios"

async function get(universityId){
	if(universityId){
		const response= await httpRequest.get(`/universities/${universityId}`)
		return response.data
	}
	const response= await httpRequest.get('/universities')
	return response.data
}
const universityApi={
	get,
}
export default universityApi
