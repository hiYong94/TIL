import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    // DOM이 실행되자마자 해야할 행동
    // 1. mongodb에서 값 가져오기
    useEffect(() => {
        let variables = {
            userFrom,
            movieId
        }

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
                setFavoriteNumber(response.data.favorited)
            } else {
                alert('정보를 가져오는데 실패 했습니다..')
            }
        })
    }, [])

    return (
        <div>
            <button>{Favorited ? " Not Favorite" : "Add to Favroite " } {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
