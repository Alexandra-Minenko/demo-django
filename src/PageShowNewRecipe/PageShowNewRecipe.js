import React, { Component } from 'react';
import BtnBack from './BtnBack/BtnBack';
import FormForShowRecipe from './FormForShowRecipe/FormForShowRecipe';
import leaf2 from '../Images/leaf2.png';

class PageShowNewRecipe extends Component {
  render() {
    return (
      <div className='addNewRecipe'>
        <img src={leaf2} alt='leaf2'/>
        <FormForShowRecipe img={this.props.img}
                           title={this.props.title}
                           description={this.props.description}/>
        <div className='preview-img'>
          <img src={this.props.img} />
        </div>
      </div>
    )
  }
}

export default PageShowNewRecipe;