import React, { Component } from 'react';
import group from '../Images/group.png';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
    	<footer>
    		<section className='section'>
    			<p>© 2019 Django. All rights reserved</p>
    			<ul className='social-media'>
					<li><a href='#'><img src={group} alt='group' /></a></li>					
					<li><a href='#'><img src={facebook} alt='facebook' /></a></li>
					<li><a href='#'><img src={twitter} alt='twitter' /></a></li>
					<li><a href='#'><img src={linkedin} alt='linkedin' /></a></li>
    			</ul>
    			<p>Charlotte, North Carolina</p>
    		</section>
    	</footer>
    );
  }
}

export default Footer;