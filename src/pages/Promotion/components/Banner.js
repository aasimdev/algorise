import React from 'react'
import { Image } from 'react-bootstrap'

const PromotionBanner = (props) => {
    const { thumbnail, url } = props;
    return (
        <div className='video bannerprom'>
            <Image src={thumbnail} className='fluid' alt='Video' />
            <div className='video__content'>
                <div className='video__content__link'>
                    <a href={url}>{thumbnail}</a>
                    <a href='#'> <i className='icon-copy'></i> </a>
                </div>
            </div>
        </div>
    )
}

export default PromotionBanner