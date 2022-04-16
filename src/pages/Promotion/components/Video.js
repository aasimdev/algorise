import React from 'react'
import { Image } from 'react-bootstrap'

const Video = (props) => {
    const { title, thumbnail, url } = props;
    return (
        <div className='video'>
            <Image src={thumbnail} className='fluid' alt='Video' />
            <div className='video__content'>
                <h4>{title}</h4>
                <div className='video__content__link'>
                    <a href='#'>{url}</a>
                    <a href='#'> <i className='icon-copy'></i> </a>
                </div>
            </div>
        </div>
    )
}

export default Video