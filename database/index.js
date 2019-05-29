const mongoose = require('mongoose')

let DB_URL = (process.env.NODE_ENV === 'development') ? "mongodb://127.0.0.1:27017/grubhub" : `mongodb+srv://hackreactortest:${process.env.DB_PW}@cluster0-7iwj5.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.once('open', () => console.log("Database is up and running on 27017"));

module.exports = db