/**
 * @description 数据模型入口文件
 * @author 爱呵呵
 */

const Blog = require('./Blog')
const BlogDetail = require('./BlogDetail')
const Tag = require('./Tag')
const Comment = require('./Comment')

module.exports = {
    Tag,
    BlogDetail,
    Blog,
    Comment,
}
