/**
 * @description 博客
 * @author 爱呵呵
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../type')

const Blog = seq.define('blog', {
    title: {
        type: STRING,
        allowNull: false,
        comment: '博客标题'
    },
    author: {
        type: STRING,
        defaultValue: '大羊',
        comment: '博客作者'
    },
    cover: {
        type: STRING,
        comment: '文章封面图'
    },
    desc: {
        type: STRING,
        allowNull: false,
        comment: '博客文章简介'
    },
    tag: {
        type: STRING,
        allowNull: false,
        comment: '博客文章的标签，- 分隔符转数组的'
    },
    look: {
        type: INTEGER,
        defaultValue: 0,
        comment: '文章浏览量'
    },
    state: {
         type: INTEGER,
        defaultValue: 1,
        comment: '状态，1正常， 0删除状态'
    }
})

module.exports = Blog