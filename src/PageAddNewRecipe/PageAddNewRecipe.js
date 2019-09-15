import React, { Component } from 'react';
import FormForAddRecipeContainer from './FormForAddRecipe/FormForAddRecipeContainer';
import PageShowNewRecipe from '../PageShowNewRecipe/PageShowNewRecipe';
import leaf2 from '../Images/leaf2.png';
import './PageAddNewRecipe.css';
import StoreContext from '../StoreContext';

class PageAddNewRecipe extends Component {
	render() {
  	return (
      <StoreContext.Consumer>
        {
          (store) => {
            return (
              <div className='addNewRecipe'>
                <img src={leaf2} alt='leaf2'/>
                <FormForAddRecipeContainer store={store}/>
                <div className='preview-img'>
                  <img src={store.getState().newImg} />
                </div>
              </div>
            )
          }
        }
      </StoreContext.Consumer>
	    
		);
	}
}

export default PageAddNewRecipe;