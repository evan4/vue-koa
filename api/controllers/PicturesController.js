const Picture = require('../models/Picture');

class PicturesController {
 
  async getPicture(limit) {
    const model = new Picture();
    return await model.getPicture(limit); 
  }

}

module.exports = PicturesController;
