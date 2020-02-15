// eslint-disable-next-line import/no-extraneous-dependencies
const Koa = require('koa');
const adapter = require('../koa-middleware-adapter');

const app = new Koa();

app.use(adapter.create(() => '<p>Page Not Found</p>', {
  status: 404, type: 'html',
}));

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening to port 4000');
});
