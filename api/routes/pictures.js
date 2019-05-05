const Router = require('koa-router');
const router = new Router();

const PicturesController = require('../controllers/PicturesController');

router.get('/pictures', async (ctx) => {

  let limit = ctx.request.query.limit;
  limit =  !Number.isNaN(Number(ctx.request.query.limit)) ? limit : 0;
  console.log(ctx.request.query);
  const pictures = await new PicturesController();

  ctx.body = await pictures.getPicture(limit)
})

module.exports = router;
