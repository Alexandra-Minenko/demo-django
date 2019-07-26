import React, { Component } from 'react';
import Recipe from './Recipe.js';

const recipes = [
			{
				img: 'Images/jannis-brandt-mmsQUgMLqUo-unsplash.png',
				title: 'griddled peach salad',
				description: 'This salad makes a healthy and filling meal. Enjoy hearty quinoa, creamy avocado and juicy griddled peaches.'
			},
			{
				title: 'Vegan banana salad',
				description: 'We love a slice of banana bread with crunchy walnuts and sweet dates, warm from the oven.'
			},
			{
				title: 'Fresh beans & avocado',
				description: 'A vibrant Mexican-style breakfast with fresh avocado and black beans. Give yourself a healthy start.'
			},
			{
				title: 'Goan-style veg plate',
				description: 'Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. Its healthy, vegan, gluten-free.'
			},
			{
				title: 'Vegan Thai green curry',
				description: 'Get your kids helping out in the kitchen with this child-friendly vegan Thai green curry.'
			},
			{
				title: 'peanut butter & fruit',
				description: 'Crisp tortillas, soft smoky roasted veg and crunchy nuts give this simple vegan meal lots of texture.'
			}
];

class RecipeList extends Component {
  render() {
    return (
    <Recipe items={recipes}/>
    );
  }
}

export default RecipeList;
