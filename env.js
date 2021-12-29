/**
 * @description 环境变量
 * @author big yang
 */

const ENV = process.env.NODE_ENV

module.exports = {
    isDev: ENV === 'dev',
    isProd: ENV === 'production', 
}