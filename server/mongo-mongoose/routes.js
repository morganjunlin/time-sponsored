const routes = require('express').Router()
const Grubhub = require('../../database/mongo-mongoose/models.js')

/******** MONGOOSE ********/

routes.get('/data/:id', (req,res)=> {
	const {id} = req.params
	Grubhub.findOne({ "id": Number(id) })
	.exec((err, docs)=> {
		if (err) {
			res.send(err)
		} else {
			res.send(docs) // an object
		}
	})
})

routes.get('/sponsored/:id', (req,res)=> {
	const {id} = req.params
	let gt = Number(id) + 1
	let lt = Number(id) + 14
	if (lt > 10000000) {
		gt = gt - 500000
		lt = lt - 500000
	}
	Grubhub.find({ "id" : {$gt : gt, $lt : lt}})
	.exec((err, docs)=> {
		if (err) {
			res.send(err)
		} else {
			res.send(docs) // an array
		}
	});
})

routes.get('/random_data', (req,res)=> {
	let randomId = Math.floor(Math.random() * 1000000) + 9000000
	console.time('Mongo Query Time')
		Grubhub.findOne({ "id": Number(randomId) })
		.exec((err, docs)=> {
			if (err) {
				res.send(err)
			} else {
				res.send(docs) // an object
				console.timeEnd('Mongo Query Time')
			}
		})
})

routes.get('/random_sponsored', (req,res)=> {
	let randomId = Math.floor(Math.random() * 1000000) + 9000000
	let gt = Number(randomId) + 1
	let lt = Number(randomId) + 14
	if (lt > 10000000) {
		gt = gt - 500000
		lt = lt - 500000
	}
	Grubhub.find({ "id" : {$gt : gt, $lt : lt}})
	.exec((err, docs)=> {
		if (err) {
			res.send(err)
		} else {
			res.send(docs) // an array
		}
	});
})

/***** BEGIN CRUD OPERATIONS *****/

routes.post('/data', (req,res)=> {
	const {categories, id, image, name, ratings, counts, waitingtime} = req.body

	Grubhub.create({categories, id, image, name, ratings, counts, waitingtime})
		.then(() => res.send("Post successful!"))
		.catch(err => res.send(err))
})

routes.get('/data/', (req,res)=> {
	Grubhub.find()
	.exec((err, docs)=> {
		if (err) {
			res.send(err)
		} else {
			res.send(docs) // an object
		}
	})
})

routes.put('/data/:id', (req,res)=> {
	const {id} = req.params

	Grubhub.findOneAndUpdate({id}, req.body, {new: true})
	.exec((err, doc)=> {
		if (err) {
			res.send(err)
		} else {
			res.send(doc) // an object
		}
	})
})

routes.delete('/data/:id', (req,res)=> {
	const {id} = req.params

	Grubhub.findOneAndDelete({id})
	.exec((err)=> {
		if (err) {
			res.send(err)
		} else {
			res.send("Delete successful!")
		}
	})
})

/***** END CRUD OPERATIONS *****/

module.exports = routes