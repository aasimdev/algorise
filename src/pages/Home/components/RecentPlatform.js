import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Circle from './Circle'

const RecentPlatform = () => {
    return (

        <section className='recentWrap'>
            <Container>
                <div className='recentPlatformMain'>
                    <h2> <span>Platform</span> Recent Activity</h2>
                    <div className='recentPlatformMain__inner'>
                        <div className='recentBox__circles'>
                            <Circle calTitle="Investments" calValue="0 $USDC" />
                            <Circle calTitle="Dividends" calValue="0 $USDC" />
                            <Circle calTitle="Claims" calValue="0 $USDC" />
                            <Circle calTitle="Commission" calValue="0 $USDC" />
                        </div>
                        <div className='recentplatform__table'>
                            <Table bordered variant="dark">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className='recentUser'>
                                                <i className='icon-add-user'></i>
                                                <p>New user joined</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='userID'>
                                                <span>ID 2398476</span>
                                            </div>
                                        </td>
                                        <td> 1 minute ago </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='recentUser'>
                                                <i className='icon-users'></i>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='userID'>
                                                <span>ID 2398476</span>
                                            </div>
                                        </td>
                                        <td> 2 minute ago </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='recentUser'>
                                                <i className='icon-lock-book'></i>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='userID'>
                                                <span>ID 2398476</span>
                                            </div>
                                        </td>
                                        <td> 4 minute ago </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='recentUser'>
                                                <i className='icon-envolpe'></i>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='userID'>
                                                <span>ID 2398476</span>
                                            </div>
                                        </td>
                                        <td> 6 minute ago </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='recentUser'>
                                                <i className='icon-check-circle'></i>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='userID'>
                                                <span>ID 2398476</span>
                                            </div>
                                        </td>
                                        <td> 7 minute ago </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='recentUser'>
                                                <i className='icon-backword'></i>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='userID'>
                                                <span>ID 2398476</span>
                                            </div>
                                        </td>
                                        <td> 8 minute ago </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default RecentPlatform