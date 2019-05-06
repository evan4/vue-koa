const Picture = require('../models/Picture');

class PicturesController {
 
  async getPictures(limit) {
    const model = new Picture();
    return model.getPicture(limit); 
  }

}

module.exports = PicturesController;
