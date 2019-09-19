import React, { Component } from 'react';
import Recipe from './Recipe/Recipe';
import './RecipeList.css';
import {addSelectedRecipeActionCreater,changedRatingActionCreater} from '../../redux/newRecipeReducer';
import StoreContext from '../../StoreContext';

class RecipeList extends Component {
	render() {
		return (
      <div className='layout recipeList'>
        {this.props.recipes.map((item) => 
          <Recipe key={item.id}
                  id={item.id}
                  img={item.img} 
                  title={item.title} 
                  description={item.description}
                  ratingValue={item.ratingValue}
                  ratingChanged={this.props.ratingChanged}
                  selectedRecipe={this.props.selectedRecipe} />)}
      </div>
		)
	}
}

export default RecipeList;
