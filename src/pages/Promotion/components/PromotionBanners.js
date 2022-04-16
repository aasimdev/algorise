import React from 'react'
import { Container, Image } from 'react-bootstrap'
import BannerThumbnail from '../../../assets/img/brandbanner.png'
import PromotionBanner from './Banner'

const PromotionBanners = () => {
    return (
        <section className='promotion'>
            <Container>
                <div className='promotion__wrap'>
                    <div className='promotion__content'>
                        <h2>Banners</h2>
                        <p>One of the most effective way to promote your link online, just copy the banner code and insert it on your website or in your marketing campaign</p>
                    </div>
                    <div className='promotion__videos'>
                            <PromotionBanner thumbnail={BannerThumbnail} url="https://Algorise.io/b/8d43fd" />
                            <PromotionBanner thumbnail={BannerThumbnail} url="https://Algorise.io/b/8d43fd" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PromotionBanners