import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const AboutBox = (props) => {

    const { title, description, img } = props;
    return (
        <section className='aboutBox'>
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={4} className="order-1 order-lg-0">
                        <div className='aboutBox__head'>
                            <h2>{title}</h2>
                        </div>
                    </Col>
                    <Col lg={4} className="order-0 order-lg-1">
                        <div className='aboutBox__image'>
                            <Image src={img} className="fluid" alt='about image' />
                        </div>
                    </Col>
                    <Col lg={4} className="order-2 order-lg-2">
                        <div className='aboutBox__content'>
                            {description}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutBox