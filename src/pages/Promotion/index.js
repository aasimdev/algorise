import React from 'react'
import PromotionBanners from './components/PromotionBanners'
import PromotionVideo from './components/PromotionVideo'
import PromotionDecks from './components/PromotionDecks'
const Promotion = () => {
    return (
        <>
            <PromotionVideo />
            <PromotionBanners />
            <PromotionDecks />
        </>
    )
}

export default Promotion