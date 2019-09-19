import React, { Component } from 'react';
import './FormForAddRecipe.css';
import {NavLink} from 'react-router-dom';

class FormForAddRecipe extends Component {
  newImg = React.createRef();
  newTitle = React.createRef();
  newDescription = React.createRef();
  
  onAddRecipe = () => {
    this.props.addNewRecipe();
  }

  onRecipeChange = () => {
    let img = this.newImg.current.value;
    let title = this.newTitle.current.value;
    let description = this.newDescription.current.value;
    this.props.updateNewRecipe(img, title, description);
  }
  render() {
    return (
  		<form className='formForAddRecipe' >

        <label htmlFor="addPicture">Add picture:</label>
        <input
          ref={this.newImg} 
          type="url" 
          name="addPicture" 
          placeholder='Enter the picture URL...'  
          pattern="(http|https)://.+"
          value={this.props.img}
          onChange={this.onRecipeChange}
          required />

        <label htmlFor="title">Title:</label>
        <input 
          ref={this.newTitle}
          type="text"
          name="title" 
          placeholder='Write your title here...'
          value={this.props.title}
          onChange={this.onRecipeChange}
          required />

        <label htmlFor="description">Description:</label>
        <textarea 
          ref={this.newDescription}
          name="description" 
          placeholder='Write your text here...' 
          value={this.props.description}
          onChange={this.onRecipeChange}
          required>
        </textarea>

        <NavLink to='/pageShowNewRecipe' 
                 onClick={ this.onAddRecipe } 
                 className='submit'>
          submit
        </NavLink>
      </form>
    );
  }
}

export default FormForAddRecipe;
