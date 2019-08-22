import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Recipe.css';

class Recipe extends Component {

  render(){

    return (
      <div className='card'>
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <NavLink to='/pageAddNewRecipe' className='edit'></NavLink>
      </div>    
    )
  }
}

export default Recipe;
