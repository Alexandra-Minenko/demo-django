import React, { Component } from 'react';
import Recipe from './Recipe';
import {addSelectedRecipeActionCreater,changedRatingActionCreater} from '../../../redux/newRecipeReducer';

class RecipeContainer extends Component {
  render(){

    const ratingChanged = (id,ratingValue) => {
      let action = (changedRatingActionCreater(id,ratingValue));
      this.props.store.dispatch(action);
    }
      
    const selectedRecipe = (id,img,title,description) => {
      let action = (addSelectedRecipeActionCreater(id,img,title,description));
      this.props.store.dispatch(action);
    }
    
    return (
      <Recipe ratingChanged={ratingChanged}
              selectedRecipe={selectedRecipe}
              id={this.props.id}
              img={this.props.img}
              title={this.props.title}
              description={this.props.description}
              ratingValue={this.props.ratingValue}/>      
    )
  }
}

export default RecipeContainer;
