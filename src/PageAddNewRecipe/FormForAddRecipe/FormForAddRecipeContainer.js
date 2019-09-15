import React, { Component } from 'react';
import FormForAddRecipe from './FormForAddRecipe';
import {addNewRecipeActionCreater, updateNewRecipeActionCreater,updateSelectedRecipeActionCreater} from '../../redux/newRecipeReducer';


class FormForAddRecipeContainer extends Component {
   render() {

    const state = this.props.store.getState();

    const addRecipe = () => {
      this.props.store.dispatch(addNewRecipeActionCreater());
    }

    const onRecipeChange = (img, title, description) => {
      let actionNewRecipe = (updateNewRecipeActionCreater(img, title, description));
      this.props.store.dispatch(actionNewRecipe);
      let actionSelectedRecipe = (updateSelectedRecipeActionCreater(img, title, description));
      this.props.store.dispatch(actionSelectedRecipe);
    }

    return (
  		<FormForAddRecipe updateNewRecipe={onRecipeChange} 
                        addNewRecipe={addRecipe}
                        img={state.newImg}
                        title={state.newTitle}
                        description={state.newDescription}/>
    );
  }
}

export default FormForAddRecipeContainer;
