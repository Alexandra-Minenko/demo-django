import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div className='section'>
    			<p>© 2019 Django. All rights reserved</p>
    			<ul className='social-media'>
					<li><a href='#'><img src={require('./Images/group.png')} alt='group' /></a></li>					
					<li><a href='#'><img src={require('./Images/facebook.png')} alt='facebook' /></a></li>
					<li><a href='#'><img src={require('./Images/twitter.png')} alt='twitter' /></a></li>
					<li><a href='#'><img src={require('./Images/linkedin.png')} alt='linkedin' /></a></li>
    			</ul>
    			<p>Charlotte, North Carolina</p>
    		</div>
    	</footer>
    );
  }
}

export default Footer;