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
    case UPDATE_NEW_RECIPE: 
    return {...state, newRecipe: {...state.newRecipe,
                                  newImg: action.newImg,
                                  newTitle: action.newTitle,
                                  newDescription: action.newDescription}}
		case ADD_NEW_RECIPE:
			let newRecipe = {
        id: state.recipes[state.recipes.length - 1].id +1,
	     	img: state.newRecipe.newImg,
	     	title: state.newRecipe.newTitle,
	     	description: state.newRecipe.newDescription
		  };
      return {...state, recipes: [...state.recipes, newRecipe],
              newRecipe: {...state.newRecipe, 
                          newId: '', newImg: '', 
                          newTitle: '', newDescription: ''}}
    case SELECTED_RECIPE:
      {let stateCopy = {...state, 
                       recipes: [...state.recipes], 
                       selectedRecipe: {...state.selectedRecipe}}
        for(var i=0; i<stateCopy.recipes.length; i++) {
          stateCopy.recipes[i] = {...state.recipes[i]};
          if(stateCopy.recipes[i].id == action.id) {
            stateCopy.selectedRecipe.id = action.id;
            stateCopy.selectedRecipe.img = action.img;
            stateCopy.selectedRecipe.title = action.title;
            stateCopy.selectedRecipe.description = action.description;
            return stateCopy;
          }
        }
        const lastRecipe = [stateCopy.recipes.length-1];
        stateCopy.selectedRecipe.id = stateCopy.recipes.lastRecipe.id;
        stateCopy.selectedRecipe.img = stateCopy.recipes.lastRecipe.img;
        stateCopy.selectedRecipe.title = stateCopy.recipes.lastRecipe.title;
        stateCopy.selectedRecipe.description = stateCopy.recipes.lastRecipe.description;
        return stateCopy;
      }
    case UPDATE_SELECTED_RECIPE:
     return {...state, selectedRecipe: 
                        {...state.selectedRecipe,
                          img: action.img,
                          title: action.title,
                          description: action.description
                         }}
    case EDIT_RECIPE:
      {let stateCopy = {...state, 
                       recipes: [...state.recipes], 
                       selectedRecipe: {...state.selectedRecipe}}
        for(var i=0; i<state.recipes.length; i++) {
          stateCopy.recipes[i] = {...state.recipes[i]};
          if(stateCopy.recipes[i].id == stateCopy.selectedRecipe.id) {
            stateCopy.recipes[i].img = action.img;
            stateCopy.recipes[i].title = action.title;
            stateCopy.recipes[i].description = action.description;
            return stateCopy;
          }
        }
      }
    case CHANGED_RATING:
      {let stateCopy = {...state, recipes: [...state.recipes]}
        for(var i=0; i<stateCopy.recipes.length; i++) {
          stateCopy.recipes[i] = {...state.recipes[i]};
          if(stateCopy.recipes[i].id == action.id) {
            if(stateCopy.recipes[i].ratingValue > 0) {
              stateCopy.recipes[i].ratingValue = (stateCopy.recipes[i].ratingValue + action.ratingValue)/2;
              return stateCopy;
            }
            else {
            stateCopy.recipes[i].ratingValue = action.ratingValue;
            return stateCopy;
            } 
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


