import {createStore} from 'redux';
import newRecipeReducer from './newRecipeReducer';


let store = createStore(newRecipeReducer);

export default store;