const User = require('../models/User');

class UsersController {

  async getUsers() {
    const model = new User();
    return model.getUsers();
  }

  async getUser(email, password) {
    const model = new User();
    return model.getUser(email, password);
  }
}

module.exports = UsersController;
