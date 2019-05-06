const db = require('../db');

class User {
    async getUsers(){
        return db.query(`SELECT name, email, role FROM users`)
            .then( res => res.rows )
            .catch(e => console.error(e.stack))
    }

    async getUser(email, password){
        const text = 'SELECT name, email, password, role FROM users WHERE email = $1 AND password = $2'
        const values = [email, password]

        return db.query(text)
            .then( res => res.rows[0] )
            .catch(e => console.error(e.stack))
    }
}

module.exports = User;