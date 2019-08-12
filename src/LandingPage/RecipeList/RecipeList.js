import React, { Component } from 'react';
import Recipe from './Recipe';
import img1 from '../../Images/sam-moghadam-mCjTUbpBvwQ-unsplash.png';
import img2 from '../../Images/jannis-brandt-mmsQUgMLqUo-unsplash.png'
import img3 from '../../Images/jennifer-schmidt-zOlQ7lF-3vs-unsplash.png';
import img4 from '../../Images/edgar-castrejon-1SPu0KT-Ejg-unsplash.png';
import img5 from '../../Images/brooke-lark-oaz0raysASk-unsplash.png';
import img6 from '../../Images/ella-olsson-2IxTgsgFi-s-unsplash.png';
import './RecipeList.css';

const recipes = [
			{
				img: img1,
				title: 'griddled peach salad',
				description: 'This salad makes a healthy and filling meal. Enjoy hearty quinoa, creamy avocado and juicy griddled peaches.'
			},
			{
				img: img2,
				title: 'Vegan banana salad',
				description: 'We love a slice of banana bread with crunchy walnuts and sweet dates, warm from the oven.'
			},
			{
				img: img3,
				title: 'Fresh beans & avocado',
				description: 'A vibrant Mexican-style breakfast with fresh avocado and black beans. Give yourself a healthy start.'
			},
			{
				img: img4,
				title: 'Goan-style veg plate',
				description: 'Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. Its healthy, vegan, gluten-free.'
			},
			{
				img: img5,
				title: 'Vegan Thai green curry',
				description: 'Get your kids helping out in the kitchen with this child-friendly vegan Thai green curry.'
			},
			{
				img: img6,
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