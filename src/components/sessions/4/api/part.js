import httpRequest from "./axios"

async function get(universityId, partId){
	const response=await httpRequest.get(`/universities/${universityId}/parts/${partId}`)
	return response.data
}
const partApi={
	get,
}
export default partApi