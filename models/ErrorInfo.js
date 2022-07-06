/**
 * @description 失败信息集合， 包括 errno 和 message
 * @author big yang
 */

module.exports = {
  NoRouterPage: {
    code: 404,
    message: "the current route is empty",
  },
  ParameterError: {
    code: 4001,
    message: "请求参数不完整",
  },
  ArticleIdNull: {
    code: 4002,
    message: "文章不存在！",
  },
};
