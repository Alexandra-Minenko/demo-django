import React, { Component } from 'react';
import './BtnSeeTheMenu.css';
import { ScrollTo } from "react-scroll-to";

class BtnSeeTheMenu extends Component {

  render() {
    return (
      	<ScrollTo>
	        {({ scrollTo }) => (
	          <a className='btnSeeTheMenu' onClick={() => 
	          	scrollTo({ y: 1540, smooth: true, duration: 500 })}>
	          	see the menu</a>
	        )}
      	</ScrollTo>
 
        
    );
  }
}

export default BtnSeeTheMenu;