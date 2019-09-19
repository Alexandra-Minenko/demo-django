import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './RecipeList.css';
import {addSelectedRecipeActionCreater,changedRatingActionCreater} from '../../redux/newRecipeReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ratingChanged: (id,ratingValue) => {
      let action = (changedRatingActionCreater(id,ratingValue));
      dispatch(action);
    },
    selectedRecipe: (id,img,title,description) => {
      let action = (addSelectedRecipeActionCreater(id,img,title,description));
      dispatch(action);
    }

  }
}
const RecipeListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeList);

export default RecipeListContainer;
