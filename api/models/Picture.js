const db = require('../db');

class Picture {
    async getPicture(lim){
        const limit = lim > 0 ? `LIMIT ${lim}` : '';
        return db.query(`SELECT name FROM pictures ${limit}`)
            .then( res => res.rows )
            .catch(e => console.error(e.stack))
    }
}

module.exports = Picture;