const jwt = require('jsonwebtoken');
const User = require( '../models/User' );
const config = require( '../config' );

const model = new User();

class UsersController {

  constructor(){
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
    let token = jwt.sign({ id: user.id }, this.secretKey, { expiresIn: this.expiresIn } );

    let res =  {
      auth: true, 
      token: token,
      user
    }

    return res;

  }

  // создание нового пользователя
  async newUser( data ) {

    const user = await model.createuser( data );

    // генерирует токен действительм на сутки
    let token = jwt.sign({ id: user.id }, this.secretKey, { expiresIn: this.expiresIn } );

    let res =  {
      auth: true, 
      token: token,
      user
    }

    return res;

  }

  // проверка токена
  async verufyUser( tokenSend ) {

    let isAuthorized = false;
    
    if (!tokenSend) {
      isAuthorized = false;
    } else {
      let decodedToken = null;
      let token = tokenSend.replace("Bearer ", "");
  
      try {
        decodedToken = jwt.verify(token, this.secretKey );
        
        isAuthorized = true;
      } catch (err) {
        isAuthorized = false;
      }
    }
  
    return isAuthorized;

  }

}

module.exports = UsersController;
