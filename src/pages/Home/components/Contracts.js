import React from 'react'
import { Container } from 'react-bootstrap'

const Contracts = () => {
    return (
        <section>
            <Container>
                <div className='contractMain'>
                    <div className='contractMainControl'></div>
                    <div className='contractMain__inner'>
                        <p>$USDC Contracts</p>
                        <ul>
                            <li> <span>1000 $USDC Package</span>
                                <div className="contractMain__action">
                                    <a href='#'><i className="icon-copy"></i></a>
                                    <a href='#'><i className="icon-link"></i></a>
                                </div>
                            </li>
                            <li> <span>100 $USDC Package</span>
                                <div className="contractMain__action">
                                    <a href='#'><i className="icon-copy"></i></a>
                                    <a href='#'><i className="icon-link"></i></a>
                                </div>
                            </li>
                            <li> <span>100 $USDC Package</span>
                                <div className="contractMain__action">
                                    <a href='#'><i className="icon-copy"></i></a>
                                    <a href='#'><i className="icon-link"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contracts