/**
 * @description 博客详情
 * @author 爱呵呵
 */

const seq = require('../seq')
const { LONGTEXT, INTEGER } = require('../type')

const BlogDetail = seq.define('blogdetail', {
    blogid: {
       type: INTEGER,
       allowNull: false,
       comment: '博客ID'
    },
    content: {
        type: LONGTEXT,
        allowNull: false,
        comment: '博客详情内容为MD文档'
    },
})

module.exports = BlogDetail