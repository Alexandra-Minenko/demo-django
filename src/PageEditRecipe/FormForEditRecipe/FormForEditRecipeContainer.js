import React, { Component } from 'react';
import FormForEditRecipe from './FormForEditRecipe';
import {editRecipeActionCreater, updateSelectedRecipeActionCreater} from '../../redux/newRecipeReducer';


class FormForEditRecipeContainer extends Component {
   render() {

    const state = this.props.store.getState();

    const editRecipe = (img,title,description) => {
      let action = (editRecipeActionCreater(img,title,description));
      this.props.store.dispatch(action);
      console.log(state);
    }

    const onRecipeChange = (img, title, description) => {
      let action = (updateSelectedRecipeActionCreater(img, title, description));
      this.props.store.dispatch(action);
    }

    return (
  		<FormForEditRecipe updateNewRecipe={onRecipeChange } 
      state={state}
                        editRecipe={editRecipe}
                        img={state.selectedRecipe.img}
                        title={state.selectedRecipe.title}
                        description={state.selectedRecipe.description}
                        id={state.selectedRecipe.id}/>
    );
  }
}

export default FormForEditRecipeContainer;
