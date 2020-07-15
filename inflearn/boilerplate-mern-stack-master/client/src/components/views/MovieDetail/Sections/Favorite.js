import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd'

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    let variables = {
        userFrom: userFrom,
        movieId: movieId,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }

    // DOM이 실행되자마자 해야할 행동
    // 1. mongodb에서 값 가져오기
    useEffect(() => {
        // fetch 혹은 Axios를 사용해서 데이터를 가져온다.
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                setFavoriteNumber(response.data.favoriteNumber)
                if(response.data.success) {
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })

        Axios.post('/api/favorite/favorited', variables)
        .then(response => {
            if(response.data.success) {
                setFavorited(response.data.favorited)
            } else {
                alert('정보를 가져오는데 실패 했습니다..')
            }
        })
    }, [])

    // 이미 좋아요가 눌렸는지 안눌렸는지
    const onClickFavorite = () => {
        if(Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if(response.data.success) {
                    setFavoriteNumber(FavoriteNumber - 1)
                    setFavorited(!Favorite)
                } else {
                    alert('Favorite 리스트에서 지우는 걸 실패했습니다.')
                }
            })
        } else {
            Axios.post('/api/favorite/addToFavorite', variables)
            .then(response => {
                if(response.data.success) {
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorite)
                } else {
                    alert('Favorite 리스트에서 추가하는 걸 실패했습니다.')
                }
            })
        }
    }

    return (
        <div>
            <Button onClick={onClickFavorite}>{ Favorited ? " Not Favorite" : "Add to Favroite " } {FavoriteNumber}</Button>
        </div>
    )
}

export default Favorite
