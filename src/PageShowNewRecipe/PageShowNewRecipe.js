import React, { Component } from 'react';
import BtnBack from './BtnBack/BtnBack';
import './PageShowNewRecipe.css';

class PageShowNewRecipe extends Component {
  render() {
    return (
        <div className='pageShowNewRecipe'>
          <h3>{this.props.newTitle}</h3>
          <p>{this.props.newDescription}</p>
          <BtnBack />
        </div>
    );
  }
}

export default PageShowNewRecipe;