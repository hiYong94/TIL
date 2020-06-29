const express = require('express')
const app = express()
const path = require("path")
const cors = require('cors')

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const config = require("./config/key")

// 1. application/x-www-form-urlencoded 로 가져오는 것을 가능하게함
// 2. application/json 정보를 가져오는 것을 가능하게함
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const mongoose = require("mongoose")
const connect = mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => console.log(error)
)

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'))
app.use('/api/users', require('./routes/users'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (request, response) => {
        response.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
    })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Example app listening at ${port}`))