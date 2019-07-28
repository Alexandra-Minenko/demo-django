import React, { Component } from 'react';
import BtnMenu from './BtnMenu';
import Header from './Header';


class Title extends Component {
  render() {
    return (
    	<div className='title'>
            <Header />
    		<h2>New on your table</h2>
            <h1>Real Meal</h1>
            <p>Super healthy quick lunch ideas that will keep you full </p>
            <BtnMenu />
    	</div>
    );
  }
}

export default Title;