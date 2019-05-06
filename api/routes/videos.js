const Router = require('koa-router');
const router = new Router();

const VideosController = require('../controllers/VideosController');

router.get('/videos', async (ctx) => {

  let limit = ctx.request.query.limit;
  limit =  !Number.isNaN(Number(ctx.request.query.limit)) ? limit : 0;

  const videos = new VideosController();

  ctx.body = await videos.getVideos(limit)
})

module.exports = router;
