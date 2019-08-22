import React, { Component } from 'react';
import BtnSeeTheMenu from '../BtnSeeTheMenu/BtnSeeTheMenu';
import './Title.css';

class Title extends Component {

  render() {
    
    return (
    	<section className='title'>
    		<h2>New on your table</h2>
            <h1>Real Meal</h1>
            <p>Super healthy quick lunch ideas that will keep you full </p>
            <BtnSeeTheMenu />
    	</section>
    );
  }
}

export default Title;