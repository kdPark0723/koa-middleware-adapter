const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');
const adapter = require('../lib');

const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

function signUp({username, password}) {
  if (!username || !password) throw new adapter.Forbidden();

  // Business logic
  // ...

  return {message: 'success'};
}

router.post('/user', adapter.create(200, signUp));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

const localhost = axios.create({
  baseURL: 'http://localhost:3000'
});

async function test() {
  let success = await localhost.post('/user', {
    username: 'Test User',
    password: 'test'
  });

  console.log(success);

  const fail = await localhost.post('/user', {
    username: 'Test User',
  });

  console.log(fail);
}

test().then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
);


