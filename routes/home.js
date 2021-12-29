const router = require("koa-router")()

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello World",
  });
});

module.exports = router;