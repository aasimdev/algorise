import React, { useEffect, useState } from 'react'
import { Form, Image, Modal } from 'react-bootstrap';

import TrustWalletImage from '../assets/img/trustwallet.png'
import TokenPocketImage from '../assets/img/tockenpocket.png'
import MetaMaskImage from '../assets/img/metamask.png'
import walletConnect from '../assets/img/trustwallet.png'

import PolygonImage from '../assets/img/polygon.png'
import PolygonDIEFImage from '../assets/img/polygondiwf.png'
import USDImage from '../assets/img/usdcoin.png'
import ProfileImage from '../assets/img/profile.png'
import { useLocation } from 'react-router-dom';

const RightSidebar = () => {

  const location = useLocation();

  const [notificationBox, setNotificationBox] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [walletShow, setWalletShow] = useState(false);
  const [coinsShow, setCoinsShow] = useState(false);


  const coinsShowHandle = () => {
    setCoinsShow(true);
    setWalletShow(false)
  }

  if (location.pathname == '' || location.pathname == '/') return null;
  return (
    <>
      <div className={coinsShow ? 'rightSidebar sidebarCoinProfile' : 'rightSidebar'}>
        <div className='rightSidebar__inner '>

          {/* Primary Navbar, show on default */}
          <ul className='primaryAction'>
            <li >

              {/* Notification Box */}
              {notificationBox && (
                <div className='notificationBox' onMouseLeave={() => setNotificationBox(false)}>
                  <p>Notifications</p>
                  <ul>
                    <li>
                      <a href='#'>
                        <div className='notificationDetail'>
                          <h5>Lorem Ipsum</h5>
                          <span>30 June 2021, Friday</span>
                        </div>
                        <div className='notificationIcon'>
                          <i className='icon-check-circle'></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='notificationDetail'>
                          <h5>Lorem Ipsum</h5>
                          <span>30 June 2021, Friday</span>
                        </div>
                        <div className='notificationIcon'>
                          <i className='icon-backword'></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='notificationDetail'>
                          <h5>Lorem Ipsum</h5>
                          <span>30 June 2021, Friday</span>
                        </div>
                        <div className='notificationIcon'>
                          <i className='icon-envolpe'></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <a href='#' className={notificationBox ? 'activeState' : ''} onMouseEnter={() => setNotificationBox(true)}>
                <div className='notificationsBell'>
                  <i className='icon-bell'></i>
                  <span className='newNotification'></span>
                </div>
              </a>
            </li>
            {!coinsShow &&
              <li>
                <a href='#' className='connectwallBtn' onClick={() => setWalletShow(true)}>Connect Wallet</a>
              </li>
            }
            <li className={searchToggle ? 'activeSearch' : ''} onMouseLeave={() => setSearchToggle(false)}>

              {/* Search */}
              <div className='searchall' onMouseLeave={() => setSearchToggle(false)}>
                <Form.Control type="text" placeholder="Search anything..." />
              </div>
              <a href='#' onMouseEnter={() => setSearchToggle(true)}>
                <div className='searchIcon'>
                  <i className='icon-icon_search'></i>
                </div>
              </a>
            </li>
          </ul>


          {/* After select connect wallet */}
          {coinsShow &&
            <>
              <div className='coins__list'>
                <ul className='coins__list__up'>
                  <li>
                    <a href='#'>
                      <div className='coin'>
                        <Image src={PolygonImage} className='fluid' alt='coin' />
                      </div>
                      <span>Polygon</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <div className='coin'>
                        <Image src={PolygonDIEFImage} className='fluid' alt='coin' />
                      </div>
                      <span>0xD1Ef</span>
                    </a>
                  </li>
                </ul>
                <ul className='coins__list__down'>
                  <li>
                    <a href='#'>
                      <div className='coin'>
                        <Image src={PolygonImage} className='fluid' alt='coin' />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <div className='coin'>
                        <Image src={USDImage} className='fluid' alt='coin' />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='profile'>
                <a href='#'>
                  <Image src={ProfileImage} className='fluid' alt='profile image' />
                </a>
              </div>
            </>
          }


        </div>
      </div>


      {/* Wallet Modal */}
      <Modal show={walletShow} onHide={() => setWalletShow(false)} centered className="customModal">
        <Modal.Body className='p-0'>
          <div className='connectModal'>
            <h4>Connect Wallet</h4>
            <ul className='walletList'>
              <li>
                <a href='#' onClick={coinsShowHandle}>
                  <div className='walletTitle'>
                    <div className='walletTitle__badge'>
                      <Image src={TrustWalletImage} className="fluid" alt="wallet" />
                    </div>
                    <h5>TrustWallet</h5>
                  </div>
                  <div className='walletavail'>
                    <p>DApp in App</p>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='walletTitle'>
                    <div className='walletTitle__badge'>
                      <Image src={TokenPocketImage} className="fluid" alt="wallet" />
                    </div>
                    <h5>Token Pocket</h5>
                  </div>
                  <div className='walletavail'>
                    <p>DApp in App</p>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='walletTitle'>
                    <div className='walletTitle__badge'>
                      <Image src={MetaMaskImage} className="fluid" alt="wallet" />
                    </div>
                    <h5>MetaMask</h5>
                  </div>
                  <div className='walletavail'>
                    <p>Desktop/DApp in App</p>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='walletTitle'>
                    <div className='walletTitle__badge'>
                      <Image src={walletConnect} className="fluid" alt="wallet" />
                    </div>
                    <h5>Wallet Connect</h5>
                  </div>
                  <div className='walletavail'>
                    <p>Any Wallet & Browser</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RightSidebar