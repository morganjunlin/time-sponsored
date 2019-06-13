const { Pool } = require('pg')

const pool = new Pool({
  user: 'morganlin',
  host: 'localhost',
  database: 'grubhub',
  password: '',
  max: 50
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}