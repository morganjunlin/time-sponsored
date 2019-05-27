export const APIgetSponsoredData = (axios, id) => {
	return axios.get(`http://localhost:3400/api/sponsored/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}

export const APIgetRestaurantData = (axios, id) => {
	return axios.get(`http://localhost:3400/api/data/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}