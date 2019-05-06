const Router = require('koa-router');
const router = new Router();
const koaBody = require('koa-body');

const UsersController = require('../controllers/UsersController');
const users = new UsersController();

router.get('/users', async (ctx) => {
    ctx.body = await users.getUsers()
})
.post('/user', koaBody({ multipart: true }),
    async (ctx) => {
        const  { email, password } = ctx.request.body
        ctx.body = await ctx.request.body
        //users.getUser(email, password);
})

module.exports = router;
