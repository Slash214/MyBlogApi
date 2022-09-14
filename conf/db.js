/**
 * @description 存储配置
 * @author big yang
 */


const { isProd } = require('../env.js')

let MYSQL_CONF = {}

if (isProd) {
    // 线上数据库
    MYSQL_CONF = {
        host: '',
        user: '',
        password: '',
        prot: '3306',
        database: ''
    }
} else {
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: 'xianhan@777',
        prot: '3306',
        database: 'blog'
    } 
}

// console.log(MYSQL_CONF)
module.exports = { MYSQL_CONF }