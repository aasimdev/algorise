import React from 'react'
import { Container } from 'react-bootstrap'
import Circle from '../../Home/components/Circle'
import fourStar from '../../../assets/img/four-star.svg'

const TotalRanking = () => {
    return (
        <section className='totalrankingMain'>
            <Container>
                <div className='totalrankingMain__inner'>
                    <div className='rankingCircles'>
                        <Circle calTitle="Ranking" calStar={fourStar} />
                        <Circle calTitle="Total Sales" calValue="$25000" />
                    </div>
                    <div className='rankingList'>
                        <div className='contractMain'>
                            <div className='contractMainControl'></div>
                            <div className='contractMain__inner'>
                                <ul>
                                    <li>
                                        <p>Direct Referal</p>
                                        <span>7 People</span>
                                    </li>
                                    <li>
                                        <p>Unlocked Level</p>
                                        <span>Level 7</span>
                                    </li>
                                    <li>
                                        <p>Total Team</p>
                                        <span>237</span>
                                    </li>
                                    <li>
                                        <p>Current Month Sales</p>
                                        <span>$16000</span>
                                    </li>
                                    <li>
                                        <p>Total Sales</p>
                                        <span>$391600</span>
                                    </li>
                                    <li>
                                        <p>Total Commission</p>
                                        <span>$295700</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TotalRanking