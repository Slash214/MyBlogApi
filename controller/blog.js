/**
 * @description 博客列表的增删查改
 * @author 爱呵呵
 */

const { Blog, BlogDetail, Comment } = require('../db/models')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { ParameterError, ArticleIdNull, LoginError } = require('../models/ErrorInfo')
const { formatBlog, formatBlogDetails } = require('../utils/format')
const jwt = require('jsonwebtoken');
const { Op } = require("../db/type");

class BlogCtl {
    async getList (ctx) {
       let { pageSize = 20, pageIndex = 1, tag = '' } = ctx.request.query 
       
        pageIndex = +pageIndex ? +pageIndex - 1 : +pageIndex
        let whereOpt = { state: 1 }
        if (tag)  whereOpt['tag'] =  { [Op.like]: `%${tag}%`}
        const result = await Blog.findAndCountAll({
           where: whereOpt,
           order: [['id', 'desc']],
           limit: +pageSize,
           offset: pageSize * pageIndex
       })
       const item = formatBlog(result)
       const total = result.count
       ctx.body = new SuccessModel({ data: item, total })
    }
    async del (ctx) {
        const { id } = ctx.request.query
        
        if (!id) {
            ctx.body = new ErrorModel(ArticleIdNull)
            return
        }

        // 真删除使用sql的delete 就可以了，但这里我使用了 软删除
        // const result = await Blog.destroy({ where: { id } })
        const result = await Blog.update({ state: 0 }, {
            where: { id }
        })
        let str = result[0] > 0 ? '删除成功' : '未找到该文章'
        ctx.body = new SuccessModel({ message: str })
    }
    async getDetails(ctx) {
        const { blogid } = ctx.request.query
        if (!blogid) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }
        
        const list = await BlogDetail.findOne({
            where: { blogid }
        }) 

        if (list === null) {
            ctx.body = new ErrorModel(ArticleIdNull)
            return
        }
        // console.log(list)
        ctx.body = new SuccessModel({ data: formatBlogDetails(list) })
    }
    async fixblog(ctx) {
        let item = ctx.request.body, updateData = {}, details = {}
        if (!item?.id) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }

        Reflect.ownKeys(item).forEach((key) => {
            // console.log(key, item[key])
            if (item[key] && key !== 'id' && key !== 'content') {
                updateData[key] = item[key]
            }

            if (key === 'content' && item[key] ) {
                details[key] = item[key]
            }
        })
   
        // console.log('更新博客参数', updateData)
        // console.log('更新博客详情', details)
        

        const r1 = await Blog.update(updateData, {
            where: { id: item.id }
        })
        
        const r2 = await BlogDetail.update(details, {
            where: { blogid: item.id }
        })

        let blogtitle = r1[0] > 0 ? '博客内容更新成功' : '暂无变化 | 也有可能SQL错误'
        let detailtitle = r2[0] > 0 ? '博客详情更新成功' : '暂无变化 | 也有可能SQL错误'
        ctx.body = new SuccessModel({ data: [blogtitle, detailtitle], message: '更新状态' })
    }
    async addblog(ctx) {
        const { title, content, tag, cover, desc } = ctx.request.body
        // 判断内容不能为空
        if (!title || !content || !tag || !cover || !desc) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }

        const r1 = await Blog.create({
            title,
            desc,
            tag,
            cover,
        })
        let blogid = r1?.dataValues?.id || -1
        const r2 = await BlogDetail.create({
            blogid,
            content
        })
        // console.log(r1.dataValues)
        let blog = r1?.dataValues?.id ? '博客增加成功' : '博客增加失败'
        let details = r2?.dataValues?.id ? '博客详情增加成功' : '详情增加失败'
        // console.log(r2.dataValues)
        // if ()
        ctx.body = new SuccessModel({ data: [blog,  details], message: 'success' })
    }
    async selComment(ctx) {
        let { blogid, pageIndex = 1, pageSize = 20 } = ctx.request.query
        
        if (!blogid) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }

        pageIndex = +pageIndex ? +pageIndex - 1 : +pageIndex
        const result = await Comment.findAndCountAll({
           where: { blogId: blogid },
           order: [['id', 'desc']],
           limit: +pageSize,
           offset: pageSize * pageIndex
        })
        // console.log('测试', result)
       const item = formatBlog(result)
       const total = result.count
       ctx.body = new SuccessModel({ data: item, total })
    }
    async addRemake(ctx) {
        const { content, nickname, avatar, blogid } = ctx.request.body 
        
        if (!content || !blogid) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }
 
        const result = await Comment.create({
            content,
            blogId: blogid,
            avatar,
            nickname,
        })

        // console.log(result?.dataValues)
        let str = result?.dataValues ? '评论成功' : '评论失败'
        ctx.body = new SuccessModel({ message: str })

    }
    async login(ctx) {
        const { username, password } = ctx.request.body 

        if (!username || !password) {
            ctx.body = new ErrorModel(ParameterError)
            return
        }
        
        // 这里就模拟登陆，直接返回数据。如果需要真实的就只需要去数据库增加然后这里查找就可以了
        let obj = {
            id: 7,
            username,
            avatar: 'https://img.pinkyang.cn/2022.07.09-4403.jpg',
            nickname: '爱呵呵',
            level: 'max',
            name: 'SuperAdmin'
        }

        if (username !== 'super' || password !== 'xianhan@123') {
            ctx.body = new ErrorModel(LoginError) 
            return
        } 
    
        let token = jwt.sign(obj, 'yjp_CHINANO1^he%#k&0508s*', { expiresIn: '7d' })
        obj['token'] = token
        ctx.body = new SuccessModel({ message: '登陆成功', data: obj })
    }
}

module.exports = new BlogCtl()