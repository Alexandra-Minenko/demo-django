import React, { Component } from 'react';
import logo from '../Images/logo.png';
import user from '../Images/shalom-mwenesi-L2sL7VPwHOs-unsplash.png';
import arrow from '../Images/arrow.png';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
  		<header>
        <div className='header-layout'>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <div className='user'>
            <img src={user} alt='user' />
            <p>Helen Smith</p>
            <img src={arrow} alt='arrow' />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
