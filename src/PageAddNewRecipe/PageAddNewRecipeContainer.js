import React, { Component } from 'react';
import PageAddNewRecipe from './PageAddNewRecipe';
import {connect} from 'react-redux';
import {addNewRecipeActionCreater, updateNewRecipeActionCreater,updateSelectedRecipeActionCreater} from '../redux/newRecipeReducer';


let mapStateToProps = (state) => {
  return {
    state: state
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNewRecipe: () => {
      dispatch(addNewRecipeActionCreater());
    },
    updateNewRecipe: (img, title, description) => {
      let actionNewRecipe = (updateNewRecipeActionCreater(img, title, description));
      dispatch(actionNewRecipe);
      let actionSelectedRecipe = (updateSelectedRecipeActionCreater(img, title, description));
      dispatch(actionSelectedRecipe);
    }

  }
}
const PageAddNewRecipeContainer = connect(mapStateToProps, mapDispatchToProps)(PageAddNewRecipe);

export default PageAddNewRecipeContainer;