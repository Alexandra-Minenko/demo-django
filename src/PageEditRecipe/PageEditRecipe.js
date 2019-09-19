import React, { Component } from 'react';
import FormForEditRecipe from './FormForEditRecipe/FormForEditRecipe';
import leaf2 from '../Images/leaf2.png';


class PageEditRecipe extends Component {
	render() {
  	return (
      <div className='addNewRecipe'>
        <img src={leaf2} alt='leaf2'/>
        <FormForEditRecipe updateNewRecipe={this.props.updateNewRecipe} 
                           editRecipe={this.props.editRecipe}
                           img={this.props.img}
                           title={this.props.title}
                           description={this.props.description}/>
        <div className='preview-img'>
          <img src={this.props.img} />
        </div>
      </div>
		);
	}
}

export default PageEditRecipe;