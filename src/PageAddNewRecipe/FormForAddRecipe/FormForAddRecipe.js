import React, { Component } from 'react';
import './FormForAddRecipe.css';
import {NavLink} from 'react-router-dom';
import {addNewRecipeActionCreater, updateNewRecipeActionCreater} from '../../state';


class FormForAddRecipe extends Component {
  
  render() {

    const newImg = React.createRef();
    const newTitle = React.createRef();
    const newDescription = React.createRef();
    const addRecipe = () => {
      this.props.dispatch(addNewRecipeActionCreater());

    }

    const onRecipeChange = () => {
      const img = newImg.current.value;
      const title = newTitle.current.value;
      const description = newDescription.current.value;
      const action = (updateNewRecipeActionCreater(img, title, description));
      this.props.dispatch(action);
    }

    return (
  		<form className='formForAddRecipe'>

        <label for="addPicture">Add picture:</label>
        <input
          ref={newImg} 
          type="url" 
          name="addPicture" 
          placeholder='Enter the picture URL...'  
          pattern="(http|https)://.+" 
          value={this.props.newImg}
          onChange={onRecipeChange} />

        <label for="title">Title:</label>
        <input 
          type="text"
          name="title" 
          ref={newTitle}
          placeholder='Write your title here...'
          value={this.props.newTitle}
          onChange={onRecipeChange}
          required />

        <label for="description">Description:</label>
        <textarea 
          ref={newDescription}
          name="description" 
          placeholder='Write your text here...' 
          value={this.props.newDescription}
          onChange={onRecipeChange} >
        </textarea>

        <NavLink to='/pageAddNewRecipe/showNewRecipe' 
                 onClick={ addRecipe } 
                 className='submit'>
          submit
        </NavLink>
      </form>
    );
  }
}

export default FormForAddRecipe;
