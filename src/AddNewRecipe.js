import React, { Component } from 'react';
import Header from './Header';
import FormForAddRecipe from './FormForAddRecipe';
import Footer from './Footer';
class AddNewRecipe extends Component {
  render() {
    return (
    	<div className='newRecipe'>
        <Header />
        <div className='addNewRecipe'>
          <img src={require('./Images/leaf2.png')} alt='leaf2' className='leaf2' />
          <FormForAddRecipe />
          <div className='block'></div>
        </div>
	    	<Footer />
    	</div>
    );
  }
}

export default AddNewRecipe;
