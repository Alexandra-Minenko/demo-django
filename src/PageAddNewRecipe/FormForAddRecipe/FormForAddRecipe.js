import React, { Component } from 'react';
import './FormForAddRecipe.css';
import {NavLink} from 'react-router-dom';

class FormForAddRecipe extends Component {
  
  render() {
    let newImg = React.createRef();
    let newTitle = React.createRef();
    let newDescription = React.createRef();

    let addRecipe = () => {
      this.props.addNewRecipe();
      
  }

    let onRecipeChange = () => {
      let img = newImg.current.value;
      let title = newTitle.current.value;
      let description = newDescription.current.value;
      this.props.updateNewRecipe(img, title, description);
    }

    return (
    	<div>
    		<form className='formForAddRecipe' /*onSubmit={this.onSubmit}*/>
          <label for="addPicture">Add picture:</label>
          <input
            ref={newImg} 
            type="url" 
            name="addPicture" 
            placeholder='Enter the picture URL...'  
            pattern="(http|https)://.+" 
            value={this.props.newImg}
            onChange={onRecipeChange}
          />
          <label for="title">Title:</label>
          <input 
            type="text"
            name="title" 
            ref={newTitle}
            placeholder='Write your title here...'
            value={this.props.newTitle}
            onChange={onRecipeChange}
            required
            />
          <label for="description">Description:</label>
          <textarea 
            ref={newDescription}
            name="description" 
            placeholder='Write your text here...' 
            value={this.props.newDescription}
            onChange={onRecipeChange}
          >
          </textarea>
          <NavLink to='/pageShowNewRecipe' 
                   onClick={ addRecipe } 
                   className='submit'>submit</NavLink>
        </form>
    	</div>
    );
  }
}

export default FormForAddRecipe;
