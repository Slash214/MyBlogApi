/**
 * @description 博客详情
 * @author big yang
 */

const seq = require('../seq')
const { STRING, LONGTEXT, INTEGER } = require('../type')

const BlogDetail = seq.define('blogdetail', {
    blogid: {
       type: INTEGER,
       allowNull: false,
       comment: '博客ID'
    },
    author: {
        type: STRING,
        defaultValue: '大羊',
        comment: '博客作者'
    },
    content: {
        type: LONGTEXT,
        allowNull: false,
        comment: '博客详情内容为MD文档'
    },
})

module.exports = BlogDetail