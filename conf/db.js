
/**
 * @description 存储配置
 * @author big yang
 */

// 就不用本地服务器，使用阿里云服务器
const { isProd } = require('../env.js')

let MYSQL_CONF = {}

if (isProd) {
    // 线上数据库
    MYSQL_CONF = {
        host: '',
        user: '',
        password: '',
        prot: '3306',
        database: 'blog'
    }
} else {
    // MYSQL_CONF = {
    //     host: '127.0.0.1',
    //     user: 'root',
    //     password: 'lovehehe',
    //     prot: '3306',
    //     database: 'blog'
    // } 
    MYSQL_CONF = {
        host: '47.100.249.55',
        user: 'blog',
        password: 'chYniTSiSWz6bGhF',
        prot: '3306',
        database: 'blog'
    } 
}

// console.log(MYSQL_CONF)
module.exports = { MYSQL_CONF }