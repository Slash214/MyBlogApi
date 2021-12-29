/**
 * @description 数据返回模型
 * @author 爱呵呵
 */


// 基础模块
class BaseModel {
    constructor({ state, data, message, code }) {
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
    }
}

// 成功返回模型
class SuccessModel extends BaseModel {
    constructor(data = {}, ) {
        super({
            state: 1,
            code: 200,
            data
        })
    }
}

// 失败返回模型
class ErrorModel extends BaseModel {
    constructor({ code, message }) {
        super({
            state: 0,
            code,
            message
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}