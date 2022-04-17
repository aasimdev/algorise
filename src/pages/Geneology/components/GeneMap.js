import React from 'react'
import { Container, Image } from 'react-bootstrap'
import desktopMap from '../../../assets/img/usermap.png'
import mobileMap from '../../../assets/img/map.png'


const GeneMap = () => {
    return (
        <>
            <section className='mapstucture'>
                <Container>
                    <div className='mapstucture__inner'>
                        <Image src={desktopMap} className='fluid d-none d-xl-block' alt='map' />
                        <Image src={mobileMap} className='fluid d-xl-none' alt='map' />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GeneMap