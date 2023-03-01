/**
 * @author 爱呵呵
 * @description 404 路由
 */

const router = require("koa-router")();
const { NoRouterPage } = require('./models/ErrorInfo');
const { ErrorModel } = require("./models/ResModel");

router.get("(.*)", async (ctx, next) => {
  ctx.body = new ErrorModel(NoRouterPage)
})

module.exports = router;
