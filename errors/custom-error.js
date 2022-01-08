class customErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustoError = (msg, statusCode) => {
    return new customErrorHandler(msg, statusCode)
}
module.exports = { createCustoError, customErrorHandler }