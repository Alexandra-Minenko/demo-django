import React, { Component } from 'react';
import FormForAddRecipe from './FormForAddRecipe';
import leaf2 from '../Images/leaf2.png';
import './PageAddNewRecipe.css';

class PageAddNewRecipe extends Component {
  render() {
    return (
        <div className='addNewRecipe'>
            <img src={leaf2} alt='leaf2'/>
          <FormForAddRecipe />
          <div className='block'></div>
        </div>
    );
  }
}

export default PageAddNewRecipe;