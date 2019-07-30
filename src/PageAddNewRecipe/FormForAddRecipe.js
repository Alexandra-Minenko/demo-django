import React, { Component } from 'react';


class FormForAddRecipe extends Component {
  render() {
    return (
    	<div>
    		<form className='formForAddRecipe'>
          <label for="addPicture">Add picture:</label>
          <input type="url" id="addPicture" name="addPicturee" placeholder='Enter the picture URL...' required pattern="(http|https)://.+" />
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" placeholder='Write your title here...' required />
          <label for="description">Description:</label>
          <textarea id="description" name="description" placeholder='Write your text here...' required></textarea>
          <input type="submit" value="submit" className='submit' />
        </form>
    	</div>
    );
  }
}

export default FormForAddRecipe;
