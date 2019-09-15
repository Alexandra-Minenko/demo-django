import React, { Component } from 'react';
import FormForEditRecipe from './FormForEditRecipe';
import {editRecipeActionCreater, updateSelectedRecipeActionCreater} from '../../redux/newRecipeReducer';


class FormForEditRecipeContainer extends Component {
   render() {

    const state = this.props.store.getState();

    const editRecipe = (img,title,description) => {
      let action = (editRecipeActionCreater(img,title,description));
      this.props.store.dispatch(action);
    }

    const onRecipeChange = (img, title, description) => {
      let action = (updateSelectedRecipeActionCreater(img, title, description));
      this.props.store.dispatch(action);
    }

    return (
  		<FormForEditRecipe updateNewRecipe={onRecipeChange } 
                         editRecipe={editRecipe}
                         img={state.selectedRecipe.img}
                         title={state.selectedRecipe.title}
                         description={state.selectedRecipe.description}/>
    );
  }
}

export default FormForEditRecipeContainer;
