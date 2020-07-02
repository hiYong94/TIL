// rfce functional component
import React from 'react'
import { Col } from 'antd'

function GridCards(props) {
    if(props.lendingPage) {
        return (
            // 전체사이즈가 24
            // {Col} xxl, xl, lg, md, sm, xs
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName}/>
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            // 전체사이즈가 24
            // {Col} xxl, xl, lg, md, sm, xs
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName}/>
                </div>
            </Col>
        )
    }
    
}

export default GridCards