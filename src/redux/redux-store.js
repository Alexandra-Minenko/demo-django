import {createStore, combineReducers} from 'redux';
import newRecipeReducer from './newRecipeReducer';

let reducers = newRecipeReducer;

let store = createStore(reducers);

export default store;