
const Router = require( 'koa-router' );

const router = new Router();
const koaBody = require( 'koa-body' );

const UsersController = require( '../controllers/UsersController' );

const users = new UsersController();

router.get( '/users', async ( ctx ) => {

  ctx.body = await users.getUsers();

} )
  .post(
    '/verify', koaBody( { multipart: true } ),
    async ( ctx ) => {

      const token = ctx.request.headers.authorization;
      
      const res = await users.verufyUser( token );

      ctx.body = res;

    },
  )
  .post(
    '/user', koaBody( { multipart: true } ),
    async ( ctx ) => {

      const data = ctx.request.body;

      const res = await users.getUser( data );

      ctx.body = res;

    },
  )
  .post(
    '/singup', koaBody( { multipart: true } ),
    async ( ctx ) => {

      const data = ctx.request.body;
      ctx.body = await users.newUser( data );

    },
  );

module.exports = router;
