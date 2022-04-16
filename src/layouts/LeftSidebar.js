import React from 'react'
import { Image } from 'react-bootstrap'
import { Link, useLocation, NavLink } from 'react-router-dom'
import Logo from '../assets/img/sidebar-logo.svg'

const LeftSidebar = () => {
  const location = useLocation();
  if(location.pathname == '' || location.pathname == '/') return null;
  return (
    <div className='sidebarMain'>
      <div className='sidebarLogo'>
        <Image src={Logo} className="fluid" alt="logo" />
      </div>
      <div className='sidebarAction'>
        <ul className='sidebarAction__navs'>
          <li> <NavLink to='home' className={({ isActive }) => (isActive ? 'active' : '')}> <i className='icon-dashboard'></i> <span>Dashboard</span></NavLink> </li>
          <li> <NavLink to='geneology' className={({ isActive }) => (isActive ? 'active' : '')}> <i className='icon-genealogy'></i> <span>Genealogy</span></NavLink> </li>
          <li><NavLink to='promotion' className={({ isActive }) => (isActive ? 'active' : '')}>  <i className='icon-promotion'></i> <span>Promotion</span></NavLink> </li>
          <li> <NavLink to='information' className={({ isActive }) => (isActive ? 'active' : '')}> <i className='icon-information'></i> <span>Information</span></NavLink> </li>
        </ul>
        <div className='sidebarAction__logout'>
          <Link to='/'><i className='icon-logout'></i> <span>Logout</span></Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar