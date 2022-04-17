import React, { useContext } from 'react'
import { Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/img/sidebar-logo.svg'
import { CLOSE_SIDEBAR } from '../contant/contant'
import { HeaderContent } from './Header'

const LeftSidebar = () => {

  const { state, dispatch } = useContext(HeaderContent);

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  }


  return (
    <div className={state ? 'sidebarMain activeSidebar' : 'sidebarMain'}>
      <button type="button" className="btn-close btn-close-white d-lg-none" aria-label="Close" onClick={closeSidebar}></button>
      <div className='sidebarLogo'>
        <Image src={Logo} className="fluid" alt="logo" />
      </div>
      <div className='sidebarAction'>
        <ul className='sidebarAction__navs'>
          <li> <NavLink to='home' className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}> <i className='icon-dashboard'></i> <span>Dashboard</span></NavLink> </li>
          <li> <NavLink to='geneology' className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}> <i className='icon-genealogy'></i> <span>Genealogy</span></NavLink> </li>
          <li><NavLink to='promotion' className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}>  <i className='icon-promotion'></i> <span>Promotion</span></NavLink> </li>
          <li> <NavLink to='information' className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}> <i className='icon-information'></i> <span>Information</span></NavLink> </li>
        </ul>
        <div className='sidebarAction__logout'>
          <Link to='/' onClick={closeSidebar}><i className='icon-logout'></i> <span>Logout</span></Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar