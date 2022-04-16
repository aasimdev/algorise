import React from 'react'
import { Container } from 'react-bootstrap'
import Circle from './Circle'

const CalculationCircles = () => {

    return (
        <section>
            <Container>
                <div className='circleMain'>
                    <Circle calTitle="Profits" calValue="0 $USDC" />
                    <Circle calTitle="Team" calValue="0" />
                    <Circle calTitle="Ratio" calValue="0%" />
                    <Circle calTitle="Members Total" calValue="239 914" />
                    <Circle calTitle="Turnover MATIC" calValue="65 000 000" />
                    <Circle calTitle="Transactions Made" calValue="997 950" />
                    <Circle calTitle="Members Received $USDC" calValue="32 000 000" />
                </div>
            </Container>
        </section>
    )
}

export default CalculationCircles