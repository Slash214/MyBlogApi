/**
 * @description 文章标签
 * @author big yang
 */

 const seq = require('../seq')
 const { STRING } = require('../type')
 
 const Tag = seq.define('tag', {
    name: {
        type: STRING,
        unique: true,
        allowNull: false,
        comment: '标签'
    }
 })
 
 module.exports = Tag