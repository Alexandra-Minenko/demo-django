import React, { Component } from 'react';
import BtnBack from './BtnBack/BtnBack';
import FormForShowRecipe from './FormForShowRecipe/FormForShowRecipe';
import leaf2 from '../Images/leaf2.png';
import StoreContext from '../StoreContext';

class PageShowNewRecipe extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {
          (store) => {
            return (
              <div className='addNewRecipe'>
                <img src={leaf2} alt='leaf2'/>
                <FormForShowRecipe img={store.getState().selectedRecipe.img}
                                   title={store.getState().selectedRecipe.title}
                                   description={store.getState().selectedRecipe.description}/>
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

export default PageShowNewRecipe;