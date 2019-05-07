const db = require('../db');

class User {
    async getUsers(){
        return db.query(`SELECT name, email, role FROM users`)
            .then( res => res.rows )
            .catch(e => console.error(e.stack))
    }

    async getUser(data){
        const text = 'SELECT name, email, role FROM users WHERE email = $1 AND password = $2';
        const values = Object.values(data)

        return db.query(text, values)
            .then( res => res.rows[0] )
            .catch(e => console.error(e.stack))
    }
    
    async createuser(data){
        const text = 'SELECT name, email, password, role FROM users WHERE email = $1 AND password = $2';
        const values = Object.values(data)

        return db.query(text, values)
            .then( res => res.rows[0] )
            .catch(e => console.error(e.stack))
    }
    
}

module.exports = User;