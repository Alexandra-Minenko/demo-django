import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './BtnBack.css';

class BtnBack extends Component {
	render () {
		return (
    		<React.Fragment>
	          <NavLink to='/pageAddNewRecipe' className='btnBack'>back</NavLink>
	        </React.Fragment>
    	);
	}
}

export default BtnBack;
