/**
 * @author 大羊
 * @description 404 路由
 */

const router = require("koa-router")();

router.get("(.*)", async (ctx, next) => {
  ctx.body = { message: '404' }
})

module.exports = router;
