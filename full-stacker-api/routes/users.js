const router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = {
    name: 'zhangsan',
    age: 23
  }
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
});

module.exports = router;
