const { SuccessModel } = require("../models/ResModel");
const router = require("koa-router")();
const jdenticon = require("jdenticon");
const fs = require("fs");
const crypto = require("crypto");
const { Name } = require("../db/models");

router.prefix("/random");

router.get("/avatar", async (ctx, next) => {
  let { size = 150 } = ctx.request.query;
  size = +size;
  let name = +new Date(),
    id = Math.floor(Date.now() / 500).toString(),
    md5 = crypto.createHash("md5").update(id);

  id = id || Math.random().toString();
  md5 = md5.digest("hex");
  const png = jdenticon.toPng(md5, size);

  console.log(id, md5);
  // 保持图片
  fs.writeFileSync(`./../avatar/${name}.png`, png);
  //   fs.writeFileSync(`./public/avatar/${name}.png`, png)

  ctx.body = new SuccessModel({
    code: 200,
    message: "",
    data: {
      name: `${name}.png`,
      md5,
      baseUrl: "http:/yjpsix.com//avatar",
      id,
      size,
    },
  });
});

router.get("/nickname", async (ctx, next) => {
  let id = Math.floor(Math.random() * (1, 1000));
  // console.log(id)
  const result = await Name.findOne({
    where: { id },
  });

  ctx.body = new SuccessModel({ data: result.dataValues });
});

module.exports = router;
