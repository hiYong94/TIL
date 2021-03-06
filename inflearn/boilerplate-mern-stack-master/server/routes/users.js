const express = require('express')
const router = express.Router()
const { User } = require("../models/User")
const { auth } = require("../middleware/auth")

// auth 라는 middleware 로 중간처리
router.get('/auth', auth, (request, response) => {
    // middleware가 성공적으로 처리되면 Authentication 이 True
    
    // 성공적으로 처리되면 유저의 정보를 전달함
    response.status(200).json({
        _id: request.user._id,
        isAdmin: request.user.role === 0 ? false : true,
        isAuth: true,
        email: request.user.email,
        name: request.user.name,
        lastname: request.user.lastname,
        role: request.user.role,
        image: request.user.image
    })
})

// 회원가입을 위한 route 생성 
router.post('/register', (request, response) => {
    
    // client의 request를 받아온다
    // 받아온 request 정보를 database에 저장한다.
    const user = new User(request.body)

    // mongodb method save() -> 직전에 bcrypt로 암호화
    user.save((error, userInfo) => {
        if(error) {
            return response.json({ success: false, error})
        }
        return response.status(200).json({
            success: true
        })
    })
})

router.post('/login', (request, response) => {
    // 1. 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    // 2. 요청된 이메일이 있다면 비밀번호의 일치여부를 확인한다.
    // 3. 정보가 모두 일치한다면 token을 생성한다.

    // mongodb Method -> findOne()
    User.findOne({ email: request.body.email }, (error, user) => {
        if(!user) {
            return response.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.'
            })
        }

        // 요청된 이메일이 데이터베이스에 있다면 비밀번호를 확인
        user.comparePassword(request.body.password, (error, isMatch) => {
            if(!isMatch) {
                return response.json({
                    loginSuccess: false,
                    message: '비밀번호가 틀렸습니다.'
                })
            }
            
            // 비밀번호가 일치하면 토큰 생성 - jsonwebtoken
            user.generateToken((error, user) => {
                if(error) {
                    return response.status(400).send(error)
                }

                response.cookie("w_authExp", user.tokenExp)
                // 토큰을 저장한다. 어디에? -> 쿠키, 로컬스토리지 -> (다양함) 해당에서는 쿠키를 이용함
                response.cookie('x_auth', user.token)
                .status(200)
                .json({
                    loginSuccess: true,
                    userId: user._id
                })
            })
        })
    })
})

router.get('/logout', auth, (request, response) => {
    User.findOneAndUpdate({ _id: request.user._id }, { token: '', tokenExp: "" }, (error, user) => {
        if(error) {
            return response.json({ success: false, error })
        }
        return response.status(200).send({
            success: true
        })
    })
})

module.exports = router