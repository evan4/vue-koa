const User = require( '../models/User' );

const model = new User();

class UsersController {

  // Получение списка пользователей
  async getUsers() {

    return model.getUsers();

  }

  // Получение одного пользователя
  async getUser( data ) {

    return model.getUser( data );

  }

  // создание нового пользователя
  async newUser( data ) {

    return model.createuser( data );

  }

}

module.exports = UsersController;
