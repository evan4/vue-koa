const Koa = require('koa');
const db = require('./db')
const cors = require('@koa/cors');
const router = require('koa-router')();
//const indexRoutes = require('./routes/index');
const PicturesController = require('./controllers/PicturesController');
const app = new Koa();
app.use(cors());

router.get('/lists', list)

app.use(router.routes());

async function list(ctx) {
  
  await db.query('SELECT * FROM pictures')
  .then((res) => {
    ctx.body = res.rows
  })
  .catch(e => console.error(e.stack))
  
}

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;