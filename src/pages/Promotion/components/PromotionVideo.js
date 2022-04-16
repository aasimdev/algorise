import React from 'react'
import { Container, Image } from 'react-bootstrap'
import videoThumbnail from '../../../assets/img/videos.png'
import Video from './Video'

const PromotionVideo = () => {
    return (
        <section className='promotion videopromotion'>
            <Container>
                <div className='promotion__wrap'>
                    <div className='promotion__content'>
                        <h2>Videos</h2>
                        <p>Promo videos to share with your team members and introduce them to Geminus or to use them for your own landing pages</p>
                    </div>
                    <div className='promotion__videos'>
                        <Video title="We Are Algorise.io" thumbnail={videoThumbnail} url="https://youtu.be/jd736h9" />
                        <Video title="Algorise USDC Official Video" thumbnail={videoThumbnail} url="https://youtu.be/jd736h9" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PromotionVideo