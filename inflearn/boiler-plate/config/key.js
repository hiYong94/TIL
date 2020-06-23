// 환경변수
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./product')
} else {
    module.exports = require('./development')
}