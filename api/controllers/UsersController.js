const User = require('../models/User');
const model = new User();
const bcrypt = require('bcrypt');

class UsersController {

  constructor(){
    this.saltRounds = 10;
  }

  async getUsers() {
    return model.getUsers();
  }

  async getUser(data) {
    const res = model.getUser(data);

    return res;
  }
  
  async newUser(name, email, password){

  }
}

module.exports = UsersController;
