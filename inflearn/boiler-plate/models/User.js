const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 띄어쓰기에 대한 방어
        unique: 1
    },
    password: {
        type: String,
        maxlength: 10
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {     // 관리자
        type: Number,
        defalut: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {     // 유효기간
        type: Number
    }
})

// 스키마를 모델로 만들어야함
const User = mongoose.model('User', userSchema)

module.exports = { User }