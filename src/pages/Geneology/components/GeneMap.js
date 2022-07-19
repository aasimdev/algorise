import React from 'react'
import { Container, Image } from 'react-bootstrap'
import desktopMap from '../../../assets/img/usermap.png'
import mobileMap from '../../../assets/img/map.png'
import polygon from '../../../assets/img/polygon.svg'
import polygonlarge from '../../../assets/img/polygon-lg.svg'


const GeneMap = () => {
    return (
        <>
            <section className='mapstucture'>
                <Container>
                    <div className='mapstucture__inner'>
                        <div className='geonology__main'>
                            <ul class="tree vertical">
                                <li>
                                    <div className='geonology__parent'>
                                        <Image src={polygonlarge} alt="polygon" />
                                        <p>You</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className='geneology__item'>
                                                <Image src={polygon} alt="polygon" />
                                                <p>A</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>A<sup>1</sup> </p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className='geneology__item'>
                                                                <Image src={polygon} alt="polygon" />
                                                                <p>A<span>1.1</span> </p>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className='geneology__item'>
                                                                        <Image src={polygon} alt="polygon" />
                                                                        <p>A<span>1.1.1</span> </p>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <div className='geneology__item'>
                                                                                <Image src={polygon} alt="polygon" />
                                                                                <p>A<span>1.1.1.1</span> </p>
                                                                            </div>

                                                                        </li>
                                                                        <li>
                                                                            <div className='geneology__item'>
                                                                                <Image src={polygon} alt="polygon" />
                                                                                <p>A<span>1.1.1.2</span> </p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className='geneology__item'>
                                                                                <Image src={polygon} alt="polygon" />
                                                                                <p>A<span>1.1.1.3</span> </p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <div className='geneology__item'>
                                                                        <Image src={polygon} alt="polygon" />
                                                                        <p>A<span>1.1.2</span> </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='geneology__item'>
                                                                        <Image src={polygon} alt="polygon" />
                                                                        <p>A<span>1.1.3</span> </p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className='geneology__item'>
                                                                <Image src={polygon} alt="polygon" />
                                                                <p>A<span>1.2</span> </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='geneology__item'>
                                                                <Image src={polygon} alt="polygon" />
                                                                <p>A<span>1.3</span> </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>A<sup>2</sup> </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>A<sup>3</sup> </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className='geneology__item'>
                                                <Image src={polygon} alt="polygon" />
                                                <p>B</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>B<sup>1</sup> </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>B<sup>2</sup> </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>B<sup>3</sup> </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className='geneology__item'>
                                                <Image src={polygon} alt="polygon" />
                                                <p>C</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>C<sup>1</sup> </p>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>C<sup>2</sup> </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='geneology__item'>
                                                        <Image src={polygon} alt="polygon" />
                                                        <p>C<sup>3</sup> </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>




                            {/* <div className='geneology__box'>

                                <div className='geneology__item'>
                                    <Image src={polygon} alt="polygon" />
                                    <p>B</p>
                                </div>
                                <div className='geneology__item'>
                                    <Image src={polygon} alt="polygon" />
                                    <p>C</p>
                                </div>
                            </div>
                            <div className='geneology__box'>

                                <div className='geneology__item'>
                                    <Image src={polygon} alt="polygon" />
                                    <p>A<sup>2</sup> </p>
                                </div>
                                <div className='geneology__item'>
                                    <Image src={polygon} alt="polygon" />
                                    <p>A<sup>3</sup> </p>
                                </div>
                            </div> */}



                        </div>
                        <Image src={desktopMap} className='fluid d-none d-xl-block' alt='map' />
                        <Image src={mobileMap} className='fluid d-xl-none' alt='map' />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GeneMap