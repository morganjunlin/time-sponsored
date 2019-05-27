export const APIgetSponsoredData = (axios, id) => {
	return axios.get(`http://localhost:3000/api/sponsored/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}

export const APIgetRestaurantData = (axios, id) => {
	return axios.get(`http://localhost:3000/api/data/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}