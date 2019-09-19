import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class FormForEditRecipe extends Component {
  newImg = React.createRef();
  newTitle = React.createRef();
  newDescription = React.createRef();

  onRecipeChange = () => {
    let img = this.newImg.current.value;
    let title = this.newTitle.current.value;
    let description = this.newDescription.current.value;
    this.props.updateNewRecipe(img, title, description);
  }
    
  editRecipe = () => {
    let img = this.newImg.current.value;
    let title = this.newTitle.current.value;
    let description = this.newDescription.current.value;
    this.props.editRecipe(img, title, description);
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
          /*pattern="(http|https)://.+"*/
          value={this.props.img}
          onChange={this.onRecipeChange} />

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
          onChange={this.onRecipeChange} >
        </textarea>

        <NavLink to={/pageShowNewRecipe/ + this.props.id} 
                 onClick={ this.editRecipe } 
                 className='submit'>
          submit
        </NavLink>
      </form>
    );
  }
}

export default FormForEditRecipe;
