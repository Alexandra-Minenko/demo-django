import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Recipe.css';
import ReactStars from 'react-stars';

class Recipe extends Component {
  render(){

    const ratingChanged = (newRating) => {
      console.log(newRating)
    }
      
    const editRecipe = () => {
     
    }

    return (
      <div className='card'>
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <NavLink to='/pageAddNewRecipe' 
                 className='edit'
                 onClick={ editRecipe }>
        </NavLink>
        <ReactStars
          className='stars'
          count={5}
          onChange={ratingChanged}
          size={32}
          color2={'#ffd700'}
          />
      </div>    
    )
  }
}

export default Recipe;
