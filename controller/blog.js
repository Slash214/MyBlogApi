/**
 * @description 博客列表的增删查改
 * @author big yang
 */


const { Blog } = require('../db/models')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { ParameterError, ArticleIdNull } = require('../models/ErrorInfo')
const { formatBlog } = require('../utils/format')

class BlogCtl {
    async getList (ctx) {
       const result = await Blog.findAndCountAll()
       ctx.body = new SuccessModel(formatBlog(result))
    }
    async create (ctx) {
        const { title, desc, tag,author,look, cover} = ctx.request.body
        if (!title || !desc || !tag) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }
        
        const result = await Blog.create({
            title,
            desc,
            tag,
            author,
            look,
            cover,
        })

        let str = result.dataValues ? '创建成功' : '创建失败'
        ctx.body = new SuccessModel(str)
        
    }
    async update (ctx) {
        // const item = ctx.request.body
        const { id, title, author, cover, desc, tag, look } = ctx.request.body

        if (!id) {
            ctx.body = new ErrorModel(ArticleIdNull)
            return
        }

        const updateData = { title, author, cover, desc, tag, look }
        const result = await Blog.update(updateData, {
            where: { id }
        })

        let str = result[0] > 0 ? '更新成功' : 'SQL返回状态不为1，状态异常'
        // console.log(result)
        ctx.body = new SuccessModel(str)
    }
    async del (ctx) {
        const { id } = ctx.request.query
        
        if (!id) {
            ctx.body = new ErrorModel(ArticleIdNull)
            return
        }

        const result = await Blog.destroy({ where: { id } })
        let str = result > 0 ? '删除成功' : 'SQL返回状态不为1，状态异常'
        ctx.body = new SuccessModel(str)
    }
}

module.exports = new BlogCtl()