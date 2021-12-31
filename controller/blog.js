/**
 * @description 博客列表的增删查改
 * @author big yang
 */

const { Blog, BlogDetail } = require('../db/models')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { ParameterError, ArticleIdNull } = require('../models/ErrorInfo')
const { formatBlog, formatBlogDetails } = require('../utils/format')

class BlogCtl {
    async getList (ctx) {
       let { pageSize = 20, pageIndex = 1 } = ctx.request.query 
       
       pageIndex = +pageIndex ? +pageIndex - 1 : +pageIndex
       const result = await Blog.findAndCountAll({
           order: [['id', 'desc']],
           limit: +pageSize,
           offset: pageSize * pageIndex
       })
       const item = formatBlog(result)
       const total = result.count
       ctx.body = new SuccessModel({ data: item, total })
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
            author: author ? author : '大羊',
            look,
            cover,
        })

        let str = result.dataValues ? '创建成功' : '创建失败'
        ctx.body = new SuccessModel({message: str })
        
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
        ctx.body = new SuccessModel({ message: str })
    }
    async del (ctx) {
        const { id } = ctx.request.query
        
        if (!id) {
            ctx.body = new ErrorModel(ArticleIdNull)
            return
        }

        const result = await Blog.destroy({ where: { id } })
        let str = result > 0 ? '删除成功' : 'SQL返回状态不为1，状态异常'
        ctx.body = new SuccessModel({ message: str })
    }

    async xqcreate(ctx) {
        const { content, blogid, author } = ctx.request.body

        if (!blogid || !content) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }
         
        const [user, created] = await BlogDetail.findOrCreate({
            where: { blogid },
            defaults: {
                blogid,
                author: author ? author : '大羊',
                content
            }
        })

        let str = created ? '详情增加成功' : '已存在当前详情'
        ctx.body = new SuccessModel({ message: str })
    }

    async getDetails(ctx) {
        ctx.body = new SuccessModel('测试详情列表')
        const { blogid } = ctx.request.query
        
        if (!blogid) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }
        
        const list = await BlogDetail.findOne({
            where: { blogid }
        }) 
        let item = formatBlogDetails(list)
        console.log(item)
        ctx.body = new SuccessModel({ data: item })
    }

    async xqupdate(ctx) {
        ctx.body = new SuccessModel('测试详情修改')
    }
}


module.exports = new BlogCtl()