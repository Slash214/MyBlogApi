/**
 * @description 评论信息
 * @author  爱呵呵
 */

const seq = require("../seq");
const { STRING, INTEGER } = require("../type");

const Comment = seq.define("comment", {
  content: {
    type: STRING,
    allowNull: false,
    comment: "评论内容",
  },
  blogId: {
    type: INTEGER,
    allowNull: false,
    comment: "评论的博客ID",
  },
  nickname: {
    type: STRING,
    defaultValue: "默认昵称",
    comment: "昵称",
  },
  avatar: {
    type: STRING,
    comment: "头像",
  },
});

module.exports = Comment;
