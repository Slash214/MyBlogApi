const router = require("koa-router")()

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Welcome To My Blog API",
  });
});

module.exports = router;