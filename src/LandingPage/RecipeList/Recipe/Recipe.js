import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Recipe.css';
import ReactStars from 'react-stars';

class Recipe extends Component {
  ratingChanged = (newRating) => {
    let id = this.props.id;
    let ratingValue = newRating;
    this.props.ratingChanged(id,ratingValue);
  }
    
  selectedRecipe = () => {
    let id = this.props.id;
    let img = this.props.img;
    let title = this.props.title;
    let description = this.props.description;
    this.props.selectedRecipe(id,img,title,description);
  }
  render(){
    return (
      <div className='box-recipe'>
        <NavLink className='recipe' 
                 to={/pageShowNewRecipe/ + this.props.id} 
                 onClick={ this.selectedRecipe }>
          <img src={this.props.img}/>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </NavLink>
        <NavLink to={/pageEditRecipe/ + this.props.id} 
                    className='icon-edit'
                    onClick={ this.selectedRecipe }>
        </NavLink>
        <ReactStars
          className='icon-star'
          count={5}
          value={this.props.ratingValue}
          onChange={this.ratingChanged}
          size={32}
          color2={'#ffd700'}
          half={false}
        />
      </div>      
    )
  }
}

export default Recipe;
