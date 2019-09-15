import React, { Component } from 'react';
import './BtnAddNewItem.css';
import {NavLink} from 'react-router-dom';

class BtnAddNewItem extends Component {
  render() {
    return (
    	<div className='layout'>
       	<NavLink to='/pageAddNewRecipe' className='btnAddNewItem' id="recipes">
        	add new item
       	</NavLink>
     	</div>
    );
  }
}

export default BtnAddNewItem;