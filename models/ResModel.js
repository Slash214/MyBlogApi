/**
 * @description 数据返回模型
 * @author 爱呵呵
 */

// 基础模块
class BaseModel {
    constructor({ state, data, message, code, total }) {
        this.state = state
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
        if (code) {
            this.code = code
        }
        if (total) {
            this.total = total
        }
    }
}

// 成功返回模型
class SuccessModel extends BaseModel {
    constructor({ data , total, message } ) {
        super({
            code: 200,
            data,
            total,
            message
        })
    }
}

// 失败返回模型
class ErrorModel extends BaseModel {
    constructor({ code, message }) {
        super({
            code,
            message
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}