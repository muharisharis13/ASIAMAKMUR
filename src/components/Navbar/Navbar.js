import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components'
import { decrypt } from '../../Config/Crypto';
import { Context } from '../../Config/Context';
import LogoHavah from '../../img/background/company-white.png'

const LabelLogout = styled.span`
font-weight: 700;
font-size:1.2em;
`

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { dispatch, showSideBar } = useContext(Context)


  const show = () => {
    dispatch({
      type: 'SHOWSIDEBAR', showSideBar: !showSideBar
    })

  }
  // const showSidebar = () => setSidebar(!sidebar);

  const LogOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('role');
    window.location.href = '/'
  }

  let textJam = ''
  let jam = new Date().getHours();

  if (jam >= 1 && jam <= 11) {
    textJam = "Good Morning"
  }
  else if (jam >= 12 && jam <= 18) {
    textJam = "Good Afternoon"
  }
  else if (jam >= 19 && jam <= 24) {
    textJam = "Good Night"
  }

  let role

  if (sessionStorage.getItem('role') !== null) {
    role = decrypt(sessionStorage.getItem('role'))

  }
  let name
  let token = sessionStorage.getItem('token')

  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <div className='navbar' >
        <table className="table" >
          <tr>
            <td>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={show} />
              </Link>

            </td>
            <td className="UserMenu" style={{ float: 'right', padding: '0px 40px', textAlign: 'right', fontWeight: '700' }}>

              <tr>
                <td>
                  <span>
                    {textJam},
                    </span>
                  <span>
                    {
                      name = sessionStorage.getItem('name')
                    }
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    {
                      role === 'customer_service' ?
                        'Customer Services'
                        : null
                    }
                  </span>
                </td>
              </tr>
            </td>
          </tr>
        </table>

      </div>
      <nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
        <ul style={{ position: 'relative' }} className='nav-menu-items' onClick={show}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose style={{ color: 'white' }} />
            </Link>
          </li>
          <li style={{ textAlign: 'center', textDecoration: 'none', listStyleType: 'none' }}>
            <img src={LogoHavah} alt="Logo" width={70} />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li style={{ position: 'absolute', bottom: '10%' }} >
            <LabelLogout style={{ color: 'white' }} className="btn" onClick={LogOut}>
              Logout
              </LabelLogout>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );

}

export default Navbar;
