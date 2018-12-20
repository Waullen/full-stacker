const router = require('koa-router')();

router.get('', async (ctx) => {
  ctx.body = 'Hello full stacker!'
});

module.exports = router;
