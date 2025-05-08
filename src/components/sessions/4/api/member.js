import httpRequest from "./axios"

async function get(universityId, partId, memberId){
	if(universityId&&partId&&memberId){
	const response=await httpRequest.get(`/universities/${universityId}/parts/${partId}/members/${memberId}`)
	return response.data
	}
	if(universityId&&partId){
		const response=await httpRequest.get(`/universities/${universityId}/parts/${partId}/members`)
		return response.data
	}
}
{
	/**
	 * TODO: memberApi.post()를 구현하세요.
	 */
}
async function patch(universityId, partId, memberId, memberUpdate){
	const response=await httpRequest.patch(`/universities/${universityId}/parts/${partId}/members/${memberId}`, memberUpdate)
	return response.data
}
async function _delete(universityId, partId, memberId){
	const response=await httpRequest.delete(`/universities/${universityId}/parts/${partId}/members/${memberId}`)
	return response.data
}
const memberApi={
	get,
	// post,
	patch,
	delete:_delete,
}
export default memberApi