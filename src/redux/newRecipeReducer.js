import img1 from '../Images/sam-moghadam-mCjTUbpBvwQ-unsplash.png';
import img2 from '../Images/jannis-brandt-mmsQUgMLqUo-unsplash.png';
import img3 from '../Images/jennifer-schmidt-zOlQ7lF-3vs-unsplash.png';
import img4 from '../Images/edgar-castrejon-1SPu0KT-Ejg-unsplash.png';
import img5 from '../Images/brooke-lark-oaz0raysASk-unsplash.png';
import img6 from '../Images/ella-olsson-2IxTgsgFi-s-unsplash.png';

const ADD_NEW_RECIPE = 'ADD-NEW-RECIPE';
const UPDATE_NEW_RECIPE = 'UPDATE-NEW-RECIPE';
const SELECTED_RECIPE = 'SELECTED-RECIPE';
const UPDATE_SELECTED_RECIPE = 'UPDATE-SELECTED-RECIPE';
const EDIT_RECIPE = 'EDIT-RECIPE';
const CHANGED_RATING ='CHANGED-RATING'

let initialState = {
	recipes: [
    {
      id: 1,
      img: img1,
      title: 'griddled peach salad',
      description: 'This salad makes a healthy and filling meal. Enjoy hearty quinoa, creamy avocado and juicy griddled peaches.',
      ratingValue: 5
    },
    {
      id: 2,
      img: img2,
      title: 'Vegan banana salad',
      description: 'We love a slice of banana bread with crunchy walnuts and sweet dates, warm from the oven.',
      ratingValue: 5
    },
    {
      id: 3,
      img: img3,
      title: 'Fresh beans & avocado',
      description: 'A vibrant Mexican-style breakfast with fresh avocado and black beans. Give yourself a healthy start.',
      ratingValue: 4
    },
    {
      id: 4,
      img: img4,
      title: 'Goan-style veg plate',
      description: 'Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. Its healthy, vegan, gluten-free.',
      ratingValue: 5
    },
    {
      id: 5,
      img: img5,
      title: 'Vegan Thai green curry',
      description: 'Get your kids helping out in the kitchen with this child-friendly vegan Thai green curry.',
      ratingValue: 4
    },
    {
      id: 6,
      img: img6,
      title: 'peanut butter & fruit',
      description: 'Crisp tortillas, soft smoky roasted veg and crunchy nuts give this simple vegan meal lots of texture.',
      ratingValue: 5
    }
  ],
  newRecipe: {
    newId: '',
    newImg: '',
    newTitle: '',
    newDescription: '',
    ratingValue: ''
  },
  selectedRecipe: {
    id: '',
    img: '',
    title: '',
    description: '',
  }
};

const newRecipeReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_NEW_RECIPE:
			let newRecipe = {
        id: state.recipes[state.recipes.length - 1].id +1,
	     	img: state.newImg,
	     	title: state.newTitle,
	     	description: state.newDescription
		  };
      state.recipes.push(newRecipe);
      state.newId = '';
      state.newImg = '';
      state.newTitle = '';
      state.newDescription = '';
      return state;
		case UPDATE_NEW_RECIPE:
			state.newImg = action.newImg;
      state.newTitle = action.newTitle;
      state.newDescription = action.newDescription;
      return state;
    case SELECTED_RECIPE:
      for(var i=0; i<state.recipes.length; i++) {
        if(state.recipes[i].id == action.id) {
          state.selectedRecipe.id = action.id;
          state.selectedRecipe.img = action.img;
          state.selectedRecipe.title = action.title;
          state.selectedRecipe.description = action.description;
          return state;
        }
      }
      state.selectedRecipe.id = state.recipes[state.recipes.length-1].id;
      state.selectedRecipe.img = state.recipes[state.recipes.length-1].img;
      state.selectedRecipe.title = state.recipes[state.recipes.length-1].title;
      state.selectedRecipe.description = state.recipes[state.recipes.length-1].description;
      return state;
    case UPDATE_SELECTED_RECIPE:
      state.selectedRecipe.img = action.img;
      state.selectedRecipe.title = action.title;
      state.selectedRecipe.description = action.description;
      return state;
    case EDIT_RECIPE:
      for(var i=0; i<state.recipes.length; i++) {
        if(state.recipes[i].id == state.selectedRecipe.id) {
          state.recipes[i].img = action.img;
          state.recipes[i].title = action.title;
          state.recipes[i].description = action.description;
          return state;
        }
      }
    case CHANGED_RATING:
      for(var i=0; i<state.recipes.length; i++) {
        if(state.recipes[i].id == action.id) {
          if(state.recipes[i].ratingValue > 0) {
            state.recipes[i].ratingValue = (state.recipes[i].ratingValue + action.ratingValue)/2;
            console.log(state);
            return state;
          }
          else {
          state.recipes[i].ratingValue = action.ratingValue;
          console.log(state);
          return state;
          } 
        } 
      }
    default:
      return state;
	}
}

export const addNewRecipeActionCreater = () => ({type: ADD_NEW_RECIPE})
export const updateNewRecipeActionCreater = (img, title, description) => ({
  type: UPDATE_NEW_RECIPE, newImg:img, newTitle:title, newDescription:description})
export const addSelectedRecipeActionCreater = (id,img, title, description) => ({
  type: SELECTED_RECIPE, id:id, img:img, title:title, description:description})
export const updateSelectedRecipeActionCreater = (img, title, description) => ({
  type: UPDATE_SELECTED_RECIPE, img:img, title:title, description:description})
export const editRecipeActionCreater = (img, title, description) => ({
  type: EDIT_RECIPE, img:img, title:title, description:description})
export const changedRatingActionCreater = (id,ratingValue) => ({
  type: CHANGED_RATING, id:id, ratingValue:ratingValue})

export default newRecipeReducer;


