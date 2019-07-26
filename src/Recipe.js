import React, { Component } from 'react';

class Recipe extends Component {
  render() {
  
    return (
    	<div className='section'>
    		{this.props.items.map((item, index) => 
				<div key={index} className='card'>
				  <img src={item.img} />
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
    		)}  		
      </div>
    );

  }
}

export default Recipe;
