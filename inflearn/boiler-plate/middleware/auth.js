const { User } = require('../models/User')

// 인증처리를 하는 곳
let auth = (request, response, next) => {

    // 1. 클라이언크 쿠키에서 토큰을 가져온다.
    let token = request.cookies.x_auth

    // 2. 토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (error, user) => {
        if(error) {
            throw error
        }
        if(!user) {
            return response.json({isAuth: false, error: true })
        }

        request.token = token
        request.user = user
        next() // => middleware 처리를 끝내고 index에서 auth를 처리하는 route에서 처리
    })

    // 3. 유저가 있으면 인증 Okay, 없으면 No!
}

module.exports = { auth }