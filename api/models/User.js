const bcrypt = require( 'bcrypt' );

const db = require( '../db' );

class User {

  constructor() {

    // сложность соли для пароля
    this.saltRounds = 10;

  }

  async getUsers() {

    return db.query( 'SELECT name, email, role FROM users' )
      .then( res => res.rows )
      .catch( e => console.error( e.stack ) );

  }

  async getUser( data ) {

    const { email, password } = data;
    const text = 'SELECT name, email, password, role FROM users WHERE email = $1';
    const values = [ email ];

    return db.query( text, values )
      .then( ( res ) => {

        const result = res.rows[0];
        
        // сравнение пароля из базы и введенного пользователем на идентичность
        const match = bcrypt.compareSync( password, result.password );
        
        if ( match ) {
            delete result.password;
            return result;
        }

        return null;

      } )
      .catch( e => console.error( e.stack ) );

  }

  async createuser( data ) {

    const { name, email, password } = data;

    const pass = bcrypt.hashSync( password, this.saltRounds );

    const text = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING email';
    const values = [ name, email, pass ];

    return db.query( text, values )
      .then( res => res.rows[0] )
      .catch( e => console.error( e.stack ) );

  }

}

module.exports = User;
