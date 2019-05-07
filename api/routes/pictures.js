const Router = require( 'koa-router' );

const router = new Router();

const PicturesController = require( '../controllers/PicturesController' );

router.get( '/pictures', async ( ctx ) => {

  let { limit } = ctx.request.query;
  limit = !Number.isNaN( Number( ctx.request.query.limit ) ) ? limit : 0;

  const pictures = new PicturesController();

  ctx.body = await pictures.getPictures( limit );

} );

module.exports = router;
