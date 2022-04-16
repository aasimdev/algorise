import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Map from '../../../assets/img/usermap.png'


const GeneMap = () => {
    return (
        <>
            <section className='mapstucture'>
                <Container>
                    <div className='mapstucture__inner'>
                        <Image src={Map} className='fluid' alt='map' />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GeneMap