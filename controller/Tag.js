/**
 * @description 标签控制器
 * @author bigyang
 */
const { Tag } = require('../db/models')
const { ParameterError } = require('../models/ErrorInfo')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { formatBlog } = require('../utils/format')
 
class TagCtl {
  async createTag(ctx) {
    const { name } = ctx.request.body
    if (!name) {
        ctx.body = new ErrorModel(ParameterError)
    }

    const [user, created] = await Tag.findOrCreate({
      where: { name }
    })

    console.log(user)
    // console.log(created)
    let str = created ? '创建成功' : '已存在该标签'
    ctx.body = new SuccessModel({ message: str })
  }

  async selectTag(ctx) {
    const result = await Tag.findAndCountAll()
    ctx.body = new SuccessModel({ data: formatBlog(result) })
  }

  async fix(ctx) {
    const { name, id } = ctx.request.body
    if (!id) {
        ctx.body = new SuccessModel(ParameterError)
        return
    }

    const result = await Tag.update({ name }, {
      where: { id }
    })

    let str = result[0] > 0 ? '修改成功' : '修改失败 | 可能错误ID不正确'
    ctx.body = new SuccessModel({ message: str })
  }
}

module.exports = new TagCtl()