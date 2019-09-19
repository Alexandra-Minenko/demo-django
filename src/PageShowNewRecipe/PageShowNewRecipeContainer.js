import React, { Component } from 'react';
import PageShowNewRecipe from './PageShowNewRecipe';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    img: state.selectedRecipe.img,
    title: state.selectedRecipe.title,
    description: state.selectedRecipe.description
  }
}

const PageShowNewRecipeContainer = connect(mapStateToProps)(PageShowNewRecipe);

export default PageShowNewRecipeContainer;