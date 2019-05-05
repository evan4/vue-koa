const { Pool, Client } = require('pg');

  // pools will use environment variables
  // for connection information
  
const pool = new Pool({
    host: 'localhost', 
    port: 5432,
    database: 'complexapi',
    user: 'testuser',
    password: 'pass',
});


class Picture {
    getAll(){
        // callback - checkout a client
        pool.query('SELECT * FROM pictures', (err, res) => {
            return res.rows;
            pool.end()
          })
    }
}

module.exports = Picture;