const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = mongoose.Schema({
    userFrom : {
        type: Schema.Types.ObjectId, // index를 의미한다.
        ref: 'User'
    },
    movieId : {
        type: String
    },
    movieTitle : {
        type: String
    },
    moviePost : {
        type: String
    },
    movieRunTime : {
        type: String
    },
}, {timestamps: true})


// 스키마를 모델로 만들어야함
const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = { Favorite }