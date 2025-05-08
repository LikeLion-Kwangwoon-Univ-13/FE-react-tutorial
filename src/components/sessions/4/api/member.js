import httpRequest from "./axios"

async function patch(universityId, partId, memberId, memberUpdate){
	const response=await httpRequest.patch(`/universities/${universityId}/parts/${partId}/members/${memberId}`, memberUpdate)
	return response.data
}
const memberApi={
	patch,
}
export default memberApi