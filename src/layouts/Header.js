import React, { useReducer, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Image, Dropdown, DropdownButton, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

import Logo from '../assets/img/logo.svg'
import ProfileImage from '../assets/img/profile.png'
import PolygonImage from '../assets/img/polygon.png'
import PolygonDIEFImage from '../assets/img/polygondiwf.png'
import USDImage from '../assets/img/usdcoin.png'

import LeftSidebar from './LeftSidebar'
import RighttSidebar from './RightSidebar'

import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../contant/contant';

export const HeaderContent = React.createContext();

function sidebar(state, action) {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return state = true;
        case CLOSE_SIDEBAR:
            return state = false;
        default:
            return state;
    }
}

const Header = () => {
    const [notificationBox, setNotificationBox] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const location = useLocation();

    const [state, dispatch] = useReducer(sidebar, false);

    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR });
    }
    const providerState = {
        state,
        dispatch
    }

    if (location.pathname == '' || location.pathname == '/') return false

    return (
        <>
            <HeaderContent.Provider value={providerState}>
                <Navbar expand="lg" variant="light" className='d-lg-none sticky-top'>
                    <Container fluid>
                        <div className="logonToggle">
                            <Navbar.Brand href="#"><Image src={Logo} alt='logo' /></Navbar.Brand>
                            <span className="toggle-menu ms-sm-4 ms-2" onClick={openSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg></span>
                        </div>
                        <div className='headerDropdown'>
                            <Dropdown className="d-inline mx-2" align="end">
                                <Dropdown.Toggle id="dropdown-autoclose-true">
                                    <i className="fas fa-ellipsis-v"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#">
                                        <div className='mobileDropdown'>
                                            <div className="mobileDropdown__icon">
                                                <Image src={PolygonImage} alt="icon" />
                                            </div>
                                            <span>Polygon</span>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mobileDropdown'>
                                            <div className="mobileDropdown__icon">
                                                <Image src={USDImage} alt="icon" />
                                            </div>
                                            <span>0 USDC</span>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mobileDropdown'>
                                            <div className="mobileDropdown__icon">
                                                <Image src={PolygonImage} alt="icon" />
                                            </div>
                                            <span>0 USDC</span>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mobileDropdown'>
                                            <div className="mobileDropdown__icon">
                                                <Image src={PolygonDIEFImage} alt="icon" />
                                            </div>
                                            <Button className="theme-btn">Connect Wallet</Button>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <ul className='primaryAction'>
                                <li>
                                    {/* Notification Box */}
                                    {notificationBox && (
                                        <div className='notificationBox'>
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
                                    <a href='#' onClick={() => { setNotificationBox(!notificationBox); setSearchToggle(false) }}>
                                        <div className='notificationsBell'>
                                            <i className='icon-bell'></i>
                                        </div>
                                    </a>
                                </li>
                                <li className={searchToggle ? 'activeSearch' : ''}>
                                    <div className='searchall'>
                                        <Form.Control type="text" placeholder="Search anything..." />
                                    </div>
                                    <a href='#' onClick={() => { setSearchToggle(!searchToggle); setNotificationBox(false) }}>
                                        <div className='searchIcon'>
                                            <i className='icon-icon_search'></i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className="profileImageh">
                                        <Image src={ProfileImage} className='fluid' alt='profile image' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
                <LeftSidebar />
                <RighttSidebar />
            </HeaderContent.Provider>
        </>
    )
}

export default Header