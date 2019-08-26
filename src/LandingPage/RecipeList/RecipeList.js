import React, { Component } from 'react';
import Recipe from './Recipe/Recipe';
import './RecipeList.css';

class RecipeList extends Component {

	render() {

		const recipeList = this.props.recipes.map((item) => 
			<Recipe img={item.img} title={item.title} description={item.description} />
		)
		return (
			<section className='section recipeList'>
				{recipeList} 
			</section>
		)
	}
}

export default RecipeList;
