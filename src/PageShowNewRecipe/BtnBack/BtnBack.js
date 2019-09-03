import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './BtnBack.css';

class BtnBack extends Component {
	render () {
		return (
    	<NavLink to='/pageAddNewRecipe' className='btnBack'>back</NavLink>  
    );
	}
}

export default BtnBack;
