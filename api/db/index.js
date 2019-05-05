const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost', 
    port: 5432,
    database: 'complexapi',
    user: 'testuser',
    password: 'pass',
  })

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}