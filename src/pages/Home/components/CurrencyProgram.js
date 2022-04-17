import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

const CurrencyProgram = () => {
  const [value, setValue] = useState(0);


  return (
    <section className='prgramWrap'>
      <Container>
        <h1><span>Algorise</span> Programs</h1>
        <div className='prgramWrap__inner'>
          <div className='prgram__piechart'>
            <figure className="pie-chart" style={{ '--percentage': '40%' }} >
              <span data-title="ROI" data-percentage="70%"></span>
            </figure>
          </div>
          <div className='investProgramM'>
            <div className='investMain programstack'>
              <ul>
                <li>
                  <div className='investTitle'>
                    <h5>0 $USDC</h5>
                    <p>Invest</p>
                  </div>
                </li>
                <li>
                  <div className='investTitle'>
                    <h5>0 $USDC</h5>
                    <p>Payout</p>
                  </div>
                </li>
                <li>
                  <div className='investTitle'>
                    <h5>0 $USDC</h5>
                    <p>Yields Allocated</p>
                  </div>
                  <button className='theme-btn'>Claim</button>
                </li>

                <li>
                  <div className='investTitle'>
                    <h5>0 $USDC</h5>
                    <p>Commissions Allocated</p>
                  </div>
                  <button className='theme-btn'>Claim</button>
                </li>
              </ul>
            </div>
            <div className='priceAmount programstack'>
              <div className='priceAmount__inner'>
                <div className='price__range'>
                  <div className='priceStart sprice'>200 USDC</div>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                    tooltip="off"
                  />
                  <div className='priceEnd sprice'>100 USDC</div>
                </div>
                <div className='priceContent'>
                  <ul>
                    <li>
                      <div className='investTitle'>
                        <h5>0 $USDC</h5>
                        <p>Price</p>
                      </div>
                    </li>
                    <li>
                      <div className='investTitle'>
                        <h5>0 $USDC</h5>
                        <p>Amount</p>
                      </div>
                    </li>
                    <li>
                      <div className='investTitle'>
                        <h5>0</h5>
                        <p>Units</p>
                      </div>
                    </li>

                  </ul>
                  <button className='theme-btn'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section >
  )
}

export default CurrencyProgram