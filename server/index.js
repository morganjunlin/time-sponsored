const express = require('express')
const cors = require('cors')
const path = require('path')
// const mongo = require('./mongo-mongoose/routes')
const mongo = require('./mongo-raw/routes')
// const psql = require('./psql-sequelize/routes')
const psql = require('./psql-raw/routes')
const PORT = process.env.PORT || 3400
const nocache = require('nocache')
// const morgan = require('morgan')

const expressStaticGzip = require("express-static-gzip");

const app = express()

// console.log(process.env.NODE_ENV) //'development'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(nocache())
// app.use(morgan('dev'))

//testing purpose
app.get('/', (req,res)=> {
	res.send("Welcome! This is Time-Sponsored section")
})

//serving static files
// app.use("/restaurants/time_sponsored", express.static(path.resolve(__dirname, '../static')))

//serving compressed bundle.js
app.use("/restaurants/time_sponsored", expressStaticGzip(path.resolve(__dirname,'../static'), {
	enableBrotli: true,
	orderPreference: ['br', 'gz']
}))


//api requests from the client
app.use('/api/mongo', mongo)
app.use('/api/psql', psql)


//listening on 3000
app.listen(PORT, ()=> console.log("Server is up and running on ", PORT))



