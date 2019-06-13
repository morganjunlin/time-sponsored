const routes = require('express').Router()
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/grubhub';

// Database Name
const dbName = 'grubhub';

let db;

// Use connect method to connect to the server
MongoClient.connect(url,  { poolSize: 50, useNewUrlParser: true }, (err, client) => {
  console.log("MongoDB Connected successfully to server");

  db = client.db(dbName);
});

/******** RAW QUERIES ********/

routes.get('/data/:id', (req,res)=> {
  const {id} = req.params
  db.collection('grubhubs').find({"id": Number(id)}).toArray((err, documents) => {
    if (err) {
      throw err
    } else {
      res.send(documents)
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
	db.collection('grubhubs').find({ "id" : {$gt : gt, $lt : lt}}).toArray((err, documents) => {
    if (err) {
      throw err
    } else {
      res.send(documents)
    }
	});
})

routes.get('/random_data', (req,res)=> {
	let randomId = Math.floor(Math.random() * 1000000) + 9000000
	console.time('Raw Mongo Query Time')
	db.collection('grubhubs').find({"id": Number(randomId)}).toArray((err, documents) => {
    if (err) {
      throw err
    } else {
			res.send(documents)
			console.timeEnd('Raw Mongo Query Time')
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
	db.collection('grubhubs').find({ "id" : {$gt : gt, $lt : lt}}).toArray((err, documents) => {
    if (err) {
      throw err
    } else {
      res.send(documents)
    }
	});
})

/***** BEGIN CRUD OPERATIONS

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

END CRUD OPERATIONS *****/

module.exports = routes