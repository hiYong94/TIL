const express = require('express')
const router = express.Router()
const { Favorite } = require('../models/Favorite')

router.post('/favoriteNumber', (request, response) => {
    // mongodb에서 favorite 숫자를 가져오기
    Favorite.find({ 'movieId': request.body.movieId })
        .exec((error, info) => {
            if(error) {
                return response.status(400).send(error)
            }

            return response.status(200).json({ success: true, favoriteNumber: info.length })
        })
})

router.post('/favorited', (request, response) => {
    // 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져오기
    Favorite.find({ 'movieId': request.body.movieId, "userFrom": request.body.userFrom })
        .exec((error, info) => {
            if(error) {
                return response.status(400).send(error)
            }
            
            let result = false
            if(info.length !== 0) {
                result = true
            }

            return response.status(200).json({ success: true, favorited: result })
        })
})

router.post('/removeFromFavorite', (request, response) => {
    Favorite.findOneAndDelete({ movieId: request.body.movieId, userFrom: request.body.userFrom })
        .exec((error, document) => {
            if(error) {
                return response.status(400).send(error)
            }

            return response.status(200).json({ success: true, document })
        })
})

router.post('/addToFavorite', (request, response) => {
    const favorite = new Favorite(request.body)

    favorite.save((error, document) => {
        if(error) {
            return response.status(400).send(error)
        }
        return response.status(200).json({ success: true })
    })
})

module.exports = router