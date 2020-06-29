const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const moment = require("moment")

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
        minlength: 3
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {     // 관리자
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {     // 유효기간
        type: Number
    }
})

// user 모델에 정보를 저장하기 전에 콜백 함수를 실행함
// pre가 전부 다되고나면 save를 실행한다 -> next를 활용해 미들웨어를 넘김
userSchema.pre('save', function(next) {
    let user = this //myPlaintextPassword 스키마의 정보를 가져오면된다.
    if(user.isModified('password')) {
        // 비밀번호를 암호화한다.
        // saltRounds는 얼마의 길이를 암호화 할 것인가?
        // salt를 먼저 생성 -> Salt를 이용해서 비밀번호를 암호화 해야함
        bcrypt.genSalt(saltRounds, function(error, salt) {
            if(error) {
                next(error)
            }
            bcrypt.hash(user.password, salt, function(error, hash) {
                if(error) {
                    next(error)
                }
    
                // hash된 비밀번호를 user.password에 다시 담아준다.
                user.password = hash
                next()
            })
        })
    } else {    // 비밀번호를 변경하지 않으면 바로 save로 넘어가야한다.
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, callback) {
    // plainPassword 입력된 비밀번호와 암호화된 db 비밀번호 확인
    bcrypt.compare(plainPassword, this.password, function(error, isMatch) {
        if(error) {
            return callback(error)
        }
        callback(null, isMatch)     // 성공이면 isMatch true
    })
}

userSchema.methods.generateToken = function(callback) {
    // jsonwebtoken을 이용해서 token을 생성하기
    let user = this;
    let token = jwt.sign(user._id.toHexString(), 'secretToken')
    let oneHour = moment().add(1, 'hour').valueOf();

    // user._id + 'secretToken' = token
    // ->
    // 'secretToken' -> user._id
    user.tokenExp = oneHour
    user.token = token
    user.save(function(error, user) {
        if(error) {
            return callback(error)
        }
        callback(null, user)
    })
}

userSchema.statics.findByToken = function(token, callback) {
    let user = this

    // 토큰을 가져와서 decode 한다.
    jwt.verify(token, 'secretToken', function(error, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음
        // 클라이언트에서 가져온 토큰과 데이터베이서의 토큰과 비교한다.
        user.findOne({'_id': decoded, 'token': token}, function(error, user) {
            if(error) {
                return error
            }

            callback(null, user)
        })
    })
}

// 스키마를 모델로 만들어야함
const User = mongoose.model('User', userSchema)

module.exports = { User }