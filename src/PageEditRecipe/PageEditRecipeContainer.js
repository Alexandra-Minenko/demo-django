import React, { Component } from 'react';
import PageEditRecipe from './PageEditRecipe';
import {connect} from 'react-redux';
import {editRecipeActionCreater, updateSelectedRecipeActionCreater} from '../redux/newRecipeReducer';

let mapStateToProps = (state) => {
  return {
    img: state.selectedRecipe.img,
    title: state.selectedRecipe.title,
    description: state.selectedRecipe.description
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    editRecipe: (img,title,description) => {
      let action = (editRecipeActionCreater(img,title,description));
      dispatch(action);
    },
    updateNewRecipe: (img, title, description) => {
      let action = (updateSelectedRecipeActionCreater(img, title, description));
      dispatch(action);
    }

  }
}
const PageEditRecipeContainer = connect(mapStateToProps, mapDispatchToProps)(PageEditRecipe);

export default PageEditRecipeContainer;