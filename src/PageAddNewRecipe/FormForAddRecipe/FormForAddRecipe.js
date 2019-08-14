import React, { Component } from 'react';
import './FormForAddRecipe.css'

class FormForAddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      description: '', 
      addPicture: ''
    };
    this.onChangeAddPicture = this.onChangeAddPicture.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeAddPicture(event) {
    this.setState({addPicture: event.target.value});
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  
  onChangeDescription(event){
    this.setState({description: event.target.value});
  }

  onSubmit(event) { 
    event.preventDefault();
    console.log('form is submitted', this.state.addPicture, this.state.title, this.state.description);
  }


  render() {
    return (
    	<div>
    		<form className='formForAddRecipe' onSubmit={this.onSubmit}>
          <label for="addPicture">Add picture:</label>
          <input 
          type="url" 
          id="addPicture" 
          name="addPicture" 
          placeholder='Enter the picture URL...'  
          pattern="(http|https)://.+" 
          value={this.state.addPicture}
          onChange={this.onChangeAddPicture}
          required
          />
          <label for="title">Title:</label>
          <input 
            type="text"
            name="title" 
            id="title"  
            placeholder='Write your title here...'
            value={this.state.title}
            onChange={this.onChangeTitle}
            required
            />
          <label for="description">Description:</label>
          <textarea 
            id="description" 
            name="description" 
            placeholder='Write your text here...' 
            value={this.state.description}
            onChange={this.onChangeDescription}
            required>
          </textarea>
          <input type="submit" value="submit" className='submit' />
        </form>
    	</div>
    );
  }
}

export default FormForAddRecipe;
