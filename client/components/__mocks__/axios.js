const fakeData = {
	title: "james is handsome",
	uid: 1
}

const mock = {
	get: jest.fn(()=> Promise.resolve({data: fakeData}))
}

export default mock

