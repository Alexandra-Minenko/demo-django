import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Recipe.css';
import ReactStars from 'react-stars';
import {addSelectedRecipeActionCreater,changedRatingActionCreater} from '../../../redux/newRecipeReducer';

class Recipe extends Component {
  render(){

    const ratingChanged = (newRating) => {
      let id = this.props.id;
      let ratingValue = newRating;
      let action = (changedRatingActionCreater(id,ratingValue));
      this.props.store.dispatch(action);
    }
      
    const selectedRecipe = () => {
      let id = this.props.id;
      let img = this.props.img;
      let title = this.props.title;
      let description = this.props.description;
      let action = (addSelectedRecipeActionCreater(id,img,title,description));
      this.props.store.dispatch(action);
    }
    
    return (
      <div className='box-recipe'>
        <NavLink className='recipe' to={/pageShowNewRecipe/ + this.props.id} onClick={ selectedRecipe }>
          <img src={this.props.img}/>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </NavLink>
        <NavLink to={/pageEditRecipe/ + this.props.id} 
                    className='icon-edit'
                    onClick={ selectedRecipe }>
        </NavLink>
        <ReactStars
          className='icon-star'
          count={5}
          value={this.props.ratingValue}
          onChange={ratingChanged}
          size={32}
          color2={'#ffd700'}
        />
      </div>      
    )
  }
}

export default Recipe;
