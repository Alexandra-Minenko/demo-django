import React, { Component } from 'react';
import FormForEditRecipeContainer from './FormForEditRecipe/FormForEditRecipeContainer';
import PageEditRecipe from '../PageEditRecipe/PageEditRecipe';
import leaf2 from '../Images/leaf2.png';
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
                <FormForEditRecipeContainer store={store}/>
                <div className='preview-img'>
                  <img src={store.getState().selectedRecipe.img} />
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