import React, { Component } from 'react';
import BtnBack from '../BtnBack/BtnBack';
import './FormForShowRecipe.css';

class FormForShowRecipe extends Component {
  render() {
    return (
      <div className='pageShowRecipe'>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <BtnBack />
      </div>
    );
  }
}

export default FormForShowRecipe;