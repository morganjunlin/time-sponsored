const { Pool } = require('pg')

// const pool = new Pool({
//   user: 'morganlin',
//   host: 'localhost',
//   database: 'grubhub',
//   password: '',
//   max: 50
// })

const pool = new Pool({
  host: 'ec2-18-222-1-47.us-east-2.compute.amazonaws.com',
  database: 'grubhub',
  user: 'ubuntu',
  password: 'password',
  port: 5432
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}