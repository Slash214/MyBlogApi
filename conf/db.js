/**
 * @description 存储配置
 * @author big yang
 */


const { isProd } = require('../env.js')

let MYSQL_CONF = {}

if (isProd) {
    // 线上数据库
    MYSQL_CONF = {
        host: '47.100.249.55',
        user: 'blog',
        password: 'chYniTSiSWz6bGhF',
        prot: '3306',
        database: 'blog'
    }
} else {
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: 'xianhan@123',
        prot: '3306',
        database: 'blog'
    } 
}

// console.log(MYSQL_CONF)
module.exports = { MYSQL_CONF }