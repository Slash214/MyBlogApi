/**
 * @description 失败信息集合， 包括 errno 和 message
 * @author 爱呵呵
 */

module.exports = {
  NoRouterPage: {
    code: 404,
    message: "the current route is empty",
  },
  ParameterError: {
    code: 5001,
    message: "请求参数不完整",
  },
  ArticleIdNull: {
    code: 5002,
    message: "文章不存在！",
  },
  LoginError: {
    code: 5003,
    message: '账号密码不正确'
  }
};
