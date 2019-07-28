import React, { Component } from 'react';
import Recipe from './Recipe';

const recipes = [
			{
				img: './Images/sam-moghadam-mCjTUbpBvwQ-unsplash.png',
				title: 'griddled peach salad',
				description: 'This salad makes a healthy and filling meal. Enjoy hearty quinoa, creamy avocado and juicy griddled peaches.'
			},
			{
				img: './Images/jannis-brandt-mmsQUgMLqUo-unsplash.png',
				title: 'Vegan banana salad',
				description: 'We love a slice of banana bread with crunchy walnuts and sweet dates, warm from the oven.'
			},
			{
				img: './Images/jennifer-schmidt-zOlQ7lF-3vs-unsplash.png',
				title: 'Fresh beans & avocado',
				description: 'A vibrant Mexican-style breakfast with fresh avocado and black beans. Give yourself a healthy start.'
			},
			{
				img: './Images/edgar-castrejon-1SPu0KT-Ejg-unsplash.png',
				title: 'Goan-style veg plate',
				description: 'Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. Its healthy, vegan, gluten-free.'
			},
			{
				img: './Images/brooke-lark-oaz0raysASk-unsplash.png',
				title: 'Vegan Thai green curry',
				description: 'Get your kids helping out in the kitchen with this child-friendly vegan Thai green curry.'
			},
			{
				img: './Images/ella-olsson-2IxTgsgFi-s-unsplash.png',
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
