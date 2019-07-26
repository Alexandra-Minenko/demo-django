import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div className='section'>
    			<p>© 2019 Django. All rights reserved</p>
    			<ul>
					<li><a href='#'><img src='Images/Django.png'/></a></li>
					<li><a href='#'></a></li>
					<li><a href='#'></a></li>
					<li><a href='#'></a></li>
    			</ul>
    			<p>Charlotte, North Carolina</p>
    		</div>
    	</footer>
    );
  }
}

export default Footer;