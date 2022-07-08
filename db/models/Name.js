/**
 * @description 博客
 * @author big yang
 */

const seq = require("../seq");
const { STRING, INTEGER } = require("../type");

const Name = seq.define("name", {
  name: {
    type: STRING,
    allowNull: false,
    comment: "随机昵称",
  },
});

module.exports = Name;
