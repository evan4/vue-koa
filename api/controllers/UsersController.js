const jwt = require( 'jsonwebtoken' );
const User = require( '../models/User' );
const config = require( '../config' );

const model = new User();

class UsersController {

  constructor() {

    this.secretKey = config.credentials.secret;
    this.expiresIn = 86400;

  }

  // Получение списка пользователей
  async getUsers() {

    return model.getUsers();

  }

  // Получение одного пользователя
  async getUser( data ) {

    const user = await model.getUser( data );

    // генерирует токен действительм на сутки
    const token = jwt.sign(
      { id: user.id }, this.secretKey, { expiresIn: this.expiresIn },
    );

    const res = {
      auth: true,
      token,
      user,
    };

    return res;

  }

  // создание нового пользователя
  async newUser( data ) {

    const user = await model.createuser( data );

    // генерирует токен действительм на сутки
    const token = jwt.sign(
      { id: user.id }, this.secretKey, { expiresIn: this.expiresIn },
    );

    const res = {
      auth: true,
      token,
      user,
    };

    return res;

  }

  // проверка токена
  async verufyUser( tokenSend ) {

    let isAuthorized = false;

    if ( !tokenSend ) {

      isAuthorized = false;

    } else {

      const token = tokenSend.replace( 'Bearer ', '' );

      try {

        let decodedToken = jwt.verify( token, this.secretKey );

        if(decodedToken) isAuthorized = true;
        
      } catch ( err ) {

        isAuthorized = false;

      }

    }

    return isAuthorized;

  }

}

module.exports = UsersController;
