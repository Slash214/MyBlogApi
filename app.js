const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const views = require('koa-views')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const onerror = require('koa-onerror')
const routing = require('./routes/index')
const noRouter = require('./404')

// 允许跨域 不需要再配置nginx
app.use(cors())

// 错误拦截
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

routing(app)
app.use(noRouter.routes(), noRouter.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error | 服务器错误', err, ctx)
});

module.exports = app
