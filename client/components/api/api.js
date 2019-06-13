// let HTTP_Request_URL = (process.env.NODE_ENV === 'development') ? "http://localhost:3400" : "https://time-sponsored.herokuapp.com"

let HTTP_Request_URL = "http://localhost:3400"

export const APIgetSponsoredData = (axios, id) => {
	return axios.get(`${HTTP_Request_URL}/api/psql/sponsored/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}

export const APIgetRestaurantData = (axios, id) => {
	return axios.get(`${HTTP_Request_URL}/api/psql/data/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}