import React, { Component } from 'react';

class Recipe extends Component {
  render() {
  
    return (
    	<section className='section recipeList'>
    		{this.props.items.map((item, index) => 
				<div key={index} className='card'>
				  <img src={item.img} alt={item.img} />
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
    		)}  		
      </section>
    );

  }
}

export default Recipe;
