import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class FormForEditRecipe extends Component {
   render() {

    const newImg = React.createRef();
    const newTitle = React.createRef();
    const newDescription = React.createRef();

    const onRecipeChange = () => {
      let img = newImg.current.value;
      let title = newTitle.current.value;
      let description = newDescription.current.value;
      this.props.updateNewRecipe(img, title, description);
    
    }
    
    const editRecipe = () => {
      let img = newImg.current.value;
      let title = newTitle.current.value;
      let description = newDescription.current.value;
      this.props.editRecipe(img, title, description);
    }

    return (
  		<form className='formForAddRecipe' >

        <label htmlFor="addPicture">Add picture:</label>
        <input
          ref={newImg} 
          type="url" 
          name="addPicture" 
          placeholder='Enter the picture URL...'  
          /*pattern="(http|https)://.+"*/
          value={this.props.img}
          onChange={onRecipeChange} />

        <label htmlFor="title">Title:</label>
        <input 
          type="text"
          name="title" 
          ref={newTitle}
          placeholder='Write your title here...'
          value={this.props.title}
          onChange={onRecipeChange}
          required />

        <label htmlFor="description">Description:</label>
        <textarea 
          ref={newDescription}
          name="description" 
          placeholder='Write your text here...' 
          value={this.props.description}
          onChange={onRecipeChange} >
        </textarea>

        <NavLink to={/pageShowNewRecipe/ + this.props.id} 
                 onClick={ editRecipe } 
                 className='submit'>
          submit
        </NavLink>
      </form>
    );
  }
}

export default FormForEditRecipe;
