const Koa = require('koa');
const cors = require('@koa/cors');
const logger = require('koa-logger');

const picturesRoutes = require('./routes/pictures');

const app = new Koa();
app.use(cors());
app.use(logger());

app.use(picturesRoutes.routes());

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;