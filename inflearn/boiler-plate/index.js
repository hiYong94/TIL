const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const config = require('./config/key')

const { User } = require('./models/User.js')


// 1. application/x-www-form-urlencoded 로 가져오는 것을 가능하게함
// 2. application/json 정보를 가져오는 것을 가능하게함
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected ...'))
.catch(error => console.log(error))

app.get('/', (req, res) => res.send('Hello World!, 안녕하세요~'))

app.listen(port, () => console.log(`Example app listening at ${port}`))

// 회원가입을 위한 route 생성 
app.post('/register', (request, response) => {
    
    // client의 request를 받아온다
    // 받아온 request 정보를 database에 저장한다.
    console.log(request.body)
    const user = new User(request.body)

    // mongodb method save()
    user.save((error, userInfo) => {
        if(error) {
            return response.json({ success: false, error})
        }
        return response.status(200).json({
            success: true
        })
    })
})