import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<div>
    		<header>
          <div className='header-section'>
            <a href='#'>
            <img src={require('./Images/logo.png')} alt='logo' className='logo' />
            </a>
            <div className='user'>
              <img src={require('./Images/shalom-mwenesi-L2sL7VPwHOs-unsplash.png')} alt='user' />
              <p>Helen Smith</p>
              <img src={require('./Images/arrow.png')} alt='arrow' />
            </div>
          </div>
        </header>
    	</div>
    );
  }
}

export default Header;
