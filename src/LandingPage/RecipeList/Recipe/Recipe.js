import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
   render(){
    return (
      <React.Fragment>
        <div className='card'>
          <img src={this.props.img} />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>    
      </React.Fragment>
    )
   }
}

export default Recipe;
