const Koa = require('koa');
const cors = require('@koa/cors');
const logger = require('koa-logger');

const picturesRoutes = require('./routes/pictures');
const videosRoutes = require('./routes/videos');
const usersRoutes = require('./routes/users');

const app = new Koa();

app.use(cors());
app.use(logger());

app.use(picturesRoutes.routes());
app.use(videosRoutes.routes());
app.use(usersRoutes.routes());

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
