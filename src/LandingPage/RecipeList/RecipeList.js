import React, { Component } from 'react';
import Recipe from './Recipe/Recipe';
import './RecipeList.css';
import StoreContext from '../../StoreContext';

class RecipeList extends Component {
	render() {
		return (
      <StoreContext.Consumer>
        {
          (store) => {
            return (
              <div className='layout recipeList'>
                {store.getState().recipes.map((item) => 
                  <Recipe key={item.id}
                          id={item.id}
                          img={item.img} 
                          title={item.title} 
                          description={item.description}
                          ratingValue={item.ratingValue}
                          store={store} />)}
              </div>
            )
          }
        }
			</StoreContext.Consumer>
		)
	}
}

export default RecipeList;
