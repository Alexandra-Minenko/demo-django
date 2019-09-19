import React, { Component } from 'react';
import FormForAddRecipe from './FormForAddRecipe/FormForAddRecipe';
import leaf2 from '../Images/leaf2.png';
import './PageAddNewRecipe.css';

class PageAddNewRecipe extends Component {
	render() {
  	return (
      <div className='addNewRecipe'>
        <img src={leaf2} alt='leaf2'/>
        <FormForAddRecipe img={this.props.state.newRecipe.newImg}
                          title={this.props.state.newRecipe.newTitle}
                          description={this.props.state.newRecipe.newDescription}
                          addNewRecipe={this.props.addNewRecipe}
                          updateNewRecipe={this.props.updateNewRecipe}/>
        <div className='preview-img'>
          <img src={this.props.state.newRecipe.newImg} />
        </div>
      </div>
		);
	}
}

export default PageAddNewRecipe;