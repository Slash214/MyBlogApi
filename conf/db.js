/**
 * @descrion 数据库配置文件, 这里放你的Mysql 数据库 以及 链接的账号和密码
 * @author  爱呵呵
 */

// 判断是否是本地环境
const { isProd } = require('../env.js')

/**
 * @params host  主机地址 // 本地为127.0.0.1
 * @params user 数据库账号
 * @params password 数据库密码
 * @params prot  数据库端口号 默认3306
 * @params database  数据库名称
 */

let MYSQL_CONF = {}

if (isProd) {
    MYSQL_CONF = {
        host: '',
        user: '',
        password: '',
        prot: '3306',
        database: '',
    }
} else {
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: 'xianhan@777',
        prot: '3306',
        database: 'blog',
    }
}

module.exports = { MYSQL_CONF }
