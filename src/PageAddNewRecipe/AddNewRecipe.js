import React, { Component } from 'react';
import FormForAddRecipe from './FormForAddRecipe';
import './AddNewRecipe.css';
class AddNewRecipe extends Component {
  render() {
    return (
    	<div className='newRecipe'>
        <div className='addNewRecipe'>
          <img src={require('./Images/leaf2.png')} alt='leaf2' className='leaf2' />
          <FormForAddRecipe />
          <div className='block'></div>
        </div>
    	</div>
    );
  }
}

export default AddNewRecipe;
