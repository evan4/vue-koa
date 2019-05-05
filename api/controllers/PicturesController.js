const Picture = require('../models/Picture');
const db = require('../db')
class PicturesController {
 
getAll() {
    db.query('SELECT * FROM pictures')
      .then( res => res.rows )
      .catch(e => console.error(e.stack))
    /* const model = new Picture();
    
    console.log('res '+ model.getAll());
    return model.getAll(); */
  }

}

module.exports = PicturesController;
